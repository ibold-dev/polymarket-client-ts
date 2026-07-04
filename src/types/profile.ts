export interface PublicProfile {
    createdAt: string | null;
    proxyWallet: string | null;
    profileImage: string | null;
    displayUsernamePublic: boolean | null;
    bio: string | null;
    pseudonym: string | null;
    name: string | null;
    users: {
        id: string;
        creator: boolean;
        mod: boolean;
    }[] | null;
    xUsername: string | null;
    verifiedBadge: boolean | null;
}
