import { useEffect, useState } from "react";

export default function useScrollActive(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const onScroll = () => {
      const rect = ref.current!.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Consider active when the section is within the viewport
      // rect.bottom >= vh * threshold: Bottom of section is below the top trigger line
      // rect.top <= vh * (1 - threshold): Top of section is above the bottom trigger line
      const isActive =
        rect.bottom >= vh * threshold && rect.top <= vh * (1 - threshold);
      setActive(isActive);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref, threshold]);

  return active;
}
