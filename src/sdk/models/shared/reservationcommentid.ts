/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ReservationCommentID extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * Local indentifier within a given message for this object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
