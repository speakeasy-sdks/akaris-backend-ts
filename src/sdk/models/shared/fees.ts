/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Fees extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "TotalFees" })
    totalFees?: number;
}
