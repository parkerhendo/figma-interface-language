import {Spec} from './spec';

import TokenType from '../types/tokenType';

import Token, {ErrorToken} from '../Token';

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