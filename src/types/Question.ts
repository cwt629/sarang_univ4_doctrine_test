export interface Answer {
    text: string;
    includes: string[];
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