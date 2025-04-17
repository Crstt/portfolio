import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ExperienceModal from "./ExperienceModal";
import { useTheme } from "../../../../providers/ThemeProvider";

const ExperienceSection: React.FC = () => {
  const { darkMode } = useTheme();
  const [experienceData, setExperienceData] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch('/experienceData.json')
      .then((response) => response.json())
      .then((data) => setExperienceData(data))
      .catch((error) => console.error("Error loading experience data:", error));
  }, []);

  const handleJobClick = (e: React.MouseEvent, job: any) => {
    // Get click position relative to center of screen
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    setClickPosition({ x, y });
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full py-10 px-4 sm:px-6 pt-20 pb-8 lg:px-8 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-10">Experience</h2>
      
      {/* Mobile Layout */}
      <div className="block md:hidden w-full max-w-2xl space-y-3">
        {experienceData.flat().map((job, index) => (
          <MobileJob
            key={index}
            job={job}
            index={index}
            onClick={handleJobClick}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Desktop Timeline Layout */}
      <div className="hidden md:block relative w-full max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full"></div>

        {experienceData.flat().map((job, index) => (
          <DesktopJob
            key={index}
            job={job}
            index={index}
            onClick={handleJobClick}
            darkMode={darkMode}
          />
        ))}
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        originPosition={clickPosition}
        job={selectedJob}
      />
    </div>
  );
};

interface JobProps {
  job: any;
  index: number;
  onClick: (e: React.MouseEvent, job: any) => void;
  darkMode?: boolean;
}

// Mobile Job Component - Simple stacked layout
const MobileJob: React.FC<JobProps> = ({ job, index, onClick, darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className={`relative p-2 sm:p-2 rounded-lg shadow-lg cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-[1.02]
        ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-cyan-200 hover:bg-cyan-300"}`}
      onClick={(e) => onClick(e, job)}
    >
      {/* Timeline dot */}
      <div className={`absolute -left-2 top-6 w-4 h-4 rounded-full border-2 
        ${darkMode ? "bg-gray-800 border-gray-600" : "bg-cyan-200 border-cyan-400"}`}></div>
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-0">{job.title}</h3>
        <span className={`text-sm font-medium px-2 py-1 rounded
          ${darkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"}`}>
          {job.date}
        </span>
      </div>
      
      <p className={`font-medium ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
        {job.company}
      </p>
      
      <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
        {job.description}
      </p>
    </motion.div>
  );
};

// Desktop Job Component - Timeline layout
const DesktopJob: React.FC<JobProps> = ({ job, index, onClick, darkMode }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="flex w-full items-center mb-8 relative"
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Timeline dot */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10
        ${darkMode ? "bg-gray-800 border-gray-600" : "bg-white border-cyan-400"}`}></div>

      {isEven ? (
        <>
          {/* Role Block - Left Side */}
          <div
            className={`w-5/12 px-6 py-4 rounded-lg shadow-lg cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-cyan-200 hover:bg-cyan-300"}`}
            onClick={(e) => onClick(e, job)}
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className={`font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
              {job.company}
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              {job.description}
            </p>
          </div>

          {/* Date Block - Right Side */}
          <div className={`w-5/12 text-left pl-8 ml-auto`}>
            <span className={`inline-block px-3 py-2 rounded-lg font-medium
              ${darkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700 shadow-md"}`}>
              {job.date}
            </span>
          </div>
        </>
      ) : (
        <>
          {/* Date Block - Left Side */}
          <div className={`w-5/12 text-right pr-8`}>
            <span className={`inline-block px-3 py-2 rounded-lg font-medium
              ${darkMode ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700 shadow-md"}`}>
              {job.date}
            </span>
          </div>

          {/* Role Block - Right Side */}
          <div
            className={`w-5/12 px-6 py-4 rounded-lg shadow-lg ml-auto cursor-pointer transition-all duration-200 hover:shadow-xl hover:scale-105
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-cyan-200 hover:bg-cyan-300"}`}
            onClick={(e) => onClick(e, job)}
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className={`font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
              {job.company}
            </p>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
              {job.description}
            </p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ExperienceSection;