/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CustomerLoyalty } from "./customerloyalty";
import { Identifier } from "./identifier";
import { Expose, Transform, Type } from "class-transformer";

export class TermsAndConditions extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    @SpeakeasyMetadata({ elemType: CustomerLoyalty })
    @Expose({ name: "CustomerLoyalty" })
    @Type(() => CustomerLoyalty)
    customerLoyalty?: CustomerLoyalty[];

    /**
     * The data and time the offer will expire
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ExpiryDate" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiryDate?: Date;

    /**
     * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Identifier" })
    @Type(() => Identifier)
    identifier?: Identifier;

    /**
     * Local indentifier within a given message for this object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Used to reference another instance of this object in the same message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "termsAndConditionsRef" })
    termsAndConditionsRef?: string;
}
