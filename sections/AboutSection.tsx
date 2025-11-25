"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import profile from "../public/sanjai.png";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const { theme } = useTheme();

  // Set active link for about section
  const aboutSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();

  useEffect(() => {
    if (typeof onSectionChange === "function") {
      onSectionChange(aboutSection ? "who am i?" : "");
    }
  }, [aboutSection, onSectionChange]);

  return (
    <div ref={sectionRef} className="about-panel bg-white dark:bg-[#1B2731] relative overflow-hidden">
      <section id="whoami" className="section">
        <RoughNotationGroup>
          <div className="text-center">
            <RoughNotation
              type="underline"
              color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
              strokeWidth={2}
              order={1}
              show={isSecOnScreen}
            >
              <h2 className="section-heading">Who am I?</h2>
            </RoughNotation>
          </div>

          <div className="md:grid grid-rows-5 lg:grid-rows-6 grid-cols-5">
            <div className="col-start-1 col-end-3 row-start-1 row-end-4 lg:row-end-7 lg:col-start-1 lg:col-end-3 flex justify-center items-center py-4 lg:mb-[20%]">
              <div className="relative w-72">
                <motion.svg
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  className="hidden lg:block fill-primary dark:fill-primarylight absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </motion.svg>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="overflow-hidden md:overflow-visible rounded-md md:shadow-2xl"
                >
                  <Image
                    src={profile}
                    width={500}
                    height={530}
                    priority
                    alt="Sanjairaj profile picture"
                    className="rounded-md"
                  />
                </motion.div>

                <motion.svg
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="hidden lg:block fill-primary dark:fill-primarylight absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </motion.svg>

                <motion.svg
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </motion.svg>
              </div>
            </div>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-start-1 col-end-4 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto text-lg leading-relaxed"
            >
              I am a MERN stack developer with a strong foundation in computer science and
              experience building secure, scalable web applications. Certified in Pega System
              Architect, AWS Cloud Practitioner, and MongoDB. I continuously explore modern
              technologies to create impactful digital solutions.
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8"
            >
              <p className="my-4 text-primary dark:text-primarylight font-semibold">Here is my educational background.</p>
              {educationInfo.map((edu, index) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </motion.div>
          </div>
        </RoughNotationGroup>
      </section>

      <AboutBgSvg />
    </div>
  );
};

const educationInfo = [
  {
    id: 1,
    title: "B.E in Computer Science and Engineering",
    subTitle: "VSB College of Engineering, Coimbatore | 2021 - 2025",
    list: [
      "Studied software engineering, algorithms, cloud, and full-stack development",
      "Graduating with CGPA 8.0",
      "Hands-on experience in MERN stack and AI-integrated applications",
    ],
  },
  {
    id: 2,
    title: "Certifications",
    subTitle: "Multiple Platforms | 2023 - 2024",
    list: [
      "Pega System Architect (2024)",
      "AWS Cloud Practitioner (2023)",
      "MongoDB University – M001 (2024)",
      "Cloud Computing & Web Development (2023)",
    ],
  },
  {
    id: 3,
    title: "Technical Focus",
    subTitle: "Specializations",
    list: [
      "Full-Stack Development (MERN Stack)",
      "Deep Learning Model Integration",
      "Cloud & DevOps Basics (AWS, Docker, Firebase)",
    ],
  },
];

export default AboutSection;
