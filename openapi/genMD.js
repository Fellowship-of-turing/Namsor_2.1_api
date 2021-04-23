const fs = require('fs');

let inputExamples = require('./config/inputExamples');

// Main scripts
let formatOpenapi = require('./scripts/formatOpenapi');
let mdConvert = require('./scripts/mdConvert');

/////////////////////////////
// Log levels
/////////////////////////////
let log = {
  req_no_params: false,
  res_no_schema: false,
  replace_outofbounds: false,
  replace_notarget: false,
}

/////////////////////////////
// FORMAT OPENAPI JSON
/////////////////////////////

// Get file and parse for treatment
let targetFile = 'openapi/openapi.json';
const fileData = fs.readFileSync(targetFile, 'utf8');
const swaggerFile = JSON.parse(fileData);

let format = formatOpenapi(swaggerFile, log)

let store = format.store;
let swagFile = format.swaggerFile;

/////////////////////////////
// WIDDERSHINS CONVERT TO MD
/////////////////////////////

// Widdershins Options
const wsOptions = {
  includes: [
    'errors.md',
    'authentication.md',
  ],
  language_tabs: [
    { 'shell': "Shell" },
    { 'java': "Java" },
    { 'python': 'Python' },
    { 'javascript': 'JavaScript' },
  ],
  language_clients: [
    { 'shell': 'curl' },
    { 'java': 'unirest' },
    { 'python': 'requests' },
    { 'javascript': 'fetch' },
  ],
  codeSamples: true,
  httpsnippet: true,
  toc_footers: [
    {
      "description": "Visit namsor.com",
      "url": "https://v2.namsor.com"
    },
    {
      "description": "Get the NamSor Java SDK",
      "url": "https://github.com/namsor/namsor-java-sdk2"
    },
    {
      "description": "Get the NamSor Python SDK",
      "url": "https://github.com/namsor/namsor-python-sdk2"
    },
  ]
};

mdConvert(swagFile, wsOptions, store, log)

