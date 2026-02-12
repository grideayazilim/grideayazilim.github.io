import MiniGameCard from "./MiniGameCard/MiniGameCard";
import miniGames from "../../../data/mini-games-details"
import "./MiniGames.scss";


function MiniGames() {
  return (
    <section id="mini-games" className="mini-games-section">
      <h1 className="text-gradient text-gradient--red">Mini oyunlar</h1>
      <p className="text-lead">
        Teknik becerilerimizi oyunlaştırdık. Hem öğrenmek hem de eğlenmek için
        tasarladığımız mini deneyimleri keşfedin.
      </p>
      <div className="mini-games">
        {miniGames.map((minigame, index) => (
          <MiniGameCard minigameInfo={minigame} key={index} />
        ))}
      </div>
    </section>
  );
}

export default MiniGames;
