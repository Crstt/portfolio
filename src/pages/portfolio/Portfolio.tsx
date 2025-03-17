import React, { useEffect } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import HeroSection from "./components/HeroSection";
import SummarySection from "./components/SummarySection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/exprerience/ExperienceSection";
import CertificationsSection from "./components/CertificationsSection";
import { motion } from "framer-motion";

const sections = [
  { Component: HeroSection, id: "hero" },
  { Component: SummarySection, id: "summary" },
  { Component: SkillsSection, id: "skills" },
  { Component: ExperienceSection, id: "experience" },
  { Component: EducationSection, id: "education" },
  { Component: CertificationsSection, id: "certifications" },
];

const Portfolio: React.FC = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    document.title = "Matteo Catalano - Portfolio";
  }, []);

  return (
    <div
      className={`scroll-smooth font-sans w-full h-screen overflow-y-scroll snap-y snap-mandatory ${darkMode ? "bg-gray-900 text-white" : "bg-cyan-50 text-black"
        }`}
    >
      {sections.map(({ Component, id }) => (
        <motion.div
          key={id}
          id={id}
          className="snap-start w-full h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Component />
        </motion.div>
      ))}
    </div>
  );
};

export default Portfolio;
