/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class BuildHotelReservationRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    reservationQueryBuildWrapper: shared.ReservationQueryBuildWrapper;

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

export class BuildHotelReservationResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Created - 201
     */
    @SpeakeasyMetadata()
    reservationResponseWrapper?: shared.ReservationResponseWrapper;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
