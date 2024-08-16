import Fastify, { type FastifyInstance } from 'fastify';
import { registerMaintenanceRoutes } from "./routes"

const start = async () => {

    const server: FastifyInstance = Fastify({
        logger: true
    });

    await registerMaintenanceRoutes(server)

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
