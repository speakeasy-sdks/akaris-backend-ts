/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Distance } from "./distance";
import { Expose, Type } from "class-transformer";

export class SearchBy extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * A search radius
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SearchRadius" })
    @Type(() => Distance)
    searchRadius?: Distance;
}
