import { loadFontsAsync, once, showUI } from '@create-figma-plugin/utilities'

import { InsertCodeHandler } from './types'

import { interpret } from '@figma-interface-language/compiler';

async function buildInterface(json) {
  const type = json.body[0].type;
  const descriptor = json.body[0].descriptor;
  const params = json.body[0].params;
  const content = json.body[0].body;

  console.log(typeof content);

  let frame: FrameNode | null = null;
  if (descriptor == "TOKEN_INTERFACE") {
    frame = figma.createFrame()
    frame.name = params.name;
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    frame.resize(128, 128);
  }

  if (typeof content === 'string') {
    const text = figma.createText();
    await loadFontsAsync([text]);
    text.characters = content;
    text.fontSize = 16;
    frame!.appendChild(text);
  }

  return frame;
}

export default function () {
  once<InsertCodeHandler>('INSERT_CODE', async function (code: string) {
    const parsedCode = interpret(code)
    await buildInterface(parsedCode);
  })
  showUI({ width: 400, height: 720 })
}
