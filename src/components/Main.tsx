import React, {FC} from "react";
import {main, center} from "./Main.module.scss";

interface MainProps {
  centered?: boolean;
}

export const Main: FC<MainProps> = ({centered, children}) => {
  return (
    <main className={`${main}${centered ? ` ${center}` : ""}`}>{children}</main>
  );
};
