/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Commission } from "./commission";
import { CommissionApplyEnum } from "./commissionapplyenum";
import { TravelerIdentifierRef } from "./traveleridentifierref";
import { Expose, Type } from "class-transformer";

export class Commissions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "ApplyTo" })
    applyTo?: CommissionApplyEnum;

    @SpeakeasyMetadata()
    @Expose({ name: "Commission" })
    @Type(() => Commission)
    commission: Commission;

    @SpeakeasyMetadata({ elemType: TravelerIdentifierRef })
    @Expose({ name: "TravelerIdentifierRef" })
    @Type(() => TravelerIdentifierRef)
    travelerIdentifierRef?: TravelerIdentifierRef[];
}