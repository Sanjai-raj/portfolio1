import { useEffect, useRef, useState } from "react";

export default function useOnScreen<T extends Element = Element>(ref: React.RefObject<T>, options?: IntersectionObserverInit) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;
    if (!("IntersectionObserver" in window)) {
      // fallback: assume visible on client
      setIsOnScreen(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isOnScreen;
}
