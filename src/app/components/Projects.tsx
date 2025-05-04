"use client";

import React from "react"
import SectionHeader from "./SectionHeader"
import { projectsData } from "../lib/data"
import ProjectCard from "./ProjectCard"
import { useSectionInView } from "../lib/hooks";


const Projects = () => {

  const { ref } = useSectionInView('Projects', 0.5);
  
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeader>My projects</SectionHeader>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects