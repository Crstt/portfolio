import React, { useState } from "react";
import { motion } from "framer-motion";
import ExperienceModal from "./ExperienceModal";
import { useTheme } from "../../../../providers/ThemeProvider";

const experienceData = [
  [
    {
      title: "Software Engineer",
      company: "Steel Dynamics",
      date: "June 10, 2024 - Present",
      description:
        "Developing scalable enterprise solutions using C#, .NET, and Angular. Focused on AI integration and automation.",
    },
    {
      title: "Computer Lab Assistant",
      company: "Ivy Tech Community College",
      date: "2023 - 2024",
      description:
        "Assisted students with software development coursework, debugging, and troubleshooting technical issues.",
    }
  ],
  [
    {
      title: "Software Developer",
      company: "Sirius",
      date: "2018 - 2022",
      description:
        "Worked on cloud-based applications, microservices, and database optimizations for enterprise clients.",
    },
    {
      title: "Full Stack Developer",
      company: "Pony Zero",
      date: "2017 - 2018",
      description:
        "Built and maintained web applications using JavaScript frameworks and RESTful APIs.",
    },
  ]
];

const ExperienceSection: React.FC = () => {

  const { darkMode } = useTheme();
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleJobClick = (e: React.MouseEvent, job: any) => {
    // Get click position relative to center of screen
    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerHeight / 2;

    setClickPosition({ x, y });
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {experienceData.flat().map((job, index) => {
          return (
            <Job
              key={index}
              job={job}
              index={index}
              onClick={handleJobClick}
              darkMode={darkMode}
            />
          );
        })}
      </div>

      {/* Experience Modal */}
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        originPosition={clickPosition}
        job={selectedJob}></ExperienceModal>
    </div>
  );
};

interface JobProps {
  job: any;
  index: number;
  onClick: (e: React.MouseEvent, job: any) => void;
  darkMode?: boolean;
}

const Job: React.FC<JobProps> = ({ job, index, onClick, darkMode }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="flex w-full items-center mb-2"
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {isEven ? (
        <>
          {/* Role Block */}
          <div
            className={`w-5/12 px-5 py-2 rounded-lg shadow-lg cursor-pointer transition-colors 
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-cyan-200 hover:bg-cyan-400"}`}
            onClick={(e) => onClick(e, job)}
          >
            <h3 className={`text-xl font-semibold`}>{job.title}</h3>
            <p className={`${darkMode ? "text-grey-300" : "text-gray-900" }`}>{job.company}</p>
            <p className={`${darkMode ? "text-grey-400" : "text-gray-800" } mt-2 `}>{job.description}</p>
          </div>

          {/* Date Block */}
          <div className={`w-5/12 text-left pl-5 text-sm ml-auto
              ${darkMode ? "text-grey-500" : "text-gray-800" }`}>
            {job.date}
          </div>
        </>
      ) : (
        <>
          {/* Date Block */}
          <div className={`w-5/12 text-right pr-5 text-sm
              ${darkMode ? "text-grey-500" : "text-gray-800" }`}>
            {job.date}
          </div>

          {/* Role Block */}
          <div
            className={`w-5/12 px-5 py-2 rounded-lg shadow-lg ml-auto cursor-pointer  transition-colors
              ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-cyan-200 hover:bg-cyan-400"}`}
            onClick={(e) => onClick(e, job)}
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className={`${darkMode ? "text-grey-300" : "text-gray-900" }`}>{job.company}</p>
            <p className={`${darkMode ? "text-grey-400" : "text-gray-800" } mt-2 `}>{job.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default ExperienceSection;