import axios from "axios";

export class AxiosAdapter implements IHttpClient {
    async get<T>(url: string): Promise<T> {
        const response = await axios.get<T>(url);
        return response.data;
    }
}
