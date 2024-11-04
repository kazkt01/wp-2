import "../styles/page-styles/develop.css";

import webpic from "../assets/images/w-site.webp";
import apppic from "../assets/images/w-app.webp";

function Develop() {
  return (
    <div>
      <section>
        <div className="pf-box">
          <div className="pf-item">
            <h2 className="pf-title">APP</h2>
            <div className="">
              <img className="dev-img" src={apppic} alt="app-img" />
            </div>
            <a href="https://cotumo-mode-pf.vercel.app/" target="_blank">
              <button className="pf-btn">Detail</button>
            </a>
          </div>
          <div className="pf-item">
            <h2 className="pf-title">SITE</h2>
            <div>
              <img className="dev-img" src={webpic} alt="site-img" />
            </div>
            <a href="https://vite-3d-red.vercel.app/" target="_blank">
              <button className="pf-btn">Detail</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Develop;
