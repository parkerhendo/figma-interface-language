import TokenType from './types/tokenType';
import Scanner from './scanner';


interface IToken {
  type       :TokenType;
  value      :string;
  // line       :number;
}

export default class Token implements IToken {
  type       :TokenType;
  value      :string 
  // line       :number; 

  constructor(type :TokenType, value :string) {
    this.type = type;
    this.value = value;
  }
}

export class ErrorToken extends Token {
  constructor(message :string) {
    super(TokenType.TOKEN_ERROR, message);
  }
}