<!-- Start SDK Example Usage [usage] -->
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