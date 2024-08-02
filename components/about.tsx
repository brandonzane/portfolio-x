"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/lib/translations";

export default function About() {
  const { ref } = useSectionInView("About");
  const { language } = useLanguage();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{translations[language].about.title}</SectionHeading>
      <p className="mb-3 text-lg">
        {translations[language].about.content}
        {/* <span className="font-bold"></span>{" "} */}
      </p>
    </motion.section>
  );
}
