export class FetchAdapter implements IHttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP! status: ${response.status}`);
        }
        const data: T = await response.json();
        return data;
    }
}
