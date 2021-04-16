let ex = {
  '/api2/json/nameType/{properNoun}': {
    http: 'get',
    summary: 'Infer the likely type of a proper noun (personal name, brand name, place name etc.)',
    tag: 'general',
    request: {
      properNoun: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      commonType: 'String',
      commonTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'ProperNounCategorizedOut'
  },
  '/api2/json/country/{personalNameFull}': {
    http: 'get',
    summary: 'Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.',
    tag: 'personal',
    request: {
      personalNameFull: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      score: 'Number',
      country: 'String',
      countryAlt: 'String',
      region: 'String',
      topRegion: 'String',
      subRegion: 'String',
      countriesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameGeoOut'
  },
  '/api2/json/origin/{firstName}/{lastName}': {
    http: 'get',
    summary: "Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.",
    tag: 'personal',
    request: {
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryOrigin: 'String',
      countryOriginAlt: 'String',
      countriesOriginTop: 'Array',
      score: 'Number',
      regionOrigin: 'String',
      topRegionOrigin: 'String',
      subRegionOrigin: 'String',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameOriginedOut'
  },
  '/api2/json/stripeConnect': {
    http: 'get',
    summary: 'Connects a Stripe Account.',
    tag: 'admin',
    request: {
      scope: 'String',
      code: 'String',
      error: 'String',
      error_description: 'String'
    },
    response: {}
  },
  '/api2/json/charge': {
    http: 'post',
    summary: 'Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.',
    tag: 'admin',
    request: {
      stripeToken: 'String',
      stripeEmail: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/paymentInfo/{token}': {
    http: 'get',
    summary: 'Get the Stripe payment information associated with the current google auth session token.',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/updatePaymentDefault/{defautSourceId}/{token}': {
    http: 'get',
    summary: 'Update the default Stripe card associated with the current google auth session token.',
    tag: 'admin',
    request: {
      defautSourceId: 'String',
      token: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/softwareVersion': {
    http: 'get',
    summary: 'Get the current software version',
    tag: 'admin',
    request: {},
    response: {
      softwareNameAndVersion: 'String',
      softwareVersion: 'Array'
    },
    responseSchemaName: 'SoftwareVersionOut'
  },
  '/api2/json/namsorCounter': {
    http: 'get',
    summary: 'Get the overall API counter',
    tag: 'admin',
    request: {},
    response: {
      softwareNameAndVersion: 'String',
      softwareVersion: 'Array'
    },
    responseSchemaName: 'SoftwareVersionOut'
  },
  '/api2/json/billingCurrencies': {
    http: 'get',
    summary: 'List possible currency options for billing (USD, EUR, GBP, ...)',
    tag: 'admin',
    request: {},
    response: {
      currenciesIso3: 'Array'
    },
    responseSchemaName: 'CurrenciesOut'
  },
  '/api2/json/billingInfo/{token}': {
    http: 'get',
    summary: 'Read the billing information (company name, address, phone, vat ID)',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      billingEmail: 'String',
      preferredCurrency: 'String',
      customerName: 'String',
      customerPhone: 'String',
      addressLine1: 'String',
      addressLine2: 'String',
      addressCity: 'String',
      addressPostalCode: 'String',
      addressState: 'String',
      addressCountry: 'String',
      vatID: 'String'
    },
    responseSchemaName: 'BillingInfoInOut'
  },
  '/api2/json/updateBillingInfo/{token}': {
    http: 'post',
    summary: 'Sets or update the billing information (company name, address, phone, vat ID)',
    tag: 'admin',
    request: {
      billingEmail: 'String',
      preferredCurrency: 'String',
      customerName: 'String',
      customerPhone: 'String',
      addressLine1: 'String',
      addressLine2: 'String',
      addressCity: 'String',
      addressPostalCode: 'String',
      addressState: 'String',
      addressCountry: 'String',
      vatID: 'String'
    },
    response: {
      billingEmail: 'String',
      preferredCurrency: 'String',
      customerName: 'String',
      customerPhone: 'String',
      addressLine1: 'String',
      addressLine2: 'String',
      addressCity: 'String',
      addressPostalCode: 'String',
      addressState: 'String',
      addressCountry: 'String',
      vatID: 'String'
    },
    requestSchemaName: 'BillingInfoInOut',
    responseSchemaName: 'BillingInfoInOut'
  },
  '/api2/json/billingHistory/{token}': {
    http: 'get',
    summary: 'Read the history billing information (invoices paid via Stripe or manually).',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      stripeInvoices: 'Array',
      corporateInvoices: 'Array'
    },
    responseSchemaName: 'BillingHistoryOut'
  },
  '/api2/json/procureKey/{token}': {
    http: 'get',
    summary: 'Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/availablePlans/{token}': {
    http: 'get',
    summary: "List all available plans in the user's preferred currency.",
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      usageRatioForDupplicates: 'Integer',
      currencyIso3: 'String',
      currencySymbol: 'String',
      plans: 'Array'
    },
    responseSchemaName: 'APIPlansOut'
  },
  '/api2/json/availablePlans': {
    http: 'get',
    summary: 'List all available plans in the default currency (usd).',
    tag: 'admin',
    request: {},
    response: {
      usageRatioForDupplicates: 'Integer',
      currencyIso3: 'String',
      currencySymbol: 'String',
      plans: 'Array'
    },
    responseSchemaName: 'APIPlansOut'
  },
  '/api2/json/apiStatus': {
    http: 'get',
    summary: 'Prints the current status of the classifiers.',
    tag: 'admin',
    request: {},
    response: {
      usageRatioForDupplicates: 'Integer',
      currencyIso3: 'String',
      currencySymbol: 'String',
      plans: 'Array'
    },
    responseSchemaName: 'APIPlansOut'
  },
  '/api2/json/apiServices': {
    http: 'get',
    summary: 'List of API services and usage cost in Units (default is 1=ONE Unit).',
    tag: 'admin',
    request: {},
    response: {
      usageRatioForDupplicates: 'Integer',
      currencyIso3: 'String',
      currencySymbol: 'String',
      plans: 'Array'
    },
    responseSchemaName: 'APIPlansOut'
  },
  '/api2/json/taxonomyClasses/{classifierName}': {
    http: 'get',
    summary: 'Print the taxonomy classes valid for the given classifier.',
    tag: 'admin',
    request: {
      classifierName: 'String'
    },
    response: {
      usageRatioForDupplicates: 'Integer',
      currencyIso3: 'String',
      currencySymbol: 'String',
      plans: 'Array'
    },
    responseSchemaName: 'APIPlansOut'
  },
  '/api2/json/subscribePlan/{planName}/{token}': {
    http: 'get',
    summary: "Subscribe to a give API plan, using the user's preferred or default currency.",
    tag: 'admin',
    request: {
      planName: 'String',
      token: 'String'
    },
    response: {
      apiKey: 'String',
      planStarted: 'Integer',
      priorPlanStarted: 'Integer',
      planEnded: 'Integer',
      taxRate: 'Number',
      planName: 'String',
      planBaseFeesKey: 'String',
      planStatus: 'String',
      planQuota: 'Integer',
      priceUSD: 'Number',
      priceOverageUSD: 'Number',
      price: 'Number',
      priceOverage: 'Number',
      currency: 'String',
      currencyFactor: 'Number',
      stripeCustomerId: 'String',
      stripeStatus: 'String',
      stripeSubscription: 'String',
      userId: 'String'
    },
    responseSchemaName: 'APIPlanSubscriptionOut'
  },
  '/api2/json/subscribePlanOnBehalf/{planName}/{apiKey}': {
    http: 'get',
    summary: "Subscribe to a give API plan, using the user's preferred or default currency (admin only).",
    tag: 'admin',
    request: {
      planName: 'String',
      apiKey: 'String'
    },
    response: {
      apiKey: 'String',
      planStarted: 'Integer',
      priorPlanStarted: 'Integer',
      planEnded: 'Integer',
      taxRate: 'Number',
      planName: 'String',
      planBaseFeesKey: 'String',
      planStatus: 'String',
      planQuota: 'Integer',
      priceUSD: 'Number',
      priceOverageUSD: 'Number',
      price: 'Number',
      priceOverage: 'Number',
      currency: 'String',
      currencyFactor: 'Number',
      stripeCustomerId: 'String',
      stripeStatus: 'String',
      stripeSubscription: 'String',
      userId: 'String'
    },
    responseSchemaName: 'APIPlanSubscriptionOut'
  },
  '/api2/json/removeUserAccount/{token}': {
    http: 'get',
    summary: 'Remove the user account.',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      apiKey: 'String',
      planStarted: 'Integer',
      priorPlanStarted: 'Integer',
      planEnded: 'Integer',
      taxRate: 'Number',
      planName: 'String',
      planBaseFeesKey: 'String',
      planStatus: 'String',
      planQuota: 'Integer',
      priceUSD: 'Number',
      priceOverageUSD: 'Number',
      price: 'Number',
      priceOverage: 'Number',
      currency: 'String',
      currencyFactor: 'Number',
      stripeCustomerId: 'String',
      stripeStatus: 'String',
      stripeSubscription: 'String',
      userId: 'String'
    },
    responseSchemaName: 'APIPlanSubscriptionOut'
  },
  '/api2/json/removeUserAccountOnBehalf/{apiKey}': {
    http: 'get',
    summary: 'Remove (on behalf) a user account.',
    tag: 'admin',
    request: {
      apiKey: 'String'
    },
    response: {
      apiKey: 'String',
      planStarted: 'Integer',
      priorPlanStarted: 'Integer',
      planEnded: 'Integer',
      taxRate: 'Number',
      planName: 'String',
      planBaseFeesKey: 'String',
      planStatus: 'String',
      planQuota: 'Integer',
      priceUSD: 'Number',
      priceOverageUSD: 'Number',
      price: 'Number',
      priceOverage: 'Number',
      currency: 'String',
      currencyFactor: 'Number',
      stripeCustomerId: 'String',
      stripeStatus: 'String',
      stripeSubscription: 'String',
      userId: 'String'
    },
    responseSchemaName: 'APIPlanSubscriptionOut'
  },
  '/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}': {
    http: 'get',
    summary: "Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).",
    tag: 'admin',
    request: {
      usageLimit: 'Integer',
      hardOrSoft: 'Boolean',
      token: 'String'
    },
    response: {
      overageExclTax: 'Number',
      overageInclTax: 'Number',
      overageCurrency: 'String',
      overageQuantity: 'Integer'
    },
    responseSchemaName: 'APIPeriodUsageOut'
  },
  '/api2/json/verifyEmail/{emailToken}': {
    http: 'get',
    summary: 'Verifies an email, based on token sent to that email',
    tag: 'admin',
    request: {
      emailToken: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/verifyRemoveEmail/{emailToken}': {
    http: 'get',
    summary: 'Verifies an email, based on token sent to that email',
    tag: 'admin',
    request: {
      emailToken: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/stats': {
    http: 'get',
    summary: 'Print basic system statistics.',
    tag: 'admin',
    request: {},
    response: {
      cacheMetrics: 'Array',
      classifierMetrics: 'Array',
      sourceMetrics: 'Array',
      totalMem: 'Integer',
      freeMem: 'Integer',
      maxMem: 'Integer'
    },
    responseSchemaName: 'SystemMetricsOut'
  },
  '/api2/json/apiUsage': {
    http: 'get',
    summary: 'Print current API usage.',
    tag: 'admin',
    request: {},
    response: {
      overageExclTax: 'Number',
      overageInclTax: 'Number',
      overageCurrency: 'String',
      overageQuantity: 'Integer'
    },
    responseSchemaName: 'APIPeriodUsageOut'
  },
  '/api2/json/apiUsageHistory': {
    http: 'get',
    summary: 'Print historical API usage.',
    tag: 'admin',
    request: {},
    response: {
      overageExclTax: 'Number',
      overageInclTax: 'Number',
      overageCurrency: 'String',
      overageQuantity: 'Integer'
    },
    responseSchemaName: 'APIPeriodUsageOut'
  },
  '/api2/json/apiUsageHistoryAggregate': {
    http: 'get',
    summary: 'Print historical API usage (in an aggregated view, by service, by day/hour/min).',
    tag: 'admin',
    request: {},
    response: {
      overageExclTax: 'Number',
      overageInclTax: 'Number',
      overageCurrency: 'String',
      overageQuantity: 'Integer'
    },
    responseSchemaName: 'APIPeriodUsageOut'
  },
  '/api2/json/sourceStats/{source}': {
    http: 'get',
    summary: 'Print basic source statistics.',
    tag: 'admin',
    request: {
      source: 'String'
    },
    response: {
      cacheMetrics: 'Array',
      classifierMetrics: 'Array',
      sourceMetrics: 'Array',
      totalMem: 'Integer',
      freeMem: 'Integer',
      maxMem: 'Integer'
    },
    responseSchemaName: 'SystemMetricsOut'
  },
  '/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}': {
    http: 'get',
    summary: 'Add usage credits to an API Key.',
    tag: 'admin',
    request: {
      apiKey: 'String',
      usageCredits: 'Integer',
      userMessage: 'String'
    },
    response: {
      cacheMetrics: 'Array',
      classifierMetrics: 'Array',
      sourceMetrics: 'Array',
      totalMem: 'Integer',
      freeMem: 'Integer',
      maxMem: 'Integer'
    },
    responseSchemaName: 'SystemMetricsOut'
  },
  '/api2/json/invalidateCache': {
    http: 'get',
    summary: 'Invalidate system caches.',
    tag: 'admin',
    request: {},
    response: {}
  },
  '/api2/json/debugLevel/{logger}/{level}': {
    http: 'get',
    summary: 'Update debug level for a classifier',
    tag: 'admin',
    request: {
      logger: 'String',
      level: 'String'
    },
    response: {}
  },
  '/api2/json/learnable/{source}/{learnable}': {
    http: 'get',
    summary: 'Activate/deactivate learning from a source.',
    tag: 'admin',
    request: {
      source: 'String',
      learnable: 'Boolean'
    },
    response: {}
  },
  '/api2/json/anonymize/{source}/{anonymized}': {
    http: 'get',
    summary: 'Activate/deactivate anonymization for a source.',
    tag: 'admin',
    request: {
      source: 'String',
      anonymized: 'Boolean'
    },
    response: {}
  },
  '/api2/json/vetting/{source}/{vetted}': {
    http: 'get',
    summary: 'Vetting of a source.',
    tag: 'admin',
    request: {
      source: 'String',
      vetted: 'Boolean'
    },
    response: {}
  },
  '/api2/json/corporateKey/{apiKey}/{corporate}': {
    http: 'get',
    summary: 'Setting an API Key to a corporate status.',
    tag: 'admin',
    request: {
      apiKey: 'String',
      corporate: 'Boolean'
    },
    response: {}
  },
  '/api2/json/nameTypeGeo/{properNoun}/{countryIso2}': {
    http: 'get',
    summary: 'Infer the likely type of a proper noun (personal name, brand name, place name etc.)',
    tag: 'general',
    request: {
      properNoun: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      commonType: 'String',
      commonTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'ProperNounCategorizedOut'
  },
  '/api2/json/nameTypeBatch': {
    http: 'post',
    summary: 'Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)',
    tag: 'general',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      commonType: 'String',
      commonTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'NameIn',
    responseSchemaName: 'ProperNounCategorizedOut'
  },
  '/api2/json/nameTypeGeoBatch': {
    http: 'post',
    summary: 'Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)',
    tag: 'general',
    request: {
      id: 'String',
      name: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      commonType: 'String',
      commonTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'NameGeoIn',
    responseSchemaName: 'ProperNounCategorizedOut'
  },
  '/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}': {
    http: 'get',
    summary: 'Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)',
    tag: 'personal',
    request: {
      countryIso2From: 'String',
      firstNameFrom: 'String',
      lastNameFrom: 'String',
      countryIso2To: 'String',
      firstNameTo: 'String',
      lastNameTo: 'String'
    },
    response: {
      id: 'String',
      script: 'String',
      category: 'String'
    },
    responseSchemaName: 'CorridorOut'
  },
  '/api2/json/corridorBatch': {
    http: 'post',
    summary: 'Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)',
    tag: 'personal',
    request: {
      id: 'String'
    },
    response: {
      id: 'String',
      script: 'String',
      category: 'String'
    },
    requestSchemaName: 'CorridorIn',
    responseSchemaName: 'CorridorOut'
  },
  '/api2/json/gender/{firstName}/{lastName}': {
    http: 'get',
    summary: 'Infer the likely gender of a name.',
    tag: 'personal',
    request: {
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}': {
    http: 'get',
    summary: 'Infer the likely gender of a name, given a local context (ISO2 country code).',
    tag: 'personal',
    request: {
      firstName: 'String',
      lastName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderGeoBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameGeoIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 names, detecting automatically the cultural context.',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/parsedGenderBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      prefixOrTitle: 'String',
      suffix: 'String',
      middleName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'ParsedFullNameIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/parsedGenderGeoBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      prefixOrTitle: 'String',
      suffix: 'String',
      middleName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'ParsedFullNameGeoIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderFullGeo/{fullName}/{countryIso2}': {
    http: 'get',
    summary: 'Infer the likely gender of a full name, given a local context (ISO2 country code).',
    tag: 'personal',
    request: {
      fullName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/genderFull/{fullName}': {
    http: 'get',
    summary: 'Infer the likely gender of a full name, ex. John H. Smith',
    tag: 'personal',
    request: {
      fullName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/genderFullBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 full names, detecting automatically the cultural context.',
    tag: 'personal',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/genderFullGeoBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).',
    tag: 'personal',
    request: {
      id: 'String',
      name: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameGeoIn',
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/originBatch': {
    http: 'post',
    summary: 'Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryOrigin: 'String',
      countryOriginAlt: 'String',
      countriesOriginTop: 'Array',
      score: 'Number',
      regionOrigin: 'String',
      topRegionOrigin: 'String',
      subRegionOrigin: 'String',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'FirstLastNameOriginedOut'
  },
  '/api2/json/countryBatch': {
    http: 'post',
    summary: 'Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.',
    tag: 'personal',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      score: 'Number',
      country: 'String',
      countryAlt: 'String',
      region: 'String',
      topRegion: 'String',
      subRegion: 'String',
      countriesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameGeoOut'
  },
  '/api2/json/usRaceEthnicity/{firstName}/{lastName}': {
    http: 'get',
    summary: "Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
    tag: 'personal',
    request: {
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      raceEthnicityAlt: 'String',
      raceEthnicity: 'String',
      score: 'Number',
      raceEthnicitiesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameUSRaceEthnicityOut'
  },
  '/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}': {
    http: 'get',
    summary: "Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
    tag: 'personal',
    request: {
      firstName: 'String',
      lastName: 'String',
      zip5Code: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      raceEthnicityAlt: 'String',
      raceEthnicity: 'String',
      score: 'Number',
      raceEthnicitiesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameUSRaceEthnicityOut'
  },
  '/api2/json/usRaceEthnicityBatch': {
    http: 'post',
    summary: "Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      raceEthnicityAlt: 'String',
      raceEthnicity: 'String',
      score: 'Number',
      raceEthnicitiesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameGeoIn',
    responseSchemaName: 'FirstLastNameUSRaceEthnicityOut'
  },
  '/api2/json/usZipRaceEthnicityBatch': {
    http: 'post',
    summary: "Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).",
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryIso2: 'String',
      zipCode: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      raceEthnicityAlt: 'String',
      raceEthnicity: 'String',
      score: 'Number',
      raceEthnicitiesTop: 'Array',
      probabilityCalibrated: 'Number',
      probabilityAltCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameGeoZippedIn',
    responseSchemaName: 'FirstLastNameUSRaceEthnicityOut'
  },
  '/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}': {
    http: 'get',
    summary: 'Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)',
    tag: 'personal',
    request: {
      countryIso2: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      score: 'Number',
      ethnicityAlt: 'String',
      ethnicity: 'String',
      lifted: 'Boolean',
      countryIso2: 'String',
      ethnicitiesTop: 'Array',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameDiasporaedOut'
  },
  '/api2/json/diasporaBatch': {
    http: 'post',
    summary: 'Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)',
    tag: 'personal',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      score: 'Number',
      ethnicityAlt: 'String',
      ethnicity: 'String',
      lifted: 'Boolean',
      countryIso2: 'String',
      ethnicitiesTop: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameGeoIn',
    responseSchemaName: 'FirstLastNameDiasporaedOut'
  },
  '/api2/json/parseName/{nameFull}/{countryIso2}': {
    http: 'get',
    summary: 'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.',
    tag: 'personal',
    request: {
      nameFull: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/parseNameBatch': {
    http: 'post',
    summary: 'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.',
    tag: 'personal',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/parseNameGeoBatch': {
    http: 'post',
    summary: 'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ',
    tag: 'personal',
    request: {
      id: 'String',
      name: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameGeoIn',
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/parseChineseName/{chineseName}': {
    http: 'get',
    summary: 'Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)',
    tag: 'chinese',
    request: {
      chineseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/parseChineseNameBatch': {
    http: 'post',
    summary: 'Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).',
    tag: 'chinese',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/pinyinChineseName/{chineseName}': {
    http: 'get',
    summary: 'Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)',
    tag: 'chinese',
    request: {
      chineseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/pinyinChineseNameBatch': {
    http: 'post',
    summary: 'Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).',
    tag: 'chinese',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}': {
    http: 'get',
    summary: 'Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming',
    tag: 'chinese',
    request: {
      chineseSurnameLatin: 'String',
      chineseGivenNameLatin: 'String',
      chineseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/chineseNameMatchBatch': {
    http: 'post',
    summary: 'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming',
    tag: 'chinese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}': {
    http: 'get',
    summary: 'Infer the likely gender of a Chinese name in LATIN (Pinyin).',
    tag: 'chinese',
    request: {
      chineseSurnameLatin: 'String',
      chineseGivenNameLatin: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderChineseNamePinyinBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).',
    tag: 'chinese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderChineseName/{chineseName}': {
    http: 'get',
    summary: 'Infer the likely gender of a Chinese full name ex. 王晓明',
    tag: 'chinese',
    request: {
      chineseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/genderChineseNameBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 full names ex. 王晓明',
    tag: 'chinese',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}': {
    http: 'get',
    summary: 'Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming',
    tag: 'chinese',
    request: {
      chineseSurnameLatin: 'String',
      chineseGivenNameLatin: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/chineseNameCandidatesBatch': {
    http: 'post',
    summary: 'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming',
    tag: 'chinese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}': {
    http: 'get',
    summary: "Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')",
    tag: 'chinese',
    request: {
      chineseSurnameLatin: 'String',
      chineseGivenNameLatin: 'String',
      knownGender: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/chineseNameCandidatesGenderBatch': {
    http: 'post',
    summary: 'Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.',
    tag: 'chinese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/parseJapaneseName/{japaneseName}': {
    http: 'get',
    summary: 'Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae',
    tag: 'japanese',
    request: {
      japaneseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/parseJapaneseNameBatch': {
    http: 'post',
    summary: 'Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae ',
    tag: 'japanese',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameParsedOut'
  },
  '/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}': {
    http: 'get',
    summary: 'Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.',
    tag: 'japanese',
    request: {
      japaneseSurnameLatin: 'String',
      japaneseGivenNameLatin: 'String',
      knownGender: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}': {
    http: 'get',
    summary: 'Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      japaneseSurnameLatin: 'String',
      japaneseGivenNameLatin: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}': {
    http: 'get',
    summary: 'Romanize japanese name, based on the name in Kanji.',
    tag: 'japanese',
    request: {
      japaneseSurnameKanji: 'String',
      japaneseGivenNameKanji: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/japaneseNameKanjiCandidatesBatch': {
    http: 'post',
    summary: 'Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/japaneseNameGenderKanjiCandidatesBatch': {
    http: 'post',
    summary: 'Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/japaneseNameLatinCandidatesBatch': {
    http: 'post',
    summary: 'Romanize japanese names, based on the name in KANJI',
    tag: 'japanese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}': {
    http: 'get',
    summary: 'Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      japaneseSurnameLatin: 'String',
      japaneseGivenNameLatin: 'String',
      japaneseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}': {
    http: 'get',
    summary: 'Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      japaneseSurnameLatin: 'String',
      japaneseGivenNameLatin: 'String',
      japaneseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      latinName: 'String',
      originalName: 'String',
      sourceLanguage: 'String',
      targetLanguage: 'String',
      sourceScript: 'String',
      targetScript: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'RomanizedNameOut'
  },
  '/api2/json/japaneseNameMatchBatch': {
    http: 'post',
    summary: 'Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae',
    tag: 'japanese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      orderOption: 'String',
      matchCandidates: 'Array',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'NameMatchCandidatesOut'
  },
  '/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}': {
    http: 'get',
    summary: 'Infer the likely gender of a Japanese name in LATIN (Pinyin).',
    tag: 'japanese',
    request: {
      japaneseSurname: 'String',
      japaneseGivenName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderJapaneseNameBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).',
    tag: 'japanese',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNameIn',
    responseSchemaName: 'FirstLastNameGenderedOut'
  },
  '/api2/json/genderJapaneseNameFull/{japaneseName}': {
    http: 'get',
    summary: 'Infer the likely gender of a Japanese full name ex. 王晓明',
    tag: 'japanese',
    request: {
      japaneseName: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/genderJapaneseNameFullBatch': {
    http: 'post',
    summary: 'Infer the likely gender of up to 100 full names',
    tag: 'japanese',
    request: {
      id: 'String',
      name: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      likelyGender: 'String',
      genderScale: 'Number',
      score: 'Number',
      probabilityCalibrated: 'Number',
      category: 'String'
    },
    requestSchemaName: 'PersonalNameIn',
    responseSchemaName: 'PersonalNameGenderedOut'
  },
  '/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}': {
    http: 'get',
    summary: 'Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.',
    tag: 'social',
    request: {
      firstName: 'String',
      lastName: 'String',
      phoneNumber: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      internationalPhoneNumberVerified: 'String',
      phoneCountryIso2Verified: 'String',
      phoneCountryCode: 'Integer',
      phoneCountryCodeAlt: 'Integer',
      phoneCountryIso2: 'String',
      phoneCountryIso2Alt: 'String',
      originCountryIso2: 'String',
      originCountryIso2Alt: 'String',
      phoneNumber: 'String',
      verified: 'Boolean',
      score: 'Number',
      countryIso2: 'String',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNamePhoneCodedOut'
  },
  '/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}': {
    http: 'get',
    summary: 'Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).',
    tag: 'social',
    request: {
      firstName: 'String',
      lastName: 'String',
      phoneNumber: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      internationalPhoneNumberVerified: 'String',
      phoneCountryIso2Verified: 'String',
      phoneCountryCode: 'Integer',
      phoneCountryCodeAlt: 'Integer',
      phoneCountryIso2: 'String',
      phoneCountryIso2Alt: 'String',
      originCountryIso2: 'String',
      originCountryIso2Alt: 'String',
      phoneNumber: 'String',
      verified: 'Boolean',
      score: 'Number',
      countryIso2: 'String',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNamePhoneCodedOut'
  },
  '/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}': {
    http: 'get',
    summary: 'Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).',
    tag: 'social',
    request: {
      firstName: 'String',
      lastName: 'String',
      phoneNumber: 'String',
      phoneNumberE164: 'String',
      countryIso2: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      internationalPhoneNumberVerified: 'String',
      phoneCountryIso2Verified: 'String',
      phoneCountryCode: 'Integer',
      phoneCountryCodeAlt: 'Integer',
      phoneCountryIso2: 'String',
      phoneCountryIso2Alt: 'String',
      originCountryIso2: 'String',
      originCountryIso2Alt: 'String',
      phoneNumber: 'String',
      verified: 'Boolean',
      score: 'Number',
      countryIso2: 'String',
      category: 'String'
    },
    responseSchemaName: 'FirstLastNamePhoneCodedOut'
  },
  '/api2/json/phoneCodeBatch': {
    http: 'post',
    summary: 'Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.',
    tag: 'social',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      phoneNumber: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      internationalPhoneNumberVerified: 'String',
      phoneCountryIso2Verified: 'String',
      phoneCountryCode: 'Integer',
      phoneCountryCodeAlt: 'Integer',
      phoneCountryIso2: 'String',
      phoneCountryIso2Alt: 'String',
      originCountryIso2: 'String',
      originCountryIso2Alt: 'String',
      phoneNumber: 'String',
      verified: 'Boolean',
      score: 'Number',
      countryIso2: 'String',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNamePhoneNumberIn',
    responseSchemaName: 'FirstLastNamePhoneCodedOut'
  },
  '/api2/json/phoneCodeGeoBatch': {
    http: 'post',
    summary: 'Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).',
    tag: 'social',
    request: {
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      phoneNumber: 'String',
      countryIso2: 'String',
      countryIso2Alt: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      firstName: 'String',
      lastName: 'String',
      internationalPhoneNumberVerified: 'String',
      phoneCountryIso2Verified: 'String',
      phoneCountryCode: 'Integer',
      phoneCountryCodeAlt: 'Integer',
      phoneCountryIso2: 'String',
      phoneCountryIso2Alt: 'String',
      originCountryIso2: 'String',
      originCountryIso2Alt: 'String',
      phoneNumber: 'String',
      verified: 'Boolean',
      score: 'Number',
      countryIso2: 'String',
      category: 'String'
    },
    requestSchemaName: 'FirstLastNamePhoneNumberGeoIn',
    responseSchemaName: 'FirstLastNamePhoneCodedOut'
  },
  '/api2/json/shutdown': {
    http: 'get',
    summary: 'Stop learning and shutdown system.',
    tag: 'admin',
    request: {},
    response: {}
  },
  '/api2/json/flush': {
    http: 'get',
    summary: 'Flush counters.',
    tag: 'admin',
    request: {},
    response: {}
  },
  '/api2/json/userInfo/{token}': {
    http: 'get',
    summary: 'Get the user profile associated with the current google auth session token.',
    tag: 'admin',
    request: {
      token: 'String'
    },
    response: {
      apiKey: 'String',
      userId: 'String',
      admin: 'Boolean',
      vetted: 'Boolean',
      learnable: 'Boolean',
      anonymized: 'Boolean',
      partner: 'Boolean',
      striped: 'Boolean',
      corporate: 'Boolean',
      disabled: 'Boolean'
    },
    responseSchemaName: 'APIKeyOut'
  },
  '/api2/json/parseName/{nameFull}': {
    http: 'get',
    summary: 'Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. ',
    tag: 'personal',
    request: {
      nameFull: 'String'
    },
    response: {
      script: 'String',
      id: 'String',
      name: 'String',
      nameParserType: 'String',
      nameParserTypeAlt: 'String',
      score: 'Number',
      category: 'String'
    },
    responseSchemaName: 'PersonalNameParsedOut'
  }
}