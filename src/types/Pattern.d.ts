interface Pattern {
    title: string;
    description: string;
    example: string;
    result: string;
    renderMode?: "exampleMultiline" | "exampleItalic"; // add as needed
};

export type { Pattern };