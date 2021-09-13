---
title: NamSor API Documentation
language_tabs:
  - shell: Shell
  - java: Java
  - python: Python
  - javascript: JavaScript
language_clients:
  - shell: curl
  - java: unirest
  - python: requests
  - javascript: fetch
toc_footers:
  - <a target="_blank" href="https://v2.namsor.com">Visit namsor.com</a>
  - <a target="_blank" href="https://v2.namsor.com/NamSorAPIv2/sign-in.html">Get your API key
    now</a>
  - <a target="_blank" href="https://github.com/namsor">View all our tools on Github</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-java-sdk2">Get our SDK for Java</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-python-sdk2">Get our SDK for
    Python</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-golang-sdk2">Get our SDK for
    Golang</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-javascript-sdk2">Get our SDK for
    JavaScript</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-php-sdk2">Get our SDK for PHP</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-ruby-sdk2">Get our SDK for Ruby</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-csharp-sdk2">Get our SDK for C#</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-tools-v2">Get our CLI Toolkit for
    Java</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-python-tools-v2">Get our CLI
    Toolkit for Python</a>
  - <a target="_blank" href="https://github.com/namsor/namsor-golang-tools-v2">Get our CLI
    Toolkit for Golang</a>
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="namsor-api-v2">NamSor API v2.0.15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 

Base URLs:

* <a target="_blank" href="https://v2.namsor.com/NamSorAPIv2">https://v2.namsor.com/NamSorAPIv2</a>

Email: <a target="_blank" href="mailto:contact@namsor.com">Namsor SAS</a> Web: <a target="_blank" href="http://www.namsor.com/">Namsor SAS</a> 
License: <a target="_blank" href="https://v2.namsor.com/NamSorAPIv2/assets/pdf/201803_NamSor_API_Terms_v007.pdf">NamSorAPI_Lic_v0.0.7</a>

# Introduction



## About the Namsor API

-   The base endpoint URL is: https://v2.namsor.com/NamSorAPIv2
-   For best results, use Batch endpoint to process multi-entity requests
-   Batch processing returns the data sorted in the same order as it was sent.
-   **All endpoints require an API Key.**
-   Never share your API key to ANYONE.

### API Requests and Responses

-   All endpoints return JSON containing either an object or a nested array of objects.

-   Currently certain NamSor API endpoints use nested object structures in their query body and / or responses, please refer yourself to the corresponding code example.

-   Certain API response code examples have been truncated in order to improve readability. For example the countriesOriginTop, ethnicitiesTop and matchCandidates Array fields have been reduced to 2 elements in length.

-   Be aware that data in the code examples have been URL encoded into the corresponding ASCII code characters when necessary, for example "谢晓亮" is replaced by "%E8%B0%A2%E6%99%93%E4%BA%AE". URLs cannot contain spaces or non-ASCII characters. When making GET requests to the API use URL encoding to convert non-ASCII characters into a format that can be transmitted over the internet.

### Data Privacy

Namsor does not and will never store submitted names, phones or other potentially personal data. The machine learning Algorithm does however improve data evaluation based on the submitted data, it does also keep a history of the services your API key queries.

If you wish to disable machine learning based on your submissions, please set learnable to "false" by using <a href="#learnable">the corresponding Admin route</a>.

If you wish to disable service usage history, please set anonymized to "true" by using <a href="#anonymized">the corresponding Admin route</a>.


## Authentication

### API Key Creation

To create an API key visit <a target="_blank" href="https://v2.namsor.com">www.namsor.com</a> and create an account. Navigate to the account information page to retrieve your API key. Your newly created account comes with 5000 free credits that you may use immediately with any of Namsor's tools: API, demo page, csv and excel file processor or CLI tools.

### API Key Installation

Your API key must be set in the _header_ of your request using the _X-API-KEY_ property.

Please refer yourself to the provided code samples for correct key installation. Just replace "your-api-key" with your NamSor API key.


## Credits

### What are Credits

We use a credit system to track usage. Each plan comes with a monthly quantity of credits and a price for request that exceed your monthly allowance. The free Basic subscription plan grants you 5000 credits but <a target="_blank" href="https://www.namsor.com/prices">other plans are available</a> in case you have higher requirements.

As an example, with 5000 credits you can either :

-   Process 5000 names to determine their gender
-   Process 500 names to determine their origin or ethnicity
-   Process 250 names to determine their diaspora

Admin routes are free to use.

### Repeated Operations Tolerance

Our API features smart processing and it will not charge for analyzing identical data for up to 20 times. For example if you submit the same full name 5 times in order to infer it's gender then you will only be charged 1 credit.

### Soft Limit vs Hard Limit

In your user account you may set two types of credit usage limits:

-   A soft limit that will trigger an email notification when reached.
-   A hard limit that will trigger an email notification and block the API key when reached.

### Track Usage

There are two ways to track your credit usage: check the provided graphics in your user account or query the appropriate Admin routes (API Usage, API Usage History and API Usage History Aggregate).


## Enumerators

For readability purposes the enumerators for certain fields may be omitted in the request / response tables. We have detailed the most important classification types in the following section.

### Gender

female, male, unknown

### Region Classifications

<ins>subRegionOrigin :</ins>

Southern Asia, Southern Europe, Northern Africa, Middle Africa, Caribbean, South America, Western Asia, Australia and New Zealand, Western Europe, Northern Europe, Eastern Europe, Central America, Western Africa, Southern Africa, South-Eastern Asia, Eastern Africa, Northern America, Eastern Asia, Melanesia, Central Asia, Micronesia, Polynesia, Unclassified

<br>

We provide two regions classifications when inferring the origin. These classifications have slightly different enumerators as detailed below:

<ins>regionOrigin :</ins>

Africa, Asia, Europe, Latin America and the Caribbean, Northern America, Oceania, Unclassified

<ins>topRegionOrigin :</ins>

Africa, Americas, Asia, Europe, Oceania, Unclassified


## Errors

The NamSor API uses the following error codes:

| Error Code | Meaning               | Description                             |
| ---------- | --------------------- | --------------------------------------- |
| 401        | Unauthorized          | Missing or incorrect API Key.           |
| 403        | Forbidden             | API Limit Reached or API Key Disabled.  |
| 404        | Not Found             | The specified route could not be found. |
| 500        | Internal Server Error | Server error. Try again later.          |


<h1 id="namsor-api-v2-origin">Origin</h1>

Namsor helps you find thorough information about the <strong>origin of a name</strong> by establishing a name's <strong>country of origin</strong>, the <strong>ethnicity</strong>, the <strong>diaspora</strong> and the <strong>U.S. race classification</strong>. We also provide a corridor evalutation API, to check background information about <strong>international interactions</strong>.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/origin-name'>Try out Origin features</a>

## Country

<a id="opIdCountry"></a>

> **Country** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/country/Marie%20Curie \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/country/Marie%20Curie")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/country/Marie%20Curie"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/country/Marie%20Curie", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely geographic context of a full name (first name and last name) or a surname.*

*<u>Cost :</u> The processing of each query requires **10** credits.*

<h3 id="country-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}`



<h3 id="country-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|personalNameFull|String|true|Full name (first name and last name) or surname|




> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "345f20b8-6b93-46d7-a938-2158ae5094fd",
  "name": "Marie Curie",
  "score": 16.010522433640798,
  "country": "FR",
  "countryAlt": "BE",
  "region": "Europe",
  "topRegion": "Europe",
  "subRegion": "Western Europe",
  "countriesTop": [
    "FR",
    "BE"
  ],
  "probabilityCalibrated": 0.6038660468170615,
  "probabilityAltCalibrated": 0.6013059282648627
}
```

<h3 id="country-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|The provided full name||
|score|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|country|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|countryAlt|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|region|String|Most likely region of origin||
|topRegion|String|Most likely region of origin (alternative classification)||
|subRegion|String|Most likely sub region of origin||
|countriesTop|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for country)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryAlt)||











## Country Batch

<a id="opIdCountry-Batch"></a>

> **Country Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Marie Curie"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Marie Curie\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Marie Curie"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Marie Curie\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely geographic context of up to 100 full names (first names and last names) or surnames.*

*<u>Cost :</u> The processing of each object requires **10** credits.*

<h3 id="country-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Marie Curie"
    }
  ]
}
```

<h3 id="country-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (first name and last name) or surname|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Marie Curie",
      "score": 16.010522304999995,
      "country": "FR",
      "countryAlt": "BE",
      "region": "Europe",
      "topRegion": "Europe",
      "subRegion": "Western Europe",
      "countriesTop": [
        "FR",
        "BE"
      ],
      "probabilityCalibrated": 0.6038660443624172,
      "probabilityAltCalibrated": 0.6013059169873552
    }
  ]
}
```

<h3 id="country-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|score|Number|Higher implies a more reliable result, score is not normalized||
|country|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|countryAlt|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|region|String|Most likely region of origin||
|topRegion|String|Most likely region of origin (alternative classification)||
|subRegion|String|Most likely subregion of origin||
|countriesTop|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for country)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryAlt)||











## Origin

<a id="opIdOrigin"></a>

> **Origin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/origin/Zanele/Muholi \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/Zanele/Muholi")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/Zanele/Muholi"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/Zanele/Muholi", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely country of origin of a first name and a last name. Note that the "Diaspora" endpoint may be better suited for multicultural countries like the U.S.A, Canada, Australia, New-Zealand, etc.*

*<u>Cost :</u> The processing of each query requires **10** credits.*

<h3 id="origin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}`



<h3 id="origin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "859e5b4b-1243-4d5a-902d-ac4d46712ce7",
  "firstName": "Zanele ",
  "lastName": "Muholi",
  "countryOrigin": "ZA",
  "countryOriginAlt": "LS",
  "countriesOriginTop": [
    "ZA",
    "LS"
  ],
  "score": 14.109780317889099,
  "regionOrigin": "Africa",
  "topRegionOrigin": "Africa",
  "subRegionOrigin": "Southern Africa",
  "probabilityCalibrated": 0.7807734140287722,
  "probabilityAltCalibrated": 0.8559822284821633
}
```

<h3 id="origin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|countryOrigin|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|countryOriginAlt|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|countriesOriginTop|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|score|Number|Higher implies a more reliable result, score is not normalized||
|regionOrigin|String|Most likely region of origin||
|topRegionOrigin|String|Most likely region of origin (alternative classification)||
|subRegionOrigin|String|Most likely subregion of origin||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOrigin)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOriginAlt)||











## Origin Batch

<a id="opIdOrigin-Batch"></a>

> **Origin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Zanele","lastName":"Muholi"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Zanele\",\"lastName\":\"Muholi\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Zanele",
            "lastName": "Muholi"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Zanele\",\"lastName\":\"Muholi\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely country of origin of up to 100 first names and a last names. Note that the "Diaspora" endpoint may be better suited for countries like U.S.A, Canada, Australia, New-Zealand and other melting-pots.*

*<u>Cost :</u> The processing of each object requires **10** credits.*

<h3 id="origin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Zanele",
      "lastName": "Muholi"
    }
  ]
}
```

<h3 id="origin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Zanele",
      "lastName": "Muholi",
      "countryOrigin": "ZA",
      "countryOriginAlt": "LS",
      "countriesOriginTop": [
        "ZA",
        "LS"
      ],
      "score": 14.109780317889099,
      "regionOrigin": "Africa",
      "topRegionOrigin": "Africa",
      "subRegionOrigin": "Southern Africa",
      "probabilityCalibrated": 0.7807734140304999,
      "probabilityAltCalibrated": 0.8559822288694453
    }
  ]
}
```

<h3 id="origin-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|countryOrigin|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|countryOriginAlt|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|countriesOriginTop|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|score|Number|Higher implies a more reliable result, score is not normalized||
|regionOrigin|String|Most likely region of origin||
|topRegionOrigin|String|Most likely region of origin (alternative classification)||
|subRegionOrigin|String|Most likely subregion of origin||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOrigin)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOriginAlt)||











## Diaspora

<a id="opIdDiaspora"></a>

> **Diaspora** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/US/Subrahmanyan/Chandrasekhar \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/US/Subrahmanyan/Chandrasekhar")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/US/Subrahmanyan/Chandrasekhar"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/US/Subrahmanyan/Chandrasekhar", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely ethnicity or diaspora of a first name and last name, according to the country of residence.*

*<u>Cost :</u> The processing of each query requires **20** credits.*

<h3 id="diaspora-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}`



<h3 id="diaspora-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|countryIso2|String|true|Country of residence, in ISO 3166-1 alpha-2 format|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|






> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "06cea58d-a043-4c33-909d-e78f84a68d75",
  "firstName": "Subrahmanyan",
  "lastName": "Chandrasekhar",
  "score": 36.03940751773479,
  "ethnicityAlt": "Pakistanese",
  "ethnicity": "Indian",
  "lifted": false,
  "countryIso2": "US",
  "ethnicitiesTop": [
    "Indian",
    "Pakistanese"
  ]
}
```

<h3 id="diaspora-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|score|Number|Higher implies a more reliable result, score is not normalized||
|ethnicityAlt|String|Second most likely ethnicity||
|ethnicity|String|Most likely ethnicity||
|lifted|Boolean|Indicates if the result of the "ethnicity" field is based on machine learning only, or further lifted as a known fact by a country-specific rule||
|countryIso2|String|Country of residence, in ISO 3166-1 alpha-2 format||
|ethnicitiesTop|Array|Top 10 most likely etchnicities, order from most likely to least likely||











## Diaspora Batch

<a id="opIdDiaspora-Batch"></a>

> **Diaspora Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Subrahmanyan","lastName":"Chandrasekhar","countryIso2":"US"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Subrahmanyan\",\"lastName\":\"Chandrasekhar\",\"countryIso2\":\"US\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Subrahmanyan",
            "lastName": "Chandrasekhar",
            "countryIso2": "US"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Subrahmanyan\",\"lastName\":\"Chandrasekhar\",\"countryIso2\":\"US\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely ethnicity or diaspora of up to 100 first names and last names, according to their country of residence.*

*<u>Cost :</u> The processing of each object requires **20** credits.*

<h3 id="diaspora-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Subrahmanyan",
      "lastName": "Chandrasekhar",
      "countryIso2": "US"
    }
  ]
}
```

<h3 id="diaspora-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|countryIso2|String|true|Country of residence, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Subrahmanyan",
      "lastName": "Chandrasekhar",
      "score": 36.039400468550376,
      "ethnicityAlt": "Pakistanese",
      "ethnicity": "Indian",
      "lifted": false,
      "countryIso2": "US",
      "ethnicitiesTop": [
        "Indian",
        "Pakistanese"
      ]
    }
  ]
}
```

<h3 id="diaspora-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|score|Number|Higher implies a more reliable result, score is not normalized||
|ethnicityAlt|String|Second most likely ethnicity||
|ethnicity|String|Most likely ethnicity||
|lifted|Boolean|Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule||
|countryIso2|String|Country of residence, in ISO 3166-1 alpha-2 format||
|ethnicitiesTop|Array|Top 10 most likely etchnicities, order from most likely to least likely||











## US Race and Ethnicity

<a id="opIdUS-Race-and-Ethnicity"></a>

> **US Race and Ethnicity** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/Keith/Haring \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/Keith/Haring")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/Keith/Haring"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/Keith/Haring", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely U.S. race or ethnicity of a U.S. resident's first name and last name.*

*<u>Cost :</u> The processing of each query requires **10** credits.*

<h3 id="us-race-and-ethnicity-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}`



<h3 id="us-race-and-ethnicity-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "3f1efb7d-5141-4ebf-8373-17c4068d22e4",
  "firstName": "Keith",
  "lastName": "Haring",
  "raceEthnicityAlt": "B_NL",
  "raceEthnicity": "W_NL",
  "score": 14.124697493222158,
  "raceEthnicitiesTop": [
    "W_NL",
    "B_NL",
    "A",
    "HL"
  ],
  "probabilityCalibrated": 0.8284804986473213,
  "probabilityAltCalibrated": 0.8890718404096647
}
```

<h3 id="us-race-and-ethnicity-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|raceEthnicityAlt|String|Second most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Higher implies a more reliable result, score is not normalized||
|raceEthnicitiesTop|Array|Most likely ethnicity, sorted from most likely to least likely (U.S. race and ethnicity categorization)||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicity)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicityAlt)||











## US Race and Ethnicity Batch

<a id="opIdUS-Race-and-Ethnicity-Batch"></a>

> **US Race and Ethnicity Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Keith","lastName":"Haring","countryIso2":"US"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Keith\",\"lastName\":\"Haring\",\"countryIso2\":\"US\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Keith",
            "lastName": "Haring",
            "countryIso2": "US"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Keith\",\"lastName\":\"Haring\",\"countryIso2\":\"US\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely U.S. race or ethnicity of up to 100 U.S. resident's first names and last names.*

*<u>Cost :</u> The processing of each object requires **10** credits.*

<h3 id="us-race-and-ethnicity-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Keith",
      "lastName": "Haring",
      "countryIso2": "US"
    }
  ]
}
```

<h3 id="us-race-and-ethnicity-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Keith",
      "lastName": "Haring",
      "raceEthnicityAlt": "B_NL",
      "raceEthnicity": "W_NL",
      "score": 14.124697493222158,
      "raceEthnicitiesTop": [
        "W_NL",
        "B_NL",
        "A",
        "HL"
      ],
      "probabilityCalibrated": 0.8284804986473213,
      "probabilityAltCalibrated": 0.8890718404096647
    }
  ]
}
```

<h3 id="us-race-and-ethnicity-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|raceEthnicityAlt|String|Second most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Higher implies a more reliable result, score is not normalized||
|raceEthnicitiesTop|Array|Most likely ethnicity, sorted from most likely to least likely (U.S. race and ethnicity categorization)||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicity)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicityAlt)||











## US Race and Ethnicity ZIP

<a id="opIdUS-Race-and-Ethnicity-ZIP"></a>

> **US Race and Ethnicity ZIP** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/Makoto/Iwamatsu/10019 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/Makoto/Iwamatsu/10019")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/Makoto/Iwamatsu/10019"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/Makoto/Iwamatsu/10019", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely U.S. race or ethnicity of a U.S. resident's first name and last name, using their ZIP code.*

*<u>Cost :</u> The processing of each query requires **10** credits.*

<h3 id="us-race-and-ethnicity-zip-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}`



<h3 id="us-race-and-ethnicity-zip-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|zip5Code|String|true|5 digit zip code|






> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "d2e92047-c3ce-4363-bf3c-a54757d372b2",
  "firstName": "Makoto",
  "lastName": "Iwamatsu",
  "raceEthnicityAlt": "HL",
  "raceEthnicity": "A",
  "score": 32.90567784847702,
  "raceEthnicitiesTop": [
    "A",
    "HL",
    "B_NL",
    "W_NL"
  ],
  "probabilityCalibrated": 0.9376434608736617,
  "probabilityAltCalibrated": 0.9817007157185398
}
```

<h3 id="us-race-and-ethnicity-zip-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|raceEthnicityAlt|String|Second most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Higher implies a more reliable result, score is not normalized||
|raceEthnicitiesTop|Array|Most likely ethnicity, sorted from most likely to least likely (U.S. race and ethnicity categorization)||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicity)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicityAlt)||











## US Race and Ethnicity ZIP Batch

<a id="opIdUS-Race-and-Ethnicity-ZIP-Batch"></a>

> **US Race and Ethnicity ZIP Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Makoto","lastName":"Iwamatsu","countryIso2":"JP","zipCode":"10019"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Makoto\",\"lastName\":\"Iwamatsu\",\"countryIso2\":\"JP\",\"zipCode\":\"10019\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Makoto",
            "lastName": "Iwamatsu",
            "countryIso2": "JP",
            "zipCode": "10019"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Makoto\",\"lastName\":\"Iwamatsu\",\"countryIso2\":\"JP\",\"zipCode\":\"10019\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely U.S. race or ethnicity of up to 100 U.S. resident's first names and last names, using their ZIP code.*

*<u>Cost :</u> The processing of each object requires **10** credits.*

<h3 id="us-race-and-ethnicity-zip-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Makoto",
      "lastName": "Iwamatsu",
      "countryIso2": "JP",
      "zipCode": "10019"
    }
  ]
}
```

<h3 id="us-race-and-ethnicity-zip-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|
|zipCode|String|true|5 digit zip code|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Makoto",
      "lastName": "Iwamatsu",
      "raceEthnicityAlt": "HL",
      "raceEthnicity": "A",
      "score": 33.10409827435145,
      "raceEthnicitiesTop": [
        "A",
        "HL",
        "B_NL",
        "W_NL"
      ],
      "probabilityCalibrated": 0.943439227727173,
      "probabilityAltCalibrated": 0.9817007157185398
    }
  ]
}
```

<h3 id="us-race-and-ethnicity-zip-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|First name (or given name)||
|lastName|String|Last name (or family name)||
|raceEthnicityAlt|String|Second most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely ethnicity (U.S. race and ethnicity categorization)|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Higher implies a more reliable result, score is not normalized||
|raceEthnicitiesTop|Array|Most likely ethnicity, sorted from most likely to least likely (U.S. race and ethnicity categorization)||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicity)||
|probabilityAltCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1 (for raceEthnicityAlt)||











## Corridor

<a id="opIdCorridor"></a>

> **Corridor** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/GB/Ada/Lovelace/US/Nicolas/Tesla \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/GB/Ada/Lovelace/US/Nicolas/Tesla")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/GB/Ada/Lovelace/US/Nicolas/Tesla"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/GB/Ada/Lovelace/US/Nicolas/Tesla", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns complete analysis of a cross border interactions between two names using their geographic context. The sender is the one who initiated the interaction (from) while the receiver is the one intended to receive the interaction (to).*

*<u>Cost :</u> The processing of each query requires **20** credits.*

<h3 id="corridor-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}`



<h3 id="corridor-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|countryIso2From|String|true|Country of origin of the sender, in ISO 3166-1 alpha-2 format|
|firstNameFrom|String|true|First name (or given name) of the sender|
|lastNameFrom|String|true|Last name (or family name) of the sender|
|countryIso2To|String|true|Country of origin of the receiver, in ISO 3166-1 alpha-2 format|
|firstNameTo|String|true|First name (or given name) of the receiver|
|lastNameTo|String|true|Last name (or family name) of the receiver|









> The above command returns JSON structured like this:



```json
{
  "id": null,
  "firstLastNameGeoFromGender": {
    "script": "LATIN",
    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "likelyGender": "female",
    "genderScale": 0.9667738179638148,
    "score": 20.98847600479561,
    "probabilityCalibrated": 0.9833869089819074
  },
  "firstLastNameGeoToGender": {
    "script": "LATIN",
    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
    "firstName": "Nicolas",
    "lastName": "Tesla",
    "likelyGender": "male",
    "genderScale": -0.9915797101926913,
    "score": 30.224379416275056,
    "probabilityCalibrated": 0.9957898550963457
  },
  "firstLastNameGeoFromOrigin": {
    "script": "LATIN",
    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "countryOrigin": "IE",
    "countryOriginAlt": "GB",
    "countriesOriginTop": [
      "IE",
      "GB"
    ],
    "score": 2.568304424015469,
    "regionOrigin": "Europe",
    "topRegionOrigin": "Europe",
    "subRegionOrigin": "Northern Europe",
    "probabilityCalibrated": 0.45562779224760414,
    "probabilityAltCalibrated": 0.6327518248452595
  },
  "firstLastNameGeoToOrigin": {
    "script": "LATIN",
    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
    "firstName": "Nicolas",
    "lastName": "Tesla",
    "countryOrigin": "FR",
    "countryOriginAlt": "GR",
    "countriesOriginTop": [
      "FR",
      "GR"
    ],
    "score": 1.454789764445522,
    "regionOrigin": "Europe",
    "topRegionOrigin": "Europe",
    "subRegionOrigin": "Western Europe",
    "probabilityCalibrated": 0.44774495967210787,
    "probabilityAltCalibrated": 0.4771001024099368
  },
  "firstLastNameGeoFromDiaspora": {
    "script": "LATIN",
    "id": "781cc5e4-aa61-4a04-bd14-4b512120817a",
    "firstName": "Ada",
    "lastName": "Lovelace",
    "score": 32.41666571408284,
    "ethnicityAlt": "TrinidadTobago",
    "ethnicity": "British",
    "lifted": false,
    "countryIso2": "GB",
    "ethnicitiesTop": [
      "British",
      "TrinidadTobago"
    ]
  },
  "firstLastNameGeoToDiaspora": {
    "script": "LATIN",
    "id": "d5d87a0f-8d21-4cf6-98a2-2636a669ddd6",
    "firstName": "Nicolas",
    "lastName": "Tesla",
    "score": 1.1421870006029051,
    "ethnicityAlt": "Jewish",
    "ethnicity": "Italian",
    "lifted": false,
    "countryIso2": "US",
    "ethnicitiesTop": [
      "Italian",
      "Jewish"
    ]
  }
}
```

<h3 id="corridor-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|id|String|Unique identifier||
|**FirstLastNameGenderedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Gender scale ranging from -1 (male) to +1 (female)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|**FirstLastNameOriginedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of origin (alternative classification)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely subregion of origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOrigin)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOriginAlt)||
|**FirstLastNameDiasporaedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|Second most likely ethnicity||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|Most likely ethnicity||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|Top 10 most likely etchnicities, order from most likely to least likely||
|script|String|Character set used for analysis||











