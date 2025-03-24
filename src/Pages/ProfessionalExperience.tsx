"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp1",
    role: "Web Developer Intern",
    company: "Manaslu Expert",
    location: "Kathmandu",
    startDate: "May 2023",
    endDate: "Sept 2023",
    description: "Working on the front-end development of client projects",
    responsibilities: [
      "Implemented responsive designs using HTML, CSS, and JavaScript",
      "Developed and maintained reusable UI components using Next.js and Tailwind CSS",
      "Fixed bugs and improved application performance across different devices",
      "Created RESTful API integrations for data fetching and user authentication",
      "Participated in daily stand-up meetings and sprint planning sessions",
      "Collaborated with team lead to implement perfect interfaces",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: "exp2",
    role: "System Administration Intern",
    company: "Grafi Offshore",
    location: "Kathmandu",
    startDate: "June 2024",
    endDate: "Sept 2024",
    description: "Maintenance and monitoring of network and infrastructure",
    responsibilities: [
      "Installation and update of server Operating system",
      "Configure and installation of software and applications on employee devices",
      "Maintenance on physical infrastructures such as cables, hubs etc.",
    ],
    technologies: [],
  },
];

const ProfessionalExperience = () => {
  const [expanded, setExpanded] = useState(false);
  const isInView = useIntersectionObserver("experienceSection", {
    threshold: 0.1,
  });

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <section
      id="experienceSection"
      className="py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="mt-4 text-text/80 max-w-2xl mx-auto">
            My journey in the tech industry, showcasing the roles and projects
            that have shaped my skills and expertise.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row md:space-x-8">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-1/2"
            >
              <div
                className={`bg-tertiary rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  expanded
                    ? "transform hover:-translate-y-1"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="p-6 cursor-pointer" onClick={toggleExpand}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-text mb-2">
                        {experience.role}
                      </h3>
                      <p className="text-text/90 mb-1">
                        {experience.company} • {experience.location}
                      </p>
                      <p className="text-text/70 text-sm">
                        {experience.startDate} - {experience.endDate}
                      </p>
                    </div>
                    <button
                      className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors"
                      aria-label={
                        expanded ? "Collapse details" : "Expand details"
                      }
                    >
                      {expanded ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>

                  {expanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-text/80 mb-4">
                        {experience.description}
                      </p>
                      <h4 className="font-semibold text-text mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        {experience.responsibilities.map((item, i) => (
                          <li key={i} className="text-text/80">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h4 className="font-semibold text-text mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalExperience;
