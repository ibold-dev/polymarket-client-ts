import { ImageOptimization } from './search';

export interface CommentPosition {
    tokenId?: string | null;
    positionSize?: string | null;
}

export interface CommentProfile {
    name?: string | null;
    pseudonym?: string | null;
    displayUsernamePublic?: boolean | null;
    bio?: string | null;
    isMod?: boolean | null;
    isCreator?: boolean | null;
    proxyWallet?: string | null;
    baseAddress?: string | null;
    profileImage?: string | null;
    profileImageOptimized?: ImageOptimization;
    positions?: CommentPosition[];
}

export interface Reaction {
    id?: string;
    commentID?: number | null;
    reactionType?: string | null;
    icon?: string | null;
    userAddress?: string | null;
    createdAt?: string | null;
    profile?: CommentProfile;
}

export interface Comment {
    id?: string;
    body?: string | null;
    parentEntityType?: string | null;
    parentEntityID?: number | null;
    parentCommentID?: string | null;
    userAddress?: string | null;
    replyAddress?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    profile?: CommentProfile;
    reactions?: Reaction[];
    reportCount?: number | null;
    reactionCount?: number | null;
}

export interface GetCommentsParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
    parent_entity_type?: 'Event' | 'Series' | 'market';
    parent_entity_id?: number;
    get_positions?: boolean;
    holders_only?: boolean;
}

export interface GetCommentsByIdParams {
    get_positions?: boolean;
}

export interface GetCommentsByUserAddressParams {
    limit?: number;
    offset?: number;
    order?: string;
    ascending?: boolean;
}

