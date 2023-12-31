/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressBldgRoom } from "./addressbldgroom";
import { AddressStreetNumber } from "./addressstreetnumber";
import { Country } from "./country";
import { EnumAddressRole } from "./enumaddressrole";
import { StateProv } from "./stateprov";
import { Expose, Type } from "class-transformer";

export class Address extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * Additional address line details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "AddressLine" })
    addressLine?: string[];

    /**
     * The name of the company or person to be addressed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Addressee" })
    addressee?: string;

    /**
     * Address with building and room number
     */
    @SpeakeasyMetadata()
    @Expose({ name: "BldgRoom" })
    @Type(() => AddressBldgRoom)
    bldgRoom?: AddressBldgRoom;

    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "City" })
    city: string;

    /**
     * ISO 3166 code for a country with optional name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Country" })
    @Type(() => Country)
    country?: Country;

    /**
     * County or Region Name (e.g., Fairfax).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "County" })
    county?: string;

    /**
     * The street number alone is the numerical number that precedes the street name in the address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Number" })
    @Type(() => AddressStreetNumber)
    number?: AddressStreetNumber;

    /**
     * Post Office Code number.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "PostalCode" })
    postalCode?: string;

    /**
     * The standard code or abbreviation for the state, province, or region with optional name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "StateProv" })
    @Type(() => StateProv)
    stateProv?: StateProv;

    /**
     * May contain the street number when the Street number element is missing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Street" })
    street?: string;

    /**
     * Internally referenced id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    role?: EnumAddressRole;
}
