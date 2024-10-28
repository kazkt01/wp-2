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
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={nobg} type="video/webm" />
          </video>
          <h2>Hi! Im Kazuki Tachinana</h2>
          <h1>”Welcome to My Portfolio”</h1>
          <p>ご覧いただきありがとうございます</p>
        </div>
        <div className="yohaku"></div>
      </section>
    </div>
  );
}

export default Home;
