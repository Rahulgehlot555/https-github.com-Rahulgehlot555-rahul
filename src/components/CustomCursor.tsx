import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

export default function CustomCursor() {
  const [isPresent, setIsPresent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<'default' | 'clickable' | 'video' | 'input'>('default');

  // Motion values for smooth cursor lag
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Soft spring config for lag-following ring
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide default cursor generally or for specific areas - we'll handle custom overlays
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return; // Do not render on mobile / tablets
    }

    setIsPresent(true);

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.closest('button') || 
        target.closest('a') || 
        target.closest('[role="button"]') || 
        target.closest('#work-category-tabs button');
      
      const isVideoItem = target.closest('#work-item-list button') || target.closest('.aspect-video');
      const isInputField = target.closest('input') || target.closest('textarea');

      if (isVideoItem) {
        setIsHovered(true);
        setHoverType('video');
      } else if (isClickable) {
        setIsHovered(true);
        setHoverType('clickable');
      } else if (isInputField) {
        setIsHovered(true);
        setHoverType('input');
      } else {
        setIsHovered(false);
        setHoverType('default');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    // Suppress default cursor when entering the HTML body for clean effect
    document.documentElement.classList.add('lg:cursor-none');

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('lg:cursor-none');
    };
  }, [mouseX, mouseY]);

  if (!isPresent) return null;

  return (
    <>
      {/* 1. Core Centered Dynamic Tiny Dot */}
      <motion.div
        style={{
          left: mouseX,
          top: mouseY,
          x: '-50%',
          y: '-50%',
        }}
        className="fixed w-2 h-2 bg-brand-accent rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        animate={{
          scale: isHovered ? (hoverType === 'input' ? 0.4 : 1.5) : 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Outer Lagging Dynamic Follower Circle */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
        }}
        className="fixed rounded-full pointer-events-none z-50 border border-brand-accent/40 bg-brand-accent/[0.02] hidden lg:flex items-center justify-center overflow-hidden"
        animate={{
          width: isHovered 
            ? hoverType === 'video' 
              ? 72 
              : hoverType === 'clickable' 
                ? 48 
                : 16
            : 24,
          height: isHovered 
            ? hoverType === 'video' 
              ? 72 
              : hoverType === 'clickable' 
                ? 48 
                : 16
            : 24,
          borderColor: isHovered ? '#C8FF00' : 'rgba(200, 255, 0, 0.4)',
          backgroundColor: isHovered 
            ? hoverType === 'video' 
              ? 'rgba(200, 255, 0, 0.15)' 
              : 'rgba(200, 255, 0, 0.05)'
            : 'rgba(200, 255, 0, 0.01)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Dynamic Inner Text context for hover indicators */}
        <AnimatePresence>
          {isHovered && hoverType === 'video' && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-[10px] font-mono text-brand-bg font-bold tracking-widest uppercase bg-brand-accent px-1.5 py-0.5 rounded-xs"
            >
              PLAY
            </motion.span>
          )}
          {isHovered && hoverType === 'clickable' && hoverType !== 'video' && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-ping"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
