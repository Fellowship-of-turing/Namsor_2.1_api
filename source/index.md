---
title: NamSor API v2 v2.0.14
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
  - <a href="https://github.com/namsor">NamSor API client SDKs v2 for Java,
    Python</a>
  - <a href="https://v2.namsor.com">Visit namsor.com</a>
  - <a href="https://github.com/namsor/namsor-java-sdk2">Get the NamSor Java
    SDK</a>
  - <a href="https://github.com/namsor/namsor-python-sdk2">Get the NamSor Python
    SDK</a>
includes:
  - errors.md
  - authentication.md
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="namsor-api-v2">NamSor API v2 v2.0.14</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 

Base URLs:

* <a href="https://v2.namsor.com/NamSorAPIv2">https://v2.namsor.com/NamSorAPIv2</a>

Email: <a href="mailto:contact@namsor.com">Namsor SAS</a> Web: <a href="http://www.namsor.com/">Namsor SAS</a> 
License: <a href="https://v2.namsor.com/NamSorAPIv2/assets/pdf/201803_NamSor_API_Terms_v007.pdf">NamSorAPI_Lic_v0.0.7</a>

# Introduction



## General Information

-   The base endpoint URL is: https://v2.namsor.com/NamSorAPIv2
-   All endpoints return JSON containing either an object or a nested array of objects.
-   Batch processing returns the data sorted in the same order as it was sent.
-   **All endpoints require an API Key.**
-   Never share your API key to ANYONE.
-   Currently certain NamSor API endpoints use nested object structures in their query body and / or responses, please refer yourself to the corresponding code example.
-   Certain API response code examples have been truncated in order to improve readability. For example the countriesOriginTop, ethnicitiesTop and matchCandidates Array fields have been reduced to 2 elements in length.


## Authentication

The free BASIC subscription allows to classify up to 500 names per month (origin, ethnicity) and 5000 names per month (gender).

<aside class="notice">
To track credit usage you can either check the provided graphics in your user account or query the appropriate Admin routes.
</aside>

### API Key Creation

text here

### API Key Setup

Your API key must be set in the _header_ of your request using the _X-API-KEY_ property.

Please refer yourself to the provided code samples for correct key installation.


## Errors

The NamSor API uses the following error codes:

| Error Code | Meaning               | Description                                        |
| ---------- | --------------------- | -------------------------------------------------- |
| 401        | Unauthorized          | Missing or incorrect API Key.                      |
| 403        | Forbidden             | API Limit Reached or API Key Disabled.             |
| 404        | Not Found             | The specified route could not be found.            |
| 500        | Internal Server Error | We had a problem with our server. Try again later. |


<h1 id="namsor-api-v2-personal">Personal</h1>

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

## Corridor

<a id="opIdCorridor"></a>

> **Corridor** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}", {
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



*Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)*

*<u>Cost :</u> The processing of each name requires **20** credits.*

<h3 id="corridor-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}`

<h3 id="corridor-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|countryIso2From|String|true||
|firstNameFrom|String|true||
|lastNameFrom|String|true||
|countryIso2To|String|true||
|firstNameTo|String|true||
|lastNameTo|String|true||









> The above command returns JSON structured like this:



```json
{
  "id": "String",
  "firstLastNameGeoFromGender": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "likelyGender": "String",
    "genderScale": "Number",
    "score": "Number",
    "probabilityCalibrated": "Number"
  },
  "firstLastNameGeoToGender": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "likelyGender": "String",
    "genderScale": "Number",
    "score": "Number",
    "probabilityCalibrated": "Number"
  },
  "firstLastNameGeoFromOrigin": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "countryOrigin": "String",
    "countryOriginAlt": "String",
    "countriesOriginTop": "Array",
    "score": "Number",
    "regionOrigin": "String",
    "topRegionOrigin": "String",
    "subRegionOrigin": "String",
    "probabilityCalibrated": "Number",
    "probabilityAltCalibrated": "Number"
  },
  "firstLastNameGeoToOrigin": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "countryOrigin": "String",
    "countryOriginAlt": "String",
    "countriesOriginTop": "Array",
    "score": "Number",
    "regionOrigin": "String",
    "topRegionOrigin": "String",
    "subRegionOrigin": "String",
    "probabilityCalibrated": "Number",
    "probabilityAltCalibrated": "Number"
  },
  "firstLastNameGeoFromDiaspora": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "score": "Number",
    "ethnicityAlt": "String",
    "ethnicity": "String",
    "lifted": "Boolean",
    "countryIso2": "String",
    "ethnicitiesTop": "Array"
  },
  "firstLastNameGeoToDiaspora": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String",
    "score": "Number",
    "ethnicityAlt": "String",
    "ethnicity": "String",
    "lifted": "Boolean",
    "countryIso2": "String",
    "ethnicitiesTop": "Array"
  },
  "script": "String"
}
```

<h3 id="corridor-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|id|String|||
|**firstLastNameGeoFromGender**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|**firstLastNameGeoToGender**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|**firstLastNameGeoFromOrigin**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|||
|**firstLastNameGeoToOrigin**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|||
|**firstLastNameGeoFromDiaspora**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|List ethnicities (top 10)||
|**firstLastNameGeoToDiaspora**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|List ethnicities (top 10)||
|script|String|||











## Corridor Batch

<a id="opIdCorridor-Batch"></a>

