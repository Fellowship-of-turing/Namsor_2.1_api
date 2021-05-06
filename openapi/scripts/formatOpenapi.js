// Helper imports
let helpers = require('./helpers');
let capitalize = helpers.capitalize;

const fetch = require('node-fetch');

// Imports
const fs = require('fs');
let routeNames = require('../config/routeNames');

/***************************************************/
/**************** Openapi.json Mod ****************/
/*************************************************/
// Prefix Lengh of schemas
let prefixLenght = '#/components/schemas/'.length;
let prefixLenghtRoute = '/api2/json/'.length;

// Stores the method of each route
let routeMethods = {};
let routeCosts = {};
let routeRequests = {};
let routeResponses = {};
let apiExamples = {};
// let STRUCT = {};

let formatOpenapi = (swaggerFile, log) => {
  let routes = Object.keys(swaggerFile.paths);

  // Capitalize tag names
  for (let i = 0; i < swaggerFile.tags.length; i++) {
    let tag = swaggerFile.tags[i];
    tag.name = capitalize(tag.name);
  };

  let schemas = swaggerFile.components.schemas;

  for (let i = 0; i < routes.length; i++) {
    // console.log('routes[i]: ', routes[i]);
    let methodPath = swaggerFile.paths[routes[i]];
    let method = methodPath.get ? 'get' : methodPath.post ? 'post' : 'err';
    if (method === "err") {
      console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected method, must be either 'get' or 'post'`);
    }
    else {
      let route = methodPath[method];
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



      if (method === 'get') {

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
          console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Multiple request content accept types`);
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

              let REQ_STRUCT = [];
              let requestSubSchemaPath = schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref;
              let requestSubSchemaName = requestSubSchemaPath.slice(prefixLenght, requestSubSchemaPath.length);
              let requestSubSchema = schemas[requestSubSchemaName];

              if (!requestSubSchema.type === 'object') {
                console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
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
                        requestSubStructure[key][subKey] = capitalize(requestNestedSubSchema.properties[subKey].type);
                      };
                    });
                  }
                  else if (requestSubSchema.properties[key].type) {
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
                      RES_STRUCT[key][subKey] = capitalize(requestNestedSchema.properties[subKey].type);
                    };
                  });
                }
                else if (schemas[requestSchemaName].properties[key].type) {
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
              // console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref request structure must be either an object or an array`);
            };
          }
          else {
            // console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected request structure must be either an object or an array`);
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
        if (log.res_no_schema) console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unable to find response schema`);
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
          let RES_STRUCT = [];
          let responseSubSchemaPath = schemas[responseSchemaName].properties[schemaNameInPath[0]].items.$ref;
          let responseSubSchemaName = responseSubSchemaPath.slice(prefixLenght, responseSubSchemaPath.length);
          let responseSubSchema = schemas[responseSubSchemaName];

          if (!responseSubSchema.type === 'object') {
            console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
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
                    responseSubStructure[key][0][subKey] = capitalize(responseNestedSubSchema.properties[subKey].type);
                  };
                });
              }
              else if (responseSubSchema.properties[key].type) {
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
                  RES_STRUCT[key][0][subKey] = capitalize(responseNestedSchema.properties[subKey].type);
                };
              });
            }
            else if (schemas[responseSchemaName].properties[key].type) {
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
          // console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref response structure must be either an object or an array`);
        };
      };

      // // List all possible INPUT keys
      // if (!apiExamples[routes[i]]) {
      //   apiExamples[routes[i]] = {};

      //   if (!apiExamples[routes[i]].input) {
      //     let inputTarget = apiExamples[routes[i]].input = {};

      //     if (routeRequests[routes[i]]) {
      //       Object.keys(routeRequests[routes[i]].schema).forEach(field => {
      //         let targetField = routeRequests[routes[i]].schema[field];

      //         if (targetField.type) {
      //           inputTarget[field] = targetField.type;
      //         }
      //         else {
      //           inputTarget[field] = {};
      //           Object.keys(targetField).forEach(subfield => {
      //             if (targetField[subfield].type) {
      //               inputTarget[field][subfield] = targetField[subfield].type;
      //             }
      //             else {
      //               console.log('subfield 1: ', subfield);
      //             };
      //           });
      //         };
      //       });
      //     };
      //   };
      // };

      // // List all possible OUTPUT keys
      // if (!apiExamples[routes[i]].output) {
      //   let outputTarget = apiExamples[routes[i]].output = {};

      //   if (routeResponses[routes[i]]) {
      //     Object.keys(routeResponses[routes[i]].schema).forEach(field => {
      //       let targetField = routeResponses[routes[i]].schema[field];

      //       if (targetField.type) {
      //         outputTarget[field] = targetField.type;
      //       }
      //       else {
      //         outputTarget[field] = {};
      //         Object.keys(targetField).forEach(subfield => {
      //           if (targetField[subfield].type) {
      //             outputTarget[field][subfield] = targetField[subfield].type;
      //           }
      //           else {
      //             console.log('subfield 2: ', subfield);
      //           };
      //         });
      //       };
      //     });
      //   };
      // };

      // console.log('routes[i]: ', routes[i]);
      // // Get example values
      // if(routeResponses[routes[i]])
      // let testFetch = fetch(`https://v2.namsor.com/NamSorAPIv2${}`, {
      //   method: 'get',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-API-KEY': 'b214894824e1c4762fb650866fea8f3c'
      //   },
      // })
      //   .then(res => res.json());


    };
  };
  // Delete Schemas
  delete swaggerFile.components;

  // Save intermidiate files
  fs.writeFileSync('openapi/genNotMD/premarkdown.json', JSON.stringify(swaggerFile), 'utf8');
  fs.writeFileSync('openapi/genNotMD/routeRequests.json', JSON.stringify(routeRequests), 'utf8');
  fs.writeFileSync('openapi/genNotMD/routeResponses.json', JSON.stringify(routeResponses), 'utf8');
  // fs.writeFileSync('openapi/genNotMD/apiExamples.json', JSON.stringify(apiExamples), 'utf8');

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