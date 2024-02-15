# akaris-backend

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/akaris-backend-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/akaris-backend-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/akaris-backend-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/akaris-backend-ts
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { AkarisBackend } from "akaris-backend";
import {
    CurrencySourceEnum,
    DurationUnitEnum,
    RateCategoryEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
    const sdk = new AkarisBackend({
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.hotelAvailability.createHotelAvailability({
        catalogOfferingsQueryRequestHospitalityWrapper: {
            catalogOfferingsQueryRequest: {
                atType: "CatalogOfferingsRequestHospitality",
                catalogOfferingsRequest: [
                    {
                        atType: "CatalogOfferingsRequestHospitality",
                        hotelSearchCriterion: {
                            atType: "HotelSearchCriterion",
                            propertyRequest: [
                                {
                                    atType: "PropertyRequest",
                                    propertyKey: {
                                        chainCode: "HL",
                                        propertyCode: "<value>",
                                    },
                                },
                            ],
                            rateCandidates: {
                                atType: "RateCandidates",
                                rateCandidate: [
                                    {
                                        atType: "RateCandidate",
                                        chainCode: "HL",
                                        propertyCode: "HL12345",
                                        rateCode: "HL123",
                                    },
                                ],
                            },
                            roomStayCandidates: {
                                roomStayCandidate: [
                                    {
                                        guestCounts: {
                                            atType: "GuestCounts",
                                            guestCount: [
                                                {
                                                    atType: "GuestCount",
                                                    age: 21,
                                                    ageQualifyingCode: "10",
                                                    count: 2,
                                                },
                                            ],
                                        },
                                        roomAmenity: [
                                            {
                                                inclusion: ["<value>"],
                                                name: "24 hour Room Service",
                                                description: "WiFi",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                        maximumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        minimumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        searchControlConsoleChannelID: {
                            value: "2",
                        },
                        stayDates: {
                            duration: "P1D",
                            end: new RFCDate("2023-03-03"),
                            specific: new RFCDate("2023-03-03"),
                            start: new RFCDate("2023-03-03"),
                        },
                    },
                ],
            },
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [hotelAvailability](docs/sdks/hotelavailability/README.md)

* [createHotelAvailability](docs/sdks/hotelavailability/README.md#createhotelavailability) - Request hotel availability
* [hotelAvailabilityFromProperties](docs/sdks/hotelavailability/README.md#hotelavailabilityfromproperties) - Request hotel availability from precision search response

### [reservationHotel](docs/sdks/reservationhotel/README.md)

* [buildHotelReservation](docs/sdks/reservationhotel/README.md#buildhotelreservation) - Single payload booking request
* [cancelHotelOffer](docs/sdks/reservationhotel/README.md#cancelhoteloffer) - Cancel an Offer within a Reservation
* [createHotelReservation](docs/sdks/reservationhotel/README.md#createhotelreservation) - Create a reservation
* [retrieveHotelReservation](docs/sdks/reservationhotel/README.md#retrievehotelreservation) - Retrieve a Reservation
* [updateHotelReservation](docs/sdks/reservationhotel/README.md#updatehotelreservation) - Update a reservation

### [hotelRules](docs/sdks/hotelrules/README.md)

* [buildFromCatalogOfferings](docs/sdks/hotelrules/README.md#buildfromcatalogofferings) - To be deprecated and replaced with buildfromcatalogoffering
* [buildHotelRulesFromCatalogOffering](docs/sdks/hotelrules/README.md#buildhotelrulesfromcatalogoffering) - Available January 2023. Build rules by referenceing availability response
* [createHotelRules](docs/sdks/hotelrules/README.md#createhotelrules) - Full Payload hotel rules request

### [searchHotel](docs/sdks/searchhotel/README.md)

* [create](docs/sdks/searchhotel/README.md#create) - Search hotels by property ID
* [getPropertiesDetail](docs/sdks/searchhotel/README.md#getpropertiesdetail) - Request hotel details
* [getPropertiesPage](docs/sdks/searchhotel/README.md#getpropertiespage) - Return additional search results (pagination)
* [searchProperties](docs/sdks/searchhotel/README.md#searchproperties) - Search hotels by location

### [precisionSearchHotel](docs/sdks/precisionsearchhotel/README.md)

* [createPrecision](docs/sdks/precisionsearchhotel/README.md#createprecision) - Precision Search hotels by property ID
* [precisionSearchProperties](docs/sdks/precisionsearchhotel/README.md#precisionsearchproperties) - Search hotels by location
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

Example

```typescript
import { AkarisBackend } from "akaris-backend";
import {
    CurrencySourceEnum,
    DurationUnitEnum,
    RateCategoryEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
    const sdk = new AkarisBackend({
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.hotelAvailability.createHotelAvailability({
            catalogOfferingsQueryRequestHospitalityWrapper: {
                catalogOfferingsQueryRequest: {
                    atType: "CatalogOfferingsRequestHospitality",
                    catalogOfferingsRequest: [
                        {
                            atType: "CatalogOfferingsRequestHospitality",
                            hotelSearchCriterion: {
                                atType: "HotelSearchCriterion",
                                propertyRequest: [
                                    {
                                        atType: "PropertyRequest",
                                        propertyKey: {
                                            chainCode: "HL",
                                            propertyCode: "<value>",
                                        },
                                    },
                                ],
                                rateCandidates: {
                                    atType: "RateCandidates",
                                    rateCandidate: [
                                        {
                                            atType: "RateCandidate",
                                            chainCode: "HL",
                                            propertyCode: "HL12345",
                                            rateCode: "HL123",
                                        },
                                    ],
                                },
                                roomStayCandidates: {
                                    roomStayCandidate: [
                                        {
                                            guestCounts: {
                                                atType: "GuestCounts",
                                                guestCount: [
                                                    {
                                                        atType: "GuestCount",
                                                        age: 21,
                                                        ageQualifyingCode: "10",
                                                        count: 2,
                                                    },
                                                ],
                                            },
                                            roomAmenity: [
                                                {
                                                    inclusion: ["<value>"],
                                                    name: "24 hour Room Service",
                                                    description: "WiFi",
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                            maximumAmount: {
                                approximateInd: true,
                                code: "USD",
                                minorUnit: 2,
                                value: 124.56,
                            },
                            minimumAmount: {
                                approximateInd: true,
                                code: "USD",
                                minorUnit: 2,
                                value: 124.56,
                            },
                            searchControlConsoleChannelID: {
                                value: "2",
                            },
                            stayDates: {
                                duration: "P1D",
                                end: new RFCDate("2023-03-03"),
                                specific: new RFCDate("2023-03-03"),
                                start: new RFCDate("2023-03-03"),
                            },
                        },
                    ],
                },
            },
        });
    } catch (err) {
        if (err instanceof errors.BaseResponse) {
            console.error(err); // handle exception
            throw err;
        } else if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.pp.travelport.com/11/hotel` | None |
| 1 | `https://api.travelport.com/11/hotel` | None |

#### Example

```typescript
import { AkarisBackend } from "akaris-backend";
import {
    CurrencySourceEnum,
    DurationUnitEnum,
    RateCategoryEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
    const sdk = new AkarisBackend({
        serverIdx: 1,
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.hotelAvailability.createHotelAvailability({
        catalogOfferingsQueryRequestHospitalityWrapper: {
            catalogOfferingsQueryRequest: {
                atType: "CatalogOfferingsRequestHospitality",
                catalogOfferingsRequest: [
                    {
                        atType: "CatalogOfferingsRequestHospitality",
                        hotelSearchCriterion: {
                            atType: "HotelSearchCriterion",
                            propertyRequest: [
                                {
                                    atType: "PropertyRequest",
                                    propertyKey: {
                                        chainCode: "HL",
                                        propertyCode: "<value>",
                                    },
                                },
                            ],
                            rateCandidates: {
                                atType: "RateCandidates",
                                rateCandidate: [
                                    {
                                        atType: "RateCandidate",
                                        chainCode: "HL",
                                        propertyCode: "HL12345",
                                        rateCode: "HL123",
                                    },
                                ],
                            },
                            roomStayCandidates: {
                                roomStayCandidate: [
                                    {
                                        guestCounts: {
                                            atType: "GuestCounts",
                                            guestCount: [
                                                {
                                                    atType: "GuestCount",
                                                    age: 21,
                                                    ageQualifyingCode: "10",
                                                    count: 2,
                                                },
                                            ],
                                        },
                                        roomAmenity: [
                                            {
                                                inclusion: ["<value>"],
                                                name: "24 hour Room Service",
                                                description: "WiFi",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                        maximumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        minimumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        searchControlConsoleChannelID: {
                            value: "2",
                        },
                        stayDates: {
                            duration: "P1D",
                            end: new RFCDate("2023-03-03"),
                            specific: new RFCDate("2023-03-03"),
                            start: new RFCDate("2023-03-03"),
                        },
                    },
                ],
            },
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { AkarisBackend } from "akaris-backend";
import {
    CurrencySourceEnum,
    DurationUnitEnum,
    RateCategoryEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
    const sdk = new AkarisBackend({
        serverURL: "https://api.pp.travelport.com/11/hotel",
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.hotelAvailability.createHotelAvailability({
        catalogOfferingsQueryRequestHospitalityWrapper: {
            catalogOfferingsQueryRequest: {
                atType: "CatalogOfferingsRequestHospitality",
                catalogOfferingsRequest: [
                    {
                        atType: "CatalogOfferingsRequestHospitality",
                        hotelSearchCriterion: {
                            atType: "HotelSearchCriterion",
                            propertyRequest: [
                                {
                                    atType: "PropertyRequest",
                                    propertyKey: {
                                        chainCode: "HL",
                                        propertyCode: "<value>",
                                    },
                                },
                            ],
                            rateCandidates: {
                                atType: "RateCandidates",
                                rateCandidate: [
                                    {
                                        atType: "RateCandidate",
                                        chainCode: "HL",
                                        propertyCode: "HL12345",
                                        rateCode: "HL123",
                                    },
                                ],
                            },
                            roomStayCandidates: {
                                roomStayCandidate: [
                                    {
                                        guestCounts: {
                                            atType: "GuestCounts",
                                            guestCount: [
                                                {
                                                    atType: "GuestCount",
                                                    age: 21,
                                                    ageQualifyingCode: "10",
                                                    count: 2,
                                                },
                                            ],
                                        },
                                        roomAmenity: [
                                            {
                                                inclusion: ["<value>"],
                                                name: "24 hour Room Service",
                                                description: "WiFi",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                        maximumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        minimumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        searchControlConsoleChannelID: {
                            value: "2",
                        },
                        stayDates: {
                            duration: "P1D",
                            end: new RFCDate("2023-03-03"),
                            specific: new RFCDate("2023-03-03"),
                            start: new RFCDate("2023-03-03"),
                        },
                    },
                ],
            },
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { akaris-backend } from "AkarisBackend";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new AkarisBackend({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `oAuth2`     | oauth2       | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { AkarisBackend } from "akaris-backend";
import {
    CurrencySourceEnum,
    DurationUnitEnum,
    RateCategoryEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
    const sdk = new AkarisBackend({
        security: {
            oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
        },
    });

    const res = await sdk.hotelAvailability.createHotelAvailability({
        catalogOfferingsQueryRequestHospitalityWrapper: {
            catalogOfferingsQueryRequest: {
                atType: "CatalogOfferingsRequestHospitality",
                catalogOfferingsRequest: [
                    {
                        atType: "CatalogOfferingsRequestHospitality",
                        hotelSearchCriterion: {
                            atType: "HotelSearchCriterion",
                            propertyRequest: [
                                {
                                    atType: "PropertyRequest",
                                    propertyKey: {
                                        chainCode: "HL",
                                        propertyCode: "<value>",
                                    },
                                },
                            ],
                            rateCandidates: {
                                atType: "RateCandidates",
                                rateCandidate: [
                                    {
                                        atType: "RateCandidate",
                                        chainCode: "HL",
                                        propertyCode: "HL12345",
                                        rateCode: "HL123",
                                    },
                                ],
                            },
                            roomStayCandidates: {
                                roomStayCandidate: [
                                    {
                                        guestCounts: {
                                            atType: "GuestCounts",
                                            guestCount: [
                                                {
                                                    atType: "GuestCount",
                                                    age: 21,
                                                    ageQualifyingCode: "10",
                                                    count: 2,
                                                },
                                            ],
                                        },
                                        roomAmenity: [
                                            {
                                                inclusion: ["<value>"],
                                                name: "24 hour Room Service",
                                                description: "WiFi",
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                        maximumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        minimumAmount: {
                            approximateInd: true,
                            code: "USD",
                            minorUnit: 2,
                            value: 124.56,
                        },
                        searchControlConsoleChannelID: {
                            value: "2",
                        },
                        stayDates: {
                            duration: "P1D",
                            end: new RFCDate("2023-03-03"),
                            specific: new RFCDate("2023-03-03"),
                            start: new RFCDate("2023-03-03"),
                        },
                    },
                ],
            },
        },
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