> **Corridor Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"corridorFromTo":[{"id":"String","firstLastNameGeoFrom":{"id":"String","firstName":"String","lastName":"String","countryIso2":"String"},"firstLastNameGeoTo":{"id":"String","firstName":"String","lastName":"String","countryIso2":"String"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"corridorFromTo\":[{\"id\":\"String\",\"firstLastNameGeoFrom\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"},\"firstLastNameGeoTo\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch"

payload = {"corridorFromTo": [
        {
            "id": "String",
            "firstLastNameGeoFrom": {
                "id": "String",
                "firstName": "String",
                "lastName": "String",
                "countryIso2": "String"
            },
            "firstLastNameGeoTo": {
                "id": "String",
                "firstName": "String",
                "lastName": "String",
                "countryIso2": "String"
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
  "body": "{\"corridorFromTo\":[{\"id\":\"String\",\"firstLastNameGeoFrom\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"},\"firstLastNameGeoTo\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)*

> Body parameter

```json
{
  "corridorFromTo": [
    {
      "id": "String",
      "firstLastNameGeoFrom": {
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryIso2": "String"
      },
      "firstLastNameGeoTo": {
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryIso2": "String"
      }
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **20** credits.*

<h3 id="corridor-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/corridorBatch`

<h3 id="corridor-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstLastNameGeoFrom|Object|false||
|firstLastNameGeoTo|Object|false||




> The above command returns JSON structured like this:



```json
{
  "corridorFromTo": [
    {
      "id": "String",
      "firstLastNameGeoFromGender": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "likelyGender": "String",
        "genderScale": "Number",
        "score": "Number",
        "probabilityCalibrated": "Number"
      },
      "firstLastNameGeoToGender": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "likelyGender": "String",
        "genderScale": "Number",
        "score": "Number",
        "probabilityCalibrated": "Number"
      },
      "firstLastNameGeoFromOrigin": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryOrigin": "String",
        "countryOriginAlt": "String",
        "countriesOriginTop": "Array",
        "score": "Number",
        "regionOrigin": "String",
        "topRegionOrigin": "String",
        "subRegionOrigin": "String",
        "probabilityCalibrated": "Number",
        "probabilityAltCalibrated": "Number"
      },
      "firstLastNameGeoToOrigin": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryOrigin": "String",
        "countryOriginAlt": "String",
        "countriesOriginTop": "Array",
        "score": "Number",
        "regionOrigin": "String",
        "topRegionOrigin": "String",
        "subRegionOrigin": "String",
        "probabilityCalibrated": "Number",
        "probabilityAltCalibrated": "Number"
      },
      "firstLastNameGeoFromDiaspora": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "score": "Number",
        "ethnicityAlt": "String",
        "ethnicity": "String",
        "lifted": "Boolean",
        "countryIso2": "String",
        "ethnicitiesTop": "Array"
      },
      "firstLastNameGeoToDiaspora": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "score": "Number",
        "ethnicityAlt": "String",
        "ethnicity": "String",
        "lifted": "Boolean",
        "countryIso2": "String",
        "ethnicitiesTop": "Array"
      },
      "script": "String"
    }
  ]
}
```

<h3 id="corridor-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|id|String|||
|**firstLastNameGeoFromGender**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|**firstLastNameGeoToGender**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.likelyGender*|String|Most likely gender|"male", "female" or "unknown"|
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.genderScale*|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|**firstLastNameGeoFromOrigin**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|||
|**firstLastNameGeoToOrigin**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOrigin*|String|Most likely country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryOriginAlt*|String|Second best alternative : country of Origin||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countriesOriginTop*|Array|List countries of Origin (top 10)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.regionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.topRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subRegionOrigin*|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityCalibrated*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.probabilityAltCalibrated*|Number|||
|**firstLastNameGeoFromDiaspora**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|List ethnicities (top 10)||
|**firstLastNameGeoToDiaspora**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.score*|Number|Compatibility to NamSor_v1 Origin score value||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicityAlt*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicity*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lifted*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.countryIso2*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.ethnicitiesTop*|Array|List ethnicities (top 10)||
|script|String|||











## Country

<a id="opIdCountry"></a>

> **Country** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}", {
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



*Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.*

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="country-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}`

<h3 id="country-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|personalNameFull|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "score": "Number",
  "country": "String",
  "countryAlt": "String",
  "region": "String",
  "topRegion": "String",
  "subRegion": "String",
  "countriesTop": "Array",
  "probabilityCalibrated": "Number",
  "probabilityAltCalibrated": "Number"
}
```

<h3 id="country-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|score|Number|||
|country|String|||
|countryAlt|String|||
|region|String|||
|topRegion|String|||
|subRegion|String|||
|countriesTop|Array|List countries (top 10)||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## Country Batch

<a id="opIdCountry-Batch"></a>

> **Country Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="country-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch`

<h3 id="country-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "score": "Number",
      "country": "String",
      "countryAlt": "String",
      "region": "String",
      "topRegion": "String",
      "subRegion": "String",
      "countriesTop": "Array",
      "probabilityCalibrated": "Number",
      "probabilityAltCalibrated": "Number"
    }
  ]
}
```

<h3 id="country-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|score|Number|||
|country|String|||
|countryAlt|String|||
|region|String|||
|topRegion|String|||
|subRegion|String|||
|countriesTop|Array|List countries (top 10)||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## Diaspora

<a id="opIdDiaspora"></a>

> **Diaspora** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}", {
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



*Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)*

*<u>Cost :</u> The processing of each name requires **20** credits.*

<h3 id="diaspora-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}`

<h3 id="diaspora-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|countryIso2|String|true||
|firstName|String|true||
|lastName|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "score": "Number",
  "ethnicityAlt": "String",
  "ethnicity": "String",
  "lifted": "Boolean",
  "countryIso2": "String",
  "ethnicitiesTop": "Array"
}
```

<h3 id="diaspora-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|score|Number|Compatibility to NamSor_v1 Origin score value||
|ethnicityAlt|String|||
|ethnicity|String|||
|lifted|Boolean|||
|countryIso2|String|||
|ethnicitiesTop|Array|List ethnicities (top 10)||











## Diaspora Batch

<a id="opIdDiaspora-Batch"></a>

> **Diaspora Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "countryIso2": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **20** credits.*

<h3 id="diaspora-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch`

<h3 id="diaspora-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "score": "Number",
      "ethnicityAlt": "String",
      "ethnicity": "String",
      "lifted": "Boolean",
      "countryIso2": "String",
      "ethnicitiesTop": "Array"
    }
  ]
}
```

<h3 id="diaspora-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|score|Number|Compatibility to NamSor_v1 Origin score value||
|ethnicityAlt|String|||
|ethnicity|String|||
|lifted|Boolean|||
|countryIso2|String|||
|ethnicitiesTop|Array|List ethnicities (top 10)||











## Gender

<a id="opIdGender"></a>

> **Gender** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}", {
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



*Infer the likely gender of a name.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}`

<h3 id="gender-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Batch

<a id="opIdGender-Batch"></a>

> **Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 names, detecting automatically the cultural context.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch`

<h3 id="gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Full

<a id="opIdGender-Full"></a>

> **Gender Full** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}", {
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



*Infer the likely gender of a full name, ex. John H. Smith*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-full-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}`

<h3 id="gender-full-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|fullName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-full-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Full Batch

<a id="opIdGender-Full-Batch"></a>

> **Gender Full Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 full names, detecting automatically the cultural context.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-full-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch`

<h3 id="gender-full-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-full-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Full Geo

<a id="opIdGender-Full-Geo"></a>

> **Gender Full Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}", {
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



*Infer the likely gender of a full name, given a local context (ISO2 country code).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-full-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}`

<h3 id="gender-full-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|fullName|String|true||
|countryIso2|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-full-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Full Geo Batch

<a id="opIdGender-Full-Geo-Batch"></a>

> **Gender Full Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String",
            "countryIso2": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-full-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch`

<h3 id="gender-full-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-full-geo-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Geo

<a id="opIdGender-Geo"></a>

> **Gender Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}", {
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



*Infer the likely gender of a name, given a local context (ISO2 country code).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}`

<h3 id="gender-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||
|countryIso2|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Geo Batch

<a id="opIdGender-Geo-Batch"></a>

> **Gender Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "countryIso2": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch`

<h3 id="gender-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-geo-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Origin

<a id="opIdOrigin"></a>

> **Origin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}", {
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



*Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.*

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="origin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}`

<h3 id="origin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "countryOrigin": "String",
  "countryOriginAlt": "String",
  "countriesOriginTop": "Array",
  "score": "Number",
  "regionOrigin": "String",
  "topRegionOrigin": "String",
  "subRegionOrigin": "String",
  "probabilityCalibrated": "Number",
  "probabilityAltCalibrated": "Number"
}
```

<h3 id="origin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|countryOrigin|String|Most likely country of Origin||
|countryOriginAlt|String|Second best alternative : country of Origin||
|countriesOriginTop|Array|List countries of Origin (top 10)||
|score|Number|Compatibility to NamSor_v1 Origin score value||
|regionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|topRegionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|subRegionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## Origin Batch

<a id="opIdOrigin-Batch"></a>

> **Origin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="origin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch`

