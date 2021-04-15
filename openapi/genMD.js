const fs = require('fs');
const widdershins = require('widdershins');
let routeNames = require('./config/routeNames');
let inputExamples = require('./config/inputExamples');

// Parameters
let prefixLenght = '#/components/schemas/'.length;
let urlPrefix = '/api2/json/'

const options = {
  language_tabs: [
    { 'shell': "Shell" },
    { 'java': "Java" },
    { 'python': 'Python' },
    { 'javascript': 'JavaScript' },
  ]
};
options.codeSamples = true;
options.httpsnippet = true;
// options.shallowSchemas = true
// options.resolve = true
// options.omitBody = true
// options.useBodyName = true
// options.expandBody = true
options.language_clients = [
  { 'shell': 'curl' },
  { 'java': 'unirest' },
  { 'python': 'requests' },
  { 'javascript': 'fetch' },
];

///////////////////////////////////////////
// Log levels
///////////////////////////////////////////
let log = {
  req_no_params: false,
  res_no_schema: false,
  replace_outofbounds: false,
  replace_notarget: false,
}

///////////////////////////////////////////
// Functions
///////////////////////////////////////////
let capitalize = input => input.charAt(0).toUpperCase() + input.slice(1)

///////////////////////////////////////////
// Choose either test file or complete API
///////////////////////////////////////////
// let targetFile = 'openapi/test/test.json';
let targetFile = 'openapi/openapi.json';

const fileData = fs.readFileSync(targetFile, 'utf8');
const swaggerFile = JSON.parse(fileData);

// Stores the method of each route
let routeMethods = {};
let routeCosts = {};
let routeRequests = {};
let routeResponses = {};
let STRUCT = {};

/***************************************************/
/**************** Openapi.json Mod ****************/
/*************************************************/

if (targetFile === 'openapi/openapi.json') {

  // TODO
  // 98 methods / routes / operationIds counted
  // - Restructure responses to avoid { type : xxx} structure
  // - Delete responses --> add error types on top part
  // - Credit count
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
        routeCosts[routes[i]] = costText.slice(costText.indexOf('USES') + 5, costText.indexOf('UNITS') - 1);
        route.summary = route.summary.slice(costEnd + 2, route.summary.length);
      };
      STRUCT[routes[i]].summary = route.summary;
      STRUCT[routes[i]].tag = route.tags[0];

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

          STRUCT[routes[i]].request = {};
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
              let requestSubSchema = schemas[requestSubSchemaName];

              if (!requestSubSchema.type === 'object') {
                console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
              }
              else {
                let requestSubStructure = {};
                Object.keys(requestSubSchema.properties).forEach(key => {
                  if (requestSubSchema.properties[key].type) {
                    requestSubStructure[key] = requestSubSchema.properties[key].type;
                  };
                });

                routeRequests[routes[i]] = {
                  http: 'post',
                  type: 'array',
                  description: route.requestBody.description,
                  schema: requestSubSchema.properties,
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

              Object.keys(schemas[requestSchemaName].properties).forEach(key => {
                if (schemas[requestSchemaName].properties[key].type) {
                  REQ_STRUCT[key] = schemas[requestSchemaName].properties[key].type;
                };
              });

              routeRequests[routes[i]] = {
                http: 'post',
                type: 'object',
                description: route.requestBody.description,
                schema: schemas[requestSchemaName].properties,
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
                REQ_STRUCT[key] = requestSchemaPath.properties[key].type;
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
          let responseSubSchema = schemas[responseSubSchemaName];

          if (!responseSubSchema.type === 'object') {
            console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Expected sub schema to be an object`);
          }
          else {
            let responseSubStructure = {};
            Object.keys(responseSubSchema.properties).forEach(key => {
              if (responseSubSchema.properties[key].type) {
                responseSubStructure[key] = responseSubSchema.properties[key].type;
              };
            });
            RES_STRUCT.push(responseSubStructure);

            routeResponses[routes[i]] = responseSubSchema.properties;
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

          Object.keys(schemas[responseSchemaName].properties).forEach(key => {
            if (schemas[responseSchemaName].properties[key].type) {
              RES_STRUCT[key] = schemas[responseSchemaName].properties[key].type;
            };
          });

          routeResponses[routes[i]] = schemas[responseSchemaName].properties;
          route.responses['200'].content['application/json'].schema = RES_STRUCT;
        }
        else {
          console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref response structure must be either an object or an array`);
        };
      };

      // Capitalize tag names
      route.tags = route.tags.map(tag => capitalize(tag));
    }
  };

  // Delete Schemas
  delete swaggerFile.components;
  fs.writeFileSync('openapi/premarkdown.json', JSON.stringify(swaggerFile), 'utf8');
  console.log('record: ', record);
  // console.log('routeRequests: ', routeRequests['/api2/json/parseName/{nameFull}/{countryIso2}']);
  // console.log('routeRequests: ', routeRequests['/api2/json/parseNameBatch']);
  // console.log('routeResponses: ', routeResponses);
  console.log('STRUCT: ', STRUCT);
};

