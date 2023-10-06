/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GuestCounts } from "./guestcounts";
import { RoomAmenity } from "./roomamenity";
import { Expose, Type } from "class-transformer";

export class RoomStayCandidate extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "GuestCounts" })
    @Type(() => GuestCounts)
    guestCounts: GuestCounts;

    @SpeakeasyMetadata({ elemType: RoomAmenity })
    @Expose({ name: "RoomAmenity" })
    @Type(() => RoomAmenity)
    roomAmenity?: RoomAmenity[];
}