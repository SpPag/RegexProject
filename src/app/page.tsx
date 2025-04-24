'use client' // needed for useState

import React, { useState } from "react";
import PatternCard from "@/components/PatternCard";
import PatternInfo from "@/components/PatternInfo";
import { Pattern } from "@/types/Pattern";

type Category = {
  category: string;
  patterns: Pattern[];
}

const regexData: Category[] = [
  {
    category: "Anchors",
    patterns: [
      {
        title: "^",
        description: "Matches the beginning of a line",
        example: "^Hello",
        result: "Matches if the string starts with 'Hello'",
      },
      {
        title: "$",
        description: "Matches the end of a line",
        example: "world$",
        result: "Matches if the string ends with 'world'",
      },
      {
        title: "\\b",
        description: "Matches word boundaries",
        example: "\\bHello or world\\b",
        result: "Matches if the string starts with 'Hello' or ends with 'world', respectively",
      },
      {
        title: "\\B",
        description: "Matches non-word boundaries",
        example: "\\Bello or rld\\B",
        result: "Matches if the string has 'ello' after the first character or 'worl' followed by at least one character, respectively",
      }
    ]
  },
  {
    category: "Predefined character classes",
    patterns: [
      {
        title: "[ ]",
        description: "Matches any character inside the brackets",
        example: "[abc]",
        result: "Matches 'a', 'b', or 'c'",
      },
      {
        title: "[^]",
        description: "Matches any character not inside the brackets",
        example: "[^abc]",
        result: "Matches any character except 'a', 'b', or 'c'",
      },
      {
        title: "[a-z]",
        description: "Matches any lowercase letter",
        example: "abc",
        result: "Matches 'a', 'b', or 'c'",
      },
      {
        title: "[A-Z]",
        description: "Matches any uppercase letter",
        example: "ABC",
        result: "Matches 'A', 'B', or 'C'",
      },
      {
        title: "[0-9]",
        description: "Matches any digit (0-9)",
        example: "123",
        result: "Matches '1', '2', or '3'",
      },
      {
        title: ".",
        description: "Matches any character except line terminators",
        example: "abc.",
        result: "Matches 'a', 'b', or 'c'",
      },
      {
        title: "\\d",
        description: "Matches any digit (equivalent to [0-9])",
        example: "abc123",
        result: "Matches 1, 2, 3",
      },
      {
        title: "\\D",
        description: "Matches any character that is not a digit (equivalent to [^0-9])",
        example: "abc123",
        result: "Matches a, b, c",
      },
      {
        title: "\\w",
        description: "Matches any alphanumeric character from the Unicode Basic Latin alphabet, including the underscore (equivalent to [a-zA-Z0-9_])",
        example: "abc123_",
        result: "Matches a, b, c, 1, 2, 3, _",
      },
      {
        title: "\\W",
        description: "Matches any character that is not an alphanumeric character from the Unicode Basic Latin alphabet, excluding the underscore (equivalent to [^a-zA-Z0-9_])",
        example: "abc123_%",
        result: "Matches %",
      },
      {
        title: "\\s",
        description: "Matches any whitespace character",
        example: "abc\\n123",
        result: "Matches \\n",
      },
      {
        title: "\\S",
        description: "Matches any character that is not a whitespace character",
        example: "abc\\n123",
        result: "Matches a, b, c, 1, 2, 3",
      },
      {
        title: "\\0",
        description: "Matches the null character",
        example: "In low-level languages, strings as stored with a null character at the end (i.e. 'hello' is stored as 'hello\\0').",
        result: "Matches the final character in the 'hello\\0' example",
      }
    ]
  }
]

// use this to continue the patterns https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null); // track selected category
  const [selectedPattern, setSelectedPattern] = useState<Pattern | null>(null); // track selected pattern

const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const found = regexData.find((cat) => cat.category === event.target.value); // find the selected category, otherwise return undefined
  setSelectedCategory(found ?? null); // set the selected category to the one found, or null if undefined
  setSelectedPattern(null); // set the selected pattern to null so that the information box is hidden
};

const handlePatternClick = (pattern: Pattern) => {
  if (selectedPattern === pattern) {
    setSelectedPattern(null);
  }
  else {
  setSelectedPattern(pattern);
  }
};

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
{/* 
      {selectedCategory && (
          <div className="flex flex-wrap gap-4 justify-center">
            {selectedCategory.patterns.map((pattern) => (
              <div className="w-1/5">
                <PatternCard
                  key={pattern.title}
                  title={pattern.title}
                  description={pattern.description}
                  example={pattern.example}
                  result={pattern.result}/>
              </div>
            ))}
          </div>
      )} */}

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
   {/* {selectedPattern && (
        <div className="border p-6 rounded-lg bg-gray-50 shadow-lg mt-6">
          <h2 className="text-2xl font-semibold">{selectedPattern.title}</h2>
          <p className="mb-2 text-gray-700">{selectedPattern.description}</p>
          <p>
            <span className="font-semibold">Example:</span> {selectedPattern.example}
          </p>
          <p>
            <span className="font-semibold">Result:</span> {selectedPattern.result}
          </p>
        </div>
      )} */}

    {selectedPattern && (
      <PatternInfo pattern={selectedPattern} />
    )}


  </div>
// have quizes that present a text along with a regex pattern and ask the user to figure out if anything will match. No checks, just a "show answer" button that displays the answer to the user
  );
}
