/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class HotelAvailabilityFromPropertiesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    catalogOfferingsQueryBuildFromPropertiesWrapper: shared.CatalogOfferingsQueryBuildFromPropertiesWrapper;

    /**
     * Identifier used to correlate API invocations across long-running or multi-call business flows.
     */
    @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TraceId" })
    traceId?: string;

    /**
     * Identifies the Travelport access group with which the caller is associated
     */
    @SpeakeasyMetadata({
        data: "header, style=simple;explode=false;name=XAUTH_TRAVELPORT_ACCESSGROUP",
    })
    xauthTravelportAccessgroup?: string;
}

export class HotelAvailabilityFromPropertiesResponse extends SpeakeasyBase {
    /**
     * Created - 201
     */
    @SpeakeasyMetadata()
    catalogOfferingsHospitalityResponseWrapper?: shared.CatalogOfferingsHospitalityResponseWrapper;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
