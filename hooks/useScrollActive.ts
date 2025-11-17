import { useEffect, useState } from "react";

export default function useScrollActive(ref: React.RefObject<HTMLElement | null>, threshold = 0.3) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;

    const onScroll = () => {
      const rect = ref.current!.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Consider active when top is within viewport threshold
      const visibleRatio = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      setActive(visibleRatio >= threshold);
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
