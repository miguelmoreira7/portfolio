"use client";

import React, { useState } from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeader from './SectionHeader';
import { skillsData } from '../lib/data';
import Title from './Title';
import Description from './Description';


const Skills = () => {

    const {ref} = useSectionInView("Skills", 0.4);

    const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section
      id="skills"
      ref={ref}
      className="pt-10 w-full pb-[115%] sm:pb-[60%]"
    >
      <SectionHeader>My Skills</SectionHeader>
      <div className='absolute z-1 w-full '>
        <div className="border-t border-t-neutral-300 w-full dark:border-[#b7ab981f]">
          {skillsData.map ((project, i) => {
              return <Title key={i} index={i} data={project} setSelectedProject={setSelectedProject}/>
          })}
        </div>
        <div className="absolute top-[3px] h-full w-full z-2 pointer-events-none">
          {skillsData.map((project, i) => {
            return <Description key={i} index={i} data={project} selectedProject={selectedProject}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills