"use client";

import { useLanguage } from "@/context/language-context";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "de" : "en")}
      className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem]
       border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
        hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 font-semibold"
    >
      {language === "en" ? "DE" : "EN"}
    </button>
  );
}
