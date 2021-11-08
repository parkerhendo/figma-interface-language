import Scanner from '../scanner';
import Token, { ErrorToken } from '../Token';

import TokenType from '../types/tokenType';
import Parameters from '../types/parameters';
import Declaration from '../types/declaration';

interface IParser {
  source: string;
  scanner: Scanner;
  advance: Token | null;
}

export type Doc = { 
  type: string,
  body: Declaration[] 
};

export default class Parser implements IParser {
  source: string;
  scanner: Scanner;
  advance: Token | null;

  constructor() {
    this.source = '';
    this.scanner = new Scanner();
    this.advance = null;
  }

  parse(str: string): Doc {
    this.source = str;
    this.scanner.init(str);
    this.advance = this.scanner.advance();

    return this.Document();
  }

  Document(): Doc {
    return {
      type: 'Document',
      body: this.DeclarationList()
    }
  }

  DeclarationList(stopAdvance: TokenType | null = null): Declaration[] {
    const declarationList: Declaration[] = [this.Declaration() as Declaration];

    while (this.advance != null && this.advance.type != stopAdvance) {
      declarationList.push(this.Declaration() as Declaration);
    }

    return declarationList;
  }

  Declaration() :Declaration | Token {
    switch (this.advance?.type) {
      case TokenType.TOKEN_DESCRIBE: {
        this.eat(TokenType.TOKEN_DESCRIBE, "Expected descriptor before type.");

        const descriptor = this.Descriptor().type;

        const name = this.eat(TokenType.TOKEN_STRING, "Expected STRING after 'as'");

        this.eat(TokenType.TOKEN_AS, "Expected 'as' before name.");

        const body = this.advance.value !== TokenType.TOKEN_RIGHT_BRACE 
                      ? this.DeclarationBody() 
                      : [];

        return {
          type: TokenType.TOKEN_DESCRIBE,
          descriptor,
          params: { name: name.value.slice(1, -1) },
          body
        }
      }
      default:
        if (this.advance == null) {
          this.advance = this.scanner.advance()
        }
    }
  }

  Descriptor(): Token {
    switch(this.advance?.type) {
      case TokenType.TOKEN_INTERFACE:
        return this.eat(TokenType.TOKEN_INTERFACE, "Expected type after descriptor");
      case TokenType.TOKEN_COMPONENT:
        return this.eat(TokenType.TOKEN_COMPONENT, "Expected type after descriptor");
      case TokenType.TOKEN_FLOW:
        return this.eat(TokenType.TOKEN_FLOW, "Expected type after descriptor");
      default:      
        return this.eat(TokenType.TOKEN_IDENTIFIER, `Unexpected token: ${this.advance?.value}`);
    }
  }

  DeclarationBody() {
    this.eat(TokenType.TOKEN_LEFT_BRACE, "Expected '{' before block");
    const body = this.advance?.type === TokenType.TOKEN_RIGHT_BRACE ? null : this.advance?.value.slice(1, -1);

    this.eat(TokenType.TOKEN_STRING, "Value should be a string.");
    this.eat(TokenType.TOKEN_RIGHT_BRACE, "Expected '}' after block.")

    return body;
  }

  eat(type: TokenType, message: string): Token {
    const token = this.advance;

    if (token?.type == null) {
      this.advance = this.scanner.advance();
    }

    if (token?.type != type) {
      throw new SyntaxError(message);
    }

    this.advance = this.scanner.advance();

    return token;
  }
}
