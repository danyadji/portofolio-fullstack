"use client";

import React, { useEffect, useRef } from "react";

interface DotFieldProps {
  dotColor?: string;
  dotSize?: number;
  spacing?: number;
  waveSpeed?: number;
  waveAmplitude?: number;
  mouseRadius?: number;
  className?: string;
}

export default function DotField({
  dotColor = "#ffffff",
  dotSize = 1.1,
  spacing = 28,
  waveSpeed = 0.0015,
  waveAmplitude = 3,
  mouseRadius = 130,
  className = "",
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += waveSpeed * 16;
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;

      // Detect dark mode automatically if dotColor is auto or default
      const isDark = document.documentElement.classList.contains("dark");
      let activeColor = dotColor;
      if (dotColor === "auto" || dotColor === "#ffffff") {
        activeColor = isDark ? "#ffffff" : "#000000";
      }
      ctx.fillStyle = activeColor;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const baseX = i * spacing;
          const baseY = j * spacing;

          // Gentle sine wave displacement
          const waveX = Math.sin(time + j * 0.2 + i * 0.1) * waveAmplitude;
          const waveY = Math.cos(time + i * 0.2 + j * 0.1) * waveAmplitude;

          let posX = baseX + waveX;
          let posY = baseY + waveY;

          // Distance to mouse
          const dx = posX - mouseX;
          const dy = posY - mouseY;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = mouseRadius * mouseRadius;

          let currentSize = dotSize;
          let opacity = isDark ? 0.5 : 0.3;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const factor = 1 - dist / mouseRadius;
            currentSize = dotSize + factor * 2.2;
            opacity = (isDark ? 0.5 : 0.3) + factor * 0.5;

            // Subtle push effect away from cursor
            const angle = Math.atan2(dy, dx);
            const push = factor * 8;
            posX += Math.cos(angle) * push;
            posY += Math.sin(angle) * push;
          }

          ctx.beginPath();
          ctx.globalAlpha = opacity;
          ctx.arc(posX, posY, currentSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dotColor, dotSize, spacing, waveSpeed, waveAmplitude, mouseRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full block pointer-events-none ${className}`}
    />
  );
}
