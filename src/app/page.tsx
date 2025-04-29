'use client' // needed for useState

import React, { useState } from "react";
import { PatternInfoDefault } from "@/components/PatternInfoDefault";
import { PatternInfoExampleMultiline } from "@/components/PatternInfoExampleMultiline";
import { PatternInfoExampleItalic } from "@/components/PatternInfoExampleItalic";
import { Pattern } from "@/types/Pattern";
import { MultipleChoiceQuiz, MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';
import { quizData } from '@/data/quizData';
import { Category } from "@/types/Category";
import { regexData } from "@/data/regexData";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); // track selected category
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null); // track selected pattern
  const [showQuiz, setShowQuiz] = useState(false); // track if the quiz should be shown
  const [currentQuiz, setCurrentQuiz] = useState<MultipleChoiceQuizProps | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const found = regexData.find((cat) => cat.category === event.target.value); // find the selected category, otherwise return undefined
    setSelectedCategory(found ?? null); // set the selected category to the one found, or null if undefined
    setSelectedPattern(null); // set the selected pattern to null so that the information box is hidden
    setCurrentQuiz(null); // set the current quiz to null
    setShowQuiz(false); // set the showQuiz state to false so that the quiz box is hidden
  };

  const handlePatternClick = (pattern: Pattern) => {
    if (selectedPattern === pattern) { // check if the pattern clicked is the pattern that's already selected
      setSelectedPattern(null); // if so, set the selected pattern to null to close the pattern information box
    }
    else {
      setSelectedPattern(pattern);
    }
  };

  const getRandomQuiz = (currentQuiz: MultipleChoiceQuizProps | null) => {
    if (quizData.length <= 1) // check if there's only one quiz available
    {
      return quizData[0]; // if so, return that quiz
    }
    else {
      let newQuiz: MultipleChoiceQuizProps;

      do {
        const randomIndex = Math.floor(Math.random() * quizData.length);
        newQuiz = quizData[randomIndex];
      }
      while (newQuiz === currentQuiz);

      return newQuiz;
    }
  };

  const handleShowQuiz = () => {
    if (showQuiz) {
      setShowQuiz(false);
    }
    else {
      setCurrentQuiz(getRandomQuiz(currentQuiz));
      setShowQuiz(true);
    }
  };

  const handleNextQuiz = () => {
    const nextQuiz = getRandomQuiz(currentQuiz);
    setCurrentQuiz(nextQuiz);
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Regex Reference Tool</h1>
      <div className="max-w-lg mx-auto">
        <label htmlFor="category" className="block text-lg mb-2 ">Choose a category:</label>
        <select
          id="category"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
          onChange={handleCategoryChange}
          defaultValue=""
        >
          <option value="" disabled>-- Select a category --</option>
          {regexData.map((c) => (
            <option key={c.category} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {selectedCategory && selectedCategory.patterns.map((pattern) => (
          <button
            key={pattern.title}
            className="border rounded-lg p-4 bg-gray-100 shadow-md hover:bg-gray-200"
            onClick={() => handlePatternClick(pattern)}
          >
            {pattern.title}
          </button>
        ))}
      </div>

      {/* Information Box */}
      {/* check if selectedPattern.renderMode is null. If so, use PatternInfoDefault. Otherwise, use the appropriate component */}

      {selectedPattern && (() => {
        switch (selectedPattern.renderMode) {
          case "exampleMultiline":
            return <PatternInfoExampleMultiline pattern={selectedPattern} />;
          case "exampleItalic":
            return <PatternInfoExampleItalic pattern={selectedPattern} />;
          default:
            return <PatternInfoDefault pattern={selectedPattern} />;
        }
      })()}

      <div className="mt-8">
        <button
          onClick={handleShowQuiz}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {`${showQuiz ? "Close" : "Show"} Quiz`} {/* toggle between "Show Quiz" and "Close Quiz" on click */}
        </button>
      </div>

      {/* make sure that both the showQuiz boolean is set to true and that currentQuiz is not null */}
      {showQuiz && currentQuiz && (
        <div className="mt-6">
          <MultipleChoiceQuiz {...currentQuiz} onNext={handleNextQuiz} />
        </div>
      )}

    </div>
  );
}
