const MultipleChoiceQuizResultHighlighted = (match: string) => {
    return `<span class="border bg-yellow-200 border-stone-400 rounded px-1 hover:bg-yellow-300 hover:border-stone-800 dark:bg-violet-800 dark:border-zinc-500 dark:hover:bg-violet-700 dark:hover:border-stone-500 transition-colors duration-200">${match}</span>`
}

export { MultipleChoiceQuizResultHighlighted };