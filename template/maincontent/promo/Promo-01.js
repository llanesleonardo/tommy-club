import "./promo-01.css";

const Promo = () => {
  const view = `
        <div class="main-promo">
            <div class="main-promo-left">
                <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fpromos%2FTommy-03-minified.png" class="main-promo-right-img" />       
            </div>
            <div class="main-promo-right">
                <h2 class="main-promo-right-title">¿COMPRAR AHORA?</h2>
                <p class="main-promo-right-content">OPENSEA</p>
                <button class="main-promo-right-button">Comprar</button>
              
            </div>
        </div>
    `;

  return view;
};

export default Promo;
