export enum TokenType {
  TOKEN_EOF = '\0',
  TOKEN_ERROR = 'TOKEN_ERROR',
  TOKEN_IDENTIFIER = 'TOKEN_IDENTIFIER',
  
  // Keywords
  TOKEN_DESCRIBE = 'TOKEN_DESCRIBE',                                     // describe
  TOKEN_DEFINE = 'TOKEN_DEFINE',
  TOKEN_DECLARE = 'TOKEN_DECLARE',                                      // declare
  TOKEN_AS = 'TOKEN_AS',                                           // as
  TOKEN_WIDTH = 'TOKEN_WIDTH',
  TOKEN_HEIGHT = 'TOKEN_HEIGHT',

  // TYPES
  TOKEN_COMPONENT = 'TOKEN_COMPONENT',                                    // Component
  TOKEN_INTERFACE = 'TOKEN_INTERFACE',                                    // Interface
  TOKEN_FLOW = 'TOKEN_FLOW',                                         // Flow

  // Single character
  TOKEN_STRING = 'TOKEN_STRING',
  TOKEN_NUMBER = 'TOKEN_NUMBER',
  TOKEN_LEFT_BRACE = 'TOKEN_LEFT_BRACE', 
  TOKEN_RIGHT_BRACE = 'TOKEN_RIGHT_BRACE',                // '{' and '}'
  TOKEN_LEFT_PAREN = 'TOKEN_LEFT_PAREN', 
  TOKEN_RIGHT_PAREN = 'TOKEN_RIGHT_PAREN',                // '(' and ')'
  TOKEN_LEFT_BRACKET = 'TOKEN_LEFT_BRACKET',
  TOKEN_RIGHT_BRACKET = 'TOKEN_RIGHT_BRACKET',            // '[' and ']'
  TOKEN_SEMICOLEN = 'TOKEN_SEMICOLEN',
  TOKEN_COLEN = 'TOKEN_COLEN',                       // ';' and ':'
  TOKEN_COMMA = 'TOKEN_COMMA'                                           // ''
}