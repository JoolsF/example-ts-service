import fastify, { FastifyInstance, FastifyPluginAsync } from "fastify"

const api: () => FastifyPluginAsync = () => async (server, _opts) => {
    server.get('/notes', async (_req, _res) => {
        return { foo: 'bar'}
    })
}

export async function registerApiRoutes({server}: {server: FastifyInstance}): Promise<void> {
    await server.register(api(), {
        prefix: '/api/v1'})
}

