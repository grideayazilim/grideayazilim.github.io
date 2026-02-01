import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(scrollTop > 40);

      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "nav-blur" : ""}`}>
      <div className="progress-line" style={{width: `${progress}%`}}></div>
      <h3 className="colored">GRIDEA</h3>
      <div className="nav-links">
        <a href="#about-us" className="nav-link">
          Hakkımızda
        </a>
        <a href="#projects" className="nav-link">
          Projeler
        </a>
        <a href="#mini-games" className="nav-link">
          Oyunlar
        </a>
        <a href="#us" className="nav-link">
          Ekip
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
