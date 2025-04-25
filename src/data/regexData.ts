import { Category } from "@/types/Category";

// use this to continue the patterns https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
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

export { regexData };