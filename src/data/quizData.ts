import { MultipleChoiceQuizProps } from '@/components/MultipleChoiceQuiz';

const quizData: MultipleChoiceQuizProps[] = [
    {
      id: 1,
      question: "all for one, and one for all",
      targetMatch: "the first instance of 'all'",
      options: ["^all/g", "all/g", "all/B/g", "all$/g"],
      correctAnswer: "^all/g"
    },
    {
      id: 2,
      question: "The quick brown fox jumps over the lazy dog, without disturbing the other dog",
      targetMatch: "the second instance of 'dog' at the end of the sentence",
      options: ["dog", "dog$", "^dog", "fox$"],
      correctAnswer: "dog$"
    },
    {
      id: 3,
      question: "A hotdog doesn't contain dog... or does it?",
      targetMatch: "the word 'dog'",
      options: ["dog/g", "dog\\b/g", "\\bdog/g", "^dog/g"],
      correctAnswer: "\\bdog/g"
    },
    {
      id: 4,
      question: "It's not just any ball, it's a football",
      targetMatch: "the 'ball' part of 'football'",
      options: ["\\bball/g", "ball\\B/g", "^ball/g", "\\Bball/g"],
      correctAnswer: "\\Bball/g"
    },
    {
      id: 5,
      question: "apple banana apple orange",
      targetMatch: "the first 'apple' at the start of the string",
      options: ["^apple", "apple$", "apple/g", "\\bapple/g"],
      correctAnswer: "^apple"
    },
    {
      id: 6,
      question: "The password is pass123 (pass)",
      targetMatch: "the exact word 'pass' (not part of 'password')",
      options: ["pass", "\\bpass\\b", "pass$", "\\Bpass"],
      correctAnswer: "\\bpass\\b"
    },
    {
      id: 7,
      question: "win win win",
      targetMatch: "all occurrences of 'win'",
      options: ["win", "^win", "win/g", "win$"],
      correctAnswer: "win/g"
    },
    {
      id: 8,
      question: "Python is better than python",
      targetMatch: "both 'Python' and 'python'",
      options: ["\\bpython\\b", "python", "Python", "python/gi"],
      correctAnswer: "python/gi"
    },
    {
      id: 9,
      question: "Order #123: 5 items",
      targetMatch: "all digit sequences in the string ('123' and '5')",
      options: ["\\d+/g", "\\d/g", "[0-9]", "\\d"],
      correctAnswer: "\\d+/g"
    },
    {
      id: 10,
      question: "Contact me at user@example.com for USA support or user@example.de for Germany support, or visit fake@domain",
      targetMatch: "the valid-looking .com email (user@example.com)",
      options: [
        "\\w+@\\w+\\.\\w+/g",
        "\\b\\w+@\\w+\\.com\\b/g",
        "\\S+@\\S+/g",
        "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\\b/g"
      ],
      correctAnswer: "\\b\\w+@\\w+\\.com\\b/g",
    },
    {
      id: 11,
      question: "Dates: 2023-01-15, 1999-12-31, 01-01-2023, 19999-120-310",
      targetMatch: "the (correct) dates in YYYY-MM-DD format",
      options: [
        "[0-9]+-[0-9]{2}-[0-9]{2}/g",
        "\\d+-\\d+-\\d+/g",
        "\\d{4}-\\d{2}-\\d{2}/g",
        "^\\d{4}-\\d{2}-\\d{2}$/g"
      ],
      correctAnswer: "\\d{4}-\\d{2}-\\d{2}/g"
    },
    {
      id: 12,
      question: "aaa aaaa aaaaa",
      targetMatch: "sequences of exactly 4 'a's",
      options: ["a{4}", "a+", "a{3,5}/g", "a{4}/g"],
      correctAnswer: "a{4}/g"
    },
    {
      id: 13,
      question: "100, 1000, 10000, 100000",
      targetMatch: "numbers with 3 to 5 digits",
      options: ["\\b\\d{3,5}\\b/g", "\\d{3,}/g", "\\d{5}", "[0-9]+"],
      correctAnswer: "\\b\\d{3,5}\\b/g"
    },
    {
      id: 14,
      question: "colour color colouur colouuur",
      targetMatch: "both 'colour' and 'color'",
      options: ["colou*r/g", "colou?r/g", "colou+r/g", "colou{0,1}r"],
      correctAnswer: "colou?r/g"
    },
    {
      id: 15,
      question: "while 𝒞 is a math symbol \u{1F643}, C is a letter",
      targetMatch: "the Unicode math symbol '𝒞'",
      options: ["\\p{Letter}/u", "\\p{Symbol}/u", "\\u{1D49E}/u", "C"],
      correctAnswer: "\\u{1D49E}/u"
    },
    {
      id: 16,
      question: "First line\nSecond line\nThird line",
      targetMatch: "the word at the start of each line",
      options: ["\\b\\w+\\b/g", "^\\w+/g", "\\w+$/gm", "^\\w+/gm"],
      correctAnswer: "^\\w+/gm"
    },
    {
      id: 17,
      question: "The price is $19.99 and €15.50",
      targetMatch: "both currency amounts ($19.99 and €15.50)",
      options: [
        "[$€][0-9]+\\.[0-9]{2}/g",
        "\\p{Sc}\\d+\\.\\d{1}/gu",
        "\\$\\d+\\.\\d{2}/g",
        "\\p{Symbol}\\d+\\.\\d+$/gu"
      ],
      correctAnswer: "[$€][0-9]+\\.[0-9]{2}/g"
    },
    {
      id: 18,
      question: "Find 🐶🐱🦊 in this emoji-enriched text",
      targetMatch: "the sequence of all three emojis",
      options: [
        "\\p{Emoji}/u",
        "🐶🐱🦊",
        "\\p{Emoji_Presentation}/gu",
        "[\\u{1F436}-\\u{1F98A}]/gu"
      ],
      correctAnswer: "🐶🐱🦊"
    },
    {
      id: 19,
      question: "hello\nworld\nhello universe",
      targetMatch: "'hello' at the start and 'hello' followed by space",
      options: [
        "^hello\\b.*/gm",
        "hello.*/gs",
        "^hello.?/gm",
        "hello\\s.*/g"
      ],
      correctAnswer: "^hello.?/gm"
    },
    {
      id: 20,
      question: "'apple jam' 'banana' 'cherry'",
      targetMatch: "The first quoted text, so ''apple jam''",
      options: [
        "'.*'",
        "'\\w+'",
        "'[a-z]+'/g",
        "'.*?'"
      ],
      correctAnswer: "'.*?'",
    },
    {
      id: 21,
      question: "|special$chars| |normal|",
      targetMatch: "The text inside the pipes (including the pipes), so '|special$chars|' and '|normal|'",
      options: [
        "\\|[^\\|]+\\|/g",
        "\\|.*\\|",
        "\\|\\w+\\|",
        "\\|[^\\|]+\\|"
      ],
      correctAnswer: "\\|[^\\|]+\\|/g",
    },
    {
      id: 22,
      question: "queue, queen, qat, Iraq",
      targetMatch: "All 'q' that are followed by 'u'",
      options: [
        "q/g",
        "q(?=u)/g",
        "qu/g",
        "q(?!u)/g"
      ],
      correctAnswer: "q(?=u)/g",
    }
];
  
export { quizData };