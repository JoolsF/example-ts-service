# Example Typescript service

Example TS Fastify-based web service, used for learning the TS language and related libraries.  

It implements a simple task management backend with a REST api.  A GraphQL may be added for learning purposes even though it is probably overkill.  
This could be used to simplify queries around, for example, tags on different notes.


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
  * Simple note taking REST api
  * Persistence of retreived data to dynamo for caching
  * Github actions for dep management, linting etc
* Later
 * User management
 * Note tags
 * Note 'due dates / alerts' e.g. a note can be tagged with a date to give the user a heads up on an event.  Background task
*  GraphQL API
 
