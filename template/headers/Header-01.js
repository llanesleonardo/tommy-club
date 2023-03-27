import "./header-01.css";
import getHash from "../../utils/getHash";
const Headers = () => {
  getHash();
  const view = `
    <div class="top-header">HEADER</div>
    <nav></nav>
    `;
  return view;
};

export default Headers;
