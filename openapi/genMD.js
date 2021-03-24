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
// Choose either test file or complete API
///////////////////////////////////////////
// let targetFile = 'openapi/test/test.json';
let targetFile = 'openapi/openapi.json';

const fileData = fs.readFileSync(targetFile, 'utf8');
const swaggerFile = JSON.parse(fileData);

// Stores the method of each route
let routeMethods = {};

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
    tag.name = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
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
      routeMethods[routes[i]] = method;

      swaggerFile.paths[routes[i]][method].operationId = routeNames[route.operationId];
      // Delete systematic security requirement
      if (swaggerFile.paths[routes[i]][method].security) delete swaggerFile.paths[routes[i]][method].security;

      if (method === 'get') {
        record.get++

        ////////////
        //REQUEST//
        //////////
        if (!route.parameters) {
          if (log.req_no_params) console.log(`\u001b[34mWarning\u001b[m\nRoute ${routes[i]} - No request parameters where found`);
        }
        else {
          route.parameters.forEach(param => {
            if (param.schema) param.schema = `dec1${param.name}dec2`;
          });
        };
      }
      else if (method === 'post') {
        record.post++
        // Get full path to request schemas

        ////////////
        //REQUEST//
        //////////
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

          route.responses['200'].content['application/json'].schema = RES_STRUCT;
        }
        else {
          console.log(`\u001b[31mError\u001b[m\nRoute ${routes[i]} - Unexpected $ref response structure must be either an object or an array`);
        };
      };

      // Capitalize tag names
      route.tags = route.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));
    }
  };

  // Delete Schemas
  delete swaggerFile.components;
  fs.writeFileSync('openapi/premarkdown.json', JSON.stringify(swaggerFile), 'utf8');
  console.log('record: ', record);
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
      if (dirtyMD.indexOf(target) !== - 1) dirtyMD = dirtyMD.replace(re, input);
    };

    let escapeRegExp = (text) => {
      return text.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, '\\$&');
    };

    //////////////////////
    //ROUTE INFORMATION//
    ////////////////////

    // Links to http code standars
    let contentToSwap = [
      '[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)',
      '[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)',
      '[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)',
      '<aside class="warning">',
      'To perform this operation, you must be authenticated by means of one of the following methods:',
      'api_key',
      '</aside>'
    ];

    let urlBase = swaggerFile.servers[0].url;

    let routes = Object.keys(swaggerFile.paths);
    routes.forEach(route => {

      let routeContent = swaggerFile.paths[route][routeMethods[route]];
      let routeId = routeContent.operationId;

      let routeStart = dirtyMD.indexOf(`<a id="opId${routeId}"></a>`);
      let routeEnd = dirtyMD.indexOf(`<a id="opId`, routeStart + 1);
      if (routeEnd === -1) routeEnd = dirtyMD.length;

      mdRouteReplace('> Code samples', `> ${routeId} code sample :`, routeStart, routeEnd, route);
      mdRouteReplace(`<h3 id="${routeId.toLowerCase()}-responseschema">Response Schema</h3>`, '', routeStart, routeEnd, route);

      let foundNone = findNone(routeStart, routeEnd);
      if (foundNone !== -1) mdRouteReplace('None', '', foundNone, routeEnd, route);

      let urlRequest = '`' + routeMethods[route].toUpperCase() + ' ' + route + '`';
      mdRouteReplace(urlRequest, '', routeStart, routeEnd, route);

      let paramTitle = `<h3 id="${routeId.toLowerCase()}-parameters">Parameters</h3>`;
      let urlRequestTitle = `<h3 id="${routeId.toLowerCase()}-requesturl">URL</h3>`;
      let urlRequestEndpoint = '`' + routeMethods[route].toUpperCase() + ' ' + urlBase + route + '`';
      mdRouteReplace(paramTitle, `${urlRequestTitle}\n\n${urlRequestEndpoint}\n\n${paramTitle}`, routeStart, routeEnd, route);

      mdRouteReplace(contentToSwap[0], `OK`, routeStart, routeEnd, route);
      mdRouteReplace(contentToSwap[1], `Unauthorized`, routeStart, routeEnd, route);
      mdRouteReplace(contentToSwap[2], `Forbidden`, routeStart, routeEnd, route);

      mdRouteReplace(contentToSwap[3], ``, routeStart, routeEnd, route);
      mdRouteReplace(contentToSwap[4], ``, routeStart, routeEnd, route);
      mdRouteReplace(contentToSwap[5], ``, routeStart, routeEnd, route);
      mdRouteReplace(contentToSwap[6], ``, routeStart, routeEnd, route);
    });

    ///////////////
    //DOC FORMAT//
    /////////////

    mdReplace('dec1', '{');
    mdReplace('dec2', '}');
    mdReplace(escapeRegExp('|Inline|'), '|See example|');
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