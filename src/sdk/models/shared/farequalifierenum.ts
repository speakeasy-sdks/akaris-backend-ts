/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FareQualifierENUMBase } from "./farequalifierenumbase";
import { Expose } from "class-transformer";

export class FareQualifierENUM extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: FareQualifierENUMBase;
}
