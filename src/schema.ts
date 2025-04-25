const postNotesJsonSchema = {
    type: 'object',
    required: ['title', 'content', 'tags'],
    properties: {
        title: { type: 'string' },
        content: { type: 'string' },
        tags: { 
            type: 'string', 
            pattern: '^[a-zA-Z,]*$' // alpha chars, commas, empty string, no whitespace
        }
    }
};

export const postNotesBodySchema = {
    body: postNotesJsonSchema
}
