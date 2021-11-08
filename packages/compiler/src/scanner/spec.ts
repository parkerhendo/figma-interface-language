import TokenType from '../types/tokenType';

export const Spec: [RegExp, TokenType | null][] = [
  // -----------------------------------------------
  // Whitespaces:

  [/^\s+/, null],
  // [/^\n/, "NEW_LINE"],

  // -----------------------------------------------
  // Comments:

  // Skip single-line comments:
  // [/^\/\/.*/, null],
  // Skip multi-line comments:
  // [/^\/\*[\s\S]*?\*\//, null],

  // -----------------------------------------------
  // Symbols, delimiters:
  
  [/^;/, TokenType.TOKEN_SEMICOLEN],
  [/^\{/, TokenType.TOKEN_LEFT_BRACE],
  [/^\}/, TokenType.TOKEN_RIGHT_BRACE],
  [/^\(/, TokenType.TOKEN_LEFT_PAREN],
  [/^\)/, TokenType.TOKEN_RIGHT_PAREN],
  [/^\,/, TokenType.TOKEN_COMMA],
  [/^\:/, TokenType.TOKEN_COLEN],

  // -----------------------------------------------
  // Keywords:
  [/^\bdeclare\b/, TokenType.TOKEN_DECLARE],
  [/^\bdescribe\b/, TokenType.TOKEN_DESCRIBE],
  [/^\bdefine\b/, TokenType.TOKEN_DEFINE],
  [/^\bas\b/, TokenType.TOKEN_AS],

  [/^\bwidth\b/, TokenType.TOKEN_WIDTH],
  [/^\bheight\b/, TokenType.TOKEN_HEIGHT],

  // -----------------------------------------------
  // Type:
  
  [/^\bcomponent\b/, TokenType.TOKEN_COMPONENT],
  [/^\binterface\b/, TokenType.TOKEN_INTERFACE],
  [/^\bflow\b/, TokenType.TOKEN_FLOW],
  
  // -----------------------------------------------
  // Identifier:
  [/^\w+/, TokenType.TOKEN_IDENTIFIER],

  // -----------------------------------------------
  // Strings:
  
  [/"[^"]*"/, TokenType.TOKEN_STRING],
  [/'[^']*'/, TokenType.TOKEN_STRING],

  // -----------------------------------------------
  // Strings:
  [/^\d+/, TokenType.TOKEN_NUMBER]
  
];
