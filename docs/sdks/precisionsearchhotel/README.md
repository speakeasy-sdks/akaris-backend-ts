# PrecisionSearchHotel
(*precisionSearchHotel*)

### Available Operations

* [createPrecision](#createprecision) - Precision Search hotels by property ID
* [precisionSearchProperties](#precisionsearchproperties) - Search hotels by location

## createPrecision

The Hotel Search by ID request searches for hotels by search by one or more property IDs. The response returns a list of properties based on the ID/s sent, and is the same as the Hotel Search by Location response.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { ImageSizeEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.precisionSearchHotel.createPrecision({
    propertiesQuerySpecificPrecisionPropertyListWrapper: {
      propertiesQuerySpecificPrecisionPropertyList: {
        atType: "PropertiesQuerySpecificPropertyList",
        mealsIncluded: {},
        propertyKey: [
          {
            chainCode: "HL",
            propertyCode: "<value>",
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
                    "<value>",
                  ],
                  name: "24 hour Room Service",
                  description: "WiFi",
                },
              ],
            },
          ],
        },
        checkinDate: new RFCDate("2022-07-01"),
        checkoutDate: new RFCDate("2024-04-22"),
        numberOfGuests: 157281,
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreatePrecisionRequest](../../sdk/models/operations/createprecisionrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreatePrecisionResponse](../../sdk/models/operations/createprecisionresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## precisionSearchProperties

The Hotel Search by Location request searches for hotels by (a) geographic coordinate information (b) city or state/province, and country or (c) IATA airport or city code.The response returns a list of properties using the same structure as the Hotel Search by ID response.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { HotelSortOrderEnum, ImageSizeEnum, RateCategoryEnum, UnitOfDistanceEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.precisionSearchHotel.precisionSearchProperties({
    propertiesQueryPrecisionSearchWrapper: {
      propertiesQuerySearch: {
        atType: "PropertiesQuerySearch",
        chainCodes: [
          "<value>",
        ],
        checkInDate: new RFCDate("2022-05-01"),
        checkOutDate: new RFCDate("2023-01-18"),
        mealsIncluded: {},
        propertyAmenityCode: [
          "<value>",
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
                  "<value>",
                ],
                name: "24 hour Room Service",
                description: "WiFi",
              },
            ],
          },
        ],
        searchBy: {
          atType: "SearchBy",
          searchRadius: {
            value: 25,
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

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PrecisionSearchPropertiesRequest](../../sdk/models/operations/precisionsearchpropertiesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PrecisionSearchPropertiesResponse](../../sdk/models/operations/precisionsearchpropertiesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |
