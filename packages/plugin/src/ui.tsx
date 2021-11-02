import {
  Button,
  Container,
  render,
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import styles from './styles.css'
import { InsertCodeHandler } from './types'

import 'prismjs/components/prism-clike.js'
import 'prismjs/components/prism-javascript.js'
import '!prismjs/themes/prism.css'

function Plugin() {
  const [code, setCode] = useState(`describe interface as "Sign up" {\n  "Hello world"\n}`)
  const handleInsertCodeButtonClick = useCallback(
    function() {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
  )
  return (
    <Container>
      <div class={styles.container}>
        <Editor
          highlight={function(code: string) {
            return highlight(code, languages.js, 'js')
          }}
          onValueChange={setCode}
          preClassName={styles.editor}
          textareaClassName={styles.editor}
          value={code}
        />
      </div>
      <Button onClick={handleInsertCodeButtonClick}>
        Insert Code
      </Button>
    </Container>
  )
}

export default render(Plugin)
