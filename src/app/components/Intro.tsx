"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '../lib/hooks';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.9);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 w-3/4 max-w-[90rem] sm:mb-0"
    >
      <motion.div className='mt-24 max-w-[90rem] flex flex-col justify-center items-center'
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5}}>
        <p
          className="dark:text-[#b7ab98] mb-10 mt-4 font-extrabold uppercase text-[18vw] leading-[16vw] sm:text-[13vw] sm:leading-[12vw] md:text-[12vw] md:leading-[11vw] lg:text-[8vw] lg:leading-[7.5vw] text-center"
        >
          Getting <br />
          Things <br />
          <span className="text-[#ec4e39]">Done</span>
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium"
        >
          <Link
            href="mailto:miguelmoreiraneto@hotmail.com"
            className="group bg-white borderBlack dark:bg-white/10 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#ec4e39] active:scale-105 transition font-bold dark:text-[#b7ab98] dark:hover:text-black"
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#ec4e39] dark:hover:text-black active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 font-bold dark:text-[#b7ab98]"
            href="./CV - ENGLISH.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 hover:bg-[#ec4e39] dark:text-[#b7ab98]"
            href="https://linkedin.com/in/miguelmoreira7"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-[#ec4e39] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-[#b7ab98]"
            href="https://github.com/miguelmoreira7"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>

    </section>
  )
}

export default Intro