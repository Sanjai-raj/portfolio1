import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section min-h-[700px] text-center"
    >
      <div className="text-center">
        <RoughNotation
          type="underline"
          color="#3B82F6"
          strokeWidth={2}
          order={1}
          show={isSecOnScreen}
        >
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
        </RoughNotation>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 mb-20"
      >
        <h3 className="font-medium text-lg mb-2 md:text-3xl">
          Let's be awesome together!
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose text-gray-600 dark:text-gray-300">
          As a dev, I am driven by my love for coding and my desire for new
          challenges. If you have opportunities for collaboration or want to
          build something amazing, don't hesitate to contact me!
        </p>
        <LinkButton href="mailto:sanjaisundharraj@gmail.com">
          Get in touch!
        </LinkButton>
      </motion.div>
    </section>
  );
};

export default ContactSection;
