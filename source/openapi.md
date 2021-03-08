--- 

title: NamSor API v2 

language_tabs: 
   - shell 

toc_footers: 
   - <a href='#'>Sign Up for a Developer Key</a> 
   - <a href='https://github.com/lavkumarv'>Documentation Powered by lav</a> 

includes: 
   - errors 

search: true 

--- 

# Introduction 

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it!  

**Version:** 2.0.11 

[NamSor API client SDKs v2 for Java, Python](https://github.com/namsor) 

# /API2/JSON/NAMETYPE/{PROPERNOUN}
## ***GET*** 

**Summary:** Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### HTTP Request 
`***GET*** /api2/json/nameType/{properNoun}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| properNoun | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A typed name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/NAMETYPE/{PROPERNOUN}/{COUNTRYISO2}
## ***GET*** 

**Summary:** Infer the likely type of a proper noun (personal name, brand name, place name etc.)

### HTTP Request 
`***GET*** /api2/json/nameType/{properNoun}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| properNoun | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A typed name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/COUNTRY/{PERSONALNAMEFULL}
## ***GET*** 

**Summary:** [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.

### HTTP Request 
`***GET*** /api2/json/country/{personalNameFull}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| personalNameFull | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/ORIGIN/{FIRSTNAME}/{LASTNAME}
## ***GET*** 

**Summary:** [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.

### HTTP Request 
`***GET*** /api2/json/origin/{firstName}/{lastName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/STRIPECONNECT
## ***GET*** 

**Summary:** Connects a Stripe Account.

### HTTP Request 
`***GET*** /api2/json/stripeConnect` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| scope | query |  | No |  |
| code | query |  | No |  |
| error | query |  | No |  |
| error_description | query |  | No |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 401 | Missing or incorrect email or payment token |

# /API2/JSON/CHARGE
## ***POST*** 

**Summary:** Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.

### HTTP Request 
`***POST*** /api2/json/charge` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A stripe customerID |
| 401 | Missing or incorrect email or payment token |

# /API2/JSON/PAYMENTINFO/{TOKEN}
## ***GET*** 

**Summary:** Get the Stripe payment information associated with the current google auth session token.

### HTTP Request 
`***GET*** /api2/json/paymentInfo/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An session token |
| 401 | Missing or incorrect token |

# /API2/JSON/UPDATEPAYMENTDEFAULT/{DEFAUTSOURCEID}/{TOKEN}
## ***GET*** 

**Summary:** Update the default Stripe card associated with the current google auth session token.

### HTTP Request 
`***GET*** /api2/json/updatePaymentDefault/{defautSourceId}/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| defautSourceId | path |  | Yes |  |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An session token |
| 401 | Missing or incorrect token |

# /API2/JSON/SOFTWAREVERSION
## ***GET*** 

**Summary:** Get the current software version

### HTTP Request 
`***GET*** /api2/json/softwareVersion` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The current software version |
| 401 | Missing or incorrect token |

# /API2/JSON/NAMSORCOUNTER
## ***GET*** 

**Summary:** Get the overall API counter

### HTTP Request 
`***GET*** /api2/json/namsorCounter` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The overall API counter |
| 401 | Missing or incorrect token |

# /API2/JSON/BILLINGCURRENCIES
## ***GET*** 

**Summary:** List possible currency options for billing (USD, EUR, GBP, ...)

### HTTP Request 
`***GET*** /api2/json/billingCurrencies` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The supported billing currencies. |
| 401 | Missing or incorrect token |

# /API2/JSON/BILLINGINFO/{TOKEN}
## ***GET*** 

**Summary:** Read the billing information (company name, address, phone, vat ID)

### HTTP Request 
`***GET*** /api2/json/billingInfo/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The current billing info |
| 401 | Missing or incorrect token |

# /API2/JSON/UPDATEBILLINGINFO/{TOKEN}
## ***POST*** 

**Summary:** Sets or update the billing information (company name, address, phone, vat ID)

### HTTP Request 
`***POST*** /api2/json/updateBillingInfo/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The updated billing info |
| 401 | Missing or incorrect token |

# /API2/JSON/BILLINGHISTORY/{TOKEN}
## ***GET*** 

**Summary:** Read the history billing information (invoices paid via Stripe or manually).

### HTTP Request 
`***GET*** /api2/json/billingHistory/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The billing history |
| 401 | Missing or incorrect token |

# /API2/JSON/PROCUREKEY/{TOKEN}
## ***GET*** 

**Summary:** Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.

### HTTP Request 
`***GET*** /api2/json/procureKey/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API Key |
| 401 | Missing or incorrect token |

# /API2/JSON/AVAILABLEPLANS/{TOKEN}
## ***GET*** 

**Summary:** List all available plans in the user's preferred currency.

### HTTP Request 
`***GET*** /api2/json/availablePlans/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Available plans |
| 401 | Missing or incorrect token |

# /API2/JSON/AVAILABLEPLANS
## ***GET*** 

**Summary:** List all available plans in the default currency (usd).

### HTTP Request 
`***GET*** /api2/json/availablePlans` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Available plans |
| 401 | Missing or incorrect token |

# /API2/JSON/APISTATUS
## ***GET*** 

**Summary:** Prints the current status of the classifiers.

### HTTP Request 
`***GET*** /api2/json/apiStatus` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Available classifiers and status |
| 401 | Missing or incorrect token |

# /API2/JSON/APISERVICES
## ***GET*** 

**Summary:** List of API services and usage cost in Units (default is 1=ONE Unit).

### HTTP Request 
`***GET*** /api2/json/apiServices` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Available services |
| 401 | Missing or incorrect token |

# /API2/JSON/TAXONOMYCLASSES/{CLASSIFIERNAME}
## ***GET*** 

**Summary:** Print the taxonomy classes valid for the given classifier.

### HTTP Request 
`***GET*** /api2/json/taxonomyClasses/{classifierName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| classifierName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Available plans |
| 401 | Missing or incorrect token |

# /API2/JSON/SUBSCRIBEPLAN/{PLANNAME}/{TOKEN}
## ***GET*** 

**Summary:** Subscribe to a give API plan, using the user's preferred or default currency.

### HTTP Request 
`***GET*** /api2/json/subscribePlan/{planName}/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| planName | path |  | Yes |  |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API subscription |
| 401 | Missing or incorrect token |

# /API2/JSON/SUBSCRIBEPLANONBEHALF/{PLANNAME}/{APIKEY}
## ***GET*** 

**Summary:** Subscribe to a give API plan, using the user's preferred or default currency (admin only).

### HTTP Request 
`***GET*** /api2/json/subscribePlanOnBehalf/{planName}/{apiKey}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| planName | path |  | Yes |  |
| apiKey | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API subscription |
| 401 | Missing or incorrect token |

# /API2/JSON/REMOVEUSERACCOUNT/{TOKEN}
## ***GET*** 

**Summary:** Remove the user account.

### HTTP Request 
`***GET*** /api2/json/removeUserAccount/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API subscription |
| 401 | Missing or incorrect token |

# /API2/JSON/REMOVEUSERACCOUNTONBEHALF/{APIKEY}
## ***GET*** 

**Summary:** Remove (on behalf) a user account.

### HTTP Request 
`***GET*** /api2/json/removeUserAccountOnBehalf/{apiKey}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| apiKey | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API subscription |
| 401 | Missing or incorrect token |

# /API2/JSON/UPDATELIMIT/{USAGELIMIT}/{HARDORSOFT}/{TOKEN}
## ***GET*** 

**Summary:** Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).

### HTTP Request 
`***GET*** /api2/json/updateLimit/{usageLimit}/{hardOrSoft}/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| usageLimit | path |  | Yes |  |
| hardOrSoft | path |  | Yes |  |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API subscription |
| 401 | Missing or incorrect token |

# /API2/JSON/VERIFYEMAIL/{EMAILTOKEN}
## ***GET*** 

**Summary:** Verifies an email, based on token sent to that email

### HTTP Request 
`***GET*** /api2/json/verifyEmail/{emailToken}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| emailToken | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API Key |
| 401 | Missing or incorrect token |

# /API2/JSON/VERIFYREMOVEEMAIL/{EMAILTOKEN}
## ***GET*** 

**Summary:** Verifies an email, based on token sent to that email

### HTTP Request 
`***GET*** /api2/json/verifyRemoveEmail/{emailToken}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| emailToken | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An API Key |
| 401 | Missing or incorrect token |

# /API2/JSON/STATS
## ***GET*** 

**Summary:** Print basic system statistics.

### HTTP Request 
`***GET*** /api2/json/stats` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Current system status. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/APIUSAGE
## ***GET*** 

**Summary:** Print current API usage.

### HTTP Request 
`***GET*** /api2/json/apiUsage` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Print current API usage. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/APIUSAGEHISTORY
## ***GET*** 

**Summary:** Print historical API usage.

### HTTP Request 
`***GET*** /api2/json/apiUsageHistory` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Print historical API usage. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/APIUSAGEHISTORYAGGREGATE
## ***GET*** 

**Summary:** Print historical API usage (in an aggregated view, by service, by day/hour/min).

### HTTP Request 
`***GET*** /api2/json/apiUsageHistoryAggregate` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Print historical API usage. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/SOURCESTATS/{SOURCE}
## ***GET*** 

**Summary:** Print basic source statistics.

### HTTP Request 
`***GET*** /api2/json/sourceStats/{source}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| source | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Current system status. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/ADDCREDITS/{APIKEY}/{USAGECREDITS}/{USERMESSAGE}
## ***GET*** 

**Summary:** Add usage credits to an API Key.

### HTTP Request 
`***GET*** /api2/json/addCredits/{apiKey}/{usageCredits}/{userMessage}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| apiKey | path |  | Yes |  |
| usageCredits | path |  | Yes |  |
| userMessage | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Estimate new after applying credits. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/REDEPLOYUI/{LIVE}
## ***GET*** 

**Summary:** Redeploy UI from current dev branch.

### HTTP Request 
`***GET*** /api2/json/redeployUI/{live}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| live | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Redeploy UI from DEV. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/REDEPLOYUI
## ***GET*** 

**Summary:** Redeploy UI from current dev branch.

### HTTP Request 
`***GET*** /api2/json/redeployUI` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Redeploy UI from DEV. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/INVALIDATECACHE
## ***GET*** 

**Summary:** Invalidate system caches.

### HTTP Request 
`***GET*** /api2/json/invalidateCache` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Clear caches. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/DEBUGLEVEL/{LOGGER}/{LEVEL}
## ***GET*** 

**Summary:** Update debug level for a classifier

### HTTP Request 
`***GET*** /api2/json/debugLevel/{logger}/{level}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| logger | path |  | Yes |  |
| level | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 401 | Missing or incorrect API Key |

# /API2/JSON/LEARNABLE/{SOURCE}/{LEARNABLE}
## ***GET*** 

**Summary:** Activate/deactivate learning from a source.

### HTTP Request 
`***GET*** /api2/json/learnable/{source}/{learnable}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| source | path |  | Yes |  |
| learnable | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Vetting of a source. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/ANONYMIZE/{SOURCE}/{ANONYMIZED}
## ***GET*** 

**Summary:** Activate/deactivate anonymization for a source.

### HTTP Request 
`***GET*** /api2/json/anonymize/{source}/{anonymized}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| source | path |  | Yes |  |
| anonymized | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Anonymization of a source. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/VETTING/{SOURCE}/{VETTED}
## ***GET*** 

**Summary:** Vetting of a source.

### HTTP Request 
`***GET*** /api2/json/vetting/{source}/{vetted}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| source | path |  | Yes |  |
| vetted | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Vetting of a source. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/CORPORATEKEY/{APIKEY}/{CORPORATE}
## ***GET*** 

**Summary:** Setting an API Key to a corporate status.

### HTTP Request 
`***GET*** /api2/json/corporateKey/{apiKey}/{corporate}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| apiKey | path |  | Yes |  |
| corporate | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | API Key set to a corporate status. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/GENDER/{FIRSTNAME}/{LASTNAME}
## ***GET*** 

**Summary:** Infer the likely gender of a name.

### HTTP Request 
`***GET*** /api2/json/gender/{firstName}/{lastName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERGEO/{FIRSTNAME}/{LASTNAME}/{COUNTRYISO2}
## ***GET*** 

**Summary:** Infer the likely gender of a name, given a local context (ISO2 country code).

### HTTP Request 
`***GET*** /api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERGEOBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).

### HTTP Request 
`***POST*** /api2/json/genderGeoBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 names, detecting automatically the cultural context.

### HTTP Request 
`***POST*** /api2/json/genderBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSEDGENDERBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.

### HTTP Request 
`***POST*** /api2/json/parsedGenderBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSEDGENDERGEOBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.

### HTTP Request 
`***POST*** /api2/json/parsedGenderGeoBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERFULLGEO/{FULLNAME}/{COUNTRYISO2}
## ***GET*** 

**Summary:** Infer the likely gender of a full name, given a local context (ISO2 country code).

### HTTP Request 
`***GET*** /api2/json/genderFullGeo/{fullName}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| fullName | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERFULL/{FULLNAME}
## ***GET*** 

**Summary:** Infer the likely gender of a full name, ex. John H. Smith

### HTTP Request 
`***GET*** /api2/json/genderFull/{fullName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| fullName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERFULLBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 full names, detecting automatically the cultural context.

### HTTP Request 
`***POST*** /api2/json/genderFullBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERFULLGEOBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).

### HTTP Request 
`***POST*** /api2/json/genderFullGeoBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/ORIGINBATCH
## ***POST*** 

**Summary:** [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.

### HTTP Request 
`***POST*** /api2/json/originBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/COUNTRYBATCH
## ***POST*** 

**Summary:** [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.

### HTTP Request 
`***POST*** /api2/json/countryBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/USRACEETHNICITY/{FIRSTNAME}/{LASTNAME}
## ***GET*** 

**Summary:** [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).

### HTTP Request 
`***GET*** /api2/json/usRaceEthnicity/{firstName}/{lastName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/USRACEETHNICITYZIP5/{FIRSTNAME}/{LASTNAME}/{ZIP5CODE}
## ***GET*** 

**Summary:** [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).

### HTTP Request 
`***GET*** /api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |
| zip5Code | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | a US resident's likely race/ethnicity : W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/USRACEETHNICITYBATCH
## ***POST*** 

**Summary:** [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.

### HTTP Request 
`***POST*** /api2/json/usRaceEthnicityBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/USZIPRACEETHNICITYBATCH
## ***POST*** 

**Summary:** [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.

### HTTP Request 
`***POST*** /api2/json/usZipRaceEthnicityBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of US resident's likely race/ethnicity. W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/DIASPORA/{COUNTRYISO2}/{FIRSTNAME}/{LASTNAME}
## ***GET*** 

**Summary:** [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### HTTP Request 
`***GET*** /api2/json/diaspora/{countryIso2}/{firstName}/{lastName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| countryIso2 | path |  | Yes |  |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A diaspora / ethnicity for given name and geography. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/DIASPORABATCH
## ***POST*** 

**Summary:** [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)

### HTTP Request 
`***POST*** /api2/json/diasporaBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of diaspora / ethnicity given a name and residency. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSENAME/{NAMEFULL}/{COUNTRYISO2}
## ***GET*** 

**Summary:** Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.

### HTTP Request 
`***GET*** /api2/json/parseName/{nameFull}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| nameFull | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSENAMEBATCH
## ***POST*** 

**Summary:** Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.

### HTTP Request 
`***POST*** /api2/json/parseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of parsed names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSENAMEGEOBATCH
## ***POST*** 

**Summary:** Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 

### HTTP Request 
`***POST*** /api2/json/parseNameGeoBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of parsed names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSECHINESENAME/{CHINESENAME}
## ***GET*** 

**Summary:** Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)

### HTTP Request 
`***GET*** /api2/json/parseChineseName/{chineseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSECHINESENAMEBATCH
## ***POST*** 

**Summary:** Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).

### HTTP Request 
`***POST*** /api2/json/parseChineseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of parsed names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PINYINCHINESENAME/{CHINESENAME}
## ***GET*** 

**Summary:** Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)

### HTTP Request 
`***GET*** /api2/json/pinyinChineseName/{chineseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A pinyin name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PINYINCHINESENAMEBATCH
## ***POST*** 

**Summary:** Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

### HTTP Request 
`***POST*** /api2/json/pinyinChineseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of Pinyin names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMEMATCH/{CHINESESURNAMELATIN}/{CHINESEGIVENNAMELATIN}/{CHINESENAME}
## ***GET*** 

**Summary:** Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming

### HTTP Request 
`***GET*** /api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseSurnameLatin | path |  | Yes |  |
| chineseGivenNameLatin | path |  | Yes |  |
| chineseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMEMATCHBATCH
## ***POST*** 

**Summary:** Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

### HTTP Request 
`***POST*** /api2/json/chineseNameMatchBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERCHINESENAMEPINYIN/{CHINESESURNAMELATIN}/{CHINESEGIVENNAMELATIN}
## ***GET*** 

**Summary:** Infer the likely gender of a Chinese name in LATIN (Pinyin).

### HTTP Request 
`***GET*** /api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseSurnameLatin | path |  | Yes |  |
| chineseGivenNameLatin | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERCHINESENAMEPINYINBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).

### HTTP Request 
`***POST*** /api2/json/genderChineseNamePinyinBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERCHINESENAME/{CHINESENAME}
## ***GET*** 

**Summary:** Infer the likely gender of a Chinese full name ex. 王晓明

### HTTP Request 
`***GET*** /api2/json/genderChineseName/{chineseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERCHINESENAMEBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 full names ex. 王晓明

### HTTP Request 
`***POST*** /api2/json/genderChineseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMECANDIDATES/{CHINESESURNAMELATIN}/{CHINESEGIVENNAMELATIN}
## ***GET*** 

**Summary:** Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming

### HTTP Request 
`***GET*** /api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseSurnameLatin | path |  | Yes |  |
| chineseGivenNameLatin | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMECANDIDATESBATCH
## ***POST*** 

**Summary:** Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

### HTTP Request 
`***POST*** /api2/json/chineseNameCandidatesBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMEGENDERCANDIDATES/{CHINESESURNAMELATIN}/{CHINESEGIVENNAMELATIN}/{KNOWNGENDER}
## ***GET*** 

**Summary:** Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')

### HTTP Request 
`***GET*** /api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| chineseSurnameLatin | path |  | Yes |  |
| chineseGivenNameLatin | path |  | Yes |  |
| knownGender | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/CHINESENAMECANDIDATESGENDERBATCH
## ***POST*** 

**Summary:** Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.

### HTTP Request 
`***POST*** /api2/json/chineseNameCandidatesGenderBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSEJAPANESENAME/{JAPANESENAME}
## ***GET*** 

**Summary:** Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

### HTTP Request 
`***GET*** /api2/json/parseJapaneseName/{japaneseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PARSEJAPANESENAMEBATCH
## ***POST*** 

**Summary:** Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

### HTTP Request 
`***POST*** /api2/json/parseJapaneseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of parsed names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMEKANJICANDIDATES/{JAPANESESURNAMELATIN}/{JAPANESEGIVENNAMELATIN}
## ***GET*** 

**Summary:** Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

### HTTP Request 
`***GET*** /api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseSurnameLatin | path |  | Yes |  |
| japaneseGivenNameLatin | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMELATINCANDIDATES/{JAPANESESURNAMEKANJI}/{JAPANESEGIVENNAMEKANJI}
## ***GET*** 

**Summary:** Romanize japanese name, based on the name in Kanji.

### HTTP Request 
`***GET*** /api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseSurnameKanji | path |  | Yes |  |
| japaneseGivenNameKanji | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMEKANJICANDIDATESBATCH
## ***POST*** 

**Summary:** Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae

### HTTP Request 
`***POST*** /api2/json/japaneseNameKanjiCandidatesBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMELATINCANDIDATESBATCH
## ***POST*** 

**Summary:** Romanize japanese names, based on the name in KANJI

### HTTP Request 
`***POST*** /api2/json/japaneseNameLatinCandidatesBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMEMATCH/{JAPANESESURNAMELATIN}/{JAPANESEGIVENNAMELATIN}/{JAPANESENAME}
## ***GET*** 

**Summary:** Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### HTTP Request 
`***GET*** /api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseSurnameLatin | path |  | Yes |  |
| japaneseGivenNameLatin | path |  | Yes |  |
| japaneseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMEMATCHFEEDBACKLOOP/{JAPANESESURNAMELATIN}/{JAPANESEGIVENNAMELATIN}/{JAPANESENAME}
## ***GET*** 

**Summary:** [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### HTTP Request 
`***GET*** /api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseSurnameLatin | path |  | Yes |  |
| japaneseGivenNameLatin | path |  | Yes |  |
| japaneseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A romanized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/JAPANESENAMEMATCHBATCH
## ***POST*** 

**Summary:** Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

### HTTP Request 
`***POST*** /api2/json/japaneseNameMatchBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of matched names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERJAPANESENAME/{JAPANESESURNAME}/{JAPANESEGIVENNAME}
## ***GET*** 

**Summary:** Infer the likely gender of a Japanese name in LATIN (Pinyin).

### HTTP Request 
`***GET*** /api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseSurname | path |  | Yes |  |
| japaneseGivenName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERJAPANESENAMEBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

### HTTP Request 
`***POST*** /api2/json/genderJapaneseNameBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERJAPANESENAMEFULL/{JAPANESENAME}
## ***GET*** 

**Summary:** Infer the likely gender of a Japanese full name ex. 王晓明

### HTTP Request 
`***GET*** /api2/json/genderJapaneseNameFull/{japaneseName}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| japaneseName | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A genderized name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/GENDERJAPANESENAMEFULLBATCH
## ***POST*** 

**Summary:** Infer the likely gender of up to 100 full names

### HTTP Request 
`***POST*** /api2/json/genderJapaneseNameFullBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PHONECODE/{FIRSTNAME}/{LASTNAME}/{PHONENUMBER}
## ***GET*** 

**Summary:** [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.

### HTTP Request 
`***GET*** /api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |
| phoneNumber | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A name with country and phone code. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PHONECODEGEO/{FIRSTNAME}/{LASTNAME}/{PHONENUMBER}/{COUNTRYISO2}
## ***GET*** 

**Summary:** [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### HTTP Request 
`***GET*** /api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |
| phoneNumber | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A name with country and phone code. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PHONECODEGEOFEEDBACKLOOP/{FIRSTNAME}/{LASTNAME}/{PHONENUMBER}/{PHONENUMBERE164}/{COUNTRYISO2}
## ***GET*** 

**Summary:** [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).

### HTTP Request 
`***GET*** /api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| firstName | path |  | Yes |  |
| lastName | path |  | Yes |  |
| phoneNumber | path |  | Yes |  |
| phoneNumberE164 | path |  | Yes |  |
| countryIso2 | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A name with country and phone code. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PHONECODEBATCH
## ***POST*** 

**Summary:** [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.

### HTTP Request 
`***POST*** /api2/json/phoneCodeBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/PHONECODEGEOBATCH
## ***POST*** 

**Summary:** [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).

### HTTP Request 
`***POST*** /api2/json/phoneCodeGeoBatch` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A list of genderized names. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

# /API2/JSON/SHUTDOWN
## ***GET*** 

**Summary:** Stop learning and shutdown system.

### HTTP Request 
`***GET*** /api2/json/shutdown` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Shutdown AI. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/FLUSH
## ***GET*** 

**Summary:** Flush counters.

### HTTP Request 
`***GET*** /api2/json/flush` 

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | Flush API Key caches. |
| 401 | Missing or incorrect API Key |

# /API2/JSON/USERINFO/{TOKEN}
## ***GET*** 

**Summary:** Get the user profile associated with the current google auth session token.

### HTTP Request 
`***GET*** /api2/json/userInfo/{token}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| token | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | An session token |
| 401 | Missing or incorrect token |

# /API2/JSON/PARSENAME/{NAMEFULL}
## ***GET*** 

**Summary:** Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 

### HTTP Request 
`***GET*** /api2/json/parseName/{nameFull}` 

**Parameters**

| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| nameFull | path |  | Yes |  |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | A origined name. |
| 401 | Missing or incorrect API Key |
| 403 | API Limit Reached or API Key Disabled |

<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
