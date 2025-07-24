import React from "react";
import { Pattern } from "@/types/Pattern";

interface PatternInfoProps {
  pattern: Pattern;
}

const PatternInfoExampleItalic: React.FC<PatternInfoProps> = ({ pattern }) => {

    // Split the example string based on "' against"
    const againstSeparator = " against ";

    const example = pattern.example;

    const [stringToMatch, regexPattern] = example.split(againstSeparator);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6 border border-gray-200 w-full max-w-4xl mx-auto dark:bg-zinc-800 dark:text-white dark:border-zinc-400">
      <h2 className="text-2xl font-semibold mb-2">{pattern.title}</h2>
      <p className="mb-4">{pattern.description}</p>

      {/* Example */}
      <div className="bg-gray-100 p-4 rounded mb-2 overflow-x-auto dark:bg-zinc-700 dark:text-white">
        <div className="flex">
          <strong className="mr-1.5">Example:</strong>
          <code className="mr-1">{stringToMatch}</code>
          <code className="pl-1.5">{'against'}</code>
          <code className="pl-2"><em>{regexPattern}</em></code>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded dark:bg-zinc-700 dark:text-white">
        <strong>Result:</strong> <code>{pattern.result}</code>
      </div>
    </div>
  );
};

export { PatternInfoExampleItalic };
