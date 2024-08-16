import { AxiosStatic } from "axios"

export interface TestHttpClient {
    fetchJson: (id: number) => Promise<DataItem| undefined>
}

export interface DataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export class TestHttpClientImpl implements TestHttpClient {

    constructor(private client: AxiosStatic) {

    }

    async fetchJson(id: number): Promise<DataItem | undefined> {
        const response = await this.client.get<DataItem[]>('https://jsonplaceholder.typicode.com/posts')
        console.log(`Test http client response: ${response.status}`)
        const filteredResponse = response.data.find(x => x.id === id)
        console.log(response.data)
        return filteredResponse
    }
}
