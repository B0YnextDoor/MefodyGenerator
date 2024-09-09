import {makeAutoObservable} from "mobx"
import {  IContent } from "../utils/interfaces";



const obj = {
        name: "",
        category: '',
        description: "",
        seo: [],
        advantages: [{
        name: "0",
        value: "",
    },
    {
        name: "1",
        value: "",
    },
    {
        name: "2",
        value: "",
    },
    {
        name: "3",
        value: "",
    }]
    };

class Market {
    content: IContent = obj

    constructor() {
        makeAutoObservable(this)
    }

    set(name: string, value: any): void {
        this.content[name] = value;
    }

    get(name: string): any {
        return this.content[name];
    }

    reset() {
        this.content = obj
    }

    getContent(): IContent {
        return this.content
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Market();