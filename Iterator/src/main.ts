import { Messages } from "./Messages";

{
    const textMessage = new Messages();
    textMessage.push("Hello");
    textMessage.push("How are you");
    textMessage.push("Fine");
    textMessage.push("Thank you");

    const iterator = textMessage.createIterator();
    textMessage.pop();
    while(iterator.hasNext()){
        console.log(iterator.current());
        iterator.next();
    }
}