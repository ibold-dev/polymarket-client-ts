import { PolymarketClient } from '../client';
import { KeysetEventsResponse, GetEventsKeysetParams, GetEventsParams, GetEventParams, LiveVolume } from '../types/events';
import { Event, Tag } from '../types/search';

export class EventsEndpoints {
    constructor(private readonly client: PolymarketClient) {}

    /**
     * List events (keyset pagination).
     * @param params Query parameters for fetching events via keyset pagination.
     * @returns A paginated list of events.
     */
    public async getEventsKeyset(params?: GetEventsKeysetParams): Promise<KeysetEventsResponse> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<KeysetEventsResponse>('/events/keyset', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * List events.
     * @param params Query parameters for fetching events.
     * @returns A list of events.
     */
    public async getEvents(params?: GetEventsParams): Promise<Event[]> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Event[]>('/events', {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get an event by its ID.
     * @param id The ID of the event to fetch.
     * @param params Query parameters for fetching the event.
     * @returns The event.
     */
    public async getEvent(id: string | number, params?: GetEventParams): Promise<Event> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Event>(`/events/${id}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get an event by its slug.
     * @param slug The slug of the event to fetch.
     * @param params Query parameters for fetching the event.
     * @returns The event.
     */
    public async getEventBySlug(slug: string, params?: GetEventParams): Promise<Event> {
        const queryParams: Record<string, any> = { ...params };

        const response = await this.client.gammaApi.get<Event>(`/events/slug/${slug}`, {
            params: queryParams
        });

        return response.data;
    }

    /**
     * Get tags attached to an event.
     * @param id The ID of the event.
     * @returns An array of tags attached to the event.
     */
    public async getEventTags(id: string | number): Promise<Tag[]> {
        const response = await this.client.gammaApi.get<Tag[]>(`/events/${id}/tags`);
        return response.data;
    }

    /**
     * Get live volume for an event.
     * @param id The ID of the event.
     * @returns Array of live volume data.
     */
    public async getLiveVolume(id: number): Promise<LiveVolume[]> {
        const response = await this.client.dataApi.get<LiveVolume[]>('/live-volume', {
            params: { id }
        });
        return response.data;
    }
}
