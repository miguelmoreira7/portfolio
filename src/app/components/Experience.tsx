"use client";

import React from 'react'
import { useSectionInView } from '../lib/hooks';
import SectionHeader from './SectionHeader';
import { experiencesData } from '../lib/data';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Experience = () => {

    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    const slideVariant = {
      hidden: (index: number) => ({
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
      }),
      visible: (index: number) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
        },
      }),
    };

    const slideVariantMobile = {
      hidden: () => ({
        opacity: 0,
        y: 100,
      }),
      visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
        },
      }),
    };
    
    
    
  return (
    <section id="experience" ref={ref} className="mb-28 sm:mb-40">
      <SectionHeader>My experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="vertical-timeline-element"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
              variants={window.innerWidth > 640 ? slideVariant : slideVariantMobile}
            >
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(242, 100, 64, 0.8)",
                  fontSize: "1.5rem",
                }}
              >
                <div>
                  <h3 className="font-bold text-2xl capitalize">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!mt-1 !font-normal text-gray-700 dark:text-[#b9af9f]">
                    {item.description}
                  </p>
                </div>
              </VerticalTimelineElement>
            </motion.div>

          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experience