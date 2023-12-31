/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Distance } from "./distance";
import { Expose, Type } from "class-transformer";

export class Restaurant extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    /**
     * A search radius
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Distance" })
    @Type(() => Distance)
    distance?: Distance;

    /**
     * An OTA code to define the cuisine type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cuisineCodes" })
    cuisineCodes?: string[];

    /**
     * The name of the restaurant
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * An OTA proximity code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "proximityCode" })
    proximityCode?: string;
}
