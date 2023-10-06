/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { HotelSortOrderEnum } from "./hotelsortorderenum";
import { ImageSizeEnum } from "./imagesizeenum";
import { MealsIncluded } from "./mealsincluded";
import { RateCandidates } from "./ratecandidates";
import { RoomStayCandidate } from "./roomstaycandidate";
import { SearchBy } from "./searchby";
import { Expose, Transform, Type } from "class-transformer";

export class PropertiesQueryPrecisionSearch extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * The permitted property chain code(s) to be returned for this request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ChainCodes" })
    chainCodes?: string[];

    /**
     * Check In Date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CheckInDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    checkInDate: RFCDate;

    /**
     * Check Out Date
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CheckOutDate" })
    @Type(() => String)
    @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
    checkOutDate: RFCDate;

    /**
     * If true, return Properties with at least one commissionable rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "CommissionableInd" })
    commissionableInd?: boolean;

    /**
     * The preferred name of the property
     */
    @SpeakeasyMetadata()
    @Expose({ name: "HotelName" })
    hotelName?: string;

    /**
     * Indicates the size of the image. Hospitality APIs no longer support thumbnail
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ImageSize" })
    imageSize?: ImageSizeEnum;

    /**
     * Indicates if a meal is included
     */
    @SpeakeasyMetadata()
    @Expose({ name: "MealsIncluded" })
    @Type(() => MealsIncluded)
    mealsIncluded?: MealsIncluded;

    @SpeakeasyMetadata()
    @Expose({ name: "PropertyAmenityCode" })
    propertyAmenityCode?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "RateCandidates" })
    @Type(() => RateCandidates)
    rateCandidates?: RateCandidates;

    /**
     * If true, return Properties with at least one refundable rate.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RefundableInd" })
    refundableInd?: boolean;

    /**
     * You can use requested currency to request conversion rate information. The response will return the currencyRateConversion object which will contain conversion rate of the requested currency.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RequestedCurrency" })
    requestedCurrency?: string;

    @SpeakeasyMetadata({ elemType: RoomStayCandidate })
    @Expose({ name: "RoomStayCandidate" })
    @Type(() => RoomStayCandidate)
    roomStayCandidate?: RoomStayCandidate[];

    @SpeakeasyMetadata()
    @Expose({ name: "SearchBy" })
    @Type(() => SearchBy)
    searchBy: SearchBy;

    /**
     * If true, return Properties with at least one rate for a smoking room.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SmokingInd" })
    smokingInd?: boolean;

    /**
     * The method to be used in sorting hotel properties
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SortOrder" })
    sortOrder?: HotelSortOrderEnum;

    /**
     * If true, all property images of the size requested will be returned. If blank or false the best single property image will be returned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "returnAllImagesInd" })
    returnAllImagesInd?: boolean;
}