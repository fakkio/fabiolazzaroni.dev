import React, {FC} from "react";
import "../styles/reboot.global.scss";
import "../styles/styles.global.scss";
import {ThemeProvider} from "./ThemeContext";

export const App: FC = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
