/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfirmationStatusEnum } from "./confirmationstatusenum";
import { Expose } from "class-transformer";

export class Status extends SpeakeasyBase {
    /**
     * Supplier status text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "supplierText" })
    supplierText?: string;

    /**
     * Status returned in a response for a two or more phase commitment process
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: ConfirmationStatusEnum;
}