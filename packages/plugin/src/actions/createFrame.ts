// @ts-ignore
import { TokenType } from '@figma-interface-language/compiler';

import positionFrame from '../helpers/positionFrame';

import { Parameters } from '../types/Parameters';

const createFrame = (descriptor: TokenType, params: Parameters): FrameNode => {
  console.log("hello frames");
  const frame = figma.createFrame();

  frame.name = params.name;
  frame.layoutMode = "VERTICAL";
  frame.primaryAxisSizingMode = "AUTO";
  frame.primaryAxisAlignItems = "CENTER";
  frame.counterAxisAlignItems = "CENTER";
  frame.counterAxisSizingMode = "AUTO";
  frame.resize(375, 667);

  positionFrame(frame);

  return frame;
}

export default createFrame;