## Corridor Batch

<a id="opIdCorridor-Batch"></a>

> **Corridor Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"corridorFromTo":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstLastNameGeoFrom":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Ada","lastName":"Lovelace","countryIso2":"GB"},"firstLastNameGeoTo":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Nicolas","lastName":"Tesla","countryIso2":"US"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"corridorFromTo\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstLastNameGeoFrom\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Ada\",\"lastName\":\"Lovelace\",\"countryIso2\":\"GB\"},\"firstLastNameGeoTo\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Nicolas\",\"lastName\":\"Tesla\",\"countryIso2\":\"US\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch"

payload = {"corridorFromTo": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstLastNameGeoFrom": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Ada",
                "lastName": "Lovelace",
                "countryIso2": "GB"
            },
            "firstLastNameGeoTo": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Nicolas",
                "lastName": "Tesla",
                "countryIso2": "US"
            }
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"corridorFromTo\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstLastNameGeoFrom\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Ada\",\"lastName\":\"Lovelace\",\"countryIso2\":\"GB\"},\"firstLastNameGeoTo\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Nicolas\",\"lastName\":\"Tesla\",\"countryIso2\":\"US\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns complete analysis of up to 100 cross border interactions between two names using their geographic context. The sender is the one who initiated the interaction (from) while the receiver is the one intended to receive the interaction (to).*

*<u>Cost :</u> The processing of each object requires **20** credits.*

<h3 id="corridor-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch`



> Body parameter

```json
{
  "corridorFromTo": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstLastNameGeoFrom": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
        "firstName": "Ada",
        "lastName": "Lovelace",
        "countryIso2": "GB"
      },
      "firstLastNameGeoTo": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
        "firstName": "Nicolas",
        "lastName": "Tesla",
        "countryIso2": "US"
      }
    }
  ]
}
```

<h3 id="corridor-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|**firstLastNameGeoFrom**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|First name (or given name) of the sender||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|Last name (or family name) of the sender||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|true|Country of origin of the sender, in ISO 3166-1 alpha-2 format||
|**firstLastNameGeoTo**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|First name (or given name) of the receiver||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|Last name (or family name) of the receiver||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|true|Country of origin of the receiver, in ISO 3166-1 alpha-2 format||




> The above command returns JSON structured like this:



```json
{
  "corridorFromTo": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstLastNameGeoFromGender": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
        "firstName": "Ada",
        "lastName": "Lovelace",
        "likelyGender": "female",
        "genderScale": 0.9667738179638148,
        "score": 20.98847600479561,
        "probabilityCalibrated": 0.9833869089819074
      },
      "firstLastNameGeoToGender": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
        "firstName": "Nicolas",
        "lastName": "Tesla",
        "likelyGender": "male",
        "genderScale": -0.9915797101926913,
        "score": 30.224379416275056,
        "probabilityCalibrated": 0.9957898550963457
      },
      "firstLastNameGeoFromOrigin": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
        "firstName": "Ada",
        "lastName": "Lovelace",
        "countryOrigin": "IE",
        "countryOriginAlt": "GB",
        "countriesOriginTop": [
          "IE",
          "GB"
        ],
        "score": 2.568304424015469,
        "regionOrigin": "Europe",
        "topRegionOrigin": "Europe",
        "subRegionOrigin": "Northern Europe",
        "probabilityCalibrated": 0.45562779224760414,
        "probabilityAltCalibrated": 0.6327518248452595
      },
      "firstLastNameGeoToOrigin": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
        "firstName": "Nicolas",
        "lastName": "Tesla",
        "countryOrigin": "FR",
        "countryOriginAlt": "GR",
        "countriesOriginTop": [
          "FR",
          "GR"
        ],
        "score": 1.454789764445522,
        "regionOrigin": "Europe",
        "topRegionOrigin": "Europe",
        "subRegionOrigin": "Western Europe",
        "probabilityCalibrated": 0.44774495967210787,
        "probabilityAltCalibrated": 0.4771001024099368
      },
      "firstLastNameGeoFromDiaspora": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
        "firstName": "Ada",
        "lastName": "Lovelace",
        "score": 32.41686703300403,
        "ethnicityAlt": "TrinidadTobago",
        "ethnicity": "British",
        "lifted": false,
        "countryIso2": "GB",
        "ethnicitiesTop": [
          "British",
          "TrinidadTobago"
        ]
      },
      "firstLastNameGeoToDiaspora": {
        "script": "LATIN",
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
        "firstName": "Nicolas",
        "lastName": "Tesla",
        "score": 1.1421954239282939,
        "ethnicityAlt": "Jewish",
        "ethnicity": "Italian",
        "lifted": false,
        "countryIso2": "US",
        "ethnicitiesTop": [
          "Italian",
          "Jewish"
        ]
      }
    }
  ]
}
```

<h3 id="corridor-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|id|String|Unique identifier||
|**FirstLastNameGenderedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Gender scale ranging from -1 (male) to +1 (female)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|**FirstLastNameOriginedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|Top 10 most likely countries of origin, in ISO 3166-1 alpha-2 format, sorted from most likely to least likely||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of origin (alternative classification)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely subregion of origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOrigin)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|Higher implies a more reliable result, ranges from 0 to 1 (for countryOriginAlt)||
|**FirstLastNameDiasporaedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|Character set used for analysis||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|Second most likely ethnicity||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|Most likely ethnicity||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|Indicates if the output ethnicity is based on machine learning only, or further lifted as a known fact by a country-specific rule||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|Top 10 most likely etchnicities, order from most likely to least likely||
|script|String|Character set used for analysis||











<h1 id="namsor-api-v2-gender">Gender</h1>

Namsor’s name checking API can help you determine the probability of a person being <strong>male or female</strong> based on their <strong>name</strong>. We offer many processing options for <strong>gender determination</strong>, the name can either be provided: as a <strong>full name</strong>, as a <strong>first name and a last name</strong>. In addition to the name you may specify the country of origin to improve accuracy.<br/><br/>Our API also supports Chinese names, Japanese names and a large number of additional alphabets*.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/gender-name'>Try out Gender features</a>

## Gender

<a id="opIdGender"></a>

> **Gender** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/gender/Rosalind/Franklin \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/Rosalind/Franklin")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/gender/Rosalind/Franklin"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/Rosalind/Franklin", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of a first name and a last name.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}`



<h3 id="gender-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "86767222-94ba-4ee4-8ade-6755228c77ca",
  "firstName": "Rosalind",
  "lastName": "Franklin",
  "likelyGender": "female",
  "genderScale": 0.9730217066962004,
  "score": 21.904701285428477,
  "probabilityCalibrated": 0.9865108533481002
}
```

<h3 id="gender-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Batch

<a id="opIdGender-Batch"></a>

> **Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Rosalind","lastName":"Franklin"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Rosalind\",\"lastName\":\"Franklin\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Rosalind",
            "lastName": "Franklin"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Rosalind\",\"lastName\":\"Franklin\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of up to 100 first names and last names.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Rosalind",
      "lastName": "Franklin"
    }
  ]
}
```

<h3 id="gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Rosalind",
      "lastName": "Franklin",
      "likelyGender": "female",
      "genderScale": 0.9730217066962004,
      "score": 21.904701285428477,
      "probabilityCalibrated": 0.9865108533481002
    }
  ]
}
```

<h3 id="gender-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Geo

<a id="opIdGender-Geo"></a>

> **Gender Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/Sofia/Kovalevskaya/RU \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/Sofia/Kovalevskaya/RU")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/Sofia/Kovalevskaya/RU"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/Sofia/Kovalevskaya/RU", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of a first name and a last name using its geographic context.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}`



<h3 id="gender-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|






> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "1524c414-ee6a-4a07-8056-b8dfe483850d",
  "firstName": "Sofia",
  "lastName": "Kovalevskaya",
  "likelyGender": "female",
  "genderScale": 0.9938175581348969,
  "score": 39.01304923594625,
  "probabilityCalibrated": 0.9969087790674485
}
```

<h3 id="gender-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Geo Batch

<a id="opIdGender-Geo-Batch"></a>

> **Gender Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Sofia","lastName":"Kovalevskaya","countryIso2":"RU"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Sofia\",\"lastName\":\"Kovalevskaya\",\"countryIso2\":\"RU\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Sofia",
            "lastName": "Kovalevskaya",
            "countryIso2": "RU"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Sofia\",\"lastName\":\"Kovalevskaya\",\"countryIso2\":\"RU\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of up to 100 first names and last names using their geographic context.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Sofia",
      "lastName": "Kovalevskaya",
      "countryIso2": "RU"
    }
  ]
}
```

<h3 id="gender-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Sofia",
      "lastName": "Kovalevskaya",
      "likelyGender": "female",
      "genderScale": 0.9938175581348969,
      "score": 39.01304923594625,
      "probabilityCalibrated": 0.9969087790674485
    }
  ]
}
```

<h3 id="gender-geo-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Full Name

<a id="opIdGender-Full-Name"></a>

> **Gender Full Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/Alan%20Turing \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/Alan%20Turing")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/Alan%20Turing"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/Alan%20Turing", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of a full name.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-full-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}`



<h3 id="gender-full-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|fullName|String|true|Full name (first name and last name)|




> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "ad176dc1-0a45-41f6-aa3a-5bdd6246b453",
  "name": "Alan Turing",
  "likelyGender": "male",
  "genderScale": -0.9831427708411884,
  "score": 19.119365238807685,
  "probabilityCalibrated": 0.9915713854205942
}
```

<h3 id="gender-full-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Full Name Batch

<a id="opIdGender-Full-Name-Batch"></a>

> **Gender Full Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Alan Turing"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Alan Turing\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Alan Turing"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Alan Turing\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of up to 100 full names.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-full-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Alan Turing"
    }
  ]
}
```

<h3 id="gender-full-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (first name and last name)|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Alan Turing",
      "likelyGender": "male",
      "genderScale": -0.9831427708411884,
      "score": 19.119365238807685,
      "probabilityCalibrated": 0.9915713854205942
    }
  ]
}
```

<h3 id="gender-full-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Full Name Geo

<a id="opIdGender-Full-Name-Geo"></a>

> **Gender Full Name Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/Maryam%20Mirzakhani/IR \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/Maryam%20Mirzakhani/IR")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/Maryam%20Mirzakhani/IR"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/Maryam%20Mirzakhani/IR", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of a full name, according to its geographic context.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-full-name-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}`



<h3 id="gender-full-name-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|fullName|String|true|Full name (first name and last name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "b8737595-afe6-4217-a80e-d1b863de2704",
  "name": "Maryam Mirzakhani",
  "likelyGender": "female",
  "genderScale": 0.7336489993843776,
  "score": 8.702861844637805,
  "probabilityCalibrated": 0.8668244996921888
}
```

<h3 id="gender-full-name-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Full Name Geo Batch

<a id="opIdGender-Full-Name-Geo-Batch"></a>

> **Gender Full Name Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Maryam Mirzakhani","countryIso2":"IR"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Maryam Mirzakhani\",\"countryIso2\":\"IR\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Maryam Mirzakhani",
            "countryIso2": "IR"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Maryam Mirzakhani\",\"countryIso2\":\"IR\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of up to 100 full names, according to their geographic context.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-full-name-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Maryam Mirzakhani",
      "countryIso2": "IR"
    }
  ]
}
```

<h3 id="gender-full-name-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (first name and last name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Maryam Mirzakhani",
      "likelyGender": "female",
      "genderScale": 0.7336489993843776,
      "score": 8.702861844637805,
      "probabilityCalibrated": 0.8668244996921888
    }
  ]
}
```

<h3 id="gender-full-name-geo-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











<h1 id="namsor-api-v2-name-type">Name Type</h1>

Namsor provides a specialized <strong>proper name type determination API</strong>, it is trained to <strong>analyse proper names</strong> and infer if they are <strong>personal names</strong> or <strong>brand names</strong>. Differentiate <strong>individuals from companies</strong> base on their name in order to automate processes, evaluate references to names or leverage deeper insight into an audience. To yield improved results you may indicate the name's <strong>country of origin</strong>.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/name-type-recognition'>Try out Name Type features</a>

## Name Type

<a id="opIdName-Type"></a>

> **Name Type** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/Zippo \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/Zippo")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/Zippo"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/Zippo", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the type of a submitted proper noun. Ex: John Smith = personal name, Namsor = brand name.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="name-type-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}`



<h3 id="name-type-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|properNoun|String|true|A proper noun (person, brand, etc.)|




> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "a88b1bf1-56f1-40d3-84db-4daf57121b1d",
  "name": "Zippo",
  "commonType": "brand-name",
  "commonTypeAlt": "toponym",
  "score": 7.717552234146745
}
```

<h3 id="name-type-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted proper noun||
|commonType|String|Most likely type of the proper noun||
|commonTypeAlt|String|Second most likely type of the proper noun||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Name Type Batch

<a id="opIdName-Type-Batch"></a>

> **Name Type Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"properNouns":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Zippo"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"properNouns\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Zippo\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch"

payload = {"properNouns": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Zippo"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"properNouns\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Zippo\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the type of up to 100 submitted proper nouns. Ex: John Smith = personal name, Namsor = brand name.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="name-type-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch`



