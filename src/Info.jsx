import React from "react";
import photo from "./assets/me.png";
import linkedinIcon from "./assets/linkedin-icon.png";
import mailIcon from "./assets/mail-icon.png";
import "./index.css";

export default function Info() {
  return (
    <header className="header">
      <img src={photo} alt="Photo" className="header--photo" />
      <h1 className="header--title">Maryna Pastukhova</h1>
      <p className="header--subtitle">Frontend Developer</p>
      <a
        href="https://maryna-pastukhova-portfolio.netlify.app/"
        target="_blank"
        className="header--link"
      >
        marynapastukhova.website
      </a>
      <div className="header--links">
        <a href="mailto: maryurpast@gmail.com" className="mail-link">
          <img src={mailIcon} alt="mail icon" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/maryna-pastukhova-front-end/"
          target="_blank"
          className="linkedin-link"
        >
          <img src={linkedinIcon} alt="linkedin icon" />
          LinkedIn
        </a>
      </div>
    </header>
  );
}
