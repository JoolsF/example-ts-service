import { AxiosInstance, AxiosStatic } from "axios"

export type TestFlakeyHttpClient = {
    testFlakyClient: () => Promise<void>
}

export function createdTestFlakeyHttpClient(client: AxiosInstance): TestFlakeyHttpClient {


    async function testFlakyClient(): Promise<void> {
        const response = await client.get('http:localhost:8080/flakey-endpoint')
        console.log(`Test http client response: ${response.status}`)
        return
    }

    return { testFlakyClient };
}
