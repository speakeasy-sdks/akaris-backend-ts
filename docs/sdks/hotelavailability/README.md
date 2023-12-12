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
import { CurrencySourceEnum, DurationUnitEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
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
                    propertyCode: "string",
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
                        inclusion: [
                          "string",
                        ],
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

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateHotelAvailabilityRequest](../../sdk/models/operations/createhotelavailabilityrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateHotelAvailabilityResponse](../../sdk/models/operations/createhotelavailabilityresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 400-600                 | */*                     |

## hotelAvailabilityFromProperties

Hotel Availability returns room types and rates available at one or more specified properties on specified dates.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.hotelAvailability.hotelAvailabilityFromProperties({
    catalogOfferingsQueryBuildFromPropertiesWrapper: {
      catalogOfferingsQueryBuildFromProperties: {
        buildFromCatalogOfferingHospitality: {
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
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.HotelAvailabilityFromPropertiesRequest](../../sdk/models/operations/hotelavailabilityfrompropertiesrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.HotelAvailabilityFromPropertiesResponse](../../sdk/models/operations/hotelavailabilityfrompropertiesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 400-600                 | */*                     |
