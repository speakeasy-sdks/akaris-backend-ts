# AlternateContact


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `atType`                                        | *string*                                        | :heavy_minus_sign:                              | N/A                                             | AlternateContact                                |
| `address`                                       | [Address](../../models/shared/address.md)[]     | :heavy_minus_sign:                              | N/A                                             |                                                 |
| `email`                                         | [Email](../../models/shared/email.md)[]         | :heavy_minus_sign:                              | N/A                                             |                                                 |
| `personName`                                    | [PersonName](../../models/shared/personname.md) | :heavy_check_mark:                              | N/A                                             |                                                 |
| `telephone`                                     | [Telephone](../../models/shared/telephone.md)[] | :heavy_minus_sign:                              | N/A                                             |                                                 |
| `contactType`                                   | *string*                                        | :heavy_minus_sign:                              | Contact type value                              | Relative                                        |
| `defaultInd`                                    | *boolean*                                       | :heavy_minus_sign:                              | This is the default contact                     | true                                            |
| `emergencyInd`                                  | *boolean*                                       | :heavy_minus_sign:                              | This is the contact in case of an emergency     | true                                            |
| `id`                                            | *string*                                        | :heavy_minus_sign:                              | N/A                                             |                                                 |
| `relation`                                      | *string*                                        | :heavy_minus_sign:                              | Relation value                                  | Mother                                          |