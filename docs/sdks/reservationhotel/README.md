# ReservationHotel
(*.reservationHotel*)

### Available Operations

* [buildHotelReservation](#buildhotelreservation) - Single payload booking request
* [cancelHotelOffer](#cancelhoteloffer) - Cancel an Offer within a Reservation
* [createHotelReservation](#createhotelreservation) - Create a reservation
* [retrieveHotelReservation](#retrievehotelreservation) - Retrieve a Reservation
* [updateHotelReservation](#updatehotelreservation) - Update a reservation

## buildHotelReservation

This full payload book request allows your to reference a hotel availability response and build the Reservation in a single API call.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { OrganizationTypeEnum } from "akaris-backend/dist/sdk/models/shared";

(async() => {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "",
    },
  });

  const res = await sdk.reservationHotel.buildHotelReservation({
    reservationQueryBuildWrapper: {
      reservationQueryBuild: {
        reservationBuild: {
          atType: "ReservationBuildFromCatalogOfferings",
          accounting: {
            atType: "Accounting",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
          },
          documentOverrides: [
            {
              atType: "DocumentOverrides",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          ],
          formOfPayment: [
            {
              atType: "FormOfPaymentPaymentCard",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          ],
          payment: [
            {
              atType: "Payment",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          ],
          preference: [
            {
              atType: "Preference",
            },
          ],
          primaryContact: [
            {
              atType: "PrimaryContact",
            },
          ],
          receiptConfirmation: {
            atType: "ReceiptConfirmation",
            confirmation: {
              atType: "ConfirmationHold",
            },
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            offerRef: [
              "string",
            ],
            receiptRef: "6773 2389 2239 2832",
            segmentSequenceList: [
              248317,
            ],
            id: "3493289238",
          },
          reservationComment: [
            {
              atType: "ReservationComment",
            },
          ],
          specialService: [
            {
              atType: "SpecialService",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          ],
          travelAgency: {
            atType: "TravelAgencyDetail",
            corporateCode: "Air Agency",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            organizationName: {
              code: "AI",
              codeContext: "ISO",
              department: "Adventure department",
              division: "Travel Division",
              id: "2",
              shortName: "Aventure Inc",
              systemOfRecord: [
                "[",
                "\"",
                "1",
                "G",
                "\"",
                ",",
                "\"",
                "1",
                "V",
                "\"",
                ",",
                "\"",
                "M",
                "B",
                "\"",
                ",",
                "\"",
                "H",
                "Z",
                "\"",
                "]",
              ],
            },
            profileName: [
              "string",
            ],
            travelOrganizationRef: "TravelAgency_1",
            id: "2",
          },
          traveler: [
            {
              atType: "TravelerDetail",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          ],
        },
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.BuildHotelReservationRequest](../../models/operations/buildhotelreservationrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.BuildHotelReservationResponse](../../models/operations/buildhotelreservationresponse.md)>**


## cancelHotelOffer

Cancel an Offer by modifying the Reservation

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";

(async() => {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "",
    },
  });

  const res = await sdk.reservationHotel.cancelHotelOffer({
    reservationIdentifier: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CancelHotelOfferRequest](../../models/operations/cancelhotelofferrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CancelHotelOfferResponse](../../models/operations/cancelhotelofferresponse.md)>**


## createHotelReservation

Create a reservation on the core or with the vendor/provider.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import {
  AvailabilityStatusEnum,
  CabinAirEnum,
  ChangeFeeMethodEnumBase,
  CommentSourceEnum,
  CommissionApplyEnum,
  CommissionEnum,
  ConfirmationStatusEnum,
  CurrencySourceEnum,
  DestinationEnum,
  DocTypeCodeEnum,
  DocumentTypeEnum,
  EnumAddressRole,
  EnumTelephoneRole,
  FareQualifierENUMBase,
  FareTypeEnum,
  GenderEnum,
  MeasurementTypeEnum,
  OperationalStatusENUMBase,
  OptInStatusEnum,
  OrganizationTypeEnum,
  PurposeEnum,
  ShareWithEnum,
  TextFormatEnum,
  TourCodeTypeEnum,
  UnitOfMeasureEnum,
  YesNoInheritEnum,
  YesNoUnknownEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

(async() => {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "",
    },
  });

  const res = await sdk.reservationHotel.createHotelReservation({
    reservationDetailWrapper: {
      reservationDetail: {
        atType: "Reservation",
        accounting: {
          atType: "Accounting",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          nameValuePair: [
            {
              id: "6",
              name: "Day1",
              value: "Sunday",
            },
          ],
          dataType: "DateTime",
          template: "Internal Finance template",
        },
        agencyServiceFee: [
          {
            atType: "AgencyServiceFee",
            amount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            description: "Flight reservation service fee",
            relatedDocumentNumber: {
              documentIssuer: "BA",
              documentType: DocumentTypeEnum.Ticket,
              value: "1259900123456",
            },
            tax: [
              {
                codeAuthority: "ISO",
                currencyCode: "USD",
                decimalAuthority: "ISO",
                decimalPlace: 2,
                description: "Additional details.",
                exemptInd: true,
                purpose: "Fuel",
                reportingAuthority: "JFK1",
                taxCode: "7702",
                value: 12.2,
              },
            ],
            id: "AgencyServiceFee_1",
          },
        ],
        documentOverrides: [
          {
            atType: "DocumentOverrides",
            changeFeeCollectionMethod: {
              changeFeeIssuedSeparatelyInd: true,
              code: "f2142",
              description: "Change fee collection method",
              subCode: "631b",
              taxIncludedInBaseAmountInd: true,
              value: {
                value: ChangeFeeMethodEnumBase.Emd,
              },
            },
            commissions: [
              {
                applyTo: CommissionApplyEnum.Base,
                commission: {
                  atType: "Commission",
                },
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            destinationPurpose: [
              {
                atType: "DestinationPurpose",
                destination: DestinationEnum.IslandsAndCountriesOfTheCaribbean,
                purpose: PurposeEnum.Business,
              },
            ],
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            netRemitInfo: {
              atType: "NetRemitInfo",
              actualSellingFare: 100.5,
              carCode: "ACAR",
              netBaseAmount: {
                codeAuthority: "Australian Dollar",
                currencyCode: "USD",
                decimalAuthority: "ISO 4217",
                decimalPlace: 3,
                value: 43.3422,
              },
              valueCode: "D1000",
            },
            offerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "offer_1",
              offerRef: "offer_1",
            },
            productIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "product_1",
              productRef: "product_1",
            },
            restrictions: [
              {
                documentType: DocumentTypeEnum.Ticket,
                restriction: [
                  "string",
                ],
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            ticketDesignators: [
              {
                atType: "string",
                ticketDesignator: "string",
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            tourCodes: [
              {
                atType: "TourCodes",
                tourCode: {},
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
          },
        ],
        formOfPayment: [
          {
            atType: "FormOfPaymentPaymentCard",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
          },
        ],
        identifier: {
          authority: "TVPT",
          value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
        },
        offer: [
          {
            atType: "Offer",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            price: {
              atType: "PriceDetail",
              base: 20.2,
              currencyCode: {
                codeAuthority: "ISO 4217",
                decimalAuthority: "ISO 4217",
                decimalPlace: 4,
                value: "USD",
              },
              totalFees: 201,
              totalPrice: 34,
              totalTaxes: 34.4,
              vendorCurrencyTotal: {
                base: 120.2,
                currencyCode: {
                  codeAuthority: "ISO 4217",
                  decimalAuthority: "ISO 4217",
                  decimalPlace: 4,
                  value: "USD",
                },
                fees: {
                  atType: "FeesDetail",
                  totalFees: 111.11,
                },
                taxes: {
                  atType: "TaxesDetail",
                  taxInfo: [
                    {
                      amount: 2234.1,
                      currencyCode: {
                        codeAuthority: "ISO 4217",
                        decimalAuthority: "ISO 4217",
                        decimalPlace: 4,
                        value: "USD",
                      },
                      taxBreakdown: [
                        {
                          airportCode: "MIA",
                          currencyCode: {
                            codeAuthority: "ISO 4217",
                            decimalAuthority: "ISO 4217",
                            decimalPlace: 4,
                            value: "USD",
                          },
                        },
                      ],
                      taxCode: "XF",
                    },
                  ],
                  totalTaxes: 330.1,
                },
                total: 30.13,
                approximateInd: true,
              },
              id: "2",
            },
            product: [
              {
                atType: "ProductAir",
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                id: "product_1",
                productRef: "product_1",
              },
            ],
            termsAndConditionsFull: [
              {
                atType: "TermsAndConditionsFullAir",
                customerLoyalty: [
                  {
                    cardHolderName: "John Smith",
                    id: "Loyalty_1",
                    priority: 2,
                    programId: "United",
                    programName: "Mileage Plus",
                    shareWithSupplier: [
                      "L",
                      "H",
                      " ",
                      "N",
                      "H",
                      " ",
                      "S",
                      "Q",
                    ],
                    supplier: "UA",
                    supplierType: "Airline",
                    tier: "Silver",
                    validatedInd: true,
                    value: "132456",
                  },
                ],
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                textBlock: [
                  {
                    atType: "TextBlockDetail",
                    textFormatted: [
                      {
                        language: "English",
                        value: "Formatted text",
                      },
                    ],
                    id: "2",
                    title: "Baggage Details",
                  },
                ],
                id: "TC_1",
                termsAndConditionsRef: "TC_1",
              },
            ],
            id: "offer_1",
            offerRef: "offer_1",
            parentOfferRef: "offer_1",
            passiveOfferInd: true,
          },
        ],
        offerLink: [
          {
            atType: "OfferLink",
            parentOffer: {
              atType: "ParentOffer",
            },
          },
        ],
        organizationLoyaltyProgram: [
          {
            atType: "OrganizationLoyaltyProgramID",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            loyaltyIdentifier: "LP029381",
            supplier: "Air canada",
          },
        ],
        payment: [
          {
            atType: "Payment",
            agencyServiceFeeIdentifier: [
              {},
            ],
            amount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            baseAmount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            extendedPayment: {
              firstInstallment: 100,
              numberOfInstallments: 6,
              remainingAmount: 50,
            },
            fees: {
              atType: "FeesDetail",
              totalFees: 111.11,
            },
            formOfPaymentIdentifier: {
              atType: "FormOfPaymentPaymentCash",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            offerIdentifier: [
              {
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                id: "offer_1",
                offerRef: "offer_1",
              },
            ],
            taxes: {
              atType: "TaxesDetail",
              taxInfo: [
                {
                  amount: 2635.47,
                  currencyCode: {
                    codeAuthority: "ISO 4217",
                    decimalAuthority: "ISO 4217",
                    decimalPlace: 4,
                    value: "USD",
                  },
                  taxBreakdown: [
                    {
                      airportCode: "MIA",
                      currencyCode: {
                        codeAuthority: "ISO 4217",
                        decimalAuthority: "ISO 4217",
                        decimalPlace: 4,
                        value: "USD",
                      },
                    },
                  ],
                  taxCode: "XF",
                },
              ],
              totalTaxes: 330.1,
            },
            travelerIdentifierRef: [
              {
                passengerTypeCode: "ADT",
                uris: [
                  "g",
                  "o",
                  "o",
                  "g",
                  "l",
                  "e",
                  ".",
                  "c",
                  "o",
                  "m",
                ],
              },
            ],
          },
        ],
        preference: {
          atType: "Preference",
          appliesTo: {
            atType: "AppliesToOffer",
          },
          travelerIdentifier: {
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
          },
        },
        primaryContact: [
          {
            atType: "PrimaryContact",
            email: {
              emailType: "Work",
              id: "exampledomain@example.com",
              preferredFormat: "text/html",
              provisionedInd: true,
              validInd: true,
              value: "exampledomain@example.com",
            },
            telephone: {
              atType: "Telephone",
              areaCityCode: "972",
              cityCode: "DEN",
              countryAccessCode: "1",
              extension: "234",
              id: "3",
              phoneNumber: "972-000-787",
              role: EnumTelephoneRole.Mobile,
            },
            travelerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
            contactInformationRefusedInd: true,
            shareWithSupplier: [
              "string",
            ],
          },
        ],
        receipt: [
          {
            atType: "ReceiptConfirmation",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            offerRef: [
              "string",
            ],
            receiptRef: "6773 2389 2239 2832",
            id: "3493289238",
          },
        ],
        reservationComment: [
          {
            atType: "ReservationComment",
            appliesTo: [
              {
                atType: "AppliesToOffer",
              },
            ],
            comment: [
              {
                id: "comment_1",
                language: "EN",
                name: "Comment name",
                value: "Additional comments",
              },
            ],
            shareWithSupplier: [
              "string",
            ],
          },
        ],
        reservationDisplaySequence: {
          displaySequence: [
            {
              offerRef: "string",
              sequence: 1,
              displaySequence: "1",
            },
          ],
        },
        shoppingCart: {
          product: [
            {
              atType: "ProductAir",
              flightSegment: [
                {
                  atType: "FlightSegment",
                  co2Actual: {
                    value: 2.22,
                  },
                  flight: {
                    atType: "FlightDetail",
                    flightRef: "pln0845",
                    identifier: {
                      authority: "TVPT",
                      value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                    },
                    id: "126",
                  },
                  operationalStatus: {
                    value: OperationalStatusENUMBase.FlightBoarding,
                  },
                  boundFlightsInd: true,
                  connectionDuration: "60",
                  id: "2304",
                  sequence: 65,
                },
              ],
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              passengerFlight: [
                {
                  atType: "PassengerFlight",
                  flightProduct: [
                    {
                      atType: "FlightProduct",
                      brand: {
                        atType: "BrandID",
                        identifier: {
                          authority: "TVPT",
                          value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                        },
                      },
                      classOfServiceAvailability: [
                        {
                          number: 2,
                          value: "F",
                        },
                      ],
                      customerLoyaltyCredit: [
                        {
                          atType: "CustomerLoyaltyCredit",
                          customerLoyalty: {
                            cardHolderName: "John Smith",
                            id: "Loyalty_1",
                            priority: 2,
                            programId: "United",
                            programName: "Mileage Plus",
                            shareWithSupplier: [
                              "L",
                              "H",
                              " ",
                              "N",
                              "H",
                              " ",
                              "S",
                              "Q",
                            ],
                            supplier: "UA",
                            supplierType: "Airline",
                            tier: "Silver",
                            validatedInd: true,
                            value: "132456",
                          },
                          earned: "500",
                          status: "gold",
                        },
                      ],
                      fareQualifier: {},
                      cabin: CabinAirEnum.Economy,
                      carCode: "P1234",
                      classOfService: "F",
                      fareBasisCode: "HKG  SU  X/MOW  SU  KGD  598.78",
                      fareTypeCode: "ERU",
                      segmentSequence: [
                        23,
                        45,
                        67,
                        89,
                      ],
                      ticketDesignator: "BB5662Y",
                      valueCode: "365",
                    },
                  ],
                  passengerQuantity: 416,
                  passengerTypeCode: "ADT",
                },
              ],
              quantity: 2,
              id: "product_1",
              productRef: "product_1",
              totalDuration: "3245",
            },
          ],
        },
        specialService: [
          {
            atType: "SpecialService",
            appliesTo: {
              atType: "AppliesToOffer",
            },
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            status: {
              supplierText: "Active/In-active",
            },
            travelerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          },
        ],
        travelAgency: {
          atType: "TravelAgencyDetail",
          corporateCode: "Air Agency",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          organizationName: {
            code: "AI",
            codeContext: "ISO",
            department: "Adventure department",
            division: "Travel Division",
            id: "2",
            shortName: "Aventure Inc",
            systemOfRecord: [
              "[",
              "\"",
              "1",
              "G",
              "\"",
              ",",
              "\"",
              "1",
              "V",
              "\"",
              ",",
              "\"",
              "M",
              "B",
              "\"",
              ",",
              "\"",
              "H",
              "Z",
              "\"",
              "]",
            ],
          },
          profileName: [
            "string",
          ],
          travelOrganizationRef: "TravelAgency_1",
          id: "2",
        },
        traveler: [
          {
            atType: "TravelerDetail",
            address: [
              {
                atType: "AddressDetail",
                addressLine: [
                  "S",
                  " ",
                  "H",
                  "a",
                  "v",
                  "a",
                  "n",
                  "a",
                  ",",
                  "O",
                  "p",
                  "p",
                  "o",
                  "s",
                  "i",
                  "t",
                  "e",
                  " ",
                  "t",
                  "o",
                  " ",
                  "U",
                  "S",
                  "P",
                  "S",
                ],
                bldgRoom: {
                  buldingInd: true,
                  value: "Moore House, Room 101, 23 ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                },
                city: "Windsor",
                country: {
                  codeContext: "IATA",
                  id: "23",
                  name: "United States",
                  value: "USA",
                },
                county: "Berkshire",
                number: {
                  poBox: "1001",
                  ruralRouteNmbr: "76",
                  streetDirection: "NW",
                  streetNmbrSuffix: "B",
                  value: "23B ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                },
                postalCode: "Sl6 1AB",
                stateProv: {
                  name: "California",
                  value: "CA",
                },
                street: "ABC Street",
                id: "Address_1",
                role: EnumAddressRole.Delivery,
              },
            ],
            alternateContact: [
              {
                atType: "AlternateContact",
                address: [
                  {
                    atType: "AddressDetail",
                    addressLine: [
                      "S",
                      " ",
                      "H",
                      "a",
                      "v",
                      "a",
                      "n",
                      "a",
                      ",",
                      "O",
                      "p",
                      "p",
                      "o",
                      "s",
                      "i",
                      "t",
                      "e",
                      " ",
                      "t",
                      "o",
                      " ",
                      "U",
                      "S",
                      "P",
                      "S",
                    ],
                    bldgRoom: {
                      buldingInd: true,
                      value: "Moore House, Room 101, 23 ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                    },
                    city: "Windsor",
                    country: {
                      codeContext: "IATA",
                      id: "23",
                      name: "United States",
                      value: "USA",
                    },
                    county: "Berkshire",
                    number: {
                      poBox: "1001",
                      ruralRouteNmbr: "76",
                      streetDirection: "NW",
                      streetNmbrSuffix: "B",
                      value: "23B ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                    },
                    postalCode: "Sl6 1AB",
                    stateProv: {
                      name: "California",
                      value: "CA",
                    },
                    street: "ABC Street",
                    id: "Address_1",
                    role: EnumAddressRole.Delivery,
                  },
                ],
                email: [
                  {
                    emailType: "Work",
                    id: "exampledomain@example.com",
                    preferredFormat: "text/html",
                    provisionedInd: true,
                    validInd: true,
                    value: "exampledomain@example.com",
                  },
                ],
                personName: {
                  atType: "PersonNameDetail",
                  given: "John",
                  middle: "Erick",
                  prefix: "Mr",
                  surname: "Smith",
                },
                telephone: [
                  {
                    atType: "Telephone",
                    areaCityCode: "972",
                    cityCode: "DEN",
                    countryAccessCode: "1",
                    extension: "234",
                    id: "3",
                    phoneNumber: "972-000-787",
                    role: EnumTelephoneRole.Mobile,
                  },
                ],
                contactType: "Relative",
                defaultInd: true,
                emergencyInd: true,
                relation: "Mother",
              },
            ],
            comments: {
              comment: [
                {
                  id: "comment_1",
                  language: "EN",
                  name: "Comment name",
                  value: "Additional comments",
                },
                {
                  id: "comment_1",
                  language: "EN",
                  name: "Comment name",
                  value: "Additional comments",
                },
              ],
            },
            customerLoyalty: [
              {
                cardHolderName: "John Smith",
                id: "Loyalty_1",
                priority: 2,
                programId: "United",
                programName: "Mileage Plus",
                shareWithSupplier: [
                  "L",
                  "H",
                  " ",
                  "N",
                  "H",
                  " ",
                  "S",
                  "Q",
                ],
                supplier: "UA",
                supplierType: "Airline",
                tier: "Silver",
                validatedInd: true,
                value: "132456",
              },
            ],
            email: [
              {
                emailType: "Work",
                id: "exampledomain@example.com",
                preferredFormat: "text/html",
                provisionedInd: true,
                validInd: true,
                value: "exampledomain@example.com",
              },
            ],
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            personName: {
              atType: "PersonNameDetail",
              given: "John",
              middle: "Erick",
              prefix: "Mr",
              surname: "Smith",
            },
            railDiscountCard: [
              {
                referenceNumber: "134256",
                supplierCode: "Enco",
                value: "20 Perecnt",
              },
            ],
            telephone: [
              {
                atType: "Telephone",
                areaCityCode: "972",
                cityCode: "DEN",
                countryAccessCode: "1",
                extension: "234",
                id: "3",
                phoneNumber: "972-000-787",
                role: EnumTelephoneRole.Mobile,
              },
            ],
            travelDocument: [
              {
                atType: "TravelDocumentDetail",
                gender: GenderEnum.Undisclosed,
                nationality: "BR",
                personName: {
                  atType: "PersonNameDetail",
                  given: "John",
                  middle: "Erick",
                  prefix: "Mr",
                  surname: "Smith",
                },
                birthCountry: "AR",
                birthDate: new RFCDate("1995-04-22"),
                birthPlace: "Ontario",
                docNumber: "B37201",
                docType: DocTypeCodeEnum.Passport,
                expireDate: new RFCDate("2002-11-13"),
                id: "34",
                issueCountry: "CA",
                issueDate: new RFCDate("2002-10-13"),
                placeOfIssue: "Birmingham",
                residence: "1st section 8th st",
                stateProvCode: "44",
              },
            ],
            accompaniedByInfantInd: true,
            birthDate: new RFCDate("2021-06-05"),
            nationality: "AL",
            passengerTypeCode: "CHD",
          },
        ],
        travelerProduct: [
          {
            atType: "TravelerProduct",
          },
        ],
        id: "REF12873",
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.CreateHotelReservationRequest](../../models/operations/createhotelreservationrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.CreateHotelReservationResponse](../../models/operations/createhotelreservationresponse.md)>**


## retrieveHotelReservation

Retrieve details about a held booking, or PNR. While a PNR refers to a held booking that has not been ticketed, the PNR code persists after ticketing to provide the booking records. Once a PNR has been ticketed, you can still use PNR Retrieve to return both booking and ticketing details. A Ticket Display request can also be used to retrieve any ticketed itinerary.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import { IdentifierTypeENUM } from "akaris-backend/dist/sdk/models/shared";

(async() => {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "",
    },
  });

  const res = await sdk.reservationHotel.retrieveHotelReservation({
    identifier: "string",
    identifierType: IdentifierTypeENUM.Locator,
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.RetrieveHotelReservationRequest](../../models/operations/retrievehotelreservationrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.RetrieveHotelReservationResponse](../../models/operations/retrievehotelreservationresponse.md)>**


## updateHotelReservation

The Modify Reservation request can modify an existing reservation by changing any of the following - dates, payment information, traveler first and/or last name. You can also add comments to an existing reservation. Hotel Modify can be used only for Travelport itineraries at this time. When changing dates Travelport recommends that you first send an availability request for the new dates and look for the same booking code that is on the existing reservation. An availability request is not mandatory, but a modify request will fail if the new dates are not available.

### Example Usage

```typescript
import { AkarisBackend } from "akaris-backend";
import {
  AvailabilityStatusEnum,
  CabinAirEnum,
  ChangeFeeMethodEnumBase,
  CommentSourceEnum,
  CommissionApplyEnum,
  CommissionEnum,
  ConfirmationStatusEnum,
  CurrencySourceEnum,
  DestinationEnum,
  DocTypeCodeEnum,
  DocumentTypeEnum,
  EnumAddressRole,
  EnumTelephoneRole,
  FareQualifierENUMBase,
  FareTypeEnum,
  GenderEnum,
  MeasurementTypeEnum,
  OperationalStatusENUMBase,
  OptInStatusEnum,
  OrganizationTypeEnum,
  PurposeEnum,
  ShareWithEnum,
  TextFormatEnum,
  TourCodeTypeEnum,
  UnitOfMeasureEnum,
  YesNoInheritEnum,
  YesNoUnknownEnum,
} from "akaris-backend/dist/sdk/models/shared";
import { RFCDate } from "akaris-backend/dist/sdk/types";

(async() => {
  const sdk = new AkarisBackend({
    security: {
      oAuth2: "",
    },
  });

  const res = await sdk.reservationHotel.updateHotelReservation({
    identifier: "string",
    reservationDetailWrapper: {
      reservationDetail: {
        atType: "Reservation",
        accounting: {
          atType: "Accounting",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          nameValuePair: [
            {
              id: "6",
              name: "Day1",
              value: "Sunday",
            },
          ],
          dataType: "DateTime",
          template: "Internal Finance template",
        },
        agencyServiceFee: [
          {
            atType: "AgencyServiceFee",
            amount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            description: "Flight reservation service fee",
            relatedDocumentNumber: {
              documentIssuer: "BA",
              documentType: DocumentTypeEnum.Ticket,
              value: "1259900123456",
            },
            tax: [
              {
                codeAuthority: "ISO",
                currencyCode: "USD",
                decimalAuthority: "ISO",
                decimalPlace: 2,
                description: "Additional details.",
                exemptInd: true,
                purpose: "Fuel",
                reportingAuthority: "JFK1",
                taxCode: "7702",
                value: 12.2,
              },
            ],
            id: "AgencyServiceFee_1",
          },
        ],
        documentOverrides: [
          {
            atType: "DocumentOverrides",
            changeFeeCollectionMethod: {
              changeFeeIssuedSeparatelyInd: true,
              code: "f2142",
              description: "Change fee collection method",
              subCode: "631b",
              taxIncludedInBaseAmountInd: true,
              value: {
                value: ChangeFeeMethodEnumBase.Emd,
              },
            },
            commissions: [
              {
                applyTo: CommissionApplyEnum.Base,
                commission: {
                  atType: "Commission",
                },
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            destinationPurpose: [
              {
                atType: "DestinationPurpose",
                destination: DestinationEnum.Asia,
                purpose: PurposeEnum.Business,
              },
            ],
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            netRemitInfo: {
              atType: "NetRemitInfo",
              actualSellingFare: 100.5,
              carCode: "ACAR",
              netBaseAmount: {
                codeAuthority: "Australian Dollar",
                currencyCode: "USD",
                decimalAuthority: "ISO 4217",
                decimalPlace: 3,
                value: 43.3422,
              },
              valueCode: "D1000",
            },
            offerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "offer_1",
              offerRef: "offer_1",
            },
            productIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              id: "product_1",
              productRef: "product_1",
            },
            restrictions: [
              {
                documentType: DocumentTypeEnum.Ticket,
                restriction: [
                  "string",
                ],
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            ticketDesignators: [
              {
                atType: "string",
                ticketDesignator: "string",
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
            tourCodes: [
              {
                atType: "TourCodes",
                tourCode: {},
                travelerIdentifierRef: [
                  {
                    passengerTypeCode: "ADT",
                    uris: [
                      "g",
                      "o",
                      "o",
                      "g",
                      "l",
                      "e",
                      ".",
                      "c",
                      "o",
                      "m",
                    ],
                  },
                ],
              },
            ],
          },
        ],
        formOfPayment: [
          {
            atType: "FormOfPaymentPaymentCard",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
          },
        ],
        identifier: {
          authority: "TVPT",
          value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
        },
        offer: [
          {
            atType: "Offer",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            price: {
              atType: "PriceDetail",
              base: 20.2,
              currencyCode: {
                codeAuthority: "ISO 4217",
                decimalAuthority: "ISO 4217",
                decimalPlace: 4,
                value: "USD",
              },
              totalFees: 201,
              totalPrice: 34,
              totalTaxes: 34.4,
              vendorCurrencyTotal: {
                base: 120.2,
                currencyCode: {
                  codeAuthority: "ISO 4217",
                  decimalAuthority: "ISO 4217",
                  decimalPlace: 4,
                  value: "USD",
                },
                fees: {
                  atType: "FeesDetail",
                  totalFees: 111.11,
                },
                taxes: {
                  atType: "TaxesDetail",
                  taxInfo: [
                    {
                      amount: 7022.39,
                      currencyCode: {
                        codeAuthority: "ISO 4217",
                        decimalAuthority: "ISO 4217",
                        decimalPlace: 4,
                        value: "USD",
                      },
                      taxBreakdown: [
                        {
                          airportCode: "MIA",
                          currencyCode: {
                            codeAuthority: "ISO 4217",
                            decimalAuthority: "ISO 4217",
                            decimalPlace: 4,
                            value: "USD",
                          },
                        },
                      ],
                      taxCode: "XF",
                    },
                  ],
                  totalTaxes: 330.1,
                },
                total: 30.13,
                approximateInd: true,
              },
              id: "2",
            },
            product: [
              {
                atType: "ProductAir",
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                id: "product_1",
                productRef: "product_1",
              },
            ],
            termsAndConditionsFull: [
              {
                atType: "TermsAndConditionsFullAir",
                customerLoyalty: [
                  {
                    cardHolderName: "John Smith",
                    id: "Loyalty_1",
                    priority: 2,
                    programId: "United",
                    programName: "Mileage Plus",
                    shareWithSupplier: [
                      "L",
                      "H",
                      " ",
                      "N",
                      "H",
                      " ",
                      "S",
                      "Q",
                    ],
                    supplier: "UA",
                    supplierType: "Airline",
                    tier: "Silver",
                    validatedInd: true,
                    value: "132456",
                  },
                ],
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                textBlock: [
                  {
                    atType: "TextBlockDetail",
                    textFormatted: [
                      {
                        language: "English",
                        value: "Formatted text",
                      },
                    ],
                    id: "2",
                    title: "Baggage Details",
                  },
                ],
                id: "TC_1",
                termsAndConditionsRef: "TC_1",
              },
            ],
            id: "offer_1",
            offerRef: "offer_1",
            parentOfferRef: "offer_1",
            passiveOfferInd: true,
          },
        ],
        offerLink: [
          {
            atType: "OfferLink",
            parentOffer: {
              atType: "ParentOffer",
            },
          },
        ],
        organizationLoyaltyProgram: [
          {
            atType: "OrganizationLoyaltyProgramID",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            loyaltyIdentifier: "LP029381",
            supplier: "Air canada",
          },
        ],
        payment: [
          {
            atType: "Payment",
            agencyServiceFeeIdentifier: [
              {},
            ],
            amount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            baseAmount: {
              approximateInd: true,
              code: "USD",
              minorUnit: 2,
              value: 124.56,
            },
            extendedPayment: {
              firstInstallment: 100,
              numberOfInstallments: 6,
              remainingAmount: 50,
            },
            fees: {
              atType: "FeesDetail",
              totalFees: 111.11,
            },
            formOfPaymentIdentifier: {
              atType: "FormOfPaymentPaymentCash",
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            offerIdentifier: [
              {
                identifier: {
                  authority: "TVPT",
                  value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                },
                id: "offer_1",
                offerRef: "offer_1",
              },
            ],
            taxes: {
              atType: "TaxesDetail",
              taxInfo: [
                {
                  amount: 5625.77,
                  currencyCode: {
                    codeAuthority: "ISO 4217",
                    decimalAuthority: "ISO 4217",
                    decimalPlace: 4,
                    value: "USD",
                  },
                  taxBreakdown: [
                    {
                      airportCode: "MIA",
                      currencyCode: {
                        codeAuthority: "ISO 4217",
                        decimalAuthority: "ISO 4217",
                        decimalPlace: 4,
                        value: "USD",
                      },
                    },
                  ],
                  taxCode: "XF",
                },
              ],
              totalTaxes: 330.1,
            },
            travelerIdentifierRef: [
              {
                passengerTypeCode: "ADT",
                uris: [
                  "g",
                  "o",
                  "o",
                  "g",
                  "l",
                  "e",
                  ".",
                  "c",
                  "o",
                  "m",
                ],
              },
            ],
          },
        ],
        preference: {
          atType: "Preference",
          appliesTo: {
            atType: "AppliesToOffer",
          },
          travelerIdentifier: {
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
          },
        },
        primaryContact: [
          {
            atType: "PrimaryContact",
            email: {
              emailType: "Work",
              id: "exampledomain@example.com",
              preferredFormat: "text/html",
              provisionedInd: true,
              validInd: true,
              value: "exampledomain@example.com",
            },
            telephone: {
              atType: "Telephone",
              areaCityCode: "972",
              cityCode: "DEN",
              countryAccessCode: "1",
              extension: "234",
              id: "3",
              phoneNumber: "972-000-787",
              role: EnumTelephoneRole.Mobile,
            },
            travelerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
            contactInformationRefusedInd: true,
            shareWithSupplier: [
              "string",
            ],
          },
        ],
        receipt: [
          {
            atType: "ReceiptConfirmation",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            offerRef: [
              "string",
            ],
            receiptRef: "6773 2389 2239 2832",
            id: "3493289238",
          },
        ],
        reservationComment: [
          {
            atType: "ReservationComment",
            appliesTo: [
              {
                atType: "AppliesToOffer",
              },
            ],
            comment: [
              {
                id: "comment_1",
                language: "EN",
                name: "Comment name",
                value: "Additional comments",
              },
            ],
            shareWithSupplier: [
              "string",
            ],
          },
        ],
        reservationDisplaySequence: {
          displaySequence: [
            {
              offerRef: "string",
              sequence: 1,
              displaySequence: "1",
            },
          ],
        },
        shoppingCart: {
          product: [
            {
              atType: "ProductAir",
              flightSegment: [
                {
                  atType: "FlightSegment",
                  co2Actual: {
                    value: 2.22,
                  },
                  flight: {
                    atType: "FlightDetail",
                    flightRef: "pln0845",
                    identifier: {
                      authority: "TVPT",
                      value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                    },
                    id: "126",
                  },
                  operationalStatus: {
                    value: OperationalStatusENUMBase.FlightBoarding,
                  },
                  boundFlightsInd: true,
                  connectionDuration: "60",
                  id: "2304",
                  sequence: 65,
                },
              ],
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
              passengerFlight: [
                {
                  atType: "PassengerFlight",
                  flightProduct: [
                    {
                      atType: "FlightProduct",
                      brand: {
                        atType: "BrandID",
                        identifier: {
                          authority: "TVPT",
                          value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                        },
                      },
                      classOfServiceAvailability: [
                        {
                          number: 2,
                          value: "F",
                        },
                      ],
                      customerLoyaltyCredit: [
                        {
                          atType: "CustomerLoyaltyCredit",
                          customerLoyalty: {
                            cardHolderName: "John Smith",
                            id: "Loyalty_1",
                            priority: 2,
                            programId: "United",
                            programName: "Mileage Plus",
                            shareWithSupplier: [
                              "L",
                              "H",
                              " ",
                              "N",
                              "H",
                              " ",
                              "S",
                              "Q",
                            ],
                            supplier: "UA",
                            supplierType: "Airline",
                            tier: "Silver",
                            validatedInd: true,
                            value: "132456",
                          },
                          earned: "500",
                          status: "gold",
                        },
                      ],
                      fareQualifier: {},
                      cabin: CabinAirEnum.Economy,
                      carCode: "P1234",
                      classOfService: "F",
                      fareBasisCode: "HKG  SU  X/MOW  SU  KGD  598.78",
                      fareTypeCode: "ERU",
                      segmentSequence: [
                        23,
                        45,
                        67,
                        89,
                      ],
                      ticketDesignator: "BB5662Y",
                      valueCode: "365",
                    },
                  ],
                  passengerQuantity: 416,
                  passengerTypeCode: "ADT",
                },
              ],
              quantity: 2,
              id: "product_1",
              productRef: "product_1",
              totalDuration: "3245",
            },
          ],
        },
        specialService: [
          {
            atType: "SpecialService",
            appliesTo: {
              atType: "AppliesToOffer",
            },
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            status: {
              supplierText: "Active/In-active",
            },
            travelerIdentifier: {
              identifier: {
                authority: "TVPT",
                value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
              },
            },
          },
        ],
        travelAgency: {
          atType: "TravelAgencyDetail",
          corporateCode: "Air Agency",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          organizationName: {
            code: "AI",
            codeContext: "ISO",
            department: "Adventure department",
            division: "Travel Division",
            id: "2",
            shortName: "Aventure Inc",
            systemOfRecord: [
              "[",
              "\"",
              "1",
              "G",
              "\"",
              ",",
              "\"",
              "1",
              "V",
              "\"",
              ",",
              "\"",
              "M",
              "B",
              "\"",
              ",",
              "\"",
              "H",
              "Z",
              "\"",
              "]",
            ],
          },
          profileName: [
            "string",
          ],
          travelOrganizationRef: "TravelAgency_1",
          id: "2",
        },
        traveler: [
          {
            atType: "TravelerDetail",
            address: [
              {
                atType: "AddressDetail",
                addressLine: [
                  "S",
                  " ",
                  "H",
                  "a",
                  "v",
                  "a",
                  "n",
                  "a",
                  ",",
                  "O",
                  "p",
                  "p",
                  "o",
                  "s",
                  "i",
                  "t",
                  "e",
                  " ",
                  "t",
                  "o",
                  " ",
                  "U",
                  "S",
                  "P",
                  "S",
                ],
                bldgRoom: {
                  buldingInd: true,
                  value: "Moore House, Room 101, 23 ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                },
                city: "Windsor",
                country: {
                  codeContext: "IATA",
                  id: "23",
                  name: "United States",
                  value: "USA",
                },
                county: "Berkshire",
                number: {
                  poBox: "1001",
                  ruralRouteNmbr: "76",
                  streetDirection: "NW",
                  streetNmbrSuffix: "B",
                  value: "23B ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                },
                postalCode: "Sl6 1AB",
                stateProv: {
                  name: "California",
                  value: "CA",
                },
                street: "ABC Street",
                id: "Address_1",
                role: EnumAddressRole.Delivery,
              },
            ],
            alternateContact: [
              {
                atType: "AlternateContact",
                address: [
                  {
                    atType: "AddressDetail",
                    addressLine: [
                      "S",
                      " ",
                      "H",
                      "a",
                      "v",
                      "a",
                      "n",
                      "a",
                      ",",
                      "O",
                      "p",
                      "p",
                      "o",
                      "s",
                      "i",
                      "t",
                      "e",
                      " ",
                      "t",
                      "o",
                      " ",
                      "U",
                      "S",
                      "P",
                      "S",
                    ],
                    bldgRoom: {
                      buldingInd: true,
                      value: "Moore House, Room 101, 23 ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                    },
                    city: "Windsor",
                    country: {
                      codeContext: "IATA",
                      id: "23",
                      name: "United States",
                      value: "USA",
                    },
                    county: "Berkshire",
                    number: {
                      poBox: "1001",
                      ruralRouteNmbr: "76",
                      streetDirection: "NW",
                      streetNmbrSuffix: "B",
                      value: "23B ABC Street, Windsor, Berkshire, United Kingdom, SL6 51A",
                    },
                    postalCode: "Sl6 1AB",
                    stateProv: {
                      name: "California",
                      value: "CA",
                    },
                    street: "ABC Street",
                    id: "Address_1",
                    role: EnumAddressRole.Delivery,
                  },
                ],
                email: [
                  {
                    emailType: "Work",
                    id: "exampledomain@example.com",
                    preferredFormat: "text/html",
                    provisionedInd: true,
                    validInd: true,
                    value: "exampledomain@example.com",
                  },
                ],
                personName: {
                  atType: "PersonNameDetail",
                  given: "John",
                  middle: "Erick",
                  prefix: "Mr",
                  surname: "Smith",
                },
                telephone: [
                  {
                    atType: "Telephone",
                    areaCityCode: "972",
                    cityCode: "DEN",
                    countryAccessCode: "1",
                    extension: "234",
                    id: "3",
                    phoneNumber: "972-000-787",
                    role: EnumTelephoneRole.Mobile,
                  },
                ],
                contactType: "Relative",
                defaultInd: true,
                emergencyInd: true,
                relation: "Mother",
              },
            ],
            comments: {
              comment: [
                {
                  id: "comment_1",
                  language: "EN",
                  name: "Comment name",
                  value: "Additional comments",
                },
                {
                  id: "comment_1",
                  language: "EN",
                  name: "Comment name",
                  value: "Additional comments",
                },
              ],
            },
            customerLoyalty: [
              {
                cardHolderName: "John Smith",
                id: "Loyalty_1",
                priority: 2,
                programId: "United",
                programName: "Mileage Plus",
                shareWithSupplier: [
                  "L",
                  "H",
                  " ",
                  "N",
                  "H",
                  " ",
                  "S",
                  "Q",
                ],
                supplier: "UA",
                supplierType: "Airline",
                tier: "Silver",
                validatedInd: true,
                value: "132456",
              },
            ],
            email: [
              {
                emailType: "Work",
                id: "exampledomain@example.com",
                preferredFormat: "text/html",
                provisionedInd: true,
                validInd: true,
                value: "exampledomain@example.com",
              },
            ],
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            personName: {
              atType: "PersonNameDetail",
              given: "John",
              middle: "Erick",
              prefix: "Mr",
              surname: "Smith",
            },
            railDiscountCard: [
              {
                referenceNumber: "134256",
                supplierCode: "Enco",
                value: "20 Perecnt",
              },
            ],
            telephone: [
              {
                atType: "Telephone",
                areaCityCode: "972",
                cityCode: "DEN",
                countryAccessCode: "1",
                extension: "234",
                id: "3",
                phoneNumber: "972-000-787",
                role: EnumTelephoneRole.Mobile,
              },
            ],
            travelDocument: [
              {
                atType: "TravelDocumentDetail",
                gender: GenderEnum.Unknown,
                nationality: "BR",
                personName: {
                  atType: "PersonNameDetail",
                  given: "John",
                  middle: "Erick",
                  prefix: "Mr",
                  surname: "Smith",
                },
                birthCountry: "AR",
                birthDate: new RFCDate("1995-04-22"),
                birthPlace: "Ontario",
                docNumber: "B37201",
                docType: DocTypeCodeEnum.Passport,
                expireDate: new RFCDate("2002-11-13"),
                id: "34",
                issueCountry: "CA",
                issueDate: new RFCDate("2002-10-13"),
                placeOfIssue: "Birmingham",
                residence: "1st section 8th st",
                stateProvCode: "44",
              },
            ],
            accompaniedByInfantInd: true,
            birthDate: new RFCDate("2021-06-05"),
            nationality: "AL",
            passengerTypeCode: "CHD",
          },
        ],
        travelerProduct: [
          {
            atType: "TravelerProduct",
          },
        ],
        id: "REF12873",
      },
    },
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateHotelReservationRequest](../../models/operations/updatehotelreservationrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateHotelReservationResponse](../../models/operations/updatehotelreservationresponse.md)>**

