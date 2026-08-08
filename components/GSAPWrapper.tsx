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
        
        const fromVars: gsap.TweenVars = { opacity: 0 };
        const toVars: gsap.TweenVars = {
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

      // --- Premium GSAP Button Hover Effect ---
      const buttons = container.current.querySelectorAll("a.bg-primary, button.bg-primary, .btn-primary");
      buttons.forEach((btn) => {
        const htmlBtn = btn as HTMLElement;
        if (htmlBtn.hasAttribute('data-gsap-btn')) return;
        htmlBtn.setAttribute('data-gsap-btn', 'true');
        
        // Remove standard tailwind hover bg so it doesn't conflict
        htmlBtn.classList.remove('hover:bg-primary-dark');
        
        htmlBtn.style.position = 'relative';
        htmlBtn.style.overflow = 'hidden';
        htmlBtn.style.zIndex = '1';
        
        const filler = document.createElement('span');
        filler.style.position = 'absolute';
        filler.style.width = '150%';
        filler.style.paddingBottom = '150%';
        filler.style.backgroundColor = '#00b7ff'; // secondary color
        filler.style.borderRadius = '50%';
        filler.style.pointerEvents = 'none';
        filler.style.left = '50%';
        filler.style.top = '100%';
        filler.style.transform = 'translate(-50%, 0) scale(0)';
        filler.style.zIndex = '-1';
        
        htmlBtn.appendChild(filler);
        
        const handleMouseEnter = () => {
          gsap.killTweensOf(filler);
          gsap.set(filler, { top: '100%', transform: 'translate(-50%, 0) scale(0)' });
          gsap.to(filler, {
            transform: 'translate(-50%, -50%) scale(1)',
            top: '50%',
            duration: 0.5,
            ease: "power3.out"
          });
          gsap.to(htmlBtn, { scale: 1.05, duration: 0.4, ease: "back.out(1.7)" });
        };
        
        const handleMouseLeave = () => {
          gsap.killTweensOf(filler);
          gsap.to(filler, {
            transform: 'translate(-50%, -100%) scale(0)',
            top: '0%',
            duration: 0.5,
            ease: "power3.in"
          });
          gsap.to(htmlBtn, { scale: 1, duration: 0.4, ease: "power3.out" });
          gsap.to(htmlBtn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
        };

        const handleMouseMove = (e: MouseEvent) => {
          const { left, top, width, height } = htmlBtn.getBoundingClientRect();
          const x = (e.clientX - left - width / 2) * 0.2;
          const y = (e.clientY - top - height / 2) * 0.2;
          gsap.to(htmlBtn, { x: x, y: y, duration: 0.6, ease: "power3.out" });
        };
        
        htmlBtn.addEventListener('mouseenter', handleMouseEnter);
        htmlBtn.addEventListener('mouseleave', handleMouseLeave);
        htmlBtn.addEventListener("mousemove", handleMouseMove);
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
