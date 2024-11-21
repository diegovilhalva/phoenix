import { motion } from "motion/react"
import PropTypes from "prop-types"


export const CircularProgress = ({ classes = '', size = '' }) => {
    return (
        <div className={`circular-progress ${size} ${classes}`}></div>
    )
}

CircularProgress.propTypes = {
    classes: PropTypes.string,
    size: PropTypes.string
}


export const LinearProgress = ({ classes = '' }) => {
    const progressbarVariant = {
        start: { scaleY: 0 },
        end: {
            scaleY: 1,
            transition: {
                when: 'beforeChildren',
                duration: 0.2,
                ease: 'easeOut',
                delay: 0.5
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.1,
                ease: 'easeOut'
            }
        }
    }

    const activeIndicatorVariant = {
        start: { translateX: '-100%' },
        end: { translateX: '100%' }
    }
    return (
        <motion.div variants={progressbarVariant} role="progressbar" initial='start' animate='end' exit='exit' className={`linear-progress ${classes}`}>
            <motion.div className="active-indicator" transition={{
                repeat:Infinity,
                duration:1.5,
                ease:[0.2,0,0,1]
            }} variants={activeIndicatorVariant}></motion.div>
        </motion.div>
    )
}

LinearProgress.propTypes = {
    classes: PropTypes.string,
}