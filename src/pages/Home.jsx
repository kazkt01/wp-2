import { useEffect, useRef } from "react";
import nobg from "../assets/videos/nobg01.mp4";
import "../styles/page-styles/home.css";

function Home() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div>
      <section>
        <div className="hero-box">
          {/* videorefでの解決試み  ←解決済み  */}
          <video
            className="idea-2"
            ref={videoRef}
            preload={true}
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={nobg} type="video/mp4" />
          </video>
          <h2 className="home-sub-title">Hi! Im Kazuki Tachinana</h2>
          <h1 className="home-title">”Welcome to My Portfolio”</h1>
          <p className="home-p">ご覧いただきありがとうございます</p>
        </div>
        <div className="yohaku"></div>
      </section>
    </div>
  );
}

export default Home;
