module.exports = [

    // Gender
    "/api2/json/gender/{firstName}/{lastName}",
    "/api2/json/genderGeo/{firstName}/{lastName}/{countryIso2}",
    "/api2/json/genderGeoBatch",
    "/api2/json/genderBatch",
    "/api2/json/genderFullGeo/{fullName}/{countryIso2}",
    "/api2/json/genderFull/{fullName}",
    "/api2/json/genderFullBatch",
    "/api2/json/genderFullGeoBatch",

    // Origin
    "/api2/json/corridor/{countryIso2From}/{firstNameFrom}/{lastNameFrom}/{countryIso2To}/{firstNameTo}/{lastNameTo}",
    "/api2/json/country/{personalNameFull}",
    "/api2/json/origin/{firstName}/{lastName}",
    "/api2/json/corridorBatch",
    "/api2/json/originBatch",
    "/api2/json/countryBatch",
    "/api2/json/usRaceEthnicity/{firstName}/{lastName}",
    "/api2/json/usRaceEthnicityZIP5/{firstName}/{lastName}/{zip5Code}",
    "/api2/json/usRaceEthnicityBatch",
    "/api2/json/usZipRaceEthnicityBatch",
    "/api2/json/diaspora/{countryIso2}/{firstName}/{lastName}",
    "/api2/json/diasporaBatch",

    // Split Name
    "/api2/json/parseName/{nameFull}",
    "/api2/json/parseName/{nameFull}/{countryIso2}",
    "/api2/json/parseNameBatch",
    "/api2/json/parseNameGeoBatch",

    // Chinese
    "/api2/json/parseChineseName/{chineseName}",
    "/api2/json/parseChineseNameBatch",
    "/api2/json/pinyinChineseName/{chineseName}",
    "/api2/json/pinyinChineseNameBatch",
    "/api2/json/chineseNameMatch/{chineseSurnameLatin}/{chineseGivenNameLatin}/{chineseName}",
    "/api2/json/chineseNameMatchBatch",
    "/api2/json/genderChineseNamePinyin/{chineseSurnameLatin}/{chineseGivenNameLatin}",
    "/api2/json/genderChineseNamePinyinBatch",
    "/api2/json/genderChineseName/{chineseName}",
    "/api2/json/genderChineseNameBatch",
    "/api2/json/chineseNameCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}",
    "/api2/json/chineseNameCandidatesBatch",
    "/api2/json/chineseNameGenderCandidates/{chineseSurnameLatin}/{chineseGivenNameLatin}/{knownGender}",
    "/api2/json/chineseNameCandidatesGenderBatch",

    // Japanese
    "/api2/json/parseJapaneseName/{japaneseName}",
    "/api2/json/parseJapaneseNameBatch",
    "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{knownGender}",
    "/api2/json/japaneseNameKanjiCandidates/{japaneseSurnameLatin}/{japaneseGivenNameLatin}",
    "/api2/json/japaneseNameLatinCandidates/{japaneseSurnameKanji}/{japaneseGivenNameKanji}",
    "/api2/json/japaneseNameKanjiCandidatesBatch",
    "/api2/json/japaneseNameGenderKanjiCandidatesBatch",
    "/api2/json/japaneseNameLatinCandidatesBatch",
    "/api2/json/japaneseNameMatch/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}",
    "/api2/json/japaneseNameMatchFeedbackLoop/{japaneseSurnameLatin}/{japaneseGivenNameLatin}/{japaneseName}",
    "/api2/json/japaneseNameMatchBatch",
    "/api2/json/genderJapaneseName/{japaneseSurname}/{japaneseGivenName}",
    "/api2/json/genderJapaneseNameBatch",
    "/api2/json/genderJapaneseNameFull/{japaneseName}",
    "/api2/json/genderJapaneseNameFullBatch",

    // Name Type
    "/api2/json/nameType/{properNoun}",
    "/api2/json/nameTypeGeo/{properNoun}/{countryIso2}",
    "/api2/json/nameTypeBatch",
    "/api2/json/nameTypeGeoBatch",

    // Phone
    "/api2/json/phoneCode/{firstName}/{lastName}/{phoneNumber}",
    "/api2/json/phoneCodeGeo/{firstName}/{lastName}/{phoneNumber}/{countryIso2}",
    "/api2/json/phoneCodeGeoFeedbackLoop/{firstName}/{lastName}/{phoneNumber}/{phoneNumberE164}/{countryIso2}",
    "/api2/json/phoneCodeBatch",
    "/api2/json/phoneCodeGeoBatch",

    // Admin
    "/api2/json/disable/{source}/{disabled}",
    "/api2/json/softwareVersion",
    "/api2/json/apiStatus",
    "/api2/json/apiServices",
    "/api2/json/taxonomyClasses/{classifierName}",
    "/api2/json/apiUsage",
    "/api2/json/apiUsageHistory",
    "/api2/json/apiUsageHistoryAggregate",
    "/api2/json/learnable/{source}/{learnable}",
    "/api2/json/anonymize/{source}/{anonymized}"

];
