import React, { useEffect, useRef } from 'react';

export type ScientificDataVariant = 
  | 'network'          // Molecular/computational biology nodes with connection thresholds
  | 'genomic-traces'  // Horizontal computational rails, sequence locus markers, and traveling packets
  | 'mathematical'    // Statistical coordinate grid with distribution traces and orthogonal axes
  | 'molecular';       // Clustered interaction nodes with geometric connections

export interface ScientificDataBackgroundProps {
  variant?: ScientificDataVariant;
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'normal' | 'static';
  opacity?: number;
  interactive?: boolean;
  className?: string;
}

interface DataPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  color: string;
  cluster: number;
  pulsePhase: number;
}

interface CoordinateGrid {
  spacing: number;
  xTicks: number[];
  yTicks: number[];
}

export const ScientificDataBackground: React.FC<ScientificDataBackgroundProps> = ({
  variant = 'network',
  density = 'medium',
  speed = 'slow',
  opacity = 0.45,
  interactive = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isStatic = speed === 'static' || prefersReducedMotion;

    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = !document.hidden;

    // Device Pixel Ratio scaling (capped at 2)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = container.clientWidth || 800;
    let height = container.clientHeight || 600;

    const applyCanvasSize = () => {
      width = container.clientWidth || 800;
      height = container.clientHeight || 600;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    applyCanvasSize();

    // Speed multiplier
    const speedFactor = speed === 'slow' ? 0.35 : speed === 'normal' ? 0.65 : 0;

    // Density mapping
    const baseCount = variant === 'genomic-traces' ? 28 : 38;
    const densityMultiplier = density === 'low' ? 0.6 : density === 'medium' ? 1.0 : 1.4;
    const pointCount = Math.floor(baseCount * densityMultiplier * (width < 768 ? 0.55 : 1));

    // Colors matching institutional scientific palette
    const palette = [
      'rgba(13, 148, 136, ',  // Teal-600
      'rgba(45, 212, 191, ',  // Teal-400
      'rgba(37, 99, 235, ',   // Sci-600 Blue
      'rgba(96, 165, 250, ',  // Blue-400
      'rgba(148, 163, 184, ', // Slate-400
    ];

    // Seed points
    const points: DataPoint[] = [];
    for (let i = 0; i < pointCount; i++) {
      const radius = Math.random() * 1.8 + 1.2;
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedFactor * 0.5,
        vy: (Math.random() - 0.5) * speedFactor * 0.5,
        baseRadius: radius,
        color: palette[i % palette.length],
        cluster: i % 4,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Grid coordinates
    const grid: CoordinateGrid = {
      spacing: 64,
      xTicks: [],
      yTicks: [],
    };

    const updateGrid = () => {
      grid.xTicks = [];
      grid.yTicks = [];
      for (let x = 0; x < width; x += grid.spacing) grid.xTicks.push(x);
      for (let y = 0; y < height; y += grid.spacing) grid.yTicks.push(y);
    };
    updateGrid();

    // Mouse tracking with throttled requestAnimationFrame and cached rect
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovered: false,
    };

    let canvasRect: DOMRect | null = null;
    let mouseRaf: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || mouseRaf !== null) return;
      mouseRaf = requestAnimationFrame(() => {
        if (!canvasRect && canvas) canvasRect = canvas.getBoundingClientRect();
        if (canvasRect) {
          mouse.targetX = e.clientX - canvasRect.left;
          mouse.targetY = e.clientY - canvasRect.top;
          mouse.isHovered = true;
        }
        mouseRaf = null;
      });
    };

    const handleMouseLeave = () => {
      if (mouseRaf !== null) {
        cancelAnimationFrame(mouseRaf);
        mouseRaf = null;
      }
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.isHovered = false;
      canvasRect = null;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    // High performance scroll parallax (no getBoundingClientRect layout thrashing)
    let containerTop = container.offsetTop;
    let scrollYOffset = 0;
    let scrollRaf: number | null = null;
    const handleScroll = () => {
      canvasRect = null;
      if (isStatic || scrollRaf !== null) return;
      scrollRaf = requestAnimationFrame(() => {
        const vh = window.innerHeight || 800;
        scrollYOffset = Math.max(-25, Math.min(25, ((containerTop - window.scrollY) / vh) * 20));
        scrollRaf = null;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize observer
    const handleResize = () => {
      if (!container || !canvas) return;
      canvasRect = null;
      containerTop = container.offsetTop;
      applyCanvasSize();
      updateGrid();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Pause when off-screen using IntersectionObserver and tab visibility
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !isStatic) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive && !isStatic) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // RENDER FUNCTION
    let tick = 0;
    const render = () => {
      if ((!isVisible || !isTabActive) && !isStatic) return;

      tick += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse
      if (interactive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;
      }

      // 1. Subtle Scientific Coordinate Grid & Mathematical Axes
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.06)';
      ctx.lineWidth = 1;

      // Coordinate axes
      for (const x of grid.xTicks) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();

        // Small mathematical tick marks on grid intersections
        for (const y of grid.yTicks) {
          ctx.strokeStyle = 'rgba(45, 212, 191, 0.08)';
          ctx.strokeRect(x - 2, y - 2, 4, 4);
          ctx.strokeStyle = 'rgba(148, 163, 184, 0.06)';
        }
      }

      // 2. Variant-Specific Traces & Connections
      if (variant === 'network' || variant === 'molecular') {
        const connectionDist = variant === 'molecular' ? 140 : 110;
        
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const dx = points[i].x - points[j].x;
            const dy = points[i].y - points[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDist) {
              const alpha = (1 - dist / connectionDist) * 0.18;
              ctx.strokeStyle = `rgba(13, 148, 136, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
              ctx.stroke();

              // Occasional data packet pulse along connection
              if (!isStatic && (i + j) % 7 === 0) {
                const packetT = (tick * 0.6 + i) % 1;
                const px = points[i].x + (points[j].x - points[i].x) * packetT;
                const py = points[i].y + (points[j].y - points[i].y) * packetT;
                ctx.fillStyle = 'rgba(45, 212, 191, 0.45)';
                ctx.beginPath();
                ctx.arc(px, py, 1.2, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      } else if (variant === 'genomic-traces') {
        // Horizontal computational rails and locus points
        const railCount = 4;
        const railSpacing = height / (railCount + 1);

        for (let r = 1; r <= railCount; r++) {
          const railY = r * railSpacing + scrollYOffset * 0.4;
          ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)';
          ctx.lineWidth = 1;
          ctx.setLineDash([8, 8]);
          ctx.beginPath();
          ctx.moveTo(0, railY);
          ctx.lineTo(width, railY);
          ctx.stroke();
          ctx.setLineDash([]);

          // Locus vertical markers
          const markerSpacing = 160;
          for (let mx = markerSpacing / 2; mx < width; mx += markerSpacing) {
            ctx.strokeStyle = 'rgba(13, 148, 136, 0.15)';
            ctx.beginPath();
            ctx.moveTo(mx, railY - 6);
            ctx.lineTo(mx, railY + 6);
            ctx.stroke();
          }

          // Traveling packet wave along rail
          if (!isStatic) {
            const waveX = ((tick * 40 * (r % 2 === 0 ? 1 : -1)) + width) % width;
            ctx.fillStyle = 'rgba(45, 212, 191, 0.35)';
            ctx.beginPath();
            ctx.arc(waveX, railY, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      } else if (variant === 'mathematical') {
        // Statistical distribution curve trace (subtle Gaussian/ROC shape across background)
        const centerY = height * 0.55 + scrollYOffset * 0.5;
        const waveLength = width * 0.7;
        ctx.strokeStyle = 'rgba(13, 148, 136, 0.12)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const normX = (x - width / 2) / (waveLength / 3);
          const gaussian = Math.exp(-0.5 * normX * normX);
          const y = centerY - gaussian * (height * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Baseline reference
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.08)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(width, centerY);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // 3. Render and Update Points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        if (!isStatic) {
          // Physics step
          pt.x += pt.vx;
          pt.y += pt.vy;

          // Boundary bounce
          if (pt.x < 0 || pt.x > width) pt.vx *= -1;
          if (pt.y < 0 || pt.y > height) pt.vy *= -1;

          // Interactive cursor reaction (subtle gentle deflection)
          if (interactive && mouse.isHovered) {
            const dx = pt.x - mouse.x;
            const dy = pt.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100 && dist > 0) {
              const force = (1 - dist / 100) * 0.35;
              pt.x += (dx / dist) * force;
              pt.y += (dy / dist) * force;
            }
          }
        }

        // Point rendering
        const pulse = isStatic ? 1 : Math.sin(tick * 1.5 + pt.pulsePhase) * 0.3 + 1;
        const r = pt.baseRadius * pulse;

        // Faint glow halo
        ctx.fillStyle = `${pt.color}0.08)`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Point core
        ctx.fillStyle = `${pt.color}0.45)`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!isStatic) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    // Initial render
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mouseRaf !== null) cancelAnimationFrame(mouseRaf);
      if (scrollRaf !== null) cancelAnimationFrame(scrollRaf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [variant, density, speed, interactive]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ opacity }}
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
