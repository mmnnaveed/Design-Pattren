"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = require("./Messages");
{
    const textMessage = new Messages_1.Messages();
    textMessage.push("Hello");
    textMessage.push("How are you");
    textMessage.push("Fine");
    textMessage.push("Thank you");
    const iterator = textMessage.createIterator();
    textMessage.pop();
    while (iterator.hasNext()) {
        console.log(iterator.current());
        iterator.next();
    }
}
