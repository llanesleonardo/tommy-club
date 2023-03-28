(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const m=()=>`
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
`;const g=()=>`
    <div id="hero" class="main-hero">
        <video width="750" height="450" autoplay class="hero-video-1">
          <source src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Ftommy-var.mp4" type="video/mp4">
           Your browser does not support the video tag.
        </video>
        <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Fwave%2001.png" class="main-hero-img" id="hero-img-1"/>
    </div>
    `;const p=()=>`
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
    `;const h=()=>`
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
    `,v=async()=>`
        <div class="main-home">
            ${g()}
            ${p()}
            ${h()}
        </div>
    `;const r=()=>`
    <div>ERROR0404</div>
`,u=()=>location.hash.slice(1).split("/")[1]||"/",y=t=>t.length<=3?t==="/"?t:"/:id":`/${t}`,f=()=>`
    <div>Variant</div>
`,c={"/":v,"/:id":f,"/error404":r},l=async()=>{const t=document.getElementById("header"),s=document.getElementById("content"),a=document.getElementById("footer");t.innerHTML=await m();let o=u(),e=await y(o),i=c[e]?c[e]:r;s.innerHTML=await i(),a.innerHTML=await d()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <footer id="footer"></footer>
</main>
`;window.addEventListener("load",l);window.addEventListener("hashchange",l);
