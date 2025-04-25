import { FastifyInstance, FastifyPluginAsync } from "fastify"
import { postNotesBodySchema } from "./schema"
import { CreateNoteRequest } from "./dto"
import { NoteService } from "./note-service"


const api: (noteService: NoteService) => FastifyPluginAsync = (noteService) => async (server, _opts) => {
    server
        .get('/notes', async (_req, _res) => {
            return {foo: 'bar'}
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
}

export async function registerApiRoutes({ server, noteService }: { server: FastifyInstance, noteService: NoteService }): Promise<void> {
    await server.register(api(noteService), {
        prefix: '/api/v1'
    })
}

