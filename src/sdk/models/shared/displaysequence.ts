/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DisplaySequence extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    /**
     * Offer reference
     */
    @SpeakeasyMetadata()
    @Expose({ name: "OfferRef" })
    offerRef: string;

    /**
     * Product reference. If blank, display sequence applies to all products within the Offer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ProductRef" })
    productRef?: string;

    /**
     * Segment sequence, if blank, display sequence applies to all segments within the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Sequence" })
    sequence?: number;

    /**
     * The sequence the products are to be displayed for sequential date ordering
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displaySequence" })
    displaySequence: string;
}
