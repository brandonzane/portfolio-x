import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import animePlus from "@/public/anime-plus.png";
import tourVicFalls from "@/public/tour-vic-falls.png";
import carRental from "@/public/Drive.gif";

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
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Blog",
    hash: "https://portfolio-x-blog.vercel.app/",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Namibia",
    location: "Windhoek, Namibia",
    description: "I studied computer science!  ",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2019",
  },
  {
    title: "Front-End Developer",
    location: "Harare, ZW",
    description:
      "I worked as a front-end developer for 1 year. I also upskilled to full stack developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "Harare, ZW",
    description:
      "I'm now an experienced front-end developer (with some fullstack projects under the belt). My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm always open to opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Anime Plus",
    description:
      "A full stack streaming service built with react. The build time for this project was about 8 hours (which is about 4 days in real world time, accounting for a full-time job)",
    tags: ["React", "Styled Components", "Firebase", "Redux"],
    imageUrl: animePlus,
    buttonUrl: "https://github.com/brandonzane/anime-plus",
  },
  {
    title: "Tour Vic Falls",
    description:
      "A full-stack booking application for short term rentals as well as restaurants and other activities",
    tags: ["React", "Typescript", "APIs", "Next JS", "Tailwind", "MongoDB"],
    imageUrl: tourVicFalls,
    buttonUrl: "https://github.com/brandonzane/tour-vic-falls",
  },
  {
    title: "Car Rental React Native App",
    description:
      "A fullstack react native car rental application. Users are meant to be able to rent a car from peers who own vehicles in the country of their chosen destination",
    tags: ["React Native", "PostgreSQL", "Supabase", "Expo"],
    imageUrl: carRental,
    buttonUrl: "https://github.com/brandonzane/car-rental",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "React Native",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Apollo",
  "Express JS",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Framer Motion",
] as const;
