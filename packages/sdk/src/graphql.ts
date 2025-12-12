import { request } from 'undici';

export class NovaGraphQLClient {
  constructor(private readonly endpoint: string) {}

  async query<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const res = await request(this.endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });
    return res.body.json() as unknown as T;
  }
}
