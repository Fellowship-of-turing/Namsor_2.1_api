---
title: NamSor API v2 v2.0.11
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
includes: []
search: true
highlight_theme: monokai
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="namsor-api-v2">NamSor API v2 v2.0.11</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 

Base URLs:

* <a href="https://v2.namsor.com/NamSorAPIv2">https://v2.namsor.com/NamSorAPIv2</a>

Email: <a href="mailto:contact@namsor.com">Namsor SAS</a> Web: <a href="http://www.namsor.com/">Namsor SAS</a> 
License: <a href="https://v2.namsor.com/NamSorAPIv2/assets/pdf/201803_NamSor_API_Terms_v007.pdf">NamSorAPI_Lic_v0.0.7</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-API-KEY**, in: header. api_key required

<h1 id="namsor-api-v2-personal">Personal</h1>

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

## country

<a id="opIdcountry"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/country/Mary%20Sanders \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/country/Mary%20Sanders")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/country/Mary%20Sanders"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/country/Mary%20Sanders", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/country/{personalNameFull}`

*[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.*

<h3 id="country-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|personalNameFull|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "country": {
      "type": "string"
    },
    "countryAlt": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "topRegion": {
      "type": "string"
    },
    "subRegion": {
      "type": "string"
    },
    "countriesTop": {
      "type": "array",
      "description": "List countries (top 10)",
      "items": {
        "type": "string",
        "description": "List countries (top 10)"
      }
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGeoOut"
  }
}
```

<h3 id="country-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[PersonalNameGeoOut](#schemapersonalnamegeoout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## origin

<a id="opIdorigin"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/origin/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/origin/{firstName}/{lastName}`

*[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.*

<h3 id="origin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
  "xml": {
    "name": "FirstLastNameOriginedOut"
  }
}
```

<h3 id="origin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## gender

<a id="opIdgender"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/gender/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/gender/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/gender/{firstName}/{lastName}`

*Infer the likely gender of a name.*

<h3 id="gender-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a personal name.",
  "xml": {
    "name": "FirstLastNameGenderedOut"
  }
}
```

<h3 id="gender-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderGeo

<a id="opIdgenderGeo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}`

*Infer the likely gender of a name, given a local context (ISO2 country code).*

<h3 id="gendergeo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a personal name.",
  "xml": {
    "name": "FirstLastNameGenderedOut"
  }
}
```

<h3 id="gendergeo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderGeoBatch

<a id="opIdgenderGeoBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderGeoBatch`

*Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="gendergeobatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of names, with country code.|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="gendergeobatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderBatch

<a id="opIdgenderBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderBatch`

*Infer the likely gender of up to 100 names, detecting automatically the cultural context.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="genderbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="genderbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parsedGenderBatch

<a id="opIdparsedGenderBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","prefixOrTitle":"string","suffix":"string","middleName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"prefixOrTitle\":\"string\",\"suffix\":\"string\",\"middleName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "prefixOrTitle": "string",
        "suffix": "string",
        "middleName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"prefixOrTitle\":\"string\",\"suffix\":\"string\",\"middleName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parsedGenderBatch`

*Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "prefixOrTitle": "string",
    "suffix": "string",
    "middleName": "string"
  }
]
```

<h3 id="parsedgenderbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="parsedgenderbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parsedGenderGeoBatch

<a id="opIdparsedGenderGeoBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","prefixOrTitle":"string","suffix":"string","middleName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"prefixOrTitle\":\"string\",\"suffix\":\"string\",\"middleName\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "prefixOrTitle": "string",
        "suffix": "string",
        "middleName": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"prefixOrTitle\":\"string\",\"suffix\":\"string\",\"middleName\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parsedGenderGeoBatch`

*Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "prefixOrTitle": "string",
    "suffix": "string",
    "middleName": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="parsedgendergeobatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="parsedgendergeobatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderFullGeo

<a id="opIdgenderFullGeo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderFullGeo/{fullName}/{countryIso2}`

*Infer the likely gender of a full name, given a local context (ISO2 country code).*

<h3 id="genderfullgeo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fullName|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGenderedOut"
  }
}
```

<h3 id="genderfullgeo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderFull

<a id="opIdgenderFull"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderFull/{fullName}`

*Infer the likely gender of a full name, ex. John H. Smith*

<h3 id="genderfull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fullName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGenderedOut"
  }
}
```

<h3 id="genderfull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderFullBatch

<a id="opIdgenderFullBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderFullBatch`

*Infer the likely gender of up to 100 full names, detecting automatically the cultural context.*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="genderfullbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGenderedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGenderedOut"
  }
}
```

<h3 id="genderfullbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderFullGeoBatch

<a id="opIdgenderFullGeoBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch"

payload = [
    {
        "id": "string",
        "name": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderFullGeoBatch`

*Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="genderfullgeobatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names, with a country ISO2 code|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGenderedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGenderedOut"
  }
}
```

<h3 id="genderfullgeobatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## originBatch

<a id="opIdoriginBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/originBatch`

*[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="originbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "countryOrigin": {
            "type": "string",
            "description": "Most likely country of Origin"
          },
          "countryOriginAlt": {
            "type": "string",
            "description": "Second best alternative : country of Origin"
          },
          "countriesOriginTop": {
            "type": "array",
            "description": "List countries of Origin (top 10)",
            "items": {
              "type": "string",
              "description": "List countries of Origin (top 10)"
            }
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "regionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "topRegionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "subRegionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
        "xml": {
          "name": "FirstLastNameOriginedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY origin from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameOriginedOut"
  }
}
```

<h3 id="originbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameOriginedOut](#schemabatchfirstlastnameoriginedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## countryBatch

<a id="opIdcountryBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/countryBatch`

*[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="countrybatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "country": {
            "type": "string"
          },
          "countryAlt": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "topRegion": {
            "type": "string"
          },
          "subRegion": {
            "type": "string"
          },
          "countriesTop": {
            "type": "array",
            "description": "List countries (top 10)",
            "items": {
              "type": "string",
              "description": "List countries (top 10)"
            }
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGeoOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGeoOut"
  }
}
```

<h3 id="countrybatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchPersonalNameGeoOut](#schemabatchpersonalnamegeoout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## usRaceEthnicity

<a id="opIdusRaceEthnicity"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/usRaceEthnicity/{firstName}/{lastName}`

*[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).*

<h3 id="usraceethnicity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "raceEthnicityAlt": {
      "type": "string",
      "description": "Second most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "raceEthnicity": {
      "type": "string",
      "description": "Most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "raceEthnicitiesTop": {
      "type": "array",
      "description": "List 'race'/ethnicities",
      "items": {
        "type": "string",
        "description": "List 'race'/ethnicities"
      }
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "FirstLastNameUSRaceEthnicityOut"
  }
}
```

<h3 id="usraceethnicity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).|[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## usRaceEthnicityZIP5

<a id="opIdusRaceEthnicityZIP5"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}`

*[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).*

<h3 id="usraceethnicityzip5-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|zip5Code|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "raceEthnicityAlt": {
      "type": "string",
      "description": "Second most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "raceEthnicity": {
      "type": "string",
      "description": "Most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "raceEthnicitiesTop": {
      "type": "array",
      "description": "List 'race'/ethnicities",
      "items": {
        "type": "string",
        "description": "List 'race'/ethnicities"
      }
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "FirstLastNameUSRaceEthnicityOut"
  }
}
```

<h3 id="usraceethnicityzip5-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).|[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## usRaceEthnicityBatch

<a id="opIdusRaceEthnicityBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/usRaceEthnicityBatch`

*[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="usraceethnicitybatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "raceEthnicityAlt": {
            "type": "string",
            "description": "Second most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "raceEthnicity": {
            "type": "string",
            "description": "Most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "raceEthnicitiesTop": {
            "type": "array",
            "description": "List 'race'/ethnicities",
            "items": {
              "type": "string",
              "description": "List 'race'/ethnicities"
            }
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
        "xml": {
          "name": "FirstLastNameUSRaceEthnicityOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "BatchFirstLastNameUSRaceEthnicityOut"
  }
}
```

<h3 id="usraceethnicitybatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).|[BatchFirstLastNameUSRaceEthnicityOut](#schemabatchfirstlastnameusraceethnicityout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## usZipRaceEthnicityBatch

<a id="opIdusZipRaceEthnicityBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string","zipCode":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\",\"zipCode\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "countryIso2": "string",
        "zipCode": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\",\"zipCode\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/usZipRaceEthnicityBatch`

*[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "countryIso2": "string",
    "zipCode": "string"
  }
]
```

<h3 id="uszipraceethnicitybatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "raceEthnicityAlt": {
            "type": "string",
            "description": "Second most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "raceEthnicity": {
            "type": "string",
            "description": "Most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "raceEthnicitiesTop": {
            "type": "array",
            "description": "List 'race'/ethnicities",
            "items": {
              "type": "string",
              "description": "List 'race'/ethnicities"
            }
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
        "xml": {
          "name": "FirstLastNameUSRaceEthnicityOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "BatchFirstLastNameUSRaceEthnicityOut"
  }
}
```

<h3 id="uszipraceethnicitybatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).|[BatchFirstLastNameUSRaceEthnicityOut](#schemabatchfirstlastnameusraceethnicityout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## diaspora

<a id="opIddiaspora"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/diaspora/{countryIso2}/{firstName}/{lastName}`

*[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)*

<h3 id="diaspora-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|countryIso2|path|string|true|none|
|firstName|path|string|true|none|
|lastName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "ethnicity": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lifted": {
      "type": "boolean",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
  "xml": {
    "name": "FirstLastNameDiasporaedOut"
  }
}
```

<h3 id="diaspora-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A diaspora / ethnicity for given name and geography.|[FirstLastNameDiasporaedOut](#schemafirstlastnamediasporaedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## diasporaBatch

<a id="opIddiasporaBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/diasporaBatch`

*[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="diasporabatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "ethnicityAlt": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "ethnicity": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lifted": {
            "type": "boolean",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "ethnicitiesTop": {
            "type": "array",
            "description": "List ethnicities (top 10)",
            "items": {
              "type": "string",
              "description": "List ethnicities (top 10)"
            }
          }
        },
        "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
        "xml": {
          "name": "FirstLastNameDiasporaedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
  "xml": {
    "name": "BatchFirstLastNameDiasporaedOut"
  }
}
```

<h3 id="diasporabatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of diaspora / ethnicity given a name and residency.|[BatchFirstLastNameDiasporaedOut](#schemabatchfirstlastnamediasporaedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseNameGeo

<a id="opIdparseNameGeo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/parseName/{nameFull}/{countryIso2}`

*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.*

<h3 id="parsenamegeo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameFull|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}
```

<h3 id="parsenamegeo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseNameBatch

<a id="opIdparseNameBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parseNameBatch`

*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="parsenamebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}
```

<h3 id="parsenamebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseNameGeoBatch

<a id="opIdparseNameGeoBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\",\"countryIso2\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch"

payload = [
    {
        "id": "string",
        "name": "string",
        "countryIso2": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\",\"countryIso2\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parseNameGeoBatch`

*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. *

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string",
    "countryIso2": "string"
  }
]
```

<h3 id="parsenamegeobatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}
```

<h3 id="parsenamegeobatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseName

<a id="opIdparseName"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/parseName/{nameFull}`

*Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. *

<h3 id="parsename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nameFull|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}
```

<h3 id="parsename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-social">Social</h1>

Social media and pseudonyms

## phoneCode

<a id="opIdphoneCode"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}`

*[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.*

<h3 id="phonecode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "internationalPhoneNumberVerified": {
      "type": "string"
    },
    "phoneCountryIso2Verified": {
      "type": "string"
    },
    "phoneCountryCode": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryCodeAlt": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryIso2": {
      "type": "string"
    },
    "phoneCountryIso2Alt": {
      "type": "string"
    },
    "originCountryIso2": {
      "type": "string"
    },
    "originCountryIso2Alt": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    },
    "verified": {
      "type": "boolean"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "countryIso2": {
      "type": "string"
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
  "xml": {
    "name": "FirstLastNamePhoneCodedOut"
  }
}
```

<h3 id="phonecode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## phoneCodeGeo

<a id="opIdphoneCodeGeo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/type,string/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/type,string/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/type,string/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/type,string/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}`

*[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).*

<h3 id="phonecodegeo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "internationalPhoneNumberVerified": {
      "type": "string"
    },
    "phoneCountryIso2Verified": {
      "type": "string"
    },
    "phoneCountryCode": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryCodeAlt": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryIso2": {
      "type": "string"
    },
    "phoneCountryIso2Alt": {
      "type": "string"
    },
    "originCountryIso2": {
      "type": "string"
    },
    "originCountryIso2Alt": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    },
    "verified": {
      "type": "boolean"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "countryIso2": {
      "type": "string"
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
  "xml": {
    "name": "FirstLastNamePhoneCodedOut"
  }
}
```

<h3 id="phonecodegeo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## phoneCodeGeoFeedbackLoop

<a id="opIdphoneCodeGeoFeedbackLoop"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/type,string/type,string/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/type,string/type,string/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/type,string/type,string/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/type,string/type,string/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}`

*[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).*

<h3 id="phonecodegeofeedbackloop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|firstName|path|string|true|none|
|lastName|path|string|true|none|
|phoneNumber|path|string|true|none|
|phoneNumberE164|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "internationalPhoneNumberVerified": {
      "type": "string"
    },
    "phoneCountryIso2Verified": {
      "type": "string"
    },
    "phoneCountryCode": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryCodeAlt": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryIso2": {
      "type": "string"
    },
    "phoneCountryIso2Alt": {
      "type": "string"
    },
    "originCountryIso2": {
      "type": "string"
    },
    "originCountryIso2Alt": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    },
    "verified": {
      "type": "boolean"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "countryIso2": {
      "type": "string"
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
  "xml": {
    "name": "FirstLastNamePhoneCodedOut"
  }
}
```

<h3 id="phonecodegeofeedbackloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A name with country and phone code.|[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## phoneCodeBatch

<a id="opIdphoneCodeBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","phoneNumber":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"phoneNumber\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "phoneNumber": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"phoneNumber\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/phoneCodeBatch`

*[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string"
  }
]
```

<h3 id="phonecodebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNamesWithPhoneNumbers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "internationalPhoneNumberVerified": {
            "type": "string"
          },
          "phoneCountryIso2Verified": {
            "type": "string"
          },
          "phoneCountryCode": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryCodeAlt": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryIso2": {
            "type": "string"
          },
          "phoneCountryIso2Alt": {
            "type": "string"
          },
          "originCountryIso2": {
            "type": "string"
          },
          "originCountryIso2Alt": {
            "type": "string"
          },
          "phoneNumber": {
            "type": "string"
          },
          "verified": {
            "type": "boolean"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "countryIso2": {
            "type": "string"
          }
        },
        "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
        "xml": {
          "name": "FirstLastNamePhoneCodedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code of personal names+phones.",
  "xml": {
    "name": "BatchFirstLastNamePhoneCodedOut"
  }
}
```

<h3 id="phonecodebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNamePhoneCodedOut](#schemabatchfirstlastnamephonecodedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## phoneCodeGeoBatch

<a id="opIdphoneCodeGeoBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string","phoneNumber":"string","countryIso2":"string","countryIso2Alt":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"phoneNumber\":\"string\",\"countryIso2\":\"string\",\"countryIso2Alt\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string",
        "phoneNumber": "string",
        "countryIso2": "string",
        "countryIso2Alt": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\",\"phoneNumber\":\"string\",\"countryIso2\":\"string\",\"countryIso2Alt\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/phoneCodeGeoBatch`

*[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "countryIso2": "string",
    "countryIso2Alt": "string"
  }
]
```

<h3 id="phonecodegeobatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNamesWithPhoneNumbers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "internationalPhoneNumberVerified": {
            "type": "string"
          },
          "phoneCountryIso2Verified": {
            "type": "string"
          },
          "phoneCountryCode": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryCodeAlt": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryIso2": {
            "type": "string"
          },
          "phoneCountryIso2Alt": {
            "type": "string"
          },
          "originCountryIso2": {
            "type": "string"
          },
          "originCountryIso2Alt": {
            "type": "string"
          },
          "phoneNumber": {
            "type": "string"
          },
          "verified": {
            "type": "boolean"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "countryIso2": {
            "type": "string"
          }
        },
        "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
        "xml": {
          "name": "FirstLastNamePhoneCodedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code of personal names+phones.",
  "xml": {
    "name": "BatchFirstLastNamePhoneCodedOut"
  }
}
```

<h3 id="phonecodegeobatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNamePhoneCodedOut](#schemabatchfirstlastnamephonecodedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-chinese">Chinese</h1>

CHINESE special features

## parseChineseName

<a id="opIdparseChineseName"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/parseChineseName/{chineseName}`

*Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)*

<h3 id="parsechinesename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}
```

<h3 id="parsechinesename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseChineseNameBatch

<a id="opIdparseChineseNameBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parseChineseNameBatch`

*Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="parsechinesenamebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}
```

<h3 id="parsechinesenamebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## pinyinChineseName

<a id="opIdpinyinChineseName"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/pinyinChineseName/{chineseName}`

*Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)*

<h3 id="pinyinchinesename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}
```

<h3 id="pinyinchinesename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A pinyin name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## pinyinChineseNameBatch

<a id="opIdpinyinChineseNameBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/pinyinChineseNameBatch`

*Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="pinyinchinesenamebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of Chinese names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}
```

<h3 id="pinyinchinesenamebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of Pinyin names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameMatch

<a id="opIdchineseNameMatch"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}`

*Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming*

<h3 id="chinesenamematch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|
|chineseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="chinesenamematch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameMatchBatch

<a id="opIdchineseNameMatchBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/chineseNameMatchBatch`

*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="chinesenamematchbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="chinesenamematchbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderChineseNamePinyin

<a id="opIdgenderChineseNamePinyin"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}`

*Infer the likely gender of a Chinese name in LATIN (Pinyin).*

<h3 id="genderchinesenamepinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a personal name.",
  "xml": {
    "name": "FirstLastNameGenderedOut"
  }
}
```

<h3 id="genderchinesenamepinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderChineseNamePinyinBatch

<a id="opIdgenderChineseNamePinyinBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderChineseNamePinyinBatch`

*Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="genderchinesenamepinyinbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of names, with country code.|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="genderchinesenamepinyinbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderChineseName

<a id="opIdgenderChineseName"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderChineseName/{chineseName}`

*Infer the likely gender of a Chinese full name ex. 王晓明*

<h3 id="genderchinesename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGenderedOut"
  }
}
```

<h3 id="genderchinesename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderChineseNameBatch

<a id="opIdgenderChineseNameBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderChineseNameBatch`

*Infer the likely gender of up to 100 full names ex. 王晓明*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="genderchinesenamebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names, with a country ISO2 code|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGenderedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGenderedOut"
  }
}
```

<h3 id="genderchinesenamebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameCandidates

<a id="opIdchineseNameCandidates"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}`

*Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming*

<h3 id="chinesenamecandidates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="chinesenamecandidates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameCandidatesBatch

<a id="opIdchineseNameCandidatesBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/chineseNameCandidatesBatch`

*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="chinesenamecandidatesbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="chinesenamecandidatesbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameGenderCandidates

<a id="opIdchineseNameGenderCandidates"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}`

*Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')*

<h3 id="chinesenamegendercandidates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chineseSurnameLatin|path|string|true|none|
|chineseGivenNameLatin|path|string|true|none|
|knownGender|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="chinesenamegendercandidates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## chineseNameCandidatesGenderBatch

<a id="opIdchineseNameCandidatesGenderBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/chineseNameCandidatesGenderBatch`

*Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="chinesenamecandidatesgenderbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal Chinese names in LATIN, firstName = chineseGivenName; lastName=chineseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="chinesenamecandidatesgenderbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-japanese">Japanese</h1>

JAPANESE special features

## parseJapaneseName

<a id="opIdparseJapaneseName"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/parseJapaneseName/{japaneseName}`

*Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae*

<h3 id="parsejapanesename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}
```

<h3 id="parsejapanesename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A origined name.|[PersonalNameParsedOut](#schemapersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## parseJapaneseNameBatch

<a id="opIdparseJapaneseNameBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/parseJapaneseNameBatch`

*Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae *

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="parsejapanesenamebatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}
```

<h3 id="parsejapanesenamebatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of parsed names.|[BatchPersonalNameParsedOut](#schemabatchpersonalnameparsedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameKanjiCandidates

<a id="opIdjapaneseNameKanjiCandidates"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}`

*Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae*

<h3 id="japanesenamekanjicandidates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="japanesenamekanjicandidates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameLatinCandidates

<a id="opIdjapaneseNameLatinCandidates"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}`

*Romanize japanese name, based on the name in Kanji.*

<h3 id="japanesenamelatincandidates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameKanji|path|string|true|none|
|japaneseGivenNameKanji|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="japanesenamelatincandidates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameKanjiCandidatesBatch

<a id="opIdjapaneseNameKanjiCandidatesBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/japaneseNameKanjiCandidatesBatch`

*Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="japanesenamekanjicandidatesbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="japanesenamekanjicandidatesbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameLatinCandidatesBatch

<a id="opIdjapaneseNameLatinCandidatesBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/japaneseNameLatinCandidatesBatch`

*Romanize japanese names, based on the name in KANJI*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="japanesenamelatincandidatesbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal japanese names in KANJI, firstName = japaneseGivenName; lastName=japaneseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="japanesenamelatincandidatesbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameMatch

<a id="opIdjapaneseNameMatch"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

*Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae*

<h3 id="japanesenamematch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|
|japaneseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="japanesenamematch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameMatchFeedbackLoop

<a id="opIdjapaneseNameMatchFeedbackLoop"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/type,string/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/type,string/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/type,string/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/type,string/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}`

*[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae*

<h3 id="japanesenamematchfeedbackloop-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurnameLatin|path|string|true|none|
|japaneseGivenNameLatin|path|string|true|none|
|japaneseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}
```

<h3 id="japanesenamematchfeedbackloop-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A romanized name.|[RomanizedNameOut](#schemaromanizednameout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## japaneseNameMatchBatch

<a id="opIdjapaneseNameMatchBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/japaneseNameMatchBatch`

*Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="japanesenamematchbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal Japanese names in LATIN, firstName = japaneseGivenName; lastName=japaneseSurname|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}
```

<h3 id="japanesenamematchbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of matched names.|[BatchNameMatchCandidatesOut](#schemabatchnamematchcandidatesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderJapaneseNamePinyin

<a id="opIdgenderJapaneseNamePinyin"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}`

*Infer the likely gender of a Japanese name in LATIN (Pinyin).*

<h3 id="genderjapanesenamepinyin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseSurname|path|string|true|none|
|japaneseGivenName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a personal name.",
  "xml": {
    "name": "FirstLastNameGenderedOut"
  }
}
```

<h3 id="genderjapanesenamepinyin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderJapaneseNamePinyinBatch

<a id="opIdgenderJapaneseNamePinyinBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch"

payload = [
    {
        "id": "string",
        "firstName": "string",
        "lastName": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"firstName\":\"string\",\"lastName\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderJapaneseNameBatch`

*Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).*

> Body parameter

```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string"
  }
]
```

<h3 id="genderjapanesenamepinyinbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of names, with country code.|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}
```

<h3 id="genderjapanesenamepinyinbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchFirstLastNameGenderedOut](#schemabatchfirstlastnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderJapaneseNameFull

<a id="opIdgenderJapaneseNameFull"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/genderJapaneseNameFull/{japaneseName}`

*Infer the likely gender of a Japanese full name ex. 王晓明*

<h3 id="genderjapanesenamefull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|japaneseName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGenderedOut"
  }
}
```

<h3 id="genderjapanesenamefull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A genderized name.|[PersonalNameGenderedOut](#schemapersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## genderJapaneseNameFullBatch

<a id="opIdgenderJapaneseNameFullBatch"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: API_KEY' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("[{\"id\":\"string\",\"name\":\"string\"}]")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch"

payload = [
    {
        "id": "string",
        "name": "string"
    }
]
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
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
    "X-API-KEY": "API_KEY"
  },
  "body": "[{\"id\":\"string\",\"name\":\"string\"}]"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/genderJapaneseNameFullBatch`

*Infer the likely gender of up to 100 full names*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
```

<h3 id="genderjapanesenamefullbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|any|false|A list of personal names|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGenderedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGenderedOut"
  }
}
```

<h3 id="genderjapanesenamefullbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of genderized names.|[BatchPersonalNameGenderedOut](#schemabatchpersonalnamegenderedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-admin">Admin</h1>

Administrative, system management.

## stripeConnect

<a id="opIdstripeConnect"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/stripeConnect`

*Connects a Stripe Account.*

<h3 id="stripeconnect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|false|none|
|code|query|string|false|none|
|error|query|string|false|none|
|error_description|query|string|false|none|

<h3 id="stripeconnect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect email or payment token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## charge

<a id="opIdcharge"></a>



```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/charge \
  --header 'Accept: application/json' \
  --header 'Content-Type: */*' \
  --header 'X-API-KEY: API_KEY' \
  --data '{"type":"object","properties":{"stripeToken":{"type":"string"},"stripeEmail":{"type":"string"}}}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/charge")
  .header("Content-Type", "*/*")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("{\"type\":\"object\",\"properties\":{\"stripeToken\":{\"type\":\"string\"},\"stripeEmail\":{\"type\":\"string\"}}}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/charge"

payload = "{\"type\":\"object\",\"properties\":{\"stripeToken\":{\"type\":\"string\"},\"stripeEmail\":{\"type\":\"string\"}}}"
headers = {
    "Content-Type": "*/*",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/charge", {
  "method": "POST",
  "headers": {
    "Content-Type": "*/*",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  },
  "body": "{\"type\":\"object\",\"properties\":{\"stripeToken\":{\"type\":\"string\"},\"stripeEmail\":{\"type\":\"string\"}}}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/charge`

*Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.*

> Body parameter

<h3 id="charge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» stripeToken|body|string|false|none|
|» stripeEmail|body|string|false|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="charge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A stripe customerID|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect email or payment token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## paymentInfo

<a id="opIdpaymentInfo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/paymentInfo/{token}`

*Get the Stripe payment information associated with the current google auth session token.*

<h3 id="paymentinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="paymentinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An session token|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updatePaymentDefault

<a id="opIdupdatePaymentDefault"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/updatePaymentDefault/{defautSourceId}/{token}`

*Update the default Stripe card associated with the current google auth session token.*

<h3 id="updatepaymentdefault-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|defautSourceId|path|string|true|none|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="updatepaymentdefault-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An session token|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## softwareVersion

<a id="opIdsoftwareVersion"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/softwareVersion`

*Get the current software version*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "softwareNameAndVersion": {
      "type": "string"
    },
    "softwareVersion": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "xml": {
    "name": "SoftwareVersionOut"
  }
}
```

<h3 id="softwareversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The current software version|[SoftwareVersionOut](#schemasoftwareversionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## namsorCounter

<a id="opIdnamsorCounter"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/namsorCounter`

*Get the overall API counter*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "softwareNameAndVersion": {
      "type": "string"
    },
    "softwareVersion": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "xml": {
    "name": "SoftwareVersionOut"
  }
}
```

<h3 id="namsorcounter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The overall API counter|[SoftwareVersionOut](#schemasoftwareversionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## billingCurrencies

<a id="opIdbillingCurrencies"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/billingCurrencies`

*List possible currency options for billing (USD, EUR, GBP, ...)*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "currenciesIso3": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "xml": {
    "name": "CurrenciesOut"
  }
}
```

<h3 id="billingcurrencies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The supported billing currencies.|[CurrenciesOut](#schemacurrenciesout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## billingInfo

<a id="opIdbillingInfo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/billingInfo/{token}`

*Read the billing information (company name, address, phone, vat ID)*

<h3 id="billinginfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "billingEmail": {
      "type": "string"
    },
    "preferredCurrency": {
      "type": "string"
    },
    "customerName": {
      "type": "string"
    },
    "customerPhone": {
      "type": "string"
    },
    "addressLine1": {
      "type": "string"
    },
    "addressLine2": {
      "type": "string"
    },
    "addressCity": {
      "type": "string"
    },
    "addressPostalCode": {
      "type": "string"
    },
    "addressState": {
      "type": "string"
    },
    "addressCountry": {
      "type": "string"
    },
    "vatID": {
      "type": "string"
    }
  },
  "xml": {
    "name": "BillingInfoInOut"
  }
}
```

<h3 id="billinginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The current billing info|[BillingInfoInOut](#schemabillinginfoinout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateBillingInfo

<a id="opIdupdateBillingInfo"></a>



```shell
curl --request POST \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json;charset=UTF-8' \
  --header 'X-API-KEY: API_KEY' \
  --data '{"type":"object","properties":{"billingEmail":{"type":"string"},"preferredCurrency":{"type":"string"},"customerName":{"type":"string"},"customerPhone":{"type":"string"},"addressLine1":{"type":"string"},"addressLine2":{"type":"string"},"addressCity":{"type":"string"},"addressPostalCode":{"type":"string"},"addressState":{"type":"string"},"addressCountry":{"type":"string"},"vatID":{"type":"string"}},"xml":{"name":"BillingInfoInOut"}}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string")
  .header("Content-Type", "application/json;charset=UTF-8")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .body("{\"type\":\"object\",\"properties\":{\"billingEmail\":{\"type\":\"string\"},\"preferredCurrency\":{\"type\":\"string\"},\"customerName\":{\"type\":\"string\"},\"customerPhone\":{\"type\":\"string\"},\"addressLine1\":{\"type\":\"string\"},\"addressLine2\":{\"type\":\"string\"},\"addressCity\":{\"type\":\"string\"},\"addressPostalCode\":{\"type\":\"string\"},\"addressState\":{\"type\":\"string\"},\"addressCountry\":{\"type\":\"string\"},\"vatID\":{\"type\":\"string\"}},\"xml\":{\"name\":\"BillingInfoInOut\"}}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string"

payload = "{\"type\":\"object\",\"properties\":{\"billingEmail\":{\"type\":\"string\"},\"preferredCurrency\":{\"type\":\"string\"},\"customerName\":{\"type\":\"string\"},\"customerPhone\":{\"type\":\"string\"},\"addressLine1\":{\"type\":\"string\"},\"addressLine2\":{\"type\":\"string\"},\"addressCity\":{\"type\":\"string\"},\"addressPostalCode\":{\"type\":\"string\"},\"addressState\":{\"type\":\"string\"},\"addressCountry\":{\"type\":\"string\"},\"vatID\":{\"type\":\"string\"}},\"xml\":{\"name\":\"BillingInfoInOut\"}}"
headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  },
  "body": "{\"type\":\"object\",\"properties\":{\"billingEmail\":{\"type\":\"string\"},\"preferredCurrency\":{\"type\":\"string\"},\"customerName\":{\"type\":\"string\"},\"customerPhone\":{\"type\":\"string\"},\"addressLine1\":{\"type\":\"string\"},\"addressLine2\":{\"type\":\"string\"},\"addressCity\":{\"type\":\"string\"},\"addressPostalCode\":{\"type\":\"string\"},\"addressState\":{\"type\":\"string\"},\"addressCountry\":{\"type\":\"string\"},\"vatID\":{\"type\":\"string\"}},\"xml\":{\"name\":\"BillingInfoInOut\"}}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`POST /api2/json/updateBillingInfo/{token}`

*Sets or update the billing information (company name, address, phone, vat ID)*

> Body parameter

```json
{
  "type": "object",
  "properties": {
    "billingEmail": {
      "type": "string"
    },
    "preferredCurrency": {
      "type": "string"
    },
    "customerName": {
      "type": "string"
    },
    "customerPhone": {
      "type": "string"
    },
    "addressLine1": {
      "type": "string"
    },
    "addressLine2": {
      "type": "string"
    },
    "addressCity": {
      "type": "string"
    },
    "addressPostalCode": {
      "type": "string"
    },
    "addressState": {
      "type": "string"
    },
    "addressCountry": {
      "type": "string"
    },
    "vatID": {
      "type": "string"
    }
  },
  "xml": {
    "name": "BillingInfoInOut"
  }
}
```

<h3 id="updatebillinginfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|body|body|[BillingInfoInOut](#schemabillinginfoinout)|false|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "billingEmail": {
      "type": "string"
    },
    "preferredCurrency": {
      "type": "string"
    },
    "customerName": {
      "type": "string"
    },
    "customerPhone": {
      "type": "string"
    },
    "addressLine1": {
      "type": "string"
    },
    "addressLine2": {
      "type": "string"
    },
    "addressCity": {
      "type": "string"
    },
    "addressPostalCode": {
      "type": "string"
    },
    "addressState": {
      "type": "string"
    },
    "addressCountry": {
      "type": "string"
    },
    "vatID": {
      "type": "string"
    }
  },
  "xml": {
    "name": "BillingInfoInOut"
  }
}
```

<h3 id="updatebillinginfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The updated billing info|[BillingInfoInOut](#schemabillinginfoinout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## billingHistory

<a id="opIdbillingHistory"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/billingHistory/{token}`

*Read the history billing information (invoices paid via Stripe or manually).*

<h3 id="billinghistory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "stripeInvoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "itemId": {
                  "type": "string"
                },
                "amount": {
                  "type": "integer",
                  "format": "int64"
                },
                "currency": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "quantity": {
                  "type": "integer",
                  "format": "int64"
                },
                "subscription": {
                  "type": "string"
                },
                "subscriptionItem": {
                  "type": "string"
                },
                "invoiceItemType": {
                  "type": "string"
                },
                "planNickname": {
                  "type": "string"
                },
                "planDesc": {
                  "type": "string"
                },
                "planName": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "InvoiceItemOut"
              }
            }
          },
          "userId": {
            "type": "string"
          },
          "invoiceId": {
            "type": "string"
          },
          "isStriped": {
            "type": "boolean"
          },
          "stripeCustomerId": {
            "type": "string"
          },
          "amountDue": {
            "type": "integer",
            "format": "int64"
          },
          "amountPaid": {
            "type": "integer",
            "format": "int64"
          },
          "amountRemaining": {
            "type": "integer",
            "format": "int64"
          },
          "attempted": {
            "type": "boolean"
          },
          "currency": {
            "type": "string"
          },
          "invoiceDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time"
          },
          "description": {
            "type": "string"
          },
          "invoicePdf": {
            "type": "string"
          },
          "periodStart": {
            "type": "string",
            "format": "date-time"
          },
          "periodEnd": {
            "type": "string",
            "format": "date-time"
          },
          "receiptNumber": {
            "type": "string"
          },
          "invoiceStatus": {
            "type": "string"
          },
          "subTotal": {
            "type": "integer",
            "format": "int64"
          },
          "tax": {
            "type": "integer",
            "format": "int64"
          },
          "taxPercent": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          }
        },
        "xml": {
          "name": "InvoiceOut"
        }
      }
    },
    "corporateInvoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "itemId": {
                  "type": "string"
                },
                "amount": {
                  "type": "integer",
                  "format": "int64"
                },
                "currency": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "quantity": {
                  "type": "integer",
                  "format": "int64"
                },
                "subscription": {
                  "type": "string"
                },
                "subscriptionItem": {
                  "type": "string"
                },
                "invoiceItemType": {
                  "type": "string"
                },
                "planNickname": {
                  "type": "string"
                },
                "planDesc": {
                  "type": "string"
                },
                "planName": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "InvoiceItemOut"
              }
            }
          },
          "userId": {
            "type": "string"
          },
          "invoiceId": {
            "type": "string"
          },
          "isStriped": {
            "type": "boolean"
          },
          "stripeCustomerId": {
            "type": "string"
          },
          "amountDue": {
            "type": "integer",
            "format": "int64"
          },
          "amountPaid": {
            "type": "integer",
            "format": "int64"
          },
          "amountRemaining": {
            "type": "integer",
            "format": "int64"
          },
          "attempted": {
            "type": "boolean"
          },
          "currency": {
            "type": "string"
          },
          "invoiceDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time"
          },
          "description": {
            "type": "string"
          },
          "invoicePdf": {
            "type": "string"
          },
          "periodStart": {
            "type": "string",
            "format": "date-time"
          },
          "periodEnd": {
            "type": "string",
            "format": "date-time"
          },
          "receiptNumber": {
            "type": "string"
          },
          "invoiceStatus": {
            "type": "string"
          },
          "subTotal": {
            "type": "integer",
            "format": "int64"
          },
          "tax": {
            "type": "integer",
            "format": "int64"
          },
          "taxPercent": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          }
        },
        "xml": {
          "name": "InvoiceOut"
        }
      }
    }
  },
  "xml": {
    "name": "BillingHistoryOut"
  }
}
```

<h3 id="billinghistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The billing history|[BillingHistoryOut](#schemabillinghistoryout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## procureKey

<a id="opIdprocureKey"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/procureKey/{token}`

*Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.*

<h3 id="procurekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="procurekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API Key|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## availablePlans

<a id="opIdavailablePlans"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/availablePlans/{token}`

*List all available plans in the user's preferred currency.*

<h3 id="availableplans-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}
```

<h3 id="availableplans-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available plans|[APIPlansOut](#schemaapiplansout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## availablePlans_1

<a id="opIdavailablePlans_1"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/availablePlans`

*List all available plans in the default currency (usd).*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}
```

<h3 id="availableplans_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available plans|[APIPlansOut](#schemaapiplansout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## apiStatus

<a id="opIdapiStatus"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/apiStatus`

*Prints the current status of the classifiers.*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}
```

<h3 id="apistatus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available classifiers and status|[APIPlansOut](#schemaapiplansout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## availableServices

<a id="opIdavailableServices"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/apiServices`

*List of API services and usage cost in Units (default is 1=ONE Unit).*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}
```

<h3 id="availableservices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available services|[APIPlansOut](#schemaapiplansout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## taxonomyClasses

<a id="opIdtaxonomyClasses"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/taxonomyClasses/{classifierName}`

*Print the taxonomy classes valid for the given classifier.*

<h3 id="taxonomyclasses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|classifierName|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}
```

<h3 id="taxonomyclasses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Available plans|[APIPlansOut](#schemaapiplansout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## subscribePlan

<a id="opIdsubscribePlan"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/subscribePlan/{planName}/{token}`

*Subscribe to a give API plan, using the user's preferred or default currency.*

<h3 id="subscribeplan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
      "format": "double"
    },
    "planName": {
      "type": "string"
    },
    "planBaseFeesKey": {
      "type": "string"
    },
    "planStatus": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
      "format": "double"
    },
    "priceOverageUSD": {
      "type": "number",
      "format": "double"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    },
    "currency": {
      "type": "string"
    },
    "currencyFactor": {
      "type": "number",
      "format": "double"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "stripeStatus": {
      "type": "string"
    },
    "stripeSubscription": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "xml": {
    "name": "APIPlanSubscriptionOut"
  }
}
```

<h3 id="subscribeplan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## subscribePlanOnBehalf

<a id="opIdsubscribePlanOnBehalf"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/subscribePlanOnBehalf/{planName}/{apiKey}`

*Subscribe to a give API plan, using the user's preferred or default currency (admin only).*

<h3 id="subscribeplanonbehalf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|planName|path|string|true|none|
|apiKey|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
      "format": "double"
    },
    "planName": {
      "type": "string"
    },
    "planBaseFeesKey": {
      "type": "string"
    },
    "planStatus": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
      "format": "double"
    },
    "priceOverageUSD": {
      "type": "number",
      "format": "double"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    },
    "currency": {
      "type": "string"
    },
    "currencyFactor": {
      "type": "number",
      "format": "double"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "stripeStatus": {
      "type": "string"
    },
    "stripeSubscription": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "xml": {
    "name": "APIPlanSubscriptionOut"
  }
}
```

<h3 id="subscribeplanonbehalf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeUserAccount

<a id="opIdremoveUserAccount"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/removeUserAccount/{token}`

*Remove the user account.*

<h3 id="removeuseraccount-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
      "format": "double"
    },
    "planName": {
      "type": "string"
    },
    "planBaseFeesKey": {
      "type": "string"
    },
    "planStatus": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
      "format": "double"
    },
    "priceOverageUSD": {
      "type": "number",
      "format": "double"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    },
    "currency": {
      "type": "string"
    },
    "currencyFactor": {
      "type": "number",
      "format": "double"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "stripeStatus": {
      "type": "string"
    },
    "stripeSubscription": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "xml": {
    "name": "APIPlanSubscriptionOut"
  }
}
```

<h3 id="removeuseraccount-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## removeUserAccountOnBehalf

<a id="opIdremoveUserAccountOnBehalf"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/removeUserAccountOnBehalf/{apiKey}`

*Remove (on behalf) a user account.*

<h3 id="removeuseraccountonbehalf-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
      "format": "double"
    },
    "planName": {
      "type": "string"
    },
    "planBaseFeesKey": {
      "type": "string"
    },
    "planStatus": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
      "format": "double"
    },
    "priceOverageUSD": {
      "type": "number",
      "format": "double"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    },
    "currency": {
      "type": "string"
    },
    "currencyFactor": {
      "type": "number",
      "format": "double"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "stripeStatus": {
      "type": "string"
    },
    "stripeSubscription": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "xml": {
    "name": "APIPlanSubscriptionOut"
  }
}
```

<h3 id="removeuseraccountonbehalf-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## updateLimit

<a id="opIdupdateLimit"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/type,integer,format,int32/type,boolean/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/type,integer,format,int32/type,boolean/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/type,integer,format,int32/type,boolean/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/type,integer,format,int32/type,boolean/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}`

*Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).*

<h3 id="updatelimit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usageLimit|path|integer(int32)|true|none|
|hardOrSoft|path|boolean|true|none|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "subscription": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "planStarted": {
          "type": "integer",
          "format": "int64"
        },
        "priorPlanStarted": {
          "type": "integer",
          "format": "int64"
        },
        "planEnded": {
          "type": "integer",
          "format": "int64"
        },
        "taxRate": {
          "type": "number",
          "format": "double"
        },
        "planName": {
          "type": "string"
        },
        "planBaseFeesKey": {
          "type": "string"
        },
        "planStatus": {
          "type": "string"
        },
        "planQuota": {
          "type": "integer",
          "format": "int64"
        },
        "priceUSD": {
          "type": "number",
          "format": "double"
        },
        "priceOverageUSD": {
          "type": "number",
          "format": "double"
        },
        "price": {
          "type": "number",
          "format": "double"
        },
        "priceOverage": {
          "type": "number",
          "format": "double"
        },
        "currency": {
          "type": "string"
        },
        "currencyFactor": {
          "type": "number",
          "format": "double"
        },
        "stripeCustomerId": {
          "type": "string"
        },
        "stripeStatus": {
          "type": "string"
        },
        "stripeSubscription": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        }
      },
      "xml": {
        "name": "APIPlanSubscriptionOut"
      }
    },
    "billingPeriod": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "subscriptionStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodEnded": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodEnd": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodStart": {
          "type": "integer",
          "format": "int64"
        },
        "billingStatus": {
          "type": "string"
        },
        "usage": {
          "type": "integer",
          "format": "int64"
        },
        "softLimit": {
          "type": "integer",
          "format": "int64"
        },
        "hardLimit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "xml": {
        "name": "APIBillingPeriodUsageOut"
      }
    },
    "overageExclTax": {
      "type": "number",
      "format": "double"
    },
    "overageInclTax": {
      "type": "number",
      "format": "double"
    },
    "overageCurrency": {
      "type": "string"
    },
    "overageQuantity": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APICurrentUsageOut"
  }
}
```

<h3 id="updatelimit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API subscription|[APIPeriodUsageOut](#schemaapiperiodusageout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## verifyEmail

<a id="opIdverifyEmail"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/verifyEmail/{emailToken}`

*Verifies an email, based on token sent to that email*

<h3 id="verifyemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailToken|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="verifyemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API Key|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## verifyRemoveEmail

<a id="opIdverifyRemoveEmail"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/verifyRemoveEmail/{emailToken}`

*Verifies an email, based on token sent to that email*

<h3 id="verifyremoveemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|emailToken|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="verifyremoveemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An API Key|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## stats

<a id="opIdstats"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/stats \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/stats")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/stats"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/stats", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/stats`

*Print basic system statistics.*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "cacheMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cacheName": {
            "type": "string"
          },
          "cacheStats": {
            "type": "string"
          }
        },
        "description": "Simple metrics system caches",
        "xml": {
          "name": "CacheMetricsOut"
        }
      }
    },
    "classifierMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "softwareVersion": {
            "type": "string"
          },
          "hostAddress": {
            "type": "string"
          },
          "learnQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "bufferSize": {
            "type": "integer",
            "format": "int32"
          },
          "preClassifyQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "factKeysSize": {
            "type": "integer",
            "format": "int32"
          },
          "factsLearned": {
            "type": "integer",
            "format": "int64"
          },
          "classifyDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "classifyDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "classifierName": {
            "type": "string"
          },
          "featuresSize": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          },
          "aiNonVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          }
        },
        "description": "Simple metrics on a classifier",
        "xml": {
          "name": "ClassifierMetricsOut"
        }
      }
    },
    "sourceMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "source": {
            "type": "object",
            "properties": {
              "apiKey": {
                "type": "string",
                "xml": {
                  "name": "api_key"
                }
              },
              "userId": {
                "type": "string"
              },
              "admin": {
                "type": "boolean"
              },
              "vetted": {
                "type": "boolean"
              },
              "learnable": {
                "type": "boolean"
              },
              "anonymized": {
                "type": "boolean"
              },
              "partner": {
                "type": "boolean"
              },
              "striped": {
                "type": "boolean"
              },
              "corporate": {
                "type": "boolean"
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "xml": {
              "name": "APIKeyOut"
            }
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "snapshotDate": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given source",
        "xml": {
          "name": "SourceMetricsOut"
        }
      }
    },
    "totalMem": {
      "type": "integer",
      "format": "int64"
    },
    "freeMem": {
      "type": "integer",
      "format": "int64"
    },
    "maxMem": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "SystemMetricsOut"
  }
}
```

<h3 id="stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Current system status.|[SystemMetricsOut](#schemasystemmetricsout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## apiUsage

<a id="opIdapiUsage"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/apiUsage`

*Print current API usage.*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "subscription": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "planStarted": {
          "type": "integer",
          "format": "int64"
        },
        "priorPlanStarted": {
          "type": "integer",
          "format": "int64"
        },
        "planEnded": {
          "type": "integer",
          "format": "int64"
        },
        "taxRate": {
          "type": "number",
          "format": "double"
        },
        "planName": {
          "type": "string"
        },
        "planBaseFeesKey": {
          "type": "string"
        },
        "planStatus": {
          "type": "string"
        },
        "planQuota": {
          "type": "integer",
          "format": "int64"
        },
        "priceUSD": {
          "type": "number",
          "format": "double"
        },
        "priceOverageUSD": {
          "type": "number",
          "format": "double"
        },
        "price": {
          "type": "number",
          "format": "double"
        },
        "priceOverage": {
          "type": "number",
          "format": "double"
        },
        "currency": {
          "type": "string"
        },
        "currencyFactor": {
          "type": "number",
          "format": "double"
        },
        "stripeCustomerId": {
          "type": "string"
        },
        "stripeStatus": {
          "type": "string"
        },
        "stripeSubscription": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        }
      },
      "xml": {
        "name": "APIPlanSubscriptionOut"
      }
    },
    "billingPeriod": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "subscriptionStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodEnded": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodEnd": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodStart": {
          "type": "integer",
          "format": "int64"
        },
        "billingStatus": {
          "type": "string"
        },
        "usage": {
          "type": "integer",
          "format": "int64"
        },
        "softLimit": {
          "type": "integer",
          "format": "int64"
        },
        "hardLimit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "xml": {
        "name": "APIBillingPeriodUsageOut"
      }
    },
    "overageExclTax": {
      "type": "number",
      "format": "double"
    },
    "overageInclTax": {
      "type": "number",
      "format": "double"
    },
    "overageCurrency": {
      "type": "string"
    },
    "overageQuantity": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APICurrentUsageOut"
  }
}
```

<h3 id="apiusage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Print current API usage.|[APIPeriodUsageOut](#schemaapiperiodusageout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## apiUsageHistory

<a id="opIdapiUsageHistory"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/apiUsageHistory`

*Print historical API usage.*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "subscription": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "planStarted": {
          "type": "integer",
          "format": "int64"
        },
        "priorPlanStarted": {
          "type": "integer",
          "format": "int64"
        },
        "planEnded": {
          "type": "integer",
          "format": "int64"
        },
        "taxRate": {
          "type": "number",
          "format": "double"
        },
        "planName": {
          "type": "string"
        },
        "planBaseFeesKey": {
          "type": "string"
        },
        "planStatus": {
          "type": "string"
        },
        "planQuota": {
          "type": "integer",
          "format": "int64"
        },
        "priceUSD": {
          "type": "number",
          "format": "double"
        },
        "priceOverageUSD": {
          "type": "number",
          "format": "double"
        },
        "price": {
          "type": "number",
          "format": "double"
        },
        "priceOverage": {
          "type": "number",
          "format": "double"
        },
        "currency": {
          "type": "string"
        },
        "currencyFactor": {
          "type": "number",
          "format": "double"
        },
        "stripeCustomerId": {
          "type": "string"
        },
        "stripeStatus": {
          "type": "string"
        },
        "stripeSubscription": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        }
      },
      "xml": {
        "name": "APIPlanSubscriptionOut"
      }
    },
    "billingPeriod": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "subscriptionStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodEnded": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodEnd": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodStart": {
          "type": "integer",
          "format": "int64"
        },
        "billingStatus": {
          "type": "string"
        },
        "usage": {
          "type": "integer",
          "format": "int64"
        },
        "softLimit": {
          "type": "integer",
          "format": "int64"
        },
        "hardLimit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "xml": {
        "name": "APIBillingPeriodUsageOut"
      }
    },
    "overageExclTax": {
      "type": "number",
      "format": "double"
    },
    "overageInclTax": {
      "type": "number",
      "format": "double"
    },
    "overageCurrency": {
      "type": "string"
    },
    "overageQuantity": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APICurrentUsageOut"
  }
}
```

<h3 id="apiusagehistory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Print historical API usage.|[APIPeriodUsageOut](#schemaapiperiodusageout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## apiUsageHistoryAggregate

<a id="opIdapiUsageHistoryAggregate"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/apiUsageHistoryAggregate`

*Print historical API usage (in an aggregated view, by service, by day/hour/min).*

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "subscription": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "planStarted": {
          "type": "integer",
          "format": "int64"
        },
        "priorPlanStarted": {
          "type": "integer",
          "format": "int64"
        },
        "planEnded": {
          "type": "integer",
          "format": "int64"
        },
        "taxRate": {
          "type": "number",
          "format": "double"
        },
        "planName": {
          "type": "string"
        },
        "planBaseFeesKey": {
          "type": "string"
        },
        "planStatus": {
          "type": "string"
        },
        "planQuota": {
          "type": "integer",
          "format": "int64"
        },
        "priceUSD": {
          "type": "number",
          "format": "double"
        },
        "priceOverageUSD": {
          "type": "number",
          "format": "double"
        },
        "price": {
          "type": "number",
          "format": "double"
        },
        "priceOverage": {
          "type": "number",
          "format": "double"
        },
        "currency": {
          "type": "string"
        },
        "currencyFactor": {
          "type": "number",
          "format": "double"
        },
        "stripeCustomerId": {
          "type": "string"
        },
        "stripeStatus": {
          "type": "string"
        },
        "stripeSubscription": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        }
      },
      "xml": {
        "name": "APIPlanSubscriptionOut"
      }
    },
    "billingPeriod": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "subscriptionStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodEnded": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodEnd": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodStart": {
          "type": "integer",
          "format": "int64"
        },
        "billingStatus": {
          "type": "string"
        },
        "usage": {
          "type": "integer",
          "format": "int64"
        },
        "softLimit": {
          "type": "integer",
          "format": "int64"
        },
        "hardLimit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "xml": {
        "name": "APIBillingPeriodUsageOut"
      }
    },
    "overageExclTax": {
      "type": "number",
      "format": "double"
    },
    "overageInclTax": {
      "type": "number",
      "format": "double"
    },
    "overageCurrency": {
      "type": "string"
    },
    "overageQuantity": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APICurrentUsageOut"
  }
}
```

<h3 id="apiusagehistoryaggregate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Print historical API usage.|[APIPeriodUsageOut](#schemaapiperiodusageout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## sourceStats

<a id="opIdsourceStats"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/sourceStats/{source}`

*Print basic source statistics.*

<h3 id="sourcestats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "cacheMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cacheName": {
            "type": "string"
          },
          "cacheStats": {
            "type": "string"
          }
        },
        "description": "Simple metrics system caches",
        "xml": {
          "name": "CacheMetricsOut"
        }
      }
    },
    "classifierMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "softwareVersion": {
            "type": "string"
          },
          "hostAddress": {
            "type": "string"
          },
          "learnQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "bufferSize": {
            "type": "integer",
            "format": "int32"
          },
          "preClassifyQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "factKeysSize": {
            "type": "integer",
            "format": "int32"
          },
          "factsLearned": {
            "type": "integer",
            "format": "int64"
          },
          "classifyDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "classifyDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "classifierName": {
            "type": "string"
          },
          "featuresSize": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          },
          "aiNonVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          }
        },
        "description": "Simple metrics on a classifier",
        "xml": {
          "name": "ClassifierMetricsOut"
        }
      }
    },
    "sourceMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "source": {
            "type": "object",
            "properties": {
              "apiKey": {
                "type": "string",
                "xml": {
                  "name": "api_key"
                }
              },
              "userId": {
                "type": "string"
              },
              "admin": {
                "type": "boolean"
              },
              "vetted": {
                "type": "boolean"
              },
              "learnable": {
                "type": "boolean"
              },
              "anonymized": {
                "type": "boolean"
              },
              "partner": {
                "type": "boolean"
              },
              "striped": {
                "type": "boolean"
              },
              "corporate": {
                "type": "boolean"
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "xml": {
              "name": "APIKeyOut"
            }
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "snapshotDate": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given source",
        "xml": {
          "name": "SourceMetricsOut"
        }
      }
    },
    "totalMem": {
      "type": "integer",
      "format": "int64"
    },
    "freeMem": {
      "type": "integer",
      "format": "int64"
    },
    "maxMem": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "SystemMetricsOut"
  }
}
```

<h3 id="sourcestats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Current system status.|[SystemMetricsOut](#schemasystemmetricsout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## addCredits

<a id="opIdaddCredits"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/type,string/type,integer,format,int64/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/type,string/type,integer,format,int64/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/type,string/type,integer,format,int64/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/type,string/type,integer,format,int64/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}`

