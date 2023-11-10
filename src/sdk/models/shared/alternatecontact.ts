/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PersonName } from "./personname";
import { Telephone } from "./telephone";
import { Expose, Type } from "class-transformer";

export class AlternateContact extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: Address })
    @Expose({ name: "Address" })
    @Type(() => Address)
    address?: Address[];

    @SpeakeasyMetadata({ elemType: Email })
    @Expose({ name: "Email" })
    @Type(() => Email)
    email?: Email[];

    @SpeakeasyMetadata()
    @Expose({ name: "PersonName" })
    @Type(() => PersonName)
    personName: PersonName;

    @SpeakeasyMetadata({ elemType: Telephone })
    @Expose({ name: "Telephone" })
    @Type(() => Telephone)
    telephone?: Telephone[];

    /**
     * Contact type value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contactType" })
    contactType?: string;

    /**
     * This is the default contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultInd" })
    defaultInd?: boolean;

    /**
     * This is the contact in case of an emergency
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emergencyInd" })
    emergencyInd?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Relation value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "relation" })
    relation?: string;
}
