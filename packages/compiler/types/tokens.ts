export enum TokenType {
  TOKEN_EOF,
  TOKEN_ERROR,
  TOKEN_IDENTIFIER,
  // Keywords
  TOKEN_DEFINE,                                       // define
  TOKEN_DESCRIBE,                                     // describe
  TOKEN_DECLARE,                                      // declare

  // TYPES
  TOKEN_COMPONENT,                                    // Component
  TOKEN_INTERFACE,                                    // Interface
  TOKEN_FLOW,                                         // Flow

  // Single character
  TOKEN_LEFT_BRACE, TOKEN_RIGHT_BRACE,                // '{' and '}'
  TOKEN_LEFT_PAREN, TOKEN_RIGHT_PARENT,               // '(' and ')'
  TOKEN_LEFT_BRACKET, TOKEN_RIGHT_BRACKET,            // '[' and ']'
  TOKEN_DOUBLE_QUOTE, TOKEN_SINGLE_QUOTE              // '"' and '''
}