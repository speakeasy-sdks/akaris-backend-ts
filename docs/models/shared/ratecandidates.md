# RateCandidates


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `atType`                                                | *string*                                                | :heavy_check_mark:                                      | N/A                                                     | RateCandidates                                          |
| `rateCandidate`                                         | [RateCandidate](../../models/shared/ratecandidate.md)[] | :heavy_check_mark:                                      | N/A                                                     |                                                         |
| `postPayRatesOnlyInd`                                   | *boolean*                                               | :heavy_minus_sign:                                      | If true, only postpay rates will be returned            |                                                         |
| `prePayRatesOnlyInd`                                    | *boolean*                                               | :heavy_minus_sign:                                      | If true, only prepay rates will be returned             |                                                         |