<h3 id="origin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "countryOrigin": "String",
      "countryOriginAlt": "String",
      "countriesOriginTop": "Array",
      "score": "Number",
      "regionOrigin": "String",
      "topRegionOrigin": "String",
      "subRegionOrigin": "String",
      "probabilityCalibrated": "Number",
      "probabilityAltCalibrated": "Number"
    }
  ]
}
```

<h3 id="origin-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|countryOrigin|String|Most likely country of Origin||
|countryOriginAlt|String|Second best alternative : country of Origin||
|countriesOriginTop|Array|List countries of Origin (top 10)||
|score|Number|Compatibility to NamSor_v1 Origin score value||
|regionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|topRegionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|subRegionOrigin|String|Most likely region of Origin (based on countryOrigin ISO2 code)||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## Parse Name

<a id="opIdParse-Name"></a>

> **Parse Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}", {
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



*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. *

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}`

<h3 id="parse-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|nameFull|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "nameParserType": "String",
  "nameParserTypeAlt": "String",
  "firstLastName": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String"
  },
  "score": "Number"
}
```

<h3 id="parse-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Parse Name Batch

<a id="opIdParse-Name-Batch"></a>

> **Parse Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch`

<h3 id="parse-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "nameParserType": "String",
      "nameParserTypeAlt": "String",
      "firstLastName": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "score": "Number"
    }
  ]
}
```

<h3 id="parse-name-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Parse Name Geo

<a id="opIdParse-Name-Geo"></a>

> **Parse Name Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}", {
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



*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-name-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}`

<h3 id="parse-name-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|nameFull|String|true||
|countryIso2|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "nameParserType": "String",
  "nameParserTypeAlt": "String",
  "firstLastName": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String"
  },
  "score": "Number"
}
```

<h3 id="parse-name-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Parse Name Geo Batch

<a id="opIdParse-Name-Geo-Batch"></a>

> **Parse Name Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String",
            "countryIso2": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. *

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-name-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch`

<h3 id="parse-name-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "nameParserType": "String",
      "nameParserTypeAlt": "String",
      "firstLastName": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "score": "Number"
    }
  ]
}
```

<h3 id="parse-name-geo-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## US Race and Ethnicity

<a id="opIdUS-Race-and-Ethnicity"></a>

> **US Race and Ethnicity** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}", {
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



*Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).*

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="us-race-and-ethnicity-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}`

<h3 id="us-race-and-ethnicity-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "raceEthnicityAlt": "String",
  "raceEthnicity": "String",
  "score": "Number",
  "raceEthnicitiesTop": "Array",
  "probabilityCalibrated": "Number",
  "probabilityAltCalibrated": "Number"
}
```

<h3 id="us-race-and-ethnicity-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|raceEthnicityAlt|String|Second most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Compatibility to NamSor_v1 Origin score value||
|raceEthnicitiesTop|Array|List 'race'/ethnicities||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## US Race and Ethnicity Batch

<a id="opIdUS-Race-and-Ethnicity-Batch"></a>

> **US Race and Ethnicity Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "countryIso2": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="us-race-and-ethnicity-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch`

<h3 id="us-race-and-ethnicity-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "raceEthnicityAlt": "String",
      "raceEthnicity": "String",
      "score": "Number",
      "raceEthnicitiesTop": "Array",
      "probabilityCalibrated": "Number",
      "probabilityAltCalibrated": "Number"
    }
  ]
}
```

<h3 id="us-race-and-ethnicity-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|raceEthnicityAlt|String|Second most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Compatibility to NamSor_v1 Origin score value||
|raceEthnicitiesTop|Array|List 'race'/ethnicities||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## US ZIP Race and Ethnicity

<a id="opIdUS-ZIP-Race-and-Ethnicity"></a>

> **US ZIP Race and Ethnicity** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}", {
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



*Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).*

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="us-zip-race-and-ethnicity-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}`

<h3 id="us-zip-race-and-ethnicity-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||
|zip5Code|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "raceEthnicityAlt": "String",
  "raceEthnicity": "String",
  "score": "Number",
  "raceEthnicitiesTop": "Array",
  "probabilityCalibrated": "Number",
  "probabilityAltCalibrated": "Number"
}
```

<h3 id="us-zip-race-and-ethnicity-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|raceEthnicityAlt|String|Second most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Compatibility to NamSor_v1 Origin score value||
|raceEthnicitiesTop|Array|List 'race'/ethnicities||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











## US ZIP Race and Ethnicity Batch

<a id="opIdUS-ZIP-Race-and-Ethnicity-Batch"></a>

> **US ZIP Race and Ethnicity Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","countryIso2":"String","zipCode":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\",\"zipCode\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "countryIso2": "String",
            "zipCode": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryIso2\":\"String\",\"zipCode\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "countryIso2": "String",
      "zipCode": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **10** credits.*

<h3 id="us-zip-race-and-ethnicity-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch`

<h3 id="us-zip-race-and-ethnicity-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|countryIso2|String|false||
|zipCode|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "raceEthnicityAlt": "String",
      "raceEthnicity": "String",
      "score": "Number",
      "raceEthnicitiesTop": "Array",
      "probabilityCalibrated": "Number",
      "probabilityAltCalibrated": "Number"
    }
  ]
}
```

<h3 id="us-zip-race-and-ethnicity-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|raceEthnicityAlt|String|Second most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|raceEthnicity|String|Most likely US 'race'/ethnicity|"W_NL", "HL", "A", "B_NL", "AI_AN" or "PI"|
|score|Number|Compatibility to NamSor_v1 Origin score value||
|raceEthnicitiesTop|Array|List 'race'/ethnicities||
|probabilityCalibrated|Number|||
|probabilityAltCalibrated|Number|||











<h1 id="namsor-api-v2-social">Social</h1>

Social media and pseudonyms

## Phone Code

<a id="opIdPhone-Code"></a>

> **Phone Code** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}", {
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



*Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.*

*<u>Cost :</u> The processing of each name requires **11** credits.*

<h3 id="phone-code-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}`

