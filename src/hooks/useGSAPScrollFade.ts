import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPScrollFade(y: number = 56, duration: number = 1) {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.from(boxRef.current, {
        opacity: 0,
        y,
        duration,
        scrollTrigger: {
          trigger: boxRef.current,
          start: `top 75%`,
          toggleActions: "play none none reverse",
          once: true,
        },
      });
    }
  }, [y, duration]);

  return boxRef;
}
