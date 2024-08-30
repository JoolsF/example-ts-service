import { FastifyInstance } from "fastify/types/instance"
import { TestHttpClient } from "./testclient"
import { TestFlakeyHttpClient } from "./test-flakey-client"

export const registerMaintenanceRoutes = (server: FastifyInstance) =>
    server.get('/ping', async function handler(request, reply) {
        return { result: 'pong' }
    })

export const registerApiRoutes = (server: FastifyInstance, client: TestHttpClient, flakeyClient: TestFlakeyHttpClient) => {
    server.get('/test-api-route/:id', async function handler(request, reply) {
        const { id } = request.params;
        const clientResponse = await client.fetchJson(Number(id)) //TODO Implement type safety for http inputs

        return {
            data: clientResponse
        }
    })

    server.get('/test-api-route-flakey', async function handler(request, reply) {
        return await flakeyClient.testFlakyClient()
    })
}
