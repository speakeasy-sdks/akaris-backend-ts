/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DayOfWeekEnum } from "./dayofweekenum";
import { Expose } from "class-transformer";

export class OperationTimes extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "closeTime" })
    closeTime?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "daysOfWeek" })
    daysOfWeek?: DayOfWeekEnum[];

    @SpeakeasyMetadata()
    @Expose({ name: "openTime" })
    openTime?: string;
}
