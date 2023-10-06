/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReservationBuild } from "./reservationbuild";
import { Expose, Type } from "class-transformer";

export class ReservationQueryBuild extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ReservationBuild" })
    @Type(() => ReservationBuild)
    reservationBuild: ReservationBuild;
}
