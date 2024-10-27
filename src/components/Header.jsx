import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "../styles/c-styles/header.css";

import logo from "../assets/logo-kt.svg";

function Header() {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };
  return (
    <div>
      <header className="h-box">
        <div className="logo-box">
          <img className="h-logo" src={logo} alt="" />
        </div>
        <nav className="nav-box">
          <li className="li-box">
            <a href="/" className="h-link ">
              Home
            </a>
          </li>
          <li className="li-box">
            <a href="/about" className="h-link">
              About
            </a>
          </li>
          <li className="li-box">
            <a href="/develop" className="h-link">
              Develop
            </a>
          </li>
          <li className="li-box">
            <a href="/design" className="h-link">
              Design
            </a>
          </li>
          <li className="li-box">
            <a href="/contact" className="h-link">
              Contact
            </a>
          </li>
        </nav>
      </header>

      {/* sp-btn */}
      <div onClick={classToggle} className="sp-btn">
        <FiMenu size="2em" />
      </div>

      {/* sp-menu */}
      <div className={active ? "sp-menu" : "sp-active"}>
        <nav className="sp-nav">
          <li className="sp-li">
            <a href="/" className="sp-link">
              Home
            </a>
          </li>
          <li className="sp-li">
            <a href="/about" className="sp-link">
              About
            </a>
          </li>
          <li className="sp-li">
            <a href="/develop" className="sp-link">
              Develop
            </a>
          </li>
          <li className="sp-li">
            <a href="design" className="sp-link">
              Design
            </a>
          </li>
          <li className="sp-li">
            <a href="/contact" className="sp-link">
              Contact
            </a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Header;
