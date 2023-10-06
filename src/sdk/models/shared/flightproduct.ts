/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BrandID } from "./brandid";
import { CabinAirEnum } from "./cabinairenum";
import { ClassOfServiceAvailability } from "./classofserviceavailability";
import { CustomerLoyaltyCredit } from "./customerloyaltycredit";
import { FareQualifierENUM } from "./farequalifierenum";
import { FareTypeEnum } from "./faretypeenum";
import { YesNoUnknownEnum } from "./yesnounknownenum";
import { Expose, Type } from "class-transformer";

export class FlightProduct extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Brand" })
    @Type(() => BrandID)
    brand?: BrandID;

    @SpeakeasyMetadata({ elemType: ClassOfServiceAvailability })
    @Expose({ name: "ClassOfServiceAvailability" })
    @Type(() => ClassOfServiceAvailability)
    classOfServiceAvailability?: ClassOfServiceAvailability[];

    @SpeakeasyMetadata({ elemType: CustomerLoyaltyCredit })
    @Expose({ name: "CustomerLoyaltyCredit" })
    @Type(() => CustomerLoyaltyCredit)
    customerLoyaltyCredit?: CustomerLoyaltyCredit[];

    @SpeakeasyMetadata()
    @Expose({ name: "FareQualifier" })
    @Type(() => FareQualifierENUM)
    fareQualifier?: FareQualifierENUM;

    /**
     * Specifies the cabin type (e.g. first, business, economy).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cabin" })
    cabin?: CabinAirEnum;

    /**
     * The car code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carCode" })
    carCode?: string;

    /**
     * The class of service
     */
    @SpeakeasyMetadata()
    @Expose({ name: "classOfService" })
    classOfService?: string;

    /**
     * Fare basis code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fareBasisCode" })
    fareBasisCode?: string;

    /**
     * Defines the type of fares to return (Only public fares, Only private fares, Only agency private fares, Only
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fareType" })
    fareType?: FareTypeEnum;

    /**
     * The ATPCO fare type code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fareTypeCode" })
    fareTypeCode?: string;

    /**
     * The Segment sequence
     */
    @SpeakeasyMetadata()
    @Expose({ name: "segmentSequence" })
    segmentSequence: number[];

    /**
     * Yes , No , Unknown
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stopoverPriced" })
    stopoverPriced?: YesNoUnknownEnum;

    /**
     * The ticket designator
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ticketDesignator" })
    ticketDesignator?: string;

    /**
     * The value code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "valueCode" })
    valueCode?: string;
}
