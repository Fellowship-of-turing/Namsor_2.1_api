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
highlight_theme: darkula
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

<h1 id="namsor-api-v2-personal">Personal</h1>

Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy

## Country

<a id="opIdCountry"></a>

> **Country** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/country/{personalNameFull}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "score": "number",
  "country": "string",
  "countryAlt": "string",
  "region": "string",
  "topRegion": "string",
  "subRegion": "string",
  "countriesTop": "array",
  "probabilityCalibrated": "number",
  "probabilityAltCalibrated": "number"
}
```

<h3 id="country-responses">Response</h3>

!{response-table-tag}










## Origin

<a id="opIdOrigin"></a>

> **Origin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/origin/{firstName}/{lastName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "countryOrigin": "string",
  "countryOriginAlt": "string",
  "countriesOriginTop": "array",
  "score": "number",
  "regionOrigin": "string",
  "topRegionOrigin": "string",
  "subRegionOrigin": "string",
  "probabilityCalibrated": "number",
  "probabilityAltCalibrated": "number"
}
```

<h3 id="origin-responses">Response</h3>

!{response-table-tag}










## Gender

<a id="opIdGender"></a>

> **Gender** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/{firstName}/{lastName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-responses">Response</h3>

!{response-table-tag}










## Gender Geo

<a id="opIdGender-Geo"></a>

> **Gender Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-geo-responses">Response</h3>

!{response-table-tag}










## Gender Geo Batch

<a id="opIdGender-Geo-Batch"></a>

> **Gender Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-geo-batch-responses">Response</h3>

!{response-table-tag}










## Gender Batch

<a id="opIdGender-Batch"></a>

> **Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-batch-responses">Response</h3>

!{response-table-tag}










## Parsed Gender Batch

<a id="opIdParsed-Gender-Batch"></a>

> **Parsed Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","prefixOrTitle":"string","suffix":"string","middleName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parsed-gender-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderBatch`

<h3 id="parsed-gender-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|prefixOrTitle|String|false||
|suffix|String|false||
|middleName|String|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="parsed-gender-batch-responses">Response</h3>

!{response-table-tag}










## Parsed Gender Geo Batch

<a id="opIdParsed-Gender-Geo-Batch"></a>

> **Parsed Gender Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","prefixOrTitle":"string","suffix":"string","middleName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="parsed-gender-geo-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/parsedGenderGeoBatch`

<h3 id="parsed-gender-geo-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||
|prefixOrTitle|String|false||
|suffix|String|false||
|middleName|String|false||
|countryIso2|String|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="parsed-gender-geo-batch-responses">Response</h3>

!{response-table-tag}










## Gender Full Geo

<a id="opIdGender-Full-Geo"></a>

> **Gender Full Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeo/{fullName}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-full-geo-responses">Response</h3>

!{response-table-tag}










## Gender Full

<a id="opIdGender-Full"></a>

> **Gender Full** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFull/{fullName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-full-responses">Response</h3>

!{response-table-tag}










## Gender Full Batch

<a id="opIdGender-Full-Batch"></a>

> **Gender Full Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-full-batch-responses">Response</h3>

!{response-table-tag}










## Gender Full Geo Batch

<a id="opIdGender-Full-Geo-Batch"></a>

> **Gender Full Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderFullGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-full-geo-batch-responses">Response</h3>

!{response-table-tag}










## Origin Batch

<a id="opIdOrigin-Batch"></a>

> **Origin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/originBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.*

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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "countryOrigin": "string",
    "countryOriginAlt": "string",
    "countriesOriginTop": "array",
    "score": "number",
    "regionOrigin": "string",
    "topRegionOrigin": "string",
    "subRegionOrigin": "string",
    "probabilityCalibrated": "number",
    "probabilityAltCalibrated": "number"
  }
]
```

<h3 id="origin-batch-responses">Response</h3>

!{response-table-tag}










## Country Batch

<a id="opIdCountry-Batch"></a>

> **Country Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/countryBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.*

> Body parameter

```json
[
  {
    "id": "string",
    "name": "string"
  }
]
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
[
  {
    "id": "string",
    "name": "string",
    "score": "number",
    "country": "string",
    "countryAlt": "string",
    "region": "string",
    "topRegion": "string",
    "subRegion": "string",
    "countriesTop": "array",
    "probabilityCalibrated": "number",
    "probabilityAltCalibrated": "number"
  }
]
```

<h3 id="country-batch-responses">Response</h3>

!{response-table-tag}










## US Race and Ethnicity

<a id="opIdUS-Race-and-Ethnicity"></a>

> **US Race and Ethnicity** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicity/{firstName}/{lastName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).*

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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "raceEthnicityAlt": "string",
  "raceEthnicity": "string",
  "score": "number",
  "raceEthnicitiesTop": "array",
  "probabilityCalibrated": "number",
  "probabilityAltCalibrated": "number"
}
```

<h3 id="us-race-and-ethnicity-responses">Response</h3>

!{response-table-tag}










## US ZIP Race and Ethnicity

<a id="opIdUS-ZIP-Race-and-Ethnicity"></a>

> **US ZIP Race and Ethnicity** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).*

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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "raceEthnicityAlt": "string",
  "raceEthnicity": "string",
  "score": "number",
  "raceEthnicitiesTop": "array",
  "probabilityCalibrated": "number",
  "probabilityAltCalibrated": "number"
}
```

<h3 id="us-zip-race-and-ethnicity-responses">Response</h3>

!{response-table-tag}










## US Race and Ethnicity Batch

<a id="opIdUS-Race-and-Ethnicity-Batch"></a>

> **US Race and Ethnicity Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usRaceEthnicityBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.*

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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "raceEthnicityAlt": "string",
    "raceEthnicity": "string",
    "score": "number",
    "raceEthnicitiesTop": "array",
    "probabilityCalibrated": "number",
    "probabilityAltCalibrated": "number"
  }
]
```

