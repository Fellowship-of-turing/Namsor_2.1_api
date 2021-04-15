/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2.model.in;

import com.namsor.api2.model.LocalizedGeoCountry;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author elian
 */
@XmlRootElement(name = "FirstLastNameGeoIn")
@XmlAccessorType(XmlAccessType.FIELD)
public class FirstLastNameGeoIn extends FirstLastNameIn implements LocalizedGeoCountry {

    @XmlAttribute
    private String countryIso2;

    /**
     * @return the countryIso2
     */
    public String getCountryIso2() {
        return countryIso2;
    }

    /**
     * @param countryIso2 the countryIso2 to set
     */
    public void setCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
    }

    @Override
    public String key() {
        return super.key() + "|" + getCountryIso2();
    }

}
