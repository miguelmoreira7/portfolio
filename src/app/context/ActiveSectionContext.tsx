"use client";

import React, { useState, createContext, useContext } from 'react'
import { SectionName } from '../lib/types';


type ActiveSectionContextProviderProps = {children: React.ReactNode};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};


const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);


const ActiveSectionContextProvider = ({children}: ActiveSectionContextProviderProps) => {

    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);
    
  return (
    <ActiveSectionContext.Provider value={{
        activeSection, setActiveSection,
        timeOfLastClick, setTimeOfLastClick,
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
};

export default ActiveSectionContextProvider

export const useActiveSectionContext = ():ActiveSectionContextType => {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeContextProvider')
    }
    return context;
}