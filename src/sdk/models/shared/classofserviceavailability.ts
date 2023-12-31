/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AvailabilityStatusEnum } from "./availabilitystatusenum";
import { Expose } from "class-transformer";

/**
 * The class of service
 */
export class ClassOfServiceAvailability extends SpeakeasyBase {
    /**
     * The class of service number value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "number" })
    number?: number;

    /**
     * Identifies the availability status of an item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AvailabilityStatusEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
