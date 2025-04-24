'use client';
import React, { useState } from "react";

interface MultipleChoiceQuizProps {
    question: string;
    targetMatch: string;
    options: string[];
    correctAnswer: string;
}

const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
    question,
    targetMatch,
    options,
    correctAnswer,
  }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string>('');
  
    const handleSelection = (option: string) => {
      setSelected(option);
      setFeedback(option === correctAnswer ? '✅ Correct!' : '❌ Try again');
    };
  
    return (
      <div className="bg-white shadow-lg rounded-xl p-4 my-4 w-full max-w-2xl mx-auto">
        <h3 className="text-lg font-semibold mb-2">Match this string:</h3>
        <p className="bg-gray-100 p-2 rounded mb-4">{question}</p>
        <h4 className="text-md font-medium">Desired match:</h4>
        <p className="mb-4 text-blue-600">{targetMatch}</p>
        <div className="space-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelection(option)}
              className={`w-full px-4 py-2 rounded border text-left ${
                selected === option
                  ? option === correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {selected && (
          <p className="mt-4 font-semibold">
            {feedback}
          </p>
        )}
      </div>
    );
  };

export { MultipleChoiceQuiz };