/************************************************/
/**************** MD Conversion ****************/
/**********************************************/

widdershins.convert(swaggerFile, options)
  .then(dirtyMD => {

    // TODO
    // - Delete Code Samples (replace by route name ?)
    // - Title and description
    // - HTTP request title with method and route
    // - The above command returns JSON structured like this:
    // - Add get developper key url bottom menu

    let findNone = (routeStart, routeEnd) => {
      let foundNone;
      let currentIndex = routeStart;
      while (!foundNone) {
        let currentNone = dirtyMD.indexOf('None', currentIndex);
        if (dirtyMD.indexOf('|None', currentIndex) === currentNone - 1) {
          currentIndex = currentNone + 1;
        }
        else if (currentNone > routeEnd) {
          foundNone = -1;
        }
        else {
          foundNone = currentNone;
        };
      };
      return foundNone;
    };

    let mdRouteReplace = (target, input, startIndex, endIndex, route) => {
      let indexTarget = dirtyMD.indexOf(target, startIndex);
      if (target == 'To perform this operation, you must be authenticated by means of one of the following methods:') {
        // console.log('startIndex: ', startIndex);
        if (!(startIndex < indexTarget) || !(endIndex > indexTarget)) {
          console.log('route: ', route);
          console.log('startIndex: ', startIndex);
          console.log('indexTarget: ', indexTarget);
          console.log('endIndex: ', endIndex);
        }
      }
      if (
        startIndex &&
        endIndex &&
        indexTarget &&
        target.length &&
        (indexTarget + target.length) > endIndex
      ) {
        // console.log('input: ', input);
        // console.log('indexTarget: ', indexTarget);
        // console.log('target.length: ', target.length);
        // console.log('(indexTarget + target.length): ', (indexTarget + target.length));
        // console.log('startIndex: ', startIndex);
        // console.log('endIndex: ', endIndex);
        if (log.replace_outofbounds) console.log(`\u001b[31mError\u001b[m\nRoute Replace - target "${target}" in ${route} is out of bounds`);
      }
      else if (indexTarget === -1) {
        if (log.replace_notarget) console.log(`\u001b[31mError\u001b[m\nRoute Replace - unable to find target "${target}" in ${route}`);
      }
      else {
        dirtyMD = `${dirtyMD.slice(0, indexTarget)}${input}${dirtyMD.slice(indexTarget + target.length, dirtyMD.length)}`
      };
    };

    let mdReplace = (target, input) => {
      let re = new RegExp(target, 'g');
      dirtyMD = dirtyMD.replace(re, input);
    };

    let escapeRegExp = (text) => {
      return text.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, '\\$&');
    };

    //////////////////////
    //ROUTE INFORMATION//
    ////////////////////

    // Links to http code standars
    let contentToSwap = [
      // '[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)',
      '<aside class="warning">',
      'To perform this operation, you must be authenticated by means of one of the following methods:',
      'api_key',
      '</aside>'
    ];

    let urlBase = swaggerFile.servers[0].url;

    let reqTag = '!{request-table-tag}';
    let resTag = '!{response-table-tag}';
    let reqBodyArray = '*The HTTP request body is required to be an array of objects.*';
    let reqBodyObject = '*The HTTP request body is required to be an object.*';
    let resBodyArray = '*The HTTP response body is an array of objects.*';
    let resBodyObject = '*The HTTP response body is an object.*';

    let routes = Object.keys(swaggerFile.paths);
    routes.forEach(route => {

      let routeContent = swaggerFile.paths[route][routeMethods[route]];
      // console.log('routeContent: ', routeContent.responses['200'].content);
      let routeId = routeContent.operationId;
      if (!routeId) {
        console.log('swaggerFile.paths[route]: ', swaggerFile.paths[route]);
        console.log('!routeId: ', route)
      };
      let routeStart = () => dirtyMD.indexOf(`<a id="opId${routeId}"></a>`);
      let routeEnd = () => {
        let nextOperation = dirtyMD.indexOf(`<a id="opId`, routeStart() + 1);
        if (nextOperation !== -1) {
          return nextOperation;
        }
        else {
          return dirtyMD.length;
        };
      };
      // if (routeEnd() === -1) routeEnd() = dirtyMD.length;

      mdRouteReplace(`<h3 id="${routeId.toLowerCase()}-responseschema">Response Schema</h3>`, '', routeStart(), routeEnd(), route);

      /***********************
          FORMAT REQUEST
      ************************/

      // Delete old table
      if (routeRequests[route]) {

        let requestTableStart = dirtyMD.indexOf('|Name|In|Type|Required|Description|', routeStart());
        mdRouteReplace('|Name|In|Type|Required|Description|', reqTag, routeStart(), routeEnd(), route);
        mdRouteReplace('|---|---|---|---|---|', '', requestTableStart, routeEnd(), route);

        if (routeRequests[route].type === 'param') {
          Object.keys(routeRequests[route].schema).forEach(param => {
            let paramName = routeRequests[route].schema[param].name;
            mdRouteReplace(`|${paramName}|path|any|true|none|`, '', requestTableStart, routeEnd(), route);
          });
        }
        else {
          mdRouteReplace(`|body|body|any|false|${routeRequests[route].description}|`, '', requestTableStart, routeEnd(), route);
        };
      }
      else {
        // console.log('No request schema: ', route);
      };

      // Insert new table
      if (routeRequests[route]) {

        if (routeRequests[route].type === 'array') {
          mdRouteReplace(reqTag, `${reqBodyArray}\n\n${reqTag}`, routeStart(), routeEnd(), route);
        }
        else if (routeRequests[route].type === 'object') {
          mdRouteReplace(reqTag, `${reqBodyObject}\n\n${reqTag}`, routeStart(), routeEnd(), route);
        };

        mdRouteReplace(reqTag, `|Name|Type|Required|Description|\n${reqTag}`, routeStart(), routeEnd(), route);
        mdRouteReplace(reqTag, `|---|---|---|---|\n${reqTag}`, routeStart(), routeEnd(), route);

        if (routeRequests[route].type === 'param') {
          Object.keys(routeRequests[route].schema).forEach(param => {
            prm = routeRequests[route].schema[param];
            prm.required = prm.required === true ? 'true' : 'false';
            prm.desc = prm.description ? prm.description : '';
            mdRouteReplace(reqTag, `|${prm.name}|${prm.type}|${prm.required}|${prm.desc}|\n${reqTag}`, routeStart(), routeEnd(), route);
          });
        }
        else {
          Object.keys(routeRequests[route].schema).forEach(param => {
            prm = routeRequests[route].schema[param];
            prm.name = param;
            prm.type = prm.type ? capitalize(prm.type) : 'Object';
            prm.required = prm.required === true ? 'true' : 'false';
            prm.desc = prm.description ? prm.description : '';
            mdRouteReplace(reqTag, `|${prm.name}|${prm.type}|${prm.required}|${prm.desc}|\n${reqTag}`, routeStart(), routeEnd(), route);
          });
        };

        mdRouteReplace(reqTag, '', routeStart(), routeEnd(), route);
      };

      /***********************
          FORMAT RESPONSE
      ************************/

      // Delete old table
      let responseTableStart = dirtyMD.indexOf('|Status|Meaning|Description|Schema|', routeStart());
      mdRouteReplace('|Status|Meaning|Description|Schema|', resTag, routeStart(), routeEnd(), route);
      mdRouteReplace('|---|---|---|---|', '', responseTableStart, routeEnd(), route);
      let responseTableEnd = routeResponses[route] ? dirtyMD.indexOf('Inline|', routeStart()) : dirtyMD.indexOf('None|', routeStart());
      let endLength = routeResponses[route] ? 'Inline|'.length : 'None|'.length;
      let responseLineOk = dirtyMD.slice(dirtyMD.indexOf('|200|', routeStart()), responseTableEnd + endLength);
      mdRouteReplace(responseLineOk, '', responseTableStart, routeEnd(), route);

      let foundNone = findNone(routeStart(), routeEnd());
      if (foundNone !== -1) mdRouteReplace('None', '', foundNone, routeEnd(), route);

      let urlRequest = '`' + routeMethods[route].toUpperCase() + ' ' + route + '`';
      mdRouteReplace(urlRequest, '', routeStart(), routeEnd(), route);

      let paramTitle = `<h3 id="${routeId.toLowerCase()}-parameters">Parameters</h3>`;
      let urlRequestTitle = `<h3 id="${routeId.toLowerCase()}-requesturl">HTTP Request</h3>`;
      let urlRequestEndpoint = '`' + routeMethods[route].toUpperCase() + ' ' + urlBase + route + '`';
      let urlRequestBlock = `${urlRequestTitle}\n\n${urlRequestEndpoint}`;

      // Insert new table
      if (routeResponses[route]) {

        if (routeResponses[route].type === 'array') {
          mdRouteReplace(resTag, `${resBodyArray}\n\n${resTag}`, routeStart(), routeEnd(), route);
        }
        else if (routeResponses[route].type === 'object') {
          mdRouteReplace(resTag, `${resBodyObject}\n\n${resTag}`, routeStart(), routeEnd(), route);
        };

        mdRouteReplace(resTag, `|Name|Type|Required|Description|\n${resTag}`, routeStart(), routeEnd(), route);
        mdRouteReplace(resTag, `|---|---|---|---|\n${resTag}`, routeStart(), routeEnd(), route);

        // if (routeResponses[route].type === 'param') {
        //   Object.keys(routeResponses[route].schema).forEach(param => {
        //     prm = routeResponses[route].schema[param];
        //     prm.required = prm.required === true ? 'true' : 'false';
        //     prm.desc = prm.description ? prm.description : '';
        //     mdRouteReplace(resTag, `|${prm.name}|${prm.type}|${prm.required}|${prm.desc}|\n${resTag}`, routeStart(), routeEnd(), route);
        //   });
        // }
        // else {
        //   console.log('routeResponses[route]: ', routeResponses[route]);
        //   Object.keys(routeResponses[route].schema).forEach(param => {
        //     prm = routeResponses[route].schema[param];
        //     prm.name = param;
        //     prm.type = prm.type ? capitalize(prm.type) : 'Object';
        //     prm.required = prm.required === true ? 'true' : 'false';
        //     prm.desc = prm.description ? prm.description : '';
        //     mdRouteReplace(resTag, `|${prm.name}|${prm.type}|${prm.required}|${prm.desc}|\n${resTag}`, routeStart(), routeEnd(), route);
        //   });
        // };

        mdRouteReplace(resTag, '', routeStart(), routeEnd(), route);
      };

      /***********************
          REQUETS COST
      ************************/
      let costLine;
      if (routeCosts[route]) {
        costLine = `*<u>Cost :</u> The processing of each name requires **${routeCosts[route]}** credits.*`
      }
      else {
        costLine = `*<u>Cost :</u> The processing of each name requires **1** credit.*`
      };
      mdRouteReplace(paramTitle, `${costLine}\n\n${urlRequestBlock}\n\n${paramTitle}`, routeStart(), routeEnd(), route);

      mdRouteReplace(contentToSwap[0], '', routeStart(), routeEnd(), route);
      mdRouteReplace(contentToSwap[1], '', routeStart(), routeEnd(), route);
      mdRouteReplace(contentToSwap[2], '', routeStart(), routeEnd(), route);
      mdRouteReplace(contentToSwap[3], '', routeStart(), routeEnd(), route);

      if (routeMethods[route] === 'get') mdRouteReplace('Parameters</h3>', 'Request Parameters</h3>', routeStart(), routeEnd(), route);
      if (routeMethods[route] === 'post') mdRouteReplace('Parameters</h3>', 'Request Body</h3>', routeStart(), routeEnd(), route);
      // Insert space based name
      let spaceNamed = routeId.replace(/-/g, ' ');
      mdRouteReplace(`## ${routeId}`, `## ${spaceNamed}`, routeStart() - 50, routeEnd(), route);
      mdRouteReplace('> Code samples', `> **${spaceNamed}** code sample :`, routeStart(), routeEnd(), route);
    });

    ///////////////
    //DOC FORMAT//
    /////////////

    mdReplace('dec1', '{');
    mdReplace('dec2', '}');
    mdReplace('Responses</h3>', 'Response</h3>');
    mdReplace('> 200 Response', '');
    let responseTitle = '> The above command returns JSON structured like this:';
    mdReplace('> Example responses', responseTitle);

    // dirtyMD contains the clean converted markdown
    fs.writeFileSync('source/index.md', dirtyMD, 'utf8');
    console.log('--> Completed');
  })
  .catch(err => {
    // handle errors
    console.log('MD Write Error: ', err);
  });