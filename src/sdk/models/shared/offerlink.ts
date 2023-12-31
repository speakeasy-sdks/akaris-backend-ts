/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ParentOffer } from "./parentoffer";
import { Expose, Type } from "class-transformer";

export class OfferLink extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "OfferRef" })
    offerRef?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ParentOffer" })
    @Type(() => ParentOffer)
    parentOffer?: ParentOffer;
}
