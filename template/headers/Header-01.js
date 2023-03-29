import "./header-01.css";

const Headers = () => {
  const view = `
    <div class="top-header"><img class="img-logo"  src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogotipo-minified.png"/></div>
    <nav class="main-nav">
    <div class="wrapper-navs">
      <ul class="nav-list">
        <li class="nav-item"><a href="#intro">Bienvenido</a></li>
        <li class="nav-item"><a href="#promo">¿Como comprar?</a></li>
        <li class="nav-item"><a href="#club">El club</a></li>
        <li class="nav-item"><a href="#team">El equipo</a></li>
        <li class="nav-item"><a href="#contact">Contacto</a></li>
      </ul>
      <ul class="social-nav">
        <li class="nav-social-item"><a href=""><object type="image/svg+xml" class="redes-icons" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-06.svg" width="30" height="30">Twitter</object></a></li>
        <li class="nav-social-item"><a href=""><object type="image/svg+xml" class="redes-icons" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-03.svg" width="30" height="30">Instagram</object></a></li>
      </ul>
      </div>
    </nav>
    `;
  return view;
};

export default Headers;
