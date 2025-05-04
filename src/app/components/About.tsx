"use client";
import { motion, useScroll } from "framer-motion"
import { useSectionInView } from "../lib/hooks";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText";

const About = () => {

  const { ref } = useSectionInView('About', 0.4);

  const lines = [
    <>
      I’m a <span className="text-[#ec4e39]">selectively skilled</span> product
    </>,
    <>designer with strong focus on</>,
    <>producing high quality &</>,
    <>impactful digital experience.</>,
  ];

  return (
    <motion.section
      ref={ref}
      className="ml-24 mr-24 mb-28 max-w-[120rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      id="about"
    >

      <motion.div
        className="flex flex-col text-left">
        <p className="dark:text-[#b7ab98] uppercase tracking-[.5em]">About Me</p>
        <br />
        <AnimatedText className="text-[5vw] 2xl:leading-[4.5vw] leading-[5.5vw] font-extrabold text-left">
            <p className="dark:text-[#b7ab98]">I’m a self-taught, curious individual with a passion for <span className="text-[#ec4e39]">problem-solving</span> and continuous learning
            across various fields.</p>
            <p className="dark:text-[#b7ab98]">I’m <span className="text-[#ec4e39]">persistent</span> when dealing with errors and strive to find solutions <span className="text-[#ec4e39]">no matter
            the challenge.</span></p>
        </AnimatedText>
      </motion.div>
    </motion.section>
  )
}

export default About