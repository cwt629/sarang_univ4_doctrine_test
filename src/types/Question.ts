export interface Answer {
    text: string;
    includes: string[];
    verses?: Verses[];
}

export interface Verses {
    from?: string;
    text?: string;
}

export interface Question {
    question: string;
    necessary?: boolean;
    answers: Answer[];
    verses?: Verses[]
}