<h3 id="us-race-and-ethnicity-batch-responses">Response</h3>

!{response-table-tag}










## US ZIP Race and Ethnicity Batch

<a id="opIdUS-ZIP-Race-and-Ethnicity-Batch"></a>

> **US ZIP Race and Ethnicity Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string","zipCode":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/usZipRaceEthnicityBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.*

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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "raceEthnicityAlt": "string",
    "raceEthnicity": "string",
    "score": "number",
    "raceEthnicitiesTop": "array",
    "probabilityCalibrated": "number",
    "probabilityAltCalibrated": "number"
  }
]
```

<h3 id="us-zip-race-and-ethnicity-batch-responses">Response</h3>

!{response-table-tag}










## Diaspora

<a id="opIdDiaspora"></a>

> **Diaspora** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "score": "number",
  "ethnicityAlt": "string",
  "ethnicity": "string",
  "lifted": "boolean",
  "countryIso2": "string",
  "ethnicitiesTop": "array"
}
```

<h3 id="diaspora-responses">Response</h3>

!{response-table-tag}










## Diaspora Batch

<a id="opIdDiaspora-Batch"></a>

> **Diaspora Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/diasporaBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)*

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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "score": "number",
    "ethnicityAlt": "string",
    "ethnicity": "string",
    "lifted": "boolean",
    "countryIso2": "string",
    "ethnicitiesTop": "array"
  }
]
```

<h3 id="diaspora-batch-responses">Response</h3>

!{response-table-tag}










## Parse Name Geo

<a id="opIdParse-Name-Geo"></a>

> **Parse Name Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "nameParserType": "string",
  "nameParserTypeAlt": "string",
  "score": "number"
}
```

<h3 id="parse-name-geo-responses">Response</h3>

!{response-table-tag}










## Parse Name Batch

<a id="opIdParse-Name-Batch"></a>

> **Parse Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "nameParserType": "string",
    "nameParserTypeAlt": "string",
    "score": "number"
  }
]
```

<h3 id="parse-name-batch-responses">Response</h3>

!{response-table-tag}










## Parse Name Geo Batch

<a id="opIdParse-Name-Geo-Batch"></a>

> **Parse Name Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string","countryIso2":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseNameGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "nameParserType": "string",
    "nameParserTypeAlt": "string",
    "score": "number"
  }
]
```

<h3 id="parse-name-geo-batch-responses">Response</h3>

!{response-table-tag}










## Parse Name

<a id="opIdParse-Name"></a>

> **Parse Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseName/{nameFull}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "nameParserType": "string",
  "nameParserTypeAlt": "string",
  "score": "number"
}
```

<h3 id="parse-name-responses">Response</h3>

!{response-table-tag}










<h1 id="namsor-api-v2-social">Social</h1>

Social media and pseudonyms

## Phone Code

<a id="opIdPhone-Code"></a>

> **Phone Code** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "internationalPhoneNumberVerified": "string",
  "phoneCountryIso2Verified": "string",
  "phoneCountryCode": "integer",
  "phoneCountryCodeAlt": "integer",
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneNumber": "string",
  "verified": "boolean",
  "score": "number",
  "countryIso2": "string"
}
```

<h3 id="phone-code-responses">Response</h3>

!{response-table-tag}










## Phone Code Geo

<a id="opIdPhone-Code-Geo"></a>

> **Phone Code Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "internationalPhoneNumberVerified": "string",
  "phoneCountryIso2Verified": "string",
  "phoneCountryCode": "integer",
  "phoneCountryCodeAlt": "integer",
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneNumber": "string",
  "verified": "boolean",
  "score": "number",
  "countryIso2": "string"
}
```

<h3 id="phone-code-geo-responses">Response</h3>

!{response-table-tag}










## Phone Code Geo Feedback Loop

<a id="opIdPhone-Code-Geo-Feedback-Loop"></a>

> **Phone Code Geo Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "internationalPhoneNumberVerified": "string",
  "phoneCountryIso2Verified": "string",
  "phoneCountryCode": "integer",
  "phoneCountryCodeAlt": "integer",
  "phoneCountryIso2": "string",
  "phoneCountryIso2Alt": "string",
  "originCountryIso2": "string",
  "originCountryIso2Alt": "string",
  "phoneNumber": "string",
  "verified": "boolean",
  "score": "number",
  "countryIso2": "string"
}
```

<h3 id="phone-code-geo-feedback-loop-responses">Response</h3>

!{response-table-tag}










## Phone Code Batch

<a id="opIdPhone-Code-Batch"></a>

