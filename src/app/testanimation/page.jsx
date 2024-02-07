'use client'

import { motion } from 'framer-motion'

const TestAnimationPage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        animate={{ x: 400, y: 300 }}
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  )
}
export default TestAnimationPage