> Body parameter

```json
{
  "properNouns": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Zippo"
    }
  ]
}
```

<h3 id="name-type-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|A proper noun (person, brand, etc.)|




> The above command returns JSON structured like this:



```json
{
  "properNouns": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Zippo",
      "commonType": "brand-name",
      "commonTypeAlt": "toponym",
      "score": 7.717552576402805
    }
  ]
}
```

<h3 id="name-type-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted proper noun||
|commonType|String|Most likely type of the proper noun||
|commonTypeAlt|String|Second most likely type of the proper noun||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Name Type Geo

<a id="opIdName-Type-Geo"></a>

> **Name Type Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/Edi%20Gathegi/KE \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/Edi%20Gathegi/KE")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/Edi%20Gathegi/KE"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/Edi%20Gathegi/KE", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the type of up to 100 submitted proper nouns using its geographic context. Ex: John Smith = personal name, Namsor = brand name.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="name-type-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2}`



<h3 id="name-type-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|properNoun|String|true|A proper noun (person, brand, etc.)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "a941ea3f-3b3c-4ff1-af28-c01b086b7d79",
  "name": "Edi Gathegi",
  "commonType": "anthroponym",
  "commonTypeAlt": "brand-name",
  "score": 18.5790039224226
}
```

<h3 id="name-type-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted proper noun||
|commonType|String|Most likely type of the proper noun||
|commonTypeAlt|String|Second most likely type of the proper noun||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Name Type Geo Batch

<a id="opIdName-Type-Geo-Batch"></a>

> **Name Type Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"properNouns":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Edi Gathegi","countryIso2":"KE"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"properNouns\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Edi Gathegi\",\"countryIso2\":\"KE\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch"

payload = {"properNouns": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Edi Gathegi",
            "countryIso2": "KE"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"properNouns\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Edi Gathegi\",\"countryIso2\":\"KE\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the type of up to 100 submitted proper nouns using their geographic context. Ex: John Smith = personal name, Namsor = brand name.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="name-type-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch`



> Body parameter

```json
{
  "properNouns": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Edi Gathegi",
      "countryIso2": "KE"
    }
  ]
}
```

<h3 id="name-type-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|A proper noun (person, brand, etc.)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "properNouns": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Edi Gathegi",
      "commonType": "anthroponym",
      "commonTypeAlt": "brand-name",
      "score": 18.579081911201673
    }
  ]
}
```

<h3 id="name-type-geo-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted proper noun||
|commonType|String|Most likely type of the proper noun||
|commonTypeAlt|String|Second most likely type of the proper noun||
|score|Number|Higher implies a more reliable result, score is not normalized||











<h1 id="namsor-api-v2-split-name">Split Name</h1>

Namsor’s software offers a <strong>name separation API</strong>. We are able to take in a full name, and split it into a first name and last name structure. Our API also supports Chinese names, in Pinyin or Mandarin Chinese, and Japanese names written in Kanji characters.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/spit-full-name'>Try out Name Splitting features</a>

## Split Name

<a id="opIdSplit-Name"></a>

> **Split Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/John%20Smith \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/John%20Smith")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/John%20Smith"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/John%20Smith", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of a full name.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="split-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}`



<h3 id="split-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|nameFull|String|true|Full name (first name and last name)|




> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "3fb36d3d-f9cd-4ccc-a348-38d9e5b5232d",
  "name": "John Smith",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": null,
  "firstLastName": {
    "script": null,
    "id": null,
    "firstName": "John",
    "lastName": "Smith"
  },
  "score": 23.313692197779005
}
```

<h3 id="split-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Split Name Batch

<a id="opIdSplit-Name-Batch"></a>

> **Split Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"John Smith"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"John Smith\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "John Smith"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"John Smith\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of up to 100 full names.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="split-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "John Smith"
    }
  ]
}
```

<h3 id="split-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (first name and last name)|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "John Smith",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": null,
      "firstLastName": {
        "script": null,
        "id": null,
        "firstName": "John",
        "lastName": "Smith"
      },
      "score": 23.31368511252333
    }
  ]
}
```

<h3 id="split-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Split Name Geo

<a id="opIdSplit-Name-Geo"></a>

> **Split Name Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/Ricardo%20Dar%C3%ADn/AR \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/Ricardo%20Dar%C3%ADn/AR")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/Ricardo%20Dar%C3%ADn/AR"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/Ricardo%20Dar%C3%ADn/AR", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of a full name using its geographic context.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="split-name-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}`



<h3 id="split-name-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|nameFull|String|true|Full name (first name and last name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "dbe186ee-cfd6-48e0-a449-00c70df61ec3",
  "name": "Ricardo Darín",
  "nameParserType": "FN1LN1",
  "nameParserTypeAlt": "FN1LN2",
  "firstLastName": {
    "script": null,
    "id": null,
    "firstName": "Ricardo",
    "lastName": "Darín"
  },
  "score": 3.4476222927492017
}
```

<h3 id="split-name-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Split Name Geo Batch

<a id="opIdSplit-Name-Geo-Batch"></a>

> **Split Name Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"Ricardo Darín","countryIso2":"AR"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Ricardo Darín\",\"countryIso2\":\"AR\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "Ricardo Darín",
            "countryIso2": "AR"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"Ricardo Darín\",\"countryIso2\":\"AR\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of up to 100 full names using their geographic context.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="split-name-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Ricardo Darín",
      "countryIso2": "AR"
    }
  ]
}
```

<h3 id="split-name-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (first name and last name)|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "Ricardo Darín",
      "nameParserType": "FN1LN1",
      "nameParserTypeAlt": "FN1LN2",
      "firstLastName": {
        "script": null,
        "id": null,
        "firstName": "Ricardo",
        "lastName": "Darín"
      },
      "score": 3.447624982163207
    }
  ]
}
```

<h3 id="split-name-geo-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











<h1 id="namsor-api-v2-japanese">Japanese</h1>

Namsor provides a specialized name processing API dedicated to analysing names in the <strong>Japanese language</strong>. We have developed a <strong>name converter</strong>, focused on Japanese names, to help you find the <strong>best transcriptions</strong> possible.<br/><br/>With our API, you can <strong>convert Japanese names</strong> both ways between Kanji and English. You can evaluate the <strong>quality of a transcriptions</strong> between a name in Kanji and a name in Latin characters. It is also possible to split Japansese full names, in either Kanji or Latin characters, into a first name and a last name as well as establish the <strong>gender of a name</strong>.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/english-japanese-translation'>Try out Japanese features</a>

## To Kanji Name

<a id="opIdTo-Kanji-Name"></a>

> **To Kanji Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Kanji transcriptions for a japanese first name and last name in latin characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-kanji-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}`



<h3 id="to-kanji-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true|Family name (or last name) in latin characters|
|japaneseGivenNameLatin|String|true|Given name (or first name) in latin characters|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": null,
  "firstName": "Sanae",
  "lastName": "Yamamoto",
  "orderOption": "OrderScoreSquareFNLN",
  "matchCandidates": [
    {
      "candidateName": "山本 早苗",
      "probability": 0.5000000000000001,
      "predScoreGivenName": -0.03954087197780609,
      "predScoreFamilyName": -0.014371121302247047
    },
    {
      "candidateName": "山本 沙苗",
      "probability": 0.25000000000000006,
      "predScoreGivenName": -5.180787086486816,
      "predScoreFamilyName": -0.014371121302247047
    }
  ]
}
```

<h3 id="to-kanji-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Kanji||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Kanji Name Batch

<a id="opIdTo-Kanji-Name-Batch"></a>

> **To Kanji Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Sanae","lastName":"Yamamoto"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Sanae\",\"lastName\":\"Yamamoto\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Sanae",
            "lastName": "Yamamoto"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Sanae\",\"lastName\":\"Yamamoto\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Kanji transcriptions for up to 100 japanese first names and last names in latin characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-kanji-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Sanae",
      "lastName": "Yamamoto"
    }
  ]
}
```

<h3 id="to-kanji-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in latin characters|
|lastName|String|true|Family name (or last name) in latin characters|




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Sanae",
      "lastName": "Yamamoto",
      "orderOption": "OrderScoreSquareFNLN",
      "matchCandidates": [
        {
          "candidateName": "山本 早苗",
          "probability": 0.5000000000000001,
          "predScoreGivenName": -0.03954087197780609,
          "predScoreFamilyName": -0.014371121302247047
        },
        {
          "candidateName": "山本 沙苗",
          "probability": 0.25000000000000006,
          "predScoreGivenName": -5.180787086486816,
          "predScoreFamilyName": -0.014371121302247047
        }
      ]
    }
  ]
}
```

<h3 id="to-kanji-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Kanji||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Kanji Name Gender

<a id="opIdTo-Kanji-Name-Gender"></a>

> **To Kanji Name Gender** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae/male \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae/male")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae/male"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/Yamamoto/Sanae/male", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Kanji transcriptions for a japanese first name and last name in latin characters, according to their gender.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-kanji-name-gender-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}`



<h3 id="to-kanji-name-gender-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true|Family name (or last name) in latin characters|
|japaneseGivenNameLatin|String|true|Given name (or first name) in latin characters|
|knownGender|String|true|Gender|






> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": null,
  "firstName": "Sanae",
  "lastName": "Yamamoto",
  "orderOption": "OrderScoreSquareFNLN",
  "matchCandidates": [
    {
      "candidateName": "山本 早苗",
      "probability": 0.5000000000000001,
      "predScoreGivenName": -0.031474947929382324,
      "predScoreFamilyName": -0.014371121302247047
    },
    {
      "candidateName": "山本 佐苗",
      "probability": 0.25000000000000006,
      "predScoreGivenName": -4.911670207977295,
      "predScoreFamilyName": -0.014371121302247047
    }
  ]
}
```

<h3 id="to-kanji-name-gender-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Kanji||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Kanji Name Gender Batch

<a id="opIdTo-Kanji-Name-Gender-Batch"></a>

> **To Kanji Name Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Takashi","lastName":"Murakami","gender":"male"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Takashi\",\"lastName\":\"Murakami\",\"gender\":\"male\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Takashi",
            "lastName": "Murakami",
            "gender": "male"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Takashi\",\"lastName\":\"Murakami\",\"gender\":\"male\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Kanji transcriptions for up to 100 japanese first names and last names in latin characters, according to their gender.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-kanji-name-gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Takashi",
      "lastName": "Murakami",
      "gender": "male"
    }
  ]
}
```

<h3 id="to-kanji-name-gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in latin characters|
|lastName|String|true|Family name (or last name) in latin characters|
|gender|String|true|Gender|




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Takashi",
      "lastName": "Murakami",
      "orderOption": "OrderScoreSquareFNLN",
      "matchCandidates": [
        {
          "candidateName": "村上 隆",
          "probability": 0.5000000000000001,
          "predScoreGivenName": -2.249242067337036,
          "predScoreFamilyName": -0.0006758159724995494
        },
        {
          "candidateName": "村上 崇",
          "probability": 0.25000000000000006,
          "predScoreGivenName": -2.572237014770508,
          "predScoreFamilyName": -0.0006758159724995494
        }
      ]
    }
  ]
}
```

<h3 id="to-kanji-name-gender-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Kanji||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Latin Name

<a id="opIdTo-Latin-Name"></a>

> **To Latin Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/%E5%8D%83%E6%98%A5/%E5%A1%A9%E7%94%B0 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/%E5%8D%83%E6%98%A5/%E5%A1%A9%E7%94%B0")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/%E5%8D%83%E6%98%A5/%E5%A1%A9%E7%94%B0"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/%E5%8D%83%E6%98%A5/%E5%A1%A9%E7%94%B0", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely latin transcriptions for a japanese first name and last name in Kanji characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-latin-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}`



<h3 id="to-latin-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameKanji|String|true|Family name (or last name) in Kanji|
|japaneseGivenNameKanji|String|true|Given name (or first name) in Kanji|





> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": null,
  "firstName": "塩田",
  "lastName": "千春",
  "orderOption": "OrderScoreSquareFNLN",
  "matchCandidates": [
    {
      "candidateName": "chiharu shiota",
      "probability": 0.5000000149011616,
      "predScoreGivenName": -0.3543974459171295,
      "predScoreFamilyName": -0.004423846025019884
    },
    {
      "candidateName": "chiharu shioda",
      "probability": 0.2500000074505808,
      "predScoreGivenName": -1.2378724813461304,
      "predScoreFamilyName": -0.004423846025019884
    }
  ]
}
```

<h3 id="to-latin-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to latin characters||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Latin Name Batch

<a id="opIdTo-Latin-Name-Batch"></a>

> **To Latin Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"塩田","lastName":"千春"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"塩田\",\"lastName\":\"千春\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "塩田",
            "lastName": "千春"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"塩田\",\"lastName\":\"千春\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely latin transcriptions for up to 100 japanese first names and last names in Kanji characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-latin-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "塩田",
      "lastName": "千春"
    }
  ]
}
```

