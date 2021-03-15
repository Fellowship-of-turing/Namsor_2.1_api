let translation = {
    "paths": {


        "/api2/json/nameType/{properNoun}": {
            "get": {
                "tags": ["general"],
                "summary": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
                "operationId": "nameType",
                "parameters": [
                    {
                        "name": "properNoun",
                        "in": "path",
                        "required": true,
                        "schema": { "type": "string" }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A typed name.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ProperNounCategorizedOut"
                                }
                            }
                        }
                    },
                    "401": { "description": "Missing or incorrect API Key" },
                    "403": {
                        "description": "API Limit Reached or API Key Disabled"
                    }
                },
                "security": [{ "api_key": [] }]
            }
        },


        "General": {
            "Infer Name Pronoun": {
                "summary": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
                "operationId": "nameType",
                "parameters": [
                    {
                        "name": "properNoun",
                        "in": "path",
                        "required": true,
                        "schema": { "type": "string" }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A typed name.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ProperNounCategorizedOut"
                                }
                            }
                        }
                    },
                    "401": { "description": "Missing or incorrect API Key" },
                    "403": {
                        "description": "API Limit Reached or API Key Disabled"
                    }
                },
                "security": [{ "api_key": [] }]
            }
        }

        "/api2/json/nameType/{properNoun2}": {
            "tags": ["General"],
            "summary": "Infer s the likely type of a proper noun (personal name, brand name, place name etc.)",
            "description": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
            "Infer Name Pronoun": {
                "summary": "Infer the likely type of a proper noun (personal name, brand name, place name etc.)",
                "operationId": "Infer Name Type",
                "parameters": [
                    {
                        "name": "properNoun",
                        "in": "path",
                        "required": true,
                        "schema": { "type": "string" }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "A typed name.",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ProperNounCategorizedOut"
                                }
                            }
                        }
                    },
                    "401": { "description": "Missing or incorrect API Key" },
                    "403": {
                        "description": "API Limit Reached or API Key Disabled"
                    }
                },
                "security": [{ "api_key": [] }]
            }
        }
    }
}
