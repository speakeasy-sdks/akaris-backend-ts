# SearchHotel
(*searchHotel*)

### Available Operations

* [create](#create) - Search hotels by property ID
* [getPropertiesDetail](#getpropertiesdetail) - Request hotel details
* [getPropertiesPage](#getpropertiespage) - Return additional search results (pagination)
* [searchProperties](#searchproperties) - Search hotels by location

## create

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

  const res = await sdk.searchHotel.create({
    propertiesQuerySpecificPropertyListWrapper: {
      propertiesQuerySpecificPropertyList: {
        atType: "PropertiesQuerySpecificPropertyList",
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
        checkinDate: new RFCDate("2023-06-12"),
        checkoutDate: new RFCDate("2024-06-06"),
        numberOfGuests: 264917,
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

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.CreateRequest](../../sdk/models/operations/createrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateResponse](../../sdk/models/operations/createresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getPropertiesDetail

The optional Hotel Details request retrieves for one specified property a detailed description and additional images after a hotel search.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { ImageSizeEnum } from "akaris-backend/dist/sdk/models/shared";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.searchHotel.getPropertiesDetail({
    chainCode: "<value>",
    propertyCode: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetPropertiesDetailRequest](../../sdk/models/operations/getpropertiesdetailrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetPropertiesDetailResponse](../../sdk/models/operations/getpropertiesdetailresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## getPropertiesPage

Hotel Search uses pagination by default. The initial search response returns 25 properties, notes the total number of properties found, and includes an identifier to be used for retrieving additional pages. Call the GET pagination endpoint to retrieve each additional page of 25 properties until the end of the list is reached.The identifier used for paging is saved for 30 minutes. A new hotel search request must be performed after it expires.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";

async function run() {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    },
  });

  const res = await sdk.searchHotel.getPropertiesPage({
    identifier: "<value>",
    pageNumber: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPropertiesPageRequest](../../sdk/models/operations/getpropertiespagerequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPropertiesPageResponse](../../sdk/models/operations/getpropertiespageresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |

## searchProperties

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

  const res = await sdk.searchHotel.searchProperties({
    propertiesQuerySearchWrapper: {
      propertiesQuerySearch: {
        atType: "PropertiesQuerySearch",
        chainCodes: [
          "<value>",
        ],
        checkInDate: new RFCDate("2023-11-19"),
        checkOutDate: new RFCDate("2023-10-26"),
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.SearchPropertiesRequest](../../sdk/models/operations/searchpropertiesrequest.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.SearchPropertiesResponse](../../sdk/models/operations/searchpropertiesresponse.md)>**
### Errors

| Error Object            | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.BaseResponse     | 400,401,402,403,404,500 | application/json        |
| errors.SDKError         | 4xx-5xx                 | */*                     |
