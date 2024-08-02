"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, motionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/active-section-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  buttonUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState<number>(0);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const offset = window.innerHeight * 1.33;

        const progress = Math.min(
          Math.max((top + offset) / (height + offset), 0),
          1
        );
        setScrollYProgress(progress);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const motionScrollYProgress = motionValue(scrollYProgress);

  const scaleProgress = useTransform(motionScrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(motionScrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col sm:flex-row">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:w-1/2 flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:w-1/2">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full h-48 sm:h-full object-cover rounded-b-lg sm:rounded-r-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              sm:group-even:group-hover:translate-x-3
              sm:group-even:group-hover:translate-y-3
              sm:group-even:group-hover:rotate-2"
            />
          </div>
        </div>
      </section>
      <Link
        href={buttonUrl}
        className="group bg-white border-solid border-black border-2 text-black px-7 py-3 mt-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-800 hover:text-white hover:border-white active:scale-105 transition"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        View Project{" "}
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </Link>
    </motion.div>
  );
}
