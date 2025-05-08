'use client';
import React, { useState } from "react";
import { MultipleChoiceQuizResultHighlighted } from "@/components/MultipleChoiceQuizResultHighlighted";

interface MultipleChoiceQuizProps {
  id: number;
  question: string;
  targetMatch: string;
  options: string[];
  correctAnswer: string;
  onNext?: () => void; // Optional callback for parent to handle next quiz logic
  onComplete?: (id: string) => void; // Optional callback for parent to handle quiz completion
}

// this tracks whether there's a pattern match. If not, the regexResult will just display "No match"
 let noMatch:boolean = false;
 
const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
  id,
  question,
  targetMatch,
  options,
  correctAnswer,
  onNext,
  onComplete
}) => {
  const [selected, setSelected] = useState<string | null>(null); // track selected option
  const [feedback, setFeedback] = useState<string>(""); // track feedback
  const [highlightedResult, setHighlightedResult] = useState<React.ReactNode | null>(null); // track match result

  const handleSelection = (option: string) => {
    setSelected(option);
    setFeedback(option === correctAnswer ? "✅ Correct!" : "❌ Try again");
    regexMatchResult(option);

    if (option === correctAnswer) { // if the selected option is correct, call the onComplete method
      onComplete?.(id.toString());
    }
  };

  const regexMatchResult = (rawPattern: string) => {

    const lastSlashIndex: number = rawPattern.lastIndexOf('/'); // get the index of the last slash (which separates the pattern from the flags). Returns -1 if not found
    const pattern: string = lastSlashIndex !== -1 ? rawPattern.slice(0, lastSlashIndex) : rawPattern; // slice the pattern string up to the last slash if it exists, otherwise use the entire string
    const flags: string = lastSlashIndex !== -1 ? rawPattern.slice(lastSlashIndex + 1) : ''; // slice the flags string starting after the last slash if they exist, otherwise use an empty string
    const regex = new RegExp(pattern, flags); // create a regex with the pattern and flags. It automatically treats '//' as '/' in the pattern. Flags are optional and an empty string is treated as no flags, which is the default behavior
    const highlighted = question.replace(regex, (match) => MultipleChoiceQuizResultHighlighted(match)); // highlight the matched parts of the string
    
    // Check if the output (highlighted) is the same as the question. If so, there was no match, and the noMatch boolean should be set to true. Otherwise, it should be set to false
    if (highlighted == question) {
      noMatch = true;
    }
    else {
      noMatch = false;
    }

    setHighlightedResult(highlighted);
  };

  const handleNext = () => {
    setSelected(null);
    setFeedback("");
    if (onNext) {
      onNext(); // Let parent handle what's next
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-4 my-4 w-full max-w-2xl mx-auto dark:bg-zinc-800 dark:text-zinc-300">
      <h3 className="text-lg font-semibold mb-2">Match this string:</h3>
      <p className="bg-gray-100 p-2 rounded mb-4 whitespace-pre-wrap dark:bg-zinc-800 dark:text-zinc-300">{question}</p>
      <h4 className="text-md font-medium dark:text-zinc-300">Desired match:</h4>
      <p className="mb-4 text-blue-600 dark:text-blue-500">{targetMatch}</p>

      {/* Quiz Options / Answers*/}
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelection(option)}
            className={`w-full px-4 py-2 rounded border text-left hover:cursor-pointer dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition-colors duration-200 ${selected === option
              ? option === correctAnswer
                ? "bg-green-100 border-green-500 dark:border-green-700"
                : "bg-red-100 border-red-500 dark:border-red-700"
              : "bg-gray-50 border-gray-300 hover:bg-gray-100 dark:border-zinc-500"
              }`} 
          >
            {option}
          </button>
        ))}
      </div>

      {/* If an option is selected, show feedback and match result */}
      {selected && (
        <>
          <p className="mt-4 font-semibold">{feedback}</p> {/* Feedback */}

          {/* Match Result */}
          <div className="mt-6 bg-gray-100 p-4 rounded dark:bg-zinc-700 dark:text-zinc-300 dark:border dark:border-zinc-500">
            <h5 className="font-semibold mb-2">Regex Match Result:</h5>
            {/* Check if there is a match in the result. If so, highlight it, otherwise display "No match" */}
            {!noMatch ? (
              <div>
                <pre
                  className="whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: highlightedResult || "No match" }}
                />
              </div>
            ) : (
              <p className="text-red-600">No match</p>
            )}
          </div>
        </>
      )}

      {/* If the correct answer is selected, show the next button */}
      {selected === correctAnswer && (
        <button
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-[#1738b5] dark:hover:bg-[#1d41be] dark:text-zinc-300 transition"
        >
          Next Quiz
        </button>
      )}
    </div>
  );
};

export { MultipleChoiceQuiz };
export type { MultipleChoiceQuizProps };
