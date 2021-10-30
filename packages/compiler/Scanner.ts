import {isAtEnd} from './utils/isAtEnd';
import {TokenType} from './types/tokens';
import Token, {ErrorToken} from './Token';

import {isAlpha} from './utils/isAlpha';
import {isDigit} from './utils/isDigit';

/**
 * Tokenizer Spec.
 */
const Spec: any = [
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
  
  [/^;/, ';'],
  [/^\{/, '{'],
  [/^\}/, '}'],
  [/^\(/, '('],
  [/^\)/, ')'],
  [/^\,/, ','],
  [/^\:/, ':'],

  // -----------------------------------------------
  // Keywords:
  [/^\bdeclare\b/, 'declare'],
  [/^\bdescribe\b/, 'describe'],
  [/^\bgroup\b/, 'group'],
  [/^\bas\b/, 'as'],
  [/^\bdirection\b/, 'direction'],
  [/^\bgap\b/, 'gap'],
  [/^\bpadding\b/, 'padding'],


  // -----------------------------------------------
  // Type:
  
  [/^\bcomponent\b/, 'component'],
  [/^\binterface\b/, 'interface'],
  [/^\bflow\b/, 'flow'],
  
  // -----------------------------------------------
  // Identifier:
  [/^\w+/, 'INDENTIFIER'],

  // -----------------------------------------------
  // Strings:
  
  [/"[^"]*"/, 'STRING'],
  [/'[^']*'/, 'STRING'],
];



interface IScanner {
  source :string;
  cursor :number; 
  line   :number;

  init(str :string) :void;

  isAtEnd() :boolean;
  hasMore() :boolean;

  advance() :Token;

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
    console.log(str);
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

  advance() :Token {
    if (this.isAtEnd()) return new Token("EOF", "\0");

    const string = this.source.slice(this.cursor);

    for (const [regexp, type] of Spec) {
      const val = this.match(regexp, string);

      if (val === null) continue;
      if (type === null) return this.advance();

      const token = new Token(type, val);
      // console.log("NEW TOKEN: ", token);
      return token;
    }

    return new ErrorToken(`Unexpected token: "${string[0]}`);
  }

  match(regexp :RegExp, string :string | null) :any {
    if (string == null) return null;

    const matched = regexp.exec(string);

    if (matched == null) return null;

    this.cursor += matched[0].length;
    return matched[0];
  }
}