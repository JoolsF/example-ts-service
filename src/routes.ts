import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { postNotesBodySchema } from "./schema"


const api: () => FastifyPluginAsync = () => async (server, _opts) => {
    server
        .get('/notes', async (_req, _res) => {
            return { foo: 'bar' }
        })

    server.post('/notes', {schema: postNotesBodySchema}, async (req, _res) => {
        return (req.body)
    })

}

export async function registerApiRoutes({ server }: { server: FastifyInstance }): Promise<void> {
    await server.register(api(), {
        prefix: '/api/v1'
    })
}

