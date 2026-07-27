import { motion, useScroll, useSpring } from 'framer-motion'

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 })

  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
