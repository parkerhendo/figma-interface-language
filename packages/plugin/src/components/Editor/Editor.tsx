import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'

import styles from './styles.css';

import 'prismjs/components/prism-clike.js'
import 'prismjs/components/prism-javascript.js'
import '!prismjs/themes/prism.css'

export const TextEditor = ({code, setCode}: any) => {
  return (
    <Editor
      highlight={function(code: string) {
        return highlight(code, languages.js, "js");
      }}
      padding={12}
      onValueChange={setCode}
      preClassName={styles.editor}
      textareaClassName={styles.editor}
      value={code}
    />
  );
};
