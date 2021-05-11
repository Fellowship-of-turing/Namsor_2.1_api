module.exports = {
  "/api2/json/nameType/{properNoun}": {
    summary: "Detect if a proper noun is a personal name or a public name",
    request: {
      properNoun: {
        description: "The name of a person, a brand or object that is spelled with a capital letter",
        example: "John Smith, Namsor, the White House",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      commonType: {
        description: "The type of the analyzed name"
      },
      commonTypeAlt: {
        description: "The alternative  type of the analyzed name",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "ProperNounCategorizedOut",
  },
  "/api2/json/country/{PersonalNameFull}": {
    summary: "Detect the likely country of residence of a full name, or a last name.",
    request: {
      PersonalNameFull: {
        newName: "name",
        description: "A full name or a last name",
        example: "John Smith; Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      country: {
        description: "The country code, in ISO 2 format",
        example: "US; FR",
      },
      countryAlt: {
        description: "The alternative country code, in ISO 2 format",
        example: "US; FR",
      },
      region: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      topRegion: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      subRegion: {
        description: "The region of the continent",
        example: "Eastern Africa, Western Europe",
      },
      countriesTop: {
        description: "The 10 likely country codes of the name",
        example: "US, FR",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "PersonalNameGeoOut",
  },
  "/api2/json/origin/{firstName}/{lastName}": {
    summary: "Detect the likely country of origin of a first name and last name structure. For countries like U.S.A, Canada, Australia or New-Zealand and other melting-pots, refer to 'diaspora'.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      countryOrigin: {
        description: "The code of the country of origin, in ISO 2 format",
        example: "US; FR",
      },
      countryOriginAlt: {
        description: "The code of the alternative country of origin, in ISO 2 format",
        example: "US; FR",
      },
      countriesOriginTop: {
        description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
        example: "US; FR",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      regionOrigin: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      topRegion: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      subRegionOrigin: {
        description: "The region of the continent",
        example: "Eastern Africa, Western Europe",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameOriginedOut",
  },
  "/api2/json/softwareVersion": {
    summary: "Get the current version of the Namsor software",
    request: {},
    response: {
      softwareNameAndVersion: {
        description: "The name of the API version"
      },
      softwareVersion: {
        description: "An array of the major, minor and patch version",
      },
    },
    responseSchemaName: "SoftwareVersionOut",
  },
  "/api2/json/apiStatus": {
    summary: "Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices. ",
    request: {},
    response: {
      softwareVersion: {
        softwareNameAndVersion: {
          description: "The name of the API version"
        },
        softwareVersion: {
          description: "An array of the major, minor and patch version",
        },
      },
      classifiers: "Array",
    },
    responseSchemaName: "APIClassifiersStatusOut",
  },
  "/api2/json/apiServices": {
    summary: "Receive a list of the API services and usage costs in Units.",
    request: {},
    response: {
      serviceName: "String",
      serviceGroup: "String",
      costInUnits: {
        description: "The cost in units for the usage of that service",
      },
    },
    responseSchemaName: "APIServiceOut",
  },
  "/api2/json/taxonomyClasses/{classifierName}": {
    summary: "Receive a list of the valid taxonomy classes for a given classifier.",
    request: {
      classifierName: "String",
    },
    response: {
      classifierName: {
        description: "The classifier name, as it was given for analysis"
      },
      taxonomyClasses: "Array",
    },
    responseSchemaName: "APIClassifierTaxonomyOut",
  },
  "/api2/json/apiUsage": {
    summary: "Receive information on your subscription plan and current API usage.",
    request: {},
    response: {
      subscription: {
        apiKey: {
          description: "Your Namsor API key. Always keep it secret"
        },
        planStarted: {
          description: "The starting date of the plan, in UNIX format",
        },
        priorPlanStarted: "Integer",
        planEnded: {
          description: "The ending date of the plan, in UNIX format",
        },
        taxRate: "Number",
        planName: {
          description: " The name of the plan",
          example: "BASIC"
        },
        planBaseFeesKey: "String",
        planStatus: "String",
        planQuota: {
          description: "The total number of units associated with this plan",
        },
        priceUSD: {
          description: "The price in U.S. dollars ($)"
        },
        priceOverageUSD: {
          description: "The overage price in U.S. dollars ($)",
        },
        price: {
          description: "The price in the user's preferred currency"
        },
        priceOverage: {
          description: "The overaged price in the user's preferred currency",
        },
        currency: {
          description: "The user's preferred currency"
        },
        currencyFactor: "Number",
        stripeCustomerid: {
          description: "A unique processing identifier"
        },
        stripeStatus: "String",
        stripeSubscription: "String",
        userId: {
          description: "A unique user identifier"
        },
      },
      billingPeriod: {
        apiKey: {
          description: "Your Namsor API key. Always keep it secret"
        },
        subscriptionStarted: {
          description: "The subscription starting date, in UNIX format",
        },
        periodStarted: {
          description: "The subscription starting date, in UNIX format",
        },
        periodEnded: {
          description: "The subscription ending date, in UNIX format",
        },
        stripeCurrentPeriodEnd: "Integer",
        stripeCurrentPeriodStart: "Integer",
        billingStatus: "String",
        usage: {
          description: "The number of units used so far"
        },
        softLimit: "Integer",
        hardLimit: "Integer",
      },
      overageExclTax: "Number",
      overageInclTax: "Number",
      overageCurrency: "String",
      overageQuantity: "Integer",
    },
    responseSchemaName: "APIPeriodUsageOut",
  },
  "/api2/json/apiUsageHistory": {
    summary: "Print your API usage history.",
    request: {},
    response: {
      apiKey: {
        apiKey: {
          description: "Your Namsor API key. Always keep it secret"
        },
        userId: {
          description: "A unique user identifier"
        },
        admin: "Boolean",
        vetted: "Boolean",
        learnable: "Boolean",
        anonymized: "Boolean",
        partner: "Boolean",
        striped: "Boolean",
        corporate: "Boolean",
        disabled: "Boolean",
      },
      apiService: {
        description: "The type of service that was requested for the analysis of names"
      },
      createdDateTime: {
        description: "The date of the analysis, in UNIX format",
      },
      totalUsage: {
        description: "The total cost of the analysis in units"
      },
      lastFlushedDateTime: "Integer",
      lastUsedDateTime: "Integer",
      serviceFeaturesUsage: "Object",
    },
    responseSchemaName: "APICounterV2Out",
  },
  "/api2/json/apiUsageHistoryAggregate": {
    summary: "Print your API usage history in an aggregated view (by service, by day/hour/min).",
    request: {},
    response: {
      subscription: {
        apiKey: {
          description: "Your Namsor API key. Always keep it secret"
        },
        planStarted: {
          description: "The starting date of the plan, in UNIX format",
        },
        priorPlanStarted: "Integer",
        planEnded: {
          description: "The ending date of the plan, in UNIX format",
        },
        taxRate: "Number",
        planName: {
          description: " The name of the plan",
          example: "BASIC"
        },
        planBaseFeesKey: "String",
        planStatus: "String",
        planQuota: {
          description: "The total number of units associated with this plan",
        },
        priceUSD: {
          description: "The price in U.S. dollars ($)"
        },
        priceOverageUSD: {
          description: "The overage price in U.S. dollars ($)",
        },
        price: {
          description: "The price in the user's preferred currency"
        },
        priceOverage: {
          description: "The overaged price in the user's preferred currency",
        },
        currency: {
          description: "The user's preferred currency"
        },
        currencyFactor: "Number",
        stripeCustomerid: {
          description: "A unique processing identifier"
        },
        stripeStatus: "String",
        stripeSubscription: "String",
        userId: {
          description: "A unique processing identifier"
        },
      },
      billingPeriod: {
        apiKey: {
          description: "Your Namsor API key. Always keep it secret"
        },
        subscriptionStarted: {
          description: "The subscription starting date, in UNIX format",
        },
        periodStarted: "Integer",
        periodEnded: "Integer",
        stripeCurrentPeriodEnd: "Integer",
        stripeCurrentPeriodStart: "Integer",
        billingStatus: "String",
        usage: {
          description: "The number of units used so far"
        },
        softLimit: "Integer",
        hardLimit: "Integer",
      },
      overageExclTax: "Number",
      overageInclTax: "Number",
      overageCurrency: "String",
      overageQuantity: "Integer",
    },
    responseSchemaName: "APIPeriodUsageOut",
  },
  "/api2/json/learnable/{source}/{learnable}": {
    summary: "Activate/deactivate learning from a source.",
    request: {
      source: "String",
      learnable: "Boolean",
    },
    response: {},
  },
  "/api2/json/anonymize/{source}/{anonymized}": {
    summary: "Activate/deactivate anonymization for a source.",
    request: {
      source: "String",
      anonymized: "Boolean",
    },
    response: {},
  },
  "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}": {
    summary: "Detect if a proper noun is a personal name or a public name, according to its local context (ex: John Smith : personal name, Namsor: brand name)",
    request: {
      properNoun: {
        description: "The name of a person, a brand or object that is spelled with a capital letter",
        example: "John Smith, Namsor, the White House",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      commonType: {
        description: "The type of the name",
        example: "brand name, anthroponym",
      },
      commonTypeAlt: {
        description: "The alternative type of the name",
        example: "toponym",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "ProperNounCategorizedOut",
  },
  "/api2/json/nameTypeBatch": {
    summary: "Detect if proper nouns are personal names or public names (ex: John Smith : personal name, Namsor: brand name). You can inspect up to a 100 names",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name of a person, a brand or object that is spelled with a capital letter",
        example: "John Smith, Namsor, the White House",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      commonType: {
        description: "The type of the analyzed name"
      },
      commonTypeAlt: {
        description: "The alternative  type of the analyzed name",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "NameIn",
    responseSchemaName: "ProperNounCategorizedOut",
  },
  "/api2/json/nameTypeGeoBatch": {
    summary: "Detect if proper nouns are personal names or a public names, according to their local context (ex: John Smith : personal name, Namsor: brand name). You can inspect up to 100 names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        newName: "properNoun",
        description: "A personal name or a brand name",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      commonType: {
        description: "The type of the analyzed name"
      },
      commonTypeAlt: {
        description: "The alternative  type of the analyzed name",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "NameGeoIn",
    responseSchemaName: "ProperNounCategorizedOut",
  },
  "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}": {
    summary: "Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)",
    request: {
      countryIso2From: {
        description: "The ISO country code from which the interaction starts",
        example: "US",
      },
      firstNameFrom: {
        description: "The first name of the person from whom the interaction starts",
        example: "John",
      },
      lastNameFrom: {
        description: "The last name of the person from whom the interaction starts",
        example: "Smith",
      },
      countryIso2To: {
        description: "The ISO country code to which the interaction goes",
        example: "FR",
      },
      firstNameTo: {
        description: "The first name of the person to whom the interaction goes",
        example: "Jean",
      },
      lastNameTo: {
        description: "The last name of the person to whom the interaction goes",
        example: "Dupont",
      },
    },
    response: {
      id: {
        description: "A unique processing identifier"
      },
      firstLastNameGeoFromGender: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person from whom the interaction starts, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person from whom the interaction starts, as it was given for analysis",
          example: "Smith"
        },
        likelyGender: {
          description: "The most likely gender of the name",
          example: "male, female",
        },
        genderScale: {
          description: "The accuracy of the gender result, on a scale from 0 to 1",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoToGender: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person to whom the interaction goes, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person to whom the interaction goes, as it was given for analysis",
          example: "Smith"
        }, likelyGender: {
          description: "The most likely gender of the name",
          example: "male, female",
        },
        genderScale: {
          description: "The accuracy of the gender result, on a scale from 0 to 1",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoFromOrigin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person from whom the interaction starts, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person from whom the interaction starts, as it was given for analysis",
          example: "Smith"
        }, countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoToOrigin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person to whom the interaction goes, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person to whom the interaction goes, as it was given for analysis",
          example: "Smith"
        }, countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
          example: "",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoFromDiaspora: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person from whom the interaction starts, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person from whom the interaction starts, as it was given for analysis",
          example: "Smith"
        }, score: {
          description: "The coefficient of accuracy of the result"
        },
        ethnicityAlt: {
          description: "The alternativeethnicity of the name"
        },
        ethnicity: {
          description: "The ethnicity of the name"
        },
        lifted: "Boolean",
        countryIso2: {
          description: "The country code, in ISO 2 format",
          example: "US",
        },
        ethnicitiesTop: {
          description: "An array of the top ten most likely ethnicities of the name",
        },
      },
      firstLastNameGeoToDiaspora: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The first name of the person to whom the interaction goes, as it was given for analysis",
          example: "John",
        },
        lastName: {
          description: "The last name of the person to whom the interaction goes, as it was given for analysis",
          example: "Smith"
        }, score: {
          description: "The coefficient of accuracy of the result"
        },
        ethnicityAlt: {
          description: "The alternativeethnicity of the name"
        },
        ethnicity: {
          description: "The ethnicity of the name"
        },
        lifted: "Boolean",
        countryIso2: {
          description: "The country code, in ISO 2 format",
          example: "US",
        },
        ethnicitiesTop: {
          description: "An array of the top ten most likely ethnicities of the name",
        },
      },
    },
    responseSchemaName: "CorridorOut",
  },
  "/api2/json/corridorBatch": {
    summary: "Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)",
    request: {
      id: {
        description: "A unique processing identifier"
      },
    },
    response: {
      id: {
        description: "A unique processing identifier"
      },
      firstLastNameGeoFromGender: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        likelyGender: {
          description: "The most likely gender of the name",
          example: "male, female",
        },
        genderScale: {
          description: "The accuracy of the gender result, on a scale from 0 to 1",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoToGender: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        likelyGender: {
          description: "The most likely gender of the name",
          example: "male, female",
        },
        genderScale: {
          description: "The accuracy of the gender result, on a scale from 0 to 1",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoFromOrigin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
          example: "",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoToOrigin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
          example: "",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
      firstLastNameGeoFromDiaspora: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        ethnicityAlt: {
          description: "The alternativeethnicity of the name"
        },
        ethnicity: {
          description: "The ethnicity of the name"
        },
        lifted: "Boolean",
        countryIso2: {
          description: "The country code, in ISO 2 format",
          example: "US",
        },
        ethnicitiesTop: {
          description: "An array of the top ten most likely ethnicities of the name",
        },
      },
      firstLastNameGeoToDiaspora: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        ethnicityAlt: {
          description: "The alternativeethnicity of the name"
        },
        ethnicity: {
          description: "The ethnicity of the name"
        },
        lifted: "Boolean",
        countryIso2: {
          description: "The country code, in ISO 2 format",
          example: "US",
        },
        ethnicitiesTop: {
          description: "An array of the top ten most likely ethnicities of the name",
        },
      },
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
    },
    requestSchemaName: "CorridorIn",
    responseSchemaName: "CorridorOut",
  },
  "/api2/json/gender/{firstName}/{lastName}": {
    summary: "Find the likely gender of a first name and last name structure.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}": {
    summary: "Find the likely gender of a first and last name structure, according to its local context.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderGeoBatch": {
    summary: "Detect the likely gender of up to 100 names, according to their local context.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameGeoIn",
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderBatch": {
    summary: "Find the likely gender of up to 100 names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/parsedGenderBatch": {
    summary: "Detect the likely gender to 100 parsed names, with prefix, suffix, and middle name.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderFullGeo/{fullName}/{countryIso2}": {
    summary: "Infer the likely gender of a full name, according to a local context.",
    request: {
      fullName: {
        description: "A complete personal name",
        example: "John Smith",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/genderFull/{fullName}": {
    summary: "Find the likely gender of a full name",
    request: {
      fullName: {
        description: "A complete personal name",
        example: "John Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/genderFullBatch": {
    summary: "Detect the likely gender of up to 100 full names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A complete personal name",
        example: "John Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/genderFullGeoBatch": {
    summary: "Detect the likely gender of up to 100 full names, according to their local context.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A complete personal name",
        example: "John Smith",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "PersonalNameGeoIn",
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/originBatch": {
    summary: "Detect the likely country of origin of up to 100 first and last names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      countryOrigin: {
        description: "The code of the country of origin, in ISO 2 format",
        example: "US; FR",
      },
      countryOriginAlt: {
        description: "The code of the alternative country of origin, in ISO 2 format",
        example: "US; FR",
      },
      countriesOriginTop: {
        description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
        example: "",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      regionOrigin: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      topRegionOrigin: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      subRegionOrigin: {
        description: "The region of the continent",
        example: "Eastern Africa, Western Europe",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "FirstLastNameOriginedOut",
  },
  "/api2/json/countryBatch": {
    summary: "Infer the likely country of residence of up to 100 full names or last names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A complete personal name",
        example: "John Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      country: {
        description: "The country code, in ISO 2 format",
        example: "US; FR",
      },
      countryAlt: {
        description: "The alternative country code, in ISO 2 format",
        example: "US; FR",
      },
      region: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      topRegion: {
        description: "The continent of the name",
        example: "Africa, Europe",
      },
      subRegion: {
        description: "The region of the continent",
        example: "Eastern Africa, Western Europe",
      },
      countriesTop: {
        description: "The 10 likely country codes of the name",
        example: "US, FR",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameGeoOut",
  },
  "/api2/json/usRaceEthnicity/{firstName}/{lastName}": {
    summary: "Determine the most likely U.S. race or ethnicity of a U.S. resident's first and last name",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      raceEthnicityAlt: {
        description: "The alternative most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      raceEthnicity: {
        description: "The most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      raceEthnicitiesTop: {
        description: "An array of the most likely U.S. races or Ethnicities",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameUSRaceEthnicityOut",
  },
  "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}": {
    summary: "Determine the most likely U.S. race or ethnicity of a U.S. resident's first and last name, using their ZIP code",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      zip5Code: {
        description: "A 5 digits zip code"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      raceEthnicityAlt: {
        description: "The alternative most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      raceEthnicity: {
        description: "The most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      raceEthnicitiesTop: {
        description: "An array of the most likely U.S. races or Ethnicities",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameUSRaceEthnicityOut",
  },
  "/api2/json/usRaceEthnicityBatch": {
    summary: "Detect the most likely U.S. race or ethnicity of a up to 100 U.S. residents' first and last names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      raceEthnicityAlt: {
        description: "The alternative most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      raceEthnicity: {
        description: "The most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      raceEthnicitiesTop: {
        description: "An array of the most likely U.S. races or Ethnicities",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameGeoIn",
    responseSchemaName: "FirstLastNameUSRaceEthnicityOut",
  },
  "/api2/json/usZipRaceEthnicityBatch": {
    summary: "Determine the most likely U.S. race or ethnicity of up to 100 U.S. residents' first and last names, using their ZIP code.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
      zipCode: {
        newName: "zip5Code",
        description: "A 5 digits zip code"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      raceEthnicityAlt: {
        description: "The alternative most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      raceEthnicity: {
        description: "The most likely U.S. race or Ethnicity",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      raceEthnicitiesTop: {
        description: "An array of the most likely U.S. races or Ethnicities",
        example: "B_L (Black, Latino), Latino; A_NL (Asian, Non-Latino)",
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
      probabilityAltCalibrated: {
        description: "The alternative probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameGeoZippedIn",
    responseSchemaName: "FirstLastNameUSRaceEthnicityOut",
  },
  "/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}": {
    summary: "Find out the likely ethnicity or diaspora of a first name and last name, according to the country of residence",
    request: {
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      ethnicityAlt: {
        description: "The alternativeethnicity of the name"
      },
      ethnicity: {
        description: "The ethnicity of the name"
      },
      lifted: "Boolean",
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
      ethnicitiesTop: {
        description: "An array of the top ten most likely ethnicities of the name",
      },
    },
    responseSchemaName: "FirstLastNameDiasporaedOut",
  },
  "/api2/json/diasporaBatch": {
    summary: "Infer the likely ethnicity or diaspora of up to 100 names, according to their country of residence",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      ethnicityAlt: {
        description: "The alternativeethnicity of the name"
      },
      ethnicity: {
        description: "The ethnicity of the name"
      },
      lifted: "Boolean",
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
      ethnicitiesTop: {
        description: "An array of the top ten most likely ethnicities of the name",
      },
    },
    requestSchemaName: "FirstLastNameGeoIn",
    responseSchemaName: "FirstLastNameDiasporaedOut",
  },
  "/api2/json/parseName/{nameFull}/{countryIso2}": {
    summary: "Split a full name into a likely first and last name structure. For better accuracy, provide a local context.",
    request: {
      nameFull: {
        description: "A complete personal name",
        example: "John Smith",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/parseNameBatch": {
    summary: "Detect the likely first and last name structure of up to 100 full names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A complete personal name",
        example: "John Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/parseNameGeoBatch": {
    summary: "Detect the likely first and last name structure of up to 100 full names. For better accuracy, provide a local context.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A complete personal name",
        example: "John Smith",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "PersonalNameGeoIn",
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/parseChineseName/{chineseName}": {
    summary: "Determine the likely first and last name structure of a Chinese name, written in Mandarin",
    request: {
      chineseName: {
        description: "A Chinese full name, written in Mandarin",
        example: "王晓明",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "晓明",
        },
        lastName: {
          description: "The family name",
          example: "王"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/parseChineseNameBatch": {
    summary: "Detect the likely first and last name structure of up to 100 a Chinese names, written in Mandarin, ex. 王晓明 -> 王(lastname) 晓明(first name).",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "晓明",
        },
        lastName: {
          description: "The family name",
          example: "王"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/pinyinChineseName/{chineseName}": {
    summary: "Romanize a Chinese name to Pinyin.",
    request: {
      chineseName: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      }
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The most likely romanized transcription of the firstname",
          example: "Xiaoming",
        },
        lastName: {
          description: "The most likely romanized transcription of the lastname",
          example: "Wang"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/pinyinChineseNameBatch": {
    summary: "Romanize a list of up to 100 Chinese names to Pinyin.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      script: {
        firstLastName: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The most likely romanized transcription of the firstname",
          example: "Xiaoming",
        },
        lastName: {
          description: "The most likely romanized transcription of the lastname",
          example: "Wang"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}": {
    summary: "Receive a score for matching a romanized Chinese name with its Mandarin writing.",
    request: {
      chineseSurnameLatin: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      chineseGivenNameLatin: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
      chineseName: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      matchStatus: {
        description: "The status of the success of the match",
        example: "Match; Mismatch",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "NameMatchedOut",
  },
  "/api2/json/chineseNameMatchBatch": {
    summary: "Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "Xiaoming",
      },
      lastName: {
        description: "The family name",
        example: "Wang"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "Xiao",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}": {
    summary: "Find the likely gender of a romanized Chinese first name and last name",
    request: {
      chineseSurnameLatin: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      chineseGivenNameLatin: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was provided for analysis",
        example: "Xiaoming",
      },
      lastName: {
        description: "The last name, as it was provided for analysis",
        example: "Wang"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderChineseNamePinyinBatch": {
    summary: "Find out the likely gender of up to 100 Chinese first and last names, written in Pinyin.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      lastName: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was provided for analysis",
        example: "Xiaoming",
      },
      lastName: {
        description: "The last name, as it was provided for analysis",
        example: "Wang"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderChineseName/{chineseName}": {
    summary: "Determine the gender of a Chinese full name, written in Mandarin",
    request: {
      chineseName: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/genderChineseNameBatch": {
    summary: "Infer the likely gender of up to 100 Chinese full names, written in Mandarin",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A Chinese name written in Standard Mandarin",
        example: "王晓明"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}": {
    summary: "Find the most likely Mandarin transcriptions for a Chinese first name and last name, written in Pinyin",
    request: {
      chineseSurnameLatin: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      chineseGivenNameLatin: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/chineseNameCandidatesBatch": {
    summary: "Find the most likely Mandarin transcriptions for up to 100 Chinese first and last names, written in Pinyin",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      chineseSurnameLatin: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      chineseGivenNameLatin: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Xiaoming",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Wang"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}": {
    summary: "Determine the most likely Mandarin transcriptions for a romanized Chinese first name and last name, accrding to the known gender of the name",
    request: {
      chineseSurnameLatin: {
        description: "A Chinese last name written in Pinyin",
        example: "Wang",
      },
      chineseGivenNameLatin: {
        description: "A Chinese first name written in Pinyin",
        example: "Xiaoming",
      },
      knownGender: {
        description: "The gender of the name"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      latinName: "String",
      originalName: "String",
      sourceLanguage: "String",
      targetLanguage: "String",
      sourcescript: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      targetscript: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "RomanizedNameOut",
  },
  "/api2/json/chineseNameCandidatesGenderBatch": {
    summary: "Find the most likely transcriptions for a romanized Chinese first name and last name",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A romanized Chinese first name",
        example: "Xiaoming",
      },
      lastName: {
        description: "A romanized Chinese last name",
        example: "Wang"
      },
      gender: {
        description: "The gender of the name"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Xiaoming",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Wang"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameGenderIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/parseJapaneseName/{japaneseName}": {
    summary: "Split a Japanese full name, in Kanji or Latin writing, into a first name and last name structure",
    request: {
      japaneseName: {
        description: "A Japanese full name in Kanji characters or Latin alphabet",
        example: "山本 早苗; Yamamoto Sanae",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "早苗; Sanae",
        },
        lastName: {
          description: "The family name",
          example: "山本; Yamamoto"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/parseJapaneseNameBatch": {
    summary: "Split up to 100 Japanese full names, in Kanji or Latin writing, into first name and last name structures",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A Japanese name in Kanji characters",
        example: " 山本 早苗"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "早苗; Sanae",
        },
        lastName: {
          description: "The family name",
          example: "山本; Yamamoto"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameParsedOut",
  },
  "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}": {
    summary: "Find the likely transcriptions to Kanji, for a Japanese first name and last name, according to a known gender.",
    request: {
      japaneseSurnameLatin: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      japaneseGivenNameLatin: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      knownGender: {
        description: "The gender of the name"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}": {
    summary: "Find the likely transcriptions to Kanji, for a romanized Japanese first name and last name.",
    request: {
      japaneseSurnameLatin: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      japaneseGivenNameLatin: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}": {
    summary: "Receive the most likely Latin transcriptions for a Japanese name written in Kanji characters.",
    request: {
      japaneseSurnameKanji: {
        description: "A Japanese last name in Kanji characters",
        example: "山本",
      },
      japaneseGivenNameKanji: {
        description: "A Japanese first name in Kanji characters",
        example: "早苗",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "早苗",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "山本"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameKanjiCandidatesBatch": {
    summary: "Find the likely transcriptions to Kanji, for up to 100 Japanese romanized first and last names.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      lastName: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameGenderKanjiCandidatesBatch": {
    summary: "Find the likely transcriptions to Kanji, for up to 100 Japanese romanized first and last names, according to a known gender.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      lastName: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      gender: {
        description: "The gender of the name"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameGenderIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameLatinCandidatesBatch": {
    summary: "Romanize up to 100 japanese names written in Kanji",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A Japanese first name in Kanji characters",
        example: "早苗",
      },
      lastName: {
        description: "A Japanese last name in Kanji characters",
        example: "山本",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "早苗",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "山本"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
    summary: "Receive a score for matching a romanized Japanese name with a Kanji transcription.",
    request: {
      japaneseSurnameLatin: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      japaneseGivenNameLatin: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      japaneseName: {
        description: "A Japanese full name in Kanji characters",
        example: "山本 早苗",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      matchStatus: {
        description: "The status of the success of the match",
        example: "Match; Mismatch",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "NameMatchedOut",
  },
  "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
    summary: "Suggest a transcription of a Japanese name between Kanji characters and Latin alphabet to help us improve our name matching tool.",
    request: {
      japaneseSurnameLatin: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      japaneseGivenNameLatin: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      japaneseName: {
        description: "A Japanese full name in Kanji characters",
        example: "山本 早苗",
      },
    },
    response: {
      feedbackCredits: {
        description: "The number of unit credited to your account"
      },
    },
    responseSchemaName: "FeedbackLoopOut",
  },
  "/api2/json/japaneseNameMatchBatch": {
    summary: "Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      lastName: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      orderOption: "String",
      matchCandidates: {
        description: "An array of the most likely name transcriptions",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "NameMatchCandidatesOut",
  },
  "/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}": {
    summary: "Discover the likely gender of a Japanese first name and last name written in Latin alphabet.",
    request: {
      japaneseSurnameLatin: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
      japaneseGivenNameLatin: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderJapaneseNameBatch": {
    summary: "Discover the likely gender of a up to 100 Japanese first and last names written in Latin alphabet.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "A romanized Japanese first name",
        example: "Sanae",
      },
      lastName: {
        description: "A romanized Japanese last name",
        example: "Yamamoto",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "Sanae",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Yamamoto"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "FirstLastNameIn",
    responseSchemaName: "FirstLastNameGenderedOut",
  },
  "/api2/json/genderJapaneseNameFull/{japaneseName}": {
    summary: "Find the likely gender of a Japanese full name, written in Kanji.",
    request: {
      japaneseName: {
        description: "A Japanese full name in Kanji characters",
        example: "山本 早苗",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/genderJapaneseNameFullBatch": {
    summary: "Find the likely gender of up to 100 Japanese full names, written in Kanji.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      name: {
        description: "A Japanese name in Kanji characters",
        example: "山本 早苗"
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      likelyGender: {
        description: "The most likely gender of the name",
        example: "male, female",
      },
      genderScale: {
        description: "The accuracy of the gender result, on a scale from 0 to 1",
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
      probabilityCalibrated: {
        description: "The probability of the result, on a scale from 0 to 1",
      },
    },
    requestSchemaName: "PersonalNameIn",
    responseSchemaName: "PersonalNameGenderedOut",
  },
  "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}": {
    summary: "Identify the likely country and phone prefix of a name and phone number.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      phoneNumber: {
        description: "A phone number, formatted or unformatted",
        example: "1-541-754-3010; 15417543010",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      internationalPhoneNumberVerified: {
        description: "The formatted phone number for international calls",
      },
      phoneCountryIso2Verified: {
        description: "The country code of the number, in ISO 2 format",
        example: "+1-541-754-3010",
      },
      phoneCountryCode: {
        description: "The phone prefix of the number",
        example: "1"
      },
      phoneCountryCodeAlt: {
        description: "The alternative phone prefix of the number",
        exemple: "86"
      },
      phoneCountryIso2: {
        description: "The country of origin of the phone number, in ISO 2 format",
        example: "US"
      },
      phoneCountryIso2Alt: {
        description: "The altervative country origin of the phone number, in ISO 2 format",
        example: "CN"
      },
      originCountryIso2: {
        description: "The country of origin of the name, in ISO 2 format",
        example: "US"
      },
      originCountryIso2Alt: {
        description: "The alternative country of origin of the name, in ISO 2 format",
        example: "CN"
      },
      phoneNumber: {
        description: "The phone number, as it was sent for analysis",
      },
      verified: "Boolean",
      score: {
        description: "The coefficient of accuracy of the result"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    responseSchemaName: "FirstLastNamePhoneCodedOut",
  },
  "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}": {
    summary: "Identify the likely phone prefix of a name and phone number (formatted or unformatted) according to local context.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      phoneNumber: {
        description: "A phone number, formatted or unformatted",
        example: "1-541-754-3010, 15417543010",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The first name, as it was given for analysis",
        example: "John",
      },
      lastName: {
        description: "The last name, as it was given for analysis",
        example: "Smith"
      },
      internationalPhoneNumberVerified: {
        description: "The formatted phone number for international calls",
      },
      phoneCountryIso2Verified: {
        description: "The country code of the number, in ISO 2 format",
        example: "+1-541-754-3010",
      },
      phoneCountryCode: {
        description: "The phone prefix of the number",
        example: "1"
      },
      phoneCountryCodeAlt: {
        description: "The alternative phone prefix of the number",
        exemple: "86"
      },
      phoneCountryIso2: {
        description: "The country of origin of the phone number, in ISO 2 format",
        example: "US"
      },
      phoneCountryIso2Alt: {
        description: "The altervative country origin of the phone number, in ISO 2 format",
        example: "CN"
      },
      originCountryIso2: {
        description: "The country of origin of the name, in ISO 2 format",
        example: "US"
      },
      originCountryIso2Alt: {
        description: "The alternative country of origin of the name, in ISO 2 format",
        example: "CN"
      },
      phoneNumber: {
        description: "The phone number, as it was sent for analysis",
      },
      verified: "Boolean",
      score: {
        description: "The coefficient of accuracy of the result"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    responseSchemaName: "FirstLastNamePhoneCodedOut",
  },
  "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}": {
    summary: "Suggest a phone prefix, according to a name, phone number (formatted or unformatted) and local context, to help us improve our technology.",
    request: {
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      phoneNumber: {
        description: "A phone number, formatted or unformatted",
        example: "1-541-754-3010; 15417543010",
      },
      phoneNumberE164: {
        description: "A phone number on the E164 format",
        example: "+15417543010",
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    response: {
      feedbackCredits: {
        description: "The number of unit credited to your account"
      },
    },
    responseSchemaName: "FirstLastNamePhoneCodedOut",
  },
  "/api2/json/phoneCodeBatch": {
    summary: "Identify the likely country and phone prefix of up to 100 names and phone numbers (formatted or unformatted)",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      phoneNumber: {
        description: "A phone number, formatted or unformatted",
        example: "1-541-754-3010, 15417543010",
      },
      origin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
          example: "",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      internationalPhoneNumberVerified: {
        newName: "phoneNumberE164",
        description: "The phone number, formatted to E164",
        example: "+1-541-754-3010",
      },
      phoneCountryIso2Verified: {
        newName: "phoneNumberE164",
        description: "The phone number, formatted to E164",
        example: "+1-541-754-3010",
      },
      phoneCountryCode: {
        description: "The phone prefix of the number"
      },
      phoneCountryCodeAlt: {
        description: "The alternative phone prefix of the number",
      },
      phoneCountryIso2: {
        description: "The country of origin of the phone number, in ISO 2 format",
      },
      phoneCountryIso2Alt: {
        description: "The altervative country origin of the phone number, in ISO 2 format",
      },
      originCountryIso2: {
        description: "The country of origin of the name, in ISO 2 format",
      },
      originCountryIso2Alt: {
        description: "The alternative country of origin of the name, in ISO 2 format",
      },
      phoneNumber: {
        description: "The phone number, as it was sent for analysis",
      },
      verified: "Boolean",
      score: {
        description: "The coefficient of accuracy of the result"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    requestSchemaName: "FirstLastNamePhoneNumberIn",
    responseSchemaName: "FirstLastNamePhoneCodedOut",
  },
  "/api2/json/phoneCodeGeoBatch": {
    summary: "Identify the likely phone prefix of up to 100 names and phone numbers (formatted or unformatted) according to local context.",
    request: {
      id: {
        description: "A unique processing identifier"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      phoneNumber: {
        description: "A phone number, formatted or unformatted",
        example: "1-541-754-3010, 15417543010",
      },
      origin: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
        countryOrigin: {
          description: "The code of the country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countryOriginAlt: {
          description: "The code of the alternative country of origin, in ISO 2 format",
          example: "US; FR",
        },
        countriesOriginTop: {
          description: "The codes of the 10 most likely countries of origin, in ISO 2 format",
          example: "",
        },
        score: {
          description: "The coefficient of accuracy of the result"
        },
        regionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        topRegionOrigin: {
          description: "The continent of the name",
          example: "Africa, Europe",
        },
        subRegionOrigin: {
          description: "The region of the continent",
          example: "Eastern Africa, Western Europe",
        },
        probabilityCalibrated: {
          description: "The probability of the result, on a scale from 0 to 1",
        },
        probabilityAltCalibrated: {
          description: "The alternative probability of the result, on a scale from 0 to 1",
        },
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
      countryIso2Alt: "String",
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      firstName: {
        description: "The personal name given to someone at birth, or baptism",
        example: "John",
      },
      lastName: {
        description: "The family name",
        example: "Smith"
      },
      internationalPhoneNumberVerified: {
        newName: "phoneNumberE164",
        description: "The phone number, formatted to E164",
        example: "+1-541-754-3010",
      },
      phoneCountryIso2Verified: {
        newName: "phoneNumberE164",
        description: "The phone number, formatted to E164",
        example: "+1-541-754-3010",
      },
      phoneCountryCode: {
        description: "The phone prefix of the number"
      },
      phoneCountryCodeAlt: {
        description: "The alternative phone prefix of the number",
      },
      phoneCountryIso2: {
        description: "The country of origin of the phone number, in ISO 2 format",
      },
      phoneCountryIso2Alt: {
        description: "The altervative country origin of the phone number, in ISO 2 format",
      },
      originCountryIso2: {
        description: "The country of origin of the name, in ISO 2 format",
      },
      originCountryIso2Alt: {
        description: "The alternative country of origin of the name, in ISO 2 format",
      },
      phoneNumber: {
        description: "The phone number, as it was sent for analysis",
      },
      verified: "Boolean",
      score: {
        description: "The coefficient of accuracy of the result"
      },
      countryIso2: {
        description: "The country code, in ISO 2 format",
        example: "US",
      },
    },
    requestSchemaName: "FirstLastNamePhoneNumberGeoIn",
    responseSchemaName: "FirstLastNamePhoneCodedOut",
  },
  "/api2/json/parseName/{nameFull}": {
    summary: "Split a full name into a likely first and last name structure. ",
    request: {
      nameFull: {
        description: "A complete personal name",
        example: "John Smith",
      },
    },
    response: {
      script: {
        description: "The alphabet or characters used in the parameters",
        example: "LATIN, HAN, CYRILLIC",
      },
      id: {
        description: "The processing identifier, as it was given for analysis"
      },
      name: {
        description: "The name, as it was given for analysis"
      },
      nameParserType: "String",
      nameParserTypeAlt: "String",
      firstLastName: {
        script: {
          description: "The alphabet or characters used in the parameters",
          example: "LATIN, HAN, CYRILLIC",
        },
        id: {
          description: "A unique processing identifier"
        },
        firstName: {
          description: "The personal name given to someone at birth, or baptism",
          example: "John",
        },
        lastName: {
          description: "The family name",
          example: "Smith"
        },
      },
      score: {
        description: "The coefficient of accuracy of the result"
      },
    },
    responseSchemaName: "PersonalNameParsedOut",
  },
};
