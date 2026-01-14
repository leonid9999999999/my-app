import { useEffect, useRef, useState } from "react";
import "./Intro.css";
import logo from '../../../resources/images/ima1logo.png';

function Intro() {
  const canvasRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 800);
    setTimeout(() => setShowText(true), 2200);

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          return 100;
        }
        return p + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fog = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 200 + Math.random() * 300,
      dx: 0.1 + Math.random() * 0.3,
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      fog.forEach((f) => {
        f.x += f.dx;
        if (f.x - f.r > canvas.width) f.x = -f.r;

        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r);
        g.addColorStop(0, "rgba(80,120,255,0.08)");
        g.addColorStop(1, "rgba(2,6,23,0)");

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <div className={`intro ${fadeOut ? "fade-out" : ""}`}>
    <canvas ref={canvasRef} className="intro__fog" />

    <div className="intro__content">
        <img
            src={logo}
             alt="Company logo"
            className="intro__logo-img"
        />     
    </div>

    <div className="intro__progress">
        <span style={{ width: `${progress}%` }} />
    </div>
    </div>
  );
}

export default Intro;
