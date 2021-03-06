import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface LeftArrowProps extends SVGProps<SVGSVGElement> {}

export const LeftArrow: VFC<LeftArrowProps> = (svgProps) => {
  return (
    <Icon viewBox="0 0 448 512" aria-label="freccia a sinistra" {...svgProps}>
      <path d="M448 208v96c0 13.3-10.7 24-24 24H224v103.8c0 21.4-25.8 32.1-41 17L7 273c-9.4-9.4-9.4-24.6 0-34L183 63.3c15.1-15.1 41-4.4 41 17V184h200c13.3 0 24 10.7 24 24z" />
    </Icon>
  );
};
