# Example Typescript service

Example TS Fastify-based web service, used for learning the TS language and related libraries.  

It implements a simple note taking app. With the following features:

## Basic features
* User login and authentication via JWT
* Create a new note
* Read / list existing notes
* Update an existing note
* Delete a note
* Add tags to notes and list by tag

## Advanced features
* Create a new note via a URL.  Service scrapes the text from the site and persists it
* Share note with another user
* Note due date with alert to user on login when it is due.


See [API.md](API.md) for the API to implement.

### TODO Dependencies to add

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