> **Phone Code Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","phoneNumber":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.*

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
|FirstLastNameOriginedOut|Object|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "internationalPhoneNumberVerified": "string",
    "phoneCountryIso2Verified": "string",
    "phoneCountryCode": "integer",
    "phoneCountryCodeAlt": "integer",
    "phoneCountryIso2": "string",
    "phoneCountryIso2Alt": "string",
    "originCountryIso2": "string",
    "originCountryIso2Alt": "string",
    "phoneNumber": "string",
    "verified": "boolean",
    "score": "number",
    "countryIso2": "string"
  }
]
```

<h3 id="phone-code-batch-responses">Response</h3>

!{response-table-tag}










## Phone Code Geo Batch

<a id="opIdPhone-Code-Geo-Batch"></a>

> **Phone Code Geo Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string","phoneNumber":"string","countryIso2":"string","countryIso2Alt":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/phoneCodeGeoBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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



*Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).*

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
|FirstLastNameOriginedOut|Object|false||
|countryIso2|String|false||
|countryIso2Alt|String|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "internationalPhoneNumberVerified": "string",
    "phoneCountryIso2Verified": "string",
    "phoneCountryCode": "integer",
    "phoneCountryCodeAlt": "integer",
    "phoneCountryIso2": "string",
    "phoneCountryIso2Alt": "string",
    "originCountryIso2": "string",
    "originCountryIso2Alt": "string",
    "phoneNumber": "string",
    "verified": "boolean",
    "score": "number",
    "countryIso2": "string"
  }
]
```

<h3 id="phone-code-geo-batch-responses">Response</h3>

!{response-table-tag}










<h1 id="namsor-api-v2-chinese">Chinese</h1>

CHINESE special features

## Parse Chinese Name

<a id="opIdParse-Chinese-Name"></a>

> **Parse Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseName/{chineseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "nameParserType": "string",
  "nameParserTypeAlt": "string",
  "score": "number"
}
```

<h3 id="parse-chinese-name-responses">Response</h3>

!{response-table-tag}










## Parse Chinese Name Batch

<a id="opIdParse-Chinese-Name-Batch"></a>

> **Parse Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "nameParserType": "string",
    "nameParserTypeAlt": "string",
    "score": "number"
  }
]
```

<h3 id="parse-chinese-name-batch-responses">Response</h3>

!{response-table-tag}










## Pinyin Chinese Name

<a id="opIdPinyin-Chinese-Name"></a>

> **Pinyin Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseName/{chineseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "nameParserType": "string",
  "nameParserTypeAlt": "string",
  "score": "number"
}
```

<h3 id="pinyin-chinese-name-responses">Response</h3>

!{response-table-tag}










## Pinyin Chinese Name Batch

<a id="opIdPinyin-Chinese-Name-Batch"></a>

> **Pinyin Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/pinyinChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "nameParserType": "string",
    "nameParserTypeAlt": "string",
    "score": "number"
  }
]
```

<h3 id="pinyin-chinese-name-batch-responses">Response</h3>

!{response-table-tag}










## Chinese Name Match

<a id="opIdChinese-Name-Match"></a>

> **Chinese Name Match** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="chinese-name-match-responses">Response</h3>

!{response-table-tag}










## Chinese Name Match Batch

<a id="opIdChinese-Name-Match-Batch"></a>

> **Chinese Name Match Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="chinese-name-match-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameMatchBatch`

<h3 id="chinese-name-match-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="chinese-name-match-batch-responses">Response</h3>

!{response-table-tag}










## Gender Chinese Name Pinyin

<a id="opIdGender-Chinese-Name-Pinyin"></a>

> **Gender Chinese Name Pinyin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-chinese-name-pinyin-responses">Response</h3>

!{response-table-tag}










## Gender Chinese Name Pinyin Batch

<a id="opIdGender-Chinese-Name-Pinyin-Batch"></a>

> **Gender Chinese Name Pinyin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNamePinyinBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-chinese-name-pinyin-batch-responses">Response</h3>

!{response-table-tag}










## Gender Chinese Name

<a id="opIdGender-Chinese-Name"></a>

> **Gender Chinese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseName/{chineseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-chinese-name-responses">Response</h3>

!{response-table-tag}










## Gender Chinese Name Batch

<a id="opIdGender-Chinese-Name-Batch"></a>

> **Gender Chinese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderChineseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-chinese-name-batch-responses">Response</h3>

!{response-table-tag}










## Chinese Name Candidates

<a id="opIdChinese-Name-Candidates"></a>

> **Chinese Name Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="chinese-name-candidates-responses">Response</h3>

!{response-table-tag}










## Chinese Name Candidates Batch

<a id="opIdChinese-Name-Candidates-Batch"></a>

> **Chinese Name Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="chinese-name-candidates-batch-responses">Response</h3>

!{response-table-tag}










## Chinese Name Gender Candidates

<a id="opIdChinese-Name-Gender-Candidates"></a>

> **Chinese Name Gender Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="chinese-name-gender-candidates-responses">Response</h3>

!{response-table-tag}










## Chinese Name Candidates Gender Batch

<a id="opIdChinese-Name-Candidates-Gender-Batch"></a>

> **Chinese Name Candidates Gender Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/chineseNameCandidatesGenderBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="chinese-name-candidates-gender-batch-responses">Response</h3>

!{response-table-tag}










<h1 id="namsor-api-v2-japanese">Japanese</h1>

JAPANESE special features

## Parse Japanese Name

<a id="opIdParse-Japanese-Name"></a>

> **Parse Japanese Name** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseName/{japaneseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "nameParserType": "string",
  "nameParserTypeAlt": "string",
  "score": "number"
}
```

<h3 id="parse-japanese-name-responses">Response</h3>

!{response-table-tag}










## Parse Japanese Name Batch

<a id="opIdParse-Japanese-Name-Batch"></a>

> **Parse Japanese Name Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/parseJapaneseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "nameParserType": "string",
    "nameParserTypeAlt": "string",
    "score": "number"
  }
]
```

<h3 id="parse-japanese-name-batch-responses">Response</h3>

!{response-table-tag}










## Japanese Name Kanji Candidates

<a id="opIdJapanese-Name-Kanji-Candidates"></a>

> **Japanese Name Kanji Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="japanese-name-kanji-candidates-responses">Response</h3>

!{response-table-tag}










## Japanese Name Latin Candidates

<a id="opIdJapanese-Name-Latin-Candidates"></a>

> **Japanese Name Latin Candidates** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="japanese-name-latin-candidates-responses">Response</h3>

!{response-table-tag}










## Japanese Name Kanji Candidates Batch

<a id="opIdJapanese-Name-Kanji-Candidates-Batch"></a>

> **Japanese Name Kanji Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameKanjiCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="japanese-name-kanji-candidates-batch-responses">Response</h3>

!{response-table-tag}










## Japanese Name Latin Candidates Batch

<a id="opIdJapanese-Name-Latin-Candidates-Batch"></a>

> **Japanese Name Latin Candidates Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameLatinCandidatesBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="japanese-name-latin-candidates-batch-responses">Response</h3>

!{response-table-tag}










## Japanese Name Match

<a id="opIdJapanese-Name-Match"></a>

> **Japanese Name Match** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="japanese-name-match-responses">Response</h3>

!{response-table-tag}










## Japanese Name Match Feedback Loop

<a id="opIdJapanese-Name-Match-Feedback-Loop"></a>

> **Japanese Name Match Feedback Loop** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae*

*<u>Cost :</u> The processing of each name requires **1** credit.*

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
  "id": "string",
  "latinName": "string",
  "originalName": "string",
  "sourceLanguage": "string",
  "targetLanguage": "string",
  "sourceScript": "string",
  "targetScript": "string",
  "score": "number"
}
```

<h3 id="japanese-name-match-feedback-loop-responses">Response</h3>

!{response-table-tag}










## Japanese Name Match Batch

<a id="opIdJapanese-Name-Match-Batch"></a>

> **Japanese Name Match Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="japanese-name-match-batch-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/japaneseNameMatchBatch`

