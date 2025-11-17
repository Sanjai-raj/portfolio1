import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  index: number;
  project: {
    title: string;
    type: string;
    image: JSX.Element;
    desc: string;
    tags: string[];
    liveUrl: string;
    codeUrl: string;
    bgColor: string;
    githubApi: string;
  };
};

const ProjectCard: React.FC<Props> = ({ index, project }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const even = index % 2 === 0;

  // Animations
  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: `70% bottom`,
      },
    });

    tl.fromTo(
      q(".project-image"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeInOut",
        duration: 0.5,
        stagger: 0.2,
      }
    )
      .fromTo(q(".project-text"), { y: 100 }, { y: 0, stagger: 0.2 }, "<25%")
      .fromTo(
        q(".project-desc"),
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 },
        "<10%"
      )
      .fromTo(
        q(".project-tags"),
        { y: -40 },
        { y: 0, stagger: 0.1, ease: "Elastic.easeOut" },
        "<25%"
      );
  }, []);

  return (
    <div ref={sectionRef} className={`md:basis-1/2 md:px-8 py-2 md:py-4`}>
      <div className={`project-card project-card-${index}`}>
        <div className="overflow-hidden">
          <div
            className={`project-image ${project.bgColor} relative aspect-[16/9]`}
          >
            {project.image}
          </div>
        </div>

        {/* TITLE ONLY — icons removed */}
        <div className="overflow-hidden">
          <div className="project-text">
            <h3 className="text-marrsgreen dark:text-carrigreen text-lg my-2 font-medium">
              {project.title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="overflow-hidden">
          <p className="project-desc">{project.desc}</p>
        </div>

        {/* TAGS */}
        <ul
          aria-label={`Tech Stack used in ${project.title}`}
          className={`flex flex-wrap mt-2 mb-4 md:mt-2 md:mb-6 text-sm overflow-hidden`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`project-tags mr-2 my-1 bg-[#E2EFEF] dark:bg-carddark py-1 px-2 rounded`}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
