import { loadFontsAsync, on, showUI } from '@create-figma-plugin/utilities'

import { InsertCodeHandler } from './types'

import { interpret } from '@figma-interface-language/compiler';

async function buildInterface(json) {
  const type = json.body[0].type;
  const descriptor = json.body[0].descriptor;
  const params = json.body[0].params;
  const content = json.body[0].body;

  console.log(typeof content);

  let frame = null;
  if (descriptor == "TOKEN_INTERFACE") {
    frame = figma.createFrame()
    frame.name = params.name;
    frame.layoutMode = "VERTICAL";
    frame.primaryAxisSizingMode = "AUTO";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    frame.counterAxisSizingMode = "AUTO";
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
  on<InsertCodeHandler>('INSERT_CODE', async function (code: string) {
    const parsedCode = interpret(code)
    await buildInterface(parsedCode);
  })
  showUI({ width: 512, height: 720 })
}
