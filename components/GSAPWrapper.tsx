"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPWrapper({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const elements = container.current.querySelectorAll("[data-aos]");
      
      elements.forEach((el) => {
        const animType = el.getAttribute("data-aos");
        const delay = parseInt(el.getAttribute("data-aos-delay") || "0") / 1000;
        
        let fromVars: gsap.TweenVars = { opacity: 0 };
        let toVars: gsap.TweenVars = {
          opacity: 1,
          duration: 0.8,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        };

        if (animType === "fade-up") {
          fromVars.y = 50;
          toVars.y = 0;
        } else if (animType === "fade-down") {
          fromVars.y = -50;
          toVars.y = 0;
        } else if (animType === "fade-left") {
          fromVars.x = 50;
          toVars.x = 0;
        } else if (animType === "fade-right") {
          fromVars.x = -50;
          toVars.x = 0;
        } else if (animType === "zoom-in") {
          fromVars.scale = 0.8;
          toVars.scale = 1;
        } else if (animType === "zoom-out") {
          fromVars.scale = 1.1;
          toVars.scale = 1;
        }

        gsap.fromTo(el, fromVars, toVars);
      });

      const counters = container.current.querySelectorAll(".counter");
      counters.forEach((el) => {
        const target = parseInt(el.getAttribute("data-target") || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.innerHTML = Math.round(obj.val).toString();
          }
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} style={{ overflow: "hidden" }}>
      {children}
    </div>
  );
}
