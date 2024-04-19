import { useEffect, useState } from "react";

export function useResize(): {
  isMobile: boolean;
  width: number;
  height: number;
} {
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resizeEvent = new Event("resize");
    window.dispatchEvent(resizeEvent);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size.width, size.height]);
  const handleResize = (e: UIEvent) => {
    const t = e.currentTarget as Window;

    setSize({ width: t.innerWidth, height: t.innerHeight });
    if (window.matchMedia("(max-width: 960px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return { isMobile, ...size };
}
