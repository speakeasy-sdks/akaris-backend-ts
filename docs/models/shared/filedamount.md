# FiledAmount

The base amount of a ticket price or net price that is filed in local currency


## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `codeAuthority`                                      | *string*                                             | :heavy_check_mark:                                   | Filed amount currency code authority                 | Australian Dollar                                    |
| `currencyCode`                                       | *string*                                             | :heavy_minus_sign:                                   | Filed amount currency code                           | USD                                                  |
| `decimalAuthority`                                   | *string*                                             | :heavy_minus_sign:                                   | ISO 4217 standard decimal authority                  | ISO 4217                                             |
| `decimalPlace`                                       | *number*                                             | :heavy_check_mark:                                   | ISO 4217 standard has a different number of decimals | 3                                                    |
| `value`                                              | *number*                                             | :heavy_minus_sign:                                   | Filed amount value                                   | 43.3422                                              |