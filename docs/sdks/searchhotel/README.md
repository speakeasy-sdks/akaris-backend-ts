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
import { CreateResponse } from "akaris-backend/dist/sdk/models/operations";
import { ImageSizeEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.searchHotel.create({
  propertiesQuerySpecificPropertyListWrapper: {
    propertiesQuerySpecificPropertyList: {
      atType: "PropertiesQuerySpecificPropertyList",
      propertyKey: [
        {
          atType: "Electric pirouette",
          chainCode: "HL",
          propertyCode: "Sausages ASCII",
        },
      ],
      rateCandidates: {
        atType: "RateCandidates",
        rateCandidate: [
          {
            atType: "RateCandidate",
            chainCode: "HL",
            priority: 754558,
            propertyCode: "HL12345",
            rateCategory: RateCategoryEnum.Leisure,
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
                atType: "4th connecting",
                inclusion: [
                  "Bespoke",
                ],
                name: "24 hour Room Service",
                code: "Congo channels AGP",
                description: "WiFi",
                includedInd: false,
                quantity: 373347,
                surchargeInd: false,
              },
            ],
          },
        ],
      },
      checkinDate: new RFCDate("2022-02-20"),
      checkoutDate: new RFCDate("2021-05-08"),
      imageSize: ImageSizeEnum.Small,
      maximumRate: 7587.04,
      minimumRate: 4275.16,
      numberOfGuests: 418992,
      numberOfRooms: 285813,
      requestedCurrency: "mesh",
      returnAllImagesInd: false,
    },
  },
  traceId: "silver compressing Berkshire",
  xauthTravelportAccessgroup: "neque mainstream",
}).then((res: CreateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [operations.CreateRequest](../../models/operations/createrequest.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.CreateResponse](../../models/operations/createresponse.md)>**


## getPropertiesDetail

The optional Hotel Details request retrieves for one specified property a detailed description and additional images after a hotel search.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { GetPropertiesDetailResponse } from "akaris-backend/dist/sdk/models/operations";
import { ImageSizeEnum } from "akaris-backend/dist/sdk/models/shared";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.searchHotel.getPropertiesDetail({
  imageSize: ImageSizeEnum.Small,
  traceId: "Barium haptic Lead",
  xauthTravelportAccessgroup: "array Diverse Northwest",
  chainCode: "payment East ah",
  propertyCode: "transform Rustic",
}).then((res: GetPropertiesDetailResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetPropertiesDetailRequest](../../models/operations/getpropertiesdetailrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetPropertiesDetailResponse](../../models/operations/getpropertiesdetailresponse.md)>**


## getPropertiesPage

Hotel Search uses pagination by default. The initial search response returns 25 properties, notes the total number of properties found, and includes an identifier to be used for retrieving additional pages. Call the GET pagination endpoint to retrieve each additional page of 25 properties until the end of the list is reached.The identifier used for paging is saved for 30 minutes. A new hotel search request must be performed after it expires.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { GetPropertiesPageResponse } from "akaris-backend/dist/sdk/models/operations";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.searchHotel.getPropertiesPage({
  traceId: "toothbrush",
  xauthTravelportAccessgroup: "Cambridgeshire",
  identifier: "synergies Executive female",
  pageNumber: "quantifying Tesla",
}).then((res: GetPropertiesPageResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetPropertiesPageRequest](../../models/operations/getpropertiespagerequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetPropertiesPageResponse](../../models/operations/getpropertiespageresponse.md)>**


## searchProperties

The Hotel Search by Location request searches for hotels by (a) geographic coordinate information (b) city or state/province, and country or (c) IATA airport or city code.The response returns a list of properties using the same structure as the Hotel Search by ID response.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { SearchPropertiesResponse } from "akaris-backend/dist/sdk/models/operations";
import { HotelSortOrderEnum, ImageSizeEnum, RateCategoryEnum, UnitOfDistanceEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.searchHotel.searchProperties({
  propertiesQuerySearchWrapper: {
    propertiesQuerySearch: {
      atType: "PropertiesQuerySearch",
      chainCodes: [
        "Communications",
      ],
      checkInDate: new RFCDate("2022-01-14"),
      checkOutDate: new RFCDate("2022-11-04"),
      hotelName: "Clarita neural synthesize",
      imageSize: ImageSizeEnum.Medium,
      propertyAmenityCode: [
        "Tricycle",
      ],
      rateCandidates: {
        atType: "RateCandidates",
        rateCandidate: [
          {
            atType: "RateCandidate",
            chainCode: "HL",
            priority: 163919,
            propertyCode: "HL12345",
            rateCategory: RateCategoryEnum.Corporate,
            rateCode: "HL123",
          },
        ],
        postPayRatesOnlyInd: false,
        prePayRatesOnlyInd: false,
      },
      requestedCurrency: "Sharable deploy Sports",
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
              atType: "Southeast Gloves array",
              inclusion: [
                "United",
              ],
              name: "24 hour Room Service",
              code: "lime",
              description: "WiFi",
              includedInd: false,
              quantity: 146819,
              surchargeInd: false,
            },
          ],
        },
      ],
      searchBy: {
        atType: "SearchBy",
        searchRadius: {
          unitOfDistance: UnitOfDistanceEnum.Kilometers,
          value: 25,
        },
      },
      sortOrder: HotelSortOrderEnum.StarRating,
      returnAllImagesInd: false,
    },
  },
  traceId: "South",
  xauthTravelportAccessgroup: "Wooden",
}).then((res: SearchPropertiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.SearchPropertiesRequest](../../models/operations/searchpropertiesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SearchPropertiesResponse](../../models/operations/searchpropertiesresponse.md)>**
