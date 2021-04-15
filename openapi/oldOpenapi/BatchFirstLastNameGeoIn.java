/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2.model.in;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author elian
 */
@XmlRootElement(name = "BatchFirstLastNameGeoIn")
@XmlAccessorType(XmlAccessType.FIELD)
public class BatchFirstLastNameGeoIn {
    private FirstLastNameGeoIn[] personalNames;

    /**
     * @return the personalNames
     */
    public FirstLastNameGeoIn[] getPersonalNames() {
        return personalNames;
    }

    /**
     * @param personalNames the personalNames to set
     */
    public void setPersonalNames(FirstLastNameGeoIn[] personalNames) {
        this.personalNames = personalNames;
    }
}
