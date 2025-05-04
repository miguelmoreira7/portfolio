import React from 'react'

type DescriptionProps = {
    data: {
        title: string;
        description: string;
    };
    selectedProject: number | null;
    index: number;
}


const Description = ({data, selectedProject, index} : DescriptionProps) => {


    const {title, description} = data;

  return (
    <div key={index} style={{clipPath:selectedProject == index ? "inset(0 0 0)" : "inset(50% 0 50%)"}} className='bg-[#ec4e39] flex justify-between items-center pl-[10%] sm:pr-[10%] pr-[5%] transition-[clip-path] duration-400 [clip-path:inset(50%_0_50%)]'>
        <p className='text-white dark:text-[#010101] uppercase font-bold text-[6vw] sm:text-[6vw] leading-[15vw] sm:leading-[7.5vw] m-0 relative z-1'>{title}</p>
        <p className='w-[40%] text-[2vw] sm:text-[1.5vw] uppercase text-white dark:text-[#010101] font-bold'>{description}</p>
    </div>
  )
}

export default Description