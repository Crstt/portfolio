import React from "react";
import Section from "../../../components/section";

const SkillsSection: React.FC = () => (
  <Section
    id="skills"
    title="Skills"
    content={[
      "C#, .NET, TypeScript, Angular, NodeJS, Python",
      "Azure DevOps, AWS, Docker, Kubernetes, CI/CD",
      "SQL Server, MySQL, Oracle, MongoDB",
      "Microservices, REST APIs, Agile Scrum",
      "Unit Testing, Integration Testing, TDD",
    ]}
  />
);

export default SkillsSection;
