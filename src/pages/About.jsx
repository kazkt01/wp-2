import { useEffect, useRef } from "react";

import {
  FaFigma,
  FaHtml5,
  FaPhp,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAstro,
  SiBlender,
  SiCss3,
  SiJquery,
  SiSupabase,
  SiTypescript,
  SiUnrealengine,
  SiVite,
  SiWebgl,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import "../styles/page-styles/about.css";
// import faceA from "../assets/videos/siro.mp4";

// ↓これが本番
import faceLow from "../assets/videos/nobg02.webm";

function About() {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div>
      <section>
        <figure className="a-box">
          <video
            className="a-video"
            ref={videoRef}
            preload={true}
            autoPlay
            playsInline
            muted
            loop
          >
            <source src={faceLow} type="video/webm" />
          </video>

          <figcaption>
            <h2>Kazuki Tachibana</h2>
            <p>{/* <strong>Web Developper</strong> */}</p>
            <a
              className="git-link"
              href="https://github.com/kazkt01"
              target="_blank"
            >
              <AiFillGithub className="icon-git" size="3em" />
            </a>
            <p>
              大阪府出身→渋谷区在住
              <br />
              主にフロントエンドやデザインに関する学習をしています <br />
              プログラミング自体は、2024年の7月から始めました
              <br />
              今まで独学で学習してきたのですが実際に実務を経験してみたいと{" "}
              <br />
              考え現在は、実務経験を積める環境を探し始めています。
              <br />
              バックエンドやクラウドなどの技術にも興味があります。
              <br />
              更にマーケティングやサービスを拡大させるといった領域にも興味があり
              <br />
              ビジネス的な観点を持ったデザインや要件定義からデータべース設計ができる
              <br />
              ようになりたいと考えています。
            </p>
            <p className="skills-title">Skills</p>
            <div className="skills-box">
              <div className="skills-box">
                <FaHtml5 className="icon" size="2em" />
                <SiCss3 className="icon" size="1.7em" />
                <IoLogoJavascript className="icon" size="2em" />
                <SiJquery className="icon" size="2em" />
                <FaReact className="icon" size="2em" />
                <SiTypescript className="icon" size="2em" />
                <div className="skills-box">
                  <IoLogoFirebase className="icon" size="2em" />
                  <SiSupabase className="icon" size="2em" />
                  <SiVite className="icon" size="2em" />
                  <SiAstro className="icon" size="2em" />
                  <FaWordpressSimple className="icon" size="2em" />
                  <FaPhp className="icon" size="3em" />
                  <SiWebgl className="icon" size="3em" />
                </div>
              </div>
              <FaFigma className="icon" size="2em" />
              <SiAdobeillustrator className="icon" size="2em" />
              <SiAdobephotoshop className="icon" size="2em" />
              <SiAdobeaftereffects className="icon" size="2em" />
              <SiBlender className="icon" size="2em" />
              <SiUnrealengine className="icon" size="2em" />
            </div>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}

export default About;