<h3 id="to-latin-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in Kanji|
|lastName|String|true|Family name (or last name) in Kanji|




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "塩田",
      "lastName": "千春",
      "orderOption": "OrderScoreSquareFNLN",
      "matchCandidates": [
        {
          "candidateName": "chiharu shiota",
          "probability": 0.5000000149011616,
          "predScoreGivenName": -0.3543974459171295,
          "predScoreFamilyName": -0.004423846025019884
        },
        {
          "candidateName": "chiharu shioda",
          "probability": 0.2500000074505808,
          "predScoreGivenName": -1.2378724813461304,
          "predScoreFamilyName": -0.004423846025019884
        }
      ]
    }
  ]
}
```

<h3 id="to-latin-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to latin characters||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## Gender Name Latin

<a id="opIdGender-Name-Latin"></a>

> **Gender Name Latin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/Nakamoto/Satoshi \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/Nakamoto/Satoshi")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/Nakamoto/Satoshi"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/Nakamoto/Satoshi", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely gender of a japanese family name and a given name in latin characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-name-latin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}`



<h3 id="gender-name-latin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurname|String|true|Family name (or last name) in latin characters|
|japaneseGivenName|String|true|Given name (or first name) in latin characters|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "9cfd8321-0924-4570-a4b7-29a611ce5089",
  "firstName": "Satoshi",
  "lastName": "Nakamoto",
  "likelyGender": "male",
  "genderScale": -0.9828731991489774,
  "score": 24.94061932678776,
  "probabilityCalibrated": 0.9914365995744887
}
```

<h3 id="gender-name-latin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Latin Batch

<a id="opIdGender-Name-Latin-Batch"></a>

> **Gender Name Latin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Satoshi","lastName":"Nakamoto"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Satoshi\",\"lastName\":\"Nakamoto\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Satoshi",
            "lastName": "Nakamoto"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Satoshi\",\"lastName\":\"Nakamoto\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely gender of up to 100 japanese family names and a given names in latin characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-name-latin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Satoshi",
      "lastName": "Nakamoto"
    }
  ]
}
```

<h3 id="gender-name-latin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in latin characters|
|lastName|String|true|Family name (or last name) in latin characters|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Satoshi",
      "lastName": "Nakamoto",
      "likelyGender": "male",
      "genderScale": -0.9828731991489774,
      "score": 24.94061932678776,
      "probabilityCalibrated": 0.9914365995744887
    }
  ]
}
```

<h3 id="gender-name-latin-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Kanji

<a id="opIdGender-Name-Kanji"></a>

> **Gender Name Kanji** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/%E4%B8%AD%E6%9D%BE%20%E7%BE%A9%E9%83%8E \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/%E4%B8%AD%E6%9D%BE%20%E7%BE%A9%E9%83%8E")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/%E4%B8%AD%E6%9D%BE%20%E7%BE%A9%E9%83%8E"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/%E4%B8%AD%E6%9D%BE%20%E7%BE%A9%E9%83%8E", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Find the most likely gender of a Japanese full name (surname and given name), written in Kanji characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-name-kanji-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}`



<h3 id="gender-name-kanji-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseName|String|true|Full name (family name and given name) in Kanji|




> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": "36990426-d289-43b3-99dc-50ccfe2e5ade",
  "name": "中松 義郎",
  "likelyGender": "male",
  "genderScale": -0.22231473979961303,
  "score": 3.72410721464353,
  "probabilityCalibrated": 0.6111573698998065
}
```

<h3 id="gender-name-kanji-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Kanji Batch

<a id="opIdGender-Name-Kanji-Batch"></a>

> **Gender Name Kanji Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"中松 義郎"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"中松 義郎\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "中松 義郎"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"中松 義郎\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Find the most likely gender of up to 100 Japanese full names (surnames and given names), written in Kanji characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-name-kanji-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "中松 義郎"
    }
  ]
}
```

<h3 id="gender-name-kanji-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (family name and given name) in Kanji|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "中松 義郎",
      "likelyGender": "male",
      "genderScale": -0.22231473979961303,
      "score": 3.72410721464353,
      "probabilityCalibrated": 0.6111573698998065
    }
  ]
}
```

<h3 id="gender-name-kanji-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Split Japanese Name

<a id="opIdSplit-Japanese-Name"></a>

> **Split Japanese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/%E5%B0%8F%E5%B3%B6%20%E7%A7%80%E5%A4%AB \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/%E5%B0%8F%E5%B3%B6%20%E7%A7%80%E5%A4%AB")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/%E5%B0%8F%E5%B3%B6%20%E7%A7%80%E5%A4%AB"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/%E5%B0%8F%E5%B3%B6%20%E7%A7%80%E5%A4%AB", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of a full name (family name and given name) in Kanji or latin characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="split-japanese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}`



<h3 id="split-japanese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseName|String|true|Full name (family name and given name) in Kanji or latin characters|




> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": "4646501e-33e3-44bc-be6f-66cab4bb5e94",
  "name": "小島 秀夫",
  "nameParserType": "LN1FN1",
  "nameParserTypeAlt": null,
  "firstLastName": {
    "script": null,
    "id": null,
    "firstName": "秀夫",
    "lastName": "小島"
  },
  "score": 100
}
```

<h3 id="split-japanese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Split Japanese Name Batch

<a id="opIdSplit-Japanese-Name-Batch"></a>

> **Split Japanese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"小島 秀夫"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"小島 秀夫\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "小島 秀夫"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"小島 秀夫\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of up to 100 full names (family names and given names) in Kanji or latin characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="split-japanese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "小島 秀夫"
    }
  ]
}
```

<h3 id="split-japanese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (family name and given name) in Kanji or latin characters|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "小島 秀夫",
      "nameParserType": "LN1FN1",
      "nameParserTypeAlt": null,
      "firstLastName": {
        "script": null,
        "id": null,
        "firstName": "秀夫",
        "lastName": "小島"
      },
      "score": 100
    }
  ]
}
```

<h3 id="split-japanese-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name)||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Match Japanese Name

<a id="opIdMatch-Japanese-Name"></a>

> **Match Japanese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Matches a full name in Kanji against a family name and a given name in latin characters.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="match-japanese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`



<h3 id="match-japanese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true|Family name (or last name) in latin characters|
|japaneseGivenNameLatin|String|true|Given name (or first name) in latin characters|
|japaneseName|String|true|Full name (family name and given name) in Kanji|






> The above command returns JSON structured like this:



```json
{
  "script": null,
  "id": null,
  "matchStatus": "Match",
  "score": 1.002224089213585
}
```

<h3 id="match-japanese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|matchStatus|String|Success status of the match||
|score|Number|Higher implies a better match, score is not normalized||











## Match Japanese Name Batch

<a id="opIdMatch-Japanese-Name-Batch"></a>

> **Match Japanese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c41","name1":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Tessai","lastName":"Tomioka"},"name2":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c43","name":"富岡 鉄斎"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c41\",\"name1\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Tessai\",\"lastName\":\"Tomioka\"},\"name2\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c43\",\"name\":\"富岡 鉄斎\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
            "name1": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Tessai",
                "lastName": "Tomioka"
            },
            "name2": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                "name": "富岡 鉄斎"
            }
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c41\",\"name1\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Tessai\",\"lastName\":\"Tomioka\"},\"name2\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c43\",\"name\":\"富岡 鉄斎\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Matches up to 100 full names in Kanji against corresponding family names and given names in latin characters.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="match-japanese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
      "name1": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
        "firstName": "Tessai",
        "lastName": "Tomioka"
      },
      "name2": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
        "name": "富岡 鉄斎"
      }
    }
  ]
}
```

<h3 id="match-japanese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|**name1**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|Given name (or first name) in latin characters||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|Family name (or last name) in latin characters||
|**name2**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.name*|String|true|Full name (family name and given name) in Kanji||




> The above command returns JSON structured like this:



```json
{
  "matchedNames": [
    {
      "script": null,
      "id": null,
      "matchStatus": "Match",
      "score": 1.002224089213585
    }
  ]
}
```

<h3 id="match-japanese-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|matchStatus|String|Success status of the match||
|score|Number|Higher implies a better match, score is not normalized||











## Match Name Feedback Loop

<a id="opIdMatch-Name-Feedback-Loop"></a>

> **Match Name Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/Tomioka/Tessai/%E5%AF%8C%E5%B2%A1%20%E9%89%84%E6%96%8E", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Submit a Japanese family name and given name in latin caracters and its matching full name in Kanji. This help us improve our name matching tool and in return your can earn extra credits if the match is correct.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="match-name-feedback-loop-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`



<h3 id="match-name-feedback-loop-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true|Family name (or last name) in latin characters|
|japaneseGivenNameLatin|String|true|Given name (or first name) in latin characters|
|japaneseName|String|true|Full name (family name and given name) in Kanji|






> The above command returns JSON structured like this:



```json
{
  "feedbackCredits": 1
}
```

<h3 id="match-name-feedback-loop-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|feedbackCredits|Integer|Number of credits awarded||











<h1 id="namsor-api-v2-chinese">Chinese</h1>

Namsor provides dedicated <strong>name analysis API</strong> for the processing of Chinese names. Our name recognition AI can <strong>translate Chinese names</strong> to English (Pinyin). Among other features you can: infer the <strong>gender of a Chinese name</strong> or split a Chinese full name into a first name and a last name.<br/><br/>We are also able to rate the <strong>quality of a transcriptions</strong> between a name in Pinyin and a name in Standard Mandarin Chinese.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/english-chinese-translation'>Try out Chinese features</a>

## To Mandarin Name

<a id="opIdTo-Mandarin-Name"></a>

> **To Mandarin Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/Zhao/LiYing \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/Zhao/LiYing")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/Zhao/LiYing"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/Zhao/LiYing", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Standard Mandarin Chinese transcriptions using a surname and a given name in Pinyin.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-mandarin-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}`



<h3 id="to-mandarin-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true|Family name (or last name) in Pinyin|
|chineseGivenNameLatin|String|true|Given name (or first name) in Pinyin|





> The above command returns JSON structured like this:



```json
{
  "script": null,
  "id": null,
  "firstName": "LiYing",
  "lastName": "Zhao",
  "orderOption": null,
  "matchCandidates": [
    {
      "candidateName": "赵丽英",
      "probability": 0.26153460755147884,
      "predScoreGivenName": 0,
      "predScoreFamilyName": 0
    },
    {
      "candidateName": "赵丽颖",
      "probability": 0.11856235542333707,
      "predScoreGivenName": 0,
      "predScoreFamilyName": 0
    }
  ]
}
```

<h3 id="to-mandarin-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Mandarin Name Batch

<a id="opIdTo-Mandarin-Name-Batch"></a>

> **To Mandarin Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"LiYing","lastName":"Zhao"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"LiYing\",\"lastName\":\"Zhao\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "LiYing",
            "lastName": "Zhao"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"LiYing\",\"lastName\":\"Zhao\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Standard Mandarin Chinese transcriptions using up to 100 family names and given names in Pinyin.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-mandarin-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "LiYing",
      "lastName": "Zhao"
    }
  ]
}
```

<h3 id="to-mandarin-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in Pinyin|
|lastName|String|true|Family name (or last name) in Pinyin|




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": null,
      "id": null,
      "firstName": "LiYing",
      "lastName": "Zhao",
      "orderOption": null,
      "matchCandidates": [
        {
          "candidateName": "赵丽英",
          "probability": 0.26153460755147884,
          "predScoreGivenName": 0,
          "predScoreFamilyName": 0
        },
        {
          "candidateName": "赵丽颖",
          "probability": 0.11856235542333707,
          "predScoreGivenName": 0,
          "predScoreFamilyName": 0
        }
      ]
    }
  ]
}
```

<h3 id="to-mandarin-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Mandarin Name Gender

<a id="opIdTo-Mandarin-Name-Gender"></a>

> **To Mandarin Name Gender** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/Fanzhi/Zeng/male \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/Fanzhi/Zeng/male")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/Fanzhi/Zeng/male"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/Fanzhi/Zeng/male", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Standard Mandarin Chinese transcriptions for a Pinyin first name and last name, according to their gender.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-mandarin-name-gender-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}`



<h3 id="to-mandarin-name-gender-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true|Family name (or last name) in Pinyin|
|chineseGivenNameLatin|String|true|Given name (or first name) in Pinyin|
|knownGender|String|true|Gender|






