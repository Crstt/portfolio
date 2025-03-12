import React from "react";
import { motion } from "framer-motion";

const experienceData = [
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
  },
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
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">Experience</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className={`flex w-full items-center mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Role Block */}
            <div className="w-5/12 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-300">{job.company}</p>
              <p className="text-gray-400 mt-2">{job.description}</p>
            </div>

            {/* Date Block (opposite side) */}
            <div
              className={`w-5/12 text-right ${
                index % 2 === 0 ? "pl-5" : "pr-5"
              } text-gray-500 text-sm`}
            >
              {job.date}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
