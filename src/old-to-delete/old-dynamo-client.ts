// import DynamoDB from "aws-sdk/clients/dynamodb";
// import { Entity } from 'electrodb';

// //https://electrodb.dev/en/core-concepts/quick-start/

// const client = new DynamoDB.DocumentClient({
//     region: 'eu-west-1',
//     endpoint: "http://localhost:8000", // Point to local DynamoDB
//     credentials: {
//         accessKeyId: "dummy",   // Dummy access key
//         secretAccessKey: "dummy" // Dummy secret key
//       }
// });

// const table = 'electro';

// const Book = new Entity({
//     model: {
//         entity: "book",
//         version: "1",
//         service: "store",
//     },
//     attributes: {
//         storeId: {
//             type: "string",
//         },
//         bookId: {
//             type: "string",
//         },
//         price: {
//             type: "number",
//             required: true,
//         },
//         title: {
//             type: "string",
//         },
//         author: {
//             type: "string",
//         },
//         condition: {
//             type: ["EXCELLENT", "GOOD", "FAIR", "POOR"] as const, //TODO avoid repetition here of DTO and Entity
//             required: true,
//         },
//         genre: {
//             type: "set",
//             items: "string",
//         },
//         published: {
//             type: "string",
//         },
//     },
//     indexes: {
//         byLocation: {
//             pk: {
//                 // highlight-next-line
//                 field: "pk",
//                 composite: ["storeId"],
//             },
//             sk: {
//                 // highlight-next-line
//                 field: "sk",
//                 composite: ["bookId"],
//             },
//         },
//         byAuthor: {
//             // highlight-next-line
//             index: "gsi1pk-gsi1sk-index",
//             pk: {
//                 // highlight-next-line
//                 field: "gsi1pk",
//                 composite: ["author"],
//             },
//             sk: {
//                 // highlight-next-line
//                 field: "gsi1sk",
//                 composite: ["title"],
//             },
//         },
//     },
//     // add your DocumentClient and TableName as a second parameter
// },
//     { client, table },
// )

// export async function createBook() {
//     await Book.create({
//         bookId: "beedabe8-e34e-4d41-9272-0755be9a2a9f",
//         storeId: "pdx-45",
//         author: "Stephen King",
//         title: "IT",
//         condition: "GOOD",
//         price: 15,
//         genre: ["HORROR", "THRILLER"],
//         published: "1986-09-15",
//       }).go();
// }

// type Book = {
//     storeId: string;
//     bookId: string;
//     price: number;
//     title?: string | undefined;
//     author?: string | undefined;
//     condition: "EXCELLENT" | "GOOD" | "FAIR" | "POOR";
//     genre?: string[] | undefined;
//     published?: string | undefined;
// }


// export async function getBook(): Promise<Book | null> {
//     const book = await Book.get({
//         bookId: "beedabe8-e34e-4d41-9272-0755be9a2a9f",
//         storeId: "pdx-45",
//       }).go();
      
//     return book.data || null;
// }
