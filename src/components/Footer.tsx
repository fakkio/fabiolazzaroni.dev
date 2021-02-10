import React, {VFC} from "react";
import {version} from "../../package.json";
import {footer, inner, gatsbyLogo} from "./Footer.module.scss";
import gatsby from "../images/gatsby-logo.svg";

export const Footer: VFC = () => {
  return (
    <footer className={footer}>
      <div className={inner}>
        <span>
          2014 - {new Date().getFullYear()} | Built with ❤,{" "}
          <img src={gatsby} alt="gatsby" height="17" className={gatsbyLogo} />{" "}
          and ☕
        </span>
        <span>
          <small>v{version}</small>
        </span>
      </div>
    </footer>
  );
};