*Add usage credits to an API Key.*

<h3 id="addcredits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|path|string|true|none|
|usageCredits|path|integer(int64)|true|none|
|userMessage|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "cacheMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cacheName": {
            "type": "string"
          },
          "cacheStats": {
            "type": "string"
          }
        },
        "description": "Simple metrics system caches",
        "xml": {
          "name": "CacheMetricsOut"
        }
      }
    },
    "classifierMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "softwareVersion": {
            "type": "string"
          },
          "hostAddress": {
            "type": "string"
          },
          "learnQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "bufferSize": {
            "type": "integer",
            "format": "int32"
          },
          "preClassifyQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "factKeysSize": {
            "type": "integer",
            "format": "int32"
          },
          "factsLearned": {
            "type": "integer",
            "format": "int64"
          },
          "classifyDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "classifyDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "classifierName": {
            "type": "string"
          },
          "featuresSize": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          },
          "aiNonVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          }
        },
        "description": "Simple metrics on a classifier",
        "xml": {
          "name": "ClassifierMetricsOut"
        }
      }
    },
    "sourceMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "source": {
            "type": "object",
            "properties": {
              "apiKey": {
                "type": "string",
                "xml": {
                  "name": "api_key"
                }
              },
              "userId": {
                "type": "string"
              },
              "admin": {
                "type": "boolean"
              },
              "vetted": {
                "type": "boolean"
              },
              "learnable": {
                "type": "boolean"
              },
              "anonymized": {
                "type": "boolean"
              },
              "partner": {
                "type": "boolean"
              },
              "striped": {
                "type": "boolean"
              },
              "corporate": {
                "type": "boolean"
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "xml": {
              "name": "APIKeyOut"
            }
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "snapshotDate": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given source",
        "xml": {
          "name": "SourceMetricsOut"
        }
      }
    },
    "totalMem": {
      "type": "integer",
      "format": "int64"
    },
    "freeMem": {
      "type": "integer",
      "format": "int64"
    },
    "maxMem": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "SystemMetricsOut"
  }
}
```

<h3 id="addcredits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Estimate new after applying credits.|[SystemMetricsOut](#schemasystemmetricsout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## redeployUI

<a id="opIdredeployUI"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/type,boolean' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/type,boolean")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/type,boolean"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/type,boolean", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/redeployUI/{live}`

*Redeploy UI from current dev branch.*

<h3 id="redeployui-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|live|path|boolean|true|none|

<h3 id="redeployui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Redeploy UI from DEV.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## redeployUI_1

<a id="opIdredeployUI_1"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/redeployUI`

*Redeploy UI from current dev branch.*

<h3 id="redeployui_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Redeploy UI from DEV.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## invalidateCache

<a id="opIdinvalidateCache"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/invalidateCache`

*Invalidate system caches.*

<h3 id="invalidatecache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Clear caches.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## debugLevel

<a id="opIddebugLevel"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/type,string/type,string' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/type,string/type,string")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/type,string/type,string"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/type,string/type,string", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/debugLevel/{logger}/{level}`

*Update debug level for a classifier*

<h3 id="debuglevel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|logger|path|string|true|none|
|level|path|string|true|none|

<h3 id="debuglevel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## learnable

<a id="opIdlearnable"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/type,string/type,boolean' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/type,string/type,boolean")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/type,string/type,boolean"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/learnable/type,string/type,boolean", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/learnable/{source}/{learnable}`

*Activate/deactivate learning from a source.*

<h3 id="learnable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|learnable|path|boolean|true|none|

<h3 id="learnable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Vetting of a source.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## anonymize

<a id="opIdanonymize"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/type,string/type,boolean' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/type,string/type,boolean")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/type,string/type,boolean"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/anonymize/type,string/type,boolean", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/anonymize/{source}/{anonymized}`

*Activate/deactivate anonymization for a source.*

<h3 id="anonymize-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|anonymized|path|boolean|true|none|

<h3 id="anonymize-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Anonymization of a source.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## vet

<a id="opIdvet"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/type,string/type,boolean' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/type,string/type,boolean")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/type,string/type,boolean"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/type,string/type,boolean", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/vetting/{source}/{vetted}`

*Vetting of a source.*

<h3 id="vet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|path|string|true|none|
|vetted|path|boolean|true|none|

<h3 id="vet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Vetting of a source.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## corporateKey

<a id="opIdcorporateKey"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/type,string/type,boolean' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/type,string/type,boolean")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/type,string/type,boolean"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/type,string/type,boolean", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/corporateKey/{apiKey}/{corporate}`

*Setting an API Key to a corporate status.*

<h3 id="corporatekey-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiKey|path|string|true|none|
|corporate|path|boolean|true|none|

<h3 id="corporatekey-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|API Key set to a corporate status.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## shutdown

<a id="opIdshutdown"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/shutdown`

*Stop learning and shutdown system.*

<h3 id="shutdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Shutdown AI.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## flush

<a id="opIdflush"></a>



```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/flush \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/flush")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/flush"

headers = {"X-API-KEY": "API_KEY"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/flush", {
  "method": "GET",
  "headers": {
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/flush`

*Flush counters.*

<h3 id="flush-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Flush API Key caches.|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## userInfo

<a id="opIduserInfo"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/userInfo/{token}`

*Get the user profile associated with the current google auth session token.*

<h3 id="userinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}
```

<h3 id="userinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An session token|[APIKeyOut](#schemaapikeyout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="namsor-api-v2-general">General</h1>

## nameType

<a id="opIdnameType"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/nameType/{properNoun}`

*Infer the likely type of a proper noun (personal name, brand name, place name etc.)*

<h3 id="nametype-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|properNoun|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "commonType": {
      "type": "string"
    },
    "commonTypeAlt": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "ProperNounCategorizedOut"
  }
}
```

<h3 id="nametype-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A typed name.|[ProperNounCategorizedOut](#schemapropernouncategorizedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## nameType_1

<a id="opIdnameType_1"></a>



```shell
curl --request GET \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string/type,string' \
  --header 'Accept: application/json' \
  --header 'X-API-KEY: API_KEY'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string/type,string")
  .header("Accept", "application/json")
  .header("X-API-KEY", "API_KEY")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string/type,string"

headers = {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/type,string/type,string", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "X-API-KEY": "API_KEY"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```

`GET /api2/json/nameType/{properNoun}/{countryIso2}`

*Infer the likely type of a proper noun (personal name, brand name, place name etc.)*

<h3 id="nametype_1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|properNoun|path|string|true|none|
|countryIso2|path|string|true|none|

> The above command returns JSON structured like this:

> 200 Response

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "commonType": {
      "type": "string"
    },
    "commonTypeAlt": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "ProperNounCategorizedOut"
  }
}
```

<h3 id="nametype_1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A typed name.|[ProperNounCategorizedOut](#schemapropernouncategorizedout)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Missing or incorrect API Key|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|API Limit Reached or API Key Disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_BatchFirstLastNameGenderedOut">BatchFirstLastNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegenderedout"></a>
<a id="schema_BatchFirstLastNameGenderedOut"></a>
<a id="tocSbatchfirstlastnamegenderedout"></a>
<a id="tocsbatchfirstlastnamegenderedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY gender from a personal name.",
        "xml": {
          "name": "FirstLastNameGenderedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameGenderedOut"
  }
}

```

Represents the output of inferring the LIKELY gender from a list of personal names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGenderedOut](#schemafirstlastnamegenderedout)]|false|none|[Represents the output of inferring the LIKELY gender from a personal name.]|

<h2 id="tocS_BillingInfoInOut">BillingInfoInOut</h2>
<!-- backwards compatibility -->
<a id="schemabillinginfoinout"></a>
<a id="schema_BillingInfoInOut"></a>
<a id="tocSbillinginfoinout"></a>
<a id="tocsbillinginfoinout"></a>

```json
{
  "type": "object",
  "properties": {
    "billingEmail": {
      "type": "string"
    },
    "preferredCurrency": {
      "type": "string"
    },
    "customerName": {
      "type": "string"
    },
    "customerPhone": {
      "type": "string"
    },
    "addressLine1": {
      "type": "string"
    },
    "addressLine2": {
      "type": "string"
    },
    "addressCity": {
      "type": "string"
    },
    "addressPostalCode": {
      "type": "string"
    },
    "addressState": {
      "type": "string"
    },
    "addressCountry": {
      "type": "string"
    },
    "vatID": {
      "type": "string"
    }
  },
  "xml": {
    "name": "BillingInfoInOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|billingEmail|string|false|none|none|
|preferredCurrency|string|false|none|none|
|customerName|string|false|none|none|
|customerPhone|string|false|none|none|
|addressLine1|string|false|none|none|
|addressLine2|string|false|none|none|
|addressCity|string|false|none|none|
|addressPostalCode|string|false|none|none|
|addressState|string|false|none|none|
|addressCountry|string|false|none|none|
|vatID|string|false|none|none|

<h2 id="tocS_StripeCardOut">StripeCardOut</h2>
<!-- backwards compatibility -->
<a id="schemastripecardout"></a>
<a id="schema_StripeCardOut"></a>
<a id="tocSstripecardout"></a>
<a id="tocsstripecardout"></a>

```json
{
  "type": "object",
  "properties": {
    "defaultCard": {
      "type": "boolean"
    },
    "sourceId": {
      "type": "string"
    },
    "expMonth": {
      "type": "integer",
      "format": "int64"
    },
    "expYear": {
      "type": "integer",
      "format": "int64"
    },
    "last4": {
      "type": "string"
    },
    "brand": {
      "type": "string"
    }
  },
  "xml": {
    "name": "StripeCustomerOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|defaultCard|boolean|false|none|none|
|sourceId|string|false|none|none|
|expMonth|integer(int64)|false|none|none|
|expYear|integer(int64)|false|none|none|
|last4|string|false|none|none|
|brand|string|false|none|none|

<h2 id="tocS_BatchParsedFullNameGeoIn">BatchParsedFullNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchparsedfullnamegeoin"></a>
<a id="schema_BatchParsedFullNameGeoIn"></a>
<a id="tocSbatchparsedfullnamegeoin"></a>
<a id="tocsbatchparsedfullnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "prefixOrTitle": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "suffix": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "middleName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "ParsedFullNameGeoIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchParsedFullNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[ParsedFullNameGeoIn](#schemaparsedfullnamegeoin)]|false|none|none|

<h2 id="tocS_UserInfoOut">UserInfoOut</h2>
<!-- backwards compatibility -->
<a id="schemauserinfoout"></a>
<a id="schema_UserInfoOut"></a>
<a id="tocSuserinfoout"></a>
<a id="tocsuserinfoout"></a>

```json
{
  "type": "object",
  "properties": {
    "uid": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    },
    "emailVerified": {
      "type": "boolean"
    },
    "displayName": {
      "type": "string"
    },
    "photoUrl": {
      "type": "string"
    },
    "disabled": {
      "type": "boolean"
    },
    "firstKnownIpAddress": {
      "type": "string"
    },
    "providerId": {
      "type": "string"
    },
    "timeStamp": {
      "type": "integer",
      "format": "int64"
    },
    "verifyToken": {
      "type": "string"
    },
    "apiKey": {
      "type": "string"
    },
    "stripePerishableKey": {
      "type": "string"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "otherInfos": {
      "type": "array",
      "items": "[Circular]"
    }
  },
  "xml": {
    "name": "UserInfoOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uid|string|false|none|none|
|email|string|false|none|none|
|phoneNumber|string|false|none|none|
|emailVerified|boolean|false|none|none|
|displayName|string|false|none|none|
|photoUrl|string|false|none|none|
|disabled|boolean|false|none|none|
|firstKnownIpAddress|string|false|none|none|
|providerId|string|false|none|none|
|timeStamp|integer(int64)|false|none|none|
|verifyToken|string|false|none|none|
|apiKey|string|false|none|none|
|stripePerishableKey|string|false|none|none|
|stripeCustomerId|string|false|none|none|
|otherInfos|[[UserInfoOut](#schemauserinfoout)]|false|none|none|

<h2 id="tocS_FirstLastNamePhoneNumberIn">FirstLastNamePhoneNumberIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonenumberin"></a>
<a id="schema_FirstLastNamePhoneNumberIn"></a>
<a id="tocSfirstlastnamephonenumberin"></a>
<a id="tocsfirstlastnamephonenumberin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "phoneNumber": {
      "type": "string"
    },
    "FirstLastNameOriginedOut": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "countryOrigin": {
          "type": "string",
          "description": "Most likely country of Origin"
        },
        "countryOriginAlt": {
          "type": "string",
          "description": "Second best alternative : country of Origin"
        },
        "countriesOriginTop": {
          "type": "array",
          "description": "List countries of Origin (top 10)",
          "items": {
            "type": "string",
            "description": "List countries of Origin (top 10)"
          }
        },
        "score": {
          "type": "number",
          "description": "Compatibility to NamSor_v1 Origin score value",
          "format": "double"
        },
        "regionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "topRegionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "subRegionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "probabilityCalibrated": {
          "type": "number",
          "format": "double"
        },
        "probabilityAltCalibrated": {
          "type": "number",
          "format": "double"
        }
      },
      "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
      "xml": {
        "name": "FirstLastNameOriginedOut"
      }
    }
  },
  "xml": {
    "name": "FirstLastNamePhoneNumberIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|phoneNumber|string|false|none|none|
|FirstLastNameOriginedOut|[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)|false|none|Represents the output of inferring the LIKELY country of Origin from a personal name.|

<h2 id="tocS_APICounterV2Out">APICounterV2Out</h2>
<!-- backwards compatibility -->
<a id="schemaapicounterv2out"></a>
<a id="schema_APICounterV2Out"></a>
<a id="tocSapicounterv2out"></a>
<a id="tocsapicounterv2out"></a>

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string",
          "xml": {
            "name": "api_key"
          }
        },
        "userId": {
          "type": "string"
        },
        "admin": {
          "type": "boolean"
        },
        "vetted": {
          "type": "boolean"
        },
        "learnable": {
          "type": "boolean"
        },
        "anonymized": {
          "type": "boolean"
        },
        "partner": {
          "type": "boolean"
        },
        "striped": {
          "type": "boolean"
        },
        "corporate": {
          "type": "boolean"
        },
        "disabled": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "APIKeyOut"
      }
    },
    "apiService": {
      "type": "string"
    },
    "createdDateTime": {
      "type": "integer",
      "format": "int64"
    },
    "totalUsage": {
      "type": "integer",
      "format": "int64"
    },
    "lastFlushedDateTime": {
      "type": "integer",
      "format": "int64"
    },
    "lastUsedDateTime": {
      "type": "integer",
      "format": "int64"
    },
    "serviceFeaturesUsage": {
      "type": "object",
      "additionalProperties": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  "xml": {
    "name": "APICallStatOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|[APIKeyOut](#schemaapikeyout)|false|none|none|
|apiService|string|false|none|none|
|createdDateTime|integer(int64)|false|none|none|
|totalUsage|integer(int64)|false|none|none|
|lastFlushedDateTime|integer(int64)|false|none|none|
|lastUsedDateTime|integer(int64)|false|none|none|
|serviceFeaturesUsage|object|false|none|none|
|» **additionalProperties**|integer(int64)|false|none|none|

<h2 id="tocS_APIPlanOut">APIPlanOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiplanout"></a>
<a id="schema_APIPlanOut"></a>
<a id="tocSapiplanout"></a>
<a id="tocsapiplanout"></a>

```json
{
  "type": "object",
  "properties": {
    "planName": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "APIPlanOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|planName|string|false|none|none|
|planQuota|integer(int64)|false|none|none|
|price|number(double)|false|none|none|
|priceOverage|number(double)|false|none|none|

<h2 id="tocS_NameMatchCandidatesOut">NameMatchCandidatesOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchcandidatesout"></a>
<a id="schema_NameMatchCandidatesOut"></a>
<a id="tocSnamematchcandidatesout"></a>
<a id="tocsnamematchcandidatesout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "matchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "candidateName": {
            "type": "string"
          },
          "probability": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "NameMatchCandidateOut"
        }
      }
    }
  },
  "xml": {
    "name": "NameMatchCandidatesOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|matchCandidates|[[NameMatchCandidateOut](#schemanamematchcandidateout)]|false|none|none|

<h2 id="tocS_CacheMetricsOut">CacheMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemacachemetricsout"></a>
<a id="schema_CacheMetricsOut"></a>
<a id="tocScachemetricsout"></a>
<a id="tocscachemetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "cacheName": {
      "type": "string"
    },
    "cacheStats": {
      "type": "string"
    }
  },
  "description": "Simple metrics system caches",
  "xml": {
    "name": "CacheMetricsOut"
  }
}

