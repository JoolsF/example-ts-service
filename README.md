# Example Typescript service

TODO Deps
* Now
  * X Vitest
  * Zod (validation)
  * X Axios (http client)
  * X Fastify (http server) 
* Later
  * ElectroDB (Dynamo)
  * dd-trace-js (tracing)
  * pino (logging)
  * node-postgres

TODO Requirements
* Now
  * Integrate with Github api.  Will require auth flow
  * Start with a list of repos
  * Persistence of retreived data to dynamo for caching
  * Background streaming task e.g. trawl API to refresh a user's data 
  * Github actions for dep management, linting etc
* Later
  * Deploy to AWS using Terraform
 