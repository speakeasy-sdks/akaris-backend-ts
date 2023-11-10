/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NameValuePair } from "./namevaluepair";
import { Expose, Type } from "class-transformer";

export class ErrorT extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * The Travelport standardized error or warning message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Message" })
    message?: string;

    @SpeakeasyMetadata({ elemType: NameValuePair })
    @Expose({ name: "NameValuePair" })
    @Type(() => NameValuePair)
    nameValuePair?: NameValuePair[];

    /**
     * Http standard response code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "StatusCode" })
    statusCode?: number;
}