<h3 id="phone-code-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||
|phoneNumber|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "internationalPhoneNumberVerified": "String",
  "phoneCountryIso2Verified": "String",
  "phoneCountryCode": "Integer",
  "phoneCountryCodeAlt": "Integer",
  "phoneCountryIso2": "String",
  "phoneCountryIso2Alt": "String",
  "originCountryIso2": "String",
  "originCountryIso2Alt": "String",
  "phoneNumber": "String",
  "verified": "Boolean",
  "score": "Number",
  "countryIso2": "String"
}
```

<h3 id="phone-code-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|internationalPhoneNumberVerified|String|||
|phoneCountryIso2Verified|String|||
|phoneCountryCode|Integer|||
|phoneCountryCodeAlt|Integer|||
|phoneCountryIso2|String|||
|phoneCountryIso2Alt|String|||
|originCountryIso2|String|||
|originCountryIso2Alt|String|||
|phoneNumber|String|||
|verified|Boolean|||
|score|Number|||
|countryIso2|String|||











## Phone Code Batch

<a id="opIdPhone-Code-Batch"></a>

> **Phone Code Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNamesWithPhoneNumbers":[{"id":"String","firstName":"String","lastName":"String","phoneNumber":"String","origin":{"script":"String","id":"String","firstName":"String","lastName":"String","countryOrigin":"String","countryOriginAlt":"String","countriesOriginTop":"Array","score":"Number","regionOrigin":"String","topRegionOrigin":"String","subRegionOrigin":"String","probabilityCalibrated":"Number","probabilityAltCalibrated":"Number"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNamesWithPhoneNumbers\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"phoneNumber\":\"String\",\"origin\":{\"script\":\"String\",\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryOrigin\":\"String\",\"countryOriginAlt\":\"String\",\"countriesOriginTop\":\"Array\",\"score\":\"Number\",\"regionOrigin\":\"String\",\"topRegionOrigin\":\"String\",\"subRegionOrigin\":\"String\",\"probabilityCalibrated\":\"Number\",\"probabilityAltCalibrated\":\"Number\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch"

payload = {"personalNamesWithPhoneNumbers": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "phoneNumber": "String",
            "origin": {
                "script": "String",
                "id": "String",
                "firstName": "String",
                "lastName": "String",
                "countryOrigin": "String",
                "countryOriginAlt": "String",
                "countriesOriginTop": "Array",
                "score": "Number",
                "regionOrigin": "String",
                "topRegionOrigin": "String",
                "subRegionOrigin": "String",
                "probabilityCalibrated": "Number",
                "probabilityAltCalibrated": "Number"
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
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "your-api-key"
  },
  "body": "{\"personalNamesWithPhoneNumbers\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"phoneNumber\":\"String\",\"origin\":{\"script\":\"String\",\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryOrigin\":\"String\",\"countryOriginAlt\":\"String\",\"countriesOriginTop\":\"Array\",\"score\":\"Number\",\"regionOrigin\":\"String\",\"topRegionOrigin\":\"String\",\"subRegionOrigin\":\"String\",\"probabilityCalibrated\":\"Number\",\"probabilityAltCalibrated\":\"Number\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.*

> Body parameter

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "phoneNumber": "String",
      "origin": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryOrigin": "String",
        "countryOriginAlt": "String",
        "countriesOriginTop": "Array",
        "score": "Number",
        "regionOrigin": "String",
        "topRegionOrigin": "String",
        "subRegionOrigin": "String",
        "probabilityCalibrated": "Number",
        "probabilityAltCalibrated": "Number"
      }
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **11** credits.*

<h3 id="phone-code-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch`

<h3 id="phone-code-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|phoneNumber|String|false||
|origin|Object|false||




> The above command returns JSON structured like this:



```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "internationalPhoneNumberVerified": "String",
      "phoneCountryIso2Verified": "String",
      "phoneCountryCode": "Integer",
      "phoneCountryCodeAlt": "Integer",
      "phoneCountryIso2": "String",
      "phoneCountryIso2Alt": "String",
      "originCountryIso2": "String",
      "originCountryIso2Alt": "String",
      "phoneNumber": "String",
      "verified": "Boolean",
      "score": "Number",
      "countryIso2": "String"
    }
  ]
}
```

<h3 id="phone-code-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|internationalPhoneNumberVerified|String|||
|phoneCountryIso2Verified|String|||
|phoneCountryCode|Integer|||
|phoneCountryCodeAlt|Integer|||
|phoneCountryIso2|String|||
|phoneCountryIso2Alt|String|||
|originCountryIso2|String|||
|originCountryIso2Alt|String|||
|phoneNumber|String|||
|verified|Boolean|||
|score|Number|||
|countryIso2|String|||











## Phone Code Geo

<a id="opIdPhone-Code-Geo"></a>

> **Phone Code Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}", {
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



*Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).*

*<u>Cost :</u> The processing of each name requires **11** credits.*

<h3 id="phone-code-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}`

<h3 id="phone-code-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||
|phoneNumber|String|true||
|countryIso2|String|true||







> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "internationalPhoneNumberVerified": "String",
  "phoneCountryIso2Verified": "String",
  "phoneCountryCode": "Integer",
  "phoneCountryCodeAlt": "Integer",
  "phoneCountryIso2": "String",
  "phoneCountryIso2Alt": "String",
  "originCountryIso2": "String",
  "originCountryIso2Alt": "String",
  "phoneNumber": "String",
  "verified": "Boolean",
  "score": "Number",
  "countryIso2": "String"
}
```

<h3 id="phone-code-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|internationalPhoneNumberVerified|String|||
|phoneCountryIso2Verified|String|||
|phoneCountryCode|Integer|||
|phoneCountryCodeAlt|Integer|||
|phoneCountryIso2|String|||
|phoneCountryIso2Alt|String|||
|originCountryIso2|String|||
|originCountryIso2Alt|String|||
|phoneNumber|String|||
|verified|Boolean|||
|score|Number|||
|countryIso2|String|||











## Phone Code Geo Batch

<a id="opIdPhone-Code-Geo-Batch"></a>

> **Phone Code Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNamesWithPhoneNumbers":[{"id":"String","firstName":"String","lastName":"String","phoneNumber":"String","origin":{"script":"String","id":"String","firstName":"String","lastName":"String","countryOrigin":"String","countryOriginAlt":"String","countriesOriginTop":"Array","score":"Number","regionOrigin":"String","topRegionOrigin":"String","subRegionOrigin":"String","probabilityCalibrated":"Number","probabilityAltCalibrated":"Number"},"countryIso2":"String","countryIso2Alt":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNamesWithPhoneNumbers\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"phoneNumber\":\"String\",\"origin\":{\"script\":\"String\",\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryOrigin\":\"String\",\"countryOriginAlt\":\"String\",\"countriesOriginTop\":\"Array\",\"score\":\"Number\",\"regionOrigin\":\"String\",\"topRegionOrigin\":\"String\",\"subRegionOrigin\":\"String\",\"probabilityCalibrated\":\"Number\",\"probabilityAltCalibrated\":\"Number\"},\"countryIso2\":\"String\",\"countryIso2Alt\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch"

payload = {"personalNamesWithPhoneNumbers": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "phoneNumber": "String",
            "origin": {
                "script": "String",
                "id": "String",
                "firstName": "String",
                "lastName": "String",
                "countryOrigin": "String",
                "countryOriginAlt": "String",
                "countriesOriginTop": "Array",
                "score": "Number",
                "regionOrigin": "String",
                "topRegionOrigin": "String",
                "subRegionOrigin": "String",
                "probabilityCalibrated": "Number",
                "probabilityAltCalibrated": "Number"
            },
            "countryIso2": "String",
            "countryIso2Alt": "String"
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
  "body": "{\"personalNamesWithPhoneNumbers\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"phoneNumber\":\"String\",\"origin\":{\"script\":\"String\",\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"countryOrigin\":\"String\",\"countryOriginAlt\":\"String\",\"countriesOriginTop\":\"Array\",\"score\":\"Number\",\"regionOrigin\":\"String\",\"topRegionOrigin\":\"String\",\"subRegionOrigin\":\"String\",\"probabilityCalibrated\":\"Number\",\"probabilityAltCalibrated\":\"Number\"},\"countryIso2\":\"String\",\"countryIso2Alt\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).*

> Body parameter

```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "phoneNumber": "String",
      "origin": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String",
        "countryOrigin": "String",
        "countryOriginAlt": "String",
        "countriesOriginTop": "Array",
        "score": "Number",
        "regionOrigin": "String",
        "topRegionOrigin": "String",
        "subRegionOrigin": "String",
        "probabilityCalibrated": "Number",
        "probabilityAltCalibrated": "Number"
      },
      "countryIso2": "String",
      "countryIso2Alt": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **11** credits.*

<h3 id="phone-code-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch`