> The above command returns JSON structured like this:



```json
{
  "script": null,
  "id": null,
  "firstName": "Zeng",
  "lastName": "Fanzhi",
  "orderOption": null,
  "matchCandidates": [
    {
      "candidateName": "甑范志",
      "probability": 0.014705882352941176,
      "predScoreGivenName": 0,
      "predScoreFamilyName": 0
    },
    {
      "candidateName": "甑凡智",
      "probability": 0.014705882352941176,
      "predScoreGivenName": 0,
      "predScoreFamilyName": 0
    }
  ]
}
```

<h3 id="to-mandarin-name-gender-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|First name (or given name)||
|lastName|String|Last name (or family name)||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Mandarin Name Gender Batch

<a id="opIdTo-Mandarin-Name-Gender-Batch"></a>

> **To Mandarin Name Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"LiYing","lastName":"Zhao","gender":"female"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"LiYing\",\"lastName\":\"Zhao\",\"gender\":\"female\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "LiYing",
            "lastName": "Zhao",
            "gender": "female"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"LiYing\",\"lastName\":\"Zhao\",\"gender\":\"female\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely Standard Mandarin Chinese transcriptions for up to 100 Pinyin first names and last names, according to their gender.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-mandarin-name-gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "LiYing",
      "lastName": "Zhao",
      "gender": "female"
    }
  ]
}
```

<h3 id="to-mandarin-name-gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in Pinyin|
|lastName|String|true|Family name (or last name) in Pinyin|
|gender|String|true|Gender|




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": null,
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "LiYing",
      "lastName": "Zhao",
      "orderOption": null,
      "matchCandidates": [
        {
          "candidateName": "赵丽英",
          "probability": 0.07949583832056487,
          "predScoreGivenName": 0,
          "predScoreFamilyName": 0
        },
        {
          "candidateName": "赵丽颖",
          "probability": 0.021402725701690543,
          "predScoreGivenName": 0,
          "predScoreFamilyName": 0
        }
      ]
    }
  ]
}
```

<h3 id="to-mandarin-name-gender-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|orderOption|String|Sorting order for matchCandidates||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|Inferred transcription of the full name to Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|Higher implies a more reliable result, ranges from 0 to 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|Higher implies a more reliable result (for given name or first name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|Higher implies a more reliable result (for family name or last name)||











## To Pinyin Name

<a id="opIdTo-Pinyin-Name"></a>

> **To Pinyin Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely Pinyin transcription of a full name (family name and given name) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="to-pinyin-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}`



<h3 id="to-pinyin-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
  "name": "赵丽颖",
  "nameParserType": "LN1FN1",
  "nameParserTypeAlt": null,
  "firstLastName": {
    "script": null,
    "id": null,
    "firstName": "LiYing",
    "lastName": "Zhao"
  },
  "score": 4.641021485371256
}
```

<h3 id="to-pinyin-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|Most likely first name (or given name) transcription in Pinyin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Most likely last name (or family name) transcription in Pinyin||
|score|Number|Higher implies a more reliable result, score is not normalized||











## To Pinyin Name Batch

<a id="opIdTo-Pinyin-Name-Batch"></a>

> **To Pinyin Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"赵丽颖"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"赵丽颖\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "赵丽颖"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"赵丽颖\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely Pinyin transcription of up to 100 full names (family names and given names) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="to-pinyin-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "赵丽颖"
    }
  ]
}
```

<h3 id="to-pinyin-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "赵丽颖",
      "nameParserType": "LN1FN1",
      "nameParserTypeAlt": null,
      "firstLastName": {
        "script": null,
        "id": null,
        "firstName": "LiYing",
        "lastName": "Zhao"
      },
      "score": 4.641021485371256
    }
  ]
}
```

<h3 id="to-pinyin-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|Most likely first name (or given name) transcription in Pinyin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Most likely last name (or family name) transcription in Pinyin||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Gender Name Pinyin

<a id="opIdGender-Name-Pinyin"></a>

> **Gender Name Pinyin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/Q%C4%ABngy%C3%BAn/D%C3%A8ng \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/Q%C4%ABngy%C3%BAn/D%C3%A8ng")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/Q%C4%ABngy%C3%BAn/D%C3%A8ng"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/Q%C4%ABngy%C3%BAn/D%C3%A8ng", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely gender of a family name and a given name in Pinyin.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-name-pinyin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}`



<h3 id="gender-name-pinyin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true|Family name (or last name) in Pinyin|
|chineseGivenNameLatin|String|true|Given name (or first name) in Pinyin|





> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": "9c1fda7c-54f1-48d1-b082-80cc6148aeb9",
  "firstName": "Dèng",
  "lastName": "Qīngyún",
  "likelyGender": "male",
  "genderScale": -0.014201270075495653,
  "score": 1.8597729950048343,
  "probabilityCalibrated": 0.5071006350377478
}
```

<h3 id="gender-name-pinyin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Pinyin Batch

<a id="opIdGender-Name-Pinyin-Batch"></a>

> **Gender Name Pinyin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Dèng","lastName":"Qīngyún"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Dèng\",\"lastName\":\"Qīngyún\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Dèng",
            "lastName": "Qīngyún"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Dèng\",\"lastName\":\"Qīngyún\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return the most likely gender of up to 100 family names and a given names in Pinyin.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-name-pinyin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Dèng",
      "lastName": "Qīngyún"
    }
  ]
}
```

<h3 id="gender-name-pinyin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|Given name (or first name) in Pinyin|
|lastName|String|true|Family name (or last name) in Pinyin|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Dèng",
      "lastName": "Qīngyún",
      "likelyGender": "male",
      "genderScale": -0.3132515162951226,
      "score": 6.747266465582973,
      "probabilityCalibrated": 0.6566257581475613
    }
  ]
}
```

<h3 id="gender-name-pinyin-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Mandarin

<a id="opIdGender-Name-Mandarin"></a>

> **Gender Name Mandarin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/%E8%B0%A2%E6%99%93%E4%BA%AE \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/%E8%B0%A2%E6%99%93%E4%BA%AE")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/%E8%B0%A2%E6%99%93%E4%BA%AE"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/%E8%B0%A2%E6%99%93%E4%BA%AE", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of a full name (family name and given name) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="gender-name-mandarin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}`



<h3 id="gender-name-mandarin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": "46661b4d-32cf-4ca5-b598-f62a8d7e0667",
  "name": "谢晓亮",
  "likelyGender": "male",
  "genderScale": -0.7130895869378251,
  "score": 8.286118331853034,
  "probabilityCalibrated": 0.8565447934689125
}
```

<h3 id="gender-name-mandarin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Gender Name Mandarin Batch

<a id="opIdGender-Name-Mandarin-Batch"></a>

> **Gender Name Mandarin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"谢晓亮"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"谢晓亮\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "谢晓亮"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"谢晓亮\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely gender of up to 100 full names (family names and given names) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="gender-name-mandarin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "谢晓亮"
    }
  ]
}
```

<h3 id="gender-name-mandarin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "谢晓亮",
      "likelyGender": "male",
      "genderScale": -0.7130895869378251,
      "score": 8.286118331853034,
      "probabilityCalibrated": 0.8565447934689125
    }
  ]
}
```

<h3 id="gender-name-mandarin-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Gender scale ranging from -1 (male) to +1 (female)||
|score|Number|Higher implies a more reliable result, score is not normalized||
|probabilityCalibrated|Number|Higher implies a more reliable result, ranges from 0 to 1||











## Split Chinese Name

<a id="opIdSplit-Chinese-Name"></a>

> **Split Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/%E8%B5%B5%E4%B8%BD%E9%A2%96", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of a full name (family name and given name) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="split-chinese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}`



<h3 id="split-chinese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "script": "HAN",
  "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
  "name": "赵丽颖",
  "nameParserType": "LN1FN1",
  "nameParserTypeAlt": null,
  "firstLastName": {
    "script": null,
    "id": null,
    "firstName": "丽颖",
    "lastName": "赵"
  },
  "score": 4.64102036931541
}
```

<h3 id="split-chinese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name) in Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name) in Standard Mandarin Chinese||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Split Chinese Name Batch

<a id="opIdSplit-Chinese-Name-Batch"></a>

> **Split Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","name":"赵丽颖"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"赵丽颖\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "name": "赵丽颖"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"name\":\"赵丽颖\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely first name and last name structure of up to 100 full names (family names and given names) in Standard Mandarin Chinese.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="split-chinese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "赵丽颖"
    }
  ]
}
```

<h3 id="split-chinese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|name|String|true|Full name (family name and given name) in Standard Mandarin Chinese|




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "HAN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "name": "赵丽颖",
      "nameParserType": "LN1FN1",
      "nameParserTypeAlt": null,
      "firstLastName": {
        "script": null,
        "id": null,
        "firstName": "丽颖",
        "lastName": "赵"
      },
      "score": 4.64102036931541
    }
  ]
}
```

<h3 id="split-chinese-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|name|String|Submitted full name||
|nameParserType|String|Most likely structure of the name||
|nameParserTypeAlt|String|Second most likely structure of the name||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|First name (or given name) in Standard Mandarin Chinese||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|Last name (or family name) in Standard Mandarin Chinese||
|score|Number|Higher implies a more reliable result, score is not normalized||











## Match Chinese Name

<a id="opIdMatch-Chinese-Name"></a>

> **Match Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/Yu/Hong/%E5%96%BB%E7%BA%A2 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/Yu/Hong/%E5%96%BB%E7%BA%A2")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/Yu/Hong/%E5%96%BB%E7%BA%A2"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/Yu/Hong/%E5%96%BB%E7%BA%A2", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Matches a full name in Standard Mandarin Chinese against a family name and a given name in Pinyin.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="match-chinese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}`



<h3 id="match-chinese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true|Family name (or last name) in Pinyin|
|chineseGivenNameLatin|String|true|Given name (or first name) in Pinyin|
|chineseName|String|true|Full name (family name and given name) in Standard Mandarin Chinese|






> The above command returns JSON structured like this:



```json
{
  "script": null,
  "id": null,
  "matchStatus": "Match",
  "score": 1.0017825620273417
}
```

<h3 id="match-chinese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|Success status of the match||
|score|Number|Higher implies a better match, score is not normalized||











## Match Chinese Name Batch

<a id="opIdMatch-Chinese-Name-Batch"></a>

> **Match Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c41","name1":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Hong","lastName":"Yu"},"name2":{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c43","name":"喻红"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c41\",\"name1\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Hong\",\"lastName\":\"Yu\"},\"name2\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c43\",\"name\":\"喻红\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch"

payload = {"personalNames": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
            "name1": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
                "firstName": "Hong",
                "lastName": "Yu"
            },
            "name2": {
                "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
                "name": "喻红"
            }
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNames\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c41\",\"name1\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Hong\",\"lastName\":\"Yu\"},\"name2\":{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c43\",\"name\":\"喻红\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Matches up to 100 full names in Standard Mandarin Chinese against corresponding family names and given names in Pinyin.*

*<u>Cost :</u> The processing of each object requires **1** credits.*

<h3 id="match-chinese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch`



> Body parameter

```json
{
  "personalNames": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c41",
      "name1": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
        "firstName": "Hong",
        "lastName": "Yu"
      },
      "name2": {
        "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c43",
        "name": "喻红"
      }
    }
  ]
}
```

<h3 id="match-chinese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|**name1**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|Family name (or last name) in Pinyin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|Given name (or first name) in Pinyin||
|**name2**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||Unique identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.name*|String|true|Full name (family name and given name) in Standard Mandarin Chinese||




> The above command returns JSON structured like this:



```json
{
  "matchedNames": [
    {
      "script": null,
      "id": null,
      "matchStatus": "Match",
      "score": 1.0017825620273417
    }
  ]
}
```

<h3 id="match-chinese-name-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|Success status of the match||
|score|Number|Higher implies a better match, score is not normalized||











<h1 id="namsor-api-v2-phone">Phone</h1>

The Namsor name analysis software has been trained to evaluate formated, as well as unformatted, phone numbers. It is able to <strong>process a first name, last name and phone number</strong> in order to establish its <strong>phone prefix</strong> and <strong>country code</strong> as well as <strong>determine the structure</strong> of the phone number and <strong>check if it is valid</strong>.<br><br><br><a class='demo-page-button' target='_blank' href='https://namsor.com/features/phone-number-format'>Try out Phone features</a>

## Phone Code

<a id="opIdPhone-Code"></a>

> **Phone Code** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/Jamini/Roy/09804201420 \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/Jamini/Roy/09804201420")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/Jamini/Roy/09804201420"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/Jamini/Roy/09804201420", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely phone prefix, country of origin and format of a phone number using a first name and a last name.*

*<u>Cost :</u> The processing of each query requires **11** credits.*

<h3 id="phone-code-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}`



<h3 id="phone-code-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|phoneNumber|String|true|Phone number, formatted or unformatted|






> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": null,
  "firstName": "Jamini",
  "lastName": "Roy",
  "internationalPhoneNumberVerified": "+91 98042 01420",
  "phoneCountryIso2Verified": "IN",
  "phoneCountryCode": 91,
  "phoneCountryCodeAlt": 98,
  "phoneCountryIso2": "IN",
  "phoneCountryIso2Alt": "IR",
  "originCountryIso2": "BD",
  "originCountryIso2Alt": "ID",
  "phoneNumber": "09804201420",
  "verified": true,
  "score": 7.659341221254624
}
```

<h3 id="phone-code-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|internationalPhoneNumberVerified|String|Phone number, in E.164 format||
|phoneCountryIso2Verified|String|Country of origin of the phone number, in ISO 3166-1 alpha-2 format (according to Libphonenumber)||
|phoneCountryCode|Integer|Most likely country calling code||
|phoneCountryCodeAlt|Integer|Second most likely country calling code||
|phoneCountryIso2|String|Most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|phoneCountryIso2Alt|String|Second most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|originCountryIso2|String|Most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|originCountryIso2Alt|String|Second most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|phoneNumber|String|Submitted phone number||
|verified|Boolean|Indicates if the phone number could be positively verified using Libphonenumber||
|score|Number|Higher implies a more reliable result, score is not normalized||
|countryIso2|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||











## Phone Code Batch

<a id="opIdPhone-Code-Batch"></a>

> **Phone Code Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNamesWithPhoneNumbers":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Jamini","lastName":"Roy","phoneNumber":"09804201420"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNamesWithPhoneNumbers\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Jamini\",\"lastName\":\"Roy\",\"phoneNumber\":\"09804201420\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch"

payload = {"personalNamesWithPhoneNumbers": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Jamini",
            "lastName": "Roy",
            "phoneNumber": "09804201420"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNamesWithPhoneNumbers\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Jamini\",\"lastName\":\"Roy\",\"phoneNumber\":\"09804201420\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely phone prefix, country of origin and format of up to 100 phone numbers using first names and last names.*

*<u>Cost :</u> The processing of each object requires **11** credits.*

<h3 id="phone-code-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch`



