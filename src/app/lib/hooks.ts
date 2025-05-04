import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/ActiveSectionContext";
import { useEffect } from "react";
import { SectionName } from "./types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
    const {ref, inView } = useInView({
        threshold,
      });
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName)
        }
      }, [inView]);

      return {
        ref
      }
};