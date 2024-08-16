import Fastify, { type FastifyInstance } from 'fastify';
import { registerApiRoutes, registerMaintenanceRoutes } from "./routes"
import { TestHttpClientImpl } from './testclient';

const start = async () => {

    const server: FastifyInstance = Fastify({
        logger: true
    });

    const client = new TestHttpClientImpl(require('axios').default)

    await registerMaintenanceRoutes(server)
    await registerApiRoutes(server, client)

    try {
        server.listen({ port: 3000 })
    } catch (err) {
        server.log.error(err)
        throw err
    }
}

start().catch((err) => {
    // TODO log
    process.exit(1)
})
