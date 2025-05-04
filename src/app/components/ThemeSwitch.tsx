"use client";

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '../context/ThemeContext'

const ThemeSwitch = () => {

    const {theme, toggleTheme} = useTheme();

  return (
    <button className="fixed z-50 bottom-5 right-5 bg-white/80 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-[#0e0e0e] border-[#ec4e39]"
    onClick={toggleTheme}>
        {theme === "light" ? <BsMoon color='#ec4e39'/> : <BsSun color='#ec4e39'/>}
    </button>
  )
}

export default ThemeSwitch