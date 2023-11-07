# Restaurant


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `atType`                                           | *string*                                           | :heavy_minus_sign:                                 | N/A                                                | Restaurant                                         |
| `distance`                                         | [shared.Distance](../../models/shared/distance.md) | :heavy_minus_sign:                                 | A search radius                                    |                                                    |
| `cuisineCodes`                                     | *string*[]                                         | :heavy_minus_sign:                                 | An OTA code to define the cuisine type             | 12                                                 |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | The name of the restaurant                         |                                                    |
| `proximityCode`                                    | *string*                                           | :heavy_minus_sign:                                 | An OTA proximity code                              |                                                    |