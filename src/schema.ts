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

const registerUserSchema = {
    type: 'object',
    required: ['username', 'password'],
    properties: {
        username:
        {
            type: 'string',
            pattern: '^[a-zA-Z0-9]{5,}$' // at least 5 chars, alphanumeric only
        }, 
        password: 
        {
            type: 'string',
           pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{8,}$' // at least 8 chars, at least 1 alpha, 1 number and 1 symbol
        }
    }
}

export const registerUserBodySchema = {
    body: registerUserSchema
}
