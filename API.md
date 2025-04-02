# API

The below is an idea for a basic API to implement

POST /auth/login (Logs in a user and returns a JWT)

```json 
{
  "username": "string",
  "password": "string"
}

{
  "token": "JWT_TOKEN"
}

```
POST /auth/register (Registers a new user)

```json
{
  "username": "string",
  "password": "string"
}
{
  "message": "User registered successfully."
}
```

POST /notes (create a new note)

```json
{
  "title": "string",
  "content": "string",
  "tags": ["string"]
}

{
  "id": "note_id",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "createdAt": "timestamp"
}
```

GET /notes (list all notes, paginated)

```json
[
  {
    "id": "note_id",
    "title": "string",
    "tags": ["string"],
    "createdAt": "timestamp"
  }
]
```

GET /notes/:id (get note by id)
```json
{
  "id": "note_id",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "createdAt": "timestamp",
  "dueDate": "timestamp"
}

```

PUT /notes/:id (update existing notes)
```json
{
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "dueDate": "timestamp"
}
{
  "id": "note_id",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "dueDate": "timestamp"
}
```

DELETE /notes/:id (delete a note)
```json
{
  "message": "Note deleted successfully."
}

```

GET /notes/tags/:tag (get notes by specific tag)
```json
[
  {
    "id": "note_id",
    "title": "string",
    "tags": ["string"],
    "createdAt": "timestamp"
  }
]

```

POST /notes/url (create a new note by scraping content from a URL)
```json
{
  "url": "string"
}

{
  "id": "note_id",
  "title": "string",
  "content": "scraped_content",
  "tags": ["string"]
}

```

POST /notes/share (share note with another user)
```json
{
  "noteId": "note_id",
  "recipientUsername": "string"
}
{
  "message": "Note shared successfully."
}
GET /notes/shares (list all shares)

```json
[
  {
    "noteId": "note_id",
    "sharedWith": "username",
    "sharedAt": "timestamp"
  }
]
```

DELETE /notes/shares/:id (delete a share with a specific user)

```json
{
  "recipientUsername": "string"
}
{
  "message": "Share deleted successfully."
}
```