<h3 id="japanese-name-match-batch-parameters">Request Body</h3>

*The HTTP request body is required to be an array of objects.*

|Name|Type|Required|Description|
|---|---|---|---|
|id|String|false||
|firstName|String|false||
|lastName|String|false||




> The above command returns JSON structured like this:



```json
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "matchCandidates": "array"
  }
]
```

<h3 id="japanese-name-match-batch-responses">Response</h3>

!{response-table-tag}










## Gender Japanese Name Pinyin

<a id="opIdGender-Japanese-Name-Pinyin"></a>

> **Gender Japanese Name Pinyin** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-japanese-name-pinyin-responses">Response</h3>

!{response-table-tag}










## Gender Japanese Name Pinyin Batch

<a id="opIdGender-Japanese-Name-Pinyin-Batch"></a>

> **Gender Japanese Name Pinyin Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","firstName":"string","lastName":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "firstName": "string",
    "lastName": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-japanese-name-pinyin-batch-responses">Response</h3>

!{response-table-tag}










## Gender Japanese Name Full

<a id="opIdGender-Japanese-Name-Full"></a>

> **Gender Japanese Name Full** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFull/{japaneseName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "likelyGender": "string",
  "genderScale": "number",
  "score": "number",
  "probabilityCalibrated": "number"
}
```

<h3 id="gender-japanese-name-full-responses">Response</h3>

!{response-table-tag}










## Gender Japanese Name Full Batch

<a id="opIdGender-Japanese-Name-Full-Batch"></a>

> **Gender Japanese Name Full Batch** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data '[{"id":"string","name":"string"}]'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch")
  .header("Content-Type", "application/json")
  .header("Accept", "application/json")
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
    "Accept": "application/json"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/genderJapaneseNameFullBatch", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Accept": "application/json"
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
[
  {
    "id": "string",
    "name": "string",
    "likelyGender": "string",
    "genderScale": "number",
    "score": "number",
    "probabilityCalibrated": "number"
  }
]
```

<h3 id="gender-japanese-name-full-batch-responses">Response</h3>

!{response-table-tag}










<h1 id="namsor-api-v2-admin">Admin</h1>

Administrative, system management.

## Stripe Connect

<a id="opIdStripe-Connect"></a>

> **Stripe Connect** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Connects a Stripe Account.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="stripe-connect-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/stripeConnect`

<h3 id="stripe-connect-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|scope|String|false||
|code|String|false||
|error|String|false||
|error_description|String|false||


|scope|query|any|false|none|
|code|query|any|false|none|
|error|query|any|false|none|
|error_description|query|any|false|none|

<h3 id="stripe-connect-responses">Response</h3>

!{response-table-tag}







## Charge

<a id="opIdCharge"></a>

> **Charge** code sample :

```shell
curl --request POST \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/charge \
  --header 'Accept: application/json' \
  --header 'Content-Type: */*' \
  --data '{"stripeToken":"string","stripeEmail":"string"}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/charge")
  .header("Content-Type", "*/*")
  .header("Accept", "application/json")
  .body("{\"stripeToken\":\"string\",\"stripeEmail\":\"string\"}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/charge"

payload = "{\"stripeToken\":\"string\",\"stripeEmail\":\"string\"}"
headers = {
    "Content-Type": "*/*",
    "Accept": "application/json"
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/charge", {
  "method": "POST",
  "headers": {
    "Content-Type": "*/*",
    "Accept": "application/json"
  },
  "body": "{\"stripeToken\":\"string\",\"stripeEmail\":\"string\"}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.*

> Body parameter

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="charge-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/charge`

<h3 id="charge-parameters">Request Body</h3>

*The HTTP request body is required to be an object.*

