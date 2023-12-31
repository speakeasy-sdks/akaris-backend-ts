/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Amount } from "./amount";
import { Commission } from "./commission";
import { Expose, Type } from "class-transformer";

export class PriceBreakdown extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Amount" })
    @Type(() => Amount)
    amount?: Amount;

    @SpeakeasyMetadata()
    @Expose({ name: "Commission" })
    @Type(() => Commission)
    commission?: Commission;
}
