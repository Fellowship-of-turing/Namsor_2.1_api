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
@XmlRootElement(name = "BatchFirstLastNameIn")
@XmlAccessorType(XmlAccessType.FIELD)
public class BatchFirstLastNameIn {
    private FirstLastNameIn[] personalNames;

    /**
     * @return the personalNames
     */
    public FirstLastNameIn[] getPersonalNames() {
        return personalNames;
    }

    /**
     * @param personalNames the personalNames to set
     */
    public void setPersonalNames(FirstLastNameIn[] personalNames) {
        this.personalNames = personalNames;
    }


}
