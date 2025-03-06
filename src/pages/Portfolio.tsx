import { useEffect } from "react";

const sections = [
  { id: "hero", title: "Matteo Catalano", subtitle: "Software Engineer", contact: "Fort Wayne, IN | matteo598.catalano@gmail.com" },
  { id: "summary", title: "Summary", content: "Experienced software engineer with expertise in C#, .NET, TypeScript, and Azure services. Passionate about AI, automation, and building scalable enterprise solutions." },
  { id: "skills", title: "Skills", content: [
    "C#, .NET, TypeScript, Angular, NodeJS, Python",
    "Azure DevOps, AWS, Docker, Kubernetes, CI/CD",
    "SQL Server, MySQL, Oracle, MongoDB",
    "Microservices, REST APIs, Agile Scrum",
    "Unit Testing, Integration Testing, TDD"
  ] },
  { id: "education", title: "Education", content: [
    "B.S. Software Engineering - Western Governors University",
    "A.A.S. Software Development - Ivy Tech Community College (4.0 Summa Cum Laude)"
  ] },
  { id: "experience", title: "Experience", content: [
    "Software Engineer - Steel Dynamics (2024 - Present)",
    "Computer Lab Assistant - Ivy Tech Community College (2023 - 2024)",
    "Software Developer - Sirius (2018 - 2022)",
    "Full Stack Developer - Pony Zero (2017 - 2018)"
  ] },
  { id: "certifications", title: "Certifications", content: [
    "CompTIA Project+",
    "AWS Certified Cloud Practitioner",
    "Microsoft Technology Associate: 98-361"
  ] }
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "Matteo Catalano - Portfolio";
  }, []);

  return (
    <div className="scroll-smooth font-sans">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="min-h-screen p-10 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
          {section.subtitle && <h3 className="text-2xl text-gray-600 mb-2">{section.subtitle}</h3>}
          {section.contact && <p className="text-gray-500 mb-4">{section.contact}</p>}
          {Array.isArray(section.content) ? (
            <ul className="list-disc list-inside text-lg">
              {section.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lg max-w-2xl">{section.content}</p>
          )}
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
