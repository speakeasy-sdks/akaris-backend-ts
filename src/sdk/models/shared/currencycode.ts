/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Currency codes are the three-letter alphabetic codes that represent the various currencies used throughout the world.
 */
export class CurrencyCode extends SpeakeasyBase {
    /**
     * Currency code authority
     */
    @SpeakeasyMetadata()
    @Expose({ name: "codeAuthority" })
    codeAuthority?: string;

    /**
     * Currency code decimal authority
     */
    @SpeakeasyMetadata()
    @Expose({ name: "decimalAuthority" })
    decimalAuthority?: string;

    /**
     * Currency code decimal place
     */
    @SpeakeasyMetadata()
    @Expose({ name: "decimalPlace" })
    decimalPlace?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}