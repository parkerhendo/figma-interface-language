import Scanner from './Scanner';
import Token, { ErrorToken } from './Token';
import { TokenType } from './tokens';

interface IParser {
  source: string;
  scanner: Scanner;
  advance: Token | null;
}

export type Parameters = {
  name: string,
}

export type Declaration = {
  type: TokenType,
  descriptor: TokenType,
  params?: Parameters,
  body?: any
};

export type DeclarationList = Declaration[];

export type Doc = { type: string, body: DeclarationList };

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

  DeclarationList(stopAdvance: TokenType | null = null): DeclarationList {
    const declarationList: Declaration[] = [this.Declaration() as Declaration];

    // while (this.advance != null && this.advance.type !== stopAdvance) {
      // declarationList.push(this.Declaration() as Declaration)
    // }

    return declarationList;
  }


  Declaration() {
    // console.log(this.advance?.type);
    switch (this.advance?.type) {
      case TokenType.TOKEN_DESCRIBE: {
        this.eat(TokenType.TOKEN_DESCRIBE, "Expected descriptor before type.");

        const descriptor = this.advance.type;
        this.eat(TokenType.TOKEN_INTERFACE, "Expected type after descriptor");

        this.eat(TokenType.TOKEN_AS, "Expected 'as' before name.");

        const name = this.eat(TokenType.TOKEN_STRING, "Expected STRING after 'as'");


        const body = this.advance.value !== TokenType.TOKEN_RIGHT_BRACE ? this.DeclarationBody() : [];

        return {
          type: TokenType.TOKEN_DESCRIBE,
          descriptor,
          params: { name: name.value.slice(1, -1) },
          body
        }
      }
    }
  }

  DeclarationBody() {
    // console.log("======= Declaration Body ========");
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
