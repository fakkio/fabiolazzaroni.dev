import React, {VFC} from "react";
import {footer, inner} from "./Footer/Footer.module.scss";
import {GatsbyLogo} from "./icons/GatsbyLogo";
import {GitHubLogo} from "./icons/GitHubLogo";
import {LinkedinLogo} from "./icons/LinkedinLogo";

export const Footer: VFC = () => {
  return (
    <footer className={footer}>
      <div className={inner}>
        <span>
          2014 - {new Date().getFullYear()} | Built with{" "}
          <span role="img" aria-label="Passione">
            ❤
          </span>
          , <GatsbyLogo aria-label="gatsby" /> and{" "}
          <span role="img" aria-label="Caffè">
            ☕
          </span>
        </span>
        <span>
          P.IVA: 03963600162 -{" "}
          <a href="https://github.com/Fakkio" className="onlyIcon">
            <GitHubLogo inverted aria-label="My GitHub profile" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/fabiolazzaroni/"
            className="onlyIcon"
          >
            <LinkedinLogo aria-label="My Linkedin profile" />
          </a>{" "}
          <a href="mailto:lazzaroni@jeflab.it" className="onlyIcon">
            <span role="img" aria-label="email">
              ✉️
            </span>
          </a>
        </span>
      </div>
    </footer>
  );
};
