import { motion } from 'motion/react'
import React from 'react'
import { IconBtn } from './Button'

const PromptField = () => {
  return (
    <motion.div className='prompt-fiedl-container'>
        <motion.div className="prompt-field" />
        <IconBtn icon={'send'} title='Submit' size='large' classes='ms-auto' />
    </motion.div>
  )
}

export default PromptField