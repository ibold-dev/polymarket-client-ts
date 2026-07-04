import { PolymarketClient } from '../client';
import { Comment, GetCommentsParams } from '../types/comments';

export class CommentsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List comments from the Gamma API.
     * @param params Query parameters for fetching comments.
     * @returns An array of comments.
     */
    public async getComments(params?: GetCommentsParams): Promise<Comment[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Comment[]>('/comments', {
            params: queryParams
        });

        return response.data;
    }
}
