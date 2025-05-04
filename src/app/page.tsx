'use client'

import { useEffect } from "react"
import Lenis from "lenis"

import About from "./components/About"
import Experience from "./components/Experience"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import SectionDivider from "./components/SectionDivider"
import Skills from "./components/Skills"
import ThemeSwitch from "./components/ThemeSwitch"

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <ThemeSwitch />
    </div>
  )
}
