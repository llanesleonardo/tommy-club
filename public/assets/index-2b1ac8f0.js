(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();const c=()=>location.hash.slice(1).split("/")[1]||"/",v=()=>(c(),`
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
    `);const m=()=>`
    <div>FOOTER</div>
`;const u=()=>`
        <div>HOME</div>
    `;const l=()=>`
    <div>ERROR0404</div>
`,h=t=>t.length<=3?t==="/"?t:"/:id":`/${t}`,f=()=>`
    <div>Variant</div>
`,a={"/":u,"/:id":f,"/error404":l},d=async()=>{const t=document.getElementById("header"),o=document.getElementById("content"),n=document.getElementById("footer");t.innerHTML=await v();let s=c(),e=await h(s),i=a[e]?a[e]:l;o.innerHTML=await i(),n.innerHTML=await m()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <div class="container vh-100">
    <div class="row vh-100">
      <div class="col-12 d-flex justify-content-center align-items-center">

      </div>
    </div>
  </div>
  <footer id="footer"></footer>
</main>
`;window.addEventListener("load",d);window.addEventListener("hashchange",d);
