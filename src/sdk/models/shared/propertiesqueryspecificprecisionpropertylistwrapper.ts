/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PropertiesQuerySpecificPrecisionPropertyList } from "./propertiesqueryspecificprecisionpropertylist";
import { Expose, Type } from "class-transformer";

export class PropertiesQuerySpecificPrecisionPropertyListWrapper extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "PropertiesQuerySpecificPrecisionPropertyList" })
    @Type(() => PropertiesQuerySpecificPrecisionPropertyList)
    propertiesQuerySpecificPrecisionPropertyList?: PropertiesQuerySpecificPrecisionPropertyList;
}
