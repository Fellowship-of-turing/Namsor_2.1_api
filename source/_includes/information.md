## General Information

-   The base endpoint URL is: https://v2.namsor.com/NamSorAPIv2
-   Batch processing returns the data sorted in the same order as it was sent.
-   **All endpoints require an API Key.**
-   Never share your API key to ANYONE.

### API Requests and Responses

-   All endpoints return JSON containing either an object or a nested array of objects.
-   Currently certain NamSor API endpoints use nested object structures in their query body and / or responses, please refer yourself to the corresponding code example.
-   Certain API response code examples have been truncated in order to improve readability. For example the countriesOriginTop, ethnicitiesTop and matchCandidates Array fields have been reduced to 2 elements in length.
-   Be aware that data in the code examples have been URL encoded into the corresponding ASCII code characters when necessary, for example "谢晓亮" is replaced by "%E8%B0%A2%E6%99%93%E4%BA%AE".

<h3 id="privacy">Privacy</h3>

Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed)

### Region Classifications

We provide two regions classifications when inferring the origin. These classifications have slightly different enumerators that we have detailed below:

#### regionOrigin :

Africa, Asia, Europe, Latin America and the Caribbean, Northern America, Oceania, Unclassified

#### topRegionOrigin :

Africa, Americas, Asia, Europe, Oceania, Unclassified

### Soft Limit vs Hard Limit

Reaching the soft limit will trigger an email notification.
Reaching the hard limit will trigger an email notification and block the API key.
