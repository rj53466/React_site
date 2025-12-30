
import React, { useEffect, useRef } from 'react';

interface GalaxyProps {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
  opacity?: number;
}

const Galaxy: React.FC<GalaxyProps> = ({
  focal = [0.5, 0.5],
  rotation = [1.0, 0.0],
  starSpeed = 0.5,
  density = 1,
  hueShift = 140,
  disableAnimation = false,
  speed = 1.0,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0.2,
  mouseRepulsion = true,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  transparent = true,
  opacity = 0.15 // Lowered default opacity for subtlety
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    let dpr = window.devicePixelRatio || 1;

    const createStars = (width: number, height: number) => {
      const starCount = Math.floor((width * height) / 3000) * density;
      const newStars = [];
      
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: (Math.random() * 1.1 + 0.2),
          color: `hsla(${(Math.random() * 60 + hueShift) % 360}, ${saturation * 100}%, 90%, 1)`,
          vx: (Math.random() - 0.5) * starSpeed * 0.5,
          vy: (Math.random() - 0.5) * starSpeed * 0.5,
          phase: Math.random() * Math.PI * 2,
          z: Math.random() * 0.5 + 0.5 
        });
      }
      starsRef.current = newStars;
    };

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        w = width;
        h = height;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (starsRef.current.length === 0) createStars(w, h);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const mouseRef = { current: { x: -1000, y: -1000 } };
    if (mouseInteraction) window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      if (!transparent) {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, w, h);
      } else {
        ctx.clearRect(0, 0, w, h);
      }

      const time = Date.now() * 0.001 * speed;
      const focalX = w * focal[0];
      const focalY = h * focal[1];

      starsRef.current.forEach(star => {
        if (!disableAnimation) {
          star.x += star.vx * star.z;
          star.y += star.vy * star.z;

          const dx_f = star.x - focalX;
          const dy_f = star.y - focalY;
          const dist = Math.sqrt(dx_f * dx_f + dy_f * dy_f);
          const currentAngle = Math.atan2(dy_f, dx_f);
          const finalAngle = currentAngle + (rotationSpeed * 0.003 * rotation[0] * star.z);
          star.x = focalX + Math.cos(finalAngle) * dist;
          star.y = focalY + Math.sin(finalAngle) * dist;

          const targetX = autoCenterRepulsion > 0 ? w / 2 : mouseRef.current.x;
          const targetY = autoCenterRepulsion > 0 ? h / 2 : mouseRef.current.y;
          const currentRepulsion = autoCenterRepulsion > 0 ? autoCenterRepulsion : repulsionStrength;

          if (mouseRepulsion || autoCenterRepulsion > 0) {
            const dx = star.x - targetX;
            const dy = star.y - targetY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 120) {
              const push = (120 - distance) * 0.005 * currentRepulsion;
              star.x += (dx / distance) * push;
              star.y += (dy / distance) * push;
            }
          }

          const pad = 100;
          if (star.x < -pad) star.x = w + pad;
          if (star.x > w + pad) star.x = -pad;
          if (star.y < -pad) star.y = h + pad;
          if (star.y > h + pad) star.y = -pad;
        }

        const twinkle = Math.sin(time * 2.5 + star.phase) * twinkleIntensity;
        ctx.globalAlpha = Math.max(0.05, 0.5 + twinkle);
        
        if (glowIntensity > 0) {
          ctx.shadowBlur = star.size * 6 * glowIntensity;
          ctx.shadowColor = star.color;
        }
        
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [focal, rotation, starSpeed, density, hueShift, disableAnimation, speed, mouseInteraction, glowIntensity, saturation, mouseRepulsion, twinkleIntensity, rotationSpeed, repulsionStrength, autoCenterRepulsion, transparent]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 block w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity }}
    />
  );
};

export default Galaxy;