> Body parameter

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Jamini",
      "lastName": "Roy",
      "phoneNumber": "09804201420"
    }
  ]
}
```

<h3 id="phone-code-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|phoneNumber|String|true|Phone number, formatted or unformatted|
|**FirstLastNameOriginedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|true|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|The first name (also known as given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|The last name (also known as family name, or surname)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|true|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|true|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|true|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|true|Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|true|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|true|Most likely top region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|true|Most likely sub region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|true|The calibrated probability for countryOrigin to have been guessed correctly.||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|true|The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly.||




> The above command returns JSON structured like this:



```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Jamini",
      "lastName": "Roy",
      "internationalPhoneNumberVerified": "+91 98042 01420",
      "phoneCountryIso2Verified": "IN",
      "phoneCountryCode": 91,
      "phoneCountryCodeAlt": 98,
      "phoneCountryIso2": "IN",
      "phoneCountryIso2Alt": "IR",
      "originCountryIso2": "BD",
      "originCountryIso2Alt": "ID",
      "phoneNumber": "09804201420",
      "verified": true,
      "score": 7.659341221254494
    }
  ]
}
```

<h3 id="phone-code-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|First name (or given name)||
|lastName|String|Last name (or family name)||
|internationalPhoneNumberVerified|String|Phone number, in E.164 format||
|phoneCountryIso2Verified|String|Country of origin of the phone number, in ISO 3166-1 alpha-2 format (according to Libphonenumber)||
|phoneCountryCode|Integer|Most likely country calling code||
|phoneCountryCodeAlt|Integer|Second most likely country calling code||
|phoneCountryIso2|String|Most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|phoneCountryIso2Alt|String|Second most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|originCountryIso2|String|Most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|originCountryIso2Alt|String|Second most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|phoneNumber|String|Submitted phone number||
|verified|Boolean|Indicates if the phone number could be positively verified using Libphonenumber||
|score|Number|Higher implies a more reliable result, score is not normalized||
|countryIso2|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||











## Phone Code Geo

<a id="opIdPhone-Code-Geo"></a>

> **Phone Code Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/Teniola/Apata/08186472651/NG \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/Teniola/Apata/08186472651/NG")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/Teniola/Apata/08186472651/NG"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/Teniola/Apata/08186472651/NG", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely phone prefix and format of a phone number using a first name, last name and geographic context.*

*<u>Cost :</u> The processing of each query requires **11** credits.*

<h3 id="phone-code-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}`



<h3 id="phone-code-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|phoneNumber|String|true|Phone number, formatted or unformatted|
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|







> The above command returns JSON structured like this:



```json
{
  "script": "LATIN",
  "id": null,
  "firstName": "Teniola",
  "lastName": "Apata",
  "internationalPhoneNumberVerified": "+234 818 647 2651",
  "phoneCountryIso2Verified": "NG",
  "phoneCountryCode": 234,
  "phoneCountryCodeAlt": 62,
  "phoneCountryIso2": "NG",
  "phoneCountryIso2Alt": "ID",
  "originCountryIso2": "NG",
  "originCountryIso2Alt": "CI",
  "phoneNumber": "08186472651",
  "verified": true,
  "score": 2.362918055640346
}
```

<h3 id="phone-code-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|Submitted first name||
|lastName|String|Submitted last name||
|internationalPhoneNumberVerified|String|Phone number, in E.164 format||
|phoneCountryIso2Verified|String|Country of origin of the phone number, in ISO 3166-1 alpha-2 format (according to Libphonenumber)||
|phoneCountryCode|Integer|Most likely country calling code||
|phoneCountryCodeAlt|Integer|Second most likely country calling code||
|phoneCountryIso2|String|Most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|phoneCountryIso2Alt|String|Second most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|originCountryIso2|String|Most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|originCountryIso2Alt|String|Second most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|phoneNumber|String|Submitted phone number||
|verified|Boolean|Indicates if the phone number could be positively verified using Libphonenumber||
|score|Number|Higher implies a more reliable result, score is not normalized||
|countryIso2|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||











## Phone Code Geo Batch

<a id="opIdPhone-Code-Geo-Batch"></a>

> **Phone Code Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNamesWithPhoneNumbers":[{"id":"e630dda5-13b3-42c5-8f1d-648aa8a21c42","firstName":"Teniola","lastName":"Apata","phoneNumber":"08186472651","countryIso2":"NG"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNamesWithPhoneNumbers\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Teniola\",\"lastName\":\"Apata\",\"phoneNumber\":\"08186472651\",\"countryIso2\":\"NG\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch"

payload = {"personalNamesWithPhoneNumbers": [
        {
            "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
            "firstName": "Teniola",
            "lastName": "Apata",
            "phoneNumber": "08186472651",
            "countryIso2": "NG"
        }
    ]}
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNamesWithPhoneNumbers\":[{\"id\":\"e630dda5-13b3-42c5-8f1d-648aa8a21c42\",\"firstName\":\"Teniola\",\"lastName\":\"Apata\",\"phoneNumber\":\"08186472651\",\"countryIso2\":\"NG\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the most likely phone prefix and format of up to 100 phone numbers using first names, last names and geographic context.*

*<u>Cost :</u> The processing of each object requires **11** credits.*

<h3 id="phone-code-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch`



> Body parameter

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Teniola",
      "lastName": "Apata",
      "phoneNumber": "08186472651",
      "countryIso2": "NG"
    }
  ]
}
```

<h3 id="phone-code-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be a nested array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String||Unique identifier|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|phoneNumber|String|true|Phone number, formatted or unformatted|
|**FirstLastNameOriginedOut**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|true|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String||||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|true|The first name (also known as given name)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|true|The last name (also known as family name, or surname)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|true|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|true|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|true|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|true|Compatibility to NamSor_v1 Origin score value. Higher score is better, but score is not normalized. Use calibratedProbability if available. ||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|true|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|true|Most likely top region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|true|Most likely sub region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|true|The calibrated probability for countryOrigin to have been guessed correctly.||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|true|The calibrated probability for countryOrigin OR countryOriginAlt to have been guessed correctly.||
|countryIso2|String|true|Most likely country of origin, in ISO 3166-1 alpha-2 format|
|countryIso2Alt|String|true|Second most likely country of origin, in ISO 3166-1 alpha-2 format|




> The above command returns JSON structured like this:



```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "script": "LATIN",
      "id": "e630dda5-13b3-42c5-8f1d-648aa8a21c42",
      "firstName": "Teniola",
      "lastName": "Apata",
      "internationalPhoneNumberVerified": "+234 818 647 2651",
      "phoneCountryIso2Verified": "NG",
      "phoneCountryCode": 234,
      "phoneCountryCodeAlt": 62,
      "phoneCountryIso2": "NG",
      "phoneCountryIso2Alt": "ID",
      "originCountryIso2": "NG",
      "originCountryIso2Alt": "CI",
      "phoneNumber": "08186472651",
      "verified": true,
      "score": 2.362918055640346
    }
  ]
}
```

<h3 id="phone-code-geo-batch-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Provided unique identifier||
|firstName|String|First name (or given name)||
|lastName|String|Last name (or family name)||
|internationalPhoneNumberVerified|String|Phone number, in E.164 format||
|phoneCountryIso2Verified|String|Country of origin of the phone number, in ISO 3166-1 alpha-2 format (according to Libphonenumber)||
|phoneCountryCode|Integer|Most likely country calling code||
|phoneCountryCodeAlt|Integer|Second most likely country calling code||
|phoneCountryIso2|String|Most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|phoneCountryIso2Alt|String|Second most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|originCountryIso2|String|Most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|originCountryIso2Alt|String|Second most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|phoneNumber|String|Submitted phone number||
|verified|Boolean|Indicates if the phone number could be positively verified using Libphonenumber||
|score|Number|Higher implies a more reliable result, score is not normalized||
|countryIso2|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||











## Phone Code Geo Feedback Loop

<a id="opIdPhone-Code-Geo-Feedback-Loop"></a>

> **Phone Code Geo Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/Diego/Rivera/14448140442/%2B524448140442/MX \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/Diego/Rivera/14448140442/%2B524448140442/MX")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/Diego/Rivera/14448140442/%2B524448140442/MX"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/Diego/Rivera/14448140442/%2B524448140442/MX", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Submit a phone number and its matching first name, last name, country of origin in ISO 3166-1 alpha-2 format and formated version in E.164. This help us improve our name matching tool and in return your can earn extra credits if the match is correct.*

*<u>Cost :</u> The processing of each query requires **1** credits.*

<h3 id="phone-code-geo-feedback-loop-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}`



<h3 id="phone-code-geo-feedback-loop-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true|First name (or given name)|
|lastName|String|true|Last name (or family name)|
|phoneNumber|String|true|Phone number, formatted or unformatted|
|phoneNumberE164|String|true|Phone number, in E.164 format|
|countryIso2|String|true|Country of origin, in ISO 3166-1 alpha-2 format|








> The above command returns JSON structured like this:



```json
{
  "feedbackCredits": 1
}
```

<h3 id="phone-code-geo-feedback-loop-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|Character set used for analysis||
|id|String|Unique identifier||
|firstName|String|First name (or given name)||
|lastName|String|Last name (or family name)||
|internationalPhoneNumberVerified|String|Phone number, in E.164 format||
|phoneCountryIso2Verified|String|Country of origin of the phone number, in ISO 3166-1 alpha-2 format (according to Libphonenumber)||
|phoneCountryCode|Integer|Most likely country calling code||
|phoneCountryCodeAlt|Integer|Second most likely country calling code||
|phoneCountryIso2|String|Most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|phoneCountryIso2Alt|String|Second most likely country of origin of the phone number, in ISO 3166-1 alpha-2 format||
|originCountryIso2|String|Most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|originCountryIso2Alt|String|Second most likely country of origin of the name, in ISO 3166-1 alpha-2 format||
|phoneNumber|String|Submitted phone number||
|verified|Boolean|Indicates if the phone number could be positively verified using Libphonenumber||
|score|Number|Higher implies a more reliable result, but score is not normalized. Use probabilityCalibrated if available||
|countryIso2|String|Most likely country of origin, in ISO 3166-1 alpha-2 format||











<h1 id="namsor-api-v2-admin">Admin</h1>

The Admin endpoints allow you to access a wide range of administrative tools. Access your <strong>API usage history</strong>, check the status and <strong>availability of Namsor's endpoints</strong> or query the <strong>possible enumerators</strong> for a given classifier. Among other features you may also <strong>set your privacy options</strong> or <strong>disable your key</strong>.

## Software Version

<a id="opIdSoftware-Version"></a>

> **Software Version** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the current version of the Namsor software.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="software-version-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion`



> The above command returns JSON structured like this:



