import { FastifyInstance } from "fastify/types/instance"

export const registerMaintenanceRoutes = (server: FastifyInstance) =>
    server.get('/ping', async function handler(request, reply) {
        return { result: 'pong' }
    })
