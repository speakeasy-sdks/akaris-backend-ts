# ReservationHotel
(*reservationHotel*)

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
import { BuildHotelReservationResponse } from "akaris-backend/dist/sdk/models/operations";
import { OrganizationTypeEnum } from "akaris-backend/dist/sdk/models/shared";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.reservationHotel.buildHotelReservation({
  reservationQueryBuildWrapper: {
    reservationQueryBuild: {
      atType: "Northwest",
      reservationBuild: {
        atType: "ReservationBuildFromCatalogOfferings",
        accounting: {
          atType: "Accounting",
          accountingRef: "behalf male",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          id: "<ID>",
        },
        documentOverrides: [
          {
            atType: "DocumentOverrides",
            documentOverridesRef: "hideous which",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "<ID>",
          },
        ],
        formOfPayment: [
          {
            atType: "FormOfPaymentPaymentCard",
            formOfPaymentRef: "Gender",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "<ID>",
          },
        ],
        payment: [
          {
            atType: "Payment",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            paymentRef: "Usability Copper digital",
            id: "<ID>",
          },
        ],
        preference: [
          {
            atType: "Preference",
            id: "<ID>",
          },
        ],
        primaryContact: [
          {
            atType: "PrimaryContact",
            id: "<ID>",
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
            "Paradigm",
          ],
          productRef: "monetize",
          receiptRef: "6773 2389 2239 2832",
          segmentSequenceList: [
            759187,
          ],
          dateTime: new Date("2021-06-18T16:01:27.959Z"),
          id: "3493289238",
        },
        reservationComment: [
          {
            atType: "ReservationComment",
            id: "<ID>",
          },
        ],
        specialService: [
          {
            atType: "SpecialService",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "<ID>",
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
              "[\"1G\",\"1V\",\"MB\",\"HZ\"]",
            ],
            value: "flip",
          },
          profileName: [
            "Cotton",
          ],
          travelOrganizationRef: "TravelAgency_1",
          id: "2",
          organizationType: OrganizationTypeEnum.IdDocumentIssuer,
        },
        traveler: [
          {
            atType: "TravelerDetail",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            travelerRef: "aboard",
            id: "<ID>",
          },
        ],
      },
    },
  },
  traceId: "South navigate",
  xauthTravelportAccessgroup: "facilis Account",
}).then((res: BuildHotelReservationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CancelHotelOfferResponse } from "akaris-backend/dist/sdk/models/operations";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.reservationHotel.cancelHotelOffer({
  traceId: "mature",
  xauthTravelportAccessgroup: "Country male",
  offerID: "deposit virtual",
  reservationIdentifier: "JBOD",
  supplierLocator: "Southwest",
}).then((res: CancelHotelOfferResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { CreateHotelReservationResponse } from "akaris-backend/dist/sdk/models/operations";
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

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.reservationHotel.createHotelReservation({
  reservationDetailWrapper: {
    reservationDetail: {
      atType: "Reservation",
      accounting: {
        atType: "Accounting",
        accountingRef: "Gorgeous",
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
        id: "<ID>",
        template: "Internal Finance template",
      },
      agencyServiceFee: [
        {
          atType: "AgencyServiceFee",
          amount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Requested,
            minorUnit: 2,
            value: 124.56,
          },
          description: "Flight reservation service fee",
          expiryDate: new Date("2021-04-23T03:29:10.557Z"),
          offerRef: "Rubber orange",
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
              includedInBase: YesNoUnknownEnum.Unknown,
              purpose: "Fuel",
              reportingAuthority: "JFK1",
              taxCode: "7702",
              value: 12.2,
            },
          ],
          travelerRef: "Cadillac not Courts",
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
              atType: "Mazda Car",
              applyTo: CommissionApplyEnum.Base,
              commission: {
                atType: "Commission",
                application: CommissionEnum.Full,
              },
              travelerIdentifierRef: [
                {
                  description: "Sharable 5th generation website",
                  id: "<ID>",
                  name: "Tactics Ann",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "besides",
                },
              ],
            },
          ],
          destinationPurpose: [
            {
              atType: "DestinationPurpose",
              destination: DestinationEnum.MiddleEastWesternAsia,
              purpose: PurposeEnum.Business,
            },
          ],
          documentOverridesRef: "generate",
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
              atType: "Corporate withdrawal Oshkosh",
              documentType: DocumentTypeEnum.Ticket,
              restriction: [
                "solidly",
              ],
              travelerIdentifierRef: [
                {
                  description: "Enhanced national access",
                  id: "<ID>",
                  name: "deposit",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Awesome Volkswagen",
                },
              ],
            },
          ],
          ticketDesignators: [
            {
              atType: "Intuitive",
              ticketDesignator: "program carefully cyan",
              travelerIdentifierRef: [
                {
                  description: "Total 3rd generation portal",
                  id: "<ID>",
                  name: "online",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Checking",
                },
              ],
            },
          ],
          tourCodes: [
            {
              atType: "TourCodes",
              tourCode: {
                tourCodeType: TourCodeTypeEnum.InclusiveTour,
                value: "till Tennessee parsing",
              },
              travelerIdentifierRef: [
                {
                  description: "Streamlined secondary ability",
                  id: "<ID>",
                  name: "emulation Dynamic",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Southeast Hattiesburg Ball",
                },
              ],
            },
          ],
          id: "<ID>",
        },
      ],
      formOfPayment: [
        {
          atType: "FormOfPaymentPaymentCard",
          formOfPaymentRef: "bypass Accounts Latin",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          id: "<ID>",
        },
      ],
      groupName: "payment",
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
              atType: "Fresh Indiana THX",
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
                    amount: 7021.35,
                    currencyCode: {
                      codeAuthority: "ISO 4217",
                      decimalAuthority: "ISO 4217",
                      decimalPlace: 4,
                      value: "USD",
                    },
                    taxBreakdown: [
                      {
                        airportCode: "MIA",
                        amount: 5274.96,
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
              currencySource: CurrencySourceEnum.Charged,
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
                    "LH NH SQ",
                  ],
                  supplier: "UA",
                  supplierType: "Airline",
                  tier: "Silver",
                  validatedInd: true,
                  value: "132456",
                },
              ],
              expiryDate: new Date("2023-08-19T02:31:42.966Z"),
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
                      textFormat: TextFormatEnum.PlainText,
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
          offerRef: "Loaf Sausages",
          parentOffer: {
            atType: "ParentOffer",
            offerRef: "Ohio",
            productRef: "4th",
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
          id: "<ID>",
        },
      ],
      payment: [
        {
          atType: "Payment",
          agencyServiceFeeIdentifier: [
            {
              id: "<ID>",
            },
          ],
          amount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Requested,
            minorUnit: 2,
            value: 124.56,
          },
          baseAmount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Requested,
            minorUnit: 2,
            value: 124.56,
          },
          extendedPayment: {
            firstInstallment: 100,
            numberOfInstallments: 6,
            otatoCode: "Borders",
            remainingAmount: 50,
          },
          fees: {
            atType: "FeesDetail",
            totalFees: 111.11,
          },
          formOfPaymentIdentifier: {
            atType: "FormOfPaymentPaymentCash",
            formOfPaymentRef: "Dynamic Salad Coupe",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "<ID>",
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
          paymentRef: "Soap",
          taxes: {
            atType: "TaxesDetail",
            taxInfo: [
              {
                amount: 8668.43,
                currencyCode: {
                  codeAuthority: "ISO 4217",
                  decimalAuthority: "ISO 4217",
                  decimalPlace: 4,
                  value: "USD",
                },
                taxBreakdown: [
                  {
                    airportCode: "MIA",
                    amount: 5376.38,
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
              description: "Profit-focused empowering secured line",
              id: "<ID>",
              name: "yogurt",
              passengerTypeCode: "ADT",
              uris: [
                "google.com",
              ],
              value: "after withdrawal",
            },
          ],
          depositInd: false,
          guaranteeInd: false,
          id: "<ID>",
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
          travelerRef: "USB",
          id: "<ID>",
        },
        id: "<ID>",
      },
      primaryContact: [
        {
          atType: "PrimaryContact",
          email: {
            comment: "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
            emailType: "Work",
            id: "exampledomain@example.com",
            optInDate: new Date("2023-01-07T21:36:36.012Z"),
            optInStatus: OptInStatusEnum.OptedOut,
            optOutDate: new Date("2023-04-15T22:08:57.944Z"),
            optOutInd: YesNoInheritEnum.No,
            preferredFormat: "text/html",
            provisionedInd: true,
            shareMarketing: YesNoInheritEnum.No,
            shareSync: YesNoInheritEnum.No,
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
            travelerRef: "drat Refined",
            id: "<ID>",
          },
          contactInformationRefusedInd: true,
          id: "<ID>",
          shareWith: ShareWithEnum.Supplier,
          shareWithSupplier: [
            "Kentucky",
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
            "systems",
          ],
          productRef: "South copy Hilpert",
          receiptRef: "6773 2389 2239 2832",
          dateTime: new Date("2022-01-30T08:20:32.032Z"),
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
          commentSource: CommentSourceEnum.Supplier,
          id: "<ID>",
          shareWith: ShareWithEnum.Agency,
          shareWithSupplier: [
            "Islands",
          ],
        },
      ],
      reservationDisplaySequence: {
        atType: "Multigender in",
        displaySequence: [
          {
            atType: "copy",
            offerRef: "Tasty",
            productRef: "online Crew",
            sequence: 1,
            displaySequence: "1",
          },
        ],
        autoDeleteDateSequence: 53061,
      },
      shoppingCart: {
        atType: "Product Krone",
        product: [
          {
            atType: "ProductAir",
            flightSegment: [
              {
                atType: "FlightSegment",
                co2Actual: {
                  measurementType: MeasurementTypeEnum.Depth,
                  unit: UnitOfMeasureEnum.Gallons,
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
                      brandRef: "whoa SUV",
                      identifier: {
                        authority: "TVPT",
                        value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                      },
                      id: "<ID>",
                    },
                    classOfServiceAvailability: [
                      {
                        number: 2,
                        status: AvailabilityStatusEnum.RemoveCloseOnly,
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
                            "LH NH SQ",
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
                    fareQualifier: {
                      value: FareQualifierENUMBase.VistFriendsAndRelatives,
                    },
                    cabin: CabinAirEnum.Economy,
                    carCode: "P1234",
                    classOfService: "F",
                    fareBasisCode: "HKG  SU  X/MOW  SU  KGD  598.78",
                    fareType: FareTypeEnum.AirlinePrivateFare,
                    fareTypeCode: "ERU",
                    segmentSequence: [
                      939621,
                    ],
                    stopoverPriced: YesNoUnknownEnum.No,
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
          serviceAnimalType: "Beauty male",
          status: {
            supplierText: "Active/In-active",
            value: ConfirmationStatusEnum.Confirmed,
          },
          travelerIdentifier: {
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            travelerRef: "yowza Lubowitz",
            id: "<ID>",
          },
          id: "<ID>",
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
            "[\"1G\",\"1V\",\"MB\",\"HZ\"]",
          ],
          value: "monitoring",
        },
        profileName: [
          "Markets",
        ],
        travelOrganizationRef: "TravelAgency_1",
        id: "2",
        organizationType: OrganizationTypeEnum.Regulatory,
      },
      traveler: [
        {
          atType: "TravelerDetail",
          address: [
            {
              atType: "AddressDetail",
              addressLine: [
                "emigrate",
              ],
              addressee: "Consultant Account Frozen",
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
                    "blue",
                  ],
                  addressee: "reciprocal",
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
                  comment: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
                  emailType: "Work",
                  id: "exampledomain@example.com",
                  optInDate: new Date("2022-08-15T09:41:37.589Z"),
                  optInStatus: OptInStatusEnum.OptedIn,
                  optOutDate: new Date("2021-12-06T22:12:55.985Z"),
                  optOutInd: YesNoInheritEnum.Inherit,
                  preferredFormat: "text/html",
                  provisionedInd: true,
                  shareMarketing: YesNoInheritEnum.Inherit,
                  shareSync: YesNoInheritEnum.No,
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
              id: "<ID>",
              relation: "Mother",
            },
          ],
          comments: {
            atType: "Loan",
            comment: [
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
                "LH NH SQ",
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
              comment: "The Football Is Good For Training And Recreational Purposes",
              emailType: "Work",
              id: "exampledomain@example.com",
              optInDate: new Date("2022-10-18T13:23:26.822Z"),
              optInStatus: OptInStatusEnum.OptedIn,
              optOutDate: new Date("2022-01-07T12:02:56.265Z"),
              optOutInd: YesNoInheritEnum.No,
              preferredFormat: "text/html",
              provisionedInd: true,
              shareMarketing: YesNoInheritEnum.Yes,
              shareSync: YesNoInheritEnum.No,
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
              gender: GenderEnum.Female,
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
          travelerRef: "Tasty",
          accompaniedByInfantInd: true,
          birthDate: new RFCDate("2021-06-05"),
          gender: GenderEnum.Male,
          id: "<ID>",
          nationality: "AL",
          passengerTypeCode: "CHD",
        },
      ],
      travelerProduct: [
        {
          atType: "TravelerProduct",
          confirmationStatusEnum: ConfirmationStatusEnum.Pending,
          offerRef: "female",
          productRef: "generate Synchronised Bronze",
          travelerRef: "Bicycle Unbranded bandwidth",
          id: "<ID>",
        },
      ],
      autoDeleteDate: new RFCDate("2022-05-23"),
      id: "REF12873",
      notificationDate: new RFCDate("2022-09-13"),
    },
  },
  traceId: "Sedan",
  xauthTravelportAccessgroup: "lavender",
}).then((res: CreateHotelReservationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { RetrieveHotelReservationResponse } from "akaris-backend/dist/sdk/models/operations";
import { IdentifierTypeENUM } from "akaris-backend/dist/sdk/models/shared";

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.reservationHotel.retrieveHotelReservation({
  identifier: "Markets Folding",
  traceId: "off Music",
  xauthTravelportAccessgroup: "alias Azusa Hop",
  detailViewInd: false,
  identifierType: IdentifierTypeENUM.Locator,
}).then((res: RetrieveHotelReservationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateHotelReservationResponse } from "akaris-backend/dist/sdk/models/operations";
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

const sdk = new AkarisBackend({
  security: {
    oAuth2: "",
  },
});

sdk.reservationHotel.updateHotelReservation({
  identifier: "repurpose blanditiis Hip",
  reservationDetailWrapper: {
    reservationDetail: {
      atType: "Reservation",
      accounting: {
        atType: "Accounting",
        accountingRef: "Loan",
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
        id: "<ID>",
        template: "Internal Finance template",
      },
      agencyServiceFee: [
        {
          atType: "AgencyServiceFee",
          amount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Supplier,
            minorUnit: 2,
            value: 124.56,
          },
          description: "Flight reservation service fee",
          expiryDate: new Date("2021-03-20T23:33:15.144Z"),
          offerRef: "tarnish",
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
              includedInBase: YesNoUnknownEnum.Yes,
              purpose: "Fuel",
              reportingAuthority: "JFK1",
              taxCode: "7702",
              value: 12.2,
            },
          ],
          travelerRef: "jaded Arizona Classical",
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
              atType: "attitude deposit Security",
              applyTo: CommissionApplyEnum.Base,
              commission: {
                atType: "Commission",
                application: CommissionEnum.Full,
              },
              travelerIdentifierRef: [
                {
                  description: "Multi-tiered fault-tolerant concept",
                  id: "<ID>",
                  name: "mobile",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Program ASCII Honduras",
                },
              ],
            },
          ],
          destinationPurpose: [
            {
              atType: "DestinationPurpose",
              destination: DestinationEnum.CanadaAndGreenland,
              purpose: PurposeEnum.Pleasure,
            },
          ],
          documentOverridesRef: "sunt",
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
              atType: "with",
              documentType: DocumentTypeEnum.Ticket,
              restriction: [
                "Northwest",
              ],
              travelerIdentifierRef: [
                {
                  description: "Cross-platform demand-driven success",
                  id: "<ID>",
                  name: "Kentucky Northwest Cadmium",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Diesel Avon",
                },
              ],
            },
          ],
          ticketDesignators: [
            {
              atType: "Oriental Audi",
              ticketDesignator: "visualize",
              travelerIdentifierRef: [
                {
                  description: "Exclusive leading edge support",
                  id: "<ID>",
                  name: "magnam Helium transmitter",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "generate methodical Koruna",
                },
              ],
            },
          ],
          tourCodes: [
            {
              atType: "TourCodes",
              tourCode: {
                tourCodeType: TourCodeTypeEnum.InclusiveTour,
                value: "Valley Hydrogen architecture",
              },
              travelerIdentifierRef: [
                {
                  description: "Managed foreground project",
                  id: "<ID>",
                  name: "JSON",
                  passengerTypeCode: "ADT",
                  uris: [
                    "google.com",
                  ],
                  value: "Applications female",
                },
              ],
            },
          ],
          id: "<ID>",
        },
      ],
      formOfPayment: [
        {
          atType: "FormOfPaymentPaymentCard",
          formOfPaymentRef: "Chile morph",
          identifier: {
            authority: "TVPT",
            value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
          },
          id: "<ID>",
        },
      ],
      groupName: "Soap Liaison",
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
              atType: "Granite phooey",
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
                    amount: 728.7,
                    currencyCode: {
                      codeAuthority: "ISO 4217",
                      decimalAuthority: "ISO 4217",
                      decimalPlace: 4,
                      value: "USD",
                    },
                    taxBreakdown: [
                      {
                        airportCode: "MIA",
                        amount: 3175.91,
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
              currencySource: CurrencySourceEnum.Requested,
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
                    "LH NH SQ",
                  ],
                  supplier: "UA",
                  supplierType: "Airline",
                  tier: "Silver",
                  validatedInd: true,
                  value: "132456",
                },
              ],
              expiryDate: new Date("2021-04-18T06:49:26.190Z"),
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
                      textFormat: TextFormatEnum.PlainText,
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
          offerRef: "yowza",
          parentOffer: {
            atType: "ParentOffer",
            offerRef: "prioritise red",
            productRef: "Gasoline District",
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
          id: "<ID>",
        },
      ],
      payment: [
        {
          atType: "Payment",
          agencyServiceFeeIdentifier: [
            {
              id: "<ID>",
            },
          ],
          amount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Requested,
            minorUnit: 2,
            value: 124.56,
          },
          baseAmount: {
            approximateInd: true,
            code: "USD",
            currencySource: CurrencySourceEnum.Charged,
            minorUnit: 2,
            value: 124.56,
          },
          extendedPayment: {
            firstInstallment: 100,
            numberOfInstallments: 6,
            otatoCode: "Southeast yet overriding",
            remainingAmount: 50,
          },
          fees: {
            atType: "FeesDetail",
            totalFees: 111.11,
          },
          formOfPaymentIdentifier: {
            atType: "FormOfPaymentPaymentCash",
            formOfPaymentRef: "Strategist Mouse",
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            id: "<ID>",
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
          paymentRef: "Factors Southwest",
          taxes: {
            atType: "TaxesDetail",
            taxInfo: [
              {
                amount: 9456.12,
                currencyCode: {
                  codeAuthority: "ISO 4217",
                  decimalAuthority: "ISO 4217",
                  decimalPlace: 4,
                  value: "USD",
                },
                taxBreakdown: [
                  {
                    airportCode: "MIA",
                    amount: 8539.2,
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
              description: "Down-sized bi-directional software",
              id: "<ID>",
              name: "Senior Manager",
              passengerTypeCode: "ADT",
              uris: [
                "google.com",
              ],
              value: "online thoroughly",
            },
          ],
          depositInd: false,
          guaranteeInd: false,
          id: "<ID>",
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
          travelerRef: "Australian Realigned boldly",
          id: "<ID>",
        },
        id: "<ID>",
      },
      primaryContact: [
        {
          atType: "PrimaryContact",
          email: {
            comment: "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
            emailType: "Work",
            id: "exampledomain@example.com",
            optInDate: new Date("2021-05-12T03:16:38.320Z"),
            optInStatus: OptInStatusEnum.OptedIn,
            optOutDate: new Date("2021-08-12T09:55:51.689Z"),
            optOutInd: YesNoInheritEnum.Inherit,
            preferredFormat: "text/html",
            provisionedInd: true,
            shareMarketing: YesNoInheritEnum.No,
            shareSync: YesNoInheritEnum.Inherit,
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
            travelerRef: "Implementation Electric",
            id: "<ID>",
          },
          contactInformationRefusedInd: true,
          id: "<ID>",
          shareWith: ShareWithEnum.Traveler,
          shareWithSupplier: [
            "SSD",
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
            "UDP",
          ],
          productRef: "Indiana turquoise red",
          receiptRef: "6773 2389 2239 2832",
          dateTime: new Date("2023-02-28T12:27:59.089Z"),
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
          commentSource: CommentSourceEnum.Agency,
          id: "<ID>",
          shareWith: ShareWithEnum.Traveler,
          shareWithSupplier: [
            "Metal",
          ],
        },
      ],
      reservationDisplaySequence: {
        atType: "Metal Gasoline oddly",
        displaySequence: [
          {
            atType: "Cadillac South Cuban",
            offerRef: "reboot turquoise Tandem",
            productRef: "Land person",
            sequence: 1,
            displaySequence: "1",
          },
        ],
        autoDeleteDateSequence: 303317,
      },
      shoppingCart: {
        atType: "Cadillac Awesome",
        product: [
          {
            atType: "ProductAir",
            flightSegment: [
              {
                atType: "FlightSegment",
                co2Actual: {
                  measurementType: MeasurementTypeEnum.Width,
                  unit: UnitOfMeasureEnum.Kilowatts,
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
                      brandRef: "indigo Sports",
                      identifier: {
                        authority: "TVPT",
                        value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
                      },
                      id: "<ID>",
                    },
                    classOfServiceAvailability: [
                      {
                        number: 2,
                        status: AvailabilityStatusEnum.Other,
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
                            "LH NH SQ",
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
                    fareQualifier: {
                      value: FareQualifierENUMBase.Consolidator,
                    },
                    cabin: CabinAirEnum.Economy,
                    carCode: "P1234",
                    classOfService: "F",
                    fareBasisCode: "HKG  SU  X/MOW  SU  KGD  598.78",
                    fareType: FareTypeEnum.AgencyPrivateFare,
                    fareTypeCode: "ERU",
                    segmentSequence: [
                      381389,
                    ],
                    stopoverPriced: YesNoUnknownEnum.No,
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
          serviceAnimalType: "forecast",
          status: {
            supplierText: "Active/In-active",
            value: ConfirmationStatusEnum.Rejected,
          },
          travelerIdentifier: {
            identifier: {
              authority: "TVPT",
              value: "A0656EFF-FAF4-456F-B061-0161008D7C4E",
            },
            travelerRef: "Assistant Jazz",
            id: "<ID>",
          },
          id: "<ID>",
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
            "[\"1G\",\"1V\",\"MB\",\"HZ\"]",
          ],
          value: "azure Frozen",
        },
        profileName: [
          "relationships",
        ],
        travelOrganizationRef: "TravelAgency_1",
        id: "2",
        organizationType: OrganizationTypeEnum.IdDocumentIssuer,
      },
      traveler: [
        {
          atType: "TravelerDetail",
          address: [
            {
              atType: "AddressDetail",
              addressLine: [
                "asymmetric",
              ],
              addressee: "Hop",
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
                    "immediately",
                  ],
                  addressee: "Diesel Female",
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
                  comment: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
                  emailType: "Work",
                  id: "exampledomain@example.com",
                  optInDate: new Date("2022-10-05T05:14:02.397Z"),
                  optInStatus: OptInStatusEnum.Unknown,
                  optOutDate: new Date("2022-10-21T12:28:46.385Z"),
                  optOutInd: YesNoInheritEnum.No,
                  preferredFormat: "text/html",
                  provisionedInd: true,
                  shareMarketing: YesNoInheritEnum.Yes,
                  shareSync: YesNoInheritEnum.No,
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
              id: "<ID>",
              relation: "Mother",
            },
          ],
          comments: {
            atType: "FTM",
            comment: [
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
                "LH NH SQ",
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
              comment: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
              emailType: "Work",
              id: "exampledomain@example.com",
              optInDate: new Date("2022-08-11T04:18:31.662Z"),
              optInStatus: OptInStatusEnum.OptedIn,
              optOutDate: new Date("2023-05-16T08:10:36.604Z"),
              optOutInd: YesNoInheritEnum.No,
              preferredFormat: "text/html",
              provisionedInd: true,
              shareMarketing: YesNoInheritEnum.Yes,
              shareSync: YesNoInheritEnum.No,
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
              gender: GenderEnum.Male,
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
          travelerRef: "systems Tandem",
          accompaniedByInfantInd: true,
          birthDate: new RFCDate("2021-06-05"),
          gender: GenderEnum.Female,
          id: "<ID>",
          nationality: "AL",
          passengerTypeCode: "CHD",
        },
      ],
      travelerProduct: [
        {
          atType: "TravelerProduct",
          confirmationStatusEnum: ConfirmationStatusEnum.Confirmed,
          offerRef: "Northeast calculating",
          productRef: "paradigms Smart",
          travelerRef: "Trans Genderqueer",
          id: "<ID>",
        },
      ],
      autoDeleteDate: new RFCDate("2022-02-16"),
      id: "REF12873",
      notificationDate: new RFCDate("2021-04-03"),
    },
  },
  traceId: "Markets Florida",
  xauthTravelportAccessgroup: "viral",
}).then((res: UpdateHotelReservationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.UpdateHotelReservationRequest](../../models/operations/updatehotelreservationrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.UpdateHotelReservationResponse](../../models/operations/updatehotelreservationresponse.md)>**

