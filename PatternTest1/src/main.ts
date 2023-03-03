
/**
 * You’re building a word processor similar to Word. The user can add text or 
 * image elements to a document and then export it to a variety of different 
 * formats such as HTML, text, and so on. Note that if the selected format is HTML, all text and image elements are 
 * written to an HTML document. If the selected format is text, however, only 
 * text elements are written to a text file. What pattern you will use to solve this problem? and why?
 */
import { IElements } from "./Elements/IElements";
import { Image } from "./Elements/Image";
import { ImageElement } from "./Elements/ImageElement";
import { TextElement } from "./Elements/TextElement";
import { HTMLExport } from "./Export/HTMLExport";
import { IExport } from "./Export/IExport";
import { TextExport } from "./Export/TextExport";
import { NoteBook } from "./NoteBook";

{
    const noteBook = new NoteBook();
    noteBook.addElement(new TextElement("Text1"));
    noteBook.addElement(new ImageElement(new Image("First image", "png")));
    const elements: IElements[] = noteBook.getElements();
    const htmlExport: IExport = new HTMLExport(elements);
    htmlExport.export();
    const textElement = elements.filter(element => {return element instanceof TextElement})
    const textExport = new TextExport(textElement) ;
    textExport.export();
}