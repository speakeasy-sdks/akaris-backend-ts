# akaris-backend

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/akaris-backend-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/akaris-backend-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
# SDK Installation

## NPM

```bash
npm add https://github.com/speakeasy-sdks/akaris-backend-ts
```

## Yarn

```bash
yarn add https://github.com/speakeasy-sdks/akaris-backend-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->


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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
# Available Resources and Operations


## [hotelAvailability](docs/sdks/hotelavailability/README.md)

* [createHotelAvailability](docs/sdks/hotelavailability/README.md#createhotelavailability) - Request hotel availability
* [hotelAvailabilityFromProperties](docs/sdks/hotelavailability/README.md#hotelavailabilityfromproperties) - Request hotel availability from precision search response

## [hotelRules](docs/sdks/hotelrules/README.md)

* [buildFromCatalogOfferings](docs/sdks/hotelrules/README.md#buildfromcatalogofferings) - To be deprecated and replaced with buildfromcatalogoffering
* [buildHotelRulesFromCatalogOffering](docs/sdks/hotelrules/README.md#buildhotelrulesfromcatalogoffering) - Available January 2023. Build rules by referenceing availability response
* [createHotelRules](docs/sdks/hotelrules/README.md#createhotelrules) - Full Payload hotel rules request

## [precisionSearchHotel](docs/sdks/precisionsearchhotel/README.md)

* [createPrecision](docs/sdks/precisionsearchhotel/README.md#createprecision) - Precision Search hotels by property ID
* [precisionSearchProperties](docs/sdks/precisionsearchhotel/README.md#precisionsearchproperties) - Search hotels by location

## [reservationHotel](docs/sdks/reservationhotel/README.md)

* [buildHotelReservation](docs/sdks/reservationhotel/README.md#buildhotelreservation) - Single payload booking request
* [cancelHotelOffer](docs/sdks/reservationhotel/README.md#cancelhoteloffer) - Cancel an Offer within a Reservation
* [createHotelReservation](docs/sdks/reservationhotel/README.md#createhotelreservation) - Create a reservation
* [retrieveHotelReservation](docs/sdks/reservationhotel/README.md#retrievehotelreservation) - Retrieve a Reservation
* [updateHotelReservation](docs/sdks/reservationhotel/README.md#updatehotelreservation) - Update a reservation

## [searchHotel](docs/sdks/searchhotel/README.md)

* [create](docs/sdks/searchhotel/README.md#create) - Search hotels by property ID
* [getPropertiesDetail](docs/sdks/searchhotel/README.md#getpropertiesdetail) - Request hotel details
* [getPropertiesPage](docs/sdks/searchhotel/README.md#getpropertiespage) - Return additional search results (pagination)
* [searchProperties](docs/sdks/searchhotel/README.md#searchproperties) - Search hotels by location
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->



<!-- End Dev Containers -->

<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

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
