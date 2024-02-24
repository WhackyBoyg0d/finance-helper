interface Course {
    name: string;
    slides: Array<Slide>;
    questions: Array<MultiChoiceQuestion>;
}

interface Slide {
    title: string;
    body: Array<string>;
    image_source: string | null;
}

interface MultiChoiceQuestion {
    question: string;
    answer: string
}

