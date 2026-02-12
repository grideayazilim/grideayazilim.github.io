import { FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <div className="row">
        <div className="left">
          <h2 className="colored">GRIDEA</h2>
          <p>
            Ankara Yıldırım Beyazıt Üniversitesi <br /> Bilim ve Teknoloji
            Topluluğu Takımı
          </p>
        </div>
        <div className="right">
          <a href="https://github.com/grideayazilim" className="link github">
            <div className="bg"></div>
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.instagram.com/grideayazilim/"
            className="link instagram"
          >
            <div className="bg"></div>
            <FaInstagram className="icon" />
          </a>
          <a href="mailto:grideayazilim@gmail.com" className="link mail">
            <div className="bg"></div>
            <FiMail className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
