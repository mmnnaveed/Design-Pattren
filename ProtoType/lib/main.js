"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Document_1 = require("./Document");
{
    const document1 = new Document_1.Document("Document1", "This text for document 1");
    const document2 = document1.clone();
    console.log(document2);
}
