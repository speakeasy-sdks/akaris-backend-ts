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
import { BuildFromCatalogOfferingsResponse } from "akaris-backend/dist/sdk/models/operations";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.hotelRules.buildFromCatalogOfferings({
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
        ],
      },
    },
  },
  traceId: "silver",
  travelportPlusSessionID: "Grocery joule",
  xauthTravelportAccessgroup: "West",
}).then((res: BuildFromCatalogOfferingsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.BuildFromCatalogOfferingsRequest](../../models/operations/buildfromcatalogofferingsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.BuildFromCatalogOfferingsResponse](../../models/operations/buildfromcatalogofferingsresponse.md)>**


## buildHotelRulesFromCatalogOffering

Available January 2023. Build rules by referenceing availability response

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { BuildHotelRulesFromCatalogOfferingResponse } from "akaris-backend/dist/sdk/models/operations";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.hotelRules.buildHotelRulesFromCatalogOffering({
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
  traceId: "Borders",
  xauthTravelportAccessgroup: "Maserati Avon",
}).then((res: BuildHotelRulesFromCatalogOfferingResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.BuildHotelRulesFromCatalogOfferingRequest](../../models/operations/buildhotelrulesfromcatalogofferingrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.BuildHotelRulesFromCatalogOfferingResponse](../../models/operations/buildhotelrulesfromcatalogofferingresponse.md)>**


## createHotelRules

Full Payload hotel rules request

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { CreateHotelRulesResponse } from "akaris-backend/dist/sdk/models/operations";
import { HotelAggregatorEnum, RateCategoryEnum } from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.hotelRules.createHotelRules({
  offerQueryHospitalityRequestWrapper: {
    offerQueryHospitalityRequest: {
      atType: "OfferQueryHospitalityRequest",
      hotelAggregator: HotelAggregatorEnum.Bonotel,
      propertyKey: {
        atType: "firewall",
        chainCode: "HL",
        propertyCode: "greedily convergence",
      },
      rateCandidate: {
        atType: "RateCandidate",
        chainCode: "HL",
        priority: 897319,
        propertyCode: "HL12345",
        rateCategory: RateCategoryEnum.Tour,
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
                atType: "cyan Southwest",
                inclusion: [
                  "Sports",
                ],
                name: "24 hour Room Service",
                code: "COM hmph Liaison",
                description: "WiFi",
                includedInd: false,
                quantity: 738116,
                surchargeInd: false,
              },
            ],
          },
        ],
      },
      bookingCode: "female",
      checkinDate: new RFCDate("2023-04-26"),
      checkoutDate: new RFCDate("2021-11-24"),
      numberOfGuests: 637308,
      requestedCurrency: "Ball time",
      storedAmount: 1058.18,
      storedCurrency: "brr",
    },
  },
  traceId: "Market Multigender",
  xauthTravelportAccessgroup: "Hatchback",
}).then((res: CreateHotelRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateHotelRulesRequest](../../models/operations/createhotelrulesrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateHotelRulesResponse](../../models/operations/createhotelrulesresponse.md)>**

