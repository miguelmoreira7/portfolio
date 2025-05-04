import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import ActiveSectionContextProvider from "./context/ActiveSectionContext";
import ThemeContextProvider from "./context/ThemeContext";
import localFont from "next/font/local"

const font = localFont({
  src: './fonts/AVGARDN_2.ttf',
})

export const metadata: Metadata = {
  title: "Miguel Moreira | Portfolio ",
  description: "Miguel Moreira | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${font.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0e0e0e] dark:text-[#b7ab98] dark:text-opacity-90`}>
        <div className="absolute top-[10rem] -z-10 h-[10rem] rounded-full w-full blur-[8rem] dark:bg-[#222222]"></div>
        <ThemeContextProvider>  
          <ActiveSectionContextProvider>
            <Header/>
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <div className="fixed -left-[10rem] -bottom-30 z-0 h-[17rem] blur-[6rem] w-[5000px] bg-white dark:bg-black"></div>
      </body>
    </html>
  );
}
