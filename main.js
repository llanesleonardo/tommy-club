import "./style.css";
import router from "./routes/index";

document.querySelector("#app").innerHTML = `

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
`;

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
