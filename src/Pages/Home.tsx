import type React from "react";
// src/Pages/Home.tsx

import Profile from "./HeroSection";
import About from "../components/About";
import Skills from "../components/skillSection";
import ProfessionalExperience from "./ProfessionalExperience";
import Projects from "./DisplayProject";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import withLayout from "../hoc/withLayout";

const Home: React.FC = () => {
  const skills = [
    {
      icon: <FaHtml5 size={24} />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 size={24} />,
      name: "CSS3",
    },
    {
      icon: <FaNodeJs size={24} />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss size={24} />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaReact size={24} />,
      name: "React",
    },
    {
      icon: <SiNextdotjs size={24} />,
      name: "Next.js",
    },
    {
      icon: <SiMongodb size={24} />,
      name: "MongoDB",
    },
    {
      icon: <FaJs size={24} />,
      name: "JavaScript",
    },
    {
      icon: <FaGitAlt size={24} />,
      name: "Git",
    },
    {
      icon: <SiTypescript size={24} />,
      name: "Typescript",
    },
  ];

  return (
    <>
      <Profile />
      <About />
      <Skills skills={skills} />
      <ProfessionalExperience />
      <Projects />
    </>
  );
};

const HomeWithLayout = withLayout(Home);

export default HomeWithLayout;
