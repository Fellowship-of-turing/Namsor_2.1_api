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

## Deploying

-   At the root of the project run "npm run deploy" it will automatically build & deploy to the build repository.

## Other helpful links

https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Adding routes

1. Add a route name in config/route_names.js using the operationId as key for the new name
2. Add route examples in config/api_examples.js using the route path as key
3. Add descriptions in config/combined_descriptions.js using the route path as key
4. Specify the route's category in config/route_sections.js
5. Specify the route's order in config/route_ordering.js

## Editing the pages

1. To modify the <head> use the source/\_includes/head.ejs file
1. To modify the core code of the page use the source/\_includes/slate.ejs file
1. To modify the first paragraph use the openapi\config\documentation_intro.js file
1. To modify the <footer> use the source/\_includes/footer.ejs file
