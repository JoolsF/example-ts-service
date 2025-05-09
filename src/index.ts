import Fastify, { type FastifyInstance } from 'fastify';

import { registerApiRoutes } from './routes';
import { getNoteService } from './note-service';
import fastifyJwt from '@fastify/jwt';

const start = async () => {

    const server: FastifyInstance = Fastify({
        logger: true
    });

    const noteService = getNoteService()

    await server.register(fastifyJwt, {
        secret: 'supersecret' //TODO inject from ENV VAR
    })


    await registerApiRoutes({server, noteService})

    try {
        server.listen({ port: 3000, host: '0.0.0.0' })
    } catch (err) {
        server.log.error(err)
        throw err
    }
}

start().catch((err) => {
    // TODO log
    process.exit(1)
})
