import React, {FC} from "react";
import "./reboot.scss";
import {ThemeProvider} from "./ThemeContext";

export const App: FC = ({children}) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
