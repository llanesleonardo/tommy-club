import "./style.css";
import router from "./routes/index";

document.querySelector("#app").innerHTML = `

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
`;

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
