import React from "react";
import { Pattern } from "@/types/Pattern";

interface PatternInfoProps {
  pattern: Pattern;
}

const PatternInfoDefault: React.FC<PatternInfoProps> = ({ pattern }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6 border border-gray-200 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{pattern.title}</h2>
      <p className="mb-4">{pattern.description}</p>
      <div className="bg-gray-100 p-4 rounded mb-2">
        <strong>Example:</strong> <code>{pattern.example}</code>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <strong>Matches:</strong> <code>{pattern.result}</code>
      </div>
    </div>
  );
};

export { PatternInfoDefault };
