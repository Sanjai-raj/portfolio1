"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useTheme } from "next-themes";
// DON'T import gsap or ScrollTrigger at module scope
import dynamic from "next/dynamic";
import profile from "../public/sanjai.png";

import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import AboutBgSvg from "@/components/AboutBgSvg";
import EduGroup from "@/components/EduGroup";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const eduRef = useRef<HTMLDivElement | null>(null);
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

  useEffect(() => {
    // run only on client and only if the ref is set
    if (typeof window === "undefined" || !sectionRef.current) return;

    let ctx: any;
    let localGsap: any;
    let localScrollTrigger: any;

    (async () => {
      try {
        // dynamic import and normalize exports across environments
        const gsapMod: any = await import("gsap");
        localGsap = gsapMod.gsap ?? gsapMod.default ?? gsapMod;

        // try plugin import paths and normalize
        let stMod: any;
        try {
          stMod = await import("gsap/ScrollTrigger");
        } catch (e) {
          // fallback to dist path if some setups require it
          stMod = await import("gsap/dist/ScrollTrigger");
        }
        localScrollTrigger = stMod.ScrollTrigger ?? stMod.default ?? stMod;

        if (localScrollTrigger && localGsap && typeof localGsap.registerPlugin === "function") {
          localGsap.registerPlugin(localScrollTrigger);
        } else {
          // if registerPlugin is not available, bail early to avoid runtime error
          // (this is defensive; normally the above will succeed)
          return;
        }

        // create context scoped to the section node
        ctx = localGsap.context((self: any) => {
          const q = localGsap.utils.selector(self);

          // profile-picture animation
          localGsap.fromTo(
            q(".profile-picture"),
            { x: -200, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              scrollTrigger: { trigger: q(".profile-picture"), start: "20% bottom" },
            }
          );

          const fromAnimation = { y: 100, opacity: 0 };
          const toAnimation = (triggerTarget: string) => ({
            y: 0,
            opacity: 1,
            scrollTrigger: { trigger: q(`.${triggerTarget}`), start: "top bottom" },
          });

          // about-intro
          localGsap.fromTo(q(".about-intro"), fromAnimation, toAnimation("about-intro"));

          // edu-bg
          localGsap.fromTo(q(".edu-bg"), fromAnimation, toAnimation("edu-bg"));

          // bg svg parallax effect
          localGsap.fromTo(
            q(".bg-svg"),
            { y: -80 },
            {
              y: 65,
              duration: 3,
              scrollTrigger: { trigger: q(".bg-svg"), scrub: true },
            }
          );

          // image bg svg parallax effect
          localGsap.fromTo(
            q(".img-svg"),
            { y: -30 },
            {
              y: 30,
              scrollTrigger: { trigger: q(".img-svg"), start: "80% 75%", scrub: true },
            }
          );
        }, sectionRef.current); // scope to DOM node
      } catch (err) {
        // fail quietly but log for debugging
        // eslint-disable-next-line no-console
        console.warn("GSAP init failed:", err);
      }
    })();

    return () => {
      // revert GSAP context
      try {
        if (ctx && typeof ctx.revert === "function") ctx.revert();
      } catch (e) {
        // ignore
      }

      // kill any ScrollTrigger instances (best-effort)
      try {
        const ScrollTriggerGlobal =
          (window as any)?.ScrollTrigger ||
          (localGsap && localGsap.ScrollTrigger) ||
          localScrollTrigger;
        if (ScrollTriggerGlobal && typeof ScrollTriggerGlobal.getAll === "function") {
          ScrollTriggerGlobal.getAll().forEach((t: any) => t.kill && t.kill());
        }
      } catch (e) {
        // ignore - cleanup best-effort
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={sectionRef} className="about-panel bg-white dark:bg-[#1B2731] relative">
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
                <svg
                  width="96"
                  height="21"
                  viewBox="0 0 96 21"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute -top-14 -left-14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M79.2202 0.959991L62.7802 17.32L46.3301 0.959991L29.8902 17.32L13.4501 0.959991L0.410156 13.94L0.400146 17.58L13.4501 4.58999L29.8902 20.95L46.3301 4.58999L62.7802 20.95L79.2202 4.58999L93.7302 19.02L95.5402 17.19L79.2202 0.959991Z" />
                </svg>

                <div className="profile-picture overflow-hidden md:overflow-visible rounded-md md:shadow-2xl">
                  <Image
                    src={profile}
                    width={500}
                    height={530}
                    priority
                    alt="Sanjairaj profile picture"
                    className="rounded-md"
                  />
                </div>

                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-marrsgreen dark:fill-carrigreen absolute bottom-8 -right-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.68 11.51L9.23 7.05998L13.68 2.61C14.24 2.05 14.24 1.12999 13.68 0.569994C13.12 0.00999391 12.2 0.00999391 11.64 0.569994L7.19002 5.02001L2.74001 0.569994C2.18001 0.00999391 1.26003 0.00999391 0.700029 0.569994C0.140029 1.12999 0.140029 2.05 0.700029 2.61L5.15004 7.05998L0.700029 11.51C0.140029 12.07 0.140029 12.99 0.700029 13.55C1.26003 14.11 2.18001 14.11 2.74001 13.55L7.19002 9.09999L11.64 13.55C12.2 14.11 13.12 14.11 13.68 13.55C14.24 12.99 14.24 12.08 13.68 11.51Z" />
                </svg>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="img-svg hidden lg:block fill-[#FF9D00] absolute -bottom-10 right-6 scale-150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6799 5.68002C11.6799 8.65002 9.27994 11.05 6.30994 11.05C3.33994 11.05 0.939941 8.65002 0.939941 5.68002C0.939941 2.71002 3.33994 0.309998 6.30994 0.309998C9.27994 0.309998 11.6799 2.71002 11.6799 5.68002Z" />
                </svg>
              </div>
            </div>

            <p className="col-start-1 col-end-4 row-start-4 row-end-6 lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-6 lg:ml-8 lg:mt-auto about-intro">
              I am a MERN stack developer with a strong foundation in computer science and
              experience building secure, scalable web applications. Certified in Pega System
              Architect, AWS Cloud Practitioner, and MongoDB. I continuously explore modern
              technologies to create impactful digital solutions.
            </p>

            <div
              className="col-start-3 col-end-6 row-start-1 row-end-6 lg:row-start-2 lg:row-end-7 md:ml-8 place-content-end"
              ref={eduRef}
            >
              <p className="edu-bg my-4">Here is my educational background.</p>
              {educationInfo.map((edu) => (
                <EduGroup edu={edu} key={edu.id} />
              ))}
            </div>
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

const AboutSectionClient = dynamic(() => Promise.resolve(AboutSection), { ssr: false });
export default AboutSectionClient;
