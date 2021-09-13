var colors = require('colors/safe');

// Helper imports
let helpers = require('../helpers');
let capitalize = helpers.capitalize;


// Imports
const fs = require('fs');
let docIntro = require('../config/documentation_intro');
let routeNames = require('../config/route_names');
let routeOrdering = require('../config/route_ordering')
let routeSections = require('../config/route_sections');
let apiExamples = require('../config/api_examples');
let descr = require('../config/combined_descriptions.json');

/***************************************************/
/**************** Openapi.json Mod ****************/
/*************************************************/
// Prefix Lengh of schemas
let prefixLenght = '#/components/schemas/'.length;

// Stores the data of each route
let routeMethods = {};
let routeCosts = {};
let routeRequests = {};
let routeResponses = {};
let DESCR = {};
let STRUCT = {};

///////////////
//FUNCTIONS//
/////////////

//Fonction pour trouver toutes les clés d'un objet
const getDeepKeys = (obj, strictKey, findObject) => {
  let keys = [];
  for (let key in obj) {
    if ((typeof obj[key] !== "object" || Array.isArray(obj[key])) && !findObject) {
      if (
        Array.isArray(obj[key]) &&
        typeof obj[key][0] === "object"
      ) {
        const subkeys = getDeepKeys(obj[key][0], strictKey, findObject);
        let arrayKey = key + ".[]." + subkeys.join();
        keys.push(arrayKey);
      }
      else {
        keys.push(key)
      };
    };
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      if (findObject) keys.push(key);
      const subkeys = getDeepKeys(obj[key], strictKey, findObject);
      if (!strictKey) {
        keys = keys.concat(subkeys.map((subkey) => {
          return key + "." + subkey;
        }));
      } else {
        keys = keys.concat(subkeys)
      }
    }
  }
  return keys;
};

////////////////////////////////////////////////
// Description file generator /////////////////
//////////////////////////////////////////////
// @dev Priority is given to combinedDescriptions then openapi, 
// @dev if nothing is found a "*** ${type} ***" placeholder is injected
//
// @dev The process takes config/combinedDescriptions and openapi.json
// @dev This creates the combinedDescriptions files saved to genNotMD
// @dev This file if correct should replace config/combinedDescriptions
// @dev You may modify config/combinedDescriptions to override / modify descriptions
let descrGen = (io, route, type, hasDescr, key, subkey) => {
  let DESCR_RES = DESCR[route].response;
  let DESCR_REQ = DESCR[route].request;
  // REQUEST
  if (io === 'req') {

    // IS a subkeyed element
    if (subkey) {

      // Key is an object
      if (
        DESCR_REQ[key] === null ||
        typeof DESCR_REQ[key] !== 'object' ||
        Object.prototype.toString.call(DESCR_REQ[key]) !== '[object Object]'
      ) {
        DESCR_REQ[key] = {};
      };

      // Subkey has a description in added defs
      if (
        descr[route] &&
        descr[route].request &&
        descr[route].request[key] &&
        descr[route].request[key][subkey]
      ) {
        DESCR_REQ[key][subkey] = descr[route].request[key][subkey];
      }
      // Key has a description in openapi
      else if (hasDescr) {
        DESCR_REQ[key][subkey] = hasDescr;
      }
      else {
        DESCR_REQ[key][subkey] = `*** ${type} ***`;
      };
    }
    // Key has a description in added defs
    else if (
      descr[route] &&
      descr[route].request &&
      descr[route].request[key]
    ) {
      DESCR_REQ[key] = descr[route].request[key];
    }
    // Key has a description in openapi
    else if (hasDescr) {
      DESCR_REQ[key] = hasDescr;
    }
    else {
      DESCR_REQ[key] = `*** ${type} ***`
    };

  }
  // RESPONSE
  else if (io === 'res') {

    // IS a subkeyed element
    if (subkey) {

      // Key is an object
      if (
        DESCR_RES[key] === null ||
        typeof DESCR_RES[key] !== 'object' ||
        Object.prototype.toString.call(DESCR_RES[key]) !== '[object Object]'
      ) {
        DESCR_RES[key] = {};
      };

      // Subkey has a description in added defs
      if (
        descr[route] &&
        descr[route].response &&
        descr[route].response[key] &&
        descr[route].response[key][subkey]
      ) {
        DESCR_RES[key][subkey] = descr[route].response[key][subkey];
      }
      // Subkey has a description in openapi
      else if (hasDescr) {
        DESCR_RES[key][subkey] = hasDescr;
      }
      else {
        DESCR_RES[key][subkey] = `*** ${type} ***`;
      };
    }
    // Key has a description in added defs
    else if (
      descr[route] &&
      descr[route].response &&
      descr[route].response[key]
    ) {
      DESCR_RES[key] = descr[route].response[key];
    }
    // Key has a description in openapi
    else if (hasDescr) {
      DESCR_RES[key] = hasDescr;
    }
    else {
      DESCR_RES[key] = `*** ${type} ***`
    };

  };
};

