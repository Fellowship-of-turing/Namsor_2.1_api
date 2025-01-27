export const exStructure = {
  "base": "https://v2.namsor.com/NamSorAPIv2",
  "errorResponses": ["401", "403"],
  "routes": {
    "genderBatch": {
      "title": "Gender Batch",
      "required": ["firstName", "lastName"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 names, detecting automatically the cultural context.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "genderGeoBatch": {
      "title": "Gender Geo Batch",
      "required": ["firstName", "lastName", "countryIso2"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "genderFullBatch": {
      "title": "Gender Full Batch",
      "required": ["name"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 full names, detecting automatically the cultural context.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "name": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "genderFullGeoBatch": {
      "title": "Gender Full Geo Batch",
      "required": ["name", "countryIso2"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "parsedGenderBatch": {
      "title": "Parsed Gender Batch",
      "required": ["firstName", "lastName"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "prefixOrTitle": { "type": "string" },
          "suffix": { "type": "string" },
          "middleName": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "parsedGenderGeoBatch": {
      "title": "Parsed Gender Geo Batch",
      "required": ["firstName", "lastName", "countryIso2"],
      "cost": 1,
      "summary": "Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "prefixOrTitle": { "type": "string" },
          "suffix": { "type": "string" },
          "middleName": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "likelyGender": {
              "type": "string",
              "description": "Most likely gender",
              "enum": ["male", "female", "unknown"]
            },
            "genderScale": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
              "format": "double"
            },
            "score": { "type": "number", "format": "double" },
            "probabilityCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "originBatch": {
      "title": "Origin Batch",
      "required": ["firstName", "lastName"],
      "cost": 10,
      "summary": "[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
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
              "format": "double"
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
            "probabilityCalibrated": { "type": "number", "format": "double" },
            "probabilityAltCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "countryBatch": {
      "title": "Country Batch",
      "required": ["name"],
      "cost": 10,
      "summary": "[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "name": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "score": { "type": "number", "format": "double" },
            "country": { "type": "string" },
            "countryAlt": { "type": "string" },
            "region": { "type": "string" },
            "topRegion": { "type": "string" },
            "subRegion": { "type": "string" },
            "countriesTop": {
              "type": "array",
              "description": "List countries (top 10)",
              "items": {
                "type": "string",
                "description": "List countries (top 10)"
              }
            },
            "probabilityCalibrated": { "type": "number", "format": "double" },
            "probabilityAltCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "diasporaBatch": {
      "title": "Diaspora Batch",
      "required": ["firstName", "lastName", "countryIso2"],
      "cost": 20,
      "summary": "[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "score": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Origin score value",
              "format": "double"
            },
            "ethnicityAlt": { "type": "string" },
            "ethnicity": { "type": "string" },
            "lifted": { "type": "boolean" },
            "countryIso2": { "type": "string" },
            "ethnicitiesTop": {
              "type": "array",
              "description": "List ethnicities (top 10)",
              "items": {
                "type": "string",
                "description": "List ethnicities (top 10)"
              }
            }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "usRaceEthnicityBatch": {
      "title": "US Race & Ethnicity Batch",
      "required": ["firstName", "lastName"],
      "cost": 10,
      "summary": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "raceEthnicityAlt": {
              "type": "string",
              "description": "Second most likely US 'race'/ethnicity",
              "enum": ["W_NL", "HL", "A", "B_NL"]
            },
            "raceEthnicity": {
              "type": "string",
              "description": "Most likely US 'race'/ethnicity",
              "enum": ["W_NL", "HL", "A", "B_NL"]
            },
            "score": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Origin score value",
              "format": "double"
            },
            "raceEthnicitiesTop": {
              "type": "array",
              "description": "List 'race'/ethnicities",
              "items": {
                "type": "string",
                "description": "List 'race'/ethnicities"
              }
            },
            "probabilityCalibrated": { "type": "number", "format": "double" },
            "probabilityAltCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "usZipRaceEthnicityBatch": {
      "title": "US Zip Race & Ethnicity Batch",
      "required": ["firstName", "lastName", "countryIso2", "zipCode"],
      "cost": 10,
      "summary": "[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "firstName": { "type": "string" },
          "lastName": { "type": "string" },
          "countryIso2": { "type": "string" },
          "zipCode": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "raceEthnicityAlt": {
              "type": "string",
              "description": "Second most likely US 'race'/ethnicity",
              "enum": ["W_NL", "HL", "A", "B_NL"]
            },
            "raceEthnicity": {
              "type": "string",
              "description": "Most likely US 'race'/ethnicity",
              "enum": ["W_NL", "HL", "A", "B_NL"]
            },
            "score": {
              "type": "number",
              "description": "Compatibility to NamSor_v1 Origin score value",
              "format": "double"
            },
            "raceEthnicitiesTop": {
              "type": "array",
              "description": "List 'race'/ethnicities",
              "items": {
                "type": "string",
                "description": "List 'race'/ethnicities"
              }
            },
            "probabilityCalibrated": { "type": "number", "format": "double" },
            "probabilityAltCalibrated": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "parseNameBatch": {
      "title": "Parse Name Batch",
      "required": ["name"],
      "cost": 1,
      "summary": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "name": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "nameParserType": { "type": "string" },
            "nameParserTypeAlt": { "type": "string" },
            "firstLastName": {
              "id": { "type": "string" },
              "firstName": { "type": "string" },
              "lastName": { "type": "string" }
            },
            "score": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    },
    "parseNameGeoBatch": {
      "title": "Parse Name Geo Batch",
      "required": ["name", "countryIso2"],
      "cost": 1,
      "summary": "Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. ",
      "request": {
        "personalNames": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "countryIso2": { "type": "string" }
        }
      },
      "response": {
        "200": {
          "personalNames": {
            "id": { "type": "string" },
            "name": { "type": "string" },
            "nameParserType": { "type": "string" },
            "nameParserTypeAlt": { "type": "string" },
            "firstLastName": {
              "id": { "type": "string" },
              "firstName": { "type": "string" },
              "lastName": { "type": "string" }
            },
            "score": { "type": "number", "format": "double" }
          }
        },
        "401": { "description": "Missing or incorrect API Key" },
        "403": { "description": "API Limit Reached or API Key Disabled" }
      }
    }
  }
}

