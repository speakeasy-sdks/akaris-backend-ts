/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Note this field is deprecated in Payment schema and should be passed in FormOfPaymentPaymentCardExtendPayment schema
 */
export class ExtendedPayment extends SpeakeasyBase {
    /**
     * For Pagos Parceledos, specify the first installment amount. This will be the same currency as the payment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "FirstInstallment" })
    firstInstallment?: number;

    /**
     * The number of installment payments to be charged by the payment card provider
     */
    @SpeakeasyMetadata()
    @Expose({ name: "NumberOfInstallments" })
    numberOfInstallments: number;

    /**
     * For Pagos Parceledos the OTATOCode
     */
    @SpeakeasyMetadata()
    @Expose({ name: "OTATOCode" })
    otatoCode?: string;

    /**
     * For Pagos Parceledos, specify the remaining amount to be charged that will be spread across the number of installments. This will be the same currency as the payment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "RemainingAmount" })
    remainingAmount?: number;
}