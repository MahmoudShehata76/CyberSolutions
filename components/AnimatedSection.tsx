"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "zoom-in" | "slide-right" | "slide-left";
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
}: AnimatedSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;
      
      const el = container.current;
      
      let fromVars: gsap.TweenVars = { opacity: 0 };
      let toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // Trigger when top of element hits 85% of viewport
          toggleActions: "play none none reverse", // replay when scrolling back up
        },
      };

      switch (animation) {
        case "fade-up":
          fromVars.y = 50;
          toVars.y = 0;
          break;
        case "fade-in":
          // already opacity 0 -> 1
          break;
        case "zoom-in":
          fromVars.scale = 0.8;
          toVars.scale = 1;
          break;
        case "slide-right":
          fromVars.x = -50;
          toVars.x = 0;
          break;
        case "slide-left":
          fromVars.x = 50;
          toVars.x = 0;
          break;
      }

      gsap.fromTo(el, fromVars, toVars);
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}
