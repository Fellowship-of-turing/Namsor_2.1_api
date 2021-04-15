/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2.model.out;

import io.swagger.v3.oas.annotations.media.Schema;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author elian
 */
@XmlRootElement(name = "BatchFirstLastNameOriginedOut")
@Schema(name = "BatchFirstLastNameOriginedOut", description = "Represents the output of inferring the LIKELY origin from a list of personal names.")
@XmlAccessorType(XmlAccessType.FIELD)
public class BatchFirstLastNameOriginedOut {
    private FirstLastNameOriginedOut[] personalNames;

    /**
     * @return the personalNames
     */
    public FirstLastNameOriginedOut[] getPersonalNames() {
        return personalNames;
    }

    /**
     * @param personalNames the personalNames to set
     */
    public void setPersonalNames(FirstLastNameOriginedOut[] personalNames) {
        this.personalNames = personalNames;
    }
}
