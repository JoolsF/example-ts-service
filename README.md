# Example Typescript service

Example TS Fastify-based web service, used for learning the TS language and related libraries.  

It implements a simple task management backend with a REST api.  A GraphQL may be added for learning purposes even though it is probably overkill.  This could be used to simplify queries around, for example, tags on different notes.


### TODO Dependencies

Now

  - [x] Vitest
  - [ ] Zod (validation)
  - [x] Axios (http client)
  - [x] Fastify (http server) 

Later

  - [ ] ElectroDB (Dynamo)
  - [ ] dd-trace-js (tracing)
  - [ ] pino (logging)
  - [ ] node-postgres

### TODO Requirements

Now
- [x] Refactor to use type over interface and return function not class
- [x] Simple note taking REST api
- [ ] Persistence of retreived data to dynamo for caching
- [ ] Github actions for dep management, linting etc

Later
  - [ ] User management
  - [ ] Note tags
  - [ ] Note 'due dates / alerts' e.g. a note can be tagged with a date to give the user a heads up on an event.  Background task
  - [ ] GraphQL API
  

## Docker

To package

``` bash
docker build --network=host --build-arg TZ=UTC -t example-ts-service .
```

To run

```bash
docker run -p 3000:3000 example-ts-service:latest
```
 
### To setup dynamo tables

`docker/setup-dynamo.sh`

### To list tables

`docker/list-tables.sh`
