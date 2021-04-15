/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2.model.in;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.namsor.api2.model.Fact;
import com.namsor.api2.model.ParsedFirstLastName;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author elian
 */
@XmlRootElement(name = "FirstLastName")
@XmlAccessorType(XmlAccessType.FIELD)
public class FirstLastNameIn extends FactIn implements NamSorIn, ParsedFirstLastName {

    @XmlAttribute
    private String firstName;
    @XmlAttribute
    private String lastName;
    
    public FirstLastNameIn() {
        super();
    }

    /**
     * @return the firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @return the lastName
     */
    public String getLastName() {
        return lastName;
    }

    @Override
    @JsonIgnore
    public String getName() {
        return getFirstName() + " " + getLastName();
    }

    @Override
    public String key() {
        return getSource()+"|"+getFirstName() + "|" + getLastName();
    }

    /**
     * @param firstName the firstName to set
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * @param lastName the lastName to set
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
}
