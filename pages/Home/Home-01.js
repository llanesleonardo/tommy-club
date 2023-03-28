import "./home-01.css";
import Hero from "../../template/maincontent/heros/Hero-01";
import Intro from "../../template/maincontent/introductions/Intro-01";
import Promo from "../../template/maincontent/promo/Promo-01";
import Especs from "../../template/maincontent/especs/Especs-01";
import Club from "../../template/maincontent/club/Club-01";
import Roadmap from "../../template/maincontent/roadmap/Roadmap-01";
import Tools from "../../template/maincontent/commtools/Tools-01";
import Team from "../../template/maincontent/team/Team-01";

const Home = async () => {
  const view = `
        <div class="main-home">
            ${Hero()}
            ${Intro()}
            ${Promo()}
            ${Especs()}
            ${Club()}
            ${Roadmap()}
            ${Tools()}
            ${Team()}
        </div>
    `;

  return view;
};

export default Home;
