import { Instant } from "@js-joda/core";

export type Note = {
    id: string;
    title: string;
    tags: string[];
    createdAt: Instant;
    lastUpdatedAt: Instant;
}

type Notes = Note[]

type NotesResponse = {
    notes: Notes;
}

export type CreateNoteRequest = {
    title: string, 
    context: string,
    tags: string
}
