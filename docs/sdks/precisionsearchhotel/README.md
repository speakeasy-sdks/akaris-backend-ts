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
import { CreatePrecisionResponse } from "akaris-backend/dist/sdk/models/operations";
import { ImageSizeEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.precisionSearchHotel.createPrecision({
  propertiesQuerySpecificPrecisionPropertyListWrapper: {
    propertiesQuerySpecificPrecisionPropertyList: {
      atType: "PropertiesQuerySpecificPropertyList",
      commissionableInd: false,
      mealsIncluded: {
        breakfastInd: false,
        dinnerInd: false,
        lunchInd: false,
      },
      propertyKey: [
        {
          atType: "City",
          chainCode: "HL",
          propertyCode: "Northeast",
        },
      ],
      rateCandidates: {
        atType: "RateCandidates",
        rateCandidate: [
          {
            atType: "RateCandidate",
            chainCode: "HL",
            priority: 694488,
            propertyCode: "HL12345",
            rateCategory: RateCategoryEnum.MultiDayPackage,
            rateCode: "HL123",
          },
        ],
        postPayRatesOnlyInd: false,
        prePayRatesOnlyInd: false,
      },
      refundableInd: false,
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
                atType: "orchid",
                inclusion: [
                  "intangible",
                ],
                name: "24 hour Room Service",
                code: "lavender naive",
                description: "WiFi",
                includedInd: false,
                quantity: 380645,
                surchargeInd: false,
              },
            ],
          },
        ],
      },
      smokingInd: false,
      checkinDate: new RFCDate("2021-12-06"),
      checkoutDate: new RFCDate("2023-05-08"),
      imageSize: ImageSizeEnum.Thumbnail,
      maximumRate: 3578.82,
      minimumRate: 6203.38,
      numberOfGuests: 123772,
      numberOfRooms: 905681,
      requestedCurrency: "synthesize Brand",
      returnAllImagesInd: false,
    },
  },
  traceId: "kilogram longingly Cambridgeshire",
  xauthTravelportAccessgroup: "Integration",
}).then((res: CreatePrecisionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreatePrecisionRequest](../../models/operations/createprecisionrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreatePrecisionResponse](../../models/operations/createprecisionresponse.md)>**


## precisionSearchProperties

The Hotel Search by Location request searches for hotels by (a) geographic coordinate information (b) city or state/province, and country or (c) IATA airport or city code.The response returns a list of properties using the same structure as the Hotel Search by ID response.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { PrecisionSearchPropertiesResponse } from "akaris-backend/dist/sdk/models/operations";
import { HotelSortOrderEnum, ImageSizeEnum, RateCategoryEnum, UnitOfDistanceEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.precisionSearchHotel.precisionSearchProperties({
  propertiesQueryPrecisionSearchWrapper: {
    propertiesQuerySearch: {
      atType: "PropertiesQuerySearch",
      chainCodes: [
        "Northwest",
      ],
      checkInDate: new RFCDate("2022-03-27"),
      checkOutDate: new RFCDate("2022-02-02"),
      commissionableInd: false,
      hotelName: "Gender",
      imageSize: ImageSizeEnum.Small,
      mealsIncluded: {
        breakfastInd: false,
        dinnerInd: false,
        lunchInd: false,
      },
      propertyAmenityCode: [
        "female",
      ],
      rateCandidates: {
        atType: "RateCandidates",
        rateCandidate: [
          {
            atType: "RateCandidate",
            chainCode: "HL",
            priority: 943883,
            propertyCode: "HL12345",
            rateCategory: RateCategoryEnum.Vip,
            rateCode: "HL123",
          },
        ],
        postPayRatesOnlyInd: false,
        prePayRatesOnlyInd: false,
      },
      refundableInd: false,
      requestedCurrency: "Fundamental copy defect",
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
              atType: "male Cambridgeshire",
              inclusion: [
                "bulk",
              ],
              name: "24 hour Room Service",
              code: "Cotton",
              description: "WiFi",
              includedInd: false,
              quantity: 204092,
              surchargeInd: false,
            },
          ],
        },
      ],
      searchBy: {
        atType: "SearchBy",
        searchRadius: {
          unitOfDistance: UnitOfDistanceEnum.Miles,
          value: 25,
        },
      },
      smokingInd: false,
      sortOrder: HotelSortOrderEnum.Proximity,
      returnAllImagesInd: false,
    },
  },
  traceId: "oddly system Customer",
  xauthTravelportAccessgroup: "glistening Blues",
}).then((res: PrecisionSearchPropertiesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PrecisionSearchPropertiesRequest](../../models/operations/precisionsearchpropertiesrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PrecisionSearchPropertiesResponse](../../models/operations/precisionsearchpropertiesresponse.md)>**

