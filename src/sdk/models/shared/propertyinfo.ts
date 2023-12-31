/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AvailabilityStatusEnum } from "./availabilitystatusenum";
import { CurrencyAmount } from "./currencyamount";
import { Distance } from "./distance";
import { Identifier } from "./identifier";
import { MaximumAvailableRate } from "./maximumavailablerate";
import { NextSteps } from "./nextsteps";
import { PropertyDetail } from "./propertydetail";
import { Expose, Type } from "class-transformer";

export class PropertyInfo extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    /**
     * A search radius
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Distance" })
    @Type(() => Distance)
    distance: Distance;

    /**
     * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Identifier" })
    @Type(() => Identifier)
    identifier?: Identifier;

    /**
     * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "LowestAvailableRate" })
    @Type(() => CurrencyAmount)
    lowestAvailableRate: CurrencyAmount;

    /**
     * Maximum Available Rate for this Property, including the authority who provided the rate if it is different from the PropertyInfo authority.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "MaximumAvailableRate" })
    @Type(() => MaximumAvailableRate)
    maximumAvailableRate?: MaximumAvailableRate;

    @SpeakeasyMetadata()
    @Expose({ name: "NextSteps" })
    @Type(() => NextSteps)
    nextSteps?: NextSteps;

    @SpeakeasyMetadata()
    @Expose({ name: "Property" })
    @Type(() => PropertyDetail)
    property: PropertyDetail;

    /**
     * Identifies the availability status of an item.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "availability" })
    availability?: AvailabilityStatusEnum;

    /**
     * If present and true then this property was added to the list based on criteria other than those in the request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "featuredPropertyInd" })
    featuredPropertyInd?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}
