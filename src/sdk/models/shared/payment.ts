/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AgencyServiceFeeIdentifier } from "./agencyservicefeeidentifier";
import { CurrencyAmount } from "./currencyamount";
import { ExtendedPayment } from "./extendedpayment";
import { Fees } from "./fees";
import { FormOfPaymentIdentifier } from "./formofpaymentidentifier";
import { Identifier } from "./identifier";
import { OfferIdentifier } from "./offeridentifier";
import { Taxes } from "./taxes";
import { TravelerIdentifierRef } from "./traveleridentifierref";
import { Expose, Type } from "class-transformer";

export class Payment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    @SpeakeasyMetadata({ elemType: AgencyServiceFeeIdentifier })
    @Expose({ name: "AgencyServiceFeeIdentifier" })
    @Type(() => AgencyServiceFeeIdentifier)
    agencyServiceFeeIdentifier?: AgencyServiceFeeIdentifier[];

    /**
     * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Amount" })
    @Type(() => CurrencyAmount)
    amount: CurrencyAmount;

    /**
     * A monetary amount, up to 4 decimal places. Decimal place needs to be included.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "BaseAmount" })
    @Type(() => CurrencyAmount)
    baseAmount?: CurrencyAmount;

    /**
     * Note this field is deprecated in Payment schema and should be passed in FormOfPaymentPaymentCardExtendPayment schema
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ExtendedPayment" })
    @Type(() => ExtendedPayment)
    extendedPayment?: ExtendedPayment;

    @SpeakeasyMetadata()
    @Expose({ name: "Fees" })
    @Type(() => Fees)
    fees?: Fees;

    @SpeakeasyMetadata()
    @Expose({ name: "FormOfPaymentIdentifier" })
    @Type(() => FormOfPaymentIdentifier)
    formOfPaymentIdentifier?: FormOfPaymentIdentifier;

    /**
     * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Identifier" })
    @Type(() => Identifier)
    identifier?: Identifier;

    @SpeakeasyMetadata({ elemType: OfferIdentifier })
    @Expose({ name: "OfferIdentifier" })
    @Type(() => OfferIdentifier)
    offerIdentifier?: OfferIdentifier[];

    @SpeakeasyMetadata()
    @Expose({ name: "PaymentRef" })
    paymentRef?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "Taxes" })
    @Type(() => Taxes)
    taxes?: Taxes;

    @SpeakeasyMetadata({ elemType: TravelerIdentifierRef })
    @Expose({ name: "TravelerIdentifierRef" })
    @Type(() => TravelerIdentifierRef)
    travelerIdentifierRef?: TravelerIdentifierRef[];

    /**
     * If true, the payment is a deposit on the referenced Offer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "depositInd" })
    depositInd?: boolean;

    /**
     * If true, the payment is a guarantee for the referenced Offer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "guaranteeInd" })
    guaranteeInd?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;
}