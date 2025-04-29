// src/components/PatternInfo.tsx
import React from "react";
import { Pattern } from "@/types/Pattern";

interface PatternInfoProps {
  pattern: Pattern;
}

const PatternInfoExampleMultiline: React.FC<PatternInfoProps> = ({ pattern }) => {

  // Split the example string based on the "match '" and "' against"
  const matchStart = "match '";
  const againstStart = "' against ";

  const example = pattern.example;

  const stringToMatch = example
  .split(matchStart)[1]
  .split(againstStart)[0];

  const regexPattern = example.split(againstStart)[1];

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6 border border-gray-200 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{pattern.title}</h2>
      <p className="mb-4">{pattern.description}</p>

      {/* Example */}
      <div className="bg-gray-100 p-4 rounded mb-2">
        <div className="flex">
          <strong className="mr-1">Example:</strong>
          <code className="mr-2">{'match '}</code>
          <code className="block whitespace-pre">{`'${stringToMatch}'`}</code>
          <code className="pl-8">{` against ${regexPattern}`}</code>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <strong>Matches:</strong> <code>{pattern.result}</code>
      </div>
    </div>
  );
};

export { PatternInfoExampleMultiline };
