import { AxiosStatic } from "axios"

export type TestHttpClient = {
    fetchJson: (id: number) => Promise<DataItem | undefined>
}

export type DataItem = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export function createdTestHttpClient(client: AxiosStatic): TestHttpClient {

    async function fetchJson(id: number): Promise<DataItem | undefined> {
        const response = await client.get<DataItem[]>('https://jsonplaceholder.typicode.com/posts')
        console.log(`Test http client response: ${response.status}`)
        const filteredResponse = response.data.find(x => x.id === id)
        console.log(response.data)
        return filteredResponse
    }

    return { fetchJson }
}
