import { motion } from "framer-motion";
import Image from "next/image";
import LinkButton from "../components/LinkButton";
import satNaing from "../public/anime-1.png";
import laptop from "../public/laptop-illustration.webp";

const HeroSection: React.FC = () => {
  return (
    <section className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-primarylight/20 blur-[100px] opacity-30" />
      </div>

      <span
        aria-hidden="true"
        className="absolute -top-36 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0 opacity-10 dark:opacity-20"
      >
        FREELANCER PASSIONATE PROGRAMMER SOFTWARE DEVELOPER
      </span>

      <div className="z-10 select-none mt-0 xs:mt-6 sm:mt-14 lg:mt-0 px-0 mx-auto lg:p-0 lg:basis-1/3">
        <div className="relative w-72 md:w-80 h-80 flex items-center mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [-7, 7, -7] }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              scale: { duration: 0.8, ease: "easeOut" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute pointer-events-none scale-90 xs:scale-95 mx-auto"
          >
            <Image
              src={satNaing}
              width={1177}
              height={1374}
              priority
              id="character-illustration"
              aria-label="Sanjairaj character illustration levitating with a Macbook"
              alt="Sanjairaj character illustration"
            />
          </motion.div>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="absolute top-28 sm:top-32 left-0 right-0 mx-auto w-max scale-[.25] xs:scale-[.30] pointer-events-none"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={laptop}
                width={175}
                height={250}
                aria-hidden="true"
                alt="Laptop illustration"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="lg:basis-2/3 z-10 relative">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary lg:text-lg font-medium dark:text-primarylight"
        >
          Heyy, Myself...
        </motion.span>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1"
          >
            Sanjairaj
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-5xl block md:my-3 text-primary dark:text-primarylight font-medium"
          >
            A Software Developer
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-2 my-4 md:mb-8"
        >
          <p className="mb-1">
            I am a Software Developer with a passion for delivering exceptional
            results.
          </p>
          <p>
            With expertise in the MERN stack—React.js, Next.js, Node.js,
            Express.js, and MongoDB—I combine strong technical skills with
            practical problem-solving to build scalable, efficient, and
            user-focused applications, enhanced by experience in AI integration
            and cloud technologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
            Contact me!
          </LinkButton>
        </motion.div>
      </div>

      <motion.a
        href="#whoami"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="group absolute link-outline hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-primary dark:group-hover:text-primarylight transition-colors">
          Scroll
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-primary dark:group-hover:fill-primarylight transition-colors"
        >
          <path d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"></path>
          <path d="M11 6h2v6h-2z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="dark:fill-bglight group-hover:fill-primary dark:group-hover:fill-primarylight transition-colors"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </motion.a>
    </section>
  );
};

export default HeroSection;
