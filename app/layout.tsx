import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/language-context";
import LanguageSwitch from "@/components/language-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brandon | Personal Portfolio",
  description: "Brandon is a full-stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f0a2a5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#862F3D]"></div>
        <div className="bg-[#64e4df] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2f8678]"></div>

        <ThemeContextProvider>
          <LanguageProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <SpeedInsights />
              <Toaster position="top-right" />
              <ThemeSwitch />
              <LanguageSwitch />
            </ActiveSectionContextProvider>
          </LanguageProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
