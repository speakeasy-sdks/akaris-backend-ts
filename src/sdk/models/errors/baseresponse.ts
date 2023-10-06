/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyRateConversion } from "./currencyrateconversion";
import { Identifier } from "./identifier";
import { NextSteps } from "./nextsteps";
import { ReferenceList } from "./referencelist";
import { Result } from "./result";
import { classToPlain, Expose, Type } from "class-transformer";

export class BaseResponse extends Error {
    @SpeakeasyMetadata({ elemType: CurrencyRateConversion })
    @Expose({ name: "CurrencyRateConversion" })
    @Type(() => CurrencyRateConversion)
    currencyRateConversion?: CurrencyRateConversion[];

    /**
     * Identifier provides the ability to create a globally unique identifier. For the identifier to be globally unique it must have a system provided identifier and the system must be identified using a global naming authority. System identification uses the domain naming system (DNS) to assure they are globally unique and should be an URL. The system provided ID will typically be a primary or surrogate key in a database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "Identifier" })
    @Type(() => Identifier)
    identifier?: Identifier;

    @SpeakeasyMetadata()
    @Expose({ name: "NextSteps" })
    @Type(() => NextSteps)
    nextSteps?: NextSteps;

    @SpeakeasyMetadata({ elemType: ReferenceList })
    @Expose({ name: "ReferenceList" })
    @Type(() => ReferenceList)
    referenceList?: ReferenceList[];

    @SpeakeasyMetadata()
    @Expose({ name: "Result" })
    @Type(() => Result)
    result?: Result;

    /**
     * Optional ID for internal child transactions created for processing a single request (single transaction). Should be a 128 bit GUID format. Also known as ChildTrackingId.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "traceId" })
    traceId?: string;

    /**
     * Unique transaction, correlation or tracking id for a single request and reply i.e. for a single transaction. Should be a 128 bit GUID format. Also know as E2ETrackingId.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionId" })
    transactionId?: string;

    constructor(err?: BaseResponse) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "BaseResponse";
        Object.setPrototypeOf(this, BaseResponse.prototype);
    }
}
