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
  <section id="skills" className="min-h-screen p-10 flex flex-col justify-center items-center text-center">
    <h2 className="text-4xl font-bold mb-4">Skills</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center">
          <img src={skill.image} alt={skill.name} className="h-16 w-16 mb-2" />
          <span className="text-lg font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
