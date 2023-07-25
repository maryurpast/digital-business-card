import React from "react";
import twitter from "./assets/twitter-icon.png";
import instagram from "./assets/instagram-icon.png";
import github from "./assets/github-icon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/maryurpast" target="_blank">
        <img src={twitter} alt="twitter" />
      </a>
      <a href="https://www.instagram.com/maryurpast/" target="_blank">
        <img src={instagram} alt="instagram" />
      </a>
      <a href="https://github.com/maryurpast" target="_blank">
        <img src={github} alt="github" />
      </a>
    </footer>
  );
}
