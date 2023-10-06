# VendorCurrencyTotal


## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `atType`                                                                                                              | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `base`                                                                                                                | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | The price prior to all applicable taxes of a product such as the rate for a room or fare for a flight.                | 120.2                                                                                                                 |
| `currencyCode`                                                                                                        | [CurrencyCode](../../models/shared/currencycode.md)                                                                   | :heavy_minus_sign:                                                                                                    | Currency codes are the three-letter alphabetic codes that represent the various currencies used throughout the world. |                                                                                                                       |
| `fees`                                                                                                                | [Fees](../../models/shared/fees.md)                                                                                   | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `taxes`                                                                                                               | [Taxes](../../models/shared/taxes.md)                                                                                 | :heavy_minus_sign:                                                                                                    | N/A                                                                                                                   |                                                                                                                       |
| `total`                                                                                                               | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | Specifies the total price including base + taxes + fees                                                               | 30.13                                                                                                                 |
| `approximateInd`                                                                                                      | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | True if this amount has been converted from the original amount                                                       | true                                                                                                                  |
| `currencySource`                                                                                                      | [CurrencySourceEnum](../../models/shared/currencysourceenum.md)                                                       | :heavy_minus_sign:                                                                                                    | The system requesting or returning the currency code specified in the attribute                                       |                                                                                                                       |