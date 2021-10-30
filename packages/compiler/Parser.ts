import Scanner from './Scanner';
import Token from './Token';
import {TokenType} from './types/tokens';

interface IParser {
  scanner :Scanner;
  current :Token | null;
  previous :Token | null;
}

export default class Parser {
  source    :string;
  scanner   :Scanner;
  advance   :any;

  constructor() {
    this.source = '';
    this.scanner = new Scanner();
  }

  parse(str :string) :any {
    this.source = str;
    this.scanner.init(str);

    this.advance = this.scanner.advance();

    if (this.scanner.isAtEnd()) {
      process.exit(1);
    }

    console.log('✨ ✨ Parsing...');

    return this.Document();
  }

  Document(): any {
    return {
      Type: 'Document',
      body: this.statementList()
    }
  }

  statementList(stopAdvance: string | null = null) {
    const statementList = [this.statement()];

    while (this.advance != null && this.advance.type !== stopAdvance) {
      statementList.push(this.statement());
    }

    return statementList;
  }

  statement() {
    switch(this.advance.type) {
      case ';':
        this.emptyStatement();
      case '{':
        this.block();
      case 'describe':
        this.description();
      case 'interface':
        this.interface();
      default:
        this.eat(this.advance.type);
    }
  }

  description() {
    this.eat('describe');
    const value = this.advance == "interface" 
                  ? "Interface" 
                  : this.advance == "flow" 
                        ? "Flow" 
                        : '';
    return {
      type: "Description",
      value
    }
  }

  emptyStatement() {
    this.eat(';');
    return {
      type: 'EmptyStatement',
    };
  }

  parameters() {
    this.eat('(');


    this.eat(')');
  }

  block() {
    this.eat('{');

    const body = this.advance.type !== '}' ? this.statementList('}') : [];

    this.eat('}');

    return {
      type: 'Block',
      body
    };
  }

  interface(params = null) {
    this.eat('interface');
    this.eat('as');

    const name = this.advance.value;

    return {
      type: 'Interface',
      params: {
        name
      },
      children: null,
    }
  } 

  eat(type :string) {
    const token = this.advance;

    if (token == null) {
      throw new SyntaxError(`Unexpected end of input, expected: "${type}`);
    }

    if (token.type !== type) {
      throw new SyntaxError(`Unexpected token "${token.value}", expected "${type}`);
    }

    this.advance = this.scanner.advance();

    return token;
  }
}   
