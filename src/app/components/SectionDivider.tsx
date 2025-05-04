"use client";

import { motion } from 'framer-motion'
import React from 'react'

const SectionDivider = () => {
  return (
    <motion.div className='my-30 h-30 w-1 rounded-full hidden sm:block bg-[#ec4e39]/70'
      initial = {{ opacity: 0, y: 100 }}
      animate = {{ opacity: 1, y: 0 }}
      transition = {{ delay: 0.4 }}>
    </motion.div>
  )
}

export default SectionDivider