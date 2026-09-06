"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  r: number;
  phase: number;
  vx: number;
  vy: number;
};

export function NeuralField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pointer = { x: 0.74, y: 0.4, tx: 0.74, ty: 0.4 };
    let nodes: Node[] = [];
    let raf = 0;
    let width = 0;
    let height = 0;

    const seedNodes = () => {
      const area = width * height;
      const count = Math.min(70, Math.max(26, Math.round(area / 16000)));
      nodes = Array.from({ length: count }, (_, index) => {
        const rightBias = index < 8 || index % 4 === 0;
        return {
          x: rightBias
            ? width * (0.48 + Math.random() * 0.5)
            : Math.random() * width,
          y: Math.random() * height,
          r: 1 + Math.random() * 1.6,
          phase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
        };
      });
      nodes[0] = {
        x: width * 0.78,
        y: height * 0.38,
        r: 2.4,
        phase: 0,
        vx: 0.02,
        vy: 0.015,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = (event.clientX - rect.left) / Math.max(rect.width, 1);
      pointer.ty = (event.clientY - rect.top) / Math.max(rect.height, 1);
    };

    const draw = (time: number) => {
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.clearRect(0, 0, width, height);

      const dark = document.documentElement.classList.contains("dark");
      const nodeRgb = dark ? "243,244,246" : "16,18,24";
      const accent = "47,125,255";
      const px = pointer.x * width;
      const py = pointer.y * height;

      if (!reduce) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > 128) continue;
          const alpha = (1 - dist / 128) * (dark ? 0.16 : 0.12);
          ctx.strokeStyle = `rgba(${accent}, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      nodes.forEach((node, index) => {
        const glow = Math.max(0, 1 - Math.hypot(node.x - px, node.y - py) / 240);
        const pulse = reduce ? 1 : 0.72 + Math.sin(time / 980 + node.phase) * 0.28;
        const core = index === 0;
        ctx.beginPath();
        ctx.fillStyle = core
          ? `rgba(${accent}, ${0.62 + glow * 0.28})`
          : `rgba(${nodeRgb}, ${0.16 + glow * 0.42})`;
        ctx.arc(
          node.x,
          node.y,
          node.r * pulse * (core ? 2.2 : 1 + glow * 0.8),
          0,
          Math.PI * 2,
        );
        ctx.fill();

        if (core) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${accent}, 0.2)`;
          ctx.lineWidth = 1;
          ctx.arc(node.x, node.y, 22 + pulse * 10, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      if (!reduce) raf = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    draw(0);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-55"
      aria-hidden
    />
  );
}
