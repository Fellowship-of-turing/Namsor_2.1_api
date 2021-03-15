// Require OpenAPI config file
module.exports = {
  titles: {
    general: {
      nameType: '',
      nameType_1: ''
    },
    personal: {
      country: '',
      origin: '',
      gender: '',
      genderGeo: '',
      genderGeoBatch: 'Gender Geo Batch',
      genderBatch: 'Gender Batch',
      parsedGenderBatch: 'Parsed Gender Batch',
      parsedGenderGeoBatch: 'Parsed Gender Geo Batch',
      genderFullGeo: '',
      genderFull: '',
      genderFullBatch: 'Gender Full Batch',
      genderFullGeoBatch: 'Gender Full Geo Batch',
      originBatch: 'Origin Batch',
      countryBatch: 'Country Batch',
      usRaceEthnicity: '',
      usRaceEthnicityZIP5: '',
      usRaceEthnicityBatch: 'US Race & Ethnicity Batch',
      usZipRaceEthnicityBatch: 'US Zip Race & Ethnicity Batch',
      diaspora: '',
      diasporaBatch: 'Diaspora Batch',
      parseNameGeo: '',
      parseNameBatch: 'Parse Name Batch',
      parseNameGeoBatch: 'Parse Name Geo Batch',
      parseName: ''
    },
    admin: {
      stripeConnect: '',
      charge: '',
      paymentInfo: '',
      updatePaymentDefault: '',
      softwareVersion: '',
      namsorCounter: '',
      billingCurrencies: '',
      billingInfo: '',
      updateBillingInfo: '',
      billingHistory: '',
      procureKey: '',
      availablePlans: '',
      availablePlans_1: '',
      apiStatus: '',
      availableServices: '',
      taxonomyClasses: '',
      subscribePlan: '',
      subscribePlanOnBehalf: '',
      removeUserAccount: '',
      removeUserAccountOnBehalf: '',
      updateLimit: '',
      verifyEmail: '',
      verifyRemoveEmail: '',
      stats: '',
      apiUsage: '',
      apiUsageHistory: '',
      apiUsageHistoryAggregate: '',
      sourceStats: '',
      addCredits: '',
      redeployUI: '',
      redeployUI_1: '',
      invalidateCache: '',
      debugLevel: '',
      learnable: '',
      anonymize: '',
      vet: '',
      corporateKey: '',
      shutdown: '',
      flush: '',
      userInfo: ''
    },
    chinese: {
      parseChineseName: '',
      parseChineseNameBatch: '',
      pinyinChineseName: '',
      pinyinChineseNameBatch: '',
      chineseNameMatch: '',
      chineseNameMatchBatch: '',
      genderChineseNamePinyin: '',
      genderChineseNamePinyinBatch: '',
      genderChineseName: '',
      genderChineseNameBatch: '',
      chineseNameCandidates: '',
      chineseNameCandidatesBatch: '',
      chineseNameGenderCandidates: '',
      chineseNameCandidatesGenderBatch: ''
    },
    japanese: {
      parseJapaneseName: '',
      parseJapaneseNameBatch: '',
      japaneseNameKanjiCandidates: '',
      japaneseNameLatinCandidates: '',
      japaneseNameKanjiCandidatesBatch: '',
      japaneseNameLatinCandidatesBatch: '',
      japaneseNameMatch: '',
      japaneseNameMatchFeedbackLoop: '',
      japaneseNameMatchBatch: '',
      genderJapaneseNamePinyin: '',
      genderJapaneseNamePinyinBatch: '',
      genderJapaneseNameFull: '',
      genderJapaneseNameFullBatch: ''
    },
    social: {
      phoneCode: '',
      phoneCodeGeo: '',
      phoneCodeGeoFeedbackLoop: '',
      phoneCodeBatch: '',
      phoneCodeGeoBatch: ''
    }
  }
};







let buildIndex = (route) => {
  let paths = openapi.paths[`${urlPrefix}${route}`].post; // length = 98
  let schemas = openapi.components.schemas; // length = 77
  // If no price set default
  if (!config.routes[route].cost) config.routes[route].cost = 1;

  // Get description
  config.routes[route].summary = paths.summary;

  // Get full path to schemas
  let requestSchemaPath = paths.requestBody.content['application/json'].schema.$ref;
  let responseSchemaPath = paths.responses['200'].content['application/json'].schema.$ref;

  // Get name of the schemas
  let requestSchemaName = requestSchemaPath.slice(prefixLenght, requestSchemaPath.length);
  let responseSchemaName = responseSchemaPath.slice(prefixLenght, responseSchemaPath.length);

  // Warn user of unhandled req / res data structure
  let unhandledStructure = [];
  if (
    Object.keys(schemas[requestSchemaName].properties).length !== 1 ||
    Object.keys(schemas[requestSchemaName].properties) !== 'personalNames'
  ) {
    unhandledStructure.push(`\u001b[31mERROR ! - Unhandled request data structure \u001b[m\n${requestSchemaName}`)
  };
  if (
    Object.keys(schemas[responseSchemaName].properties).length !== 1 ||
    Object.keys(schemas[responseSchemaName].properties) !== 'personalNames'
  ) {
    unhandledStructure.push(`\u001b[31mERROR ! - Unhandled response data structure \u001b[m\n${responseSchemaName}`)
  };
  // Get full path to sub schemas
  let requestSubSchemaPath = schemas[requestSchemaName].properties.personalNames.items.$ref;
  let responseSubSchemaPath = schemas[responseSchemaName].properties.personalNames.items.$ref;

  // Get name of the sub schemas
  let requestSubSchemaName = requestSubSchemaPath.slice(prefixLenght, requestSubSchemaPath.length);
  let responseSubSchemaName = responseSubSchemaPath.slice(prefixLenght, responseSubSchemaPath.length);

  // Get data schemas
  let objectFields = [];
  let requestSchema = JSON.parse(JSON.stringify(schemas[requestSubSchemaName].properties));
  let responseSchema = JSON.parse(JSON.stringify(schemas[responseSubSchemaName].properties));
  Object.keys(requestSchema).forEach(key => {
    if (requestSchema[key].xml) delete requestSchema[key].xml;
  });
  Object.keys(responseSchema).forEach(key => {
    if (responseSchema[key].xml) delete responseSchema[key].xml;
    if (responseSchema[key].$ref) objectFields.push(key);
  });

  // Exceptions handling
  objectFields.forEach(field => {
    let fieldSubSchemaPath = responseSchema[field].$ref;
    let fieldSubSchemaName = fieldSubSchemaPath.slice(prefixLenght, fieldSubSchemaPath.length);
    responseSchema[field] = schemas[fieldSubSchemaName].properties;
  });

  // Check Required
  let requiredNotFound = [];
  config.routes[route].required.forEach(requiredField => {
    if (!requestSchema[requiredField]) requiredNotFound.push(requiredField);
  });
  if (requiredNotFound.length) {
    console.log(`\u001b[31mERROR ! - Required in ${route} unfound:\u001b[m\n${requiredNotFound}`);
  };

  // Complete main data schemes
  config.routes[route].request = { personalNames: requestSchema };
  config.routes[route].response = { "200": { personalNames: responseSchema } };

  // Get error responses
  config.errorResponses.forEach(errCode => {
    if (paths.responses[errCode]) {
      config.routes[route].response[errCode] = paths.responses[errCode];
    };
  });
};
