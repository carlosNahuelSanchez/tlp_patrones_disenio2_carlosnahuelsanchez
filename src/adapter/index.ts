import { AxiosAdapter } from "./clases/AxiosAdapter.ts";
import { FetchAdapter } from "./clases/FetchAdapter.ts";
import { SimpleHttpClient } from "./clases/SimpleHttpClient.ts";

export async function runAdapter() {
    const fetchAdapter = new FetchAdapter();
    const axiosAdapter = new AxiosAdapter();

    const client = new SimpleHttpClient(fetchAdapter);

    // Usando Fetch
    const postsFetch = await client.get<any[]>("https://jsonplaceholder.typicode.com/posts");
    console.log("Posts con Fetch:", postsFetch.slice(0, 2));

    // Usando Axios
    client.setAdapter(axiosAdapter);
    const postsAxios = await client.get<any[]>("https://jsonplaceholder.typicode.com/posts");
    console.log("Posts con Axios:", postsAxios.slice(0, 2));
}

