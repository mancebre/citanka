import {detectWritingSystem} from "../utils/utils";
import { franc } from 'franc';

class SyllableBreaker {
    public textTitle: string[];
    public textBody: string[][];
    private language: string | undefined = undefined;
    private writingSystem: string | undefined = undefined;

    constructor(text: string, title: string) {
        this.textTitle = [];
        this.textBody = [];
        this.parseTextBody(text);
        this.parseTextTitle(title);
    }

    private parseTextTitle(title: string) : void {
        if (title.trim().length > 0) {
            this.writingSystem = detectWritingSystem(title);
            this.language = franc(title);
            console.log({
                value: title,
                language:this.language,
                writingSystem:this.writingSystem
            });
        }

        this.textTitle = this.breakWord(title);
    }

    private parseTextBody (text: string) : void {
        const lines = text.split('\n');

        for (let line of lines) {

            if (line.trim().length > 0) {
                this.writingSystem = detectWritingSystem(line);
                this.language = franc(line);
                console.log({
                    value: line,
                    language:this.language,
                    writingSystem:this.writingSystem
                });
            }

            const words = line.split(' ');
            for (let word of words) {
                const brokenWord = this.breakWord(word);
                this.textBody.push(brokenWord);
            }
            this.textBody.push(["\n"]);
        }

    }

    public getTextBody(): string[][] {
        return this.textBody;
    }

    public getTextTitle(): string[] {
        return this.textTitle;
    }

    private breakWord(word: string): string[] { // TODO Ovde bi trebalod a radi drugacije u zavisnosti od jezika i sistema pisanja!!!
        word = word.trim();

        if (word.length < 4) {
            return [word];
        }

        if (word.startsWith("нај") || word.startsWith("Нај") || word.startsWith("НАЈ")) {
            const naj = word.slice(0, 3);
            const newWord = word.slice(3);
            const newWordBroken = this.breakWord(newWord);
            if (Array.isArray(newWordBroken)) {
                return [naj, ...newWordBroken];
            } else {
                return [naj, newWord];
            }
        }

        const samoglasnici = ["а", "е", "и", "о", "и", "у", "А", "Е", "И", "О", "И", "У"];
        const suglasnici = ["б", "в", "г", "д", "ђ", "ж", "з", "ј", "к", "л", "љ", "м", "н", "њ", "п", "р", "с", "т", "ћ", "ф", "х", "ц", "ч", "џ", "ш", "Б", "В", "Г", "Д", "Ђ", "Ж", "З", "Ј", "К", "Л", "Љ", "М", "Н", "Њ", "П", "Р", "С", "Т", "Ћ", "Ф", "Х", "Ц", "Ч", "Џ", "Ш"];
        const znakovi = [".", ",", ";", ":", "-", "?", "!"];
        const r = "р";
        const wordArr = Array.from(word);

        const result: string[] = [];
        let resultKey = 0;
        result[resultKey] = "";

        if (wordArr[0] === r && suglasnici.includes(wordArr[1])) {
            resultKey++;
            result[resultKey] = "";
        }

        for (let i = 0; i < wordArr.length; i++) {
            const char = wordArr[i];
            result[resultKey] += char;

            if (i + 1 === word.length || !wordArr[i + 2] || znakovi.includes(wordArr[i + 2])) {
                continue;
            }

            if (char === r && suglasnici.includes(wordArr[i - 1]) && suglasnici.includes(wordArr[i + 1])) {
                resultKey++;
                result[resultKey] = "";
            }

            if (samoglasnici.includes(char)) {
                resultKey++;
                result[resultKey] = "";
            }
        }

        return result;
    }
}

export default SyllableBreaker;
