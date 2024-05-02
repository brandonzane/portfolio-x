"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        A computer science student furthering my horizons at the University of
        London, I'm a dedicated Frontend Software Developer creating exceptional
        digital experiences for small to enterprise companies.{" "}
        <span className="font-bold">
          Proficient in React.js, TypeScript, Next.js, and React Native, I
          develop high-performance web and mobile applications with user-centric
          design.
        </span>{" "}
      </p>
      <p className="mb-3 text-lg">
        Skilled in translating concepts from Figma and leveraging CSS frameworks
        like Tailwind CSS, MUI, and Shadcn for visually appealing interfaces.
        Driven by a passion for continuous learning, I embrace new technologies
        to stay ahead of the curve. When not coding, I enjoy an active lifestyle
        through football and field hockey.
      </p>
    </motion.section>
  );
}
