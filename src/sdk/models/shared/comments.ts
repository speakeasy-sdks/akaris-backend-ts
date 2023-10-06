/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Comment } from "./comment";
import { Expose, Type } from "class-transformer";

export class Comments extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: Comment })
    @Expose({ name: "Comment" })
    @Type(() => Comment)
    comment?: Comment[];
}