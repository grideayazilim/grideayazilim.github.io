import { useEffect } from "react";
import { Particle } from "./particles";

const PARTICLE_COUNT  = 90;
const IDLE_THRESHOLD  = 1500; // ms — bu kadar hareketsizse gravity söner

export function useNeonCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf;
    let gravity      = 0;
    let lastMoveTime = 0;
    const mouse      = { x: -9999, y: -9999 };

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from(
        { length: PARTICLE_COUNT },
        () => new Particle(canvas.width, canvas.height)
      );
    };

    const onResize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.x      = e.clientX;
      mouse.y      = e.clientY;
      lastMoveTime = performance.now();
    };

    const draw = (now) => {
      const w = canvas.width;
      const h = canvas.height;

      // Fare hareketsizliğine göre gravity kademeli aç/kapat
      const idleMs      = now - lastMoveTime;
      const activeRatio = idleMs < IDLE_THRESHOLD
        ? Math.min(1, (IDLE_THRESHOLD - idleMs) / 400)
        : 0;
      gravity += (activeRatio - gravity) * 0.05;

      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.update(w, h, mouse.x, mouse.y, gravity);
        p.draw(ctx);
      }

      raf = requestAnimationFrame(draw);
    };

    init();
    window.addEventListener("resize",    onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [canvasRef]);
}
