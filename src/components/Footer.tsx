import React, {VFC} from "react";
import {version} from "../../package.json";
import {footer, inner} from "./Footer.module.scss";

export const Footer: VFC = () => {
  return (
    <footer className={footer}>
      <div className={inner}>
        <span>2014 - {new Date().getFullYear()} | Built with ❤ and ☕</span>
        <span>
          <small>v{version}</small>
        </span>
      </div>
    </footer>
  );
};
