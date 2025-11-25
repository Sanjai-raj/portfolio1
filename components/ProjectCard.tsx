import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`md:basis-1/2 md:px-8 py-2 md:py-4`}
    >
      <motion.div
        whileHover={{ y: -10 }}
        className={`project-card project-card-${index} h-full flex flex-col`}
      >
        <div className="overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300">
          <div
            className={`project-image ${project.bgColor} relative aspect-[16/9]`}
          >
            {project.image}
          </div>
        </div>

        {/* TITLE ONLY — icons removed */}
        <div className="overflow-hidden mt-4">
          <div className="project-text">
            <h3 className="text-primary dark:text-primarylight text-xl my-2 font-bold">
              {project.title}
            </h3>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="overflow-hidden flex-grow">
          <p className="project-desc text-gray-600 dark:text-gray-300 leading-relaxed">{project.desc}</p>
        </div>

        {/* TAGS */}
        <ul
          aria-label={`Tech Stack used in ${project.title}`}
          className={`flex flex-wrap mt-4 mb-4 md:mt-4 md:mb-6 text-sm overflow-hidden`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className={`project-tags mr-2 my-1 bg-blue-50 dark:bg-slate-800 text-primary dark:text-primarylight py-1 px-3 rounded-full font-medium`}
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* LIVE LINK */}
        <div className="mt-auto flex justify-end">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-primary dark:text-primarylight hover:underline group"
          >
            <span>Live Preview</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
