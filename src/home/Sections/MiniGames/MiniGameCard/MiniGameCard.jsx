import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../../../styles/animations.scss";

import "./MiniGameCard.scss";

function MiniGameCard({ minigameInfo }) {
  const { title, description, gains, icon, gradient, color, artist, routeId } = minigameInfo;
  const Icon = icon;

  return (
    <div
      className="mini-game-card"
      style={{ "--game-gradient": gradient, "--game-color": color }}
    >
      <div className="header">
        <div className="gains">
          {gains.map((gain, index) => (
            <div className="gain-item text-small bold" key={index}>
              {gain}
            </div>
          ))}
        </div>
        <div className="text-small bold">{artist} katkılarıyla</div>
      </div>
      <div className="game-icon"><Icon /></div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="play-btn bold animated-btn" to={`/mini-games/${routeId}`}><FaPlay className="icon" /> Oyna</Link>
      <div className="circle"></div>
      <div className="gradient-bg"></div>
    </div>
  );
}

export default MiniGameCard;
