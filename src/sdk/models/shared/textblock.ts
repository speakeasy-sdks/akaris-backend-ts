/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TextFormatted } from "./textformatted";
import { Expose, Type } from "class-transformer";

export class TextBlock extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    @SpeakeasyMetadata({ elemType: TextFormatted })
    @Expose({ name: "TextFormatted" })
    @Type(() => TextFormatted)
    textFormatted: TextFormatted[];

    /**
     * Internally referenced id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Title
     */
    @SpeakeasyMetadata()
    @Expose({ name: "title" })
    title?: string;
}