|Name|Type|Required|Description|
|---|---|---|---|
|stripeToken|String|false||
|stripeEmail|String|false||


|body|body|any|false|none|

> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="charge-responses">Response</h3>

!{response-table-tag}










## Payment Information

<a id="opIdPayment-Information"></a>

> **Payment Information** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Get the Stripe payment information associated with the current google auth session token.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="payment-information-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/paymentInfo/{token}`

<h3 id="payment-information-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="payment-information-responses">Response</h3>

!{response-table-tag}










## Update Payment Default

<a id="opIdUpdate-Payment-Default"></a>

> **Update Payment Default** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/{defautSourceId}/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/{defautSourceId}/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/{defautSourceId}/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/{defautSourceId}/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Update the default Stripe card associated with the current google auth session token.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="update-payment-default-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/updatePaymentDefault/{defautSourceId}/{token}`

<h3 id="update-payment-default-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|defautSourceId|String|true||
|token|String|true||





> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="update-payment-default-responses">Response</h3>

!{response-table-tag}










## Software Version

<a id="opIdSoftware-Version"></a>

> **Software Version** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/softwareVersion", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Get the current software version*

> The above command returns JSON structured like this:



```json
{
  "softwareNameAndVersion": "string",
  "softwareVersion": "array"
}
```

<h3 id="software-version-responses">Response</h3>

!{response-table-tag}










## Namsor Counter

<a id="opIdNamsor-Counter"></a>

> **Namsor Counter** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/namsorCounter", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Get the overall API counter*

> The above command returns JSON structured like this:



```json
{
  "softwareNameAndVersion": "string",
  "softwareVersion": "array"
}
```

<h3 id="namsor-counter-responses">Response</h3>

!{response-table-tag}










## Billing Currencies

<a id="opIdBilling-Currencies"></a>

> **Billing Currencies** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingCurrencies", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*List possible currency options for billing (USD, EUR, GBP, ...)*

> The above command returns JSON structured like this:



```json
{
  "currenciesIso3": "array"
}
```

<h3 id="billing-currencies-responses">Response</h3>

!{response-table-tag}










## Billing Info

<a id="opIdBilling-Info"></a>

> **Billing Info** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Read the billing information (company name, address, phone, vat ID)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="billing-info-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/billingInfo/{token}`

<h3 id="billing-info-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "billingEmail": "string",
  "preferredCurrency": "string",
  "customerName": "string",
  "customerPhone": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressCity": "string",
  "addressPostalCode": "string",
  "addressState": "string",
  "addressCountry": "string",
  "vatID": "string"
}
```

<h3 id="billing-info-responses">Response</h3>

!{response-table-tag}










## Update Billing Info

<a id="opIdUpdate-Billing-Info"></a>

> **Update Billing Info** code sample :

```shell
curl --request POST \
  --url 'https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json;charset=UTF-8' \
  --data '{"billingEmail":"string","preferredCurrency":"string","customerName":"string","customerPhone":"string","addressLine1":"string","addressLine2":"string","addressCity":"string","addressPostalCode":"string","addressState":"string","addressCountry":"string","vatID":"string"}'
```

```java
HttpResponse<String> response = Unirest.post("https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string")
  .header("Content-Type", "application/json;charset=UTF-8")
  .header("Accept", "application/json")
  .body("{\"billingEmail\":\"string\",\"preferredCurrency\":\"string\",\"customerName\":\"string\",\"customerPhone\":\"string\",\"addressLine1\":\"string\",\"addressLine2\":\"string\",\"addressCity\":\"string\",\"addressPostalCode\":\"string\",\"addressState\":\"string\",\"addressCountry\":\"string\",\"vatID\":\"string\"}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string"

payload = "{\"billingEmail\":\"string\",\"preferredCurrency\":\"string\",\"customerName\":\"string\",\"customerPhone\":\"string\",\"addressLine1\":\"string\",\"addressLine2\":\"string\",\"addressCity\":\"string\",\"addressPostalCode\":\"string\",\"addressState\":\"string\",\"addressCountry\":\"string\",\"vatID\":\"string\"}"
headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json"
}

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/type,string", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json"
  },
  "body": "{\"billingEmail\":\"string\",\"preferredCurrency\":\"string\",\"customerName\":\"string\",\"customerPhone\":\"string\",\"addressLine1\":\"string\",\"addressLine2\":\"string\",\"addressCity\":\"string\",\"addressPostalCode\":\"string\",\"addressState\":\"string\",\"addressCountry\":\"string\",\"vatID\":\"string\"}"
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Sets or update the billing information (company name, address, phone, vat ID)*

> Body parameter

```json
{
  "billingEmail": "string",
  "preferredCurrency": "string",
  "customerName": "string",
  "customerPhone": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressCity": "string",
  "addressPostalCode": "string",
  "addressState": "string",
  "addressCountry": "string",
  "vatID": "string"
}
```

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="update-billing-info-requesturl">HTTP Request</h3>

`POST https://v2.namsor.com/NamSorAPIv2/api2/json/updateBillingInfo/{token}`

<h3 id="update-billing-info-parameters">Request Body</h3>

*The HTTP request body is required to be an object.*

|Name|Type|Required|Description|
|---|---|---|---|
|billingEmail|String|false||
|preferredCurrency|String|false||
|customerName|String|false||
|customerPhone|String|false||
|addressLine1|String|false||
|addressLine2|String|false||
|addressCity|String|false||
|addressPostalCode|String|false||
|addressState|String|false||
|addressCountry|String|false||
|vatID|String|false||


|token|path|string|true|none|
|body|body|any|false|none|

