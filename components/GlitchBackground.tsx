
import React, { useEffect, useRef } from 'react';

const GlitchBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const gridRef = useRef<{ char: string; opacity: number; lastUpdate: number }[]>([]);
  const dimsRef = useRef({ cols: 0, rows: 0, width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}abcdefghijklmnopqursuvwxyz';
    const fontSize = 18;

    const initGrid = (cols: number, rows: number) => {
      const newGrid = [];
      for (let i = 0; i < cols * rows; i++) {
        newGrid.push({
          char: characters[Math.floor(Math.random() * characters.length)],
          opacity: Math.random() * 0.12,
          lastUpdate: Date.now() + Math.random() * 2000
        });
      }
      gridRef.current = newGrid;
    };

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      ctx.scale(dpr, dpr);
      
      const cols = Math.ceil(width / fontSize) + 1;
      const rows = Math.ceil(height / fontSize) + 1;
      
      dimsRef.current = { cols, rows, width, height };
      initGrid(cols, rows);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const render = () => {
      const { cols, rows, width, height } = dimsRef.current;
      if (cols === 0) return;

      ctx.clearRect(0, 0, width, height);
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textBaseline = 'top';
      
      const now = Date.now();
      const grid = gridRef.current;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const index = r * cols + c;
          if (!grid[index]) continue;

          const x = c * fontSize;
          const y = r * fontSize;
          
          const dx = x - mouseRef.current.x;
          const dy = y - mouseRef.current.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = 180 * 180;
          const isNearMouse = distSq < radiusSq;

          // Glitch logic: characters update based on time or proximity
          const updateInterval = isNearMouse ? 100 : 3000;
          if (now - grid[index].lastUpdate > updateInterval + Math.random() * 1000) {
            grid[index].char = characters[Math.floor(Math.random() * characters.length)];
            grid[index].lastUpdate = now;
            // Slightly jitter opacity
            if (!isNearMouse) grid[index].opacity = Math.random() * 0.12;
          }

          if (isNearMouse) {
            const proximity = 1 - Math.sqrt(distSq) / 180;
            ctx.fillStyle = `rgba(34, 211, 238, ${0.1 + proximity * 0.5})`;
            // Add a subtle shadow for "glow" effect near mouse
            ctx.shadowBlur = 8 * proximity;
            ctx.shadowColor = 'rgba(34, 211, 238, 0.5)';
          } else {
            ctx.fillStyle = `rgba(34, 211, 238, ${grid[index].opacity})`;
            ctx.shadowBlur = 0;
          }
          
          ctx.fillText(grid[index].char, x, y);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.5 }}
    />
  );
};

export default GlitchBackground;
