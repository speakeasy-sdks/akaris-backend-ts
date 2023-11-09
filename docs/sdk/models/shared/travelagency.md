# TravelAgency


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                                                                | Required                                                                                                                                                                                                                                                                                                                                                                                                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                         | Example                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `atType`                                                                                                                                                                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                 | TravelAgencyDetail                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `corporateCode`                                                                                                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | A reference assigned by the Travel Agency to identify the corporate organization                                                                                                                                                                                                                                                                                                                                                    | Air Agency                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `identifier`                                                                                                                                                                                                                                                                                                                                                                                                                        | [shared.Identifier](../../../sdk/models/shared/identifier.md)                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database. |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `organizationName`                                                                                                                                                                                                                                                                                                                                                                                                                  | [shared.CompanyName](../../../sdk/models/shared/companyname.md)                                                                                                                                                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                  | Identifies a company by name.                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `profileName`                                                                                                                                                                                                                                                                                                                                                                                                                       | *string*[]                                                                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | N/A                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `travelOrganizationRef`                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | An organization that has a name and a structure and members and directly works in the travel industry                                                                                                                                                                                                                                                                                                                               | TravelAgency_1                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | Simple xsd id, not for external use                                                                                                                                                                                                                                                                                                                                                                                                 | 2                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `organizationType`                                                                                                                                                                                                                                                                                                                                                                                                                  | [shared.OrganizationTypeEnum](../../../sdk/models/shared/organizationtypeenum.md)                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                  | The type of organization such as an Agency, Branch, Company, Supplier, Provider                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                     |