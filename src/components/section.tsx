import React from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  contact?: string;
  content?: string | string[];
  children?: React.ReactNode; // Allow nested components inside <Section>
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, contact, content, children }) => {
  return (
    <section id={id} className="min-h-screen p-10 flex flex-col justify-center items-center text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <h3 className="text-2xl text-gray-600 mb-2">{subtitle}</h3>}
      {contact && <p className="text-gray-500 mb-4">{contact}</p>}
      {content && (
        Array.isArray(content) ? (
          <ul className="list-disc list-inside text-lg">
            {content.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ) : (
          <p className="text-lg max-w-2xl">{content}</p>
        )
      )}
      {children}
    </section>
  );
};

export default Section;