import { Category } from "@/types/Category";

const regexData: Category[] = [
  {
    category: "Flags",
    patterns: [
      {
        title: "g",
        description: "Global search, doesn't stop after the first match",
        example: "match 'dog cat dog' against dog/g",
        result: "Matches all occurrences of 'dog' instead of just the first one",
      },
      {
        title: "i",
        description: "Case-insensitive matching",
        example: "match 'Ello, ello, ola, ciao and bonjour' against ello/gi",
        result: "Matches both 'Ello' and 'ello'.",
      },
      {
        title: "m",
        description: "Multiline matching, changes the behavior of ^ and $ to match the beginning and end of each line instead of the entire string",
        example: "match '1st place: Winnie\n2nd place: Piglet\n3rd place: Eeyore' against ^\\d/m",
        result: "Matches '1', '2' and '3'",
      },
      {
        title: "s",
        description: "Dot matches newlines as well",
        example: "match 'hello\nworld' against hello.*world",
        result: "Matches the entire string, since the dot also matches the newline character between 'hello' and 'world'",
        renderMode: "exampleMultiline",
      },
      {
        title: "u",
        description: "Enables full Unicode support in the regular expression",
        example: "match '𝒞' against /\\u{1D49E}/u",
        result: "Matches Unicode characters and code point escapes correctly",
      },
      {
        title: "y",
        description: "Enables 'sticky' matching, forcing the regex to start matching exactly at the `lastIndex` position. Works best when saving the regex in a variable and setting the `lastIndex` property",
        example: "match '123abc456' against const regex = /\\d+/y; regex.lastIndex = 3;",
        result: "Returns `null` (no match) because it only looks for digits starting at index 3",
        renderMode: "exampleItalic",
      }
    ]
  },
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
      },
      {
        title: "\\f",
        description: "Matches a form feed character",
        example: "abc\\f123",
        result: "Matches the form feed character between 'abc' and '123'",
      },
      {
        title: "\\n",
        description: "Matches a line feed character",
        example: "abc\\n123",
        result: "Matches the newline character between 'abc' and '123'",
      },
      {
        title: "\\r",
        description: "Matches a carriage return character",
        example: "abc\\r123",
        result: "Matches the carriage return character between 'abc' and '123'",
      },
      {
        title: "\\t",
        description: "Matches a horizontal tab character",
        example: "abc\\t123",
        result: "Matches the tab character between 'abc' and '123'",
      },
      {
        title: "\\v",
        description: "Matches a vertical tab character",
        example: "abc\\v123",
        result: "Matches the vertical tab character between 'abc' and '123'",
      },
      {
        title: "\\p{...}",
        description: "Matches any character with the specified Unicode property (requires 'u' flag)",
        example: "\\p{Letter} or \\p{Emoji}",
        result: "Matches any Unicode letter or emoji character respectively",
      },
      {
        title: "\\P{...}",
        description: "Matches any character without the specified Unicode property (requires 'u' flag)",
        example: "\\P{Letter}",
        result: "Matches any character that is not a Unicode letter",
      }
    ]
  },
  {
    category: "Quantifiers",
    patterns: [
      {
        title: "+",
        description: "Matches the preceding element one or more times (greedy)",
        example: "lo+l",
        result: "Matches strings like 'lol', 'loool' and 'looooool', where the 'l' must appear once, followed by at least one 'o', and then an 'l'",
      },
      {
        title: "*",
        description: "Matches the preceding item 0 or more times (greedy)",
        example: "bo*",
        result: "Matches 'b' in 'bicycle', 'bo' in 'bone', and 'boooo' in 'boooom'",
      },
      {
        title: "?",
        description: "Matches the preceding item 0 or 1 time (greedy). Also makes quantifiers lazy when used after them. Greedy means that it will match as many characters as possible, while lazy means that it will match as few characters as possible",
        example: "colou?r",
        result: "Matches both 'colour' and 'color'",
      },
      {
        title: "{n}",
        description: "Matches exactly n occurrences of the preceding item",
        example: "o{2}",
        result: "Matches 'oo' in boom, but not 'o' in bone",
      },
      {
        title: "{n,}",
        description: "Matches at least n occurrences of the preceding item",
        example: "a{2,}",
        result: "Doesn't match 'a' in 'candy', but matches all 'a's in 'caandy' and 'caaaaaaandy'",
      },
      {
        title: "{n,m}",
        description: "Matches at least n and at most m occurrences of the preceding item",
        example: "a{1,3}",
        result: "Matches 'a' in 'candy', first two 'a's in 'caandy', and first three 'a's in 'caaaaaaandy'",
      },
      {
        title: "+?",
        description: "Matches the preceding item 1 or more times (lazy)",
        example: "a+?",
        result: "Matches 'a' in 'caandy' instead of 'aa' (as + would do)",
      },
      {
        title: "*?",
        description: "Matches the preceding item 0 or more times (lazy)",
        example: "bo*?",
        result: "Matches 'b' in 'boooom' instead of 'boooo' (as * would do)",
      },
      {
        title: "??",
        description: "Matches the preceding item 0 or 1 time (lazy)",
        example: "e??le?",
        result: "Matches 'le' in 'angle' instead of 'el' (as ? would do in 'e?le?')",
      },
      {
        title: "{n,}?",
        description: "Matches at least n occurrences of the preceding item (lazy)",
        example: "a{2,}?",
        result: "Matches exactly two 'a's in 'caaaaaandy' instead of all 'a's",
      },
      {
        title: "{n,m}?",
        description: "Matches at least n and at most m occurrences of the preceding item (lazy)",
        example: "a{1,3}?",
        result: "Matches exactly one 'a' in 'caaaaaandy' instead of three 'a's",
      }
    ]
  },
  {
    category: "Lookaheads",
    patterns: [
      {
        title: "Positive lookahead (?=...)",
        description: "Matches the pattern only if it's followed by what's specified after '?='",
        example: "cat(?=alyst)",
        result: "Matches 'cat' in 'catalyst' but not in 'rains cats and dogs'",
      },
      {
        title: "Negative lookahead (?!...)",
        description: "Matches the pattern only if it's NOT followed by what's specified after '?='",
        example: "cat(?!alyst)",
        result: "Matches 'cat' in 'rains cats and dogs' but not in 'catalyst'",
      },
    ]
  }
]

export { regexData };