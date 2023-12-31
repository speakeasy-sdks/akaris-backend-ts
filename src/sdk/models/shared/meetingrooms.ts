/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { MeetingRoom } from "./meetingroom";
import { Expose, Type } from "class-transformer";

export class MeetingRooms extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: MeetingRoom })
    @Expose({ name: "MeetingRoom" })
    @Type(() => MeetingRoom)
    meetingRoom?: MeetingRoom[];

    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number?: number;
}
