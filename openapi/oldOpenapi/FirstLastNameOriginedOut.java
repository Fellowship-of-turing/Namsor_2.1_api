/*
 * Copyright 2019 - Elian CARSENAT - All Rights Reserved.
 * This sofware (source code, binary etc.) is licensed exclusively to 
 * NAMSOR SAS by it author Elian CARSENAT.
 */
package com.namsor.api2.model.out;

import com.namsor.api2.model.Origined;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Represents the output of inferring the LIKELY country of origin from a
 * personal name.
 *
 * @author elian
 */
@XmlRootElement(name = "FirstLastNameOriginedOut")
@Schema(name = "FirstLastNameOriginedOut", description = "Represents the output of inferring the LIKELY country of Origin from a personal name.")
@XmlAccessorType(XmlAccessType.FIELD)
public class FirstLastNameOriginedOut extends FirstLastNameOut implements NamSorOut, Origined {

    /**
     * @return the regionOrigin
     */
    public String getRegionOrigin() {
        return regionOrigin;
    }

    /**
     * @param regionOrigin the regionOrigin to set
     */
    public void setRegionOrigin(String regionOrigin) {
        this.regionOrigin = regionOrigin;
    }

    /**
     * @return the topRegionOrigin
     */
    public String getTopRegionOrigin() {
        return topRegionOrigin;
    }

    /**
     * @param topRegionOrigin the topRegionOrigin to set
     */
    public void setTopRegionOrigin(String topRegionOrigin) {
        this.topRegionOrigin = topRegionOrigin;
    }

    /**
     * @return the subRegionOrigin
     */
    public String getSubRegionOrigin() {
        return subRegionOrigin;
    }

    /**
     * @param subRegionOrigin the subRegionOrigin to set
     */
    public void setSubRegionOrigin(String subRegionOrigin) {
        this.subRegionOrigin = subRegionOrigin;
    }

    /**
     * @return the score
     */
    public double getScore() {
        return score;
    }

    /**
     * @param score the score to set
     */
    public void setScore(double score) {
        this.score = score;
    }

    /**
     * @return the countryOrigin
     */
    public String getCountryOrigin() {
        return countryOrigin;
    }

    /**
     * @param countryOrigin the countryOrigin to set
     */
    public void setCountryOrigin(String countryOrigin) {
        this.countryOrigin = countryOrigin;
    }

    @Schema(description = "Most likely country of Origin")
    private String countryOrigin;

    @Schema(description = "Second best alternative : country of Origin")
    private String countryOriginAlt;

    @Schema(description = "List countries of Origin (top 10)")
    private List<String> countriesOriginTop;

    /**
     * @return the countryOriginAlt
     */
    public String getCountryOriginAlt() {
        return countryOriginAlt;
    }

    /**
     * @param countryOriginAlt the countryOriginAlt to set
     */
    public void setCountryOriginAlt(String countryOriginAlt) {
        this.countryOriginAlt = countryOriginAlt;
    }

    @Schema(description = "Compatibility to NamSor_v1 Origin score value")
    private double score;

    @Schema(description = "Most likely region of Origin (based on countryOrigin ISO2 code)")
    private String regionOrigin;

    @Schema(description = "Most likely region of Origin (based on countryOrigin ISO2 code)")
    private String topRegionOrigin;

    @Schema(description = "Most likely region of Origin (based on countryOrigin ISO2 code)")
    private String subRegionOrigin;

    /**
     * @return the countriesOriginTop
     */
    public List<String> getCountriesOriginTop() {
        return countriesOriginTop;
    }

    /**
     * @param countriesOriginTop the countriesOriginTop to set
     */
    public void setCountriesOriginTop(List<String> countriesOriginTop) {
        this.countriesOriginTop = countriesOriginTop;
    }

    private double probabilityCalibrated;

    /**
     * @return the probabilityCalibrated
     */
    public double getProbabilityCalibrated() {
        return probabilityCalibrated;
    }

    /**
     * @param probabilityCalibrated the probabilityCalibrated to set
     */
    public void setProbabilityCalibrated(double probabilityCalibrated) {
        this.probabilityCalibrated = probabilityCalibrated;
    }

    private double probabilityAltCalibrated;

    /**
     * @return the probabilityAltCalibrated
     */
    public double getProbabilityAltCalibrated() {
        return probabilityAltCalibrated;
    }

    /**
     * @param probabilityAltCalibrated the probabilityAltCalibrated to set
     */
    public void setProbabilityAltCalibrated(double probabilityAltCalibrated) {
        this.probabilityAltCalibrated = probabilityAltCalibrated;
    }

    @Override
    public String getCategory() {
        return getCountryOrigin();
    }

}
