// @ts-ignore
import { TokenType } from '@figma-interface-language/compiler';
import { loadFontsAsync } from '@create-figma-plugin/utilities'

import { Parameters } from '../types/Parameters';

const createText = async (content :string, parent :FrameNode) => {
  console.log("create text node");
  const text = figma.createText();
  await loadFontsAsync([text]);
  text.characters = content;
  text.fontSize = 16;
  parent.appendChild(text);

  return text;
}

export default createText;