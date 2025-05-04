"use client";

import React, { useEffect, useState, createContext, useContext } from 'react'

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
   theme: Theme;
   toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
          setTheme("dark");
          window.localStorage.setItem("theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          setTheme("light");
          window.localStorage.setItem("theme", "light");
          document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
    
        if (localTheme) {
          setTheme(localTheme);
    
          if (localTheme === "dark") {
            document.documentElement.classList.add("dark");
          }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
          document.documentElement.classList.add("dark");
        }
      }, []);
    

  return (
    <ThemeContext.Provider value={{
        theme, toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useActiveSectionContext deve ser usado dentro de um provider')
    }
    return context;
}