import {TokenType} from './tokens';
import Token, {ErrorToken} from './Token';

/**
 * Tokenizer Spec.
 */
const Spec: [RegExp, TokenType | null][] = [
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



interface IScanner {
  source :string;
  cursor :number; 
  line   :number;

  init(str :string) :void;

  isAtEnd() :boolean;
  hasMore() :boolean;

  advance() :Token | null;

  match(regexp: RegExp, string :string | null) :any;
}

export default class Scanner implements IScanner {
  source :string;
  cursor :number;
  line   :number
  constructor() {
    this.source = '';
    this.cursor = 0;
    this.line = 0;
  } 

  init(str :string) :void {
    // console.log(str);
    this.source = str;
    this.cursor = 0;
    this.line = 1;
  }

  isAtEnd() :boolean {
    return this.cursor === this.source.length;
  }

  hasMore() :boolean {
    return this.cursor < this.source.length;
  }

  advance() :Token | null {

    if (!this.hasMore()) return null;

    const string = this.source.slice(this.cursor);

    for (const [regexp, type] of Spec) {
      const val = this.match(regexp, string);

      if (val == null) continue;

      if (type == null) return this.advance();

      const token = new Token(type, val);
      return token;
    }

    throw new Error(`Unexpected token: "${string[0]}`);
  }

  match(regexp :RegExp, string :string | null) :any {
    if (string == null) return null;

    const matched = regexp.exec(string);

    if (matched == null) return null;

    this.cursor += matched[0].length;
    return matched[0];
  }
}