
// import { motion } from "framer-motion";
import { animate, motion, useMotionValue, useTransform, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

function AnimationOnView() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (value) => Math.round(value))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true }) // triggers once when in view
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      const animation = animate(count, 20, { duration: 1.5 })
      return () => animation.stop()
    }
  }, [inView, count])

  return (
    <motion.pre ref={ref} style={text}>
      {rounded}
    </motion.pre>
  )
}

const text = {
  fontSize: 64,
  color: "#8df0cc",
}

export default AnimationOnView
