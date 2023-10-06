/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { OptInStatusEnum } from "./optinstatusenum";
import { YesNoInheritEnum } from "./yesnoinheritenum";
import { Expose, Transform } from "class-transformer";

/**
 * Electronic email addresses, in IETF specified format.
 */
export class Email extends SpeakeasyBase {
    /**
     * Assigned Type: c-1100:StringText
     */
    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

    /**
     * Type of the e-mail
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailType" })
    emailType?: string;

    /**
     * Electronic email addresses, in IETF specified format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The datetime of receiving the opt in notice
     */
    @SpeakeasyMetadata()
    @Expose({ name: "optInDate" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    optInDate?: Date;

    /**
     * Used to indicate marketing preferences, OptIn, OptOut
     */
    @SpeakeasyMetadata()
    @Expose({ name: "optInStatus" })
    optInStatus?: OptInStatusEnum;

    /**
     * The datetime the opt out notice was received
     */
    @SpeakeasyMetadata()
    @Expose({ name: "optOutDate" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    optOutDate?: Date;

    /**
     * Used to indicate marketing preferences, Yes, No, Inherit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "optOutInd" })
    optOutInd?: YesNoInheritEnum;

    /**
     * Mime media type
     */
    @SpeakeasyMetadata()
    @Expose({ name: "preferredFormat" })
    preferredFormat?: string;

    /**
     * If true then the email address came from the provisioning process
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provisionedInd" })
    provisionedInd?: boolean;

    /**
     * Used to indicate marketing preferences, Yes, No, Inherit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shareMarketing" })
    shareMarketing?: YesNoInheritEnum;

    /**
     * Used to indicate marketing preferences, Yes, No, Inherit
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shareSync" })
    shareSync?: YesNoInheritEnum;

    /**
     * If true, this is a valid email address that has been system verified via a successful email transmission.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "validInd" })
    validInd?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}