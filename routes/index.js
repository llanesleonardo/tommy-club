import Header from "../template/headers/Header-01";
import Footer from "../template/footers/Footer-01";
import Home from "../pages/Home/Home-01";
import Error404 from "../pages/Error404/Error404";

import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";
import Variant from "../pages/Variant/Variant";

const routes = {
  "/": Home,
  "/:id": Variant,
  "/error404": Error404,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  const footer = null || document.getElementById("content-footer");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  footer.innerHTML = await Footer();
};

export default router;
