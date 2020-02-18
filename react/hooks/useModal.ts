import { useState, useCallback } from 'react'

const useModal = (defaultState: boolean): [boolean, () => void, () => void] => {
  const [isModalShown, toggleModalShown] = useState(defaultState)

  const handleModalShow = useCallback(() => {
    toggleModalShown(true)
  }, [])

  const handleModalHide = useCallback(() => {
    toggleModalShown(false)
  }, [])

  return [isModalShown, handleModalShow, handleModalHide]
}

export default useModal
