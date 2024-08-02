// lib/translations.ts
export const translations = {
  en: {
    intro: {
      greeting: "Hello, I'm Brandon.",
      role: "I'm a design-minded Front-end Engineer, passionate about creating beautiful UI/UX for the web and mobile.",
      contactLink: "Contact me",
    },
    about: {
      title: "About Me",
      content:
        "Proficient in React.js, TypeScript, Next.js, and React Native, I develop high-performance web and mobile applications with user-centric design. I am skilled in translating concepts from design and leveraging CSS frameworks like Tailwind CSS, MUI, and Shadcn for visually appealing interfaces. Driven by a passion for continuous learning, I embrace new technologies to stay ahead of the curve. I am crazy about football, field hockey and anime.",
    },
    // Add more translations for other sections
  },
  de: {
    intro: {
      greeting: "Hallo, ich bin Brandon.",
      role: "Ich bin ein designorientierter Front-End-Entwickler, der leidenschaftlich gerne schöne UI/UX für das Web und mobile Geräte erstellt.",
      contactLink: "Kontaktiere mich",
    },
    about: {
      title: "Über mich",
      content:
        "Versiert in React.js, TypeScript, Next.js und React Native entwickle ich leistungsstarke Web- und mobile Anwendungen mit nutzerzentriertem Design. Ich bin geschickt darin, Konzepte aus dem Design umzusetzen und CSS-Frameworks wie Tailwind CSS, MUI und Shadcn zu nutzen, um visuell ansprechende Oberflächen zu gestalten. Getrieben von einer Leidenschaft für kontinuierliches Lernen, nehme ich neue Technologien an, um immer auf dem neuesten Stand zu bleiben. Ich bin verrückt nach Fußball, Feldhockey und Anime.",
    },
  },
  jp: {
    intro: {
      geeting: "",
      role: "",
    },
    about: {
      geeting: "",
      role: "",
    },
  },
  // Add more translations for other sections
};

export type TranslationKey = keyof typeof translations.en;
