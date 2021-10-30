import {TokenType} from './types/tokens';
import Scanner from './Scanner';


interface IToken {
  type       :string;
  value      :string;
  // line       :number;
}

export default class Token implements IToken {
  type       :string;
  value      :string 
  // line       :number; 

  constructor(type :string, value :string) {
    this.type = type;
    this.value = value;
  }
}

export class ErrorToken extends Token {
  message: string;
  constructor(message :string) {
    super("TOKEN_ERROR", "error");
    this.message = message;
  }
}