<h3 id="phone-code-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|phoneNumber|String|false||
|origin|Object|false||
|countryIso2|String|false||
|countryIso2Alt|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNamesWithPhoneNumbers": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "internationalPhoneNumberVerified": "String",
      "phoneCountryIso2Verified": "String",
      "phoneCountryCode": "Integer",
      "phoneCountryCodeAlt": "Integer",
      "phoneCountryIso2": "String",
      "phoneCountryIso2Alt": "String",
      "originCountryIso2": "String",
      "originCountryIso2Alt": "String",
      "phoneNumber": "String",
      "verified": "Boolean",
      "score": "Number",
      "countryIso2": "String"
    }
  ]
}
```

<h3 id="phone-code-geo-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|internationalPhoneNumberVerified|String|||
|phoneCountryIso2Verified|String|||
|phoneCountryCode|Integer|||
|phoneCountryCodeAlt|Integer|||
|phoneCountryIso2|String|||
|phoneCountryIso2Alt|String|||
|originCountryIso2|String|||
|originCountryIso2Alt|String|||
|phoneNumber|String|||
|verified|Boolean|||
|score|Number|||
|countryIso2|String|||











## Phone Code Geo Feedback Loop

<a id="opIdPhone-Code-Geo-Feedback-Loop"></a>

> **Phone Code Geo Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}", {
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



*Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).*

*<u>Cost :</u> The processing of each name requires ** 1** credits.*

<h3 id="phone-code-geo-feedback-loop-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}`

<h3 id="phone-code-geo-feedback-loop-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|firstName|String|true||
|lastName|String|true||
|phoneNumber|String|true||
|phoneNumberE164|String|true||
|countryIso2|String|true||








> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "internationalPhoneNumberVerified": "String",
  "phoneCountryIso2Verified": "String",
  "phoneCountryCode": "Integer",
  "phoneCountryCodeAlt": "Integer",
  "phoneCountryIso2": "String",
  "phoneCountryIso2Alt": "String",
  "originCountryIso2": "String",
  "originCountryIso2Alt": "String",
  "phoneNumber": "String",
  "verified": "Boolean",
  "score": "Number",
  "countryIso2": "String"
}
```

<h3 id="phone-code-geo-feedback-loop-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|internationalPhoneNumberVerified|String|||
|phoneCountryIso2Verified|String|||
|phoneCountryCode|Integer|||
|phoneCountryCodeAlt|Integer|||
|phoneCountryIso2|String|||
|phoneCountryIso2Alt|String|||
|originCountryIso2|String|||
|originCountryIso2Alt|String|||
|phoneNumber|String|||
|verified|Boolean|||
|score|Number|||
|countryIso2|String|||











<h1 id="namsor-api-v2-chinese">Chinese</h1>

CHINESE special features

## Chinese Name Candidates

<a id="opIdChinese-Name-Candidates"></a>

> **Chinese Name Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}", {
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



*Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-candidates-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}`

<h3 id="chinese-name-candidates-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true||
|chineseGivenNameLatin|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "orderOption": "String",
  "matchCandidates": [
    {
      "candidateName": "String",
      "probability": "Number",
      "predScoreGivenName": "Number",
      "predScoreFamilyName": "Number"
    }
  ]
}
```

<h3 id="chinese-name-candidates-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Chinese Name Candidates Batch

<a id="opIdChinese-Name-Candidates-Batch"></a>

> **Chinese Name Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-candidates-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch`

<h3 id="chinese-name-candidates-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "orderOption": "String",
      "matchCandidates": [
        {
          "candidateName": "String",
          "probability": "Number",
          "predScoreGivenName": "Number",
          "predScoreFamilyName": "Number"
        }
      ]
    }
  ]
}
```

<h3 id="chinese-name-candidates-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Chinese Name Candidates Gender Batch

<a id="opIdChinese-Name-Candidates-Gender-Batch"></a>

> **Chinese Name Candidates Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","gender":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"gender\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "gender": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"gender\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "gender": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-candidates-gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch`

<h3 id="chinese-name-candidates-gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|gender|String|false||




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "orderOption": "String",
      "matchCandidates": [
        {
          "candidateName": "String",
          "probability": "Number",
          "predScoreGivenName": "Number",
          "predScoreFamilyName": "Number"
        }
      ]
    }
  ]
}
```

<h3 id="chinese-name-candidates-gender-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Chinese Name Gender Candidates

<a id="opIdChinese-Name-Gender-Candidates"></a>

> **Chinese Name Gender Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}", {
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



*Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-gender-candidates-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}`

<h3 id="chinese-name-gender-candidates-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true||
|chineseGivenNameLatin|String|true||
|knownGender|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "latinName": "String",
  "originalName": "String",
  "sourceLanguage": "String",
  "targetLanguage": "String",
  "sourceScript": "String",
  "targetScript": "String",
  "score": "Number"
}
```

<h3 id="chinese-name-gender-candidates-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|latinName|String|||
|originalName|String|||
|sourceLanguage|String|||
|targetLanguage|String|||
|sourceScript|String|||
|targetScript|String|||
|score|Number|||











## Chinese Name Match

<a id="opIdChinese-Name-Match"></a>

> **Chinese Name Match** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}", {
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



*Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-match-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}`

<h3 id="chinese-name-match-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true||
|chineseGivenNameLatin|String|true||
|chineseName|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "matchStatus": "String",
  "score": "Number"
}
```

<h3 id="chinese-name-match-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|||
|score|Number|||











## Chinese Name Match Batch

<a id="opIdChinese-Name-Match-Batch"></a>

> **Chinese Name Match Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name1":{"id":"String","firstName":"String","lastName":"String"},"name2":{"id":"String","name":"String"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name1\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"},\"name2\":{\"id\":\"String\",\"name\":\"String\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name1": {
                "id": "String",
                "firstName": "String",
                "lastName": "String"
            },
            "name2": {
                "id": "String",
                "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name1\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"},\"name2\":{\"id\":\"String\",\"name\":\"String\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name1": {
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "name2": {
        "id": "String",
        "name": "String"
      }
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-match-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch`

<h3 id="chinese-name-match-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name1|Object|false||
|name2|Object|false||




> The above command returns JSON structured like this:



```json
{
  "matchedNames": [
    {
      "script": "String",
      "id": "String",
      "matchStatus": "String",
      "score": "Number"
    }
  ]
}
```

<h3 id="chinese-name-match-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|||
|score|Number|||











## Gender Chinese Name

<a id="opIdGender-Chinese-Name"></a>

> **Gender Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}", {
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



*Infer the likely gender of a Chinese full name ex. 王晓明*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-chinese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}`

<h3 id="gender-chinese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-chinese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Chinese Name Batch

<a id="opIdGender-Chinese-Name-Batch"></a>

> **Gender Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 full names ex. 王晓明*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-chinese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch`

<h3 id="gender-chinese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-chinese-name-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Chinese Name Pinyin

<a id="opIdGender-Chinese-Name-Pinyin"></a>

> **Gender Chinese Name Pinyin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}", {
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



*Infer the likely gender of a Chinese name in LATIN (Pinyin).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-chinese-name-pinyin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}`

<h3 id="gender-chinese-name-pinyin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseSurnameLatin|String|true||
|chineseGivenNameLatin|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-chinese-name-pinyin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Chinese Name Pinyin Batch

<a id="opIdGender-Chinese-Name-Pinyin-Batch"></a>

> **Gender Chinese Name Pinyin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-chinese-name-pinyin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch`

