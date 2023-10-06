/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DestinationEnum } from "./destinationenum";
import { PurposeEnum } from "./purposeenum";
import { Expose } from "class-transformer";

export class DestinationPurpose extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "destination" })
    destination: DestinationEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "purpose" })
    purpose: PurposeEnum;
}