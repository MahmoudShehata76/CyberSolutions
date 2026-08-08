"use client";
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

interface GsapButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function GsapButton({ children, href, className = "", onClick }: GsapButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fillerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const filler = fillerRef.current;
    if (!button || !text || !filler) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const { left, top } = button.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Start the filler at the mouse position
      gsap.set(filler, { x, y, scale: 0 });
      
      // Animate the filler to cover the button
      gsap.to(filler, {
        scale: 4,
        duration: 0.6,
        ease: 'power3.out',
      });

      // Magnetic text pull
      gsap.to(text, { scale: 1.05, duration: 0.4, ease: 'back.out(1.7)' });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { left, top } = button.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Shrink the filler back to where the mouse left
      gsap.to(filler, {
        x,
        y,
        scale: 0,
        duration: 0.5,
        ease: 'power3.in',
      });

      // Reset text
      gsap.to(text, { scale: 1, duration: 0.4, ease: 'power3.out' });
      // Reset magnetic pull
      gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      // Magnetic pull for the button
      const moveX = (e.clientX - left - width / 2) * 0.2;
      const moveY = (e.clientY - top - height / 2) * 0.2;

      gsap.to(button, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: 'power3.out',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Base styling - allowing overrides via className
  const baseClasses = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold cursor-pointer";
  
  // Combine classes but ensure we have defaults if not provided
  const finalClasses = `${baseClasses} ${className.includes('bg-') ? '' : 'bg-primary'} ${className.includes('text-') ? '' : 'text-white'} ${className}`;

  const innerContent = (
    <div 
      ref={buttonRef} 
      className={finalClasses}
      onClick={onClick}
    >
      <div 
        ref={fillerRef} 
        className="absolute w-24 h-24 rounded-full bg-secondary pointer-events-none -translate-x-1/2 -translate-y-1/2 origin-center"
        style={{ transform: 'scale(0)' }}
      ></div>
      <div ref={textRef} className="relative z-10 pointer-events-none flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className="inline-block">{innerContent}</a>
      </Link>
    );
  }

  return innerContent;
}
