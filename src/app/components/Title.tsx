import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

type TitleProps = {
    data: {
        title: string;
        speed: number;
    };
    setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
    index: number;
}

const Title = ({data, setSelectedProject, index} : TitleProps) => {

    const {title, speed} = data;
    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', `${20 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100,0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;


  return (
    <div ref={container} className='border-b border-b-neutral-300 dark:border-[#b7ab981f] cursor-default relative z-2'>
        <div className='inline-block pl-[10%]'
            onMouseOver={() => {setSelectedProject(index)}}
            onMouseLeave={() => {setSelectedProject(null)}}>
                <motion.p style={{clipPath:clip}} className='inline-block text-[#ec4e39] dark:text-[#b7ab98] uppercase font-bold text-[10vw] leading-[15vw] sm:text-[8vw] sm:leading-[7.5vw] m-0 relative z-20'>
                    {title}
                </motion.p>
                <p className='block absolute top-0 text-[#ec4e39]/30 dark:text-[#1c1c1c] uppercase font-bold text-[10vw] leading-[15vw] sm:text-[8vw] sm:leading-[7.5vw] m-0 z-10'>
                    {title}
                </p>
        </div>
    </div>
  )
}

export default Title