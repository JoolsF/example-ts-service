import { FastifyInstance } from "fastify/types/instance"
import { TestHttpClient } from "./testclient"

export const registerMaintenanceRoutes = (server: FastifyInstance) =>
    server.get('/ping', async function handler(request, reply) {
        return { result: 'pong' }
    })

export const registerApiRoutes = (server: FastifyInstance, client: TestHttpClient) =>
    server.get('/test-api-route/:id', async function handler(request, reply) {
        const { id } = request.params;
        const clientResponse = await client.fetchJson(Number(id)) //TODO Implement type safety for http inputs

        return {
            data: clientResponse
        }
    })
