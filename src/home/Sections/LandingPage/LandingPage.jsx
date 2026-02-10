import { useEffect, useRef } from "react";
import "./LandingPage.scss";

function LandingPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let tubesApp;
    const canvas = canvasRef.current;

    // --- SCREEN SIZING ---
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        if (tubesApp && tubesApp.resize) {
          tubesApp.resize();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // --- LIBRARY  ---
    import("https://cdn.jsdelivr.net/npm/threejs-components@0.0.20/build/cursors/tubes1.min.js")
      .then((mod) => {
        const TubesCursor = mod.default || mod;

        tubesApp = TubesCursor(canvas, {
          tubes: {
            colors: [
              "#FFFF00",
              "#FFCC00",
              "#00FF00",
              "#FF8800",
              "#FF00CC",
              "#FFFFFF",
              "#0000FF",
              "#000099",
              "#FF4400",
              "#00FF66",
              "#FF0033",
            ],
            lights: {
              intensity: 130,
              colors: ["#FFFF00", "#FF0000", "#00FF00", "#FF00CC", "#0000FF"],
            },
          },
        });
      })
      .catch((err) => console.error(err));

    return () => {
      window.removeEventListener("resize", handleResize);
      if (tubesApp && tubesApp.dispose) tubesApp.dispose();
    };
  }, []);

  return (
    <section className="landing-page">
      <canvas ref={canvasRef} className="cursor-canvas"></canvas>
      <div className="content-wrapper">
        <h1 className="text-gradient text-gradient--blue">Gridea Yazılım</h1>
      </div>
    </section>
  );
}

export default LandingPage;
