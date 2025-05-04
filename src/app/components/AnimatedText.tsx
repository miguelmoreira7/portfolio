'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimatedTextProps = {
  children: React.ReactNode
  className?: string
}

export default function AnimatedText({
  children,
  className = '',
}: AnimatedTextProps) {
  const textRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!textRef.current) return

    const split = new SplitType(textRef.current, {
      types: "words,chars",
    })

    const chars = split.chars
    
    chars?.forEach(char => {
      char.style.display = 'inline'
    })

    gsap.set(chars, { opacity: 0.2 })

    gsap.to(chars, {
      opacity: 1,
      duration: 0.3,
      stagger: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 100%',
        end: 'bottom 40%',
        scrub: true,
        toggleActions: 'play play reverse reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      split.revert()
    }
  }, [])

  return (
    <div
      ref={textRef}
      className={`reveal-type ${className}`}
      style={{ whiteSpace: 'normal' }}
    >
      {children}
    </div>
  )
}
