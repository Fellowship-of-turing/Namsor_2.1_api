const fs = require('fs');

// Main scripts
let formatOpenapi = require('./scripts/formatOpenapi');
let mdConvert = require('./scripts/mdConvert');

/////////////////////////////
// FORMAT OPENAPI JSON
/////////////////////////////

// Get file and parse for treatment
const swaggerFile = JSON.parse(
  fs.readFileSync('openapi/openapi.json', 'utf8')
);

// Format Options
let formatOptions = {
  // Log options
  req_no_params: false,
  res_no_schema: false,
  replace_outofbounds: false,
  replace_notarget: false,
  // Inject examples
  inject_ex: true,
  // Inject sections into intro
  intro_includes: [
    'information.md',
    'authentication.md',
    'errors.md',
  ],
};

let formated = formatOpenapi(swaggerFile, formatOptions)

/////////////////////////////
// WIDDERSHINS CONVERT TO MD
/////////////////////////////

// Widdershins Options
const widdershinsOptions = {
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

mdConvert(
  formated.swaggerFile,
  formated.store,
  widdershinsOptions,
  formatOptions
);

