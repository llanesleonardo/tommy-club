(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=o(i);fetch(i.href,t)}})();const m=()=>`
    <div class="top-header"><img class="img-logo"  src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogotipo-minified.png"/></div>
    <nav class="main-nav">
    <div class="wrapper-navs">
      <ul class="nav-list">
        <li class="nav-item"><a href="#bienvenido">Bienvenido</a></li>
        <li class="nav-item"><a href="#comprar">¿Como comprar?</a></li>
        <li class="nav-item"><a href="#elclub">El club</a></li>
        <li class="nav-item"><a href="#elequipo">El equipo</a></li>
        <li class="nav-item"><a href="#contacto">Contacto</a></li>
      </ul>
      <ul class="social-nav">
        <li class="nav-social-item"><a href=""><object type="image/svg+xml" class="redes-icons" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-06.svg" width="30" height="30">Twitter</object></a></li>
        <li class="nav-social-item"><a href=""><object type="image/svg+xml" class="redes-icons" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-03.svg" width="30" height="30">Instagram</object></a></li>
      </ul>
      </div>
    </nav>
    `;const d=()=>`
    <div class="top-footer"></div>
    <div class="main-footer">
      <img loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogo-2-blanco.png" class="main-imgfooter" />
    </div>
    <div class="-bottom-footer">
    <ul class="main-nav-socialfooter">
      <li class="main-nav-socialfooter-item"><a href=""><object type="image/svg+xml" class="main-socialfooter-itemicon" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-06.svg" width="30" height="30">Twitter</object></a></li>
      <li class="main-nav-socialfooter-item"><a href=""><object type="image/svg+xml" class="main-socialfooter-itemicon" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-03.svg" width="30" height="30">Twitter</object></a></li>
    </ul>
      <p class="copyright">&copy; 3lstrategy</p>
    </div>
`;const p=()=>`
    <div id="hero" class="main-hero">
        <video width="750" height="450" autoplay class="hero-video-1">
          <source src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Ftommy-var.mp4" type="video/mp4">
           Your browser does not support the video tag.
        </video>
        <img  src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Fwave%2001.png" class="main-hero-img" id="hero-img-1"/>
    </div>
    `;const g=()=>`
        <div class="main-intro">
            <div class="main-intro-left">
                <h2 class="main-intro-left-greentitle">BIENVENID@</h2>
                <p class="main-intro-left-content">
                    Es una colección de NFT, que son únicos, digitales y coleccionables viviendo en la blockchain de Polygon.
                </p>
                <p class="main-intro-left-content">
                    Tus Tommys te dan acceso a diferentes beneficios relacioandso con (). los futuros beneficios y desarrollos de estos.
                </p>
                <p class="main-intro-left-content">
                    NFTs se explican a más detalle en la sección de road map.
                </p>
                <h2 class="main-intro-left-greentitle">DISTRIBUCIÓN</h2>
                <p class="main-intro-left-content">
                    No existe otra cuenta ligada a estos NFT, solamenta esta (). Y su costo inicial será de (). No habrá diferentes precios en la primera exhibición.
                </p>
                <p class="main-intro-left-content">
                La membresia de NFT cuesta lo mismo para todos.
            </p>
            </div>
            <div class="main-intro-right">
                <ul class="main-intro-right-list">
                    <li class="main-intro-right-list-item"><img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F1-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F2-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F3-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F4-minified.png" class="main-intro-right-img" /></li>
                </ul>
            </div>
        </div>
    `;const v=()=>`
        <div class="main-promo">
            <div class="main-promo-left">
                <img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fpromos%2FTommy-03-minified.png" class="main-promo-right-img" />       
            </div>
            <div class="main-promo-right">
                <h2 class="main-promo-right-title">¿COMPRAR AHORA?</h2>
                <p class="main-promo-right-content">OPENSEA</p>
                <button class="main-promo-right-button">Comprar</button>
              
            </div>
        </div>
    `;const h=()=>`
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
    `;const u=()=>`
        <div class="main-club">
            <div class="main-club-block">
                <h2 class="main-club-title">EL CLUB</h2>
                <p class="main-club-content">Cuando tu compras un tommy no simplemente compras un avatar o posiblemente una pieza de
                arte. Tu ganas el acceso a un club con beneficios y ofertas que aumentará durante el tiempo. Estos
                NFT puede servirte como una identidad digital, y esta identidad puede abrir puertas digitales por ti.t</p>
            </div>
        </div>
    `;const y=()=>`
        <div class="main-roadmap">
            <div class="main-roadmap-block">
                <h2 class="main-roadmap-title">ROADMAP</h2>
                <ol class="main-roadmap-list">
                    <li class="main-roadmap-listitem"> Proof of idea </li>
                    <li class="main-roadmap-listitem"> Airdropped and Sales of Tommy NFT </li>
                    <li class="main-roadmap-listitem"> Youtube channel, Podcast, Social networks</li>
                    <li class="main-roadmap-listitem"> Member exclusive store, limited edition apparel</li>
                    <li class="main-roadmap-listitem"> Crypto rewards / “We have to invent some game”</li>
                    <li class="main-roadmap-listitem"> Ayudar a los artistas a llevar su arte digital a la web 3.0</li>
                    <li class="main-roadmap-listitem"> Se empieza la escuela de tommy para emprendedores 3.0</li>
                    <li class="main-roadmap-listitem"> Se inicia la tokenización de otras ideas innovadoras (inversiones)</li>
                    <li class="main-roadmap-listitem"> Nuevas ideas para colaborar en el ambiente crypto</li>
                </ol>
            </div>
        </div>
    `;const f=()=>`
        <div class="main-tools">
            <div class="main-tools-block">
                <h2 class="main-tools-title">HERRAMIENTAS DE LA COMMUNIDAD</h2>
                <ul class="main-tools-list">
                    <li class="main-tools-listitem"><a href="https://nftexp.io/" >https://nftexp.io/</a></li>
                    <li class="main-tools-listitem"><a href="https://rarity.tools/" >https://rarity.tools/</a></li>
                </ul>
            </div>
        </div>
    `;const b=()=>`
        <div class="main-team">
            <div class="main-team-block">
                <h2 class="main-team-title">EL EQUIPO</h2>
                <p class="main-team-content">Tommy fue creado por 2 Expertos en diferentes áreas, pensando en innovar y probar sus
                habilidades en el mundo web 3.0</p>
                <p class="main-team-content"><a href="">Leonardo Llanes</a> <img loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Ficonos-07-twitter-blue.png" class="main-team-content-img" /></p>
                <p class="main-team-content"><a href="">Valente Pacheco</a> <img loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Ficonos-07-twitter-blue.png" class="main-team-content-img" /></p>
            </div>
        </div>
    `,w=async()=>`
        <div class="main-home">
            ${p()}
            ${g()}
            ${v()}
            ${h()}
            ${u()}
            ${y()}
            ${f()}
            ${b()}
        </div>
    `;const l=()=>`
    <div>ERROR0404</div>
`,F=()=>location.hash.slice(1).split("/")[1]||"/",E=e=>e.length<=3?e==="/"?e:"/:id":`/${e}`,T=()=>`
    <div>Variant</div>
`,c={"/":w,"/:id":T,"/error404":l},r=async()=>{const e=document.getElementById("header"),s=document.getElementById("content"),o=document.getElementById("content-footer");e.innerHTML=await m();let a=F(),i=await E(a),t=c[i]?c[i]:l;s.innerHTML=await t(),o.innerHTML=await d()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <footer id="footer">
    <section id="content-footer">
    </section>
  </footer>
</main>
`;window.addEventListener("load",r);window.addEventListener("hashchange",r);
