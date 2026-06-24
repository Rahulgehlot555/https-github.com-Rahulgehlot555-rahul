import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Re-calculate window measurements safely with ResizeObserver guidelines
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Set up particles
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      isAccent: boolean;
    }> = [];

    // Initialize random particle coordinate map
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.4 + 0.15,
        isAccent: Math.random() > 0.7, // Some lime green particles, some neutral white
      });
    }

    // Keep track of current mouse coordinate inside the background
    const mouse = { x: -1000, y: -1000, radius: 180 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Frame-by-frame canvas rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Loop through and update individual particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce back from boundaries elegantly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Apply slight interaction with custom cursor
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 0.8;
          p.y -= (dy / dist) * force * 0.8;
        }

        // Color theme: Lime green accent color or modern gray/white
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent 
          ? `rgba(200, 255, 0, ${p.alpha * 0.95})` // Lime Green (#C8FF00)
          : `rgba(255, 255, 255, ${p.alpha * 0.55})`; // Neutral white
        ctx.fill();

        // Connect close lines with matching alpha values for clean cyber-grid feel
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const ldx = p.x - p2.x;
          const ldy = p.y - p2.y;
          const ldist = Math.sqrt(ldx * ldx + ldy * ldy);

          if (ldist < 110) {
            const lineAlpha = (110 - ldist) / 110 * 0.08;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.isAccent || p2.isAccent
              ? `rgba(200, 255, 0, ${lineAlpha * 1.5})`
              : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
