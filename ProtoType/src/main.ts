import { Document } from "./Document";
import { IProtoType } from "./IProtoType";

{
    const document1 : IProtoType = new Document("Document1", "This text is for document 1");
    const document2 = document1.clone();

    console.log(document2);
}