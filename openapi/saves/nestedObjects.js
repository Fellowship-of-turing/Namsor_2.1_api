// TODO -> delete / hide route
// "ROUTE": "/api2/json/apiStatus",


let vars = [{
  "ROUTE": "/api2/json/apiStatus",
  "key": "softwareVersion",
  "schema": [
    "softwareNameAndVersion",
    "softwareVersion",
    "name",
    "type"
  ],
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsage",
  "key": "subscription",
  "schema": {
    "apiKey": { "type": "string" },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
    },
    "planName": { "type": "string" },
    "planBaseFeesKey": { "type": "string" },
    "planStatus": { "type": "string" },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
    },
    "priceOverageUSD": {
      "type": "number",
    },
    "price": {
      "type": "number",
    },
    "priceOverage": {
      "type": "number",
    },
    "currency": { "type": "string" },
    "currencyFactor": {
      "type": "number",
    },
    "stripeCustomerId": { "type": "string" },
    "stripeStatus": { "type": "string" },
    "stripeSubscription": { "type": "string" },
    "userId": { "type": "string" },
    "name": "subscription",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsage",
  "key": "billingPeriod",
  "schema": {
    "apiKey": { "type": "string" },
    "subscriptionStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodEnded": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodEnd": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodStart": {
      "type": "integer",
      "format": "int64"
    },
    "billingStatus": { "type": "string" },
    "usage": {
      "type": "integer",
      "format": "int64"
    },
    "softLimit": {
      "type": "integer",
      "format": "int64"
    },
    "hardLimit": {
      "type": "integer",
      "format": "int64"
    },
    "name": "billingPeriod",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsageHistory",
  "key": "apiKey",
  "schema": {
    "apiKey": {
      "type": "string",
      "xml": { "name": "api_key" }
    },
    "userId": { "type": "string" },
    "admin": { "type": "boolean" },
    "vetted": { "type": "boolean" },
    "learnable": { "type": "boolean" },
    "anonymized": { "type": "boolean" },
    "partner": { "type": "boolean" },
    "striped": { "type": "boolean" },
    "corporate": { "type": "boolean" },
    "disabled": { "type": "boolean" },
    "name": "apiKey",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsageHistory",
  "key": "serviceFeaturesUsage",
  "schema": {
    "type": "Object",
    "additionalProperties": {
      "type": "integer",
      "format": "int64"
    },
    "name": "serviceFeaturesUsage",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsageHistoryAggregate",
  "key": "subscription",
  "schema": {
    "apiKey": { "type": "string" },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
    },
    "planName": { "type": "string" },
    "planBaseFeesKey": { "type": "string" },
    "planStatus": { "type": "string" },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
    },
    "priceOverageUSD": {
      "type": "number",
    },
    "price": {
      "type": "number",
    },
    "priceOverage": {
      "type": "number",
    },
    "currency": { "type": "string" },
    "currencyFactor": {
      "type": "number",
    },
    "stripeCustomerId": { "type": "string" },
    "stripeStatus": { "type": "string" },
    "stripeSubscription": { "type": "string" },
    "userId": { "type": "string" },
    "name": "subscription",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/apiUsageHistoryAggregate",
  "key": "billingPeriod",
  "schema": {
    "apiKey": { "type": "string" },
    "subscriptionStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodEnded": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodEnd": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodStart": {
      "type": "integer",
      "format": "int64"
    },
    "billingStatus": { "type": "string" },
    "usage": {
      "type": "integer",
      "format": "int64"
    },
    "softLimit": {
      "type": "integer",
      "format": "int64"
    },
    "hardLimit": {
      "type": "integer",
      "format": "int64"
    },
    "name": "billingPeriod",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/chineseNameMatchBatch",
  "key": "name1",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "firstName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lastName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "name1",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/chineseNameMatchBatch",
  "key": "name2",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "name2",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoFromGender",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
    },
    "score": {
      "type": "number",
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoFromGender",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoToGender",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
    },
    "score": {
      "type": "number",
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoToGender",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoFromOrigin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoFromOrigin",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoToOrigin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoToOrigin",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoFromDiaspora",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicity": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lifted": {
      "type": "boolean",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    },
    "name": "firstLastNameGeoFromDiaspora",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
  "key": "firstLastNameGeoToDiaspora",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicity": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lifted": {
      "type": "boolean",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    },
    "name": "firstLastNameGeoToDiaspora",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoFrom",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "firstName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lastName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "firstLastNameGeoFrom",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoTo",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "firstName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lastName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "firstLastNameGeoTo",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoFromGender",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
    },
    "score": {
      "type": "number",
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoFromGender",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoToGender",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
    },
    "score": {
      "type": "number",
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoToGender",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoFromOrigin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoFromOrigin",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoToOrigin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "firstLastNameGeoToOrigin",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoFromDiaspora",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicity": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lifted": {
      "type": "boolean",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    },
    "name": "firstLastNameGeoFromDiaspora",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/corridorBatch",
  "key": "firstLastNameGeoToDiaspora",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicity": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lifted": {
      "type": "boolean",
      "xml": { "attribute": true }
    },
    "countryIso2": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    },
    "name": "firstLastNameGeoToDiaspora",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/japaneseNameMatchBatch",
  "key": "name1",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "firstName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "lastName": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "name1",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/japaneseNameMatchBatch",
  "key": "name2",
  "schema": {
    "id": {
      "type": "string",
      "xml": { "attribute": true }
    },
    "name": "name2",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseChineseName/{chineseName}",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseChineseNameBatch",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseJapaneseName/{japaneseName}",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseJapaneseNameBatch",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseName/{nameFull}",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseNameBatch",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseName/{nameFull}/{countryIso2}",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/parseNameGeoBatch",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/phoneCodeBatch",
  "key": "origin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "origin",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/phoneCodeGeoBatch",
  "key": "origin",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
    },
    "probabilityAltCalibrated": {
      "type": "number",
    },
    "name": "origin",
    "type": "Object",
    "required": "false",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/pinyinChineseName/{chineseName}",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
},
// ------------------------------------------------------------------------------------------------------------------------
{
  // TODO ->
  "ROUTE": "/api2/json/pinyinChineseNameBatch",
  "key": "firstLastName",
  "schema": {
    "script": { "type": "string" },
    "id": { "type": "string" },
    "firstName": { "type": "string" },
    "lastName": { "type": "string" },
    "name": "firstLastName",
    "type": "Object",
  }
}]