import "./team-01.css";

const Team = () => {
  const view = `
        <div class="main-team">
            <div class="main-team-block">
                <h2 class="main-team-title">EL EQUIPO</h2>
                <p class="main-team-content">Tommy fue creado por 2 Expertos en diferentes áreas, pensando en innovar y probar sus
                habilidades en el mundo web 3.0</p>
                <p class="main-team-content"><a href="">Leonardo Llanes</a> <img loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Ficonos-07-twitter-blue.png" class="main-team-content-img" /></p>
                <p class="main-team-content"><a href="">Valente Pacheco</a> <img loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Ficonos-07-twitter-blue.png" class="main-team-content-img" /></p>
            </div>
        </div>
    `;

  return view;
};

export default Team;
