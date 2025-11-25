import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import terminalPortfolio from "public/car-rental-2.png";
import haruFashion from "public/Madam-choco.png";
import haruApi from "public/Social-clone.png";
import astroPaper from "public/Deep-fake.png";


const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/Sanjai-raj"
          className="font-medium underline link-outline text-primary dark:text-primarylight whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Deepfake Detection",
    type: "Frontend",
    image: (
      <Image
        src={astroPaper}
        sizes="100vw"
        fill
        alt="Deepfake"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A secure Google Meet login system powered by deepfake detection using CNN and FaceNet, achieving 96% accuracy in identifying manipulated video frames.",
    tags: ["React", "Python", "Firebase", "CNN", "Deep Learning"],
    liveUrl: "https://astro-paper.pages.dev/",
    codeUrl: "https://github.com/satnaing/astro-paper",
    bgColor: "bg-[#9FD0E3]",
    githubApi: "https://api.github.com/repos/satnaing/astro-paper",
  },
  {
    title: "Car Rental Site",
    type: "MERN Stack",
    image: (
      <Image
        src={terminalPortfolio}
        sizes="100vw"
        fill
        alt="Car Rental Site"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A MERN stack–based car rental application for seamless booking, vehicle management, and role-based user/admin access. ",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "REST API"],
    liveUrl: "https://terminal.satnaing.dev/",
    codeUrl: "https://github.com/satnaing/terminal-portfolio",
    bgColor: "bg-[#B4BEE0]",
    githubApi: "https://api.github.com/repos/satnaing/terminal-portfolio",
  },
  {
    title: "Flavor Grid",
    type: "Frontend",
    image: (
      <Image
        src={haruFashion}
        sizes="100vw"
        fill
        alt="Flavor Grid"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A responsive React-based blog website featuring product highlights, interactive UI, and smooth navigation built with Tailwind CSS.",
    tags: ["NextJS", "TailwindCSS", "JavaScript"],
    liveUrl: "https://haru-fashion.vercel.app/",
    codeUrl: "https://github.com/satnaing/haru-fashion",
    bgColor: "bg-[#A6CECE]",
    githubApi: "https://api.github.com/repos/satnaing/haru-fashion",
  },
  {
    title: "Social Pulse",
    type: "UI/UX",
    image: (
      <Image
        src={haruApi}
        sizes="100vw"
        fill
        alt="Social Pulse"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A RESTful API developed for Haru fashion ecommerce project. Include CRUD operations, authentication, authorization, forgot/reset password and full-text search.",
    tags: ["UI/UX Design", "Figma"],
    liveUrl: "https://satnaing.github.io/haru-api/",
    codeUrl: "https://github.com/satnaing/haru-api",
    bgColor: "bg-[#C5E4E7]",
    githubApi: "https://api.github.com/repos/satnaing/haru-api",
  }
];

export default ProjectSection;
