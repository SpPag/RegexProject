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
    <div className="bg-white shadow-lg rounded-xl p-4 my-4 w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">Match this string:</h3>
      <p className="bg-gray-100 p-2 rounded mb-4 whitespace-pre-wrap">{question}</p>
      <h4 className="text-md font-medium">Desired match:</h4>
      <p className="mb-4 text-blue-600">{targetMatch}</p>

      {/* Quiz Options / Answers*/}
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelection(option)}
            className={`w-full px-4 py-2 rounded border text-left hover:cursor-pointer ${selected === option
              ? option === correctAnswer
                ? "bg-green-100 border-green-500"
                : "bg-red-100 border-red-500"
              : "bg-gray-50 border-gray-300 hover:bg-gray-100"
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
          <div className="mt-6 bg-gray-100 p-4 rounded">
            <h5 className="font-semibold mb-2">Regex Match Result:</h5>
            {highlightedResult ? (
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
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Next Quiz
        </button>
      )}
    </div>
  );
};

export { MultipleChoiceQuiz };
export type { MultipleChoiceQuizProps };