///////////////
//CORE//
/////////////

module.exports = (swaggerFile, opt) => {
  let routes = Object.keys(swaggerFile.paths);

  // Replace section descriptions
  swaggerFile.tags = routeSections.tags;

  // Capitalize tag names
  for (let i = 0; i < swaggerFile.tags.length; i++) {
    let tag = swaggerFile.tags[i];
    tag.name = capitalize(tag.name);
  };

  let schemas = swaggerFile.components.schemas;

  for (let i = 0; i < routes.length; i++) {
    let methodPath = swaggerFile.paths[routes[i]];
    let method = methodPath.get ? 'get' : methodPath.post ? 'post' : 'err';
    if (method === "err") {
      console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Unexpected method, must be either 'get' or 'post'`);
    }
    else {
      let route = methodPath[method];
      routeMethods[routes[i]] = method;

      DESCR[routes[i]] = {
        request: {},
        response: {}
      };

      STRUCT[route.operationId] = {
        http: method,
        url: routes[i],
        req: {},
        res: {}
      };

      let ROUTE_STRUCT = STRUCT[route.operationId];

      if (
        descr[routes[i]] &&
        descr[routes[i]].summary
      ) {
        DESCR[routes[i]].summary = descr[routes[i]].summary;
      }
      else if (route.summary) {
        DESCR[routes[i]].summary = route.summary;
      }
      else {
        DESCR[routes[i]].summary = "*** string ***";
      };

      // Capitalize tag names
      route.tags = route.tags.map(tag => capitalize(tag));

      // Swap operation ID for dash separated names
      if (!routeNames[route.operationId]) {
        console.log(`${colors.red("Error")}\nRoute ${routes[i]} - No route name found for this operation id.`);
      };
      swaggerFile.paths[routes[i]][method].operationId = routeNames[route.operationId];
      ROUTE_STRUCT.operationName = route.operationId; // data location post renaming above

      // Delete systematic security requirement
      if (swaggerFile.paths[routes[i]][method].security) delete swaggerFile.paths[routes[i]][method].security;

      // Delete generic error responses
      delete swaggerFile.paths[routes[i]][method].responses['401'];
      delete swaggerFile.paths[routes[i]][method].responses['403'];

      // Extract route cost from description
      if (route.summary.indexOf('[USES') !== - 1) {
        let costEnd = route.summary.indexOf(']');
        let costText = route.summary.slice(0, costEnd + 2);
        routeCosts[routes[i]] = costText.slice(costText.indexOf('USES') + 5, costText.indexOf('UNITS') - 1) * 1;
        route.summary = route.summary.slice(costEnd + 2, route.summary.length);
      }
      else if (route.summary.indexOf('[CREDIT') !== - 1) {
        let costEnd = route.summary.indexOf(']');
        let costText = route.summary.slice(0, costEnd + 2);
        routeCosts[routes[i]] = costText.slice(costText.indexOf('CREDIT') + 7, costText.indexOf('UNIT') - 1) * 1;
        route.summary = route.summary.slice(costEnd + 2, route.summary.length);
      }
      else if (route.tags[0] === 'Admin') {
        routeCosts[routes[i]] = 0;
      }
      else {
        routeCosts[routes[i]] = 1;
      };

      // Save route section information
      if (routeSections[routes[i]]) {
        swaggerFile.paths[routes[i]][method].tags = [routeSections[routes[i]]];
      }
      else {
        [routeSections[routes[i]]] = swaggerFile.paths[routes[i]][method].tags;
      };

      // Replace route summary
      if (
        descr[routes[i]] &&
        descr[routes[i]].summary
      ) {
        route.summary = descr[routes[i]].summary;
      };

      if (method === 'get') {

        //////////////////
        // GET REQUEST //
        ////////////////
        if (!route.parameters) {
          if (opt.req_no_params) console.log(`${colors.yellow('Warning')}\nRoute ${routes[i]} - No request parameters where found`);
        }
        else {
          // SAVE Request
          routeRequests[routes[i]] = {
            http: 'get',
            type: 'param',
            schema: {},
          };

          route.parameters.forEach(param => {
            routeRequests[routes[i]].schema[param.name] = param;
            if (param.schema) {
              param.type = param.schema.type ? capitalize(param.schema.type) : 'Any';
              ROUTE_STRUCT.req[param.name] = param.type;

              // Get description 
              let hasDescr = param.schema.description;
              if (
                !hasDescr &&
                param.description
              ) {
                hasDescr = param.description;
              };
              descrGen('req', routes[i], param.type, hasDescr, param.name);

              // Replace typed examples with value examples
              if (
                opt.inject_ex === true &&
                apiExamples[routes[i]] &&
                Object.keys(apiExamples[routes[i]].input).length
              ) {
                param.schema = apiExamples[routes[i]].input[param.name];
              }
              else {
                param.schema = `dec1${param.name}dec2`;
              };
            };
          });
        };
      }
      else if (method === 'post') {
        // Get full path to request schemas

        ///////////////////
        // POST REQUEST //
        /////////////////
        let requestAccept = Object.keys(route.requestBody.content);
        if (requestAccept.length !== 1) {
          console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Multiple request content accept types`);
        }
        else {
          let requestSchemaPath = route.requestBody.content[requestAccept[0]].schema;

          // The schema hold a reference to sub schema
          if (requestSchemaPath.$ref) {

            let requestSchemaName = requestSchemaPath.$ref.slice(prefixLenght, requestSchemaPath.$ref.length);
            let schemaNameInPath = Object.keys(schemas[requestSchemaName].properties);

            // type 1/2 - Case of $ref to an array to an object
            if (
              schemaNameInPath.length === 1 &&
              schemas[requestSchemaName].properties[schemaNameInPath[0]].type === 'array' &&
              schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref
            ) {

              let REQ_STRUCT = { [schemaNameInPath[0]]: [] }
              let REQ_STRUCT_ARRAY = REQ_STRUCT[schemaNameInPath[0]];
              let requestSubSchemaPath = schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref;
              let requestSubSchemaName = requestSubSchemaPath.slice(prefixLenght, requestSubSchemaPath.length);
              let requestSubSchema = schemas[requestSubSchemaName];

              if (!requestSubSchema.type === 'object') {
                console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Expected sub schema to be an object`);
              }
              else {

                let requestSubStructure = {};
                let passRefNested = {};

                Object.keys(requestSubSchema.properties).forEach(key => {

                  // Nested object
                  if (requestSubSchema.properties[key].$ref) {
                    let requestNestedSubSchemaPath = requestSubSchema.properties[key].$ref;
                    let requestNestedSubSchemaName = requestNestedSubSchemaPath.slice(prefixLenght, requestNestedSubSchemaPath.length);
                    let requestNestedSubSchema = schemas[requestNestedSubSchemaName];

                    passRefNested[key] = requestNestedSubSchema.properties;

                    requestSubStructure[key] = {};

                    Object.keys(requestNestedSubSchema.properties).forEach(subKey => {
                      if (requestNestedSubSchema.properties[subKey].type) {
                        // Get description 
                        let hasDescr = requestNestedSubSchema.properties[subKey].description;
                        descrGen('req', routes[i], requestNestedSubSchema.properties[subKey].type, hasDescr, key, subKey);

                        requestSubStructure[key][subKey] = capitalize(requestNestedSubSchema.properties[subKey].type);
                      };
                    });
                  }
                  else if (requestSubSchema.properties[key].type) {
                    // Get description 
                    let hasDescr = requestSubSchema.properties[key].description;
                    descrGen('req', routes[i], requestSubSchema.properties[key].type, hasDescr, key);

                    requestSubStructure[key] = capitalize(requestSubSchema.properties[key].type);
                  };
                });

                let cleanSchema = JSON.parse(JSON.stringify(requestSubSchema.properties));
                Object.keys(passRefNested).forEach(nested => {
                  cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
                });

                // SAVE Request
                routeRequests[routes[i]] = {
                  http: 'post',
                  type: 'array',
                  description: route.requestBody.description,
                  schema: cleanSchema,
                };
                REQ_STRUCT_ARRAY.push(requestSubStructure);

                // Replace typed examples with value examples
                if (
                  opt.inject_ex === true &&
                  Object.keys(apiExamples[routes[i]].input).length
                ) {
                  route.requestBody.content[requestAccept[0]].schema = apiExamples[routes[i]].input;
                }
                else {
                  route.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
                };
                ROUTE_STRUCT.req = REQ_STRUCT;
              };
            }
            // type 2/2 - Case of $ref to an object
            else if (
              schemas[requestSchemaName].type === 'object' &&
              !!schemas[requestSchemaName].properties
            ) {

              let REQ_STRUCT = {};
              let passRefNested = {};

              Object.keys(schemas[requestSchemaName].properties).forEach(key => {

                // Nested object
                if (schemas[requestSchemaName].properties[key].$ref) {
                  let requestNestedSchemaPath = schemas[requestSchemaName].properties[key].$ref;
                  let requestNestedSchemaName = requestNestedSchemaPath.slice(prefixLenght, requestNestedSchemaPath.length);
                  let requestNestedSchema = schemas[requestNestedSchemaName];

                  passRefNested[key] = requestNestedSchema.properties;

                  RES_STRUCT[key] = {};

                  Object.keys(requestNestedSchema.properties).forEach(subKey => {
                    if (requestNestedSchema.properties[subKey].type) {
                      // Get description 
                      let hasDescr = requestNestedSchema.properties[subKey].description;
                      descrGen('req', routes[i], requestNestedSchema.properties[subKey].type, hasDescr, key, subKey);

                      RES_STRUCT[key][subKey] = capitalize(requestNestedSchema.properties[subKey].type);
                    };
                  });
                }
                else if (schemas[requestSchemaName].properties[key].type) {
                  // Get description 
                  let hasDescr = schemas[requestSchemaName].properties[key].description;
                  descrGen('req', routes[i], schemas[requestSchemaName].properties[key].type, hasDescr, key);

                  REQ_STRUCT[key] = capitalize(schemas[requestSchemaName].properties[key].type);
                };
              });

              let cleanSchema = JSON.parse(JSON.stringify(schemas[requestSchemaName].properties));
              Object.keys(passRefNested).forEach(nested => {
                cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
              });

              // SAVE Request
              routeRequests[routes[i]] = {
                http: 'post',
                type: 'object',
                description: route.requestBody.description,
                schema: cleanSchema,
              };

              // Replace typed examples with value examples
              if (
                opt.inject_ex === true &&
                Object.keys(apiExamples[routes[i]].input).length
              ) {
                route.requestBody.content[requestAccept[0]].schema = apiExamples[routes[i]].input;
              }
              else {
                route.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
              };
              ROUTE_STRUCT.req = REQ_STRUCT;
            }
            else {
              // console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Unexpected $ref request structure must be either an object or an array`);
            };
          }
          else {
            // console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Unexpected request structure must be either an object or an array`);
          };
        };
      };

      /////////////
      //RESPONSE//
      ///////////
      if (
        !route.responses['200'] ||
        !route.responses['200'].content ||
        !route.responses['200'].content['application/json'] ||
        !route.responses['200'].content['application/json'].schema ||
        !route.responses['200'].content['application/json'].schema.$ref
      ) {
        if (opt.res_no_schema) console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Unable to find response schema`);
      }
      else {
        let responseSchemaPath = route.responses['200'].content['application/json'].schema.$ref;
        let responseSchemaName = responseSchemaPath.slice(prefixLenght, responseSchemaPath.length);
        let schemaNameInPath = Object.keys(schemas[responseSchemaName].properties);

        // type 1/2 - Case of $ref to an array to an object
        if (
          schemaNameInPath.length === 1 &&
          schemas[responseSchemaName].properties[schemaNameInPath[0]].type === 'array' &&
          schemas[responseSchemaName].properties[schemaNameInPath[0]].items.$ref
        ) {

          let RES_STRUCT = { [schemaNameInPath[0]]: [] }
          let RES_STRUCT_ARRAY = RES_STRUCT[schemaNameInPath[0]];

          let responseSubSchemaPath = schemas[responseSchemaName].properties[schemaNameInPath[0]].items.$ref;
          let responseSubSchemaName = responseSubSchemaPath.slice(prefixLenght, responseSubSchemaPath.length);
          let responseSubSchema = schemas[responseSubSchemaName];

          if (!responseSubSchema.type === 'object') {
            console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Expected sub schema to be an object`);
          }
          else {

            let responseSubStructure = {};
            let passRefNested = {};

            Object.keys(responseSubSchema.properties).forEach(key => {

              // Nested object
              if (responseSubSchema.properties[key].$ref) {
                let responseNestedSubSchemaPath = responseSubSchema.properties[key].$ref;
                let responseNestedSubSchemaName = responseNestedSubSchemaPath.slice(prefixLenght, responseNestedSubSchemaPath.length);
                let responseNestedSubSchema = schemas[responseNestedSubSchemaName];

                passRefNested[key] = responseNestedSubSchema.properties;

                responseSubStructure[key] = {};

                Object.keys(responseNestedSubSchema.properties).forEach(subKey => {
                  if (responseNestedSubSchema.properties[subKey].type) {
                    // Get description 
                    let hasDescr = responseNestedSubSchema.properties[subKey].description;
                    descrGen('res', routes[i], responseNestedSubSchema.properties[subKey].type, hasDescr, key, subKey);

                    responseSubStructure[key][subKey] = capitalize(responseNestedSubSchema.properties[subKey].type);
                  };
                });
              }
              // Nested array of objects
              else if (
                responseSubSchema.properties[key].type === 'array' &&
                responseSubSchema.properties[key].items &&
                responseSubSchema.properties[key].items.$ref
              ) {
                let responseNestedSubSchemaPath = responseSubSchema.properties[key].items.$ref;
                let responseNestedSubSchemaName = responseNestedSubSchemaPath.slice(prefixLenght, responseNestedSubSchemaPath.length);
                let responseNestedSubSchema = schemas[responseNestedSubSchemaName];

                passRefNested[key] = [responseNestedSubSchema.properties];

                responseSubStructure[key] = [{}];

                Object.keys(responseNestedSubSchema.properties).forEach(subKey => {
                  if (responseNestedSubSchema.properties[subKey].type) {
                    // Get description 
                    let hasDescr = responseNestedSubSchema.properties[subKey].description;
                    descrGen('res', routes[i], responseNestedSubSchema.properties[subKey].type, hasDescr, key, subKey);

                    responseSubStructure[key][0][subKey] = capitalize(responseNestedSubSchema.properties[subKey].type);
                  };
                });
              }
              else if (responseSubSchema.properties[key].type) {
                // Get description 
                let hasDescr = responseSubSchema.properties[key].description;
                descrGen('res', routes[i], responseSubSchema.properties[key].type, hasDescr, key);

                responseSubStructure[key] = capitalize(responseSubSchema.properties[key].type);
              };
            });
            RES_STRUCT_ARRAY.push(responseSubStructure);

            let cleanSchema = JSON.parse(JSON.stringify(responseSubSchema.properties));
            Object.keys(passRefNested).forEach(nested => {
              cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
            });

            // SAVE Responses
            routeResponses[routes[i]] = {
              type: 'array',
              description: route.responses['200'].description,
              schema: cleanSchema,
            };

            // Replace typed examples with value examples
            if (
              opt.inject_ex === true &&
              Object.keys(apiExamples[routes[i]].output).length
            ) {
              route.responses['200'].content['application/json'].schema = apiExamples[routes[i]].output;
            }
            else {
              route.responses['200'].content['application/json'].schema = RES_STRUCT;
            };
            ROUTE_STRUCT.res = RES_STRUCT;
          };
        }
        // type 2/2 - Case of $ref to an object
        else if (
          schemas[responseSchemaName].type === 'object' &&
          !!schemas[responseSchemaName].properties
        ) {

          let RES_STRUCT = {};
          let passRefNested = {};

          Object.keys(schemas[responseSchemaName].properties).forEach(key => {

            // Nested object
            if (schemas[responseSchemaName].properties[key].$ref) {
              let responseNestedSchemaPath = schemas[responseSchemaName].properties[key].$ref;
              let responseNestedSchemaName = responseNestedSchemaPath.slice(prefixLenght, responseNestedSchemaPath.length);
              let responseNestedSchema = schemas[responseNestedSchemaName];

              passRefNested[key] = responseNestedSchema.properties;

              RES_STRUCT[key] = {};

              Object.keys(responseNestedSchema.properties).forEach(subKey => {
                if (responseNestedSchema.properties[subKey].type) {
                  // Get description 
                  let hasDescr = responseNestedSchema.properties[subKey].description;
                  descrGen('res', routes[i], responseNestedSchema.properties[subKey].type, hasDescr, key, subKey);

                  RES_STRUCT[key][subKey] = capitalize(responseNestedSchema.properties[subKey].type);
                };
              });
            }
            // Nested array of objects
            else if (
              schemas[responseSchemaName].properties[key].type === 'array' &&
              schemas[responseSchemaName].properties[key].items &&
              schemas[responseSchemaName].properties[key].items.$ref
            ) {
              let responseNestedSchemaPath = schemas[responseSchemaName].properties[key].items.$ref;
              let responseNestedSchemaName = responseNestedSchemaPath.slice(prefixLenght, responseNestedSchemaPath.length);
              let responseNestedSchema = schemas[responseNestedSchemaName];

              passRefNested[key] = [responseNestedSchema.properties];

              RES_STRUCT[key] = [{}];

              Object.keys(responseNestedSchema.properties).forEach(subKey => {
                if (responseNestedSchema.properties[subKey].type) {
                  // Get description 
                  let hasDescr = responseNestedSchema.properties[subKey].description;
                  descrGen('res', routes[i], responseNestedSchema.properties[subKey].type, hasDescr, key, subKey);

                  RES_STRUCT[key][0][subKey] = capitalize(responseNestedSchema.properties[subKey].type);
                };
              });
            }
            else if (schemas[responseSchemaName].properties[key].type) {
              // Get description 
              let hasDescr = schemas[responseSchemaName].properties[key].description;
              descrGen('res', routes[i], schemas[responseSchemaName].properties[key].type, hasDescr, key);

              RES_STRUCT[key] = capitalize(schemas[responseSchemaName].properties[key].type);
            };
          });

          let cleanSchema = JSON.parse(JSON.stringify(schemas[responseSchemaName].properties));
          Object.keys(passRefNested).forEach(nested => {
            cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
          });

          // SAVE Responses
          routeResponses[routes[i]] = {
            type: 'object',
            description: route.responses['200'].description,
            schema: cleanSchema,
          };

          // Replace typed examples with value examples
          if (
            opt.inject_ex === true &&
            Object.keys(apiExamples[routes[i]].output).length
          ) {
            route.responses['200'].content['application/json'].schema = apiExamples[routes[i]].output;
          }
          else {
            route.responses['200'].content['application/json'].schema = RES_STRUCT;
          };
          ROUTE_STRUCT.res = RES_STRUCT;
        }
        else {
          // console.log(`${colors.red("Error")}\nRoute ${routes[i]} - Unexpected $ref response structure must be either an object or an array`);
        };
      };
    };
  };

  // Delete Schemas
  delete swaggerFile.components;

  // Delete external links
  delete swaggerFile.externalDocs;

  // Insert new intro
  swaggerFile.info.title = docIntro.title;
  swaggerFile.info.description = docIntro.description;

  // Delete unused intro data
  delete swaggerFile.info.contact;
  delete swaggerFile.info.license;
  // delete swaggerFile.servers;

  // Change route ordering
  let routePathData = JSON.parse(JSON.stringify(swaggerFile.paths));
  swaggerFile.paths = {};
  routeOrdering.forEach(route => {
    swaggerFile.paths[route] = routePathData[route];
  });

  // Save intermidiate files
  fs.writeFileSync('openapi/genNotMD/formated_openapi.json', JSON.stringify(swaggerFile, null, 4), 'utf8');
  fs.writeFileSync('openapi/genNotMD/route_requests.json', JSON.stringify(routeRequests, null, 4), 'utf8');
  fs.writeFileSync('openapi/genNotMD/route_responses.json', JSON.stringify(routeResponses, null, 4), 'utf8');
  fs.writeFileSync('openapi/genNotMD/combined_descriptions.json', JSON.stringify(DESCR, null, 4), 'utf8');
  fs.writeFileSync('openapi/genNotMD/route_sections.json', JSON.stringify(routeSections, null, 4), 'utf8');
  fs.writeFileSync('openapi/genNotMD/route_costs.json', JSON.stringify(routeCosts, null, 4), 'utf8');
  // fs.writeFileSync('openapi/genNotMD/io_schemes.json', JSON.stringify(STRUCT, null, 4), 'utf8');

  // Generate config for CSV module
  let csvData = JSON.parse(JSON.stringify(STRUCT));
  Object.keys(csvData).forEach(key => {
    if (key.indexOf('Batch') === -1) {
      delete csvData[key];
    }
    else {
      csvData[key].operationName = csvData[key].operationName.replace(/-/g, ' ');
      csvData[key].summary = descr[csvData[key].url].summary;

      // Remove referece to 100 unit calls
      csvData[key].summary = csvData[key].summary.replace("up to 100", "");

      // Req / Res structures formated for api_caller
      let reqMetaKey = csvData[key].reqMetaKey = Object.keys(csvData[key].req)[0];
      csvData[key].reqKeys = getDeepKeys(csvData[key].req[reqMetaKey][0], false, false);
      let resMetaKey = csvData[key].resMetaKey = Object.keys(csvData[key].res)[0];
      csvData[key].resKeys = getDeepKeys(csvData[key].res[resMetaKey][0], false, false);

      // Route costs
      if (routeCosts[csvData[key].url]) {
        csvData[key].cost = routeCosts[csvData[key].url] * 1;
      };

    };
  });
  let csvStructure = {
    base: swaggerFile.servers[0].url,
    errorResponses: {
      "401": "Missing or incorrect API Key",
      "403": "API Limit Reached or API Key Disabled"
    },
    routes: csvData
  };
  fs.writeFileSync('openapi/genNotMD/csv_structure.json', JSON.stringify(csvStructure, null, 4), 'utf8');

  // Return stored values
  let formatedResult = {
    swaggerFile: swaggerFile,
    store: {
      routeMethods: routeMethods,
      routeCosts: routeCosts,
      routeRequests: routeRequests,
      routeResponses: routeResponses,
    }
  };
  return formatedResult;
};