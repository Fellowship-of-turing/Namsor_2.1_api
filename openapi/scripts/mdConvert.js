var colors = require('colors/safe');

// Helper imports
let helpers = require('../helpers');
let capitalize = helpers.capitalize;
let listEnums = helpers.listEnums;

// Imports
const fs = require('fs');
const widdershins = require('widdershins');

const descr = require('../config/combined_descriptions');
let sectionIntro = require('../config/section_intros');

/************************************************/
/**************** MD Conversion ****************/
/**********************************************/

let nbspMulti = '&nbsp;&nbsp;&nbsp;&nbsp;';

let mdConvert = (swaggerFile, store, wsOptions, opt) => {

  let routeMethods = store.routeMethods;
  let routeCosts = store.routeCosts;
  let routeRequests = store.routeRequests;
  let routeResponses = store.routeResponses;

  widdershins.convert(swaggerFile, wsOptions)
    .then(dirtyMD => {

      ///////////////
      //FUNCTIONS//
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
        if (
          startIndex &&
          endIndex &&
          indexTarget &&
          target.length &&
          (indexTarget + target.length) > endIndex
        ) {
          if (opt.replace_outofbounds) console.log(`${colors.red("Error")}\nRoute Replace - target "${target}" in ${route} is out of bounds`);
        }
        else if (indexTarget === -1) {
          if (opt.replace_notarget) console.log(`${colors.red("Error")}\nRoute Replace - unable to find target "${target}" in ${route}`);
        }
        else {
          dirtyMD = `${dirtyMD.slice(0, indexTarget)}${input}${dirtyMD.slice(indexTarget + target.length, dirtyMD.length)}`
        };
      };

      //////////////////////
      //ROUTE INFORMATION//
      ////////////////////

      // Inject section descriptions
      sectionIntro.forEach(section => {
        dirtyMD = dirtyMD.replace(section.tag, section.text);
      });

      // Links to http code standars
      let contentToSwap = [
        '<aside class="warning">',
        'To perform this operation, you must be authenticated by means of one of the following methods:',
        '</aside>'
      ];

      let urlBase = swaggerFile.servers[0].url;

      let reqTag = '!{request-table-tag}';
      let resTag = '!{response-table-tag}';
      let reqBodyArray = '*The HTTP request body is required to be a nested array of objects.*';
      let reqBodyObject = '*The HTTP request body is required to be an object.*';
      let resBodyArray = '*The HTTP response body is a nested array of objects.*';
      let resBodyObject = '*The HTTP response body is an object.*';

      let routes = Object.keys(swaggerFile.paths);
      routes.forEach(route => {

        let routeContent = swaggerFile.paths[route][routeMethods[route]];
        let routeId = routeContent.operationId;

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
          console.log(`${colors.yellow("Warn - No REQUEST schema for :")}\n${route}`);
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

          // Table for a GET request 
          if (routeRequests[route].type === 'param') {
            Object.keys(routeRequests[route].schema).forEach(param => {
              prm = routeRequests[route].schema[param];
              prm.required = prm.required === true ? 'true' : 'false';

              // Get description 
              if (
                descr[route] &&
                descr[route].request &&
                descr[route].request[param]
              ) {
                prm.desc = descr[route].request[param];
              }
              else {
                prm.desc = prm.description ? prm.description : '';
              };
              mdRouteReplace(reqTag, `|${prm.name}|${prm.type}|${prm.required}|${prm.desc}|\n${reqTag}`, routeStart(), routeEnd(), route);
            });
          }
          // Table for a POST request 
          else {
            Object.keys(routeRequests[route].schema).forEach(param => {
              prm = routeRequests[route].schema[param];
              prm.fieldName = param;

              if (
                Array.isArray(prm) &&
                prm.length
              ) {
                prm.type = '**Array of Objects**';
                prm.fieldName = `**${prm.fieldName}**`;
                prm.required = '';
              }
              else if (!prm.type) {
                prm.type = '**Object**';
                prm.fieldName = `**${prm.fieldName}**`;
                prm.required = '';
              }
              else {
                prm.type = capitalize(prm.type);
                prm.enum = prm.enum ? listEnums(prm.enum, route) : '';
                prm.required =
                  prm.required === false ? '' :
                    prm.fieldName === 'id' ? '' :
                      'true';
              };

              // Get description 
              if (
                prm.type === '**Array of Objects**' ||
                prm.type === '**Object**'
              ) {
                prm.desc = '';
              }
              else if (
                descr[route] &&
                descr[route].request &&
                descr[route].request[param]
              ) {
                prm.desc = descr[route].request[param];
              }
              else {
                prm.desc = prm.description ? prm.description : '';
              };

              mdRouteReplace(reqTag, `|${prm.fieldName}|${prm.type}|${prm.required}|${prm.desc}|\n${reqTag}`, routeStart(), routeEnd(), route);

              // Handle nested structures
              if (prm.type === '**Object**' || prm.type === '**Array of Objects**') {
                let indicator = prm.type === '**Object**' ? `${nbspMulti}{...}` : `${nbspMulti}[ {...} ]`;
                if (prm.type == '**Array of Objects**') prm = prm[0];
                Object.keys(prm).forEach(subKey => {

                  if (prm[subKey].type) {
                    subPrm = prm[subKey];
                    subPrm.type = subPrm.type ? capitalize(subPrm.type) : '';
                    subPrm.enum = subPrm.enum ? listEnums(subPrm.enum, route) : '';
                    subPrm.desc = subPrm.description ? subPrm.description : '';

                    subPrm.required =
                      subPrm.required === false ? '' :
                        subKey === 'id' ? '' :
                          'true';

                    // Get description 
                    if (
                      descr[route] &&
                      descr[route].request &&
                      descr[route].request[param] &&
                      descr[route].request[param][subKey]
                    ) {
                      subPrm.desc = descr[route].request[param][subKey];
                    }
                    else {
                      subPrm.desc = subPrm.description ? subPrm.description : '';
                    };

                    mdRouteReplace(reqTag, `|*${indicator}.${subKey}*|${subPrm.type}|${subPrm.required}|${subPrm.desc}|${subPrm.enum}|\n${reqTag}`, routeStart(), routeEnd(), route);
                  }
                  else {

                  };

                });
              };
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
            prm.fieldName = param;

            if (
              Array.isArray(prm) &&
              prm.length
            ) {
              prm.type = '**Array of Objects**';
              prm.fieldName = `**${prm.fieldName}**`;
              prm.enum = '';
            }
            else if (!prm.type) {
              prm.type = '**Object**';
              prm.fieldName = `**${prm.fieldName}**`;
              prm.enum = '';
            }
            else {
              prm.type = capitalize(prm.type);
              prm.enum = prm.enum ? listEnums(prm.enum, route) : '';
            };

            // Get description 
            if (
              prm.type === '**Array of Objects**' ||
              prm.type === '**Object**'
            ) {
              prm.desc = '';
            }
            else if (
              descr[route] &&
              descr[route].response &&
              descr[route].response[param]
            ) {
              prm.desc = descr[route].response[param];
            }
            else {
              prm.desc = prm.description ? prm.description : '';
            };

            mdRouteReplace(resTag, `|${prm.fieldName}|${prm.type}|${prm.desc}|${prm.enum}|\n${resTag}`, routeStart(), routeEnd(), route);

            // Handle nested structures
            if (prm.type === '**Object**' || prm.type === '**Array of Objects**') {
              let indicator = prm.type === '**Object**' ? `${nbspMulti}{...}` : `${nbspMulti}[ {...} ]`;
              if (prm.type == '**Array of Objects**') prm = prm[0];
              Object.keys(prm).forEach(subKey => {

                if (prm[subKey].type) {
                  subPrm = prm[subKey];
                  subPrm.type = subPrm.type ? capitalize(subPrm.type) : '';
                  subPrm.enum = subPrm.enum ? listEnums(subPrm.enum, route) : '';
                  subPrm.desc = subPrm.description ? subPrm.description : '';

                  // Get description 
                  if (
                    descr[route] &&
                    descr[route].response &&
                    descr[route].response[param] &&
                    descr[route].response[param][subKey]
                  ) {
                    subPrm.desc = descr[route].response[param][subKey];
                  }
                  else {
                    subPrm.desc = subPrm.description ? subPrm.description : '';
                  };
                  mdRouteReplace(resTag, `|*${indicator}.${subKey}*|${subPrm.type}|${subPrm.desc}|${subPrm.enum}|\n${resTag}`, routeStart(), routeEnd(), route);
                };

              });
            };
          });

          mdRouteReplace(resTag, '', routeStart(), routeEnd(), route);
        }
        else {
          mdRouteReplace(resTag, 'In case of a success the API will respond with an HTTP 200 code.', routeStart(), routeEnd(), route);
          console.log(`${colors.yellow("Warn - No RESPONSE schema for :")}\n${route}`);
        };

        /***********************
            REQUETS COST
        ************************/
        let costLine;
        let costUnit = routeMethods[route] === 'get' ? "query" : "object";
        let routeSummary = routeContent.summary;

        if (routeCosts[route] > 0) {
          costLine = `*<u>Cost :</u> The processing of each ${costUnit} requires **${routeCosts[route]}** credits.*`
        }
        else {
          costLine = `*<u>Cost :</u> The processing of each ${costUnit} does not require credits.*`
        };


        // Inject cost and titles
        mdRouteReplace(
          `${routeSummary}*`,
          `${routeSummary}*\n\n${costLine}\n\n${urlRequestBlock}\n\n${paramTitle}`,
          routeStart(),
          routeEnd(),
          route
        );

        mdRouteReplace(paramTitle, '', routeStart(), routeEnd(), route);
        mdRouteReplace(contentToSwap[0], '', routeStart(), routeEnd(), route);
        mdRouteReplace(contentToSwap[1], '', routeStart(), routeEnd(), route);
        mdRouteReplace(contentToSwap[2], '', routeStart(), routeEnd(), route);

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

      let escapeResponseTarget = 'console.log(response)'.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      mdReplace(escapeResponseTarget, 'console.log(response.json())');
      mdReplace('Responses</h3>', 'Response</h3>');
      mdReplace('> 200 Response', '');
      let responseTitle = '> The above command returns JSON structured like this:';
      mdReplace('> Example responses', responseTitle);
      // Target _blank for outgoing urls
      mdReplace('<a href=', '<a target="_blank" href=');
      // Apply correct Namsor casing name
      mdReplace('NamSor', 'Namsor');


      // Insert include files into document
      let contentToInject = '# Introduction\n\n';
      opt.intro_includes.forEach(subFile => {
        let getFile = fs.readFileSync(`source/_includes/${subFile}`, 'utf8');
        contentToInject = `${contentToInject}\n\n${getFile}`;
      });

      dirtyMD = dirtyMD.replace('<h1 id="namsor-api-', `${contentToInject}\n\n<h1 id="namsor-api-`);

      // Insert API keys in examples
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

      // Insert key authentication in code examples
      Object.keys(apiKeyTags).forEach(lang => {
        let keyParam = apiKeyTags[lang];
        let escapedExpression = keyParam.target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (lang == 'python') {
          let targetLength = keyParam.target.length;
          mdReplace(escapedExpression, `{\n ${keyParam.target.slice(1, targetLength)},\n${keyParam.header}\n`);
        }
        else if (lang == 'javascript') {
          mdReplace(escapedExpression, `${keyParam.target},\n${keyParam.header}`);
        }
        else if (lang == 'java') {
          mdReplace(escapedExpression, `${keyParam.target}\n  ${keyParam.header}`);
        }
        else if (lang == 'shell') {
          mdReplace(escapedExpression, `${keyParam.header} \\\n  ${keyParam.target}`);
        };
      });

      // Clean dirty exceptions
      dirtyMD = dirtyMD.replace('Base URLs:', '');
      dirtyMD = dirtyMD.replace('* <a target="_blank" href="https://v2.namsor.com/NamsorAPIv2">https://v2.namsor.com/NamsorAPIv2</a>', '');
      dirtyMD = dirtyMD.replace('|source|path|any|true|The API Key to set as enabled/disabled.|', '');
      dirtyMD = dirtyMD.replace('|source|path|any|true|The API Key to set as learnable/non learnable.|', '');
      dirtyMD = dirtyMD.replace('title: NamSor API v2 v2.0.15', 'title: NamSor API Documentation');
      dirtyMD = dirtyMD.replace('NamSor API v2 v2.0.15', 'NamSor API v2.0.15');

      // dirtyMD is now the clean converted markdown
      fs.writeFileSync('source/index.md', dirtyMD, 'utf8');
      console.log(`${colors.green("--> Generation Completed")}`);
      console.log(`${colors.green("Your file has been saved to: source/index.md")}`);
    })
    .catch(err => {
      console.log('MD Convert Catch Error: ', err);
    });
};


module.exports = mdConvert;