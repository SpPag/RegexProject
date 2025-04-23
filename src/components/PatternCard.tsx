'use client';
import React, { useState } from "react";

interface PatternCardProps {
    title: string;
    description: string;
    example: string;
    result: string;
}

export default function PatternCard({ title, description, example, result }: PatternCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <button 
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold"
                onClick={()=> setIsExpanded(!isExpanded)}
                >
                {title}
                </button>

            {isExpanded && (
                <div className="bg-white px-4 py-3">
                    <p className="mb-2 text-gray-700">{description}</p>
                    <p><span className="font-semibold">Example:</span> {example}</p>
                    <p><span className="font-semibold">Result:</span> {result}</p>
                </div>
            )}
        </div>
    );
}