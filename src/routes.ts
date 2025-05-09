import { FastifyInstance, FastifyPluginAsync } from "fastify"
import fastifyJwt from "@fastify/jwt"
import { postNotesBodySchema, registerUserBodySchema } from "./schema"
import { CreateNoteRequest } from "./dto"
import { NoteService } from "./note-service"


const api: (noteService: NoteService) => FastifyPluginAsync = (noteService) => async (server, _opts) => {
    server
        .get('/notes', async (_req, _res) => {
            return { foo: 'bar' }
        })

    server
        .get('/note/:id', async (req, _res) => {
            const { id } = req.params as { id: string }
            return await noteService.getNote(id)
        })

    server.post('/note', { schema: postNotesBodySchema }, async (req, _res) => {
        const note: CreateNoteRequest = req.body as CreateNoteRequest
        return await noteService.createNote(note)
    })


    server.register(authRoutes, { prefix: '/auth' })
}

const authRoutes: FastifyPluginAsync = async (server, _opts) => {

    server.post('/register', { schema: registerUserBodySchema }, async (req, res) => {
        res.code(200)
        return { result: 'ok' }
    })
}


export async function registerApiRoutes({ server, noteService }: { server: FastifyInstance, noteService: NoteService }): Promise<void> {

    await server.register(
        api(noteService),
        {
            prefix: '/api/v1'
        })
}