```

Simple metrics system caches

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheName|string|false|none|none|
|cacheStats|string|false|none|none|

<h2 id="tocS_ParsedFullNameGeoIn">ParsedFullNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemaparsedfullnamegeoin"></a>
<a id="schema_ParsedFullNameGeoIn"></a>
<a id="tocSparsedfullnamegeoin"></a>
<a id="tocsparsedfullnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "prefixOrTitle": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "suffix": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "middleName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "ParsedFullNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|prefixOrTitle|string|false|none|none|
|suffix|string|false|none|none|
|middleName|string|false|none|none|
|countryIso2|string|false|none|none|

<h2 id="tocS_SoftwareVersionOut">SoftwareVersionOut</h2>
<!-- backwards compatibility -->
<a id="schemasoftwareversionout"></a>
<a id="schema_SoftwareVersionOut"></a>
<a id="tocSsoftwareversionout"></a>
<a id="tocssoftwareversionout"></a>

```json
{
  "type": "object",
  "properties": {
    "softwareNameAndVersion": {
      "type": "string"
    },
    "softwareVersion": {
      "type": "array",
      "items": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "xml": {
    "name": "SoftwareVersionOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareNameAndVersion|string|false|none|none|
|softwareVersion|[integer]|false|none|none|

<h2 id="tocS_APIClassifierOut">APIClassifierOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifierout"></a>
<a id="schema_APIClassifierOut"></a>
<a id="tocSapiclassifierout"></a>
<a id="tocsapiclassifierout"></a>

```json
{
  "type": "object",
  "properties": {
    "classifierName": {
      "type": "string"
    },
    "serving": {
      "type": "boolean"
    },
    "learning": {
      "type": "boolean"
    },
    "shuttingDown": {
      "type": "boolean"
    },
    "probabilityCalibrated": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIClassifierOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|none|
|serving|boolean|false|none|none|
|learning|boolean|false|none|none|
|shuttingDown|boolean|false|none|none|
|probabilityCalibrated|boolean|false|none|none|

<h2 id="tocS_APIPlanSubscriptionOut">APIPlanSubscriptionOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiplansubscriptionout"></a>
<a id="schema_APIPlanSubscriptionOut"></a>
<a id="tocSapiplansubscriptionout"></a>
<a id="tocsapiplansubscriptionout"></a>

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "planStarted": {
      "type": "integer",
      "format": "int64"
    },
    "priorPlanStarted": {
      "type": "integer",
      "format": "int64"
    },
    "planEnded": {
      "type": "integer",
      "format": "int64"
    },
    "taxRate": {
      "type": "number",
      "format": "double"
    },
    "planName": {
      "type": "string"
    },
    "planBaseFeesKey": {
      "type": "string"
    },
    "planStatus": {
      "type": "string"
    },
    "planQuota": {
      "type": "integer",
      "format": "int64"
    },
    "priceUSD": {
      "type": "number",
      "format": "double"
    },
    "priceOverageUSD": {
      "type": "number",
      "format": "double"
    },
    "price": {
      "type": "number",
      "format": "double"
    },
    "priceOverage": {
      "type": "number",
      "format": "double"
    },
    "currency": {
      "type": "string"
    },
    "currencyFactor": {
      "type": "number",
      "format": "double"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "stripeStatus": {
      "type": "string"
    },
    "stripeSubscription": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "xml": {
    "name": "APIPlanSubscriptionOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|planStarted|integer(int64)|false|none|none|
|priorPlanStarted|integer(int64)|false|none|none|
|planEnded|integer(int64)|false|none|none|
|taxRate|number(double)|false|none|none|
|planName|string|false|none|none|
|planBaseFeesKey|string|false|none|none|
|planStatus|string|false|none|none|
|planQuota|integer(int64)|false|none|none|
|priceUSD|number(double)|false|none|none|
|priceOverageUSD|number(double)|false|none|none|
|price|number(double)|false|none|none|
|priceOverage|number(double)|false|none|none|
|currency|string|false|none|none|
|currencyFactor|number(double)|false|none|none|
|stripeCustomerId|string|false|none|none|
|stripeStatus|string|false|none|none|
|stripeSubscription|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_FirstLastNameGenderIn">FirstLastNameGenderIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegenderin"></a>
<a id="schema_FirstLastNameGenderIn"></a>
<a id="tocSfirstlastnamegenderin"></a>
<a id="tocsfirstlastnamegenderin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "gender": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "FirstLastName"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|gender|string|false|none|none|

<h2 id="tocS_FirstLastNameGeoIn">FirstLastNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegeoin"></a>
<a id="schema_FirstLastNameGeoIn"></a>
<a id="tocSfirstlastnamegeoin"></a>
<a id="tocsfirstlastnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "FirstLastNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|countryIso2|string|false|none|none|

<h2 id="tocS_FirstLastNameGenderedOut">FirstLastNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegenderedout"></a>
<a id="schema_FirstLastNameGenderedOut"></a>
<a id="tocSfirstlastnamegenderedout"></a>
<a id="tocsfirstlastnamegenderedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY gender from a personal name.",
  "xml": {
    "name": "FirstLastNameGenderedOut"
  }
}

```

Represents the output of inferring the LIKELY gender from a personal name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|likelyGender|string|false|none|Most likely gender|
|genderScale|number(double)|false|none|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value|
|score|number(double)|false|none|none|
|probabilityCalibrated|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|likelyGender|male|
|likelyGender|female|
|likelyGender|unknown|

<h2 id="tocS_APIKeyOut">APIKeyOut</h2>
<!-- backwards compatibility -->
<a id="schemaapikeyout"></a>
<a id="schema_APIKeyOut"></a>
<a id="tocSapikeyout"></a>
<a id="tocsapikeyout"></a>

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string",
      "xml": {
        "name": "api_key"
      }
    },
    "userId": {
      "type": "string"
    },
    "admin": {
      "type": "boolean"
    },
    "vetted": {
      "type": "boolean"
    },
    "learnable": {
      "type": "boolean"
    },
    "anonymized": {
      "type": "boolean"
    },
    "partner": {
      "type": "boolean"
    },
    "striped": {
      "type": "boolean"
    },
    "corporate": {
      "type": "boolean"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "APIKeyOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|userId|string|false|none|none|
|admin|boolean|false|none|none|
|vetted|boolean|false|none|none|
|learnable|boolean|false|none|none|
|anonymized|boolean|false|none|none|
|partner|boolean|false|none|none|
|striped|boolean|false|none|none|
|corporate|boolean|false|none|none|
|disabled|boolean|false|none|none|

<h2 id="tocS_BatchFirstLastNameDiasporaedOut">BatchFirstLastNameDiasporaedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamediasporaedout"></a>
<a id="schema_BatchFirstLastNameDiasporaedOut"></a>
<a id="tocSbatchfirstlastnamediasporaedout"></a>
<a id="tocsbatchfirstlastnamediasporaedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "ethnicityAlt": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "ethnicity": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lifted": {
            "type": "boolean",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "ethnicitiesTop": {
            "type": "array",
            "description": "List ethnicities (top 10)",
            "items": {
              "type": "string",
              "description": "List ethnicities (top 10)"
            }
          }
        },
        "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
        "xml": {
          "name": "FirstLastNameDiasporaedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
  "xml": {
    "name": "BatchFirstLastNameDiasporaedOut"
  }
}

```

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameDiasporaedOut](#schemafirstlastnamediasporaedout)]|false|none|[Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.]|

<h2 id="tocS_BillingHistoryOut">BillingHistoryOut</h2>
<!-- backwards compatibility -->
<a id="schemabillinghistoryout"></a>
<a id="schema_BillingHistoryOut"></a>
<a id="tocSbillinghistoryout"></a>
<a id="tocsbillinghistoryout"></a>

```json
{
  "type": "object",
  "properties": {
    "stripeInvoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "itemId": {
                  "type": "string"
                },
                "amount": {
                  "type": "integer",
                  "format": "int64"
                },
                "currency": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "quantity": {
                  "type": "integer",
                  "format": "int64"
                },
                "subscription": {
                  "type": "string"
                },
                "subscriptionItem": {
                  "type": "string"
                },
                "invoiceItemType": {
                  "type": "string"
                },
                "planNickname": {
                  "type": "string"
                },
                "planDesc": {
                  "type": "string"
                },
                "planName": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "InvoiceItemOut"
              }
            }
          },
          "userId": {
            "type": "string"
          },
          "invoiceId": {
            "type": "string"
          },
          "isStriped": {
            "type": "boolean"
          },
          "stripeCustomerId": {
            "type": "string"
          },
          "amountDue": {
            "type": "integer",
            "format": "int64"
          },
          "amountPaid": {
            "type": "integer",
            "format": "int64"
          },
          "amountRemaining": {
            "type": "integer",
            "format": "int64"
          },
          "attempted": {
            "type": "boolean"
          },
          "currency": {
            "type": "string"
          },
          "invoiceDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time"
          },
          "description": {
            "type": "string"
          },
          "invoicePdf": {
            "type": "string"
          },
          "periodStart": {
            "type": "string",
            "format": "date-time"
          },
          "periodEnd": {
            "type": "string",
            "format": "date-time"
          },
          "receiptNumber": {
            "type": "string"
          },
          "invoiceStatus": {
            "type": "string"
          },
          "subTotal": {
            "type": "integer",
            "format": "int64"
          },
          "tax": {
            "type": "integer",
            "format": "int64"
          },
          "taxPercent": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          }
        },
        "xml": {
          "name": "InvoiceOut"
        }
      }
    },
    "corporateInvoices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "itemId": {
                  "type": "string"
                },
                "amount": {
                  "type": "integer",
                  "format": "int64"
                },
                "currency": {
                  "type": "string"
                },
                "description": {
                  "type": "string"
                },
                "quantity": {
                  "type": "integer",
                  "format": "int64"
                },
                "subscription": {
                  "type": "string"
                },
                "subscriptionItem": {
                  "type": "string"
                },
                "invoiceItemType": {
                  "type": "string"
                },
                "planNickname": {
                  "type": "string"
                },
                "planDesc": {
                  "type": "string"
                },
                "planName": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "InvoiceItemOut"
              }
            }
          },
          "userId": {
            "type": "string"
          },
          "invoiceId": {
            "type": "string"
          },
          "isStriped": {
            "type": "boolean"
          },
          "stripeCustomerId": {
            "type": "string"
          },
          "amountDue": {
            "type": "integer",
            "format": "int64"
          },
          "amountPaid": {
            "type": "integer",
            "format": "int64"
          },
          "amountRemaining": {
            "type": "integer",
            "format": "int64"
          },
          "attempted": {
            "type": "boolean"
          },
          "currency": {
            "type": "string"
          },
          "invoiceDate": {
            "type": "string",
            "format": "date-time"
          },
          "dueDate": {
            "type": "string",
            "format": "date-time"
          },
          "description": {
            "type": "string"
          },
          "invoicePdf": {
            "type": "string"
          },
          "periodStart": {
            "type": "string",
            "format": "date-time"
          },
          "periodEnd": {
            "type": "string",
            "format": "date-time"
          },
          "receiptNumber": {
            "type": "string"
          },
          "invoiceStatus": {
            "type": "string"
          },
          "subTotal": {
            "type": "integer",
            "format": "int64"
          },
          "tax": {
            "type": "integer",
            "format": "int64"
          },
          "taxPercent": {
            "type": "integer",
            "format": "int64"
          },
          "total": {
            "type": "integer",
            "format": "int64"
          }
        },
        "xml": {
          "name": "InvoiceOut"
        }
      }
    }
  },
  "xml": {
    "name": "BillingHistoryOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stripeInvoices|[[InvoiceOut](#schemainvoiceout)]|false|none|none|
|corporateInvoices|[[InvoiceOut](#schemainvoiceout)]|false|none|none|

<h2 id="tocS_BatchPersonalNameGeoOut">BatchPersonalNameGeoOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegeoout"></a>
<a id="schema_BatchPersonalNameGeoOut"></a>
<a id="tocSbatchpersonalnamegeoout"></a>
<a id="tocsbatchpersonalnamegeoout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "country": {
            "type": "string"
          },
          "countryAlt": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "topRegion": {
            "type": "string"
          },
          "subRegion": {
            "type": "string"
          },
          "countriesTop": {
            "type": "array",
            "description": "List countries (top 10)",
            "items": {
              "type": "string",
              "description": "List countries (top 10)"
            }
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGeoOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGeoOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameGeoOut](#schemapersonalnamegeoout)]|false|none|none|

<h2 id="tocS_APIClassifiersStatusOut">APIClassifiersStatusOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifiersstatusout"></a>
<a id="schema_APIClassifiersStatusOut"></a>
<a id="tocSapiclassifiersstatusout"></a>
<a id="tocsapiclassifiersstatusout"></a>

```json
{
  "type": "object",
  "properties": {
    "softwareVersion": {
      "type": "object",
      "properties": {
        "softwareNameAndVersion": {
          "type": "string"
        },
        "softwareVersion": {
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int32"
          }
        }
      },
      "xml": {
        "name": "SoftwareVersionOut"
      }
    },
    "classifiers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "serving": {
            "type": "boolean"
          },
          "learning": {
            "type": "boolean"
          },
          "shuttingDown": {
            "type": "boolean"
          },
          "probabilityCalibrated": {
            "type": "boolean"
          }
        },
        "xml": {
          "name": "APIClassifierOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIClassifiersStatusOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareVersion|[SoftwareVersionOut](#schemasoftwareversionout)|false|none|none|
|classifiers|[[APIClassifierOut](#schemaapiclassifierout)]|false|none|none|

<h2 id="tocS_ProperNounCategorizedOut">ProperNounCategorizedOut</h2>
<!-- backwards compatibility -->
<a id="schemapropernouncategorizedout"></a>
<a id="schema_ProperNounCategorizedOut"></a>
<a id="tocSpropernouncategorizedout"></a>
<a id="tocspropernouncategorizedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "commonType": {
      "type": "string"
    },
    "commonTypeAlt": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "ProperNounCategorizedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|commonType|string|false|none|none|
|commonTypeAlt|string|false|none|none|
|score|number(double)|false|none|none|

<h2 id="tocS_SourceMetricsOut">SourceMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemasourcemetricsout"></a>
<a id="schema_SourceMetricsOut"></a>
<a id="tocSsourcemetricsout"></a>
<a id="tocssourcemetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "classifierName": {
      "type": "string"
    },
    "source": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string",
          "xml": {
            "name": "api_key"
          }
        },
        "userId": {
          "type": "string"
        },
        "admin": {
          "type": "boolean"
        },
        "vetted": {
          "type": "boolean"
        },
        "learnable": {
          "type": "boolean"
        },
        "anonymized": {
          "type": "boolean"
        },
        "partner": {
          "type": "boolean"
        },
        "striped": {
          "type": "boolean"
        },
        "corporate": {
          "type": "boolean"
        },
        "disabled": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "APIKeyOut"
      }
    },
    "aiEstimateTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiEstimatePrecision": {
      "type": "number",
      "format": "double"
    },
    "aiEstimateRecall": {
      "type": "number",
      "format": "double"
    },
    "metricTimeStamp": {
      "type": "integer",
      "format": "int64"
    },
    "aiStartTime": {
      "type": "integer",
      "format": "int64"
    },
    "aiLearnTotal": {
      "type": "integer",
      "format": "int64"
    },
    "snapshotDate": {
      "type": "integer",
      "format": "int64"
    }
  },
  "description": "Simple metrics on a classifier, for a given source",
  "xml": {
    "name": "SourceMetricsOut"
  }
}

```

Simple metrics on a classifier, for a given source

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|none|
|source|[APIKeyOut](#schemaapikeyout)|false|none|none|
|aiEstimateTotal|integer(int64)|false|none|none|
|aiEstimatePrecision|number(double)|false|none|none|
|aiEstimateRecall|number(double)|false|none|none|
|metricTimeStamp|integer(int64)|false|none|none|
|aiStartTime|integer(int64)|false|none|none|
|aiLearnTotal|integer(int64)|false|none|none|
|snapshotDate|integer(int64)|false|none|none|

<h2 id="tocS_PersonalNameGenderedOut">PersonalNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegenderedout"></a>
<a id="schema_PersonalNameGenderedOut"></a>
<a id="tocSpersonalnamegenderedout"></a>
<a id="tocspersonalnamegenderedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "likelyGender": {
      "type": "string",
      "description": "Most likely gender",
      "enum": [
        "male",
        "female",
        "unknown"
      ]
    },
    "genderScale": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
      "format": "double"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGenderedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|likelyGender|string|false|none|Most likely gender|
|genderScale|number(double)|false|none|Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value|
|score|number(double)|false|none|none|
|probabilityCalibrated|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|likelyGender|male|
|likelyGender|female|
|likelyGender|unknown|

<h2 id="tocS_FirstLastNameOriginedOut">FirstLastNameOriginedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameoriginedout"></a>
<a id="schema_FirstLastNameOriginedOut"></a>
<a id="tocSfirstlastnameoriginedout"></a>
<a id="tocsfirstlastnameoriginedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "countryOrigin": {
      "type": "string",
      "description": "Most likely country of Origin"
    },
    "countryOriginAlt": {
      "type": "string",
      "description": "Second best alternative : country of Origin"
    },
    "countriesOriginTop": {
      "type": "array",
      "description": "List countries of Origin (top 10)",
      "items": {
        "type": "string",
        "description": "List countries of Origin (top 10)"
      }
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "regionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "topRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "subRegionOrigin": {
      "type": "string",
      "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
  "xml": {
    "name": "FirstLastNameOriginedOut"
  }
}

```

Represents the output of inferring the LIKELY country of Origin from a personal name.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|countryOrigin|string|false|none|Most likely country of Origin|
|countryOriginAlt|string|false|none|Second best alternative : country of Origin|
|countriesOriginTop|[string]|false|none|List countries of Origin (top 10)|
|score|number(double)|false|none|Compatibility to NamSor_v1 Origin score value|
|regionOrigin|string|false|none|Most likely region of Origin (based on countryOrigin ISO2 code)|
|topRegionOrigin|string|false|none|Most likely region of Origin (based on countryOrigin ISO2 code)|
|subRegionOrigin|string|false|none|Most likely region of Origin (based on countryOrigin ISO2 code)|
|probabilityCalibrated|number(double)|false|none|none|
|probabilityAltCalibrated|number(double)|false|none|none|

<h2 id="tocS_BatchFirstLastNameGenderIn">BatchFirstLastNameGenderIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegenderin"></a>
<a id="schema_BatchFirstLastNameGenderIn"></a>
<a id="tocSbatchfirstlastnamegenderin"></a>
<a id="tocsbatchfirstlastnamegenderin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "gender": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "FirstLastName"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNameGenderIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGenderIn](#schemafirstlastnamegenderin)]|false|none|none|

<h2 id="tocS_InvoiceItemOut">InvoiceItemOut</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceitemout"></a>
<a id="schema_InvoiceItemOut"></a>
<a id="tocSinvoiceitemout"></a>
<a id="tocsinvoiceitemout"></a>

```json
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "string"
    },
    "amount": {
      "type": "integer",
      "format": "int64"
    },
    "currency": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "quantity": {
      "type": "integer",
      "format": "int64"
    },
    "subscription": {
      "type": "string"
    },
    "subscriptionItem": {
      "type": "string"
    },
    "invoiceItemType": {
      "type": "string"
    },
    "planNickname": {
      "type": "string"
    },
    "planDesc": {
      "type": "string"
    },
    "planName": {
      "type": "string"
    }
  },
  "xml": {
    "name": "InvoiceItemOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|itemId|string|false|none|none|
|amount|integer(int64)|false|none|none|
|currency|string|false|none|none|
|description|string|false|none|none|
|quantity|integer(int64)|false|none|none|
|subscription|string|false|none|none|
|subscriptionItem|string|false|none|none|
|invoiceItemType|string|false|none|none|
|planNickname|string|false|none|none|
|planDesc|string|false|none|none|
|planName|string|false|none|none|

<h2 id="tocS_BatchNameMatchedOut">BatchNameMatchedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamematchedout"></a>
<a id="schema_BatchNameMatchedOut"></a>
<a id="tocSbatchnamematchedout"></a>
<a id="tocsbatchnamematchedout"></a>

```json
{
  "type": "object",
  "properties": {
    "matchedNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "matchStatus": {
            "type": "string"
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "NameMatchedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matchedNames|[[NameMatchedOut](#schemanamematchedout)]|false|none|none|

<h2 id="tocS_DeployUIOut">DeployUIOut</h2>
<!-- backwards compatibility -->
<a id="schemadeployuiout"></a>
<a id="schema_DeployUIOut"></a>
<a id="tocSdeployuiout"></a>
<a id="tocsdeployuiout"></a>

```json
{
  "type": "object",
  "properties": {
    "errorMessage": {
      "type": "string"
    },
    "succeeded": {
      "type": "boolean"
    }
  },
  "xml": {
    "name": "DeployUIOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorMessage|string|false|none|none|
|succeeded|boolean|false|none|none|

<h2 id="tocS_BatchNameMatchCandidatesOut">BatchNameMatchCandidatesOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchnamematchcandidatesout"></a>
<a id="schema_BatchNameMatchCandidatesOut"></a>
<a id="tocSbatchnamematchcandidatesout"></a>
<a id="tocsbatchnamematchcandidatesout"></a>

```json
{
  "type": "object",
  "properties": {
    "namesAndMatchCandidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "matchCandidates": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "candidateName": {
                  "type": "string"
                },
                "probability": {
                  "type": "number",
                  "format": "double"
                }
              },
              "xml": {
                "name": "NameMatchCandidateOut"
              }
            }
          }
        },
        "xml": {
          "name": "NameMatchCandidatesOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchNameMatchCandidatesOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|namesAndMatchCandidates|[[NameMatchCandidatesOut](#schemanamematchcandidatesout)]|false|none|none|

<h2 id="tocS_BatchPersonalNameParsedOut">BatchPersonalNameParsedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnameparsedout"></a>
<a id="schema_BatchPersonalNameParsedOut"></a>
<a id="tocSbatchpersonalnameparsedout"></a>
<a id="tocsbatchpersonalnameparsedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "nameParserType": {
            "type": "string"
          },
          "nameParserTypeAlt": {
            "type": "string"
          },
          "firstLastName": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              }
            },
            "xml": {
              "name": "FirstLastNameOut"
            }
          },
          "score": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameParsedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameParsedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameParsedOut](#schemapersonalnameparsedout)]|false|none|none|

<h2 id="tocS_FirstLastNameDiasporaedOut">FirstLastNameDiasporaedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamediasporaedout"></a>
<a id="schema_FirstLastNameDiasporaedOut"></a>
<a id="tocSfirstlastnamediasporaedout"></a>
<a id="tocsfirstlastnamediasporaedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "ethnicityAlt": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "ethnicity": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lifted": {
      "type": "boolean",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "ethnicitiesTop": {
      "type": "array",
      "description": "List ethnicities (top 10)",
      "items": {
        "type": "string",
        "description": "List ethnicities (top 10)"
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.",
  "xml": {
    "name": "FirstLastNameDiasporaedOut"
  }
}

```

Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|score|number(double)|false|none|Compatibility to NamSor_v1 Origin score value|
|ethnicityAlt|string|false|none|none|
|ethnicity|string|false|none|none|
|lifted|boolean|false|none|none|
|countryIso2|string|false|none|none|
|ethnicitiesTop|[string]|false|none|List ethnicities (top 10)|

<h2 id="tocS_BatchPersonalNameGenderedOut">BatchPersonalNameGenderedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegenderedout"></a>
<a id="schema_BatchPersonalNameGenderedOut"></a>
<a id="tocSbatchpersonalnamegenderedout"></a>
<a id="tocsbatchpersonalnamegenderedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "likelyGender": {
            "type": "string",
            "description": "Most likely gender",
            "enum": [
              "male",
              "female",
              "unknown"
            ]
          },
          "genderScale": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value",
            "format": "double"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "PersonalNameGenderedOut"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGenderedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameGenderedOut](#schemapersonalnamegenderedout)]|false|none|none|

<h2 id="tocS_FeedbackLoopOut">FeedbackLoopOut</h2>
<!-- backwards compatibility -->
<a id="schemafeedbackloopout"></a>
<a id="schema_FeedbackLoopOut"></a>
<a id="tocSfeedbackloopout"></a>
<a id="tocsfeedbackloopout"></a>

```json
{
  "type": "object",
  "properties": {
    "feedbackCredits": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "FeedbackLoopOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedbackCredits|integer(int64)|false|none|none|

<h2 id="tocS_APIBillingPeriodUsageOut">APIBillingPeriodUsageOut</h2>
<!-- backwards compatibility -->
<a id="schemaapibillingperiodusageout"></a>
<a id="schema_APIBillingPeriodUsageOut"></a>
<a id="tocSapibillingperiodusageout"></a>
<a id="tocsapibillingperiodusageout"></a>

```json
{
  "type": "object",
  "properties": {
    "apiKey": {
      "type": "string"
    },
    "subscriptionStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodStarted": {
      "type": "integer",
      "format": "int64"
    },
    "periodEnded": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodEnd": {
      "type": "integer",
      "format": "int64"
    },
    "stripeCurrentPeriodStart": {
      "type": "integer",
      "format": "int64"
    },
    "billingStatus": {
      "type": "string"
    },
    "usage": {
      "type": "integer",
      "format": "int64"
    },
    "softLimit": {
      "type": "integer",
      "format": "int64"
    },
    "hardLimit": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APIBillingPeriodUsageOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiKey|string|false|none|none|
|subscriptionStarted|integer(int64)|false|none|none|
|periodStarted|integer(int64)|false|none|none|
|periodEnded|integer(int64)|false|none|none|
|stripeCurrentPeriodEnd|integer(int64)|false|none|none|
|stripeCurrentPeriodStart|integer(int64)|false|none|none|
|billingStatus|string|false|none|none|
|usage|integer(int64)|false|none|none|
|softLimit|integer(int64)|false|none|none|
|hardLimit|integer(int64)|false|none|none|

<h2 id="tocS_APIPeriodUsageOut">APIPeriodUsageOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiperiodusageout"></a>
<a id="schema_APIPeriodUsageOut"></a>
<a id="tocSapiperiodusageout"></a>
<a id="tocsapiperiodusageout"></a>

```json
{
  "type": "object",
  "properties": {
    "subscription": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "planStarted": {
          "type": "integer",
          "format": "int64"
        },
        "priorPlanStarted": {
          "type": "integer",
          "format": "int64"
        },
        "planEnded": {
          "type": "integer",
          "format": "int64"
        },
        "taxRate": {
          "type": "number",
          "format": "double"
        },
        "planName": {
          "type": "string"
        },
        "planBaseFeesKey": {
          "type": "string"
        },
        "planStatus": {
          "type": "string"
        },
        "planQuota": {
          "type": "integer",
          "format": "int64"
        },
        "priceUSD": {
          "type": "number",
          "format": "double"
        },
        "priceOverageUSD": {
          "type": "number",
          "format": "double"
        },
        "price": {
          "type": "number",
          "format": "double"
        },
        "priceOverage": {
          "type": "number",
          "format": "double"
        },
        "currency": {
          "type": "string"
        },
        "currencyFactor": {
          "type": "number",
          "format": "double"
        },
        "stripeCustomerId": {
          "type": "string"
        },
        "stripeStatus": {
          "type": "string"
        },
        "stripeSubscription": {
          "type": "string"
        },
        "userId": {
          "type": "string"
        }
      },
      "xml": {
        "name": "APIPlanSubscriptionOut"
      }
    },
    "billingPeriod": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string"
        },
        "subscriptionStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodStarted": {
          "type": "integer",
          "format": "int64"
        },
        "periodEnded": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodEnd": {
          "type": "integer",
          "format": "int64"
        },
        "stripeCurrentPeriodStart": {
          "type": "integer",
          "format": "int64"
        },
        "billingStatus": {
          "type": "string"
        },
        "usage": {
          "type": "integer",
          "format": "int64"
        },
        "softLimit": {
          "type": "integer",
          "format": "int64"
        },
        "hardLimit": {
          "type": "integer",
          "format": "int64"
        }
      },
      "xml": {
        "name": "APIBillingPeriodUsageOut"
      }
    },
    "overageExclTax": {
      "type": "number",
      "format": "double"
    },
    "overageInclTax": {
      "type": "number",
      "format": "double"
    },
    "overageCurrency": {
      "type": "string"
    },
    "overageQuantity": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "APICurrentUsageOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription|[APIPlanSubscriptionOut](#schemaapiplansubscriptionout)|false|none|none|
|billingPeriod|[APIBillingPeriodUsageOut](#schemaapibillingperiodusageout)|false|none|none|
|overageExclTax|number(double)|false|none|none|
|overageInclTax|number(double)|false|none|none|
|overageCurrency|string|false|none|none|
|overageQuantity|integer(int64)|false|none|none|

<h2 id="tocS_PersonalNameIn">PersonalNameIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamein"></a>
<a id="schema_PersonalNameIn"></a>
<a id="tocSpersonalnamein"></a>
<a id="tocspersonalnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "name": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "PersonalNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_NamSorCounterOut">NamSorCounterOut</h2>
<!-- backwards compatibility -->
<a id="schemanamsorcounterout"></a>
<a id="schema_NamSorCounterOut"></a>
<a id="tocSnamsorcounterout"></a>
<a id="tocsnamsorcounterout"></a>

```json
{
  "type": "object",
  "properties": {
    "counter": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "NamSorCounterOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|counter|integer(int64)|false|none|none|

<h2 id="tocS_SourceDetailedMetricsOut">SourceDetailedMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemasourcedetailedmetricsout"></a>
<a id="schema_SourceDetailedMetricsOut"></a>
<a id="tocSsourcedetailedmetricsout"></a>
<a id="tocssourcedetailedmetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "classifierName": {
      "type": "string"
    },
    "source": {
      "type": "object",
      "properties": {
        "apiKey": {
          "type": "string",
          "xml": {
            "name": "api_key"
          }
        },
        "userId": {
          "type": "string"
        },
        "admin": {
          "type": "boolean"
        },
        "vetted": {
          "type": "boolean"
        },
        "learnable": {
          "type": "boolean"
        },
        "anonymized": {
          "type": "boolean"
        },
        "partner": {
          "type": "boolean"
        },
        "striped": {
          "type": "boolean"
        },
        "corporate": {
          "type": "boolean"
        },
        "disabled": {
          "type": "boolean"
        }
      },
      "xml": {
        "name": "APIKeyOut"
      }
    },
    "aiEstimateTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiEstimatePrecision": {
      "type": "number",
      "format": "double"
    },
    "aiEstimateRecall": {
      "type": "number",
      "format": "double"
    },
    "metricTimeStamp": {
      "type": "integer",
      "format": "int64"
    },
    "aiStartTime": {
      "type": "integer",
      "format": "int64"
    },
    "aiLearnTotal": {
      "type": "integer",
      "format": "int64"
    },
    "snapshotDate": {
      "type": "integer",
      "format": "int64"
    },
    "expectedClassMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "expectedClass": {
            "type": "string"
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given expected class",
        "xml": {
          "name": "ExpectedClassMetricsOut"
        }
      }
    }
  },
  "description": "Simple metrics on source, with details by classifier.",
  "xml": {
    "name": "SourceDetailedMetricsOut"
  }
}

```

Simple metrics on source, with details by classifier.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|none|
|source|[APIKeyOut](#schemaapikeyout)|false|none|none|
|aiEstimateTotal|integer(int64)|false|none|none|
|aiEstimatePrecision|number(double)|false|none|none|
|aiEstimateRecall|number(double)|false|none|none|
|metricTimeStamp|integer(int64)|false|none|none|
|aiStartTime|integer(int64)|false|none|none|
|aiLearnTotal|integer(int64)|false|none|none|
|snapshotDate|integer(int64)|false|none|none|
|expectedClassMetrics|[[ExpectedClassMetricsOut](#schemaexpectedclassmetricsout)]|false|none|[Simple metrics on a classifier, for a given expected class]|

<h2 id="tocS_APIUsageAggregatedOut">APIUsageAggregatedOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiusageaggregatedout"></a>
<a id="schema_APIUsageAggregatedOut"></a>
<a id="tocSapiusageaggregatedout"></a>
<a id="tocsapiusageaggregatedout"></a>

```json
{
  "type": "object",
  "properties": {
    "timeUnit": {
      "type": "string"
    },
    "periodStart": {
      "type": "integer",
      "format": "int64"
    },
    "periodEnd": {
      "type": "integer",
      "format": "int64"
    },
    "totalUsage": {
      "type": "integer",
      "format": "int64"
    },
    "historyTruncated": {
      "type": "boolean"
    },
    "data": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "integer",
          "format": "int32"
        }
      }
    },
    "colHeaders": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "rowHeaders": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "xml": {
    "name": "APIUsageAggregatedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timeUnit|string|false|none|none|
|periodStart|integer(int64)|false|none|none|
|periodEnd|integer(int64)|false|none|none|
|totalUsage|integer(int64)|false|none|none|
|historyTruncated|boolean|false|none|none|
|data|[array]|false|none|none|
|colHeaders|[string]|false|none|none|
|rowHeaders|[string]|false|none|none|

<h2 id="tocS_APIServicesOut">APIServicesOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiservicesout"></a>
<a id="schema_APIServicesOut"></a>
<a id="tocSapiservicesout"></a>
<a id="tocsapiservicesout"></a>

```json
{
  "type": "object",
  "properties": {
    "apiServices": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "serviceName": {
            "type": "string"
          },
          "serviceGroup": {
            "type": "string"
          },
          "costInUnits": {
            "type": "integer",
            "format": "int32"
          }
        },
        "xml": {
          "name": "APIServiceOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIServicesOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apiServices|[[APIServiceOut](#schemaapiserviceout)]|false|none|none|

<h2 id="tocS_InvoiceOut">InvoiceOut</h2>
<!-- backwards compatibility -->
<a id="schemainvoiceout"></a>
<a id="schema_InvoiceOut"></a>
<a id="tocSinvoiceout"></a>
<a id="tocsinvoiceout"></a>

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "itemId": {
            "type": "string"
          },
          "amount": {
            "type": "integer",
            "format": "int64"
          },
          "currency": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "quantity": {
            "type": "integer",
            "format": "int64"
          },
          "subscription": {
            "type": "string"
          },
          "subscriptionItem": {
            "type": "string"
          },
          "invoiceItemType": {
            "type": "string"
          },
          "planNickname": {
            "type": "string"
          },
          "planDesc": {
            "type": "string"
          },
          "planName": {
            "type": "string"
          }
        },
        "xml": {
          "name": "InvoiceItemOut"
        }
      }
    },
    "userId": {
      "type": "string"
    },
    "invoiceId": {
      "type": "string"
    },
    "isStriped": {
      "type": "boolean"
    },
    "stripeCustomerId": {
      "type": "string"
    },
    "amountDue": {
      "type": "integer",
      "format": "int64"
    },
    "amountPaid": {
      "type": "integer",
      "format": "int64"
    },
    "amountRemaining": {
      "type": "integer",
      "format": "int64"
    },
    "attempted": {
      "type": "boolean"
    },
    "currency": {
      "type": "string"
    },
    "invoiceDate": {
      "type": "string",
      "format": "date-time"
    },
    "dueDate": {
      "type": "string",
      "format": "date-time"
    },
    "description": {
      "type": "string"
    },
    "invoicePdf": {
      "type": "string"
    },
    "periodStart": {
      "type": "string",
      "format": "date-time"
    },
    "periodEnd": {
      "type": "string",
      "format": "date-time"
    },
    "receiptNumber": {
      "type": "string"
    },
    "invoiceStatus": {
      "type": "string"
    },
    "subTotal": {
      "type": "integer",
      "format": "int64"
    },
    "tax": {
      "type": "integer",
      "format": "int64"
    },
    "taxPercent": {
      "type": "integer",
      "format": "int64"
    },
    "total": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "InvoiceOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[InvoiceItemOut](#schemainvoiceitemout)]|false|none|none|
|userId|string|false|none|none|
|invoiceId|string|false|none|none|
|isStriped|boolean|false|none|none|
|stripeCustomerId|string|false|none|none|
|amountDue|integer(int64)|false|none|none|
|amountPaid|integer(int64)|false|none|none|
|amountRemaining|integer(int64)|false|none|none|
|attempted|boolean|false|none|none|
|currency|string|false|none|none|
|invoiceDate|string(date-time)|false|none|none|
|dueDate|string(date-time)|false|none|none|
|description|string|false|none|none|
|invoicePdf|string|false|none|none|
|periodStart|string(date-time)|false|none|none|
|periodEnd|string(date-time)|false|none|none|
|receiptNumber|string|false|none|none|
|invoiceStatus|string|false|none|none|
|subTotal|integer(int64)|false|none|none|
|tax|integer(int64)|false|none|none|
|taxPercent|integer(int64)|false|none|none|
|total|integer(int64)|false|none|none|

<h2 id="tocS_FirstLastNameOut">FirstLastNameOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameout"></a>
<a id="schema_FirstLastNameOut"></a>
<a id="tocSfirstlastnameout"></a>
<a id="tocsfirstlastnameout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    }
  },
  "xml": {
    "name": "FirstLastNameOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_BatchFirstLastNameUSRaceEthnicityOut">BatchFirstLastNameUSRaceEthnicityOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnameusraceethnicityout"></a>
<a id="schema_BatchFirstLastNameUSRaceEthnicityOut"></a>
<a id="tocSbatchfirstlastnameusraceethnicityout"></a>
<a id="tocsbatchfirstlastnameusraceethnicityout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "raceEthnicityAlt": {
            "type": "string",
            "description": "Second most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "raceEthnicity": {
            "type": "string",
            "description": "Most likely US 'race'/ethnicity",
            "xml": {
              "attribute": true
            },
            "enum": [
              "W_NL",
              "HL",
              "A",
              "B_NL"
            ]
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "raceEthnicitiesTop": {
            "type": "array",
            "description": "List 'race'/ethnicities",
            "items": {
              "type": "string",
              "description": "List 'race'/ethnicities"
            }
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
        "xml": {
          "name": "FirstLastNameUSRaceEthnicityOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "BatchFirstLastNameUSRaceEthnicityOut"
  }
}

```

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameUSRaceEthnicityOut](#schemafirstlastnameusraceethnicityout)]|false|none|[Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.]|

<h2 id="tocS_SystemMetricsOut">SystemMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemasystemmetricsout"></a>
<a id="schema_SystemMetricsOut"></a>
<a id="tocSsystemmetricsout"></a>
<a id="tocssystemmetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "cacheMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "cacheName": {
            "type": "string"
          },
          "cacheStats": {
            "type": "string"
          }
        },
        "description": "Simple metrics system caches",
        "xml": {
          "name": "CacheMetricsOut"
        }
      }
    },
    "classifierMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "softwareVersion": {
            "type": "string"
          },
          "hostAddress": {
            "type": "string"
          },
          "learnQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "bufferSize": {
            "type": "integer",
            "format": "int32"
          },
          "preClassifyQueueSize": {
            "type": "integer",
            "format": "int32"
          },
          "factKeysSize": {
            "type": "integer",
            "format": "int32"
          },
          "factsLearned": {
            "type": "integer",
            "format": "int64"
          },
          "classifyDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "classifyDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsCurrent": {
            "type": "number",
            "format": "double"
          },
          "learnDurationsSummary": {
            "type": "number",
            "format": "double"
          },
          "classifierName": {
            "type": "string"
          },
          "featuresSize": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiNonVettedEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiNonVettedLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          },
          "aiNonVettedExpectedClassMetrics": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "classifierName": {
                  "type": "string"
                },
                "expectedClass": {
                  "type": "string"
                },
                "aiEstimateTotal": {
                  "type": "integer",
                  "format": "int64"
                },
                "aiEstimatePrecision": {
                  "type": "number",
                  "format": "double"
                },
                "aiEstimateRecall": {
                  "type": "number",
                  "format": "double"
                },
                "aiLearnTotal": {
                  "type": "integer",
                  "format": "int64"
                }
              },
              "description": "Simple metrics on a classifier, for a given expected class",
              "xml": {
                "name": "ExpectedClassMetricsOut"
              }
            }
          }
        },
        "description": "Simple metrics on a classifier",
        "xml": {
          "name": "ClassifierMetricsOut"
        }
      }
    },
    "sourceMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "source": {
            "type": "object",
            "properties": {
              "apiKey": {
                "type": "string",
                "xml": {
                  "name": "api_key"
                }
              },
              "userId": {
                "type": "string"
              },
              "admin": {
                "type": "boolean"
              },
              "vetted": {
                "type": "boolean"
              },
              "learnable": {
                "type": "boolean"
              },
              "anonymized": {
                "type": "boolean"
              },
              "partner": {
                "type": "boolean"
              },
              "striped": {
                "type": "boolean"
              },
              "corporate": {
                "type": "boolean"
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "xml": {
              "name": "APIKeyOut"
            }
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "metricTimeStamp": {
            "type": "integer",
            "format": "int64"
          },
          "aiStartTime": {
            "type": "integer",
            "format": "int64"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          },
          "snapshotDate": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given source",
        "xml": {
          "name": "SourceMetricsOut"
        }
      }
    },
    "totalMem": {
      "type": "integer",
      "format": "int64"
    },
    "freeMem": {
      "type": "integer",
      "format": "int64"
    },
    "maxMem": {
      "type": "integer",
      "format": "int64"
    }
  },
  "xml": {
    "name": "SystemMetricsOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheMetrics|[[CacheMetricsOut](#schemacachemetricsout)]|false|none|[Simple metrics system caches]|
|classifierMetrics|[[ClassifierMetricsOut](#schemaclassifiermetricsout)]|false|none|[Simple metrics on a classifier]|
|sourceMetrics|[[SourceMetricsOut](#schemasourcemetricsout)]|false|none|[Simple metrics on a classifier, for a given source]|
|totalMem|integer(int64)|false|none|none|
|freeMem|integer(int64)|false|none|none|
|maxMem|integer(int64)|false|none|none|

<h2 id="tocS_BatchPersonalNameIn">BatchPersonalNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamein"></a>
<a id="schema_BatchPersonalNameIn"></a>
<a id="tocSbatchpersonalnamein"></a>
<a id="tocsbatchpersonalnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "name": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "PersonalNameIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameIn](#schemapersonalnamein)]|false|none|none|

<h2 id="tocS_BatchFirstLastNamePhoneNumberIn">BatchFirstLastNamePhoneNumberIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonenumberin"></a>
<a id="schema_BatchFirstLastNamePhoneNumberIn"></a>
<a id="tocSbatchfirstlastnamephonenumberin"></a>
<a id="tocsbatchfirstlastnamephonenumberin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNamesWithPhoneNumbers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "phoneNumber": {
            "type": "string"
          },
          "FirstLastNameOriginedOut": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "countryOrigin": {
                "type": "string",
                "description": "Most likely country of Origin"
              },
              "countryOriginAlt": {
                "type": "string",
                "description": "Second best alternative : country of Origin"
              },
              "countriesOriginTop": {
                "type": "array",
                "description": "List countries of Origin (top 10)",
                "items": {
                  "type": "string",
                  "description": "List countries of Origin (top 10)"
                }
              },
              "score": {
                "type": "number",
                "description": "Compatibility to NamSor_v1 Origin score value",
                "format": "double"
              },
              "regionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "topRegionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "subRegionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "probabilityCalibrated": {
                "type": "number",
                "format": "double"
              },
              "probabilityAltCalibrated": {
                "type": "number",
                "format": "double"
              }
            },
            "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
            "xml": {
              "name": "FirstLastNameOriginedOut"
            }
          }
        },
        "xml": {
          "name": "FirstLastNamePhoneNumberIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNamePhoneNumberIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneNumberIn](#schemafirstlastnamephonenumberin)]|false|none|none|

<h2 id="tocS_APIPlansOut">APIPlansOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiplansout"></a>
<a id="schema_APIPlansOut"></a>
<a id="tocSapiplansout"></a>
<a id="tocsapiplansout"></a>

```json
{
  "type": "object",
  "properties": {
    "usageRatioForDupplicates": {
      "type": "integer",
      "format": "int64"
    },
    "currencyIso3": {
      "type": "string"
    },
    "currencySymbol": {
      "type": "string"
    },
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "planName": {
            "type": "string"
          },
          "planQuota": {
            "type": "integer",
            "format": "int64"
          },
          "price": {
            "type": "number",
            "format": "double"
          },
          "priceOverage": {
            "type": "number",
            "format": "double"
          }
        },
        "xml": {
          "name": "APIPlanOut"
        }
      }
    }
  },
  "xml": {
    "name": "APIPlansOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|usageRatioForDupplicates|integer(int64)|false|none|none|
|currencyIso3|string|false|none|none|
|currencySymbol|string|false|none|none|
|plans|[[APIPlanOut](#schemaapiplanout)]|false|none|none|

<h2 id="tocS_FirstLastNamePhoneCodedOut">FirstLastNamePhoneCodedOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonecodedout"></a>
<a id="schema_FirstLastNamePhoneCodedOut"></a>
<a id="tocSfirstlastnamephonecodedout"></a>
<a id="tocsfirstlastnamephonecodedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "internationalPhoneNumberVerified": {
      "type": "string"
    },
    "phoneCountryIso2Verified": {
      "type": "string"
    },
    "phoneCountryCode": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryCodeAlt": {
      "type": "integer",
      "format": "int32"
    },
    "phoneCountryIso2": {
      "type": "string"
    },
    "phoneCountryIso2Alt": {
      "type": "string"
    },
    "originCountryIso2": {
      "type": "string"
    },
    "originCountryIso2Alt": {
      "type": "string"
    },
    "phoneNumber": {
      "type": "string"
    },
    "verified": {
      "type": "boolean"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "countryIso2": {
      "type": "string"
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
  "xml": {
    "name": "FirstLastNamePhoneCodedOut"
  }
}

```

Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|internationalPhoneNumberVerified|string|false|none|none|
|phoneCountryIso2Verified|string|false|none|none|
|phoneCountryCode|integer(int32)|false|none|none|
|phoneCountryCodeAlt|integer(int32)|false|none|none|
|phoneCountryIso2|string|false|none|none|
|phoneCountryIso2Alt|string|false|none|none|
|originCountryIso2|string|false|none|none|
|originCountryIso2Alt|string|false|none|none|
|phoneNumber|string|false|none|none|
|verified|boolean|false|none|none|
|score|number(double)|false|none|none|
|countryIso2|string|false|none|none|

<h2 id="tocS_MatchPersonalFirstLastNameIn">MatchPersonalFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemamatchpersonalfirstlastnamein"></a>
<a id="schema_MatchPersonalFirstLastNameIn"></a>
<a id="tocSmatchpersonalfirstlastnamein"></a>
<a id="tocsmatchpersonalfirstlastnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "name1": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "firstName": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "lastName": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "FirstLastName"
      }
    },
    "name2": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        },
        "name": {
          "type": "string",
          "xml": {
            "attribute": true
          }
        }
      },
      "xml": {
        "name": "PersonalNameIn"
      }
    },
    "name": {
      "type": "string"
    }
  },
  "xml": {
    "name": "MatchPersonalFirstLastNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name1|[FirstLastNameIn](#schemafirstlastnamein)|false|none|none|
|name2|[PersonalNameIn](#schemapersonalnamein)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_PersonalNameParsedOut">PersonalNameParsedOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnameparsedout"></a>
<a id="schema_PersonalNameParsedOut"></a>
<a id="tocSpersonalnameparsedout"></a>
<a id="tocspersonalnameparsedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "nameParserType": {
      "type": "string"
    },
    "nameParserTypeAlt": {
      "type": "string"
    },
    "firstLastName": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        }
      },
      "xml": {
        "name": "FirstLastNameOut"
      }
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameParsedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|nameParserType|string|false|none|none|
|nameParserTypeAlt|string|false|none|none|
|firstLastName|[FirstLastNameOut](#schemafirstlastnameout)|false|none|none|
|score|number(double)|false|none|none|

<h2 id="tocS_ExpectedClassMetricsOut">ExpectedClassMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemaexpectedclassmetricsout"></a>
<a id="schema_ExpectedClassMetricsOut"></a>
<a id="tocSexpectedclassmetricsout"></a>
<a id="tocsexpectedclassmetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "classifierName": {
      "type": "string"
    },
    "expectedClass": {
      "type": "string"
    },
    "aiEstimateTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiEstimatePrecision": {
      "type": "number",
      "format": "double"
    },
    "aiEstimateRecall": {
      "type": "number",
      "format": "double"
    },
    "aiLearnTotal": {
      "type": "integer",
      "format": "int64"
    }
  },
  "description": "Simple metrics on a classifier, for a given expected class",
  "xml": {
    "name": "ExpectedClassMetricsOut"
  }
}

