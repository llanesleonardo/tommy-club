(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const m=()=>`
    <div class="top-header"><img class="img-logo" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogotipo-minified.png"/></div>
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
      <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogo-2-blanco.png" class="main-imgfooter" />
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
        <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Fwave%2001.png" class="main-hero-img" id="hero-img-1"/>
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
                    <li class="main-intro-right-list-item"><img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F1-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F2-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F3-minified.png" class="main-intro-right-img" /></li>
                    <li class="main-intro-right-list-item"><img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fintros%2F4-minified.png" class="main-intro-right-img" /></li>
                </ul>
            </div>
        </div>
    `;const v=()=>`
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
    `;const u=()=>`
        <div class="main-especs">
            <div class="main-especs-block">
                <h2 class="main-especs-title">Especificaciones <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Ficons%2Ficono%20especificaciones-08.png" class="main-especs-icon"/></h2>
                <p class="main-especs-content">Cada Tommy es único y esta programado de una manera que toma 7 posibles aspectos, incluyendo, ojos, nariz, boca, camiseta o saco, cabello y otros. Todos los tommy son geniales solamente hay
                algunos mas raros que otros.</p>
                <p class="main-especs-content">Estos nft están guardados en un ERC-721 Token en la blockchain de polygon. Se recomienda que se
                use carteras validadas por la comunidad, como lo es Meta Mask Wallet.</p>
            </div>
            <div class="main-especs-block">
            <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fespecs%2Fpartes-tommy-04-minified.png" class="main-especs-img" />
            </div>
        </div>
    `;const h=()=>`
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
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Proof of idea </li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Airdropped and Sales of Tommy NFT </li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Youtube channel, Podcast, Social networks</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Member exclusive store, limited edition apparel</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Crypto rewards / “We have to invent some game”</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Ayudar a los artistas a llevar su arte digital a la web 3.0</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Se empieza la escuela de tommy para emprendedores 3.0</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Se inicia la tokenización de otras ideas innovadoras (inversiones)</li>
                    <li class="main-roadmap-listitem"><img src="" class="main-roadmap-listitem-img"/> Nuevas ideas para colaborar en el ambiente crypto</li>
                </ol>
            </div>
        </div>
    `,f=async()=>`
        <div class="main-home">
            ${p()}
            ${g()}
            ${v()}
            ${u()}
            ${h()}
            ${y()}
        </div>
    `;const l=()=>`
    <div>ERROR0404</div>
`,b=()=>location.hash.slice(1).split("/")[1]||"/",w=e=>e.length<=3?e==="/"?e:"/:id":`/${e}`,F=()=>`
    <div>Variant</div>
`,c={"/":f,"/:id":F,"/error404":l},r=async()=>{const e=document.getElementById("header"),a=document.getElementById("content"),o=document.getElementById("footer");e.innerHTML=await m();let t=b(),i=await w(t),s=c[i]?c[i]:l;a.innerHTML=await s(),o.innerHTML=await d()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <footer id="footer"></footer>
</main>
`;window.addEventListener("load",r);window.addEventListener("hashchange",r);
