import { MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';

const quizData: MultipleChoiceQuizProps[] = [
    {
      question: "all for one, and one for all",
      targetMatch: "the first instance of 'all'",
      options: ["^all/g", "all/g", "all/B/g", "all$/g"],
      correctAnswer: "^all/g"
    },
    {
      question: "The quick brown fox jumps over the lazy dog, without disturbing the other dog",
      targetMatch: "the second instance of 'dog' at the end of the sentence",
      options: ["dog", "dog$", "^dog", "fox$"],
      correctAnswer: "dog$"
    },
    {
      question: "A hotdog doesn't contain dog... or does it?",
      targetMatch: "the word 'dog'",
      options: ["dog/g", "dog\\b/g", "\\bdog/g", "^dog/g"],
      correctAnswer: "\\bdog/g"
    },
    {
      question: "It's not just any ball, it's a football",
      targetMatch: "the 'ball' part of 'football'",
      options: ["\\Bball/g", "ball\\B/g", "^ball/g", "\\bball/g"],
      correctAnswer: "\\Bball/g"
    },
    {
      question: "apple banana apple orange",
      targetMatch: "the first 'apple' at the start of the string",
      options: ["^apple", "apple$", "apple/g", "\\bapple/g"],
      correctAnswer: "^apple"
    },
    {
      question: "The password is pass123 (pass)",
      targetMatch: "the exact word 'pass' (not part of 'password')",
      options: ["pass", "\\bpass\\b", "pass$", "\\Bpass"],
      correctAnswer: "\\bpass\\b"
    },
    {
      question: "win win win",
      targetMatch: "all occurrences of 'win'",
      options: ["win", "win/g", "^win", "win$"],
      correctAnswer: "win/g"
    },
    {
      question: "Python is better than python",
      targetMatch: "both 'Python' and 'python'",
      options: ["python/gi", "python", "Python", "\\bpython\\b"],
      correctAnswer: "python/gi"
    },
    {
      question: "Order #123: 5 items",
      targetMatch: "all digit sequences in the string ('123' and '5')",
      options: ["\\d", "\\d/g", "[0-9]", "\\d+/g"],
      correctAnswer: "\\d+/g"
    },
    {
      question: "Contact me at user@example.com for USA support or user@example.de for Germany support, or visit fake@domain",
      targetMatch: "the valid-looking .com email (user@example.com)",
      options: [
        "\\w+@\\w+\\.\\w+/g",
        "\\S+@\\S+/g",
        "\\b\\w+@\\w+\\.com\\b/g",
        "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b/g"
      ],
      correctAnswer: "\\b\\w+@\\w+\\.com\\b/g",
    },
    {
      question: "Dates: 2023-01-15, 1999-12-31, 01-01-2023, 19999-120-310",
      targetMatch: "the (correct) dates in YYYY-MM-DD format",
      options: [
        "\\d{4}-\\d{2}-\\d{2}/g",
        "\\d+-\\d+-\\d+/g",
        "[0-9]+-[0-9]{2}-[0-9]{2}/g",
        "^\\d{4}-\\d{2}-\\d{2}$/g"
      ],
      correctAnswer: "\\d{4}-\\d{2}-\\d{2}/g"
    }
];
  
export { quizData };