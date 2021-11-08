import { loadFontsAsync, on, once, showUI } from '@create-figma-plugin/utilities'
import { InsertCodeHandler } from './types'

//@ts-ignore
import { interpret, Declaration } from '@figma-interface-language/compiler';

import {CompilerData} from './types/CompilerData'; 


import buildInterface from './actions';

function getComponents() {
  console.log('components!!!!!!!!!!!');
}

export default function() {
  on<InsertCodeHandler>('INSERT_CODE', async function(code: string) {
    const parsedCode :CompilerData = interpret(code)
    console.log("parsed: ", parsedCode)
    parsedCode.body.forEach(async (statement :Declaration) => {
      console.log(statement)
      await buildInterface(statement);
    })
  })
  showUI({ width: 440, height: 660 })
}
