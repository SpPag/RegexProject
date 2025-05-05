import { MultipleChoiceQuiz, MultipleChoiceQuizProps } from "@/components/MultipleChoiceQuiz"
import { useEffect, useRef } from "react";

interface QuizModalProps {
    currentQuiz: MultipleChoiceQuizProps | null;
    onClose: () => void;
    onNext: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ currentQuiz, onClose, onNext }) => {
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close modal when pressing Escape key
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if (!currentQuiz) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-700/60 backdrop-blur-sm" onClick={onClose}>
            <div 
                ref={dialogRef}
                className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Stop event from bubbling up and closing the modal if one simply clicks inside it, i.e. to select an answer
            >
                <button 
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="p-6">
                    {/* Pass onNext down to MultipleChoiceQuiz */}
                    <MultipleChoiceQuiz {...currentQuiz} onNext={onNext} />
                </div>
                <div className="p-4 bg-gray-50 rounded-b-lg">
                    <button 
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export { QuizModal };