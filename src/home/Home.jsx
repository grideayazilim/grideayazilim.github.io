import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "./Sections/LandingPage/LandingPage";
import MiniGames from "./Sections/MiniGames/MiniGames";
import Projects from "./Sections/Projects/Projects";
import Us from "./Sections/Us/Us";
import BackToTop from "../components/BackToTop/BackToTop";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <LandingPage />
      <Projects />
      <MiniGames />
      {/* <Us /> */}
      <Footer />
      <BackToTop />
    </main>
  );
}

export default Home;
