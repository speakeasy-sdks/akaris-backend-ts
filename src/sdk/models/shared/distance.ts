/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UnitOfDistanceEnum } from "./unitofdistanceenum";
import { Expose } from "class-transformer";

/**
 * A search radius
 */
export class Distance extends SpeakeasyBase {
    /**
     * Miles, Kilometers, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unitOfDistance" })
    unitOfDistance?: UnitOfDistanceEnum;

    /**
     * When using distance as a property search parameter, the maximum distance is 25 regardless of unit of distance
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: number;
}
