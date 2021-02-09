import React, {VFC} from "react";
import {DarkToggle} from "./DarkToggle";
import {header} from "./Header.module.scss";

export const Header: VFC = () => (
  <header className={header}>
    <DarkToggle />
  </header>
);
