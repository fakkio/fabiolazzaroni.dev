import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface HTMLLogoProps extends SVGProps<SVGSVGElement> {}

export const HTMLLogo: VFC<HTMLLogoProps> = (svgProps) => {
  return (
    <Icon viewBox="0 0 28.2 32" {...svgProps}>
      <path d="M2.6 28.8L0 0h28.2l-2.6 28.8L14.1 32" fill="#e44d26" />
      <path d="M14.1 29.5V2.4h11.5L23.4 27" fill="#f16529" />
      <path
        d="M5.2 5.9h8.9v3.5h-5l.3 3.6h4.7v3.5H6.2m.2 1.8h3.5l.2 2.8 4 1.1v3.7l-7.2-2"
        fill="#ebebeb"
      />
      <path
        d="M22.9 5.9H14v3.5h8.5m-.2 3.6h-8.2v3.5h4.4l-.5 4.7-3.9 1.1V26l7.2-2"
        fill="#fff"
      />
    </Icon>
  );
};
