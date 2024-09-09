export interface IAdvantages {
    name: string;
    value: string;
}

export interface IContent {
    [key: string]: any;
    name: string;
    category: string;
    description: string;
    seo: Array<string>;
    advantages: Array<IAdvantages>;
}

export interface IResult {
    status: string;
    content: string;
    date: string;
    name?: string;
    description?: string;
    seo?: Array<string>;
    advantages?: Array<IAdvantages>;
    type?: string;
    mass_file: string;
}
