/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppliesTo } from "./appliesto";
import { Comment } from "./comment";
import { CommentSourceEnum } from "./commentsourceenum";
import { ShareWithEnum } from "./sharewithenum";
import { Expose, Type } from "class-transformer";

export class ReservationComment extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "@type" })
    atType: string;

    @SpeakeasyMetadata({ elemType: AppliesTo })
    @Expose({ name: "AppliesTo" })
    @Type(() => AppliesTo)
    appliesTo?: AppliesTo[];

    @SpeakeasyMetadata({ elemType: Comment })
    @Expose({ name: "Comment" })
    @Type(() => Comment)
    comment?: Comment[];

    @SpeakeasyMetadata()
    @Expose({ name: "commentSource" })
    commentSource?: CommentSourceEnum;

    /**
     * Local indentifier within a given message for this object.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Share with like Supplier,agency etc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shareWith" })
    shareWith?: ShareWithEnum;

    /**
     * Reservation comment shared with supplier
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shareWithSupplier" })
    shareWithSupplier?: string[];
}