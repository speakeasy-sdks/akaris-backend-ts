/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BuildFromCatalogOfferingHospitality } from "./buildfromcatalogofferinghospitality";
import { Expose, Type } from "class-transformer";

export class OfferQueryBuildFromCatalogOffering extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    @SpeakeasyMetadata()
    @Expose({ name: "BuildFromCatalogOfferingHospitality" })
    @Type(() => BuildFromCatalogOfferingHospitality)
    buildFromCatalogOfferingHospitality?: BuildFromCatalogOfferingHospitality;
}
