import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let w = 0;
    let h = 0;
    let offset = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h);

      // Background Navy
      const bg = ctx.createLinearGradient(
        0,
        0,
        w,
        h
      );

      bg.addColorStop(0, "#010720");
      bg.addColorStop(0.5, "#071124");
      bg.addColorStop(1, "#0A192F");

      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const size = 60;

      ctx.strokeStyle =
        "rgba(120,180,255,0.08)";
      ctx.lineWidth = 1;

      // Vertical Lines
      for (
        let x = (-offset % size);
        x < w + size;
        x += size
      ) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Horizontal Lines
      for (
        let y = (-offset % size);
        y < h + size;
        y += size
      ) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Center Glow
      const glow = ctx.createRadialGradient(
        w / 2,
        h / 2,
        0,
        w / 2,
        h / 2,
        500
      );

      glow.addColorStop(
        0,
        "rgba(59,130,246,0.15)"
      );

      glow.addColorStop(
        1,
        "rgba(59,130,246,0)"
      );

      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      offset += 0.2;

      animationId =
        requestAnimationFrame(drawGrid);
    };

    resize();
    drawGrid();

    window.addEventListener(
      "resize",
      resize
    );

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <div className="space-bg">
      <div className="glass-overlay" />
      <canvas
        ref={canvasRef}
        className="space-canvas"
      />
    </div>
  );
}