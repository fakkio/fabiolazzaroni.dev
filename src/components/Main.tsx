import classNames from "classnames";
import React, {FC} from "react";
import {alignCenter, justifyCenter, main} from "./Main/Main.module.scss";

interface MainProps {
  centered?: boolean;
  vCentered?: boolean;
}

export const Main: FC<MainProps> = ({centered, children, vCentered}) => {
  return (
    <main
      className={classNames(main, {
        [alignCenter]: centered,
        [justifyCenter]: vCentered,
      })}
    >
      {children}
    </main>
  );
};