```

Simple metrics on a classifier, for a given expected class

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|none|
|expectedClass|string|false|none|none|
|aiEstimateTotal|integer(int64)|false|none|none|
|aiEstimatePrecision|number(double)|false|none|none|
|aiEstimateRecall|number(double)|false|none|none|
|aiLearnTotal|integer(int64)|false|none|none|

<h2 id="tocS_BatchFirstLastNameGeoZippedIn">BatchFirstLastNameGeoZippedIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegeozippedin"></a>
<a id="schema_BatchFirstLastNameGeoZippedIn"></a>
<a id="tocSbatchfirstlastnamegeozippedin"></a>
<a id="tocsbatchfirstlastnamegeozippedin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "zipCode": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "FirstLastNameGeoZippedIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNameGeoZippedIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGeoZippedIn](#schemafirstlastnamegeozippedin)]|false|none|none|

<h2 id="tocS_BatchFirstLastNameOriginedOut">BatchFirstLastNameOriginedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnameoriginedout"></a>
<a id="schema_BatchFirstLastNameOriginedOut"></a>
<a id="tocSbatchfirstlastnameoriginedout"></a>
<a id="tocsbatchfirstlastnameoriginedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "countryOrigin": {
            "type": "string",
            "description": "Most likely country of Origin"
          },
          "countryOriginAlt": {
            "type": "string",
            "description": "Second best alternative : country of Origin"
          },
          "countriesOriginTop": {
            "type": "array",
            "description": "List countries of Origin (top 10)",
            "items": {
              "type": "string",
              "description": "List countries of Origin (top 10)"
            }
          },
          "score": {
            "type": "number",
            "description": "Compatibility to NamSor_v1 Origin score value",
            "format": "double"
          },
          "regionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "topRegionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "subRegionOrigin": {
            "type": "string",
            "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
          },
          "probabilityCalibrated": {
            "type": "number",
            "format": "double"
          },
          "probabilityAltCalibrated": {
            "type": "number",
            "format": "double"
          }
        },
        "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
        "xml": {
          "name": "FirstLastNameOriginedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY origin from a list of personal names.",
  "xml": {
    "name": "BatchFirstLastNameOriginedOut"
  }
}

```

