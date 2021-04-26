// Helper imports
let helpers = require('./helpers');
let capitalize = helpers.capitalize;
let listEnums = helpers.listEnums;

// Imports
const fs = require('fs');
const widdershins = require('widdershins');

/************************************************/
/**************** MD Conversion ****************/
/**********************************************/

let mdConvert = (swaggerFile, wsOptions, store, log) => {

  let routeMethods = store.routeMethods;
  let routeCosts = store.routeCosts;
  let routeRequests = store.routeRequests;
  let routeResponses = store.routeResponses;

  widdershins.convert(swaggerFile, wsOptions)
    .then(dirtyMD => {

      ///////////////
      //FINCTIONS//
      /////////////
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

      let mdReplace = (target, input) => {
        let re = new RegExp(target, 'g');
        dirtyMD = dirtyMD.replace(re, input);
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

          mdRouteReplace(resTag, `|Name|Type|Description|Enumerators|\n${resTag}`, routeStart(), routeEnd(), route);
          mdRouteReplace(resTag, `|---|---|---|---|\n${resTag}`, routeStart(), routeEnd(), route);

          Object.keys(routeResponses[route].schema).forEach(param => {
            prm = routeResponses[route].schema[param];
            prm.name = param;
            prm.type = prm.type ? capitalize(prm.type) : 'Object';
            // if (prm.type == 'Object') console.log('----------------------------res obj:', route,);
            // if (prm.type == 'Object') console.log('res obj:', routeResponses[route].schema);
            prm.enum = prm.enum ? listEnums(prm.enum, route) : '';
            prm.desc = prm.description ? prm.description : '';
            mdRouteReplace(resTag, `|${prm.name}|${prm.type}|${prm.desc}|${prm.enum}|\n${resTag}`, routeStart(), routeEnd(), route);
          });

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

      let includeFiles = [
        'information.md',
        'authentication.md',
        'errors.md',
      ];

      let contentToInject = '# General Info\n\n';
      includeFiles.forEach(subFile => {
        let getFile = fs.readFileSync(`source/_includes/${subFile}`, 'utf8');
        contentToInject = `${contentToInject}\n\n${getFile}`;
      });

      dirtyMD = dirtyMD.replace('<h1 id="namsor-api-v2-', `${contentToInject}\n\n<h1 id="namsor-api-v2-`);

      let apiKeyTags = {
        shell: {
          target: "--header 'Accept: application/json'",
          header: "--header 'X-API-KEY: your-api-key'"
        },
        java: {
          target: '.header("Accept", "application/json")',
          header: '.header("X-API-KEY", "your-api-key")'
        },
        javascript: {
          target: ' "Accept": "application/json"',
          header: '    "X-API-KEY": "your-api-key"'
        },
        python: {
          target: '{"Accept": "application/json"',
          header: ' "X-API-KEY": "your-api-key"'
        },
      };

      Object.keys(apiKeyTags).forEach(lang => {
        let keyParam = apiKeyTags[lang];
        let escapedExpression = keyParam.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
        if (lang == 'python') {
          let targetLength = keyParam.target.length;
          mdReplace(escapedExpression, `{\n ${keyParam.target.slice(1, targetLength)},\n${keyParam.header}\n`);
          console.log('keyParam.target.slice(1, targetLength): ', keyParam.target.slice(1, targetLength));
        }
        else if (lang == 'javascript') {
          mdReplace(escapedExpression, `${keyParam.target},\n${keyParam.header}`);
        }
        else if (lang == 'java') {
          mdReplace(escapedExpression, `${keyParam.header}\n  ${keyParam.target}`);
        }
        else if (lang == 'shell') {
          mdReplace(escapedExpression, `${keyParam.target} \\\n  ${keyParam.header}`);
        };
      });

      // dirtyMD contains the clean converted markdown
      fs.writeFileSync('source/index.md', dirtyMD, 'utf8');
      console.log('\u001b[32m--> Generation Completed\u001b[0m');
      console.log('\u001b[32mYour file has been saved to: source/index.md\u001b[0m');
    })
    .catch(err => {
      console.log('MD Convert Catch Error: ', err);
    });
};

module.exports = mdConvert;