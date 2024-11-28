import { motion } from "motion/react"


const Skeleton = () => {
    const skeletonLines = [1, 2, 3]

    const skeletonVariant = {
        start: {},
        end: {
            transition:{
                staggerChildren:0.15
            }
        }
    }

    const skeletonChildVariant = {
        start: { opacity: 0.5 },
        end: { opacity: 1 }
    }
    return (
        <motion.div variants={skeletonVariant} initial='start' animate='end'>
            {skeletonLines.map((item) => (
                <motion.div key={item} className="skeleton" variants={skeletonChildVariant} transition={{
                    repeat:Infinity,
                    repeatType:'reverse',
                    duration:0.5
                }} />
            ))}
        </motion.div>
    )
}

export default Skeleton