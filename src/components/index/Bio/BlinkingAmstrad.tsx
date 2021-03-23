import React, {VFC} from "react";
import {Amstrad} from "./amstrad";
import {Cpc464} from "./cpc464";
import {useBlinkAmstrad} from "./useBlinkAmstrad";

export const BlinkingAmstrad: VFC = () => {
  const amstradStyle = useBlinkAmstrad(5000, 15000);

  return (
    <span style={amstradStyle}>
      <Amstrad /> <Cpc464 />
    </span>
  );
};
