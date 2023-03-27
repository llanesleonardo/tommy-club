import "./header-01.css";
import getHash from "../../utils/getHash";
const Headers = () => {
  getHash();
  const view = `
    <div class="top-header"><img class="img-logo" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogotipo-minified.png"/></div>
    <nav class="main-nav">
    <div class="wrapper-navs">
      <ul class="nav-list">
        <li class="nav-item"><a href="">Bienvenido</a></li>
        <li class="nav-item"><a href="">¿Como comprar?</a></li>
        <li class="nav-item"><a href="">El club</a></li>
        <li class="nav-item"><a href="">El Equipo</a></li>
        <li class="nav-item"><a href="">Contacto</a></li>
      </ul>
      <ul class="social-nav">
        <li class="nav-social-item"><a href=""><object data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-04.svg" width="30" height="30"></object></a></li>
        <li class="nav-social-item"><a href=""><object data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-06.svg" width="30" height="30"></object></a></li>
        <li class="nav-social-item"><a href=""><object data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-03.svg" width="30" height="30"></object></a></li>
      </ul>
      </div>
    </nav>
    `;
  return view;
};

export default Headers;