> The above command returns JSON structured like this:



```json
{
  "billingEmail": "string",
  "preferredCurrency": "string",
  "customerName": "string",
  "customerPhone": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "addressCity": "string",
  "addressPostalCode": "string",
  "addressState": "string",
  "addressCountry": "string",
  "vatID": "string"
}
```

<h3 id="update-billing-info-responses">Response</h3>

!{response-table-tag}










## Billing History

<a id="opIdBilling-History"></a>

> **Billing History** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Read the history billing information (invoices paid via Stripe or manually).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="billing-history-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/billingHistory/{token}`

<h3 id="billing-history-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "stripeInvoices": "array",
  "corporateInvoices": "array"
}
```

<h3 id="billing-history-responses">Response</h3>

!{response-table-tag}










## Procure Key

<a id="opIdProcure-Key"></a>

> **Procure Key** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="procure-key-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/procureKey/{token}`

<h3 id="procure-key-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="procure-key-responses">Response</h3>

!{response-table-tag}










## Available Plans

<a id="opIdAvailable-Plans"></a>

> **Available Plans** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*List all available plans in the user's preferred currency.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="available-plans-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans/{token}`

<h3 id="available-plans-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "usageRatioForDupplicates": "integer",
  "currencyIso3": "string",
  "currencySymbol": "string",
  "plans": "array"
}
```

<h3 id="available-plans-responses">Response</h3>

!{response-table-tag}










## Available Plans USD

<a id="opIdAvailable-Plans-USD"></a>

> **Available Plans USD** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/availablePlans", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*List all available plans in the default currency (usd).*

> The above command returns JSON structured like this:



```json
{
  "usageRatioForDupplicates": "integer",
  "currencyIso3": "string",
  "currencySymbol": "string",
  "plans": "array"
}
```

<h3 id="available-plans-usd-responses">Response</h3>

!{response-table-tag}










## Api Status

<a id="opIdApi-Status"></a>

> **Api Status** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiStatus", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Prints the current status of the classifiers.*

> The above command returns JSON structured like this:



```json
{
  "usageRatioForDupplicates": "integer",
  "currencyIso3": "string",
  "currencySymbol": "string",
  "plans": "array"
}
```

<h3 id="api-status-responses">Response</h3>

!{response-table-tag}










## Available Services

<a id="opIdAvailable-Services"></a>

> **Available Services** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiServices", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*List of API services and usage cost in Units (default is 1=ONE Unit).*

> The above command returns JSON structured like this:



```json
{
  "usageRatioForDupplicates": "integer",
  "currencyIso3": "string",
  "currencySymbol": "string",
  "plans": "array"
}
```

<h3 id="available-services-responses">Response</h3>

!{response-table-tag}










## Taxonomy Classes

<a id="opIdTaxonomy-Classes"></a>

> **Taxonomy Classes** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/taxonomyClasses/{classifierName}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "usageRatioForDupplicates": "integer",
  "currencyIso3": "string",
  "currencySymbol": "string",
  "plans": "array"
}
```

<h3 id="taxonomy-classes-responses">Response</h3>

!{response-table-tag}










## Subscribe Plan

<a id="opIdSubscribe-Plan"></a>

> **Subscribe Plan** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/{planName}/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/{planName}/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/{planName}/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/{planName}/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Subscribe to a give API plan, using the user's preferred or default currency.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="subscribe-plan-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlan/{planName}/{token}`

<h3 id="subscribe-plan-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planName|String|true||
|token|String|true||





> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "planStarted": "integer",
  "priorPlanStarted": "integer",
  "planEnded": "integer",
  "taxRate": "number",
  "planName": "string",
  "planBaseFeesKey": "string",
  "planStatus": "string",
  "planQuota": "integer",
  "priceUSD": "number",
  "priceOverageUSD": "number",
  "price": "number",
  "priceOverage": "number",
  "currency": "string",
  "currencyFactor": "number",
  "stripeCustomerId": "string",
  "stripeStatus": "string",
  "stripeSubscription": "string",
  "userId": "string"
}
```

<h3 id="subscribe-plan-responses">Response</h3>

!{response-table-tag}










## Subscribe Plan OnBehalf

<a id="opIdSubscribe-Plan-OnBehalf"></a>

> **Subscribe Plan OnBehalf** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/{planName}/{apiKey} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/{planName}/{apiKey}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/{planName}/{apiKey}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/{planName}/{apiKey}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Subscribe to a give API plan, using the user's preferred or default currency (admin only).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="subscribe-plan-onbehalf-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/subscribePlanOnBehalf/{planName}/{apiKey}`

<h3 id="subscribe-plan-onbehalf-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|planName|String|true||
|apiKey|String|true||





> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "planStarted": "integer",
  "priorPlanStarted": "integer",
  "planEnded": "integer",
  "taxRate": "number",
  "planName": "string",
  "planBaseFeesKey": "string",
  "planStatus": "string",
  "planQuota": "integer",
  "priceUSD": "number",
  "priceOverageUSD": "number",
  "price": "number",
  "priceOverage": "number",
  "currency": "string",
  "currencyFactor": "number",
  "stripeCustomerId": "string",
  "stripeStatus": "string",
  "stripeSubscription": "string",
  "userId": "string"
}
```

<h3 id="subscribe-plan-onbehalf-responses">Response</h3>

!{response-table-tag}










## Remove User Account

<a id="opIdRemove-User-Account"></a>

> **Remove User Account** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Remove the user account.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="remove-user-account-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccount/{token}`