Represents the output of inferring the LIKELY origin from a list of personal names.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)]|false|none|[Represents the output of inferring the LIKELY country of Origin from a personal name.]|

<h2 id="tocS_FirstLastNameGeoZippedIn">FirstLastNameGeoZippedIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamegeozippedin"></a>
<a id="schema_FirstLastNameGeoZippedIn"></a>
<a id="tocSfirstlastnamegeozippedin"></a>
<a id="tocsfirstlastnamegeozippedin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "zipCode": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "FirstLastNameGeoZippedIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|countryIso2|string|false|none|none|
|zipCode|string|false|none|none|

<h2 id="tocS_BatchPersonalNameGeoIn">BatchPersonalNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchpersonalnamegeoin"></a>
<a id="schema_BatchPersonalNameGeoIn"></a>
<a id="tocSbatchpersonalnamegeoin"></a>
<a id="tocsbatchpersonalnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "name": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "PersonalNameGeoIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchPersonalNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[PersonalNameGeoIn](#schemapersonalnamegeoin)]|false|none|none|

<h2 id="tocS_FirstLastNameIn">FirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamein"></a>
<a id="schema_FirstLastNameIn"></a>
<a id="tocSfirstlastnamein"></a>
<a id="tocsfirstlastnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "FirstLastName"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|

<h2 id="tocS_APIClassifierTaxonomyOut">APIClassifierTaxonomyOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiclassifiertaxonomyout"></a>
<a id="schema_APIClassifierTaxonomyOut"></a>
<a id="tocSapiclassifiertaxonomyout"></a>
<a id="tocsapiclassifiertaxonomyout"></a>

```json
{
  "type": "object",
  "properties": {
    "classifierName": {
      "type": "string"
    },
    "taxonomyClasses": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "xml": {
    "name": "APIClassifierTaxonomyOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|classifierName|string|false|none|none|
|taxonomyClasses|[string]|false|none|none|

<h2 id="tocS_NameMatchCandidateOut">NameMatchCandidateOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchcandidateout"></a>
<a id="schema_NameMatchCandidateOut"></a>
<a id="tocSnamematchcandidateout"></a>
<a id="tocsnamematchcandidateout"></a>

```json
{
  "type": "object",
  "properties": {
    "candidateName": {
      "type": "string"
    },
    "probability": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "NameMatchCandidateOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidateName|string|false|none|none|
|probability|number(double)|false|none|none|

<h2 id="tocS_StripeCustomerOut">StripeCustomerOut</h2>
<!-- backwards compatibility -->
<a id="schemastripecustomerout"></a>
<a id="schema_StripeCustomerOut"></a>
<a id="tocSstripecustomerout"></a>
<a id="tocsstripecustomerout"></a>

```json
{
  "type": "object",
  "properties": {
    "stripeCustomerId": {
      "type": "string"
    },
    "sourceCountry": {
      "type": "string"
    },
    "sourceCurrency": {
      "type": "string"
    },
    "stripedCards": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "defaultCard": {
            "type": "boolean"
          },
          "sourceId": {
            "type": "string"
          },
          "expMonth": {
            "type": "integer",
            "format": "int64"
          },
          "expYear": {
            "type": "integer",
            "format": "int64"
          },
          "last4": {
            "type": "string"
          },
          "brand": {
            "type": "string"
          }
        },
        "xml": {
          "name": "StripeCustomerOut"
        }
      }
    }
  },
  "xml": {
    "name": "StripeCustomerOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stripeCustomerId|string|false|none|none|
|sourceCountry|string|false|none|none|
|sourceCurrency|string|false|none|none|
|stripedCards|[[StripeCardOut](#schemastripecardout)]|false|none|none|

<h2 id="tocS_BatchFirstLastNamePhoneCodedOut">BatchFirstLastNamePhoneCodedOut</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonecodedout"></a>
<a id="schema_BatchFirstLastNamePhoneCodedOut"></a>
<a id="tocSbatchfirstlastnamephonecodedout"></a>
<a id="tocsbatchfirstlastnamephonecodedout"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNamesWithPhoneNumbers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "internationalPhoneNumberVerified": {
            "type": "string"
          },
          "phoneCountryIso2Verified": {
            "type": "string"
          },
          "phoneCountryCode": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryCodeAlt": {
            "type": "integer",
            "format": "int32"
          },
          "phoneCountryIso2": {
            "type": "string"
          },
          "phoneCountryIso2Alt": {
            "type": "string"
          },
          "originCountryIso2": {
            "type": "string"
          },
          "originCountryIso2Alt": {
            "type": "string"
          },
          "phoneNumber": {
            "type": "string"
          },
          "verified": {
            "type": "boolean"
          },
          "score": {
            "type": "number",
            "format": "double"
          },
          "countryIso2": {
            "type": "string"
          }
        },
        "description": "Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.",
        "xml": {
          "name": "FirstLastNamePhoneCodedOut"
        }
      }
    }
  },
  "description": "Represents the output of inferring the LIKELY country and phone code of personal names+phones.",
  "xml": {
    "name": "BatchFirstLastNamePhoneCodedOut"
  }
}

```

Represents the output of inferring the LIKELY country and phone code of personal names+phones.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneCodedOut](#schemafirstlastnamephonecodedout)]|false|none|[Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.]|

<h2 id="tocS_FirstLastNameUSRaceEthnicityOut">FirstLastNameUSRaceEthnicityOut</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnameusraceethnicityout"></a>
<a id="schema_FirstLastNameUSRaceEthnicityOut"></a>
<a id="tocSfirstlastnameusraceethnicityout"></a>
<a id="tocsfirstlastnameusraceethnicityout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "raceEthnicityAlt": {
      "type": "string",
      "description": "Second most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "raceEthnicity": {
      "type": "string",
      "description": "Most likely US 'race'/ethnicity",
      "xml": {
        "attribute": true
      },
      "enum": [
        "W_NL",
        "HL",
        "A",
        "B_NL"
      ]
    },
    "score": {
      "type": "number",
      "description": "Compatibility to NamSor_v1 Origin score value",
      "format": "double"
    },
    "raceEthnicitiesTop": {
      "type": "array",
      "description": "List 'race'/ethnicities",
      "items": {
        "type": "string",
        "description": "List 'race'/ethnicities"
      }
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "description": "Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.",
  "xml": {
    "name": "FirstLastNameUSRaceEthnicityOut"
  }
}

```

Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|raceEthnicityAlt|string|false|none|Second most likely US 'race'/ethnicity|
|raceEthnicity|string|false|none|Most likely US 'race'/ethnicity|
|score|number(double)|false|none|Compatibility to NamSor_v1 Origin score value|
|raceEthnicitiesTop|[string]|false|none|List 'race'/ethnicities|
|probabilityCalibrated|number(double)|false|none|none|
|probabilityAltCalibrated|number(double)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|raceEthnicityAlt|W_NL|
|raceEthnicityAlt|HL|
|raceEthnicityAlt|A|
|raceEthnicityAlt|B_NL|
|raceEthnicity|W_NL|
|raceEthnicity|HL|
|raceEthnicity|A|
|raceEthnicity|B_NL|

<h2 id="tocS_BatchFirstLastNamePhoneNumberGeoIn">BatchFirstLastNamePhoneNumberGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamephonenumbergeoin"></a>
<a id="schema_BatchFirstLastNamePhoneNumberGeoIn"></a>
<a id="tocSbatchfirstlastnamephonenumbergeoin"></a>
<a id="tocsbatchfirstlastnamephonenumbergeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNamesWithPhoneNumbers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "phoneNumber": {
            "type": "string"
          },
          "FirstLastNameOriginedOut": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "firstName": {
                "type": "string"
              },
              "lastName": {
                "type": "string"
              },
              "countryOrigin": {
                "type": "string",
                "description": "Most likely country of Origin"
              },
              "countryOriginAlt": {
                "type": "string",
                "description": "Second best alternative : country of Origin"
              },
              "countriesOriginTop": {
                "type": "array",
                "description": "List countries of Origin (top 10)",
                "items": {
                  "type": "string",
                  "description": "List countries of Origin (top 10)"
                }
              },
              "score": {
                "type": "number",
                "description": "Compatibility to NamSor_v1 Origin score value",
                "format": "double"
              },
              "regionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "topRegionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "subRegionOrigin": {
                "type": "string",
                "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
              },
              "probabilityCalibrated": {
                "type": "number",
                "format": "double"
              },
              "probabilityAltCalibrated": {
                "type": "number",
                "format": "double"
              }
            },
            "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
            "xml": {
              "name": "FirstLastNameOriginedOut"
            }
          },
          "countryIso2": {
            "type": "string"
          },
          "countryIso2Alt": {
            "type": "string"
          }
        },
        "xml": {
          "name": "FirstLastNamePhoneNumberGeoIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNamePhoneNumberGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNamesWithPhoneNumbers|[[FirstLastNamePhoneNumberGeoIn](#schemafirstlastnamephonenumbergeoin)]|false|none|none|

<h2 id="tocS_BatchParsedFullNameIn">BatchParsedFullNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchparsedfullnamein"></a>
<a id="schema_BatchParsedFullNameIn"></a>
<a id="tocSbatchparsedfullnamein"></a>
<a id="tocsbatchparsedfullnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "prefixOrTitle": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "suffix": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "middleName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "ParsedFullNameIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchParsedFullNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[ParsedFullNameIn](#schemaparsedfullnamein)]|false|none|none|

<h2 id="tocS_PersonalNameGeoIn">PersonalNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegeoin"></a>
<a id="schema_PersonalNameGeoIn"></a>
<a id="tocSpersonalnamegeoin"></a>
<a id="tocspersonalnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "name": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "countryIso2": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "PersonalNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|countryIso2|string|false|none|none|

<h2 id="tocS_APIServiceOut">APIServiceOut</h2>
<!-- backwards compatibility -->
<a id="schemaapiserviceout"></a>
<a id="schema_APIServiceOut"></a>
<a id="tocSapiserviceout"></a>
<a id="tocsapiserviceout"></a>

```json
{
  "type": "object",
  "properties": {
    "serviceName": {
      "type": "string"
    },
    "serviceGroup": {
      "type": "string"
    },
    "costInUnits": {
      "type": "integer",
      "format": "int32"
    }
  },
  "xml": {
    "name": "APIServiceOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceName|string|false|none|none|
|serviceGroup|string|false|none|none|
|costInUnits|integer(int32)|false|none|none|

<h2 id="tocS_BatchFirstLastNameIn">BatchFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamein"></a>
<a id="schema_BatchFirstLastNameIn"></a>
<a id="tocSbatchfirstlastnamein"></a>
<a id="tocsbatchfirstlastnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "FirstLastName"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameIn](#schemafirstlastnamein)]|false|none|none|

<h2 id="tocS_ParsedFullNameIn">ParsedFullNameIn</h2>
<!-- backwards compatibility -->
<a id="schemaparsedfullnamein"></a>
<a id="schema_ParsedFullNameIn"></a>
<a id="tocSparsedfullnamein"></a>
<a id="tocsparsedfullnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "prefixOrTitle": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "suffix": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "middleName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    }
  },
  "xml": {
    "name": "ParsedFullNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|prefixOrTitle|string|false|none|none|
|suffix|string|false|none|none|
|middleName|string|false|none|none|

<h2 id="tocS_RomanizedNameOut">RomanizedNameOut</h2>
<!-- backwards compatibility -->
<a id="schemaromanizednameout"></a>
<a id="schema_RomanizedNameOut"></a>
<a id="tocSromanizednameout"></a>
<a id="tocsromanizednameout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "latinName": {
      "type": "string"
    },
    "originalName": {
      "type": "string"
    },
    "sourceLanguage": {
      "type": "string"
    },
    "targetLanguage": {
      "type": "string"
    },
    "sourceScript": {
      "type": "string"
    },
    "targetScript": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "RomanizedNameOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|latinName|string|false|none|none|
|originalName|string|false|none|none|
|sourceLanguage|string|false|none|none|
|targetLanguage|string|false|none|none|
|sourceScript|string|false|none|none|
|targetScript|string|false|none|none|
|score|number(double)|false|none|none|

<h2 id="tocS_NameMatchedOut">NameMatchedOut</h2>
<!-- backwards compatibility -->
<a id="schemanamematchedout"></a>
<a id="schema_NameMatchedOut"></a>
<a id="tocSnamematchedout"></a>
<a id="tocsnamematchedout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "matchStatus": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "NameMatchedOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|matchStatus|string|false|none|none|
|score|number(double)|false|none|none|

<h2 id="tocS_BatchMatchPersonalFirstLastNameIn">BatchMatchPersonalFirstLastNameIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchmatchpersonalfirstlastnamein"></a>
<a id="schema_BatchMatchPersonalFirstLastNameIn"></a>
<a id="tocSbatchmatchpersonalfirstlastnamein"></a>
<a id="tocsbatchmatchpersonalfirstlastnamein"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "name1": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              },
              "firstName": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              },
              "lastName": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              }
            },
            "xml": {
              "name": "FirstLastName"
            }
          },
          "name2": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              },
              "name": {
                "type": "string",
                "xml": {
                  "attribute": true
                }
              }
            },
            "xml": {
              "name": "PersonalNameIn"
            }
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "MatchPersonalFirstLastNameIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchMatchPersonalFirstLastNameIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[MatchPersonalFirstLastNameIn](#schemamatchpersonalfirstlastnamein)]|false|none|none|

