import React from "react";

interface Skill {
  name: string;
  image: string;
}

const skills: Skill[] = [
  { name: "C#", image: "/images/csharp.png" },
  { name: ".NET", image: "/images/dotnet.png" },
  { name: "TypeScript", image: "/images/typescript.png" },
  { name: "Angular", image: "/images/angular.png" },
  { name: "NodeJS", image: "/images/nodejs.png" },
  { name: "Python", image: "/images/python.png" },
  { name: "Azure DevOps", image: "/images/azure.png" },
  { name: "AWS", image: "/images/aws.png" },
  { name: "Docker", image: "/images/docker.png" },
  { name: "Kubernetes", image: "/images/kubernetes.png" },
  { name: "SQL Server", image: "/images/sqlserver.png" },
  { name: "MySQL", image: "/images/mysql.png" },
  { name: "Oracle", image: "/images/oracle.png" },
  { name: "MongoDB", image: "/images/mongodb.png" },
  { name: "Microservices", image: "/images/microservices.png" },
  { name: "REST APIs", image: "/images/restapi.png" },
  { name: "Agile Scrum", image: "/images/agile.png" },
  { name: "Unit Testing", image: "/images/unittesting.png" },
  { name: "Integration Testing", image: "/images/integrationtesting.png" },
  { name: "TDD", image: "/images/tdd.png" }
];

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-16 px-4 sm:px-6 pt-20 pb-8 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Skills</h2>
      
      {/* Mobile: 3 columns, Tablet: 4 columns, Desktop: 5-6 columns */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
        {skills.map((skill) => (
          <div 
            key={skill.name} 
            className="flex flex-col items-center group hover:transform hover:scale-105 transition-transform duration-200"
          >
            <div className="rounded-lg p-3 sm:p-4 hover: duration-200 mb-2 sm:mb-3">
              <img 
                src={skill.image} 
                alt={skill.name} 
                className="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain" 
              />
            </div>
            <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight px-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