```json
{
  "softwareNameAndVersion": "NamSorAPIv2.0.14B01",
  "softwareVersion": [
    2,
    0,
    14
  ]
}
```

<h3 id="software-version-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|softwareNameAndVersion|String|Name and version of the API||
|softwareVersion|Array|Software version, as an array (major, minor and patch)||











## Api Status

<a id="opIdApi-Status"></a>

> **Api Status** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the current version of the Namsor software and the status of the classifiers (API services).*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="api-status-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus`



> The above command returns JSON structured like this:



```json
{
  "softwareVersion": {
    "softwareNameAndVersion": "NamSorAPIv2.0.14B01",
    "softwareVersion": [
      2,
      0,
      14
    ]
  },
  "classifiers": [
    {
      "classifierName": "name_category",
      "serving": true,
      "learning": true,
      "shuttingDown": false,
      "probabilityCalibrated": false
    },
    {
      "classifierName": "personalname_gender",
      "serving": true,
      "learning": true,
      "shuttingDown": false,
      "probabilityCalibrated": true
    }
  ]
}
```

<h3 id="api-status-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**softwareVersion**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softwareNameAndVersion*|String|Name and version of the API||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softwareVersion*|Array|Software version, as an array (major, minor and patch)||
|**classifiers**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].classifierName*|String|Name of the classifier / service||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].serving*|Boolean|True if the classifier is serving requests (has reached minimal learning, is not shutting down)||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].learning*|Boolean|True if the classifier is learning||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].shuttingDown*|Boolean|True if the classifier is shutting down||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probabilityCalibrated*|Boolean|True if the classifier has finished the initial learning and has calibrated probabilities (during initial learning, calibrated probabilities will be equal to -1)||











## Available Services

<a id="opIdAvailable-Services"></a>

> **Available Services** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns a list of the API services (classifiers) and their usage costs in credits.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="available-services-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices`



> The above command returns JSON structured like this:



```json
{
  "apiServices": [
    {
      "serviceName": "name_category",
      "serviceGroup": "general",
      "costInUnits": 1
    },
    {
      "serviceName": "personalname_gender",
      "serviceGroup": "gender",
      "costInUnits": 1
    }
  ]
}
```

<h3 id="available-services-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|serviceName|String|Name of the classifier / service||
|serviceGroup|String|Group the classifier / service belong to||
|costInUnits|Integer|Usage cost of the service, in credits||











## Taxonomy Classes

<a id="opIdTaxonomy-Classes"></a>

> **Taxonomy Classes** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/personalname_gender \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/personalname_gender")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/personalname_gender"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/personalname_gender", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns a list of the possible enumerators for a given classifier.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="taxonomy-classes-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}`



<h3 id="taxonomy-classes-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|classifierName|String|true|Name of the classifier|




> The above command returns JSON structured like this:



```json
{
  "classifierName": "personalname_gender",
  "taxonomyClasses": [
    "female",
    "male"
  ]
}
```

<h3 id="taxonomy-classes-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|classifierName|String|Name of the submitted classifier||
|taxonomyClasses|Array|Possible enumerators for this classifier||











## Api Usage

<a id="opIdApi-Usage"></a>

> **Api Usage** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns information on your subscription plan, billing period and current API usage.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="api-usage-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage`



> The above command returns JSON structured like this:



```json
{
  "subscription": {
    "apiKey": "77afd518a85798fa3723f5ec8120adb7",
    "planStarted": 1602705605199,
    "priorPlanStarted": 0,
    "planEnded": 0,
    "taxRate": 0,
    "planName": "BASIC",
    "planBaseFeesKey": "namsorapi_v2_BASIC_usd",
    "planStatus": "OPEN",
    "planQuota": 5000,
    "priceUSD": 0,
    "priceOverageUSD": 0.005,
    "price": 0,
    "priceOverage": 0.005,
    "currency": "usd",
    "currencyFactor": 1,
    "stripeCustomerId": null,
    "stripeStatus": null,
    "stripeSubscription": null,
    "userId": "lXVJ95AraqM9jrRns45ZfbE4qRgw"
  },
  "billingPeriod": {
    "apiKey": "77afd518a85798fa3723f5ec8120adb7",
    "subscriptionStarted": 1602705635199,
    "periodStarted": 1618430435199,
    "periodEnded": 0,
    "stripeCurrentPeriodEnd": 0,
    "stripeCurrentPeriodStart": 0,
    "billingStatus": "OPEN",
    "usage": 34,
    "softLimit": 3000,
    "hardLimit": 5000
  },
  "overageExclTax": 0,
  "overageInclTax": 0,
  "overageCurrency": null,
  "overageQuantity": 0
}
```

<h3 id="api-usage-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**subscription**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|Your Namsor API key||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStarted*|Integer|Start date of the plan, in UNIX time format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priorPlanStarted*|Integer|Datetime when the user subscribed to the prior plan||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planEnded*|Integer|End date of the plan, in UNIX time format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.taxRate*|Number|Applicable tax rate for the plan||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planName*|String|Name of the plan||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planBaseFeesKey*|String|Current plan key (as in Stripe product)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStatus*|String|Plan status||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planQuota*|Integer|Total number of credits associated with this plan||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceUSD*|Number|Price in U.S. dollars ($)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverageUSD*|Number|Overage price in U.S. dollars ($)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.price*|Number|Price in the user's preferred currency||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverage*|Number|Overaged price in the user's preferred currency||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currency*|String|The user's preferred currency||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currencyFactor*|Number|For USD, GBP, EUR - the factor is 1||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCustomerId*|String|Unique Stripe Customer identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeStatus*|String|Stripe status||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeSubscription*|String|Stripe subscription identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.userId*|String|Unique user identifier||
|**billingPeriod**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|Your Namsor API key||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subscriptionStarted*|Integer|Subscription start date, in UNIX time format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodStarted*|Integer|Subscription period start date, in UNIX time format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodEnded*|Integer|Subscription end date, in UNIX time format||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodEnd*|Integer|End of the current plan in Stripe||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodStart*|Integer|Start of the current plan in Stripe||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.billingStatus*|String|Status of the current period billing||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.usage*|Integer|Number of credits used so far||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softLimit*|Integer|Current soft limit for the period||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.hardLimit*|Integer|Current hard limit for the period||
|overageExclTax|Number|Overage amount including any tax||
|overageInclTax|Number|Overage amount including tax (if applicable)||
|overageCurrency|String|Currency of the overage amount||
|overageQuantity|Integer|Quantity above monthly quota of the current subscritpion, in credits||











## Api Usage History

<a id="opIdApi-Usage-History"></a>

> **Api Usage History** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the detailed usage history, indicating what services where called and what API key parameters where applied.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="api-usage-history-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory`



> The above command returns JSON structured like this:



```json
{
  "detailedUsage": [
    {
      "apiKey": {
        "userId": null,
        "admin": false,
        "vetted": false,
        "learnable": true,
        "anonymized": false,
        "partner": false,
        "striped": false,
        "corporate": false,
        "disabled": false,
        "api_key": "b214894824e1c4762fb650866fea8f3c"
      },
      "apiService": "personalname_us_race_ethnicity",
      "createdDateTime": 1620385794616,
      "totalUsage": 1,
      "lastFlushedDateTime": 1620386273418,
      "lastUsedDateTime": 1620386699945,
      "serviceFeaturesUsage": {}
    }
  ]
}
```

<h3 id="api-usage-history-responses">Response</h3>

*The HTTP response body is a nested array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**apiKey**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|The user API Key.||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.userId*|String|Unique user identifier||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.admin*|Boolean|Does the API Key have admin priviledges||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.vetted*|Boolean|Is the API Key vetted for machine learning||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.learnable*|Boolean|Is the API Key authorised to feed the machine learning||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.anonymized*|Boolean|Is the API Key anonymized (using its SHA-256 digest for logging)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.partner*|Boolean|Does the API Key have a partnership role||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.striped*|Boolean|Is the API Key associated to a valid Stripe account||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.corporate*|Boolean|Does the API Key have a corporate role||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.disabled*|Boolean|Is the API Key temporarily or permanently disabled||
|apiService|String|Name of the service requested||
|createdDateTime|Integer|Date of the analysis, in UNIX time format||
|totalUsage|Integer|Total cost of the analysis in credits||
|lastFlushedDateTime|Integer|Last time the counter was reset, in UNIX time format||
|lastUsedDateTime|Integer|Last time the API key was used, in UNIX time format||
|serviceFeaturesUsage|Object|Details regarding usage of special features||











## Api Usage History Aggregate

<a id="opIdApi-Usage-History-Aggregate"></a>

> **Api Usage History Aggregate** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  }
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Returns the aggregated API usage history detailing usage per service. For each data point in the "data" field there is a corresponding row header in the "rowHeaders" field. For each value in a data point in the "data" field there is a corresponding column header in the "colHeaders" field. Ex: To find the period of data[0], lookup rowHeaders[0]. To find the service corresponding to data[0][3], lookup colHeaders[3].*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="api-usage-history-aggregate-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate`



> The above command returns JSON structured like this:



```json
{
  "timeUnit": "DAY",
  "periodStart": 1600616581000,
  "periodEnd": 1600702981000,
  "totalUsage": 42,
  "historyTruncated": false,
  "data": [
    [
      0,
      0,
      0,
      10,
      10,
      0,
      0,
      0,
      0,
      10,
      10,
      2
    ]
  ],
  "colHeaders": [
    "chineseNameCandidates",
    "japaneseNameCandidates",
    "japaneseNameMatching",
    "name_category",
    "name_parser_type",
    "personalfullname_country",
    "personalfullname_gender",
    "personalname_country_diaspora",
    "personalname_gender",
    "personalname_origin_country",
    "personalname_phone_prefix",
    "personalname_us_race_ethnicity"
  ],
  "rowHeaders": [
    "2020-09-20"
  ]
}
```

<h3 id="api-usage-history-aggregate-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|timeUnit|String|Unit of time used in the "rowHeaders" field. May vary depending on API usage ("DAY", "WEEK" or "MONTH")||
|periodStart|Integer|Start of the reporting period, in UNIX time format||
|periodEnd|Integer|End of the reporting period, in UNIX time format||
|totalUsage|Integer|Total usage during the current period||
|historyTruncated|Boolean|Indicates if returned data was truncaded due to size limits||
|data|Array|Aggregated API usage, formated as an array of data points (or array of arrays)||
|colHeaders|Array|Column headers used to link API services to the values in each data point||
|rowHeaders|Array|Row headers used to link a period of time to a data point||











## Learnable

<a id="opIdLearnable"></a>

> **Learnable** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/77afd518a85798fa3723f5ec8120adb7/true
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/77afd518a85798fa3723f5ec8120adb7/true")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/77afd518a85798fa3723f5ec8120adb7/true"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/77afd518a85798fa3723f5ec8120adb7/true", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Used to set the learnable status of an API key. Setting the learnable parameter of an API key to false will prevent the submitted data from feeding the machine learning.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="learnable-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}`



<h3 id="learnable-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true|The API Key to set as learnable or non-learnable|
|learnable|Boolean|true|Should the API key be set to learnable|





<h3 id="learnable-responses">Response</h3>

In case of a success the API will respond with an HTTP 200 code.








## Anonymize

<a id="opIdAnonymize"></a>

> **Anonymize** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/77afd518a85798fa3723f5ec8120adb7/true
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/77afd518a85798fa3723f5ec8120adb7/true")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/77afd518a85798fa3723f5ec8120adb7/true"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/77afd518a85798fa3723f5ec8120adb7/true", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Used to set the anonymized status of an API key. Setting the anonymized parameter of an API key to true will hide the API key in the logs by using a SHA-256 digest of the key instead.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="anonymize-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}`



<h3 id="anonymize-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true|The API Key to set as anonymized or non-anonymized|
|anonymized|Boolean|true|Should the API key be set to anonymized|





<h3 id="anonymize-responses">Response</h3>

In case of a success the API will respond with an HTTP 200 code.








## Disable API Key

<a id="opIdDisable-API-Key"></a>

> **Disable API Key** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/disable/77afd518a85798fa3723f5ec8120adb7/true
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/disable/77afd518a85798fa3723f5ec8120adb7/true")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/disable/77afd518a85798fa3723f5ec8120adb7/true"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/disable/77afd518a85798fa3723f5ec8120adb7/true", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Used to enable or disable an API key. Setting the disabled parameter of an API key to true will prevent its usage.*

*<u>Cost :</u> The processing of each query does not require credits.*

<h3 id="disable-api-key-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/disable/{source}/{disabled}`



<h3 id="disable-api-key-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true|The API Key to set as enabled or disabled|
|disabled|Boolean|true|Should the API key be set to disabled|





<h3 id="disable-api-key-responses">Response</h3>

In case of a success the API will respond with an HTTP 200 code.








