import React, { useRef, useEffect } from 'react';

import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/python/python';

const CodeEditor = ({ language, setCode, code }) => {
    const codeTextareaRef = useRef(null);
    const codeMirrorRef = useRef(null);
  
    useEffect(() => {
      codeMirrorRef.current = CodeMirror.fromTextArea(codeTextareaRef.current, {
        lineNumbers: true,
        mode: language,
        theme: 'monokai',
      });
  
      codeMirrorRef.current.setValue(code);
  
      // Add the event listener for code changes
      codeMirrorRef.current.on('change', handleChange);
  
      return () => {
        codeMirrorRef.current.off('change', handleChange);
        codeMirrorRef.current.toTextArea();
      };
    }, [language]);
  
    const handleChange = (editor) => {
      const value = editor.getValue();
      setCode(value);
    };
  
    return <textarea ref={codeTextareaRef} />;
  };
  
  export default CodeEditor;