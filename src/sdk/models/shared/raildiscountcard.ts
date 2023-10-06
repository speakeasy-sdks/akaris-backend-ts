/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The name of the Rail Discount
 */
export class RailDiscountCard extends SpeakeasyBase {
    /**
     * ReferenceNumber
     */
    @SpeakeasyMetadata()
    @Expose({ name: "referenceNumber" })
    referenceNumber?: string;

    /**
     * Code of the Supplier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplierCode" })
    supplierCode: string;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}