<h3 id="gender-chinese-name-pinyin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-chinese-name-pinyin-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Parse Chinese Name

<a id="opIdParse-Chinese-Name"></a>

> **Parse Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}", {
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



*Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-chinese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}`

<h3 id="parse-chinese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "nameParserType": "String",
  "nameParserTypeAlt": "String",
  "firstLastName": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String"
  },
  "score": "Number"
}
```

<h3 id="parse-chinese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Parse Chinese Name Batch

<a id="opIdParse-Chinese-Name-Batch"></a>

> **Parse Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-chinese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch`

<h3 id="parse-chinese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "nameParserType": "String",
      "nameParserTypeAlt": "String",
      "firstLastName": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "score": "Number"
    }
  ]
}
```

<h3 id="parse-chinese-name-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Pinyin Chinese Name

<a id="opIdPinyin-Chinese-Name"></a>

> **Pinyin Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}", {
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



*Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="pinyin-chinese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}`

<h3 id="pinyin-chinese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|chineseName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "nameParserType": "String",
  "nameParserTypeAlt": "String",
  "firstLastName": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String"
  },
  "score": "Number"
}
```

<h3 id="pinyin-chinese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Pinyin Chinese Name Batch

<a id="opIdPinyin-Chinese-Name-Batch"></a>

> **Pinyin Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="pinyin-chinese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch`

<h3 id="pinyin-chinese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "nameParserType": "String",
      "nameParserTypeAlt": "String",
      "firstLastName": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "score": "Number"
    }
  ]
}
```

<h3 id="pinyin-chinese-name-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











<h1 id="namsor-api-v2-japanese">Japanese</h1>

JAPANESE special features

## Gender Japanese Name Full

<a id="opIdGender-Japanese-Name-Full"></a>

> **Gender Japanese Name Full** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}", {
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



*Infer the likely gender of a Japanese full name ex. 王晓明*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-japanese-name-full-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}`

<h3 id="gender-japanese-name-full-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-japanese-name-full-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Japanese Name Full Batch

<a id="opIdGender-Japanese-Name-Full-Batch"></a>

> **Gender Japanese Name Full Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 full names*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-japanese-name-full-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch`

<h3 id="gender-japanese-name-full-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-japanese-name-full-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Japanese Name Pinyin

<a id="opIdGender-Japanese-Name-Pinyin"></a>

> **Gender Japanese Name Pinyin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}", {
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



*Infer the likely gender of a Japanese name in LATIN (Pinyin).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-japanese-name-pinyin-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}`

<h3 id="gender-japanese-name-pinyin-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurname|String|true||
|japaneseGivenName|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "likelyGender": "String",
  "genderScale": "Number",
  "score": "Number",
  "probabilityCalibrated": "Number"
}
```

<h3 id="gender-japanese-name-pinyin-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Gender Japanese Name Pinyin Batch

<a id="opIdGender-Japanese-Name-Pinyin-Batch"></a>

> **Gender Japanese Name Pinyin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="gender-japanese-name-pinyin-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch`

<h3 id="gender-japanese-name-pinyin-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "likelyGender": "String",
      "genderScale": "Number",
      "score": "Number",
      "probabilityCalibrated": "Number"
    }
  ]
}
```

<h3 id="gender-japanese-name-pinyin-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|likelyGender|String|Most likely gender|"male", "female" or "unknown"|
|genderScale|Number|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value||
|score|Number|||
|probabilityCalibrated|Number|||











## Japanese Name Gender Kanji Candidates Batch

<a id="opIdJapanese-Name-Gender-Kanji-Candidates-Batch"></a>

> **Japanese Name Gender Kanji Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String","gender":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"gender\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String",
            "gender": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\",\"gender\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "gender": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-gender-kanji-candidates-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameGenderKanjiCandidatesBatch`

<h3 id="japanese-name-gender-kanji-candidates-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|gender|String|false||




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "orderOption": "String",
      "matchCandidates": [
        {
          "candidateName": "String",
          "probability": "Number",
          "predScoreGivenName": "Number",
          "predScoreFamilyName": "Number"
        }
      ]
    }
  ]
}
```

<h3 id="japanese-name-gender-kanji-candidates-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Kanji Candidates

<a id="opIdJapanese-Name-Kanji-Candidates"></a>

> **Japanese Name Kanji Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}", {
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



*Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-kanji-candidates-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}`

<h3 id="japanese-name-kanji-candidates-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true||
|japaneseGivenNameLatin|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "orderOption": "String",
  "matchCandidates": [
    {
      "candidateName": "String",
      "probability": "Number",
      "predScoreGivenName": "Number",
      "predScoreFamilyName": "Number"
    }
  ]
}
```

<h3 id="japanese-name-kanji-candidates-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Nogender Kanji Candidates

<a id="opIdJapanese-Name-Nogender-Kanji-Candidates"></a>

> **Japanese Name Nogender Kanji Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}", {
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



*Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-nogender-kanji-candidates-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}`

<h3 id="japanese-name-nogender-kanji-candidates-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true||
|japaneseGivenNameLatin|String|true||
|knownGender|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "orderOption": "String",
  "matchCandidates": [
    {
      "candidateName": "String",
      "probability": "Number",
      "predScoreGivenName": "Number",
      "predScoreFamilyName": "Number"
    }
  ]
}
```

<h3 id="japanese-name-nogender-kanji-candidates-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Kanji Candidates Batch

<a id="opIdJapanese-Name-Kanji-Candidates-Batch"></a>

> **Japanese Name Kanji Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-kanji-candidates-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch`

<h3 id="japanese-name-kanji-candidates-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "orderOption": "String",
      "matchCandidates": [
        {
          "candidateName": "String",
          "probability": "Number",
          "predScoreGivenName": "Number",
          "predScoreFamilyName": "Number"
        }
      ]
    }
  ]
}
```

<h3 id="japanese-name-kanji-candidates-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Latin Candidates

<a id="opIdJapanese-Name-Latin-Candidates"></a>

> **Japanese Name Latin Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}", {
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



*Romanize japanese name, based on the name in Kanji.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-latin-candidates-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}`

<h3 id="japanese-name-latin-candidates-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameKanji|String|true||
|japaneseGivenNameKanji|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "firstName": "String",
  "lastName": "String",
  "orderOption": "String",
  "matchCandidates": [
    {
      "candidateName": "String",
      "probability": "Number",
      "predScoreGivenName": "Number",
      "predScoreFamilyName": "Number"
    }
  ]
}
```

<h3 id="japanese-name-latin-candidates-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Latin Candidates Batch

<a id="opIdJapanese-Name-Latin-Candidates-Batch"></a>

> **Japanese Name Latin Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","firstName":"String","lastName":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "firstName": "String",
            "lastName": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Romanize japanese names, based on the name in KANJI*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "firstName": "String",
      "lastName": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-latin-candidates-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch`

