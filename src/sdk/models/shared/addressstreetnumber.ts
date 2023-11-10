/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The street number alone is the numerical number that precedes the street name in the address
 */
export class AddressStreetNumber extends SpeakeasyBase {
    /**
     * PO Box Number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "po_Box" })
    poBox?: string;

    /**
     * RuralRoute Number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ruralRouteNmbr" })
    ruralRouteNmbr?: string;

    /**
     * Dircetion of the Street
     */
    @SpeakeasyMetadata()
    @Expose({ name: "streetDirection" })
    streetDirection?: string;

    /**
     * Street Number Suffix
     */
    @SpeakeasyMetadata()
    @Expose({ name: "streetNmbrSuffix" })
    streetNmbrSuffix?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
