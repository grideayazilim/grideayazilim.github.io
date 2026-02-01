import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import "./MemberCard.scss";

function MemberCard({ member, isLeader = false }) {
  return (
    <div className={`member-card ${isLeader ? "leader" : ""}`}>
      <div className="image">
        <div className="bg"></div>
        <img src={member.image} alt="Takım üyesi fotoğrafı" />
        <div className="socials">
          <a target="_blank" href={member.github} className="link">
            <FaGithub className="icon" />
          </a>
          <a target="_blank" href={member.linkedin} className="link">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </div>
      <h4 className={`name text-small ${isLeader ? "colored" : ""}`}>
        {isLeader && (
          <div className="icon-container">
            <LuCrown className="icon" />
          </div>
        )}
        {member.name}
      </h4>
    </div>
  );
}

export default MemberCard;
