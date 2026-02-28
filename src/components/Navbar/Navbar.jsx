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

      // lp-wrapper'ın (LandingPage + About sticky bölümü) alt kenarı
      // viewport'a girince nav-blur tetiklensin.
      // lp-wrapper son ~100vh'ye geldiğinde bottom ≈ window.innerHeight olur.
      const lpWrapper = document.getElementById("lp-wrapper");
      if (lpWrapper) {
        const { bottom } = lpWrapper.getBoundingClientRect();
        // bottom, viewport yüksekliğine yaklaştığında (son 100vh) blur aç
        setScrolled(bottom <= window.innerHeight * 1.05);
      } else {
        // Fallback: lp-wrapper bulunamazsa eski davranış
        setScrolled(scrollTop > 40);
      }

      if (docHeight > 0) {
        setProgress((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
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
