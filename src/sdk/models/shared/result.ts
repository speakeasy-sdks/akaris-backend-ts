/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ResultStatusEnum } from "./resultstatusenum";
import { Warning } from "./warning";
import { Expose, Type } from "class-transformer";

export class Result extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: ErrorT })
    @Expose({ name: "Error" })
    @Type(() => ErrorT)
    error?: ErrorT[];

    @SpeakeasyMetadata({ elemType: Warning })
    @Expose({ name: "Warning" })
    @Type(() => Warning)
    warning?: Warning[];

    /**
     * The status of an error or warning
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: ResultStatusEnum;
}
