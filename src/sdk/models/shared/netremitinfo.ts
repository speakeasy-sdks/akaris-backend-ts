/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FiledAmount } from "./filedamount";
import { Expose, Type } from "class-transformer";

export class NetRemitInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    /**
     * The actual selling fare which will override the Offer base fare on the document
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ActualSellingFare" })
    actualSellingFare?: number;

    /**
     * The CAR code applied to this product for use in net remit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CarCode" })
    carCode?: string;

    /**
     * The base amount of a ticket price or net price that is filed in local currency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "NetBaseAmount" })
    @Type(() => FiledAmount)
    netBaseAmount?: FiledAmount;

    /**
     * The Value code applied to this product for use in net remit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ValueCode" })
    valueCode?: string;
}