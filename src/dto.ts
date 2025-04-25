import { Instant } from "@js-joda/core";

type Note = {
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
