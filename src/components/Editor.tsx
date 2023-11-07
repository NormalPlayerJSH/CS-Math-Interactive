'use client'

import E, { OnChange } from '@monaco-editor/react';

export interface EditorProps {
  value: string
  onChange: OnChange
}

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <E 
      height="100%" 
      width="100%" 
      defaultLanguage="python" 
      theme='vs-dark' 
      value={value} 
      onChange={onChange}
      options={{
        fontSize: 18,
        minimap: {
          enabled: false
        }
      }}
    />
  )
}