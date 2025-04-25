import { MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';

const quizData: MultipleChoiceQuizProps[] = [
    {
      question: "all for one, and one for all",
      targetMatch: "the first instance of 'all'",
      options: ["^all/g", "all/g", "all/B/g", "all$/g"],
      correctAnswer: "^all"
    },
    {
      question: "The quick brown fox jumps over the lazy dog and then the dog slept",
      targetMatch: "the second instance of 'dog' at the end of the sentence",
      options: ["dog", "dog$", "^dog", "fox$"],
      correctAnswer: "dog$"
    },
    {
      question: "A hotdog doesn't contain dog... or does it?",
      targetMatch: "the word 'dog'",
      options: ["dog\\g", "dog\\b\\g", "\\bdog\\g", "^dog\\g"],
      correctAnswer: "dog$"
    },
    {
      question: "It's not just any ball, it's a football",
      targetMatch: "the 'ball' part of 'football'",
      options: ["\\Bball\\g", "ball\\B\\g", "^ball\\g", "\\bball\\g"],
      correctAnswer: "\\Bball\\g"
    }
    
];
  
export { quizData };