/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ChangeFeeMethodEnumBase } from "./changefeemethodenumbase";
import { Expose } from "class-transformer";

export class ChangeFeeMethodEnum extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: ChangeFeeMethodEnumBase;
}
