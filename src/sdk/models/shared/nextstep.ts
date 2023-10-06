/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { NextStepMethodEnum } from "./nextstepmethodenum";
import { Expose } from "class-transformer";

/**
 * A URL that describes a step that can be applied to the resource containing the next step structure.
 */
export class NextStep extends SpeakeasyBase {
    /**
     * The action this next step is intended to achieve
     */
    @SpeakeasyMetadata()
    @Expose({ name: "action" })
    action: string;

    /**
     * Additional clarification for the next step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Identifier for the Next Step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Describes the set of potential methods that can be taken after an operation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "method" })
    method: NextStepMethodEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}