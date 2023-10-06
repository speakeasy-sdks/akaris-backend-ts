/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { ConversionRate } from "./conversionrate";
import { CurrencyCode } from "./currencycode";
import { classToPlain, Expose, Type } from "class-transformer";

export class CurrencyRateConversion extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType?: string;

    /**
     * A conversion metric from standard to another with the contextual authority such as IATA, OAG, ISO, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ConversionRate" })
    @Type(() => ConversionRate)
    conversionRate: ConversionRate;

    /**
     * Currency codes are the three-letter alphabetic codes that represent the various currencies used throughout the world.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "SourceCurrency" })
    @Type(() => CurrencyCode)
    sourceCurrency: CurrencyCode;

    /**
     * Currency codes are the three-letter alphabetic codes that represent the various currencies used throughout the world.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "TargetCurrency" })
    @Type(() => CurrencyCode)
    targetCurrency: CurrencyCode;

    constructor(err?: CurrencyRateConversion) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "CurrencyRateConversion";
        Object.setPrototypeOf(this, CurrencyRateConversion.prototype);
    }
}