/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { HotelAvailability } from "./hotelavailability";
import { HotelRules } from "./hotelrules";
import * as shared from "./models/shared";
import { PrecisionSearchHotel } from "./precisionsearchhotel";
import { ReservationHotel } from "./reservationhotel";
import { SearchHotel } from "./searchhotel";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    "https://api.pp.travelport.com/11/hotel",
    "https://api.travelport.com/11/hotel",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "11.11.0";
    sdkVersion = "0.3.0";
    genVersion = "2.169.0";
    userAgent = "speakeasy-sdk/typescript 0.3.0 2.169.0 11.11.0 akaris-backend";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class AkarisBackend {
    public hotelAvailability: HotelAvailability;
    public hotelRules: HotelRules;
    public precisionSearchHotel: PrecisionSearchHotel;
    public reservationHotel: ReservationHotel;
    public searchHotel: SearchHotel;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.hotelAvailability = new HotelAvailability(this.sdkConfiguration);
        this.hotelRules = new HotelRules(this.sdkConfiguration);
        this.precisionSearchHotel = new PrecisionSearchHotel(this.sdkConfiguration);
        this.reservationHotel = new ReservationHotel(this.sdkConfiguration);
        this.searchHotel = new SearchHotel(this.sdkConfiguration);
    }
}
