import "../styles/page-styles/home.css";
// import face from "../assets/videos/siro.mp4";
// import faceLow from "../assets/videos/siro-low.mp4";
import nobg from "../assets/videos/nobg01.mp4";

function Home() {
  return (
    <div>
      <section>
        <div className="hero-box">
          {/* <video className="hero-video" autoPlay muted loop>
            <source src="../src/assets/video/shibuya.mp4" />
          </video>
          <figcaption>
            <small>*この動画は、Udemyの講座をもとにUE5で作成したものです</small>
          </figcaption> */}

          <figure>
            <video
              className="idea-2"
              autoPlay
              muted={true}
              loop
              playsInline
              src={nobg}
            >
              {/* <source src={face} type="video/mp4" /> */}
              {/* <source src={faceLow} type="video/mp4" /> */}
              {/* <source /> */}
            </video>
            <figcaption>
              <h2>Hi! Im Kazuki Tachinana</h2>
              <h1>”Welcome to My Portfolio”</h1>
              <p>ご覧いただきありがとうございます</p>
            </figcaption>
          </figure>
        </div>
        <div className="yohaku"></div>
      </section>
    </div>
  );
}

export default Home;
