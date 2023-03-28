import "./home-01.css";
import Hero from "../../template/maincontent/heros/Hero-01";
import Intro from "../../template/maincontent/introductions/Intro-01";
import Promo from "../../template/maincontent/promo/Promo-01";

const Home = async () => {
  const view = `
        <div class="main-home">
            ${Hero()}
            ${Intro()}
            ${Promo()}
        </div>
    `;

  return view;
};

export default Home;
