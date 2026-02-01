import teamDetails from "../../../data/team-details"
import MemberCard from "./MemberCard/MemberCard";
import "./Us.scss";

function Us() {
  return (
    <section id="us" className="us-section">
      <h1 className="text-gradient text-gradient--purple">Ekibimiz</h1>
      <p className="text-lead">
        Farklı yeteneklere sahip, ortak tutkuyla bir araya gelmiş bir takımız.
      </p>
      <div className="teams">
        {teamDetails.map((team, index) => (
          <div className={`team ${team.id === "dev" ? "dev-team" : ""}`} key={index}>
            <h2 className="colored">{team.name}</h2>
            <div className="members">
              {team.members.map((member, index) => (
                <MemberCard member={member} isLeader={member.isLeader} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Us;
