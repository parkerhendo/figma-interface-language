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
  const [code, setCode] = useState(`describe interface as "Sign up" {\n  "Hello world"\n}`)
  const handleInsertCodeButtonClick = useCallback(
    function() {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
  )
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Scratch Pad</h1>
          <button className={styles.button} onClick={handleInsertCodeButtonClick}>
           Run 
          </button>
        </div>
        <TextEditor code={code} setCode={setCode} />
      </div>
    </div>
  )
}

export default render(Plugin)
