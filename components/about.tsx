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
      <p className="mb-3">
        After studying computer science, I am concurrently working as a
        Front-End Engineer at a Zimbabwean company while also working on
        multiple projects for African and European companies as a freelancer. I
        specialize in front-end development using{" "}
        <span className="font-bold">
          React.js, TypeScript, Next.js and React Native.{" "}
        </span>
        Additionally, I proficiently translate design concepts into reality
        using Figma. My primary focus centers on the creation of user-centric
        and high-performance web and mobile applications. I excel at
        incorporating popular CSS frameworks such as Tailwind CSS, MUI and
        Shadcn to build applications. I have a strong desire to learn and
        continuously develop my skills and I'm always eager to assimilate new
        technologies!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I like to stay
        active by playing football and field hockey.
      </p>
    </motion.section>
  );
}
