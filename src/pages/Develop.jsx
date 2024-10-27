import "../styles/page-styles/develop.css";

function Develop() {
  return (
    <div>
      <section>
        <div className="pf-box">
          <div className="pf-item">
            <h2>APP</h2>
            <figure>
              <iframe
                className="iframe-img"
                src="https://cotumo-app-beta-var2.vercel.app/"
              />
            </figure>
            <a href="https://cotumo-app-beta-var2.vercel.app/" target="_blank">
              <button className="pf-btn">Detail</button>
            </a>
          </div>
          <div className="pf-item">
            <h2>SITE</h2>
            <figure>
              <iframe
                className="iframe-img"
                src="https://vite-3d-red.vercel.app/"
              />
            </figure>
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
