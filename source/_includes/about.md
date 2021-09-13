## About

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

By default Namsor's machine learning algorithm may improve data evaluation based on the data inputs and does store logs of submitted request. You may change these setting either in your user account or by calling the dedicated API endpoints. All data logs are secured using AES encryption before being stored.

If you wish to disable machine learning based on your submissions, please set learnable to "false" by using <a href="#learnable">the corresponding Admin route</a>. When set to false for an API key, the data processed using that key will not feed the machine learning algorithm.

If you wish to disable service usage history, please set anonymized to "true" by using <a href="#anonymized">the corresponding Admin route</a>. When set to true for an API key, the data processed using that key will be irreversibly anonymised using SHA encryption. Note that the smart processing for redundant queries will still work even if your data is anonymised.