<h3 id="japanese-name-latin-candidates-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
{
  "namesAndMatchCandidates": [
    {
      "script": "String",
      "id": "String",
      "firstName": "String",
      "lastName": "String",
      "orderOption": "String",
      "matchCandidates": [
        {
          "candidateName": "String",
          "probability": "Number",
          "predScoreGivenName": "Number",
          "predScoreFamilyName": "Number"
        }
      ]
    }
  ]
}
```

<h3 id="japanese-name-latin-candidates-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|firstName|String|||
|lastName|String|||
|orderOption|String|||
|**matchCandidates**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].candidateName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probability*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreGivenName*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].predScoreFamilyName*|Number|||











## Japanese Name Match

<a id="opIdJapanese-Name-Match"></a>

> **Japanese Name Match** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", {
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



*Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-match-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

<h3 id="japanese-name-match-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true||
|japaneseGivenNameLatin|String|true||
|japaneseName|String|true||






> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "matchStatus": "String",
  "score": "Number"
}
```

<h3 id="japanese-name-match-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|||
|score|Number|||











## Japanese Name Match Batch

<a id="opIdJapanese-Name-Match-Batch"></a>

> **Japanese Name Match Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name1":{"id":"String","firstName":"String","lastName":"String"},"name2":{"id":"String","name":"String"}}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name1\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"},\"name2\":{\"id\":\"String\",\"name\":\"String\"}}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name1": {
                "id": "String",
                "firstName": "String",
                "lastName": "String"
            },
            "name2": {
                "id": "String",
                "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name1\":{\"id\":\"String\",\"firstName\":\"String\",\"lastName\":\"String\"},\"name2\":{\"id\":\"String\",\"name\":\"String\"}}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae*

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name1": {
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "name2": {
        "id": "String",
        "name": "String"
      }
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-match-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch`

<h3 id="japanese-name-match-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name1|Object|false||
|name2|Object|false||




> The above command returns JSON structured like this:



```json
{
  "matchedNames": [
    {
      "script": "String",
      "id": "String",
      "matchStatus": "String",
      "score": "Number"
    }
  ]
}
```

<h3 id="japanese-name-match-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|matchStatus|String|||
|score|Number|||











## Japanese Name Match Feedback Loop

<a id="opIdJapanese-Name-Match-Feedback-Loop"></a>

> **Japanese Name Match Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", {
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



*Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae*

*<u>Cost :</u> The processing of each name requires ** 1** credits.*

<h3 id="japanese-name-match-feedback-loop-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

<h3 id="japanese-name-match-feedback-loop-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseSurnameLatin|String|true||
|japaneseGivenNameLatin|String|true||
|japaneseName|String|true||






> The above command returns JSON structured like this:



```json
{
  "feedbackCredits": "Integer"
}
```

<h3 id="japanese-name-match-feedback-loop-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|feedbackCredits|Integer|||











## Parse Japanese Name

<a id="opIdParse-Japanese-Name"></a>

> **Parse Japanese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}", {
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



*Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-japanese-name-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}`

<h3 id="parse-japanese-name-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|japaneseName|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "nameParserType": "String",
  "nameParserTypeAlt": "String",
  "firstLastName": {
    "script": "String",
    "id": "String",
    "firstName": "String",
    "lastName": "String"
  },
  "score": "Number"
}
```

<h3 id="parse-japanese-name-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











## Parse Japanese Name Batch

<a id="opIdParse-Japanese-Name-Batch"></a>

> **Parse Japanese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"personalNames":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch"

payload = {"personalNames": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"personalNames\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae *

> Body parameter

```json
{
  "personalNames": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parse-japanese-name-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch`

<h3 id="parse-japanese-name-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "personalNames": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "nameParserType": "String",
      "nameParserTypeAlt": "String",
      "firstLastName": {
        "script": "String",
        "id": "String",
        "firstName": "String",
        "lastName": "String"
      },
      "score": "Number"
    }
  ]
}
```

<h3 id="parse-japanese-name-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|nameParserType|String|||
|nameParserTypeAlt|String|||
|**firstLastName**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.script*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.id*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.firstName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.lastName*|String|||
|score|Number|||











<h1 id="namsor-api-v2-admin">Admin</h1>

Administrative, system management.

## Anonymize

<a id="opIdAnonymize"></a>

> **Anonymize** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}", {
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



*Activate/deactivate anonymization for a source.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="anonymize-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/{source}/{anonymized}`

<h3 id="anonymize-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true||
|anonymized|Boolean|true||





<h3 id="anonymize-responses">Response</h3>

!{response-table-tag}








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



*Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices. *

> The above command returns JSON structured like this:



```json
{
  "softwareVersion": {
    "softwareNameAndVersion": "String",
    "softwareVersion": "Array"
  },
  "classifiers": [
    {
      "classifierName": "String",
      "serving": "Boolean",
      "learning": "Boolean",
      "shuttingDown": "Boolean",
      "probabilityCalibrated": "Boolean"
    }
  ]
}
```

<h3 id="api-status-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**softwareVersion**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softwareNameAndVersion*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softwareVersion*|Array|||
|**classifiers**|**Array of Objects**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].classifierName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].serving*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].learning*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].shuttingDown*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;[ {...} ].probabilityCalibrated*|Boolean|||











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



*Print current API usage.*

> The above command returns JSON structured like this:



```json
{
  "subscription": {
    "apiKey": "String",
    "planStarted": "Integer",
    "priorPlanStarted": "Integer",
    "planEnded": "Integer",
    "taxRate": "Number",
    "planName": "String",
    "planBaseFeesKey": "String",
    "planStatus": "String",
    "planQuota": "Integer",
    "priceUSD": "Number",
    "priceOverageUSD": "Number",
    "price": "Number",
    "priceOverage": "Number",
    "currency": "String",
    "currencyFactor": "Number",
    "stripeCustomerId": "String",
    "stripeStatus": "String",
    "stripeSubscription": "String",
    "userId": "String"
  },
  "billingPeriod": {
    "apiKey": "String",
    "subscriptionStarted": "Integer",
    "periodStarted": "Integer",
    "periodEnded": "Integer",
    "stripeCurrentPeriodEnd": "Integer",
    "stripeCurrentPeriodStart": "Integer",
    "billingStatus": "String",
    "usage": "Integer",
    "softLimit": "Integer",
    "hardLimit": "Integer"
  },
  "overageExclTax": "Number",
  "overageInclTax": "Number",
  "overageCurrency": "String",
  "overageQuantity": "Integer"
}
```

<h3 id="api-usage-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**subscription**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priorPlanStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planEnded*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.taxRate*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planBaseFeesKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planQuota*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceUSD*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverageUSD*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.price*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverage*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currency*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currencyFactor*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCustomerId*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeSubscription*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.userId*|String|||
|**billingPeriod**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subscriptionStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodEnded*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodEnd*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodStart*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.billingStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.usage*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softLimit*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.hardLimit*|Integer|||
|overageExclTax|Number|||
|overageInclTax|Number|||
|overageCurrency|String|||
|overageQuantity|Integer|||











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



*Print historical API usage.*

> The above command returns JSON structured like this:



```json
{
  "detailedUsage": [
    {
      "apiKey": {
        "apiKey": "String",
        "userId": "String",
        "admin": "Boolean",
        "vetted": "Boolean",
        "learnable": "Boolean",
        "anonymized": "Boolean",
        "partner": "Boolean",
        "striped": "Boolean",
        "corporate": "Boolean",
        "disabled": "Boolean"
      },
      "apiService": "String",
      "createdDateTime": "Integer",
      "totalUsage": "Integer",
      "lastFlushedDateTime": "Integer",
      "lastUsedDateTime": "Integer",
      "serviceFeaturesUsage": "Object"
    }
  ]
}
```

