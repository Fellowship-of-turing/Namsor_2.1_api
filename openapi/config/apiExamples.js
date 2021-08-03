module.exports = {
    ////////////////////////////////////////////////////////////////////////////////////////////// what is route ???
    // - - - GET
    "/api2/json/anonymize/{source}/{anonymized}": {
        "input": {
            "source": "77afd518a85798fa3723f5ec8120adb7",
            "anonymized": true
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    "/api2/json/apiUsage": {
        "output": {
            "subscription": {
                "apiKey": "77afd518a85798fa3723f5ec8120adb7",
                "planStarted": 1602705605199,
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
                "softLimit": 3000,
                "hardLimit": 5000
            },
            "overageExclTax": 0,
            "overageInclTax": 0,
            "overageCurrency": null,
            "overageQuantity": 0
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    "/api2/json/apiUsageHistory": {
        "output": [
            {
                "apiKey": {
                    "userId": null,
                    "admin": false,
                    "vetted": false,
                    "learnable": true,
                    "anonymized": false,
                    "partner": false,
                    "striped": false,
                    "corporate": false,
                    "disabled": false,
                    "api_key": "b214894824e1c4762fb650866fea8f3c"
                },
                "apiService": "personalname_us_race_ethnicity",
                "createdDateTime": 1620385794616,
                "totalUsage": 1,
                "lastFlushedDateTime": 1620386273418,
                "lastUsedDateTime": 1620386699945,
                "serviceFeaturesUsage": {}
            }
        ]
    },
    // note not same response from live API
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    "/api2/json/apiUsageHistoryAggregate": {
        "output": {
            "timeUnit": "DAY",
            "periodStart": 1602703703373,
            "periodEnd": 1620386273418,
            "totalUsage": 262,
            "historyTruncated": false,
            "data": [
                [
                    0,
                    0,
                    0,
                    4,
                    3,
                    0,
                    0,
                    0,
                    0,
                    6,
                    4,
                    5
                ]
            ],
            "colHeaders": [
                "chineseNameCandidates",
                "japaneseNameCandidates",
                "japaneseNameMatching",
                "name_category",
                "name_parser_type",
                "personalfullname_country",
                "personalfullname_gender",
                "personalname_country_diaspora",
                "personalname_gender",
                "personalname_origin_country",
                "personalname_phone_prefix",
                "personalname_us_race_ethnicity"
            ],
            "rowHeaders": [
                "2018-05-05"
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    "/api2/json/apiServices": {
        "output": {
            "apiServices": [
                {
                    "serviceName": "name_category",
                    "serviceGroup": "general",
                    "costInUnits": 1
                },
                {
                    "serviceName": "personalname_gender",
                    "serviceGroup": "gender",
                    "costInUnits": 1
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/disable/{source}/{disabled}": {
        "input": {
            "source": "77afd518a85798fa3723f5ec8120adb7",
            "disabled": true
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
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/chineseNameCandidatesBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "LiYing",
                    "lastName": "Zhao"
                }
            ]
        },
        "output": {
            "namesAndMatchCandidates": [
                {
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
                        }
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/chineseNameCandidatesGenderBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "LiYing",
                    "lastName": "Zhao",
                    "gender": "female"
                }
            ]
        },
        "output": {
            "namesAndMatchCandidates": [
                {
                    "script": null,
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "LiYing",
                    "lastName": "Zhao",
                    "orderOption": null,
                    "matchCandidates": [
                        {
                            "candidateName": "赵丽英",
                            "probability": 0.07949583832056487,
                            "predScoreGivenName": 0,
                            "predScoreFamilyName": 0
                        },
                        {
                            "candidateName": "赵丽颖",
                            "probability": 0.021402725701690543,
                            "predScoreGivenName": 0,
                            "predScoreFamilyName": 0
                        }
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}": {
        "input": {
            "chineseSurnameLatin": "Fanzhi",
            "chineseGivenNameLatin": "Zeng",
            "knownGender": "male"
        },
        "output": {
            "script": null,
            "id": null,
            "firstName": "Zeng",
            "lastName": "Fanzhi",
            "orderOption": null,
            "matchCandidates": [
                {
                    "candidateName": "甑范志",
                    "probability": 0.014705882352941176,
                    "predScoreGivenName": 0,
                    "predScoreFamilyName": 0
                },
                {
                    "candidateName": "甑凡智",
                    "probability": 0.014705882352941176,
                    "predScoreGivenName": 0,
                    "predScoreFamilyName": 0
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}": {
        "input": {
            "chineseSurnameLatin": "Yu",
            "chineseGivenNameLatin": "Hong",
            "chineseName": "喻红"
        },
        "output": {
            "script": null,
            "id": null,
            "matchStatus": "Match",
            "score": 1.0017825620273417
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/chineseNameMatchBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                    "name1": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Hong",
                        "lastName": "Yu"
                    },
                    "name2": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                        "name": "喻红"
                    }
                }
            ]
        },
        "output": {
            "matchedNames": [
                {
                    "script": null,
                    "id": null,
                    "matchStatus": "Match",
                    "score": 1.0017825620273417
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}": {
        "input": {
            "countryIso2From": "GB",
            "firstNameFrom": "Ada",
            "lastNameFrom": "Lovelace",
            "countryIso2To": "US",
            "firstNameTo": "Nicolas",
            "lastNameTo": "Tesla"
        },
        "output": {
            "id": null,
            "firstLastNameGeoFromGender": {
                "script": "LATIN",
                "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
                "firstName": "Ada",
                "lastName": "Lovelace",
                "likelyGender": "female",
                "genderScale": 0.9667738179638148,
                "score": 20.98847600479561,
                "probabilityCalibrated": 0.9833869089819074
            },
            "firstLastNameGeoToGender": {
                "script": "LATIN",
                "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
                "firstName": "Nicolas",
                "lastName": "Tesla",
                "likelyGender": "male",
                "genderScale": -0.9915797101926913,
                "score": 30.224379416275056,
                "probabilityCalibrated": 0.9957898550963457
            },
            "firstLastNameGeoFromOrigin": {
                "script": "LATIN",
                "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
                "firstName": "Ada",
                "lastName": "Lovelace",
                "countryOrigin": "IE",
                "countryOriginAlt": "GB",
                "countriesOriginTop": [
                    "IE",
                    "GB"
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
                "firstName": "Nicolas",
                "lastName": "Tesla",
                "countryOrigin": "FR",
                "countryOriginAlt": "GR",
                "countriesOriginTop": [
                    "FR",
                    "GR"
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
                "firstName": "Ada",
                "lastName": "Lovelace",
                "score": 32.41666571408284,
                "ethnicityAlt": "TrinidadTobago",
                "ethnicity": "British",
                "lifted": false,
                "countryIso2": "GB",
                "ethnicitiesTop": [
                    "British",
                    "TrinidadTobago"
                ]
            },
            "firstLastNameGeoToDiaspora": {
                "script": "LATIN",
                "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
                "firstName": "Nicolas",
                "lastName": "Tesla",
                "score": 1.1421870006029051,
                "ethnicityAlt": "Jewish",
                "ethnicity": "Italian",
                "lifted": false,
                "countryIso2": "US",
                "ethnicitiesTop": [
                    "Italian",
                    "Jewish"
                ]
            }
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/corridorBatch": {
        "input": {
            "corridorFromTo": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstLastNameGeoFrom": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Ada",
                        "lastName": "Lovelace",
                        "countryIso2": "GB"
                    },
                    "firstLastNameGeoTo": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Nicolas",
                        "lastName": "Tesla",
                        "countryIso2": "US"
                    }
                }
            ]
        },
        "output": {
            "corridorFromTo": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstLastNameGeoFromGender": {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                        "firstName": "Ada",
                        "lastName": "Lovelace",
                        "likelyGender": "female",
                        "genderScale": 0.9667738179638148,
                        "score": 20.98847600479561,
                        "probabilityCalibrated": 0.9833869089819074
                    },
                    "firstLastNameGeoToGender": {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                        "firstName": "Nicolas",
                        "lastName": "Tesla",
                        "likelyGender": "male",
                        "genderScale": -0.9915797101926913,
                        "score": 30.224379416275056,
                        "probabilityCalibrated": 0.9957898550963457
                    },
                    "firstLastNameGeoFromOrigin": {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                        "firstName": "Ada",
                        "lastName": "Lovelace",
                        "countryOrigin": "IE",
                        "countryOriginAlt": "GB",
                        "countriesOriginTop": [
                            "IE",
                            "GB"
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
                        "firstName": "Nicolas",
                        "lastName": "Tesla",
                        "countryOrigin": "FR",
                        "countryOriginAlt": "GR",
                        "countriesOriginTop": [
                            "FR",
                            "GR"
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
                        "firstName": "Ada",
                        "lastName": "Lovelace",
                        "score": 32.41686703300403,
                        "ethnicityAlt": "TrinidadTobago",
                        "ethnicity": "British",
                        "lifted": false,
                        "countryIso2": "GB",
                        "ethnicitiesTop": [
                            "British",
                            "TrinidadTobago"
                        ]
                    },
                    "firstLastNameGeoToDiaspora": {
                        "script": "LATIN",
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                        "firstName": "Nicolas",
                        "lastName": "Tesla",
                        "score": 1.1421954239282939,
                        "ethnicityAlt": "Jewish",
                        "ethnicity": "Italian",
                        "lifted": false,
                        "countryIso2": "US",
                        "ethnicitiesTop": [
                            "Italian",
                            "Jewish"
                        ]
                    }
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                "BE"
            ],
            "probabilityCalibrated": 0.6038660468170615,
            "probabilityAltCalibrated": 0.6013059282648627
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/countryBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Marie Curie"
                }
            ]
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
                        "BE"
                    ],
                    "probabilityCalibrated": 0.6038660443624172,
                    "probabilityAltCalibrated": 0.6013059169873552
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                "Pakistanese"
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/diasporaBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Subrahmanyan",
                    "lastName": "Chandrasekhar",
                    "countryIso2": "US"
                }
            ]
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
                        "Pakistanese"
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Rosalind",
                    "lastName": "Franklin"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderChineseNameBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "谢晓亮"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderChineseNamePinyinBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Dèng",
                    "lastName": "Qīngyún"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderFullBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Alan Turing"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderFullGeoBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Maryam Mirzakhani",
                    "countryIso2": "IR"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderGeoBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Sofia",
                    "lastName": "Kovalevskaya",
                    "countryIso2": "RU"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/genderJapaneseNameFullBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "中松 義郎"
                }
            ]
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                        }
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/japaneseNameKanjiCandidatesBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Sanae",
                    "lastName": "Yamamoto"
                }
            ]
        },
        "output": {
            "namesAndMatchCandidates": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
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
                        }
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}": {
        "input": {
            "japaneseSurnameKanji": "千春",
            "japaneseGivenNameKanji": "塩田"
        },
        "output": {
            "script": "HAN",
            "id": null,
            "firstName": "塩田",
            "lastName": "千春",
            "orderOption": "OrderScoreSquareFNLN",
            "matchCandidates": [
                {
                    "candidateName": "chiharu shiota",
                    "probability": 0.5000000149011616,
                    "predScoreGivenName": -0.3543974459171295,
                    "predScoreFamilyName": -0.004423846025019884
                },
                {
                    "candidateName": "chiharu shioda",
                    "probability": 0.2500000074505808,
                    "predScoreGivenName": -1.2378724813461304,
                    "predScoreFamilyName": -0.004423846025019884
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/japaneseNameLatinCandidatesBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "塩田",
                    "lastName": "千春"
                }
            ]
        },
        "output": {
            "namesAndMatchCandidates": [
                {
                    "script": "HAN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "塩田",
                    "lastName": "千春",
                    "orderOption": "OrderScoreSquareFNLN",
                    "matchCandidates": [
                        {
                            "candidateName": "chiharu shiota",
                            "probability": 0.5000000149011616,
                            "predScoreGivenName": -0.3543974459171295,
                            "predScoreFamilyName": -0.004423846025019884
                        },
                        {
                            "candidateName": "chiharu shioda",
                            "probability": 0.2500000074505808,
                            "predScoreGivenName": -1.2378724813461304,
                            "predScoreFamilyName": -0.004423846025019884
                        }
                    ]
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
        "input": {
            "japaneseSurnameLatin": "Tomioka",
            "japaneseGivenNameLatin": "Tessai",
            "japaneseName": "富岡 鉄斎"
        },
        "output": {
            "script": null,
            "id": null,
            "matchStatus": "Match",
            "score": 1.002224089213585
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/japaneseNameMatchBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
                    "name1": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                        "firstName": "Tessai",
                        "lastName": "Tomioka"
                    },
                    "name2": {
                        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                        "name": "富岡 鉄斎"
                    }
                }
            ]
        },
        "output": {
            "matchedNames": [
                {
                    "script": null,
                    "id": null,
                    "matchStatus": "Match",
                    "score": 1.002224089213585
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}": {
        "input": {
            "japaneseSurnameLatin": "Tomioka",
            "japaneseGivenNameLatin": "Tessai",
            "japaneseName": "富岡 鉄斎"
        },
        "output": { "feedbackCredits": 1 }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// what is route ??? 
    // - - - GET
    "/api2/json/learnable/{source}/{learnable}": {
        "input": {
            "source": "77afd518a85798fa3723f5ec8120adb7",
            "learnable": true
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/nameType/{properNoun}": {
        "input": { "properNoun": "Zippo" },
        "output": {
            "script": "LATIN",
            "id": "a88b1bf1-56f1-40d3-84db-4daf57121b1d",
            "name": "Zippo",
            "commonType": "brand-name",
            "commonTypeAlt": "toponym",
            "score": 7.717552234146745
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/nameTypeBatch": {
        "input": {
            "properNouns": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Zippo"
                }
            ]
        },
        "output": {
            "properNouns": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Zippo",
                    "commonType": "brand-name",
                    "commonTypeAlt": "toponym",
                    "score": 7.717552576402805
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}": {
        "input": {
            "properNoun": "Edi Gathegi",
            "countryIso2": "KE"
        },
        "output": {
            "script": "LATIN",
            "id": "a941ea3f-3b3c-4ff1-af28-c01b086b7d79",
            "name": "Edi Gathegi",
            "commonType": "anthroponym",
            "commonTypeAlt": "brand-name",
            "score": 18.5790039224226
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/nameTypeGeoBatch": {
        "input": {
            "properNouns": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Edi Gathegi",
                    "countryIso2": "KE"
                }
            ]
        },
        "output": {
            "properNouns": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Edi Gathegi",
                    "commonType": "anthroponym",
                    "commonTypeAlt": "brand-name",
                    "score": 18.579081911201673
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/origin/{firstName}/{lastName}": {
        "input": {
            "firstName": "Zanele",
            "lastName": "Muholi"
        },
        "output": {
            "script": "LATIN",
            "id": "859e5b4b-1243-4d5a-902d-ac4d46712ce7",
            "firstName": "Zanele ",
            "lastName": "Muholi",
            "countryOrigin": "ZA",
            "countryOriginAlt": "LS",
            "countriesOriginTop": [
                "ZA",
                "LS"
            ],
            "score": 14.109780317889099,
            "regionOrigin": "Africa",
            "topRegionOrigin": "Africa",
            "subRegionOrigin": "Southern Africa",
            "probabilityCalibrated": 0.7807734140287722,
            "probabilityAltCalibrated": 0.8559822284821633
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/originBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Zanele",
                    "lastName": "Muholi"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Zanele",
                    "lastName": "Muholi",
                    "countryOrigin": "ZA",
                    "countryOriginAlt": "LS",
                    "countriesOriginTop": [
                        "ZA",
                        "LS"
                    ],
                    "score": 14.109780317889099,
                    "regionOrigin": "Africa",
                    "topRegionOrigin": "Africa",
                    "subRegionOrigin": "Southern Africa",
                    "probabilityCalibrated": 0.7807734140304999,
                    "probabilityAltCalibrated": 0.8559822288694453
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/parseChineseNameBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "赵丽颖"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
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
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/parseJapaneseName/{japaneseName}": {
        "input": { "japaneseName": "小島 秀夫" },
        "output": {
            "script": "HAN",
            "id": "4646501e-33e3-44bc-be6f-66cab4bb5e94",
            "name": "小島 秀夫",
            "nameParserType": "LN1FN1",
            "nameParserTypeAlt": null,
            "firstLastName": {
                "script": null,
                "id": null,
                "firstName": "秀夫",
                "lastName": "小島"
            },
            "score": 100
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/parseJapaneseNameBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "小島 秀夫"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "HAN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "小島 秀夫",
                    "nameParserType": "LN1FN1",
                    "nameParserTypeAlt": null,
                    "firstLastName": {
                        "script": null,
                        "id": null,
                        "firstName": "秀夫",
                        "lastName": "小島"
                    },
                    "score": 100
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/parseName/{nameFull}": {
        "input": { "nameFull": "John Smith" },
        "output": {
            "script": "LATIN",
            "id": "3fb36d3d-f9cd-4ccc-a348-38d9e5b5232d",
            "name": "John Smith",
            "nameParserType": "FN1LN1",
            "nameParserTypeAlt": null,
            "firstLastName": {
                "script": null,
                "id": null,
                "firstName": "John",
                "lastName": "Smith"
            },
            "score": 23.313692197779005
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/parseNameBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "John Smith"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "John Smith",
                    "nameParserType": "FN1LN1",
                    "nameParserTypeAlt": null,
                    "firstLastName": {
                        "script": null,
                        "id": null,
                        "firstName": "John",
                        "lastName": "Smith"
                    },
                    "score": 23.31368511252333
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/parseName/{nameFull}/{countryIso2}": {
        "input": {
            "nameFull": "Ricardo Darín",
            "countryIso2": "AR"
        },
        "output": {
            "script": "LATIN",
            "id": "dbe186ee-cfd6-48e0-a449-00c70df61ec3",
            "name": "Ricardo Darín",
            "nameParserType": "FN1LN1",
            "nameParserTypeAlt": "FN1LN2",
            "firstLastName": {
                "script": null,
                "id": null,
                "firstName": "Ricardo",
                "lastName": "Darín"
            },
            "score": 3.4476222927492017
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/parseNameGeoBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Ricardo Darín",
                    "countryIso2": "AR"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "Ricardo Darín",
                    "nameParserType": "FN1LN1",
                    "nameParserTypeAlt": "FN1LN2",
                    "firstLastName": {
                        "script": null,
                        "id": null,
                        "firstName": "Ricardo",
                        "lastName": "Darín"
                    },
                    "score": 3.447624982163207
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}": {
        "input": {
            "firstName": "Jamini",
            "lastName": "Roy",
            "phoneNumber": "09804201420"
        },
        "output": {
            "script": "LATIN",
            "id": null,
            "firstName": "Jamini",
            "lastName": "Roy",
            "internationalPhoneNumberVerified": "+91 98042 01420",
            "phoneCountryIso2Verified": "IN",
            "phoneCountryCode": 91,
            "phoneCountryCodeAlt": 98,
            "phoneCountryIso2": "IN",
            "phoneCountryIso2Alt": "IR",
            "originCountryIso2": "BD",
            "originCountryIso2Alt": "ID",
            "phoneNumber": "09804201420",
            "verified": true,
            "score": 7.659341221254624
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// schema origin why here ???
    // - - - POST 
    "/api2/json/phoneCodeBatch": {
        "input": {
            "personalNamesWithPhoneNumbers": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Jamini",
                    "lastName": "Roy",
                    "phoneNumber": "09804201420"
                }
            ]
        },
        "output": {
            "personalNamesWithPhoneNumbers": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Jamini",
                    "lastName": "Roy",
                    "internationalPhoneNumberVerified": "+91 98042 01420",
                    "phoneCountryIso2Verified": "IN",
                    "phoneCountryCode": 91,
                    "phoneCountryCodeAlt": 98,
                    "phoneCountryIso2": "IN",
                    "phoneCountryIso2Alt": "IR",
                    "originCountryIso2": "BD",
                    "originCountryIso2Alt": "ID",
                    "phoneNumber": "09804201420",
                    "verified": true,
                    "score": 7.659341221254494
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}": {
        "input": {
            "firstName": "Teniola",
            "lastName": "Apata",
            "phoneNumber": "08186472651",
            "countryIso2": "NG"
        },
        "output": {
            "script": "LATIN",
            "id": null,
            "firstName": "Teniola",
            "lastName": "Apata",
            "internationalPhoneNumberVerified": "+234 818 647 2651",
            "phoneCountryIso2Verified": "NG",
            "phoneCountryCode": 234,
            "phoneCountryCodeAlt": 62,
            "phoneCountryIso2": "NG",
            "phoneCountryIso2Alt": "ID",
            "originCountryIso2": "NG",
            "originCountryIso2Alt": "CI",
            "phoneNumber": "08186472651",
            "verified": true,
            "score": 2.362918055640346
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// schema origin why here ???
    // - - - POST 
    "/api2/json/phoneCodeGeoBatch": {
        "input": {
            "personalNamesWithPhoneNumbers": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Teniola",
                    "lastName": "Apata",
                    "phoneNumber": "08186472651",
                    "countryIso2": "NG"
                }
            ]
        },
        "output": {
            "personalNamesWithPhoneNumbers": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Teniola",
                    "lastName": "Apata",
                    "internationalPhoneNumberVerified": "+234 818 647 2651",
                    "phoneCountryIso2Verified": "NG",
                    "phoneCountryCode": 234,
                    "phoneCountryCodeAlt": 62,
                    "phoneCountryIso2": "NG",
                    "phoneCountryIso2Alt": "ID",
                    "originCountryIso2": "NG",
                    "originCountryIso2Alt": "CI",
                    "phoneNumber": "08186472651",
                    "verified": true,
                    "score": 2.362918055640346
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// reponse incoherente ???
    // - - - GET
    "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}": {
        "input": {
            "firstName": "Diego",
            "lastName": "Rivera",
            "phoneNumber": "14448140442",
            "phoneNumberE164": "+524448140442",
            "countryIso2": "MX"
        },
        "output": {
            "feedbackCredits": 1
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
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
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/pinyinChineseNameBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "name": "赵丽颖"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
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
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    "/api2/json/softwareVersion": {
        "output": {
            "softwareNameAndVersion": "NamSorAPIv2.0.14B01",
            "softwareVersion": [
                2,
                0,
                14
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/taxonomyClasses/{classifierName}": {
        "input": { "classifierName": "personalname_gender" },
        "output": {
            "classifierName": "personalname_gender",
            "taxonomyClasses": [
                "female",
                "male"
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/usRaceEthnicity/{firstName}/{lastName}": {
        "input": {
            "firstName": "Keith",
            "lastName": "Haring"
        },
        "output": {
            "script": "LATIN",
            "id": "3f1efb7d-5141-4ebf-8373-17c4068d22e4",
            "firstName": "Keith",
            "lastName": "Haring",
            "raceEthnicityAlt": "B_NL",
            "raceEthnicity": "W_NL",
            "score": 14.124697493222158,
            "raceEthnicitiesTop": [
                "W_NL",
                "B_NL",
                "A",
                "HL"
            ],
            "probabilityCalibrated": 0.8284804986473213,
            "probabilityAltCalibrated": 0.8890718404096647
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/usRaceEthnicityBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Keith",
                    "lastName": "Haring",
                    "countryIso2": "US"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Keith",
                    "lastName": "Haring",
                    "raceEthnicityAlt": "B_NL",
                    "raceEthnicity": "W_NL",
                    "score": 14.124697493222158,
                    "raceEthnicitiesTop": [
                        "W_NL",
                        "B_NL",
                        "A",
                        "HL"
                    ],
                    "probabilityCalibrated": 0.8284804986473213,
                    "probabilityAltCalibrated": 0.8890718404096647
                }
            ]
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - GET
    "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}": {
        "input": {
            "firstName": "Makoto",
            "lastName": "Iwamatsu",
            "zip5Code": "10019"
        },
        "output": {
            "script": "LATIN",
            "id": "d2e92047-c3ce-4363-bf3c-a54757d372b2",
            "firstName": "Makoto",
            "lastName": "Iwamatsu",
            "raceEthnicityAlt": "HL",
            "raceEthnicity": "A",
            "score": 32.90567784847702,
            "raceEthnicitiesTop": [
                "A",
                "HL",
                "B_NL",
                "W_NL"
            ],
            "probabilityCalibrated": 0.9376434608736617,
            "probabilityAltCalibrated": 0.9817007157185398
        }
    },
    //////////////////////////////////////////////////////////////////////////////////////////// OK2
    // - - - POST 
    "/api2/json/usZipRaceEthnicityBatch": {
        "input": {
            "personalNames": [
                {
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Makoto",
                    "lastName": "Iwamatsu",
                    "countryIso2": "JP",
                    "zipCode": "10019"
                }
            ]
        },
        "output": {
            "personalNames": [
                {
                    "script": "LATIN",
                    "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                    "firstName": "Makoto",
                    "lastName": "Iwamatsu",
                    "raceEthnicityAlt": "HL",
                    "raceEthnicity": "A",
                    "score": 33.10409827435145,
                    "raceEthnicitiesTop": [
                        "A",
                        "HL",
                        "B_NL",
                        "W_NL"
                    ],
                    "probabilityCalibrated": 0.943439227727173,
                    "probabilityAltCalibrated": 0.9817007157185398
                }
            ]
        }
    }
}