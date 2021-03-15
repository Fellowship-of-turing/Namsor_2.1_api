const widdershins = require('widdershins');
const fs = require('fs');
let config = require('./config/config');

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
options.httpsnippet = true
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
// Choose either test file or complete API
///////////////////////////////////////////
// let targetFile = 'openapi/test/test.json';
let targetFile = 'openapi/openapi.json';

const fileData = fs.readFileSync(targetFile, 'utf8');
const swaggerFile = JSON.parse(fileData);

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

  // Warn user of unhandled req / res data structure
  let unhandledStructure = [];

  let record = {
    total: 0,
    get: 0,
    post: 0,
    singleNameInPath: 0,
    singleNameInPath_arrays: 0,
    singleNameInPath_notarrays: 0,
    hasdolla: 0,
    nodollaref: 0,
  }

  for (let i = 0; i < routes.length; i++) {
    // console.log('routes[i]: ', routes[i]);
    let methodPath = swaggerFile.paths[routes[i]];
    console.log('methodPath: ', typeof methodPath);
    let method = methodPath.get ? 'get' : methodPath.post ? 'post' : 'err';
    record.total++
    if (
      method !== 'get' &&
      method !== 'post'
    ) {
      console.log(`\u001b[31mERROR ! - Unexpected method in ${routes[i]} must be either 'get' or 'post'\u001b[m\n`);
    }
    else {
      let request = methodPath[method];
      console.log('request: ', typeof request);
      // These are the final structures for the request and response
      let REQ_STRUCT;
      let RES_STRUCT;

      if (method === 'get') {
        record.get++
      }
      else if (method === 'post') {
        record.post++
        // Get full path to schemas
        let requestAccept = Object.keys(request.requestBody.content);

        let requestSchemaPath = request.requestBody.content[requestAccept[0]].schema;
        console.log('requestSchemaPath: ', typeof requestSchemaPath);
        let responseSchemaPath = request.responses['200'].content['application/json'].schema.$ref;

        // The schema hold a reference to sub schema
        if (requestSchemaPath.$ref) {
          record.hasdolla++

          let requestSchemaName = requestSchemaPath.$ref.slice(prefixLenght, requestSchemaPath.$ref.length);
          let schemaNameInPath = Object.keys(schemas[requestSchemaName].properties);

          // The schema is an array
          if (
            schemaNameInPath.length === 1 &&
            schemas[requestSchemaName].properties[schemaNameInPath[0]].type === 'array' &&
            schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref
          ) {
            record.singleNameInPath_arrays++

            REQ_STRUCT = [];
            let requestSubSchemaPath = schemas[requestSchemaName].properties[schemaNameInPath[0]].items.$ref;
            let requestSubSchemaName = requestSubSchemaPath.slice(prefixLenght, requestSubSchemaPath.length);
            let requestSubSchema = schemas[requestSubSchemaName];

            if (requestSubSchema.type === 'object') {
              let requestSubStructure = {};
              let subStructureKeys = Object.keys(requestSubSchema.properties);
              subStructureKeys.forEach(key => {
                requestSubStructure[key] = requestSubSchema.properties[key].type;
              })
              REQ_STRUCT.push(requestSubStructure);
              if (routes[i] === '/api2/json/phoneCodeGeoBatch') console.log('Created array.object schema - routes[i]: ', routes[i]);
              if (routes[i] === '/api2/json/phoneCodeGeoBatch') console.log('requestSchemaPath: ', requestSchemaPath);
              request.requestBody.content[requestAccept[0]].schema = REQ_STRUCT;
              if (routes[i] === '/api2/json/phoneCodeGeoBatch') console.log('requestSchemaPath: ', requestSchemaPath);
            }
            else {
              console.log('Sub schema not an object - routes[i]: ', routes[i]);
            }
          }
          else {
            // Case of $ref to an object
            console.log('Multiple paths in $ref - routes[i]: ', routes[i]);
          };

          requestSchema = schemas[requestSchemaName].properties[schemaNameInPath[0]];
          // console.log('requestSchema: ', requestSchema);
        }
        else {
          // Case of the */* with directly structure
          record.nodollaref++
          console.log('No $ref - routes[i]: ', routes[i]);

        }
      };

      // if (titleFile[method.tags[0]]) {
      //   let routeId = route.get ? route.get.operationId : route.post.operationId;
      //   titleFile[method.tags[0]][routeId] = config.titles[routeId] ? config.titles[routeId] : ''
      // }
      // else {
      //   titleFile[method.tags[0]] = {}
      //   let routeId = route.get ? route.get.operationId : route.post.operationId;
      //   titleFile[method.tags[0]][routeId] = config.titles[routeId] ? config.titles[routeId] : ''
      // }

      // Capitalize tag names
      request.tags = request.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1));
    }
  };
  console.log('swaggerFile.paths: ', swaggerFile.paths['/api2/json/phoneCodeGeoBatch'].post.requestBody.content['application/json'].schema);
  console.log('record: ', record);
};

widdershins.convert(swaggerFile, options)
  .then(markdownOutput => {
    let dirtyMD = markdownOutput;

    // TODO
    // - Delete Code Samples (replace by route name ?)
    // - Title and description
    // - HTTP request title with method and route
    // - The above command returns JSON structured like this:
    // - Add get developper key url bottom menu
    if (dirtyMD.indexOf('> Code samples') !== - 1) dirtyMD = dirtyMD.replace(/> Code samples/g, '');
    let responseTitle = '> The above command returns JSON structured like this:';
    if (dirtyMD.indexOf('> Example responses') !== - 1) dirtyMD = dirtyMD.replace(/> Example responses/g, responseTitle);

    // dirtyMD contains the clean converted markdown
    fs.writeFileSync('source/index.md', dirtyMD, 'utf8');
  })
  .catch(err => {
    // handle errors
    console.log('MD Write Error: ', err);
  });