<h3 id="api-usage-history-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**apiKey**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.userId*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.admin*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.vetted*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.learnable*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.anonymized*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.partner*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.striped*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.corporate*|Boolean|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.disabled*|Boolean|||
|apiService|String|||
|createdDateTime|Integer|||
|totalUsage|Integer|||
|lastFlushedDateTime|Integer|||
|lastUsedDateTime|Integer|||
|serviceFeaturesUsage|Object|||











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



*Print historical API usage (in an aggregated view, by service, by day/hour/min).*

> The above command returns JSON structured like this:



```json
{
  "subscription": {
    "apiKey": "String",
    "planStarted": "Integer",
    "priorPlanStarted": "Integer",
    "planEnded": "Integer",
    "taxRate": "Number",
    "planName": "String",
    "planBaseFeesKey": "String",
    "planStatus": "String",
    "planQuota": "Integer",
    "priceUSD": "Number",
    "priceOverageUSD": "Number",
    "price": "Number",
    "priceOverage": "Number",
    "currency": "String",
    "currencyFactor": "Number",
    "stripeCustomerId": "String",
    "stripeStatus": "String",
    "stripeSubscription": "String",
    "userId": "String"
  },
  "billingPeriod": {
    "apiKey": "String",
    "subscriptionStarted": "Integer",
    "periodStarted": "Integer",
    "periodEnded": "Integer",
    "stripeCurrentPeriodEnd": "Integer",
    "stripeCurrentPeriodStart": "Integer",
    "billingStatus": "String",
    "usage": "Integer",
    "softLimit": "Integer",
    "hardLimit": "Integer"
  },
  "overageExclTax": "Number",
  "overageInclTax": "Number",
  "overageCurrency": "String",
  "overageQuantity": "Integer"
}
```

<h3 id="api-usage-history-aggregate-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|**subscription**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priorPlanStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planEnded*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.taxRate*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planName*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planBaseFeesKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.planQuota*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceUSD*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverageUSD*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.price*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.priceOverage*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currency*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.currencyFactor*|Number|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCustomerId*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeSubscription*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.userId*|String|||
|**billingPeriod**|**Object**|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.apiKey*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.subscriptionStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodStarted*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.periodEnded*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodEnd*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.stripeCurrentPeriodStart*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.billingStatus*|String|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.usage*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.softLimit*|Integer|||
|*&nbsp;&nbsp;&nbsp;&nbsp;{...}.hardLimit*|Integer|||
|overageExclTax|Number|||
|overageInclTax|Number|||
|overageCurrency|String|||
|overageQuantity|Integer|||











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



*List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.*

> The above command returns JSON structured like this:



```json
{
  "apiServices": [
    {
      "serviceName": "String",
      "serviceGroup": "String",
      "costInUnits": "Integer"
    }
  ]
}
```

<h3 id="available-services-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|serviceName|String|||
|serviceGroup|String|||
|costInUnits|Integer|||











## Learnable

<a id="opIdLearnable"></a>

> **Learnable** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}", {
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



*Activate/deactivate learning from a source.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="learnable-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/{source}/{learnable}`

<h3 id="learnable-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true||
|learnable|Boolean|true||





<h3 id="learnable-responses">Response</h3>

!{response-table-tag}








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



*Get the current software version*

> The above command returns JSON structured like this:



```json
{
  "softwareNameAndVersion": "String",
  "softwareVersion": "Array"
}
```

<h3 id="software-version-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|softwareNameAndVersion|String|||
|softwareVersion|Array|||











## Taxonomy Classes

<a id="opIdTaxonomy-Classes"></a>

> **Taxonomy Classes** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}", {
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



*Print the taxonomy classes valid for the given classifier.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="taxonomy-classes-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}`

<h3 id="taxonomy-classes-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|classifierName|String|true||




> The above command returns JSON structured like this:



```json
{
  "classifierName": "String",
  "taxonomyClasses": "Array"
}
```

<h3 id="taxonomy-classes-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|classifierName|String|||
|taxonomyClasses|Array|||











<h1 id="namsor-api-v2-general">General</h1>

## Name Type

<a id="opIdName-Type"></a>

> **Name Type** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}", {
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



*Infer the likely type of a proper noun (personal name, brand name, place name etc.)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="name-type-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}`

<h3 id="name-type-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|properNoun|String|true||




> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "commonType": "String",
  "commonTypeAlt": "String",
  "score": "Number"
}
```

<h3 id="name-type-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|commonType|String|||
|commonTypeAlt|String|||
|score|Number|||











## Name Type Batch

<a id="opIdName-Type-Batch"></a>

> **Name Type Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"properNouns":[{"id":"String","name":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"properNouns\":[{\"id\":\"String\",\"name\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch"

payload = {"properNouns": [
        {
            "id": "String",
            "name": "String"
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
  "body": "{\"properNouns\":[{\"id\":\"String\",\"name\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)*

> Body parameter

```json
{
  "properNouns": [
    {
      "id": "String",
      "name": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="name-type-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeBatch`

<h3 id="name-type-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||




> The above command returns JSON structured like this:



```json
{
  "properNouns": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "commonType": "String",
      "commonTypeAlt": "String",
      "score": "Number"
    }
  ]
}
```

<h3 id="name-type-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|commonType|String|||
|commonTypeAlt|String|||
|score|Number|||











## Name Type Geo

<a id="opIdName-Type-Geo"></a>

> **Name Type Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2} \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2}")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2}"

headers = {
 "Accept": "application/json",
 "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2}", {
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



*Infer the likely type of a proper noun (personal name, brand name, place name etc.)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="name-type-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeo/{properNoun}/{countryIso2}`

<h3 id="name-type-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|properNoun|String|true||
|countryIso2|String|true||





> The above command returns JSON structured like this:



```json
{
  "script": "String",
  "id": "String",
  "name": "String",
  "commonType": "String",
  "commonTypeAlt": "String",
  "score": "Number"
}
```

<h3 id="name-type-geo-responses">Response</h3>

*The HTTP response body is an object.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|commonType|String|||
|commonTypeAlt|String|||
|score|Number|||











## Name Type Geo Batch

<a id="opIdName-Type-Geo-Batch"></a>

> **Name Type Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch \
  --header 'X-API-KEY: your-api-key' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '{"properNouns":[{"id":"String","name":"String","countryIso2":"String"}]}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .body("{\"properNouns\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch"

payload = {"properNouns": [
        {
            "id": "String",
            "name": "String",
            "countryIso2": "String"
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
  "body": "{\"properNouns\":[{\"id\":\"String\",\"name\":\"String\",\"countryIso2\":\"String\"}]}"
})
.then(response => {
  console.log(response.json());
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)*

> Body parameter

```json
{
  "properNouns": [
    {
      "id": "String",
      "name": "String",
      "countryIso2": "String"
    }
  ]
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="name-type-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/nameTypeGeoBatch`

<h3 id="name-type-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|name|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
{
  "properNouns": [
    {
      "script": "String",
      "id": "String",
      "name": "String",
      "commonType": "String",
      "commonTypeAlt": "String",
      "score": "Number"
    }
  ]
}
```

<h3 id="name-type-geo-batch-responses">Response</h3>

*The HTTP response body is an array of objects.*

|Name|Type|Description|Enumerators|
|---|---|---|---|
|script|String|||
|id|String|||
|name|String|||
|commonType|String|||
|commonTypeAlt|String|||
|score|Number|||











