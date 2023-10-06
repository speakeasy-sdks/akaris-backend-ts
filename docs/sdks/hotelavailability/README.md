# HotelAvailability
(*hotelAvailability*)

### Available Operations

* [createHotelAvailability](#createhotelavailability) - Request hotel availability
* [hotelAvailabilityFromProperties](#hotelavailabilityfromproperties) - Request hotel availability from precision search response

## createHotelAvailability

Hotel Availability returns room types and rates available at one or more specified properties on specified dates.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { CreateHotelAvailabilityResponse } from "akaris-backend/dist/sdk/models/operations";
import { CurrencySourceEnum, DurationUnitEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.hotelAvailability.createHotelAvailability({
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
                  atType: "Philippines North",
                  chainCode: "HL",
                  propertyCode: "male Locks",
                },
                moreRatesToken: "whereas",
              },
            ],
            rateCandidates: {
              atType: "RateCandidates",
              rateCandidate: [
                {
                  atType: "RateCandidate",
                  chainCode: "HL",
                  priority: 219354,
                  propertyCode: "HL12345",
                  rateCategory: RateCategoryEnum.Other,
                  rateCode: "HL123",
                },
              ],
              postPayRatesOnlyInd: false,
              prePayRatesOnlyInd: false,
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
                      atType: "buckwheat HEX eius",
                      inclusion: [
                        "Screen",
                      ],
                      name: "24 hour Room Service",
                      code: "Paradigm East",
                      description: "WiFi",
                      includedInd: false,
                      quantity: 561488,
                      surchargeInd: false,
                    },
                  ],
                },
              ],
            },
            numberOfRooms: 747350,
          },
          maximumAmount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Supplier,
            minorUnit: 2,
            value: 124.56,
          },
          minimumAmount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Supplier,
            minorUnit: 2,
            value: 124.56,
          },
          searchControlConsoleChannelID: {
            sccType: "multimedia Pop",
            value: "2",
          },
          stayDates: {
            duration: "P1D",
            durationUnit: DurationUnitEnum.Hours,
            end: new RFCDate("2023-03-03"),
            specific: new RFCDate("2023-03-03"),
            start: new RFCDate("2023-03-03"),
          },
          maxResponseWaitTime: 37199,
          requestedCurrency: "ROI",
          verboseResponseInd: false,
        },
      ],
    },
  },
  traceId: "Folk Washington female",
  xauthTravelportAccessgroup: "phooey poorly male",
}).then((res: CreateHotelAvailabilityResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateHotelAvailabilityRequest](../../models/operations/createhotelavailabilityrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateHotelAvailabilityResponse](../../models/operations/createhotelavailabilityresponse.md)>**


## hotelAvailabilityFromProperties

Hotel Availability returns room types and rates available at one or more specified properties on specified dates.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { HotelAvailabilityFromPropertiesResponse } from "akaris-backend/dist/sdk/models/operations";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.hotelAvailability.hotelAvailabilityFromProperties({
  catalogOfferingsQueryBuildFromPropertiesWrapper: {
    catalogOfferingsQueryBuildFromProperties: {
      atType: "withdrawal Omnigender",
      buildFromCatalogOfferingHospitality: {
        atType: "invoice",
        propertInfoIds: [
          "ON-60106",
        ],
        propertiesIdentifier: {
          authority: "TVPT",
          value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
        },
      },
    },
  },
  traceId: "past",
  xauthTravelportAccessgroup: "Mandatory black",
}).then((res: HotelAvailabilityFromPropertiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.HotelAvailabilityFromPropertiesRequest](../../models/operations/hotelavailabilityfrompropertiesrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.HotelAvailabilityFromPropertiesResponse](../../models/operations/hotelavailabilityfrompropertiesresponse.md)>**

