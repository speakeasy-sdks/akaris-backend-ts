/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { Price } from "./price";
import { ProductID } from "./productid";
import { TermsAndConditionsFull } from "./termsandconditionsfull";
import { Expose, Type } from "class-transformer";

export class Offer extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    /**
     * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Identifier" })
    @Type(() => Identifier)
    identifier?: Identifier;

    @SpeakeasyMetadata()
    @Expose({ name: "Price" })
    @Type(() => Price)
    price: Price;

    @SpeakeasyMetadata({ elemType: ProductID })
    @Expose({ name: "Product" })
    @Type(() => ProductID)
    product: ProductID[];

    @SpeakeasyMetadata({ elemType: TermsAndConditionsFull })
    @Expose({ name: "TermsAndConditionsFull" })
    @Type(() => TermsAndConditionsFull)
    termsAndConditionsFull: TermsAndConditionsFull[];

    /**
     * Local indentifier within a given message for this object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Used to reference another instance of this object in the same message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "offerRef" })
    offerRef?: string;

    /**
     * A reference to the Offer this offer is sold in conjunction with
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentOfferRef" })
    parentOfferRef?: string;

    /**
     * If true, the Offer is passive for booking purposes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "passiveOfferInd" })
    passiveOfferInd?: boolean;
}
