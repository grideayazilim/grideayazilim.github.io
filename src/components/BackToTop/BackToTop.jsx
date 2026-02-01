import { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import "./BackToTop.scss";

function BackToTop() {
    const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const onScroll = () => {
          const scrollTop = window.scrollY;
          setScrolled(scrollTop > 300);
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

  return (
    <a href="#" className={`back-to-top ${scrolled ? "show" : ""}`}>
      <FaArrowUpLong className="icon" />
    </a>
  );
}

export default BackToTop;
