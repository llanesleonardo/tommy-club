(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d=()=>location.hash.slice(1).split("/")[1]||"/",u=()=>(d(),`
    <div class="top-header">HEADER</div>
    <nav></nav>
    `);const v=()=>`
    <div>FOOTER</div>
`;const f=()=>`
        <div>HOME</div>
    `;const a=()=>`
    <div>ERROR0404</div>
`,m=t=>t.length<=3?t==="/"?t:"/:id":`/${t}`,h=()=>`
    <div>Variant</div>
`,c={"/":f,"/:id":h,"/error404":a},l=async()=>{const t=document.getElementById("header"),n=document.getElementById("content"),i=document.getElementById("footer");t.innerHTML=await u();let r=d(),e=await m(r),o=c[e]?c[e]:a;n.innerHTML=await o(),i.innerHTML=await v()};document.querySelector("#app").innerHTML=`

<main class="main">
  <header class="header" id="header"></header>
  <section id="content">
    <div class="loading"></div>
  </section>
  <div class="container vh-100">
    <div class="row vh-100">
      <div class="col-12 d-flex justify-content-center align-items-center">
        <img
          src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Flogos%2Flogotipo-minified.png"
          alt=""
          class="logo"
        />
      </div>
    </div>
  </div>
  <footer id="footer"></footer>
</main>
`;window.addEventListener("load",l);window.addEventListener("hashchange",l);
