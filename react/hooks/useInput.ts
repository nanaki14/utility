import { useState, useCallback } from 'react'

const useInput = (defaultText: string = ''): [string, (value: string) => void] => {
  const [text, setText] = useState(defaultText)
  const handleChangeText = useCallback((value) => {
    setText(value)
  }, [])
  return [text, handleChangeText]
}

export default useInput
