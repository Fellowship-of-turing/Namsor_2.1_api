--- 

title: NamSor API v2.1 TEST 

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

# GENERAL
<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->
