import nobg from "../assets/videos/nobg01.mp4";
import "../styles/page-styles/home.css";

function Home() {
  return (
    <div>
      <section>
        <div className="hero-box">
          <video className="idea-2" autoPlay playsInline muted loop>
            <source src={nobg} type="video/mp4" />
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
