// import { FastifyInstance } from "fastify/types/instance"
// import { TestHttpClient } from "./testclient"
// import { TestFlakeyHttpClient } from "./test-flakey-client"
// import { createBook, getBook } from "./dynamo-client"

// export const registerMaintenanceRoutes = (server: FastifyInstance) =>
//     server.get('/ping', async function handler(request, reply) {
//         return { result: 'pong' }
//     })

// export const registerApiRoutes = (server: FastifyInstance, client: TestHttpClient, flakeyClient: TestFlakeyHttpClient) => {
//     server.get<{ Params: { id: string } }>('/test-api-route/foo/:id', async function handler(request, reply) {
//         const { id } = request.params;
//         const clientResponse = await client.fetchJson(Number(id)) //TODO Implement type safety for http inputs

//         return {
//             data: clientResponse
//         }
//     })

//     server.get('/test-api-route-flakey', async function handler(request, reply) {
//         return await flakeyClient.testFlakyClient()
//     })

//     server.get('/test-api-route/timezone', async function handler(request, reply) {
//         const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
//         return {
//             timezone: tz
//         }
//     })

//     server.post('/book', async function handler(request, reply) {
//         return await createBook()
//     })
    
//     server.get('/book', async function handler(request, reply) {
//         return await getBook()
//     })
// }
