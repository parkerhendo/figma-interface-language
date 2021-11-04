import {
  render,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import TextEditor from './components/Editor';

import styles from './styles.css'
import { InsertCodeHandler } from './types'

function Plugin() {
  const [code, setCode] = useState(`describe interface "Sign up" as {\n  "Hello world"\n}`)
  const handleInsertCodeButtonClick = useCallback(
    function() {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
  )
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Scratch Pad</h1>
        <button className={styles.button} onClick={handleInsertCodeButtonClick}>
         <svg width="17" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.74081 2L13.0741 8L3.74081 14V2Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 
        </button>
      </div>
      <TextEditor code={code} setCode={setCode} />
    </div>
  )
}

export default render(Plugin)
