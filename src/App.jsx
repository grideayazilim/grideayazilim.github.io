import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import ArchitectsConsole from "./mini-games/Architects_Console/ArchitectsConsole";
import CodeJourney from "./mini-games/elcinin_oyunu/CodeJourney.jsx";
import StrawberryMaze from "./mini-games/StrawberryMaze/StrawberyyMaze";
import SQLBakery from "./mini-games/SQL_Bakery/SQLBakery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mini-games/architects-console" element={<ArchitectsConsole />} />
      <Route path="/mini-games/code-journey" element={<CodeJourney />} />
      <Route path="/mini-games/strawberry-maze" element={<StrawberryMaze />} />
      <Route path="/mini-games/sql-bakery" element={<SQLBakery />} />
      
    </Routes>
  );
}

export default App;
