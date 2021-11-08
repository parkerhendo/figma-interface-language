import TokenType from './tokenType';
import Parameters from './parameters';

type Declaration = {
  type: TokenType,
  descriptor: TokenType,
  params?: Parameters,
  body?: any
} | undefined;

export default Declaration;