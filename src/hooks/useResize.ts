import { useEffect, useState } from "react";

export function useResize(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if (window.matchMedia("(max-width: 960px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return isMobile;
}
