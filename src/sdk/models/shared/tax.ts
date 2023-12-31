/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { YesNoUnknownEnum } from "./yesnounknownenum";
import { Expose } from "class-transformer";

export class Tax extends SpeakeasyBase {
    /**
     * Code Authority
     */
    @SpeakeasyMetadata()
    @Expose({ name: "codeAuthority" })
    codeAuthority?: string;

    /**
     * Currency code of the city.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currencyCode" })
    currencyCode?: string;

    /**
     * Decimal Authority
     */
    @SpeakeasyMetadata()
    @Expose({ name: "decimalAuthority" })
    decimalAuthority?: string;

    /**
     * Allowed number of decimals.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "decimalPlace" })
    decimalPlace?: number;

    /**
     * additional information
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * If true, this tax is exempt
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exemptInd" })
    exemptInd?: boolean;

    /**
     * Yes , No , Unknown
     */
    @SpeakeasyMetadata()
    @Expose({ name: "includedInBase" })
    includedInBase?: YesNoUnknownEnum;

    /**
     * purpose
     */
    @SpeakeasyMetadata()
    @Expose({ name: "purpose" })
    purpose?: string;

    /**
     * Identifies the reporting authority such as airport code for XF taxes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reportingAuthority" })
    reportingAuthority?: string;

    /**
     * Tax code of the city
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taxCode" })
    taxCode?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: number;
}
