"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { links } from '../lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '../context/ActiveSectionContext';

const Header = () => {

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className='z-[999] relative'>
        <motion.div 
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/40  bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28.5rem] sm:rounded-full dark:bg-[#0e0e0e]/80 dark:border-black/40"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.5}}>
        </motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium dark:text-[#b7ab98] text-gray-400 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5}}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-[#b7ab98] ${link.name != activeSection && 'dark:hover:text-[#ec4e39]'}`,
                  {
                    "text-gray-950  dark:text-black" :
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);                  
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="dark:hover:text-black rounded-full absolute inset-0 -z-10 bg-[#ec4e39]"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
};

export default Header;
