/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertyRequest } from "./propertyrequest";
import { RateCandidates } from "./ratecandidates";
import { RoomStayCandidates } from "./roomstaycandidates";
import { Expose, Type } from "class-transformer";

export class HotelSearchCriterion extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: PropertyRequest })
    @Expose({ name: "PropertyRequest" })
    @Type(() => PropertyRequest)
    propertyRequest: PropertyRequest[];

    @SpeakeasyMetadata()
    @Expose({ name: "RateCandidates" })
    @Type(() => RateCandidates)
    rateCandidates?: RateCandidates;

    @SpeakeasyMetadata()
    @Expose({ name: "RoomStayCandidates" })
    @Type(() => RoomStayCandidates)
    roomStayCandidates?: RoomStayCandidates;

    /**
     * Number of rooms requested
     */
    @SpeakeasyMetadata()
    @Expose({ name: "numberOfRooms" })
    numberOfRooms?: number;
}