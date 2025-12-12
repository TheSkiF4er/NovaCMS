import { request } from 'undici';

export class NovaRestClient {
  constructor(private readonly baseUrl: string) {}

  async health() {
    const res = await request(`${this.baseUrl}/health`, { method: 'GET' });
    return res.body.json();
  }
}
