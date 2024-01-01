# HotelRules
(*hotelRules*)

### Available Operations

* [buildFromCatalogOfferings](#buildfromcatalogofferings) - To be deprecated and replaced with buildfromcatalogoffering
* [buildHotelRulesFromCatalogOffering](#buildhotelrulesfromcatalogoffering) - Available January 2023. Build rules by referenceing availability response
* [createHotelRules](#createhotelrules) - Full Payload hotel rules request

## buildFromCatalogOfferings

To be deprecated and replaced with buildfromcatalogoffering

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.hotelRules.buildFromCatalogOfferings({
    offerQueryBuildFromCatalogOfferingsHospitalityWrapper: {
      offerQueryBuildFromCatalogOfferingsHospitality: {
        atType: "OfferQueryBuildFromCatalogOfferingsHospitality",
        buildFromCatalogOfferingsRequest: {
          atType: "BuildFromCatalogOfferingsRequestAir",
          ancillaryOfferingIdentifier: [
            {
              ancillaryOfferingRef: "AN1",
              catalogOfferingRef: "CO1",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "AN1",
            },
          ],
          catalogOfferingIdentifier: {
            catalogOfferingRef: "co1",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "co1",
          },
          catalogOfferingsIdentifier: {
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "CatalogOfferings_1",
          },
          productIdentifier: [
            {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "product_1",
              productRef: "product_1",
            },
            {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "product_1",
              productRef: "product_1",
            },
          ],
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
| `request`                                                                                                      | [operations.BuildFromCatalogOfferingsRequest](../../sdk/models/operations/buildfromcatalogofferingsrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.BuildFromCatalogOfferingsResponse](../../sdk/models/operations/buildfromcatalogofferingsresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## buildHotelRulesFromCatalogOffering

Available January 2023. Build rules by referenceing availability response

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.hotelRules.buildHotelRulesFromCatalogOffering({
    offerQueryBuildFromCatalogOfferingWrapper: {
      offerQueryBuildFromCatalogOffering: {
        atType: "OfferQueryBuildFromCatalogOffering",
        buildFromCatalogOfferingHospitality: {
          atType: "BuildFromCatalogOfferingHospitality",
          catalogOfferingIdentifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          numberOfRooms: 1,
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

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.BuildHotelRulesFromCatalogOfferingRequest](../../sdk/models/operations/buildhotelrulesfromcatalogofferingrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.BuildHotelRulesFromCatalogOfferingResponse](../../sdk/models/operations/buildhotelrulesfromcatalogofferingresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## createHotelRules

Full Payload hotel rules request

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { HotelAggregatorEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.hotelRules.createHotelRules({
    offerQueryHospitalityRequestWrapper: {
      offerQueryHospitalityRequest: {
        atType: "OfferQueryHospitalityRequest",
        propertyKey: {
          chainCode: "HL",
          propertyCode: "string",
        },
        rateCandidate: {
          atType: "RateCandidate",
          chainCode: "HL",
          propertyCode: "HL12345",
          rateCode: "HL123",
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
        checkinDate: new RFCDate("2024-10-05"),
        checkoutDate: new RFCDate("2022-06-10"),
        numberOfGuests: 524055,
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateHotelRulesRequest](../../sdk/models/operations/createhotelrulesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateHotelRulesResponse](../../sdk/models/operations/createhotelrulesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |
