// Helper imports
let helpers = require('./helpers');
let capitalize = helpers.capitalize;

// Imports
const fs = require('fs');
let routeNames = require('../config/routeNames');

/***************************************************/
/**************** Openapi.json Mod ****************/
/*************************************************/
// Prefix Lengh of schemas
let prefixLenght = '#/components/schemas/'.length;

// Stores the method of each route
let routeMethods = {};
let routeCosts = {};
let routeRequests = {};
let routeResponses = {};
let STRUCT = {};

let formatOpenapi = (swaggerFile, log) => {
  let routes = Object.keys(swaggerFile.paths);

  // Capitalize tag names
  for (let i = 0; i < swaggerFile.tags.length; i++) {
    let tag = swaggerFile.tags[i];
    tag.name = capitalize(tag.name);
  };

  let schemas = swaggerFile.components.schemas;

  let record = {
    total: 0,
    get: 0,
    get_res_pb: 0,
    get_res: 0,
    post: 0,
    singleNameInPath: 0,
    singleNameInPath_arrays: 0,
    singleNameInPath_notarrays: 0,
    hasdolla: 0,
    nodollaref: 0,
    res_singleNameInPath_arrays: 0,
    res_singleNameInPath_obj: 0,
  }

  for (let i = 0; i < routes.length; i++) {
    // console.log('routes[i]: ', routes[i]);
    let methodPath = swaggerFile.paths[routes[i]];
    let method = methodPath.get ? 'get' : methodPath.post ? 'post' : 'err';
    record.total++
    if (method === "err") {
      console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected method, must be either 'get' or 'post'`);
    }
    else {
      let route = methodPath[method];
      STRUCT[routes[i]] = { http: method };
      routeMethods[routes[i]] = method;

      // Capitalize tag names
      route.tags = route.tags.map(tag => capitalize(tag));

      // Swap operation ID for dash separated names
      if (!routeNames[route.operationId]) {
        console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - No route name found for this operation id.`);
      };
      swaggerFile.paths[routes[i]][method].operationId = routeNames[route.operationId];

      // Delete systematic security requirement
      if (swaggerFile.paths[routes[i]][method].security) delete swaggerFile.paths[routes[i]][method].security;

      // Delete generic error responses
      delete swaggerFile.paths[routes[i]][method].responses['401'];
      delete swaggerFile.paths[routes[i]][method].responses['403'];

      // Extract route cost from description
      if (route.summary.indexOf('[USES') !== - 1) {
        let costEnd = route.summary.indexOf(']');
        let costText = route.summary.slice(0, costEnd + 2);
        routeCosts[routes[i]] = costText.slice(costText.indexOf('USES') + 5, costText.indexOf('UNITS') - 1);
        route.summary = route.summary.slice(costEnd + 2, route.summary.length);
      };
      if (route.summary.indexOf('[CREDIT') !== - 1) {
        let costEnd = route.summary.indexOf(']');
        let costText = route.summary.slice(0, costEnd + 2);
        routeCosts[routes[i]] = costText.slice(costText.indexOf('CREDIT') + 7, costText.indexOf('UNIT') - 1);
        route.summary = route.summary.slice(costEnd + 2, route.summary.length);
      };
      STRUCT[routes[i]].summary = route.summary;
      STRUCT[routes[i]].tag = route.tags[0];

      STRUCT[routes[i]].request = {};
      STRUCT[routes[i]].response = {};

      if (method === 'get') {
        record.get++

        //////////////////
        // GET REQUEST //
        ////////////////
        if (!route.parameters) {
          if (log.req_no_params) console.log(`\u001b[34mWarning\u001b[m\nRoute ${routes[i]} - No request parameters where found`);
        }
        else {
          routeRequests[routes[i]] = {
            http: 'get',
            type: 'param',
            schema: {},
          };

          route.parameters.forEach(param => {
            routeRequests[routes[i]].schema[param.name] = param;
            if (param.schema) {
              param.type = param.schema.type ? capitalize(param.schema.type) : 'Any';
              param.schema = `dec1${param.name}dec2`;
              STRUCT[routes[i]].request[param.name] = param.type;
            };
          });
        };
      }
      else if (method === 'post') {
        record.post++
        // Get full path to request schemas

        ///////////////////
        // POST REQUEST //
        /////////////////
        let requestAccept = Object.keys(route.requestBody.content);
        if (requestAccept.length !== 1) {
          console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Multiple request content accept types`);
        }
        else {
          let requestSchemaPath = route.requestBody.content[requestAccept[0]].schema;

          // $ref 1/2 - The schema hold a reference to sub schema
          if (requestSchemaPath.$ref) {
            record.hasdolla++

            let requestSchemaName = requestSchemaPath.$ref.slice(prefixLenght, requestSchemaPath.$ref.length);
            let schemaNameInPath = Object.keys(schemas[requestSchemaName].properties);
            STRUCT[routes[i]].requestSchemaName = requestSchemaName;

            // type 1/2 - Case of $ref to an array to an object
            if (
              schemaNameInPath.length === 1 &&
              schemas[requestSchemaName].properties[schemaNameInPath[0]].type === 'array' &&
              schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref
            ) {
              record.singleNameInPath_arrays++

              let REQ_STRUCT = [];
              let requestSubSchemaPath = schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref;
              let requestSubSchemaName = requestSubSchemaPath.slice(prefixLenght, requestSubSchemaPath.length);
              STRUCT[routes[i]].requestSchemaName = requestSubSchemaName;
              let requestSubSchema = schemas[requestSubSchemaName];

              if (!requestSubSchema.type === 'object') {
                console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
              }
              else {

                let requestSubStructure = {};
                let passRefNested = {};

                Object.keys(requestSubSchema.properties).forEach(key => {

                  if (requestSubSchema.properties[key].$ref) {
                    let requestNestedSubSchemaPath = requestSubSchema.properties[key].$ref;
                    let requestNestedSubSchemaName = requestNestedSubSchemaPath.slice(prefixLenght, requestNestedSubSchemaPath.length);
                    let requestNestedSubSchema = schemas[requestNestedSubSchemaName];

                    passRefNested[key] = requestNestedSubSchema.properties;

                    STRUCT[routes[i]].request[key] = {};
                    requestSubStructure[key] = {};

                    Object.keys(requestNestedSubSchema.properties).forEach(subKey => {
                      if (requestNestedSubSchema.properties[subKey].type) {
                        STRUCT[routes[i]].request[key][subKey] = capitalize(requestNestedSubSchema.properties[subKey].type);
                        requestSubStructure[key][subKey] = capitalize(requestNestedSubSchema.properties[subKey].type);
                      };
                    });
                  }
                  else if (requestSubSchema.properties[key].type) {
                    STRUCT[routes[i]].request[key] = capitalize(requestSubSchema.properties[key].type);
                    requestSubStructure[key] = capitalize(requestSubSchema.properties[key].type);
                  };
                });

                let cleanSchema = JSON.parse(JSON.stringify(requestSubSchema.properties));
                Object.keys(passRefNested).forEach(nested => {
                  cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
                });

                routeRequests[routes[i]] = {
                  http: 'post',
                  type: 'array',
                  description: route.requestBody.description,
                  schema: cleanSchema,
                };
                REQ_STRUCT.push(requestSubStructure);
                route.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
              };
            }
            // type 2/2 - Case of $ref to an object
            else if (
              schemas[requestSchemaName].type === 'object' &&
              !!schemas[requestSchemaName].properties
            ) {
              record.singleNameInPath_arrays++

              let REQ_STRUCT = {};
              let passRefNested = {};

              Object.keys(schemas[requestSchemaName].properties).forEach(key => {

                if (schemas[requestSchemaName].properties[key].$ref) {
                  let requestNestedSchemaPath = schemas[requestSchemaName].properties[key].$ref;
                  let requestNestedSchemaName = requestNestedSchemaPath.slice(prefixLenght, requestNestedSchemaPath.length);
                  let requestNestedSchema = schemas[requestNestedSchemaName];

                  passRefNested[key] = requestNestedSchema.properties;

                  STRUCT[routes[i]].request[key] = {};
                  RES_STRUCT[key] = {};

                  Object.keys(requestNestedSchema.properties).forEach(subKey => {
                    if (requestNestedSchema.properties[subKey].type) {
                      STRUCT[routes[i]].request[key][subKey] = capitalize(requestNestedSchema.properties[subKey].type);
                      RES_STRUCT[key][subKey] = capitalize(requestNestedSchema.properties[subKey].type);
                    };
                  });
                }
                else if (schemas[requestSchemaName].properties[key].type) {
                  STRUCT[routes[i]].request[key] = capitalize(schemas[requestSchemaName].properties[key].type);
                  REQ_STRUCT[key] = capitalize(schemas[requestSchemaName].properties[key].type);
                };
              });

              let cleanSchema = JSON.parse(JSON.stringify(schemas[requestSchemaName].properties));
              Object.keys(passRefNested).forEach(nested => {
                cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
              });

              routeRequests[routes[i]] = {
                http: 'post',
                type: 'object',
                description: route.requestBody.description,
                schema: cleanSchema,
              };
              route.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
            }
            else {
              console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref request structure must be either an object or an array`);
            };
          }
          // $ref 1/2 - The schema is an object (*/*)
          else if (
            requestSchemaPath.type === 'object' &&
            !!requestSchemaPath.properties
          ) {
            record.nodollaref++
            let REQ_STRUCT = {};

            Object.keys(requestSchemaPath.properties).forEach(key => {
              if (requestSchemaPath.properties[key].type) {
                STRUCT[routes[i]].request[key] = capitalize(requestSchemaPath.properties[key].type);
                REQ_STRUCT[key] = capitalize(requestSchemaPath.properties[key].type);
              };
            });

            routeRequests[routes[i]] = {
              http: 'post',
              type: 'object',
              description: route.requestBody.description,
              schema: requestSchemaPath.properties,
            };
            route.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
          }
          else {
            console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected request structure must be either an object or an array`);
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
        record.get_res_pb++
        if (log.res_no_schema) console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unable to find response schema`);
      }
      else {
        if (method == 'get') record.get_res++
        let responseSchemaPath = route.responses['200'].content['application/json'].schema.$ref;
        let responseSchemaName = responseSchemaPath.slice(prefixLenght, responseSchemaPath.length);
        let schemaNameInPath = Object.keys(schemas[responseSchemaName].properties);
        STRUCT[routes[i]].responseSchemaName = responseSchemaName;

        // type 1/2 - Case of $ref to an array to an object
        if (
          schemaNameInPath.length === 1 &&
          schemas[responseSchemaName].properties[schemaNameInPath[0]].type === 'array' &&
          schemas[responseSchemaName].properties[schemaNameInPath[0]].items.$ref
        ) {
          record.res_singleNameInPath_arrays++

          let RES_STRUCT = [];
          let responseSubSchemaPath = schemas[responseSchemaName].properties[schemaNameInPath[0]].items.$ref;
          let responseSubSchemaName = responseSubSchemaPath.slice(prefixLenght, responseSubSchemaPath.length);
          STRUCT[routes[i]].responseSchemaName = responseSubSchemaName;
          let responseSubSchema = schemas[responseSubSchemaName];

          if (!responseSubSchema.type === 'object') {
            console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
          }
          else {

            let responseSubStructure = {};
            let passRefNested = {};

            Object.keys(responseSubSchema.properties).forEach(key => {

              if (responseSubSchema.properties[key].$ref) {
                let responseNestedSubSchemaPath = responseSubSchema.properties[key].$ref;
                let responseNestedSubSchemaName = responseNestedSubSchemaPath.slice(prefixLenght, responseNestedSubSchemaPath.length);
                let responseNestedSubSchema = schemas[responseNestedSubSchemaName];

                passRefNested[key] = responseNestedSubSchema.properties;

                STRUCT[routes[i]].response[key] = {};
                responseSubStructure[key] = {};

                Object.keys(responseNestedSubSchema.properties).forEach(subKey => {
                  if (responseNestedSubSchema.properties[subKey].type) {
                    STRUCT[routes[i]].response[key][subKey] = capitalize(responseNestedSubSchema.properties[subKey].type);
                    responseSubStructure[key][subKey] = capitalize(responseNestedSubSchema.properties[subKey].type);
                  };
                });
              }
              else if (responseSubSchema.properties[key].type) {
                STRUCT[routes[i]].response[key] = capitalize(responseSubSchema.properties[key].type);
                responseSubStructure[key] = capitalize(responseSubSchema.properties[key].type);
              };
            });
            RES_STRUCT.push(responseSubStructure);

            let cleanSchema = JSON.parse(JSON.stringify(responseSubSchema.properties));
            Object.keys(passRefNested).forEach(nested => {
              cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
            });

            routeResponses[routes[i]] = {
              type: 'array',
              description: route.responses['200'].description,
              schema: cleanSchema,
            };
            route.responses['200'].content['application/json'].schema = RES_STRUCT;
          };
        }
        // type 2/2 - Case of $ref to an object
        else if (
          schemas[responseSchemaName].type === 'object' &&
          !!schemas[responseSchemaName].properties
        ) {
          record.res_singleNameInPath_obj++

          let RES_STRUCT = {};
          let passRefNested = {};

          Object.keys(schemas[responseSchemaName].properties).forEach(key => {

            if (schemas[responseSchemaName].properties[key].$ref) {
              let responseNestedSchemaPath = schemas[responseSchemaName].properties[key].$ref;
              let responseNestedSchemaName = responseNestedSchemaPath.slice(prefixLenght, responseNestedSchemaPath.length);
              let responseNestedSchema = schemas[responseNestedSchemaName];

              passRefNested[key] = responseNestedSchema.properties;

              STRUCT[routes[i]].response[key] = {};
              RES_STRUCT[key] = {};

              Object.keys(responseNestedSchema.properties).forEach(subKey => {
                if (responseNestedSchema.properties[subKey].type) {
                  STRUCT[routes[i]].response[key][subKey] = capitalize(responseNestedSchema.properties[subKey].type);
                  RES_STRUCT[key][subKey] = capitalize(responseNestedSchema.properties[subKey].type);
                };
              });
            }
            else if (schemas[responseSchemaName].properties[key].type) {
              STRUCT[routes[i]].response[key] = capitalize(schemas[responseSchemaName].properties[key].type);
              RES_STRUCT[key] = capitalize(schemas[responseSchemaName].properties[key].type);
            };
          });

          let cleanSchema = JSON.parse(JSON.stringify(schemas[responseSchemaName].properties));
          Object.keys(passRefNested).forEach(nested => {
            cleanSchema[nested] = JSON.parse(JSON.stringify(passRefNested[nested]));
          });

          routeResponses[routes[i]] = {
            type: 'object',
            description: route.responses['200'].description,
            schema: cleanSchema,
          };
          route.responses['200'].content['application/json'].schema = RES_STRUCT;
        }
        else {
          console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref response structure must be either an object or an array`);
        };
      };
    }
  };

  // Delete Schemas
  delete swaggerFile.components;

  // Save intermidiate files
  fs.writeFileSync('openapi/genNotMD/premarkdown.json', JSON.stringify(swaggerFile), 'utf8');
  fs.writeFileSync('openapi/genNotMD/210422_strucure_ex.json', JSON.stringify(STRUCT), 'utf8');

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

module.exports = formatOpenapi;