let examples = {
    //////////////////////////////////////////////////////////////////////////////////////////////
    // - - - GET
    "/api2/json/anonymize/{source}/{anonymized}": {
        //     "input": { "source": "*** string ***", "anonymized": "*** boolean ***" }
        // },
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/apiStatus": {
            "output": {
                "softwareVersion": {
                    "softwareNameAndVersion": "NamSorAPIv2.0.14B01",
                    "softwareVersion": [
                        2,
                        0,
                        14
                    ]
                },
                "classifiers": [
                    {
                        "classifierName": "name_category",
                        "serving": true,
                        "learning": true,
                        "shuttingDown": false,
                        "probabilityCalibrated": false
                    },
                    {
                        "classifierName": "personalname_gender",
                        "serving": true,
                        "learning": true,
                        "shuttingDown": false,
                        "probabilityCalibrated": true
                    },
                    {
                        "classifierName": "personalname_origin_country",
                        "serving": true,
                        "learning": true,
                        "shuttingDown": false,
                        "probabilityCalibrated": true
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/apiUsage": {
            "output": {
                "subscription": {
                    "apiKey": "77afd518a85798fa3723f5ec8120adb7",
                    "planStarted": 1602705635199,
                    "priorPlanStarted": 0,
                    "planEnded": 0,
                    "taxRate": 0,
                    "planName": "BASIC",
                    "planBaseFeesKey": "namsorapi_v2_BASIC_usd",
                    "planStatus": "OPEN",
                    "planQuota": 5000,
                    "priceUSD": 0,
                    "priceOverageUSD": 0.005,
                    "price": 0,
                    "priceOverage": 0.005,
                    "currency": "usd",
                    "currencyFactor": 1,
                    "stripeCustomerId": null,
                    "stripeStatus": null,
                    "stripeSubscription": null,
                    "userId": "lXVJ95AraqM9jrRns45ZfbE4qRgw"
                },
                "billingPeriod": {
                    "apiKey": "77afd518a85798fa3723f5ec8120adb7",
                    "subscriptionStarted": 1602705635199,
                    "periodStarted": 1618430435199,
                    "periodEnded": 0,
                    "stripeCurrentPeriodEnd": 0,
                    "stripeCurrentPeriodStart": 0,
                    "billingStatus": "OPEN",
                    "usage": 34,
                    "softLimit": 5000,
                    "hardLimit": 5000
                },
                "overageExclTax": 0,
                "overageInclTax": 0,
                "overageCurrency": null,
                "overageQuantity": 0
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/apiUsageHistory": {
            "output": {
                "apiKey": {
                    "apiKey": "77afd518a85798fa3723f5ec8120adb7",
                    "userId": null,
                    "admin": false,
                    "vetted": false,
                    "learnable": true,
                    "anonymized": false,
                    "partner": false,
                    "striped": false,
                    "corporate": false,
                    "disabled": false,
                },
                "apiService": "name_parser_type",
                "createdDateTime": 1619798304974,
                "totalUsage": 67,
                "lastFlushedDateTime": 1619798382611,
                "lastUsedDateTime": 1619798304974,
                "serviceFeaturesUsage": {}
            }
        },
        // note not same response from live API
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/apiUsageHistoryAggregate": {
            // "output": {
            //     "subscription": {
            //         "apiKey": "77afd518a85798fa3723f5ec8120adb7",
            //         "planStarted": "*** integer ***",
            //         "priorPlanStarted": "*** integer ***",
            //         "planEnded": "*** integer ***",
            //         "taxRate": "*** number ***",
            //         "planName": "*** string ***",
            //         "planBaseFeesKey": "*** string ***",
            //         "planStatus": "*** string ***",
            //         "planQuota": "*** integer ***",
            //         "priceUSD": "*** number ***",
            //         "priceOverageUSD": "*** number ***",
            //         "price": "*** number ***",
            //         "priceOverage": "*** number ***",
            //         "currency": "*** string ***",
            //         "currencyFactor": "*** number ***",
            //         "stripeCustomerId": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            //         "stripeStatus": "*** string ***",
            //         "stripeSubscription": "*** string ***",
            //         "userId": "e630dda5-13b3-42c5-8f1d-648aa8a21c42"
            //     },
            //     "billingPeriod": {
            //         "apiKey": "77afd518a85798fa3723f5ec8120adb7",
            //         "subscriptionStarted": "*** integer ***",
            //         "periodStarted": "*** integer ***",
            //         "periodEnded": "*** integer ***",
            //         "stripeCurrentPeriodEnd": "*** integer ***",
            //         "stripeCurrentPeriodStart": "*** integer ***",
            //         "billingStatus": "*** string ***",
            //         "usage": "*** integer ***",
            //         "softLimit": "*** integer ***",
            //         "hardLimit": "*** integer ***"
            //     },
            //     "overageExclTax": "*** number ***",
            //     "overageInclTax": "*** number ***",
            //     "overageCurrency": "*** string ***",
            //     "overageQuantity": "*** integer ***"
            // }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/apiServices": {
            "output": {
                "apiServices": [
                    {
                        "serviceName": "name_parser_type",
                        "serviceGroup": "AIClassifier",
                        "costInUnits": 1
                    },
                    {
                        "serviceName": "personalname_phone_prefix",
                        "serviceGroup": "AIClassifier",
                        "costInUnits": 1
                    },
                    {
                        "serviceName": "personalfullname_gender",
                        "serviceGroup": "AIClassifier",
                        "costInUnits": 1
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}": {
            "input": {
                "chineseSurnameLatin": "Zhao",
                "chineseGivenNameLatin": "LiYing"
            },
            "output": {
                "script": null,
                "id": null,
                "firstName": "LiYing",
                "lastName": "Zhao",
                "orderOption": null,
                "matchCandidates": [
                    {
                        "candidateName": "赵丽英",
                        "probability": 0.26153460755147884,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    },
                    {
                        "candidateName": "赵丽颖",
                        "probability": 0.11856235542333707,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    },
                    {
                        "candidateName": "赵立英",
                        "probability": 0.07671681821510046,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/chineseNameCandidatesBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "LiYing",
                "lastName": "Zhao"
            },
            "output": {
                "script": null,
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "id": null,
                "firstName": "LiYing",
                "lastName": "Zhao",
                "orderOption": null,
                "matchCandidates": [
                    {
                        "candidateName": "赵丽英",
                        "probability": 0.26153460755147884,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    },
                    {
                        "candidateName": "赵丽颖",
                        "probability": 0.11856235542333707,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    },
                    {
                        "candidateName": "赵立英",
                        "probability": 0.07671681821510046,
                        "predScoreGivenName": 0,
                        "predScoreFamilyName": 0
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/chineseNameCandidatesGenderBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "gender": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "orderOption": "*** string ***",
                "matchCandidates": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}": {
            "input": {
                "chineseSurnameLatin": "*** string ***",
                "chineseGivenNameLatin": "*** string ***",
                "knownGender": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "latinName": "*** string ***",
                "originalName": "*** string ***",
                "sourceLanguage": "*** string ***",
                "targetLanguage": "*** string ***",
                "sourceScript": "*** string ***",
                "targetScript": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}": {
            "input": {
                "chineseSurnameLatin": "*** string ***",
                "chineseGivenNameLatin": "*** string ***",
                "chineseName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "matchStatus": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/chineseNameMatchBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name1": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "name2": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "*** string ***"
                }
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "matchStatus": "*** string ***",
                "score": "*** number ***"
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}": {
            "input": {
                "countryIso2From": "GB",
                "firstNameFrom": "ada",
                "lastNameFrom": "lovelace",
                "countryIso2To": "US",
                "firstNameTo": "nicolas",
                "lastNameTo": "tesla"
            },
            "output": {
                "id": null,
                "firstLastNameGeoFromGender": {
                    "script": "LATIN",
                    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
                    "firstName": "ada",
                    "lastName": "lovelace",
                    "likelyGender": "female",
                    "genderScale": 0.9667738179638148,
                    "score": 20.98847600479561,
                    "probabilityCalibrated": 0.9833869089819074
                },
                "firstLastNameGeoToGender": {
                    "script": "LATIN",
                    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
                    "firstName": "nicolas",
                    "lastName": "tesla",
                    "likelyGender": "male",
                    "genderScale": -0.9915797101926913,
                    "score": 30.224379416275056,
                    "probabilityCalibrated": 0.9957898550963457
                },
                "firstLastNameGeoFromOrigin": {
                    "script": "LATIN",
                    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
                    "firstName": "ada",
                    "lastName": "lovelace",
                    "countryOrigin": "IE",
                    "countryOriginAlt": "GB",
                    "countriesOriginTop": [
                        "IE",
                        "GB",
                        "IL",
                        "IT",
                        "GH",
                        "NG",
                        "LR",
                        "ES",
                        "SE",
                        "ZA"
                    ],
                    "score": 2.568304424015469,
                    "regionOrigin": "Europe",
                    "topRegionOrigin": "Europe",
                    "subRegionOrigin": "Northern Europe",
                    "probabilityCalibrated": 0.45562779224760414,
                    "probabilityAltCalibrated": 0.6327518248452595
                },
                "firstLastNameGeoToOrigin": {
                    "script": "LATIN",
                    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
                    "firstName": "nicolas",
                    "lastName": "tesla",
                    "countryOrigin": "FR",
                    "countryOriginAlt": "GR",
                    "countriesOriginTop": [
                        "FR",
                        "GR",
                        "CM",
                        "RO",
                        "RS",
                        "RS",
                        "CH",
                        "DE",
                        "ES",
                        "CY"
                    ],
                    "score": 1.454789764445522,
                    "regionOrigin": "Europe",
                    "topRegionOrigin": "Europe",
                    "subRegionOrigin": "Western Europe",
                    "probabilityCalibrated": 0.44774495967210787,
                    "probabilityAltCalibrated": 0.4771001024099368
                },
                "firstLastNameGeoFromDiaspora": {
                    "script": "LATIN",
                    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
                    "firstName": "ada",
                    "lastName": "lovelace",
                    "score": 32.41666571408284,
                    "ethnicityAlt": "TrinidadTobago",
                    "ethnicity": "British",
                    "lifted": false,
                    "countryIso2": "GB",
                    "ethnicitiesTop": [
                        "British",
                        "TrinidadTobago",
                        "Irish",
                        "French",
                        "Italian",
                        "Ghanaian",
                        "English",
                        "Jewish",
                        "Scottish",
                        "Swedish"
                    ]
                },
                "firstLastNameGeoToDiaspora": {
                    "script": "LATIN",
                    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
                    "firstName": "nicolas",
                    "lastName": "tesla",
                    "score": 1.1421870006029051,
                    "ethnicityAlt": "Jewish",
                    "ethnicity": "Italian",
                    "lifted": false,
                    "countryIso2": "US",
                    "ethnicitiesTop": [
                        "Italian",
                        "Jewish",
                        "Greek",
                        "Romanian",
                        "Polish",
                        "French",
                        "German",
                        "Moldova",
                        "Serbian",
                        "Irish"
                    ]
                }
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/corridorBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstLastNameGeoFrom": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "ada",
                    "lastName": "lovelace",
                    "countryIso2": "GB"
                },
                "firstLastNameGeoTo": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "nicolas",
                    "lastName": "tesla",
                    "countryIso2": "US"
                }
            },
            "output": {
                "corridorFromTo": [
                    {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstLastNameGeoFromGender": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                            "firstName": "ada",
                            "lastName": "lovelace",
                            "likelyGender": "female",
                            "genderScale": 0.9667738179638148,
                            "score": 20.98847600479561,
                            "probabilityCalibrated": 0.9833869089819074
                        },
                        "firstLastNameGeoToGender": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                            "firstName": "nicolas",
                            "lastName": "tesla",
                            "likelyGender": "male",
                            "genderScale": -0.9915797101926913,
                            "score": 30.224379416275056,
                            "probabilityCalibrated": 0.9957898550963457
                        },
                        "firstLastNameGeoFromOrigin": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                            "firstName": "ada",
                            "lastName": "lovelace",
                            "countryOrigin": "IE",
                            "countryOriginAlt": "GB",
                            "countriesOriginTop": [
                                "IE",
                                "GB",
                                "IL",
                                "IT",
                                "GH",
                                "NG",
                                "LR",
                                "ES",
                                "SE",
                                "ZA"
                            ],
                            "score": 2.568304424015469,
                            "regionOrigin": "Europe",
                            "topRegionOrigin": "Europe",
                            "subRegionOrigin": "Northern Europe",
                            "probabilityCalibrated": 0.45562779224760414,
                            "probabilityAltCalibrated": 0.6327518248452595
                        },
                        "firstLastNameGeoToOrigin": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                            "firstName": "nicolas",
                            "lastName": "tesla",
                            "countryOrigin": "FR",
                            "countryOriginAlt": "GR",
                            "countriesOriginTop": [
                                "FR",
                                "GR",
                                "CM",
                                "RO",
                                "RS",
                                "RS",
                                "CH",
                                "DE",
                                "ES",
                                "CY"
                            ],
                            "score": 1.454789764445522,
                            "regionOrigin": "Europe",
                            "topRegionOrigin": "Europe",
                            "subRegionOrigin": "Western Europe",
                            "probabilityCalibrated": 0.44774495967210787,
                            "probabilityAltCalibrated": 0.4771001024099368
                        },
                        "firstLastNameGeoFromDiaspora": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                            "firstName": "ada",
                            "lastName": "lovelace",
                            "score": 32.41686703300403,
                            "ethnicityAlt": "TrinidadTobago",
                            "ethnicity": "British",
                            "lifted": false,
                            "countryIso2": "GB",
                            "ethnicitiesTop": [
                                "British",
                                "TrinidadTobago",
                                "Irish",
                                "French",
                                "Italian",
                                "Ghanaian",
                                "English",
                                "Jewish",
                                "Scottish",
                                "Swedish"
                            ]
                        },
                        "firstLastNameGeoToDiaspora": {
                            "script": "LATIN",
                            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                            "firstName": "nicolas",
                            "lastName": "tesla",
                            "score": 1.1421954239282939,
                            "ethnicityAlt": "Jewish",
                            "ethnicity": "Italian",
                            "lifted": false,
                            "countryIso2": "US",
                            "ethnicitiesTop": [
                                "Italian",
                                "Jewish",
                                "Greek",
                                "Romanian",
                                "Polish",
                                "French",
                                "German",
                                "Moldova",
                                "Serbian",
                                "Irish"
                            ]
                        }
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/country/{personalNameFull}": {
            "input": { "personalNameFull": "Marie Curie" },
            "output": {
                "script": "LATIN",
                "id": "345f20b8-6b93-46d7-a938-2158ae5094fd",
                "name": "Marie Curie",
                "score": 16.010522433640798,
                "country": "FR",
                "countryAlt": "BE",
                "region": "Europe",
                "topRegion": "Europe",
                "subRegion": "Western Europe",
                "countriesTop": [
                    "FR",
                    "BE",
                    "IE",
                    "CA",
                    "NZ",
                    "AU",
                    "HT",
                    "GB",
                    "CH",
                    "US"
                ],
                "probabilityCalibrated": 0.6038660468170615,
                "probabilityAltCalibrated": 0.6013059282648627
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/countryBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "Marie Curie"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "name": "Marie Curie",
                        "score": 16.010522304999995,
                        "country": "FR",
                        "countryAlt": "BE",
                        "region": "Europe",
                        "topRegion": "Europe",
                        "subRegion": "Western Europe",
                        "countriesTop": [
                            "FR",
                            "BE",
                            "IE",
                            "CA",
                            "NZ",
                            "AU",
                            "HT",
                            "GB",
                            "CH",
                            "US"
                        ],
                        "probabilityCalibrated": 0.6038660443624172,
                        "probabilityAltCalibrated": 0.6013059169873552
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}": {
            "input": {
                "countryIso2": "US",
                "firstName": "Subrahmanyan",
                "lastName": "Chandrasekhar"
            },
            "output": {
                "script": "LATIN",
                "id": "06cea58d-a043-4c33-909d-e78f84a68d75",
                "firstName": "Subrahmanyan",
                "lastName": "Chandrasekhar",
                "score": 36.03940751773479,
                "ethnicityAlt": "Pakistanese",
                "ethnicity": "Indian",
                "lifted": false,
                "countryIso2": "US",
                "ethnicitiesTop": [
                    "Indian",
                    "Pakistanese",
                    "Bangladeshi",
                    "Chinese",
                    "Sri Lankan",
                    "Malays",
                    "TrinidadTobago",
                    "Cambodian",
                    "NativeHawaiian",
                    "Indonesian"
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/diasporaBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Subrahmanyan",
                "lastName": "Chandrasekhar",
                "countryIso2": "US"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Subrahmanyan",
                        "lastName": "Chandrasekhar",
                        "score": 36.039400468550376,
                        "ethnicityAlt": "Pakistanese",
                        "ethnicity": "Indian",
                        "lifted": false,
                        "countryIso2": "US",
                        "ethnicitiesTop": [
                            "Indian",
                            "Pakistanese",
                            "Bangladeshi",
                            "Chinese",
                            "Sri Lankan",
                            "Malays",
                            "TrinidadTobago",
                            "Cambodian",
                            "NativeHawaiian",
                            "Indonesian"
                        ]
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/gender/{firstName}/{lastName}": {
            "input": {
                "firstName": "Rosalind",
                "lastName": "Franklin"
            },
            "output": {
                "script": "LATIN",
                "id": "86767222-94ba-4ee4-8ade-6755228c77ca",
                "firstName": "Rosalind",
                "lastName": "Franklin",
                "likelyGender": "female",
                "genderScale": 0.9730217066962004,
                "score": 21.904701285428477,
                "probabilityCalibrated": 0.9865108533481002
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Rosalind",
                "lastName": "Franklin"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Rosalind",
                        "lastName": "Franklin",
                        "likelyGender": "female",
                        "genderScale": 0.9730217066962004,
                        "score": 21.904701285428477,
                        "probabilityCalibrated": 0.9865108533481002
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderChineseName/{chineseName}": {
            "input": { "chineseName": "谢晓亮" },
            "output": {
                "script": "HAN",
                "id": "46661b4d-32cf-4ca5-b598-f62a8d7e0667",
                "name": "谢晓亮",
                "likelyGender": "male",
                "genderScale": -0.7130895869378251,
                "score": 8.286118331853034,
                "probabilityCalibrated": 0.8565447934689125
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderChineseNameBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "谢晓亮"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "HAN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "name": "谢晓亮",
                        "likelyGender": "male",
                        "genderScale": -0.7130895869378251,
                        "score": 8.286118331853034,
                        "probabilityCalibrated": 0.8565447934689125
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}": {
            "input": {
                "chineseSurnameLatin": "Qīngyún",
                "chineseGivenNameLatin": "Dèng"
            },
            "output": {
                "script": "LATIN",
                "id": "9c1fda7c-54f1-48d1-b082-80cc6148aeb9",
                "firstName": "Dèng",
                "lastName": "Qīngyún",
                "likelyGender": "male",
                "genderScale": -0.014201270075495653,
                "score": 1.8597729950048343,
                "probabilityCalibrated": 0.5071006350377478
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderChineseNamePinyinBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Dèng",
                "lastName": "Qīngyún"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Dèng",
                        "lastName": "Qīngyún",
                        "likelyGender": "male",
                        "genderScale": -0.3132515162951226,
                        "score": 6.747266465582973,
                        "probabilityCalibrated": 0.6566257581475613
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderFull/{fullName}": {
            "input": { "fullName": "Alan Turing" },
            "output": {
                "script": "LATIN",
                "id": "ad176dc1-0a45-41f6-aa3a-5bdd6246b453",
                "name": "Alan Turing",
                "likelyGender": "male",
                "genderScale": -0.9831427708411884,
                "score": 19.119365238807685,
                "probabilityCalibrated": 0.9915713854205942
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderFullBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "Alan Turing"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "name": "Alan Turing",
                        "likelyGender": "male",
                        "genderScale": -0.9831427708411884,
                        "score": 19.119365238807685,
                        "probabilityCalibrated": 0.9915713854205942
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderFullGeo/{fullName}/{countryIso2}": {
            "input": {
                "fullName": "Maryam Mirzakhani",
                "countryIso2": "IR"
            },
            "output": {
                "script": "LATIN",
                "id": "b8737595-afe6-4217-a80e-d1b863de2704",
                "name": "Maryam Mirzakhani",
                "likelyGender": "female",
                "genderScale": 0.7336489993843776,
                "score": 8.702861844637805,
                "probabilityCalibrated": 0.8668244996921888
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderFullGeoBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "Maryam Mirzakhani",
                "countryIso2": "IR"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "name": "Maryam Mirzakhani",
                        "likelyGender": "female",
                        "genderScale": 0.7336489993843776,
                        "score": 8.702861844637805,
                        "probabilityCalibrated": 0.8668244996921888
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}": {
            "input": {
                "firstName": "Sofia",
                "lastName": "Kovalevskaya",
                "countryIso2": "RU"
            },
            "output": {
                "script": "LATIN",
                "id": "1524c414-ee6a-4a07-8056-b8dfe483850d",
                "firstName": "Sofia",
                "lastName": "Kovalevskaya",
                "likelyGender": "female",
                "genderScale": 0.9938175581348969,
                "score": 39.01304923594625,
                "probabilityCalibrated": 0.9969087790674485
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderGeoBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Sofia",
                "lastName": "Kovalevskaya",
                "countryIso2": "RU"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Sofia",
                        "lastName": "Kovalevskaya",
                        "likelyGender": "female",
                        "genderScale": 0.9938175581348969,
                        "score": 39.01304923594625,
                        "probabilityCalibrated": 0.9969087790674485
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderJapaneseNameFull/{japaneseName}": {
            "input": { "japaneseName": "中松 義郎" },
            "output": {
                "script": "HAN",
                "id": "36990426-d289-43b3-99dc-50ccfe2e5ade",
                "name": "中松 義郎",
                "likelyGender": "male",
                "genderScale": -0.22231473979961303,
                "score": 3.72410721464353,
                "probabilityCalibrated": 0.6111573698998065
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderJapaneseNameFullBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "中松 義郎"
            },
            "output": {
                "personalNames": [
                    {
                        "script": "HAN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "name": "中松 義郎",
                        "likelyGender": "male",
                        "genderScale": -0.22231473979961303,
                        "score": 3.72410721464353,
                        "probabilityCalibrated": 0.6111573698998065
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}": {
            "input": {
                "japaneseSurname": "Nakamoto",
                "japaneseGivenName": "Satoshi"
            },
            "output": {
                "script": "LATIN",
                "id": "9cfd8321-0924-4570-a4b7-29a611ce5089",
                "firstName": "Satoshi",
                "lastName": "Nakamoto",
                "likelyGender": "male",
                "genderScale": -0.9828731991489774,
                "score": 24.94061932678776,
                "probabilityCalibrated": 0.9914365995744887
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - POST 
        "/api2/json/genderJapaneseNameBatch": {
            "input": {
                "personalNames": [
                    {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Satoshi",
                        "lastName": "Nakamoto"
                    }
                ]
            },
            "output": {
                "personalNames": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Satoshi",
                        "lastName": "Nakamoto",
                        "likelyGender": "male",
                        "genderScale": -0.9828731991489774,
                        "score": 24.94061932678776,
                        "probabilityCalibrated": 0.9914365995744887
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK2
        // - - - POST 
        "/api2/json/japaneseNameGenderKanjiCandidatesBatch": {
            "input": {
                "personalNames": [
                    {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Takashi",
                        "lastName": "Murakami",
                        "gender": "male"
                    }
                ]
            },
            "output": {
                "namesAndMatchCandidates": [
                    {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Takashi",
                        "lastName": "Murakami",
                        "orderOption": "OrderScoreSquareFNLN",
                        "matchCandidates": [
                            {
                                "candidateName": "村上 隆",
                                "probability": 0.5000000000000001,
                                "predScoreGivenName": -2.249242067337036,
                                "predScoreFamilyName": -0.0006758159724995494
                            },
                            {
                                "candidateName": "村上 崇",
                                "probability": 0.25000000000000006,
                                "predScoreGivenName": -2.572237014770508,
                                "predScoreFamilyName": -0.0006758159724995494
                            },
                            {
                                "candidateName": "村上 隆司",
                                "probability": 0.12500000000000003,
                                "predScoreGivenName": -2.591414213180542,
                                "predScoreFamilyName": -0.0006758159724995494
                            }
                        ]
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}": {
            "input": {
                "japaneseSurnameLatin": "Yamamoto",
                "japaneseGivenNameLatin": "Sanae"
            },
            "output": {
                "script": "LATIN",
                "id": null,
                "firstName": "Sanae",
                "lastName": "Yamamoto",
                "orderOption": "OrderScoreSquareFNLN",
                "matchCandidates": [
                    {
                        "candidateName": "山本 早苗",
                        "probability": 0.5000000000000001,
                        "predScoreGivenName": -0.03954087197780609,
                        "predScoreFamilyName": -0.014371121302247047
                    },
                    {
                        "candidateName": "山本 沙苗",
                        "probability": 0.25000000000000006,
                        "predScoreGivenName": -5.180787086486816,
                        "predScoreFamilyName": -0.014371121302247047
                    },
                    {
                        "candidateName": "山本 小苗",
                        "probability": 0.12500000000000003,
                        "predScoreGivenName": -5.442291259765625,
                        "predScoreFamilyName": -0.014371121302247047
                    }
                ]
            }
        },
        //////////////////////////////////////////////////////////////////////////////////////////// OK
        // - - - GET
        "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}": {
            "input": {
                "japaneseSurnameLatin": "Yamamoto",
                "japaneseGivenNameLatin": "Sanae",
                "knownGender": "male"
            },
            "output": {
                "script": "LATIN",
                "id": null,
                "firstName": "Sanae",
                "lastName": "Yamamoto",
                "orderOption": "OrderScoreSquareFNLN",
                "matchCandidates": [
                    {
                        "candidateName": "山本 早苗",
                        "probability": 0.5000000000000001,
                        "predScoreGivenName": -0.031474947929382324,
                        "predScoreFamilyName": -0.014371121302247047
                    },
                    {
                        "candidateName": "山本 佐苗",
                        "probability": 0.25000000000000006,
                        "predScoreGivenName": -4.911670207977295,
                        "predScoreFamilyName": -0.014371121302247047
                    },
                    {
                        "candidateName": "山本 小苗",
                        "probability": 0.12500000000000003,
                        "predScoreGivenName": -5.687252998352051,
                        "predScoreFamilyName": -0.014371121302247047
                    }
                ]
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/japaneseNameKanjiCandidatesBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "orderOption": "*** string ***",
                "matchCandidates": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}": {
            "input": {
                "japaneseSurnameKanji": "*** string ***",
                "japaneseGivenNameKanji": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "orderOption": "*** string ***",
                "matchCandidates": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/japaneseNameLatinCandidatesBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "orderOption": "*** string ***",
                "matchCandidates": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
            "input": {
                "japaneseSurnameLatin": "*** string ***",
                "japaneseGivenNameLatin": "*** string ***",
                "japaneseName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "matchStatus": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/japaneseNameMatchBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name1": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "name2": {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "*** string ***"
                }
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "matchStatus": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
            "input": {
                "japaneseSurnameLatin": "*** string ***",
                "japaneseGivenNameLatin": "*** string ***",
                "japaneseName": "*** string ***"
            },
            "output": { "feedbackCredits": "*** integer ***" }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/learnable/{source}/{learnable}": {
            "input": { "source": "*** string ***", "learnable": "*** boolean ***" }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/nameType/{properNoun}": {
            "input": { "properNoun": "*** string ***" },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "commonType": "*** string ***",
                "commonTypeAlt": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/nameTypeBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "commonType": "*** string ***",
                "commonTypeAlt": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}": {
            "input": {
                "properNoun": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "commonType": "*** string ***",
                "commonTypeAlt": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/nameTypeGeoBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "commonType": "*** string ***",
                "commonTypeAlt": "*** string ***",
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/origin/{firstName}/{lastName}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "countryOrigin": "*** string ***",
                "countryOriginAlt": "*** string ***",
                "countriesOriginTop": "*** array ***",
                "score": "*** number ***",
                "regionOrigin": "*** string ***",
                "topRegionOrigin": "*** string ***",
                "subRegionOrigin": "*** string ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/originBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "countryOrigin": "*** string ***",
                "countryOriginAlt": "*** string ***",
                "countriesOriginTop": "*** array ***",
                "score": "*** number ***",
                "regionOrigin": "*** string ***",
                "topRegionOrigin": "*** string ***",
                "subRegionOrigin": "*** string ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/parseChineseName/{chineseName}": {
            "input": { "chineseName": "赵丽颖" },
            "output": {
                "script": "HAN",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖",
                "nameParserType": "LN1FN1",
                "nameParserTypeAlt": null,
                "firstLastName": {
                    "script": null,
                    "id": null,
                    "firstName": "丽颖",
                    "lastName": "赵"
                },
                "score": 4.64102036931541
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/parseChineseNameBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖"
            },
            "output": {
                "script": "HAN",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖",
                "nameParserType": "LN1FN1",
                "nameParserTypeAlt": null,
                "firstLastName": {
                    "script": null,
                    "id": null,
                    "firstName": "丽颖",
                    "lastName": "赵"
                },
                "score": 4.64102036931541
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/parseJapaneseName/{japaneseName}": {
            "input": { "japaneseName": "*** string ***" },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/parseJapaneseNameBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/parseName/{nameFull}": {
            "input": { "nameFull": "*** string ***" },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/parseNameBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/parseName/{nameFull}/{countryIso2}": {
            "input": {
                "nameFull": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/parseNameGeoBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "*** string ***",
                "nameParserType": "*** string ***",
                "nameParserTypeAlt": "*** string ***",
                "firstLastName": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***"
                },
                "score": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "phoneNumber": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "internationalPhoneNumberVerified": "*** string ***",
                "phoneCountryIso2Verified": "*** string ***",
                "phoneCountryCode": "*** integer ***",
                "phoneCountryCodeAlt": "*** integer ***",
                "phoneCountryIso2": "*** string ***",
                "phoneCountryIso2Alt": "*** string ***",
                "originCountryIso2": "*** string ***",
                "originCountryIso2Alt": "*** string ***",
                "phoneNumber": "*** string ***",
                "verified": "*** boolean ***",
                "score": "*** number ***",
                "countryIso2": "*** string ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/phoneCodeBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "phoneNumber": "*** string ***",
                "origin": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***",
                    "countryOrigin": "*** string ***",
                    "countryOriginAlt": "*** string ***",
                    "countriesOriginTop": "*** array ***",
                    "score": "*** number ***",
                    "regionOrigin": "*** string ***",
                    "topRegionOrigin": "*** string ***",
                    "subRegionOrigin": "*** string ***",
                    "probabilityCalibrated": "*** number ***",
                    "probabilityAltCalibrated": "*** number ***"
                }
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "internationalPhoneNumberVerified": "*** string ***",
                "phoneCountryIso2Verified": "*** string ***",
                "phoneCountryCode": "*** integer ***",
                "phoneCountryCodeAlt": "*** integer ***",
                "phoneCountryIso2": "*** string ***",
                "phoneCountryIso2Alt": "*** string ***",
                "originCountryIso2": "*** string ***",
                "originCountryIso2Alt": "*** string ***",
                "phoneNumber": "*** string ***",
                "verified": "*** boolean ***",
                "score": "*** number ***",
                "countryIso2": "*** string ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "phoneNumber": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "internationalPhoneNumberVerified": "*** string ***",
                "phoneCountryIso2Verified": "*** string ***",
                "phoneCountryCode": "*** integer ***",
                "phoneCountryCodeAlt": "*** integer ***",
                "phoneCountryIso2": "*** string ***",
                "phoneCountryIso2Alt": "*** string ***",
                "originCountryIso2": "*** string ***",
                "originCountryIso2Alt": "*** string ***",
                "phoneNumber": "*** string ***",
                "verified": "*** boolean ***",
                "score": "*** number ***",
                "countryIso2": "*** string ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/phoneCodeGeoBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "phoneNumber": "*** string ***",
                "origin": {
                    "script": "*** string ***",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "*** string ***",
                    "lastName": "*** string ***",
                    "countryOrigin": "*** string ***",
                    "countryOriginAlt": "*** string ***",
                    "countriesOriginTop": "*** array ***",
                    "score": "*** number ***",
                    "regionOrigin": "*** string ***",
                    "topRegionOrigin": "*** string ***",
                    "subRegionOrigin": "*** string ***",
                    "probabilityCalibrated": "*** number ***",
                    "probabilityAltCalibrated": "*** number ***"
                },
                "countryIso2": "*** string ***",
                "countryIso2Alt": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "internationalPhoneNumberVerified": "*** string ***",
                "phoneCountryIso2Verified": "*** string ***",
                "phoneCountryCode": "*** integer ***",
                "phoneCountryCodeAlt": "*** integer ***",
                "phoneCountryIso2": "*** string ***",
                "phoneCountryIso2Alt": "*** string ***",
                "originCountryIso2": "*** string ***",
                "originCountryIso2Alt": "*** string ***",
                "phoneNumber": "*** string ***",
                "verified": "*** boolean ***",
                "score": "*** number ***",
                "countryIso2": "*** string ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "phoneNumber": "*** string ***",
                "phoneNumberE164": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "internationalPhoneNumberVerified": "*** string ***",
                "phoneCountryIso2Verified": "*** string ***",
                "phoneCountryCode": "*** integer ***",
                "phoneCountryCodeAlt": "*** integer ***",
                "phoneCountryIso2": "*** string ***",
                "phoneCountryIso2Alt": "*** string ***",
                "originCountryIso2": "*** string ***",
                "originCountryIso2Alt": "*** string ***",
                "phoneNumber": "*** string ***",
                "verified": "*** boolean ***",
                "score": "*** number ***",
                "countryIso2": "*** string ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/pinyinChineseName/{chineseName}": {
            "input": { "chineseName": "赵丽颖" },
            "output": {
                "script": "HAN",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖",
                "nameParserType": "LN1FN1",
                "nameParserTypeAlt": null,
                "firstLastName": {
                    "script": null,
                    "id": null,
                    "firstName": "LiYing",
                    "lastName": "Zhao"
                },
                "score": 4.641021485371256
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/pinyinChineseNameBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "name": "赵丽颖",
                "nameParserType": "LN1FN1",
                "nameParserTypeAlt": null,
                "firstLastName": {
                    "script": null,
                    "id": null,
                    "firstName": "LiYing",
                    "lastName": "Zhao"
                },
                "score": 4.641021485371256
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        "/api2/json/softwareVersion": {
            "output": {
                "softwareNameAndVersion": "*** string ***",
                "softwareVersion": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/taxonomyClasses/{classifierName}": {
            "input": { "classifierName": "*** string ***" },
            "output": {
                "classifierName": "*** string ***",
                "taxonomyClasses": "*** array ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/usRaceEthnicity/{firstName}/{lastName}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "raceEthnicityAlt": "*** string ***",
                "raceEthnicity": "*** string ***",
                "score": "*** number ***",
                "raceEthnicitiesTop": "*** array ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/usRaceEthnicityBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "countryIso2": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "raceEthnicityAlt": "*** string ***",
                "raceEthnicity": "*** string ***",
                "score": "*** number ***",
                "raceEthnicitiesTop": "*** array ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - GET
        "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}": {
            "input": {
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "zip5Code": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "raceEthnicityAlt": "*** string ***",
                "raceEthnicity": "*** string ***",
                "score": "*** number ***",
                "raceEthnicitiesTop": "*** array ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        },
        ////////////////////////////////////////////////////////////////////////////////////////////
        // - - - POST 
        "/api2/json/usZipRaceEthnicityBatch": {
            "input": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "countryIso2": "*** string ***",
                "zipCode": "*** string ***"
            },
            "output": {
                "script": "*** string ***",
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "*** string ***",
                "lastName": "*** string ***",
                "raceEthnicityAlt": "*** string ***",
                "raceEthnicity": "*** string ***",
                "score": "*** number ***",
                "raceEthnicitiesTop": "*** array ***",
                "probabilityCalibrated": "*** number ***",
                "probabilityAltCalibrated": "*** number ***"
            }
        }
    }