<h3 id="remove-user-account-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "planStarted": "integer",
  "priorPlanStarted": "integer",
  "planEnded": "integer",
  "taxRate": "number",
  "planName": "string",
  "planBaseFeesKey": "string",
  "planStatus": "string",
  "planQuota": "integer",
  "priceUSD": "number",
  "priceOverageUSD": "number",
  "price": "number",
  "priceOverage": "number",
  "currency": "string",
  "currencyFactor": "number",
  "stripeCustomerId": "string",
  "stripeStatus": "string",
  "stripeSubscription": "string",
  "userId": "string"
}
```

<h3 id="remove-user-account-responses">Response</h3>

!{response-table-tag}










## Remove User Account OnBehalf

<a id="opIdRemove-User-Account-OnBehalf"></a>

> **Remove User Account OnBehalf** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/{apiKey} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/{apiKey}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/{apiKey}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/{apiKey}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Remove (on behalf) a user account.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="remove-user-account-onbehalf-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/removeUserAccountOnBehalf/{apiKey}`

<h3 id="remove-user-account-onbehalf-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|apiKey|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "planStarted": "integer",
  "priorPlanStarted": "integer",
  "planEnded": "integer",
  "taxRate": "number",
  "planName": "string",
  "planBaseFeesKey": "string",
  "planStatus": "string",
  "planQuota": "integer",
  "priceUSD": "number",
  "priceOverageUSD": "number",
  "price": "number",
  "priceOverage": "number",
  "currency": "string",
  "currencyFactor": "number",
  "stripeCustomerId": "string",
  "stripeStatus": "string",
  "stripeSubscription": "string",
  "userId": "string"
}
```

<h3 id="remove-user-account-onbehalf-responses">Response</h3>

!{response-table-tag}










## Update Limit

<a id="opIdUpdate-Limit"></a>

> **Update Limit** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="update-limit-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}`

<h3 id="update-limit-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|usageLimit|Integer|true||
|hardOrSoft|Boolean|true||
|token|String|true||






> The above command returns JSON structured like this:



```json
{
  "overageExclTax": "number",
  "overageInclTax": "number",
  "overageCurrency": "string",
  "overageQuantity": "integer"
}
```

<h3 id="update-limit-responses">Response</h3>

!{response-table-tag}










## Verify Email

<a id="opIdVerify-Email"></a>

> **Verify Email** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/{emailToken} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/{emailToken}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/{emailToken}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/{emailToken}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Verifies an email, based on token sent to that email*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="verify-email-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/verifyEmail/{emailToken}`

<h3 id="verify-email-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|emailToken|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="verify-email-responses">Response</h3>

!{response-table-tag}










## Verify Remove Email

<a id="opIdVerify-Remove-Email"></a>

> **Verify Remove Email** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/{emailToken} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/{emailToken}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/{emailToken}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/{emailToken}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Verifies an email, based on token sent to that email*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="verify-remove-email-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/verifyRemoveEmail/{emailToken}`

<h3 id="verify-remove-email-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|emailToken|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="verify-remove-email-responses">Response</h3>

!{response-table-tag}










## Stats

<a id="opIdStats"></a>

> **Stats** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/stats \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/stats")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/stats"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/stats", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Print basic system statistics.*

> The above command returns JSON structured like this:



```json
{
  "cacheMetrics": "array",
  "classifierMetrics": "array",
  "sourceMetrics": "array",
  "totalMem": "integer",
  "freeMem": "integer",
  "maxMem": "integer"
}
```

<h3 id="stats-responses">Response</h3>

!{response-table-tag}










## Api Usage

<a id="opIdApi-Usage"></a>

> **Api Usage** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsage", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Print current API usage.*

> The above command returns JSON structured like this:



```json
{
  "overageExclTax": "number",
  "overageInclTax": "number",
  "overageCurrency": "string",
  "overageQuantity": "integer"
}
```

<h3 id="api-usage-responses">Response</h3>

!{response-table-tag}










## Api Usage History

<a id="opIdApi-Usage-History"></a>

> **Api Usage History** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistory", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Print historical API usage.*

> The above command returns JSON structured like this:



```json
{
  "overageExclTax": "number",
  "overageInclTax": "number",
  "overageCurrency": "string",
  "overageQuantity": "integer"
}
```

<h3 id="api-usage-history-responses">Response</h3>

!{response-table-tag}










## Api Usage History Aggregate

<a id="opIdApi-Usage-History-Aggregate"></a>

> **Api Usage History Aggregate** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/apiUsageHistoryAggregate", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Print historical API usage (in an aggregated view, by service, by day/hour/min).*

> The above command returns JSON structured like this:



```json
{
  "overageExclTax": "number",
  "overageInclTax": "number",
  "overageCurrency": "string",
  "overageQuantity": "integer"
}
```

<h3 id="api-usage-history-aggregate-responses">Response</h3>

!{response-table-tag}










## Source Stats

<a id="opIdSource-Stats"></a>

> **Source Stats** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/{source} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/{source}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/{source}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/{source}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Print basic source statistics.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="source-stats-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/sourceStats/{source}`

<h3 id="source-stats-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true||




> The above command returns JSON structured like this:



```json
{
  "cacheMetrics": "array",
  "classifierMetrics": "array",
  "sourceMetrics": "array",
  "totalMem": "integer",
  "freeMem": "integer",
  "maxMem": "integer"
}
```

<h3 id="source-stats-responses">Response</h3>

!{response-table-tag}










## Add Credits

<a id="opIdAdd-Credits"></a>

> **Add Credits** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Add usage credits to an API Key.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="add-credits-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}`

