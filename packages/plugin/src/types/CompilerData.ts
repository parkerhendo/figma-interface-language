import { Parameters } from './Parameters';


export type Body = {
  type: string;
  descriptor: string;
  params: Parameters;
  body: string;
}

export type CompilerData = {
  type: string;
  body: Body[]
}