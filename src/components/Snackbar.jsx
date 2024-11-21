import PropTypes from 'prop-types'
import React from 'react'
import { motion,AnimatePresence } from "framer-motion"
const Snackbar = ({ snackbar }) => {
    const variants = {
        hidden: {scaleY:0},
        visible:{
            scaleY:1,
            transition:{
                duration:0.2,
                ease:[0.05,0.7,0.1,1],

            }
        }
    }
    const spanVariants = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }
    return (
        <AnimatePresence >
            {snackbar.open && (
                <motion.div variants={variants} initial='hidden' animate='visible' className={`snackbar  ${snackbar.type}`} exit={{
                    opacity:0,
                    transition:{
                        duration:0.15,
                        ease:'easeOut'
                    }
                }}>
                    <motion.span variants={spanVariants} transition={{duration:0.2,delay:0.1,ease:'easeOut'}} className="">{snackbar.message}</motion.span>
                </motion.div>
            )}
        </AnimatePresence>


    )
}

Snackbar.propTypes = {
    snackbar: PropTypes.object
}



export default Snackbar