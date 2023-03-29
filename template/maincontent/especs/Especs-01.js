import "./especs-01.css";

const Especs = () => {
  const view = `
        <div class="main-especs">
            <div class="main-especs-block">
                <h2 class="main-especs-title">Especificaciones <img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Ficons%2Ficono%20especificaciones-08.png" class="main-especs-icon"/></h2>
                <p class="main-especs-content">Cada Tommy es único y esta programado de una manera que toma 7 posibles aspectos, incluyendo, ojos, nariz, boca, camiseta o saco, cabello y otros. Todos los tommy son geniales solamente hay
                algunos mas raros que otros.</p>
                <p class="main-especs-content">Estos nft están guardados en un ERC-721 Token en la blockchain de polygon. Se recomienda que se
                use carteras validadas por la comunidad, como lo es Meta Mask Wallet.</p>
            </div>
            <div class="main-especs-block">
            <img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fespecs%2Fpartes-tommy-04-minified.png" class="main-especs-img" />
            </div>
        </div>
    `;

  return view;
};

export default Especs;
