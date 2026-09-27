import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  cluster: number;
  label?: string;
  pulsePhase: number;
}

interface Edge {
  source: number;
  target: number;
  weight: number;
}

export const ScientificHeroVisualization: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let isVisible = true;
    let isTabActive = !document.hidden;

    // Device Pixel Ratio scaling (capped at 2 for performance)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let logicalWidth = container.clientWidth || 800;
    let logicalHeight = container.clientHeight || 600;

    const applyCanvasDimensions = () => {
      logicalWidth = container.clientWidth || 800;
      logicalHeight = container.clientHeight || 600;
      canvas.width = logicalWidth * dpr;
      canvas.height = logicalHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    applyCanvasDimensions();

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      isHovered: false,
    };

    // Scientific node clusters: Genomic / Proteomic / Epidemiologic / Statistical
    const isMobile = logicalWidth < 768;
    const nodeCount = isMobile ? 22 : 42;
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    const colors = [
      'rgba(45, 212, 191, ',   // Teal-400 (Computational Biology)
      'rgba(96, 165, 250, ',   // Blue-400 (Statistical Modeling)
      'rgba(147, 197, 253, ',  // Indigo-300 (Infectious Epidemiology)
      'rgba(245, 158, 11, ',   // Amber-500 (Diagnostic Signals)
    ];

    const scientificLabels = [
      'VP1-Seq', 'scRNA-seq', 'FMDV-O', 'FMDV-A', 'FMDV-Asia1', 
      'ROC-Power', 'NSP-2B', 'SeroSurv', 'DiffNet', 'BayesEpi'
    ];

    // Seed nodes in a bio-network distribution
    for (let i = 0; i < nodeCount; i++) {
      const cluster = i % 4;
      const radius = Math.random() * 2.2 + 1.6;
      nodes.push({
        x: Math.random() * logicalWidth,
        y: Math.random() * logicalHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius,
        baseRadius: radius,
        color: colors[cluster],
        cluster,
        label: i < scientificLabels.length ? scientificLabels[i] : undefined,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Connect nodes based on distance threshold
    const maxDistance = isMobile ? 90 : 125;
    const connectNodes = () => {
      edges.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            edges.push({
              source: i,
              target: j,
              weight: 1 - dist / maxDistance,
            });
          }
        }
      }
    };
    connectNodes();

    // Resize handler
    const handleResize = () => {
      if (!canvas || !container) return;
      applyCanvasDimensions();
      connectNodes();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Throttled mouse movement
    let mouseRaf: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRaf !== null) return;
      mouseRaf = requestAnimationFrame(() => {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.isHovered = true;
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
    };

    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Visibility & IntersectionObserver: Pause when offscreen or tab hidden to preserve GPU/CPU
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive && isVisible && !prefersReducedMotion) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && isTabActive && !prefersReducedMotion) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Render loop
    let tick = 0;
    const render = () => {
      // Pause completely if offscreen, tab hidden, or reduced motion requested
      if (!isVisible || !isTabActive) return;

      tick += 0.015;
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      // Mouse smoothing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw faint background coordinate grid (computational coordinate space)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 56;
      for (let x = 0; x < logicalWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, logicalHeight);
        ctx.stroke();
      }
      for (let y = 0; y < logicalHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(logicalWidth, y);
        ctx.stroke();
      }

      // Draw network edges
      for (let k = 0; k < edges.length; k++) {
        const edge = edges[k];
        const n1 = nodes[edge.source];
        const n2 = nodes[edge.target];
        
        ctx.strokeStyle = `rgba(45, 212, 191, ${edge.weight * 0.16})`;
        ctx.lineWidth = edge.weight * 1.2;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();

        // Subtle traveling packet along edge to indicate active data processing
        if (!prefersReducedMotion && k % 5 === 0) {
          const packetPos = (tick * 0.8 + k) % 1;
          const px = n1.x + (n2.x - n1.x) * packetPos;
          const py = n1.y + (n2.y - n1.y) * packetPos;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.beginPath();
          ctx.arc(px, py, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw nodes and labels
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Physics step
          node.x += node.vx;
          node.y += node.vy;

          // Bounce off boundaries
          if (node.x < 10 || node.x > logicalWidth - 10) node.vx *= -1;
          if (node.y < 10 || node.y > logicalHeight - 10) node.vy *= -1;

          // Subtle cursor deflection
          if (mouse.isHovered) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 0) {
              const force = (1 - dist / 120) * 0.8;
              node.x += (dx / dist) * force;
              node.y += (dy / dist) * force;

              // Draw subtle connection ray to cursor
              ctx.strokeStyle = `rgba(45, 212, 191, ${(1 - dist / 120) * 0.25})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }

        // Pulse radius
        const pulse = prefersReducedMotion ? 1 : Math.sin(tick * 2 + node.pulsePhase) * 0.4 + 1;
        const currentRadius = node.baseRadius * pulse;

        // Node glow
        ctx.fillStyle = `${node.color}0.15)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `${node.color}0.85)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle biological label on selected nodes
        if (node.label && logicalWidth >= 768) {
          ctx.fillStyle = 'rgba(203, 213, 225, 0.4)';
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mouseRaf !== null) cancelAnimationFrame(mouseRaf);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair opacity-85"
        aria-hidden="true"
      />
      {/* Subtle directional gradient overlay to ensure text contrast on left */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
