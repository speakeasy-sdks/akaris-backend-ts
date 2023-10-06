/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Address with building and room number
 */
export class AddressBldgRoom extends SpeakeasyBase {
    /**
     * When true, the information is a building name. When false, it is an apartment or room #
     */
    @SpeakeasyMetadata()
    @Expose({ name: "buldingInd" })
    buldingInd?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}