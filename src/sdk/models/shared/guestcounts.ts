/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GuestCount } from "./guestcount";
import { Expose, Type } from "class-transformer";

export class GuestCounts extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: GuestCount })
    @Expose({ name: "GuestCount" })
    @Type(() => GuestCount)
    guestCount: GuestCount[];
}
