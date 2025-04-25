import { MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';

const quizData: MultipleChoiceQuizProps[] = [
    {
      question: "The quick brown fox jumps over the lazy dog",
      targetMatch: "quick",
      options: ["quick", "\\bquick\\b", "qu.*k", "^quick"],
      correctAnswer: "\\bquick\\b"
    },
    {
      question: "abc123xyz",
      targetMatch: "123",
      options: ["\\d+", "[0-9]{3}", "123", "[a-z]+"],
      correctAnswer: "\\d+"
    },
    // Add more questions here
];
  
export { quizData };