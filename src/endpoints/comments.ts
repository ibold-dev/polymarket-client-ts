import { PolymarketClient } from '../client';
import { Comment, GetCommentsParams, GetCommentsByIdParams } from '../types/comments';

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

    /**
     * Get comments by comment ID.
     * @param id The comment ID.
     * @param params Query parameters for fetching the comments.
     * @returns An array of comments.
     */
    public async getCommentsById(id: number | string, params?: GetCommentsByIdParams): Promise<Comment[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Comment[]>(`/comments/${id}`, {
            params: queryParams
        });

        return response.data;
    }
}
