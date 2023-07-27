import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; <span className="text-lg text-yellow-400">⚔️🏃‍♂️</span>{" "}
        <span className="text-red-500">2049 </span>
        <span className="text-emerald-400">Brandon </span>
        <span className="text-sky-400">Mushori</span>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
