/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PositionAccuracyEnum } from "./positionaccuracyenum";
import { UnitOfDistanceEnum } from "./unitofdistanceenum";
import { Expose } from "class-transformer";

/**
 * Used to specify the geographic coordinates of a location
 */
export class GeoLocation extends SpeakeasyBase {
    /**
     * The height or an item, typically measured above sea level
     */
    @SpeakeasyMetadata()
    @Expose({ name: "altitude" })
    altitude?: number;

    /**
     * Miles, Kilometers, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "altitudeUnitOfDistance" })
    altitudeUnitOfDistance?: UnitOfDistanceEnum;

    /**
     * The URL to the format for the latitude and longitude for this location.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "formatURL" })
    formatURL?: string;

    /**
     * The measure of the angular distance on a meridan north or south equator
     */
    @SpeakeasyMetadata()
    @Expose({ name: "latitude" })
    latitude: number;

    /**
     * The measure of the angular distance on a meridan east or west equator
     */
    @SpeakeasyMetadata()
    @Expose({ name: "longitude" })
    longitude: number;

    /**
     * link for embedded map showing location
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mapURL" })
    mapURL?: string;

    /**
     * Specifies the level of accuracy for the position
     */
    @SpeakeasyMetadata()
    @Expose({ name: "positionAccuracy" })
    positionAccuracy?: PositionAccuracyEnum;
}
