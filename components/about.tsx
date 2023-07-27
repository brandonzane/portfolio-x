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
        After leaving University in 2019 where I studied{" "}
        <span className="font-bold">Computer Science</span>, I decided to pursue
        my passion for programming. I enrolled into the front-end developer
        career path on Scrimba.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem, especially if
        the solution accomplishes a broader mission. My core stack is{" "}
        <span className="font-bold">
          React, React Native, Typescript, Prisma, Next.js, Node.js, and
          MongoDB.
        </span>{" "}
        I am always open for{" "}
        <span className="font-medium">full-time positions</span> as a software
        developer, or collaborations on new projects.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I like to stay
        active by playing football and field hockey,{" "}
        <span className="italic font-bold">touching grass,</span> as they say.
      </p>
    </motion.section>
  );
}