<h3 id="add-credits-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|apiKey|String|true||
|usageCredits|Integer|true||
|userMessage|String|true||






> The above command returns JSON structured like this:



```json
{
  "cacheMetrics": "array",
  "classifierMetrics": "array",
  "sourceMetrics": "array",
  "totalMem": "integer",
  "freeMem": "integer",
  "maxMem": "integer"
}
```

<h3 id="add-credits-responses">Response</h3>

!{response-table-tag}










## Redeploy UI

<a id="opIdRedeploy-UI"></a>

> **Redeploy UI** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/{live}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/{live}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/{live}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/{live}", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Redeploy UI from current dev branch.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="redeploy-ui-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI/{live}`

<h3 id="redeploy-ui-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|live|Boolean|true||




<h3 id="redeploy-ui-responses">Response</h3>

!{response-table-tag}








## Redeploy UI_1

<a id="opIdRedeploy-UI_1"></a>

> **Redeploy UI_1** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/redeployUI", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Redeploy UI from current dev branch.*

<h3 id="redeploy-ui_1-responses">Response</h3>

!{response-table-tag}








## Invalidate Cache

<a id="opIdInvalidate-Cache"></a>

> **Invalidate Cache** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/invalidateCache", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Invalidate system caches.*

<h3 id="invalidate-cache-responses">Response</h3>

!{response-table-tag}








## Debug Level

<a id="opIdDebug-Level"></a>

> **Debug Level** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/{logger}/{level}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/{logger}/{level}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/{logger}/{level}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/{logger}/{level}", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Update debug level for a classifier*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="debug-level-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/debugLevel/{logger}/{level}`

<h3 id="debug-level-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|logger|String|true||
|level|String|true||





<h3 id="debug-level-responses">Response</h3>

!{response-table-tag}







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
  console.log(response);
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
  console.log(response);
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








## Vet

<a id="opIdVet"></a>

> **Vet** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/{source}/{vetted}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/{source}/{vetted}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/{source}/{vetted}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/{source}/{vetted}", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Vetting of a source.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="vet-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/vetting/{source}/{vetted}`

<h3 id="vet-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|source|String|true||
|vetted|Boolean|true||





<h3 id="vet-responses">Response</h3>

!{response-table-tag}








## Corporate Key

<a id="opIdCorporate-Key"></a>

> **Corporate Key** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/{apiKey}/{corporate}
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/{apiKey}/{corporate}")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/{apiKey}/{corporate}"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/{apiKey}/{corporate}", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Setting an API Key to a corporate status.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="corporate-key-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/corporateKey/{apiKey}/{corporate}`

<h3 id="corporate-key-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|apiKey|String|true||
|corporate|Boolean|true||





<h3 id="corporate-key-responses">Response</h3>

!{response-table-tag}








## Shutdown

<a id="opIdShutdown"></a>

> **Shutdown** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/shutdown", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Stop learning and shutdown system.*

<h3 id="shutdown-responses">Response</h3>

!{response-table-tag}








## Flush

<a id="opIdFlush"></a>

> **Flush** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/flush
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/flush")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/flush"

response = requests.request("GET", url)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/flush", {
  "method": "GET",
  "headers": {}
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Flush counters.*

<h3 id="flush-responses">Response</h3>

!{response-table-tag}








## User Info

<a id="opIdUser-Info"></a>

> **User Info** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/{token} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/{token}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/{token}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/{token}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Get the user profile associated with the current google auth session token.*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="user-info-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/userInfo/{token}`

<h3 id="user-info-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|token|String|true||




> The above command returns JSON structured like this:



```json
{
  "apiKey": "string",
  "userId": "string",
  "admin": "boolean",
  "vetted": "boolean",
  "learnable": "boolean",
  "anonymized": "boolean",
  "partner": "boolean",
  "striped": "boolean",
  "corporate": "boolean",
  "disabled": "boolean"
}
```

<h3 id="user-info-responses">Response</h3>

!{response-table-tag}










<h1 id="namsor-api-v2-general">General</h1>

## Name Type

<a id="opIdName-Type"></a>

> **Name Type** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
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
  "id": "string",
  "name": "string",
  "commonType": "string",
  "commonTypeAlt": "string",
  "score": "number"
}
```

<h3 id="name-type-responses">Response</h3>

!{response-table-tag}










## Name Type Geo

<a id="opIdName-Type-Geo"></a>

> **Name Type Geo** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}/{countryIso2} \
  --header 'Accept: application/json'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}/{countryIso2}")
  .header("Accept", "application/json")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}/{countryIso2}"

headers = {"Accept": "application/json"}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}/{countryIso2}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json"
  }
})
.then(response => {
  console.log(response);
})
.catch(err => {
  console.error(err);
});
```



*Infer the likely type of a proper noun (personal name, brand name, place name etc.)*

*<u>Cost :</u> The processing of each name requires **1** credit.*

<h3 id="name-type-geo-requesturl">HTTP Request</h3>

`GET https://v2.namsor.com/NamSorAPIv2/api2/json/nameType/{properNoun}/{countryIso2}`

<h3 id="name-type-geo-parameters">Request Parameters</h3>

|Name|Type|Required|Description|
|---|---|---|---|
|properNoun|String|true||
|countryIso2|String|true||





> The above command returns JSON structured like this:



```json
{
  "id": "string",
  "name": "string",
  "commonType": "string",
  "commonTypeAlt": "string",
  "score": "number"
}
```

<h3 id="name-type-geo-responses">Response</h3>

!{response-table-tag}










