/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { HotelAvailability } from "./hotelavailability";
import { HotelRules } from "./hotelrules";
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
    sdkVersion = "0.6.6";
    genVersion = "2.280.6";
    userAgent = "speakeasy-sdk/typescript 0.6.6 2.280.6 11.11.0 akaris-backend";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

export class AkarisBackend {
    public hotelAvailability: HotelAvailability;
    public reservationHotel: ReservationHotel;
    public hotelRules: HotelRules;
    public searchHotel: SearchHotel;
    public precisionSearchHotel: PrecisionSearchHotel;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;

        if (!serverURL) {
            const serverIdx = props?.serverIdx ?? 0;
            if (serverIdx < 0 || serverIdx >= ServerList.length) {
                throw new Error(`Invalid server index ${serverIdx}`);
            }
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.hotelAvailability = new HotelAvailability(this.sdkConfiguration);
        this.reservationHotel = new ReservationHotel(this.sdkConfiguration);
        this.hotelRules = new HotelRules(this.sdkConfiguration);
        this.searchHotel = new SearchHotel(this.sdkConfiguration);
        this.precisionSearchHotel = new PrecisionSearchHotel(this.sdkConfiguration);
    }
}
