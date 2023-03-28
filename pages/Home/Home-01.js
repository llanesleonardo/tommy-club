import "./home-01.css";
import Hero from "../../template/maincontent/heros/Hero-01";

const Home = async () => {
  const view = `
        <div class="main-home">
            ${Hero()}
        </div>
    `;

  return view;
};

export default Home;
