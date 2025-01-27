export const csv_structure = {
    "base": "https://v2.namsor.com/NamSorAPIv2/api2/json/",
    "errorResponses": [
        "401",
        "403"
    ],
    "routes": {
        "nameTypeBatch": {
            "title": "Name Type",
            "tag": "Name Type",
            "summary": "Returns the type of submitted proper nouns. Ex: John Smith = personal name, Namsor = brand name.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "properNouns": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "properNouns": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "commonType": "String",
                        "commonTypeAlt": "String",
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "properNouns",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "properNouns",
            "resKeys": [
                "script",
                "id",
                "name",
                "commonType",
                "commonTypeAlt",
                "score"
            ]
        },
        "nameTypeGeoBatch": {
            "title": "Name Type Geo",
            "tag": "Name Type",
            "summary": "Returns the type of submitted proper nouns using their geographic context. Ex: John Smith = personal name, Namsor = brand name.",
            "cost": 1,
            "required": [
                "name",
                "countryIso2"
            ],
            "request": {
                "properNouns": {
                    "id": "String",
                    "name": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "properNouns": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "commonType": "String",
                        "commonTypeAlt": "String",
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "properNouns",
            "reqKeys": [
                "id",
                "name",
                "countryIso2"
            ],
            "resMetaKey": "properNouns",
            "resKeys": [
                "script",
                "id",
                "name",
                "commonType",
                "commonTypeAlt",
                "score"
            ]
        },
        "corridorBatch": {
            "title": "Corridor",
            "tag": "Origin",
            "summary": "Returns complete analysis of cross border interactions between two names using their geographic context. The sender is the one who initiated the interaction (from) while the receiver is the one intended to receive the interaction (to).",
            "cost": 20,
            "required": [
                "firstLastNameGeoFrom.firstName",
                "firstLastNameGeoFrom.lastName",
                "firstLastNameGeoFrom.countryIso2",
                "firstLastNameGeoTo.firstName",
                "firstLastNameGeoTo.lastName",
                "firstLastNameGeoTo.countryIso2"
            ],
            "request": {
                "corridorFromTo": {
                    "id": "String",
                    "firstLastNameGeoFrom": {
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "countryIso2": "String"
                    },
                    "firstLastNameGeoTo": {
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "countryIso2": "String"
                    }
                }
            },
            "response": {
                "200": {
                    "corridorFromTo": {
                        "id": "String",
                        "FirstLastNameGenderedOut": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String",
                            "likelyGender": "String",
                            "genderScale": "Number",
                            "score": "Number",
                            "probabilityCalibrated": "Number"
                        },
                        "FirstLastNameOriginedOut": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String",
                            "countryOrigin": "String",
                            "countryOriginAlt": "String",
                            "countriesOriginTop": "Array",
                            "score": "Number",
                            "regionOrigin": "String",
                            "topRegionOrigin": "String",
                            "subRegionOrigin": "String",
                            "probabilityCalibrated": "Number",
                            "probabilityAltCalibrated": "Number"
                        },
                        "FirstLastNameDiasporaedOut": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String",
                            "score": "Number",
                            "ethnicityAlt": "String",
                            "ethnicity": "String",
                            "lifted": "Boolean",
                            "countryIso2": "String",
                            "ethnicitiesTop": "Array",
                            "probabilityCalibrated": "Number",
                            "probabilityAltCalibrated": "Number"
                        },
                        "script": "String"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "corridorFromTo",
            "reqKeys": [
                "id",
                "firstLastNameGeoFrom.id",
                "firstLastNameGeoFrom.firstName",
                "firstLastNameGeoFrom.lastName",
                "firstLastNameGeoFrom.countryIso2",
                "firstLastNameGeoTo.id",
                "firstLastNameGeoTo.firstName",
                "firstLastNameGeoTo.lastName",
                "firstLastNameGeoTo.countryIso2"
            ],
            "resMetaKey": "corridorFromTo",
            "resKeys": [
                "id",
                "FirstLastNameGenderedOut.script",
                "FirstLastNameGenderedOut.id",
                "FirstLastNameGenderedOut.firstName",
                "FirstLastNameGenderedOut.lastName",
                "FirstLastNameGenderedOut.likelyGender",
                "FirstLastNameGenderedOut.genderScale",
                "FirstLastNameGenderedOut.score",
                "FirstLastNameGenderedOut.probabilityCalibrated",
                "FirstLastNameOriginedOut.script",
                "FirstLastNameOriginedOut.id",
                "FirstLastNameOriginedOut.firstName",
                "FirstLastNameOriginedOut.lastName",
                "FirstLastNameOriginedOut.countryOrigin",
                "FirstLastNameOriginedOut.countryOriginAlt",
                "FirstLastNameOriginedOut.countriesOriginTop",
                "FirstLastNameOriginedOut.score",
                "FirstLastNameOriginedOut.regionOrigin",
                "FirstLastNameOriginedOut.topRegionOrigin",
                "FirstLastNameOriginedOut.subRegionOrigin",
                "FirstLastNameOriginedOut.probabilityCalibrated",
                "FirstLastNameOriginedOut.probabilityAltCalibrated",
                "FirstLastNameDiasporaedOut.script",
                "FirstLastNameDiasporaedOut.id",
                "FirstLastNameDiasporaedOut.firstName",
                "FirstLastNameDiasporaedOut.lastName",
                "FirstLastNameDiasporaedOut.score",
                "FirstLastNameDiasporaedOut.ethnicityAlt",
                "FirstLastNameDiasporaedOut.ethnicity",
                "FirstLastNameDiasporaedOut.lifted",
                "FirstLastNameDiasporaedOut.countryIso2",
                "FirstLastNameDiasporaedOut.ethnicitiesTop",
                "FirstLastNameDiasporaedOut.probabilityCalibrated",
                "FirstLastNameDiasporaedOut.probabilityAltCalibrated",
                "script"
            ]
        },
        "genderGeoBatch": {
            "title": "Gender Geo",
            "tag": "Gender",
            "summary": "Returns the most likely gender of first names and last names using their geographic context.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "genderBatch": {
            "title": "Gender",
            "tag": "Gender",
            "summary": "Returns the most likely gender of first names and last names.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "genderFullBatch": {
            "title": "Gender Full Name",
            "tag": "Gender",
            "summary": "Returns the most likely gender of full names.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "genderFullGeoBatch": {
            "title": "Gender Full Name Geo",
            "tag": "Gender",
            "summary": "Returns the most likely gender of full names, according to their geographic context.",
            "cost": 1,
            "required": [
                "name",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "originBatch": {
            "title": "Origin",
            "tag": "Origin",
            "summary": "Returns the most likely country of origin of first names and a last names. Note that the \"Diaspora\" endpoint may be better suited for countries like U.S.A, Canada, Australia, New-Zealand and other melting-pots.",
            "cost": 10,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "countryOrigin": "String",
                        "countryOriginAlt": "String",
                        "countriesOriginTop": "Array",
                        "score": "Number",
                        "regionOrigin": "String",
                        "topRegionOrigin": "String",
                        "subRegionOrigin": "String",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "countryOrigin",
                "countryOriginAlt",
                "countriesOriginTop",
                "score",
                "regionOrigin",
                "topRegionOrigin",
                "subRegionOrigin",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "subclassificationBatch": {
            "title": "Country Subclassification",
            "tag": "Origin",
            "summary": "Returns the most likely geographic subdivision context of of first names and a last names. Subdivision are either a country's states or regions. At the moment this is only supported for India (ISO 3166-1 alpha-2 code \"IN\").",
            "cost": 10,
            "required": [
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "countryIso2": "String",
                        "subClassification": "String",
                        "subClassificationAlt": "String",
                        "subclassificationTop": "Array",
                        "score": "Number",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "countryIso2",
                "subClassification",
                "subClassificationAlt",
                "subclassificationTop",
                "score",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "countryBatch": {
            "title": "Country",
            "tag": "Origin",
            "summary": "Returns the most likely geographic context of full names (first names and last names) or surnames.",
            "cost": 10,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "score": "Number",
                        "country": "String",
                        "countryAlt": "String",
                        "region": "String",
                        "topRegion": "String",
                        "subRegion": "String",
                        "countriesTop": "Array",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "score",
                "country",
                "countryAlt",
                "region",
                "topRegion",
                "subRegion",
                "countriesTop",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "usRaceEthnicityBatch": {
            "title": "US Race and Ethnicity",
            "tag": "Origin",
            "summary": "Returns the most likely U.S. race or ethnicity of U.S. resident's first names and last names.",
            "cost": 10,
            "required": [
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "raceEthnicityAlt": "String",
                        "raceEthnicity": "String",
                        "score": "Number",
                        "raceEthnicitiesTop": "Array",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "raceEthnicityAlt",
                "raceEthnicity",
                "score",
                "raceEthnicitiesTop",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "usZipRaceEthnicityBatch": {
            "title": "US Race and Ethnicity ZIP",
            "tag": "Origin",
            "summary": "Returns the most likely U.S. race or ethnicity of U.S. resident's first names and last names, using their ZIP code.",
            "cost": 10,
            "required": [
                "firstName",
                "lastName",
                "countryIso2",
                "zipCode"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "countryIso2": "String",
                    "zipCode": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "raceEthnicityAlt": "String",
                        "raceEthnicity": "String",
                        "score": "Number",
                        "raceEthnicitiesTop": "Array",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "countryIso2",
                "zipCode"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "raceEthnicityAlt",
                "raceEthnicity",
                "score",
                "raceEthnicitiesTop",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "diasporaBatch": {
            "title": "Diaspora",
            "tag": "Origin",
            "summary": "Returns the most likely ethnicity or diaspora of first names and last names, according to their country of residence.",
            "cost": 20,
            "required": [
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "score": "Number",
                        "ethnicityAlt": "String",
                        "ethnicity": "String",
                        "lifted": "Boolean",
                        "countryIso2": "String",
                        "ethnicitiesTop": "Array",
                        "probabilityCalibrated": "Number",
                        "probabilityAltCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "score",
                "ethnicityAlt",
                "ethnicity",
                "lifted",
                "countryIso2",
                "ethnicitiesTop",
                "probabilityCalibrated",
                "probabilityAltCalibrated"
            ]
        },
        "parseNameBatch": {
            "title": "Split Name",
            "tag": "Split Name",
            "summary": "Returns the most likely first name and last name structure of full names.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "nameParserType": "String",
                        "nameParserTypeAlt": "String",
                        "firstLastName": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String"
                        },
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "nameParserType",
                "nameParserTypeAlt",
                "firstLastName.script",
                "firstLastName.id",
                "firstLastName.firstName",
                "firstLastName.lastName",
                "score"
            ]
        },
        "parseNameGeoBatch": {
            "title": "Split Name Geo",
            "tag": "Split Name",
            "summary": "Returns the most likely first name and last name structure of full names using their geographic context.",
            "cost": 1,
            "required": [
                "name",
                "countryIso2"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String",
                    "countryIso2": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "nameParserType": "String",
                        "nameParserTypeAlt": "String",
                        "firstLastName": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String"
                        },
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name",
                "countryIso2"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "nameParserType",
                "nameParserTypeAlt",
                "firstLastName.script",
                "firstLastName.id",
                "firstLastName.firstName",
                "firstLastName.lastName",
                "score"
            ]
        },
        "parseChineseNameBatch": {
            "title": "Split Chinese Name",
            "tag": "Chinese",
            "summary": "Returns the most likely first name and last name structure of full names (family names and given names) in Standard Mandarin Chinese.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "nameParserType": "String",
                        "nameParserTypeAlt": "String",
                        "firstLastName": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String"
                        },
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "nameParserType",
                "nameParserTypeAlt",
                "firstLastName.script",
                "firstLastName.id",
                "firstLastName.firstName",
                "firstLastName.lastName",
                "score"
            ]
        },
        "pinyinChineseNameBatch": {
            "title": "To Pinyin Name",
            "tag": "Chinese",
            "summary": "Return the most likely Pinyin transcription of full names (family names and given names) in Standard Mandarin Chinese.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "nameParserType": "String",
                        "nameParserTypeAlt": "String",
                        "firstLastName": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String"
                        },
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "nameParserType",
                "nameParserTypeAlt",
                "firstLastName.script",
                "firstLastName.id",
                "firstLastName.firstName",
                "firstLastName.lastName",
                "score"
            ]
        },
        "chineseNameMatchBatch": {
            "title": "Match Chinese Name",
            "tag": "Chinese",
            "summary": "Matches full names in Standard Mandarin Chinese against corresponding family names and given names in Pinyin.",
            "cost": 1,
            "required": [
                "name1.firstName",
                "name1.lastName",
                "name2.name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name1": {
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String"
                    },
                    "name2": {
                        "id": "String",
                        "name": "String"
                    }
                }
            },
            "response": {
                "200": {
                    "matchedNames": {
                        "script": "String",
                        "id": "String",
                        "matchStatus": "String",
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name1.id",
                "name1.firstName",
                "name1.lastName",
                "name2.id",
                "name2.name"
            ],
            "resMetaKey": "matchedNames",
            "resKeys": [
                "script",
                "id",
                "matchStatus",
                "score"
            ]
        },
        "genderChineseNamePinyinBatch": {
            "title": "Gender Name Pinyin",
            "tag": "Chinese",
            "summary": "Return the most likely gender of family names and a given names in Pinyin.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "genderChineseNameBatch": {
            "title": "Gender Name Mandarin",
            "tag": "Chinese",
            "summary": "Returns the most likely gender of full names (family names and given names) in Standard Mandarin Chinese.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "chineseNameCandidatesBatch": {
            "title": "To Mandarin Name",
            "tag": "Chinese",
            "summary": "Returns the most likely Standard Mandarin Chinese transcriptions using family names and given names in Pinyin.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "namesAndMatchCandidates": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "orderOption": "String",
                        "matchCandidates": [
                            {
                                "candidateName": "String",
                                "probability": "Number",
                                "predScoreGivenName": "Number",
                                "predScoreFamilyName": "Number"
                            }
                        ]
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "namesAndMatchCandidates",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "orderOption",
                "matchCandidates.[].candidateName,probability,predScoreGivenName,predScoreFamilyName"
            ]
        },
        "chineseNameCandidatesGenderBatch": {
            "title": "To Mandarin Name Gender",
            "tag": "Chinese",
            "summary": "Returns the most likely Standard Mandarin Chinese transcriptions for Pinyin first names and last names, according to their gender.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName",
                "gender"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "gender": "String"
                }
            },
            "response": {
                "200": {
                    "namesAndMatchCandidates": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "orderOption": "String",
                        "matchCandidates": [
                            {
                                "candidateName": "String",
                                "probability": "Number",
                                "predScoreGivenName": "Number",
                                "predScoreFamilyName": "Number"
                            }
                        ]
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "gender"
            ],
            "resMetaKey": "namesAndMatchCandidates",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "orderOption",
                "matchCandidates.[].candidateName,probability,predScoreGivenName,predScoreFamilyName"
            ]
        },
        "parseJapaneseNameBatch": {
            "title": "Split Japanese Name",
            "tag": "Japanese",
            "summary": "Returns the most likely first name and last name structure of full names (family names and given names) in Kanji or latin characters.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "nameParserType": "String",
                        "nameParserTypeAlt": "String",
                        "firstLastName": {
                            "script": "String",
                            "id": "String",
                            "firstName": "String",
                            "lastName": "String"
                        },
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "nameParserType",
                "nameParserTypeAlt",
                "firstLastName.script",
                "firstLastName.id",
                "firstLastName.firstName",
                "firstLastName.lastName",
                "score"
            ]
        },
        "japaneseNameKanjiCandidatesBatch": {
            "title": "To Kanji Name",
            "tag": "Japanese",
            "summary": "Returns the most likely Kanji transcriptions for japanese first names and last names in latin characters.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "namesAndMatchCandidates": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "orderOption": "String",
                        "matchCandidates": [
                            {
                                "candidateName": "String",
                                "probability": "Number",
                                "predScoreGivenName": "Number",
                                "predScoreFamilyName": "Number"
                            }
                        ]
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "namesAndMatchCandidates",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "orderOption",
                "matchCandidates.[].candidateName,probability,predScoreGivenName,predScoreFamilyName"
            ]
        },
        "japaneseNameGenderKanjiCandidatesBatch": {
            "title": "To Kanji Name Gender",
            "tag": "Japanese",
            "summary": "Returns the most likely Kanji transcriptions for japanese first names and last names in latin characters, according to their gender.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName",
                "gender"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "gender": "String"
                }
            },
            "response": {
                "200": {
                    "namesAndMatchCandidates": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "orderOption": "String",
                        "matchCandidates": [
                            {
                                "candidateName": "String",
                                "probability": "Number",
                                "predScoreGivenName": "Number",
                                "predScoreFamilyName": "Number"
                            }
                        ]
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "gender"
            ],
            "resMetaKey": "namesAndMatchCandidates",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "orderOption",
                "matchCandidates.[].candidateName,probability,predScoreGivenName,predScoreFamilyName"
            ]
        },
        "japaneseNameLatinCandidatesBatch": {
            "title": "To Latin Name",
            "tag": "Japanese",
            "summary": "Returns the most likely latin transcriptions for japanese first names and last names in Kanji characters.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "namesAndMatchCandidates": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "orderOption": "String",
                        "matchCandidates": [
                            {
                                "candidateName": "String",
                                "probability": "Number",
                                "predScoreGivenName": "Number",
                                "predScoreFamilyName": "Number"
                            }
                        ]
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "namesAndMatchCandidates",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "orderOption",
                "matchCandidates.[].candidateName,probability,predScoreGivenName,predScoreFamilyName"
            ]
        },
        "japaneseNameMatchBatch": {
            "title": "Match Japanese Name",
            "tag": "Japanese",
            "summary": "Matches full names in Kanji against corresponding family names and given names in latin characters.",
            "cost": 1,
            "required": [
                "name1.firstName",
                "name1.lastName",
                "name2.name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name1": {
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String"
                    },
                    "name2": {
                        "id": "String",
                        "name": "String"
                    }
                }
            },
            "response": {
                "200": {
                    "matchedNames": {
                        "script": "String",
                        "id": "String",
                        "matchStatus": "String",
                        "score": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name1.id",
                "name1.firstName",
                "name1.lastName",
                "name2.id",
                "name2.name"
            ],
            "resMetaKey": "matchedNames",
            "resKeys": [
                "script",
                "id",
                "matchStatus",
                "score"
            ]
        },
        "genderJapaneseNamePinyinBatch": {
            "title": "Gender Name Latin",
            "summary": "Return the most likely gender of japanese family names and a given names in latin characters.",
            "cost": 1,
            "required": [
                "firstName",
                "lastName"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "firstName",
                "lastName"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "genderJapaneseNameFullBatch": {
            "title": "Gender Name Kanji",
            "tag": "Japanese",
            "summary": "Find the most likely gender of Japanese full names (surnames and given names), written in Kanji characters.",
            "cost": 1,
            "required": [
                "name"
            ],
            "request": {
                "personalNames": {
                    "id": "String",
                    "name": "String"
                }
            },
            "response": {
                "200": {
                    "personalNames": {
                        "script": "String",
                        "id": "String",
                        "name": "String",
                        "likelyGender": "String",
                        "genderScale": "Number",
                        "score": "Number",
                        "probabilityCalibrated": "Number"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNames",
            "reqKeys": [
                "id",
                "name"
            ],
            "resMetaKey": "personalNames",
            "resKeys": [
                "script",
                "id",
                "name",
                "likelyGender",
                "genderScale",
                "score",
                "probabilityCalibrated"
            ]
        },
        "phoneCodeBatch": {
            "title": "Phone Code",
            "tag": "Phone",
            "summary": "Returns the most likely phone prefix, country of origin and format of phone numbers using first names and last names.",
            "cost": 11,
            "required": [
                "firstName",
                "lastName",
                "phoneNumber"
            ],
            "request": {
                "personalNamesWithPhoneNumbers": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "phoneNumber": "String"
                }
            },
            "response": {
                "200": {
                    "personalNamesWithPhoneNumbers": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "internationalPhoneNumberVerified": "String",
                        "phoneCountryIso2Verified": "String",
                        "phoneCountryCode": "Integer",
                        "phoneCountryCodeAlt": "Integer",
                        "phoneCountryIso2": "String",
                        "phoneCountryIso2Alt": "String",
                        "originCountryIso2": "String",
                        "originCountryIso2Alt": "String",
                        "phoneNumber": "String",
                        "verified": "Boolean",
                        "score": "Number",
                        "countryIso2": "String"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNamesWithPhoneNumbers",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "phoneNumber"
            ],
            "resMetaKey": "personalNamesWithPhoneNumbers",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "internationalPhoneNumberVerified",
                "phoneCountryIso2Verified",
                "phoneCountryCode",
                "phoneCountryCodeAlt",
                "phoneCountryIso2",
                "phoneCountryIso2Alt",
                "originCountryIso2",
                "originCountryIso2Alt",
                "phoneNumber",
                "verified",
                "score",
                "countryIso2"
            ]
        },
        "phoneCodeGeoBatch": {
            "title": "Phone Code Geo",
            "tag": "Phone",
            "summary": "Returns the most likely phone prefix and format of phone numbers using first names, last names and geographic context.",
            "cost": 11,
            "required": [
                "firstName",
                "lastName",
                "phoneNumber",
                "countryIso2",
                "countryIso2Alt"
            ],
            "request": {
                "personalNamesWithPhoneNumbers": {
                    "id": "String",
                    "firstName": "String",
                    "lastName": "String",
                    "phoneNumber": "String",
                    "countryIso2": "String",
                    "countryIso2Alt": "String"
                }
            },
            "response": {
                "200": {
                    "personalNamesWithPhoneNumbers": {
                        "script": "String",
                        "id": "String",
                        "firstName": "String",
                        "lastName": "String",
                        "internationalPhoneNumberVerified": "String",
                        "phoneCountryIso2Verified": "String",
                        "phoneCountryCode": "Integer",
                        "phoneCountryCodeAlt": "Integer",
                        "phoneCountryIso2": "String",
                        "phoneCountryIso2Alt": "String",
                        "originCountryIso2": "String",
                        "originCountryIso2Alt": "String",
                        "phoneNumber": "String",
                        "verified": "Boolean",
                        "score": "Number",
                        "countryIso2": "String"
                    }
                },
                "401": "Missing or incorrect API Key",
                "403": "API Limit Reached or API Key Disabled"
            },
            "reqMetaKey": "personalNamesWithPhoneNumbers",
            "reqKeys": [
                "id",
                "firstName",
                "lastName",
                "phoneNumber",
                "countryIso2",
                "countryIso2Alt"
            ],
            "resMetaKey": "personalNamesWithPhoneNumbers",
            "resKeys": [
                "script",
                "id",
                "firstName",
                "lastName",
                "internationalPhoneNumberVerified",
                "phoneCountryIso2Verified",
                "phoneCountryCode",
                "phoneCountryCodeAlt",
                "phoneCountryIso2",
                "phoneCountryIso2Alt",
                "originCountryIso2",
                "originCountryIso2Alt",
                "phoneNumber",
                "verified",
                "score",
                "countryIso2"
            ]
        }
    }
}