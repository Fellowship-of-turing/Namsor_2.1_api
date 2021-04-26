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

> **API Key Setup** code sample :

```shell
curl --request GET \
  --url https://v2.namsor.com/NamSorAPIv2/api2/json/gender/api-endpoint \
  --header 'Accept: application/json'
  --header 'X-API-KEY: your-api-key'
```

```java
HttpResponse<String> response = Unirest.get("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/api-endpoint")
  .header("Accept", "application/json")
  .header("X-API-KEY", "your-api-key")
  .asString();
```

```python
import requests

url = "https://v2.namsor.com/NamSorAPIv2/api2/json/gender/api-endpoint"

headers = {
  "Accept": "application/json",
  "X-API-KEY": "your-api-key"
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

```javascript
fetch("https://v2.namsor.com/NamSorAPIv2/api2/json/gender/api-endpoint", {
    method: "GET",
    headers: {
        Accept: "application/json",
        "X-API-KEY": "your-api-key",
    },
})
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.error(err);
    });
```
