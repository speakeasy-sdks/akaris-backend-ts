/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CommissionEnum } from "./commissionenum";
import { Expose } from "class-transformer";

export class Commission extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * Type of commission
     */
    @SpeakeasyMetadata()
    @Expose({ name: "application" })
    application?: CommissionEnum;
}
