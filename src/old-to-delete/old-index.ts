// import Fastify, { type FastifyInstance } from 'fastify';
// import { registerApiRoutes, registerMaintenanceRoutes } from "./routes"
// import axiosRetry, { exponentialDelay, IAxiosRetryConfig, IAxiosRetryReturn } from 'axios-retry';
// import axios from 'axios';
// import { createdTestFlakeyHttpClient } from './test-flakey-client';
// import { createdTestHttpClient } from './testclient';

// const start = async () => {

//     const server: FastifyInstance = Fastify({
//         logger: true
//     });

//     const client = createdTestHttpClient(axios);
//     const flakeyClient = createdTestFlakeyHttpClient(getRetriableAxiosClient({ requestRetryLimit: 6, delayFactor: 500 }))

//     await registerMaintenanceRoutes(server)
//     await registerApiRoutes(server, client, flakeyClient)

//     try {
//         server.listen({ port: 3000, host: '0.0.0.0' })
//     } catch (err) {
//         server.log.error(err)
//         throw err
//     }
// }

// start().catch((err) => {
//     // TODO log
//     process.exit(1)
// })

// /*
//   Exponential delay here means we wait twice as long as before for each retry
//   delayFactor sets the base unit of delay in milliseconds
//   requestRetryLimit set the maximum of retries

//   Example
//   If requestRetryLimit is set to 6 and delayFactor is set to 500 (ms), we would expect the following behaviour

  
//   Failure 1, wait 1000 ms until the next retry (the delay factor is multipled by 2 each time including the first attempt)
//   Failure 2, wait 2000 ms until the next retry
//   Failure 3, wait 4000 ms until the next retry
//   Failure 4, wait 8000 ms until the next retry
//   Failure 5, wait 16000 ms until the next retry
//   Failure 6, wait 32000 ms until the next retry
// */
// type AxiosExponentialDelayParams = {
//     requestRetryLimit: number,
//     delayFactor: number
// }

// function getRetriableAxiosClient({ requestRetryLimit, delayFactor }: AxiosExponentialDelayParams) {
//     const client = axios.create()

//     const axiosRetryConfig: IAxiosRetryConfig = {
//         retries: requestRetryLimit,
//         retryDelay: (retryCount, error) =>
//             exponentialDelay(retryCount, error, delayFactor),
//         onRetry: (retryCount, error) => {
//             console.error(`Client request failed with error[${error}]. Retry count[${retryCount}], retrying....`)
//         },
//         onMaxRetryTimesExceeded: () =>
//             console.error("Maximum retry requests exceeded, aborting"),
//         retryCondition: (err) => {
//             const responseCode = err.response?.status ?? -1
//             return responseCode >= 500
//         }
//     }

//     axiosRetry(client, axiosRetryConfig);
//     return client
// }
