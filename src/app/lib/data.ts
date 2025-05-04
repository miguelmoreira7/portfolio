import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerceImg from "../public/ecommerce.png";
import carRentImg from "../public/car-rent.png";
import receitasImg from "../public/receitas.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Denny Kerson Architecture and Construction",
    location: "Solânea, PB",
    description:
      "I started as an apprentice at the age of 14. I wanted to learn more about the field and be able to work, and I eventually became a CAD Drafter and 3D modeler.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2022",
  },
  {
    title: "Internet Systems",
    location: "João Pessoa, PB",
    description:
      "I started the Internet Systems course at IFPB, where I gained extensive knowledge in web development, databases, artificial intelligence, and various other areas.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
  {
    title: "Tutor in Web Programming",
    location: "João Pessoa, PB",
    description:
      "Guided students through the process of building web applications using Angular and TypeScript for the frontend. Developed REST APIs and backend services using Spring Boot. Focused on integrating Angular with REST APIs to create fully functional web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "João Pessoa, PB",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, SQL, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;


export const projectsData = [
  {
    title: "Dashboard",
    description:
      "Complete dashboard including Kanban, calendar, charts, text editor, light/dark mode, color customization, and Context API for state management.",
    tags: ["React", "TypeScript", "Syncfusion", "TailwindCSS", "Context API"],
    imageUrl: ecommerceImg,
    url: "https://www.linkedin.com/posts/miguelmoreira7_mais-um-projeto-em-react-typescript-e-tailwindcss-activity-7186081987458129921-238J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmtKLEB07DwTkh1UZ6wnjuiy99fbUnrcJw"
  },
  {
    title: "CarRent",
    description:
      "Car catalog app using two APIs to display car data and generate AI-based images. Optimized structure with reusable components.",
    tags: ["React", "TypeScript", "HeadlessUI", "TailwindCSS", "cars API"],
    imageUrl: carRentImg,
    url: "https://www.linkedin.com/posts/miguelmoreira7_finaliza%C3%A7%C3%A3o-do-meu-segundo-projeto-para-estudo-activity-7130315257247379456-ndwb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADmtKLEB07DwTkh1UZ6wnjuiy99fbUnrcJw"
  },
  {
    title: "Recipes",
    description:
      "Recipe catalog with search functionality by letter, ingredients, and more. Includes detailed pages with preparation steps and tutorial videos.",
    tags: ["React", "TypeScript", "TailwindCSS", "TheMealDB API"],
    imageUrl: receitasImg,
    url: "https://github.com/miguelmoreira7/site-de-receitas"
  },
] as const;

/* export const skillsData = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Java",
  "Spring Boot",
  "PHP",
  "Laravel",
  "Python",
  "Git",
  "TailwindCSS",
  "Framer Motion",
  "MongoDB",
  "MySql",
] as const; */

export const skillsData = [
  {
    title: "front-end",
    description: "HTML, CSS, TypeScript, React, Next.js, Angular, TailwindCSS, Framer Motion",
    speed: 0.6,
  },
  {
    title: "back-end",
    description: "Java, Spring Boot, PHP, Laravel, Python",
    speed: 0.6,
  },
  {
    title: "full-stack",
    description: "Next.js, Laravel, Spring Boot",
    speed: 0.65,
  },
  {
    title: "databases",
    description: "MongoDB, MySQL",
    speed: 0.75,
  },
  {
    title: "version tools",
    description: "Git, GitHub",
    speed: 0.7,
  },
  {
    title: "other skills",
    description: "AutoCAD, SketchUp",
    speed: 0.9,
  },
];