<h2 id="tocS_FirstLastNamePhoneNumberGeoIn">FirstLastNamePhoneNumberGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemafirstlastnamephonenumbergeoin"></a>
<a id="schema_FirstLastNamePhoneNumberGeoIn"></a>
<a id="tocSfirstlastnamephonenumbergeoin"></a>
<a id="tocsfirstlastnamephonenumbergeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "firstName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "lastName": {
      "type": "string",
      "xml": {
        "attribute": true
      }
    },
    "phoneNumber": {
      "type": "string"
    },
    "FirstLastNameOriginedOut": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "countryOrigin": {
          "type": "string",
          "description": "Most likely country of Origin"
        },
        "countryOriginAlt": {
          "type": "string",
          "description": "Second best alternative : country of Origin"
        },
        "countriesOriginTop": {
          "type": "array",
          "description": "List countries of Origin (top 10)",
          "items": {
            "type": "string",
            "description": "List countries of Origin (top 10)"
          }
        },
        "score": {
          "type": "number",
          "description": "Compatibility to NamSor_v1 Origin score value",
          "format": "double"
        },
        "regionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "topRegionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "subRegionOrigin": {
          "type": "string",
          "description": "Most likely region of Origin (based on countryOrigin ISO2 code)"
        },
        "probabilityCalibrated": {
          "type": "number",
          "format": "double"
        },
        "probabilityAltCalibrated": {
          "type": "number",
          "format": "double"
        }
      },
      "description": "Represents the output of inferring the LIKELY country of Origin from a personal name.",
      "xml": {
        "name": "FirstLastNameOriginedOut"
      }
    },
    "countryIso2": {
      "type": "string"
    },
    "countryIso2Alt": {
      "type": "string"
    }
  },
  "xml": {
    "name": "FirstLastNamePhoneNumberGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|firstName|string|false|none|none|
|lastName|string|false|none|none|
|phoneNumber|string|false|none|none|
|FirstLastNameOriginedOut|[FirstLastNameOriginedOut](#schemafirstlastnameoriginedout)|false|none|Represents the output of inferring the LIKELY country of Origin from a personal name.|
|countryIso2|string|false|none|none|
|countryIso2Alt|string|false|none|none|

<h2 id="tocS_ClassifierMetricsOut">ClassifierMetricsOut</h2>
<!-- backwards compatibility -->
<a id="schemaclassifiermetricsout"></a>
<a id="schema_ClassifierMetricsOut"></a>
<a id="tocSclassifiermetricsout"></a>
<a id="tocsclassifiermetricsout"></a>

```json
{
  "type": "object",
  "properties": {
    "softwareVersion": {
      "type": "string"
    },
    "hostAddress": {
      "type": "string"
    },
    "learnQueueSize": {
      "type": "integer",
      "format": "int32"
    },
    "bufferSize": {
      "type": "integer",
      "format": "int32"
    },
    "preClassifyQueueSize": {
      "type": "integer",
      "format": "int32"
    },
    "factKeysSize": {
      "type": "integer",
      "format": "int32"
    },
    "factsLearned": {
      "type": "integer",
      "format": "int64"
    },
    "classifyDurationsCurrent": {
      "type": "number",
      "format": "double"
    },
    "classifyDurationsSummary": {
      "type": "number",
      "format": "double"
    },
    "learnDurationsCurrent": {
      "type": "number",
      "format": "double"
    },
    "learnDurationsSummary": {
      "type": "number",
      "format": "double"
    },
    "classifierName": {
      "type": "string"
    },
    "featuresSize": {
      "type": "integer",
      "format": "int64"
    },
    "aiVettedEstimateTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiVettedEstimatePrecision": {
      "type": "number",
      "format": "double"
    },
    "aiVettedEstimateRecall": {
      "type": "number",
      "format": "double"
    },
    "aiVettedLearnTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiNonVettedEstimateTotal": {
      "type": "integer",
      "format": "int64"
    },
    "aiNonVettedEstimatePrecision": {
      "type": "number",
      "format": "double"
    },
    "aiNonVettedEstimateRecall": {
      "type": "number",
      "format": "double"
    },
    "aiNonVettedLearnTotal": {
      "type": "integer",
      "format": "int64"
    },
    "metricTimeStamp": {
      "type": "integer",
      "format": "int64"
    },
    "aiStartTime": {
      "type": "integer",
      "format": "int64"
    },
    "aiVettedExpectedClassMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "expectedClass": {
            "type": "string"
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given expected class",
        "xml": {
          "name": "ExpectedClassMetricsOut"
        }
      }
    },
    "aiNonVettedExpectedClassMetrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "classifierName": {
            "type": "string"
          },
          "expectedClass": {
            "type": "string"
          },
          "aiEstimateTotal": {
            "type": "integer",
            "format": "int64"
          },
          "aiEstimatePrecision": {
            "type": "number",
            "format": "double"
          },
          "aiEstimateRecall": {
            "type": "number",
            "format": "double"
          },
          "aiLearnTotal": {
            "type": "integer",
            "format": "int64"
          }
        },
        "description": "Simple metrics on a classifier, for a given expected class",
        "xml": {
          "name": "ExpectedClassMetricsOut"
        }
      }
    }
  },
  "description": "Simple metrics on a classifier",
  "xml": {
    "name": "ClassifierMetricsOut"
  }
}

```

Simple metrics on a classifier

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|softwareVersion|string|false|none|none|
|hostAddress|string|false|none|none|
|learnQueueSize|integer(int32)|false|none|none|
|bufferSize|integer(int32)|false|none|none|
|preClassifyQueueSize|integer(int32)|false|none|none|
|factKeysSize|integer(int32)|false|none|none|
|factsLearned|integer(int64)|false|none|none|
|classifyDurationsCurrent|number(double)|false|none|none|
|classifyDurationsSummary|number(double)|false|none|none|
|learnDurationsCurrent|number(double)|false|none|none|
|learnDurationsSummary|number(double)|false|none|none|
|classifierName|string|false|none|none|
|featuresSize|integer(int64)|false|none|none|
|aiVettedEstimateTotal|integer(int64)|false|none|none|
|aiVettedEstimatePrecision|number(double)|false|none|none|
|aiVettedEstimateRecall|number(double)|false|none|none|
|aiVettedLearnTotal|integer(int64)|false|none|none|
|aiNonVettedEstimateTotal|integer(int64)|false|none|none|
|aiNonVettedEstimatePrecision|number(double)|false|none|none|
|aiNonVettedEstimateRecall|number(double)|false|none|none|
|aiNonVettedLearnTotal|integer(int64)|false|none|none|
|metricTimeStamp|integer(int64)|false|none|none|
|aiStartTime|integer(int64)|false|none|none|
|aiVettedExpectedClassMetrics|[[ExpectedClassMetricsOut](#schemaexpectedclassmetricsout)]|false|none|[Simple metrics on a classifier, for a given expected class]|
|aiNonVettedExpectedClassMetrics|[[ExpectedClassMetricsOut](#schemaexpectedclassmetricsout)]|false|none|[Simple metrics on a classifier, for a given expected class]|

<h2 id="tocS_PersonalNameGeoOut">PersonalNameGeoOut</h2>
<!-- backwards compatibility -->
<a id="schemapersonalnamegeoout"></a>
<a id="schema_PersonalNameGeoOut"></a>
<a id="tocSpersonalnamegeoout"></a>
<a id="tocspersonalnamegeoout"></a>

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "score": {
      "type": "number",
      "format": "double"
    },
    "country": {
      "type": "string"
    },
    "countryAlt": {
      "type": "string"
    },
    "region": {
      "type": "string"
    },
    "topRegion": {
      "type": "string"
    },
    "subRegion": {
      "type": "string"
    },
    "countriesTop": {
      "type": "array",
      "description": "List countries (top 10)",
      "items": {
        "type": "string",
        "description": "List countries (top 10)"
      }
    },
    "probabilityCalibrated": {
      "type": "number",
      "format": "double"
    },
    "probabilityAltCalibrated": {
      "type": "number",
      "format": "double"
    }
  },
  "xml": {
    "name": "PersonalNameGeoOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|
|score|number(double)|false|none|none|
|country|string|false|none|none|
|countryAlt|string|false|none|none|
|region|string|false|none|none|
|topRegion|string|false|none|none|
|subRegion|string|false|none|none|
|countriesTop|[string]|false|none|List countries (top 10)|
|probabilityCalibrated|number(double)|false|none|none|
|probabilityAltCalibrated|number(double)|false|none|none|

<h2 id="tocS_BatchFirstLastNameGeoIn">BatchFirstLastNameGeoIn</h2>
<!-- backwards compatibility -->
<a id="schemabatchfirstlastnamegeoin"></a>
<a id="schema_BatchFirstLastNameGeoIn"></a>
<a id="tocSbatchfirstlastnamegeoin"></a>
<a id="tocsbatchfirstlastnamegeoin"></a>

```json
{
  "type": "object",
  "properties": {
    "personalNames": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "firstName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "lastName": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          },
          "countryIso2": {
            "type": "string",
            "xml": {
              "attribute": true
            }
          }
        },
        "xml": {
          "name": "FirstLastNameGeoIn"
        }
      }
    }
  },
  "xml": {
    "name": "BatchFirstLastNameGeoIn"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|personalNames|[[FirstLastNameGeoIn](#schemafirstlastnamegeoin)]|false|none|none|

<h2 id="tocS_CurrenciesOut">CurrenciesOut</h2>
<!-- backwards compatibility -->
<a id="schemacurrenciesout"></a>
<a id="schema_CurrenciesOut"></a>
<a id="tocScurrenciesout"></a>
<a id="tocscurrenciesout"></a>

```json
{
  "type": "object",
  "properties": {
    "currenciesIso3": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "xml": {
    "name": "CurrenciesOut"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currenciesIso3|[string]|false|none|none|

