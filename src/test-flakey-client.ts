import { AxiosInstance, AxiosStatic } from "axios"

export interface TestFlakeyHttpClient {
    testFlakyClient: () => Promise<void>
}

export interface DataItem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class TestFlakeyHttpClientImpl implements TestFlakeyHttpClient {

    constructor(private client: AxiosInstance) {

    }

    async testFlakyClient(): Promise<void> {
        const response = await this.client.get('http:localhost:8080/flakey-endpoint')
        console.log(`Test http client response: ${response.status}`)
        return
    }
}
