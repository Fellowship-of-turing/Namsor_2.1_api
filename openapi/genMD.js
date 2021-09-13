var colors = require('colors/safe');

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
      "description": "Get your API key now",
      "url": "https://v2.namsor.com/NamSorAPIv2/sign-in.html"
    },
    {
      "description": "View all our tools on Github",
      "url": "https://github.com/namsor"
    },
    {
      "description": "Get our SDK for Java",
      "url": "https://github.com/namsor/namsor-java-sdk2"
    },
    {
      "description": "Get our SDK for Python",
      "url": "https://github.com/namsor/namsor-python-sdk2"
    },
    {
      "description": "Get our SDK for Golang",
      "url": "https://github.com/namsor/namsor-golang-sdk2"
    },
    {
      "description": "Get our SDK for JavaScript",
      "url": "https://github.com/namsor/namsor-javascript-sdk2"
    },
    {
      "description": "Get our SDK for PHP",
      "url": "https://github.com/namsor/namsor-php-sdk2"
    },
    {
      "description": "Get our SDK for Ruby",
      "url": "https://github.com/namsor/namsor-ruby-sdk2"
    },
    {
      "description": "Get our SDK for C#",
      "url": "https://github.com/namsor/namsor-csharp-sdk2"
    },
    {
      "description": "Get our CLI Toolkit for Java",
      "url": "https://github.com/namsor/namsor-tools-v2"
    },
    {
      "description": "Get our CLI Toolkit for Python",
      "url": "https://github.com/namsor/namsor-python-tools-v2"
    },
    {
      "description": "Get our CLI Toolkit for Golang",
      "url": "https://github.com/namsor/namsor-golang-tools-v2"
    },
  ]
};

mdConvert(
  formated.swaggerFile,
  formated.store,
  widdershinsOptions,
  formatOptions
);

