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