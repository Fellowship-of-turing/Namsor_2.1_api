# C2T

## Notes

a. To change code synthax highlighting theme change the CSS file in slate.ejs "<head>"
Current theme : "<link href="slate/css/vscodedark.css" rel="stylesheet">"

## Install

Requires an LTS version of Node.js

-   Clone the repository
-   `npm i`

or

-   Create your Node.js project (`npm init`)
-   Add `reslate` as a (dev)dependency (`npm i [--save-dev] reslate`)
-   `npx reslate init`

## Running

-   To build: `npm run build`
-   To debug: `npm run debug`
-   To serve: `npm run serve` and browse to http://localhost:3001

(If installed as a dependency, use `npx reslate [build|debug|serve]`)

## Generating an MD file using openapi.json

-   Drop the openapi.json in openapi/
-   Be sure any newly added routes have proper data in openapi/config/apiExamples.js
-   Be sure any newly added routes have proper data in openapi/config/descriptions.js
-   Be sure any newly added routes have proper data in openapi/config/routeNames.js
-   Run `npm run genmd`
