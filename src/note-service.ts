
import { Instant } from "@js-joda/core";
import { CreateNoteRequest, Note } from "./dto"
import { randomUUID } from "crypto";

export type NoteService = {
    createNote(note: CreateNoteRequest): Note
    getNote(id: string): Note | null
}

export function getNoteService(): NoteService {
    const notesDb = new Map<string, Note>();
    
    function createNote(req: CreateNoteRequest): Note {
        const id = randomUUID();
        const createdAt = Instant.now()
        const newNote: Note = {
            id,
            title: req.title,
            tags: req.tags.split(','),
            createdAt,
            lastUpdatedAt: createdAt
        };
        notesDb.set(id, newNote);
        return newNote;
    }
    function getNote(id: string): Note | null {
        return notesDb.get(id) || null;
    }

    return {
        createNote,
        getNote
    };

}
