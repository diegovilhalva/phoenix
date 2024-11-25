import { motion } from 'motion/react'
import React, { useCallback, useRef, useState } from 'react'
import { IconBtn } from './Button'

const PromptField = () => {

  const inputField = useRef()

  const inputFieldContainer = useRef()

  const [placeholderShown, setPlaceholderShown] = useState(true)
  const [isMultiline, setIsMultiline] = useState(false)
  const handleInputChange = useCallback(() => {

    if (inputField.current.innerText === "\n") inputField.current.innerHTML = '';
    setPlaceholderShown(!inputField.current.innerText)
    setIsMultiline(inputFieldContainer.current.clientHeight > 64)
  }, [])


  const promptFieldVariant = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.4,
        delay: 0.4,
        ease: [0.05, 0.7, 0.1, 1],
      }
    }
  }

  const promptFieldChildrenVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  return (
    <motion.div className={`prompt-field-container ${isMultiline ? 'rounded-large' : ''} `}
      variants={promptFieldVariant} initial='hidden' animate='visible' ref={inputFieldContainer}>
      <motion.div className={`prompt-field ${placeholderShown ? '' : 'after:hidden'}`}
        contentEditable={true} role='textbox' aria-multiline={true} aria-label='Enter a prompt here' data-placeholder='Enter a prompt here' variants={promptFieldChildrenVariant} ref={inputField} onInput={handleInputChange} />
      <IconBtn variants={promptFieldChildrenVariant} icon={'send'} title='Submit' size='large' classes='ms-auto' />
      <div className="state-layer"></div>
    </motion.div>
  )
}

export default PromptField