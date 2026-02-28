import { GoTrophy } from "react-icons/go";

const miniGames = [
  {
    title: "Architect's Console",
    description:
      "Mimarımız bilinmeyen bir diyarda kayboldu! CSS yeteneklerinizi kullanarak ona yardım edin.",
    gains: ["CSS", "Flexbox", "Transition", "..."],
    icon: GoTrophy,
    gradient:
      "linear-gradient(109.3deg,rgb(84, 162, 214) 16.1%, rgb(15, 123, 231) 89.3%)",
    color: "84, 162, 214",
    artist: "M. Talha Sözen",
    routeId: "architects-console",
  },
  {
    title: "Code Journey",
    description:
      "Zar atarak ilerleyin ve CSS sorularını çözerek oyunu tamamlayın.",
    gains: ["CSS"],
    icon: GoTrophy,
    gradient:
      "linear-gradient(117deg, rgba(123,216,96,1) 39.2%, rgba(255,255,255,1) 156.2%)",
    color: "123,216,96",
    artist: "Elçin Kaya",
    routeId: "code-journey",
  },
  {
    title: "Strawberry Maze",
    description:
      "Bir labirentte kapana kısıldınız! Algoritma pratiğinizi ve web bilginizi kullanarak çıkışa ulaşın.",
    gains: ["JavaScript", "CSS", "Algoritmalar"],
    icon: GoTrophy,
    gradient:
      "radial-gradient(circle farthest-corner at 14.2% 24%, rgba(239,61,78,1) 0%, rgba(239,61,78,0.81) 51.8%, rgba(239,61,78,0.63) 84.6%)",
    color: "239,61,78",
    artist: "Elifsu Aydos",
    routeId: "strawberry-maze",
  },
  {
    title: "SQL Bakery",
    description:
      "Muti Usta'nın fırınında çıraklığa terfi ettiniz. İstediği malzemeleri getirmeniz gerek, SQL sorgularıyla!",
    gains: ["SQL"],
    icon: GoTrophy,
    gradient:
      "linear-gradient(135deg, rgba(255, 193, 7, 1) 0%, rgba(255, 152, 0, 1) 100%)",
    color: "255, 193, 7",
    artist: "Mustafa Bulut",
    routeId: "sql-bakery",
  },
];

export default miniGames;
