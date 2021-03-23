import React, {VFC} from "react";
import {wave} from "./WavingHand.module.scss";

export const WavingHand: VFC = () => {
  return (
    <span role="img" aria-label="mano che saluta" className={wave}>
      👋
    </span>
  );
};
