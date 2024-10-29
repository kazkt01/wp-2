import "../styles/page-styles/desing.css";

// 画像系のインポート
import itemA from "../assets/images/w-gra.webp";
import itemB from "../assets/images/w-amp.webp";
import itemC from "../assets/images/w-blender.webp";
import itemD from "../assets/images/w-juery-new.webp";
import itemE from "../assets/images/w-cafe.webp";

function Design() {
  return (
    <div>
      <section>
        <div className="design-box">
          <div className="d-item">
            <h2>Udemy Study 01</h2>
            <figure>
              <img className="d-img" src={itemA} alt="" />
              <h3>基本操作を理解できました</h3>
              <p>
                IllustratorとPhotoshopの基本操作を理解するするために学習しました
              </p>
              <p>参照:</p>
              <p>
                【上級者用】続！チラシデザインマスター講座｜Adobe
                Illustrator（イラストレーター）＆Photoshop
              </p>
              <a
                className="d-url"
                href="https://www.udemy.com/share/108m0q3@esz6zr7eeefyJh_5outun_pV-4lVolG0cgPsbh_fGQ5sNsrx0Zm8kV8MKKHOZRsPXw==/"
                target="_blank"
              >
                https://www.udemy.com/share/108m0q3@esz6zr7eeefyJh_5outun_pV-4lVolG0cgPsbh_fGQ5sNsrx0Zm8kV8MKKHOZRsPXw==/
              </a>
            </figure>
          </div>

          <div className="d-item">
            <h2>Udemy Study 02</h2>
            <figure>
              <img className="d-img" src={itemE} alt="" />
              <h3>Photoshopの基礎を学習しました</h3>
              <p>
                【完全版】知識ゼロから最速で即戦力レベルになるPhotoshopマスターコース
              </p>
              <p>参照：</p>
              <a
                className="d-url"
                href="https://www.udemy.com/share/106n4Y3@sK4KEMlqTtKjOcmatBT3lEmb7pGefiruk3_eMwm3iexM5GENNOFpdCls3ou94VtsIQ==/"
                target="_blank"
              >
                https://www.udemy.com/share/106n4Y3@sK4KEMlqTtKjOcmatBT3lEmb7pGefiruk3_eMwm3iexM5GENNOFpdCls3ou94VtsIQ==/
              </a>
            </figure>
          </div>

          <div className="d-item">
            <h2>Modeling</h2>
            <figure>
              <img className="d-img" src={itemB} alt="amp" />
              <figcaption>
                <h3>Marshall Amp</h3>
                <p>
                  Blenderを使用し自宅にあるアンプをモデリングしました <br />
                </p>
              </figcaption>
            </figure>
          </div>

          <div className="d-item">
            <h2>Art Work</h2>
            <figure>
              <img className="d-img" src={itemD} alt="" />
              <h3>レイヤー効果の学習をしました</h3>
              <p>
                複数のレイヤーを重ねて質感を重視し作成しました <br />
                Photoshopのみで制作しています
              </p>
            </figure>
          </div>

          <div className="d-item">
            <h2>Environment</h2>
            <figure>
              <img className="d-img" src={itemC} alt="" />
              <h2>Forest</h2>
              <p>Fogを使用しライティングにこだわり制作しました</p>
            </figure>
          </div>
          <div className="d-item">
            <h2>etc...</h2>
            <figure>
              {/* <img className="d-img" src={itemF} alt="" /> */}
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Design;
