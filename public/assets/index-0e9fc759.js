(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const r=()=>location.hash.slice(1).split("/")[1]||"/",m=()=>(r(),`
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
    `);const v=()=>`
    <div class="top-footer"></div>
    <div class="main-footer">
      <img src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogo-footer-minified.png" class="main-imgfooter" />
    </div>
    <div class="-bottom-footer">
    <ul class="main-nav-socialfooter">
      <li class="main-nav-socialfooter-item"><a href=""><object type="image/svg+xml" class="main-socialfooter-itemicon" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-06.svg" width="30" height="30">Twitter</object></a></li>
      <li class="main-nav-socialfooter-item"><a href=""><object type="image/svg+xml" class="main-socialfooter-itemicon" data="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fredes%2Felementos-03.svg" width="30" height="30">Twitter</object></a></li>
    </ul>
      <p class="copyright">&copy; 3lstrategy</p>
    </div>
`;const g=()=>`
        <div>HOME</div>
    `;const l=()=>`
    <div>ERROR0404</div>
`,f=t=>t.length<=3?t==="/"?t:"/:id":`/${t}`,h=()=>`
    <div>Variant</div>
`,c={"/":g,"/:id":h,"/error404":l},d=async()=>{const t=document.getElementById("header"),i=document.getElementById("content"),a=document.getElementById("footer");t.innerHTML=await m();let s=r(),e=await f(s),o=c[e]?c[e]:l;i.innerHTML=await o(),a.innerHTML=await v()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <footer id="footer"></footer>
</main>
`;window.addEventListener("load",d);window.addEventListener("hashchange",d);
