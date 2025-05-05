'use client' // needed for useState

import React, { useEffect, useState } from "react";
import { PatternInfoDefault } from "@/components/PatternInfoDefault";
import { PatternInfoExampleMultiline } from "@/components/PatternInfoExampleMultiline";
import { PatternInfoExampleItalic } from "@/components/PatternInfoExampleItalic";
import { Pattern } from "@/types/Pattern";
import { MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';
import { quizData } from '@/data/quizData';
import { Category } from "@/types/Category";
import { regexData } from "@/data/regexData";
import { AllQuizzesCompletedMessage } from "@/components/AllQuizzesCompletedMessage";
import { QuizModal } from "@/components/QuizModal";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); // track selected category
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null); // track selected pattern
  const [currentQuiz, setCurrentQuiz] = useState<MultipleChoiceQuizProps | null>(null); // track current quiz
  const [completedQuizIds, setCompletedQuizIds] = useState<number[]>([]); // track completed quiz ids
  const [allQuizzesComplete, setAllQuizzesComplete] = useState(false); // track if all quizzes have been completed
  const [showQuizModal, setShowQuizModal] = useState(false); // track if the modal should be shown
  const [displayModalButton, setDisplayModalButton] = useState(true); // track if the 'Show Quiz (Modal)' button should be shown

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const found = regexData.find((cat) => cat.category === event.target.value); // find the selected category, otherwise return undefined
    setSelectedCategory(found ?? null); // set the selected category to the one found, or null if undefined
    setSelectedPattern(null); // set the selected pattern to null so that the information box is hidden
    setCurrentQuiz(null); // set the current quiz to null
  };

  const handlePatternClick = (pattern: Pattern) => {
    if (selectedPattern === pattern) { // check if the pattern clicked is the pattern that's already selected
      setSelectedPattern(null); // if so, set the selected pattern to null to close the pattern information box
    }
    else {
      setSelectedPattern(pattern);
    }
  };

  // check for duplicate id values among the quizzes and log to the console a warning that includes the id value
  const checkQuizDuplicates = () => {
    const ids = quizData.map(quiz => quiz.id);
    const idCounts = new Map<number, number>();

    for (const id of ids) {
      idCounts.set(id, (idCounts.get(id) || 0) + 1); // get the count of the id, or 0 if it doesn't exist, and add 1 to it
    }

    const duplicates = [...idCounts.entries()] // convert the map to an array of [id, count] pairs
      .filter(([_, count]) => count > 1) // create a new array with only the pairs where the count is greater than 1. The underscore is used to ignore the id
      .map(([id]) => id); // create a new array with only the ids. [id] grabs the first element of the pair and locally calls it 'id'

    if (duplicates.length > 0) {
      console.warn("Duplicate id values found in quizData:", duplicates);
    }
  };

  const getRandomQuiz = (completedQuizIds: number[]) => {
    // available are the quizzes that haven't already been completed
    const availableQuizzes = quizData.filter(quiz => !completedQuizIds.includes(quiz.id));

    if (availableQuizzes.length === 0) {
      return null; // No more quizzes left
    }
    else if (availableQuizzes.length === 1) {
      return availableQuizzes[0]; // If there's only one available quiz, return it
    }
    else {
      // return a random quiz from the available ones
      let newQuiz: MultipleChoiceQuizProps;

      // do-while loop to ensure that the newQuiz is not the same as the currentQuiz
      do {
        const randomIndex = Math.floor(Math.random() * availableQuizzes.length);
        newQuiz = availableQuizzes[randomIndex];
      } while (newQuiz === currentQuiz);

      return newQuiz;
    }
  };
  
  const handleQuizModal = () => {
    const nextQuiz = getRandomQuiz(completedQuizIds);
    setCurrentQuiz(nextQuiz);
    setShowQuizModal(!!nextQuiz); // Only show modal if we got a quiz
  };

  const handleCloseModal = () => {
    setShowQuizModal(false);
  };

  // executed when the 'Next Quiz' button is clicked
  const handleNextQuiz = () => {
    if (currentQuiz) { // add the current quiz id to the list of completed quiz ids (keep in mind that the 'Next Quiz' button is only shown if the selected answer is correct)
      setCompletedQuizIds((prevCompletedQuizIds) => {
        const updatedQuizIds = [...prevCompletedQuizIds, currentQuiz.id];
        // Now fetch next quiz based on updated completedQuizIds
        const nextQuiz = getRandomQuiz(updatedQuizIds);
        if (nextQuiz) { // if there is a next quiz (so if not all the quizzes have been completed), show it
          setCurrentQuiz(nextQuiz);
        }
        else { // if all the quizzes have been completed, set currentQuiz to null, hide the quiz modal, set allQuizzesComplete to true, and hide the 'Show Quiz (Modal)' button
          setCurrentQuiz(null);
          setShowQuizModal(false);
          setAllQuizzesComplete(true);
          setDisplayModalButton(false);
        }
        return updatedQuizIds; // return updated list of completed quiz IDs
      });
    }
  }

  // executed when the 'Restart Quiz' button is clicked. It resets all the state variables to their initial values
  const handleRestartQuiz = () => {
    setCompletedQuizIds([]);
    setAllQuizzesComplete(false);
    setCurrentQuiz(getRandomQuiz(completedQuizIds));
    setDisplayModalButton(true);
  };

  // call the method to check for duplicate id values among the quizzes and log an appropriate message to the console, if any are found. I use 'useEffect' to call this method when the component mounts, otherwise if I were to call it directly it would run twice on startup because React renders everything twice
  useEffect(() => {
    checkQuizDuplicates();
  });

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Regex Reference Tool</h1>
      <div className="max-w-lg mx-auto">
        <label htmlFor="category" className="block text-lg mb-2 ">Choose a category:</label>
        {/* Category Dropdown */}
        <select
          id="category"
          className="w-full border border-gray-300 rounded px-4 py-2 mb-6"
          onChange={handleCategoryChange}
          defaultValue=""
        >
          <option value="" disabled>-- Select a category --</option>
          {/* Map over regexData and render each category as an option */}
          {regexData.map((c) => (
            <option key={c.category} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>
      </div>

      {/* Pattern Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        {selectedCategory && selectedCategory.patterns.map((pattern) => (
          <button
            key={pattern.title}
            className="border rounded-lg p-4 bg-gray-100 shadow-md hover:bg-gray-200"
            onClick={() => handlePatternClick(pattern)} // call handlePatternClick when a pattern card is clicked
          >
            {pattern.title}
          </button>
        ))}
      </div>

      {/* Pattern Information Box */}
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

      {/* Shows 'Show Quiz (Modal)' button */}
      {displayModalButton && (
        <div className="mt-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={handleQuizModal}>Show Quiz (Modal)</button>
        </div>
      )}

      {/* Shows 'All Quizzes Completed' message and give option to restart */}
      {allQuizzesComplete && (
        <div className="mt-6">
          <AllQuizzesCompletedMessage onRestart={handleRestartQuiz} />
        </div>
      )}

      {/* Show the quiz modal when showQuizModal is true */}
      {showQuizModal && (
        <QuizModal currentQuiz={currentQuiz} onClose={handleCloseModal} onNext={handleNextQuiz}/>
      )}
    </div>
  );
}
