import React, { useState } from "react";

const MultipleChoiceQuizResultHighlighted = (match: string) => {
    return `<span class="bg-yellow-200 border border-stone-400 rounded px-1 hover:bg-yellow-300 transition-colors duration-200">${match}</span>`
}

export { MultipleChoiceQuizResultHighlighted };