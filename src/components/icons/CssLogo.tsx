import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface CSSLogoProps extends SVGProps<SVGSVGElement> {}

export const CssLogo: VFC<CSSLogoProps> = (svgProps) => (
  <Icon viewBox="0 0 28.2 32" {...svgProps}>
    <path fill="#264de4" d="M28.2 0l-2.6 28.8L14.1 32 2.6 28.8 0 0z" />
    <path fill="#2965f1" d="M23.4 27l2.2-24.6H14.1v27.2z" />
    <path fill="#ebebeb" d="M5.9 13l.3 3.6h7.9V13z" />
    <path fill="#ebebeb" d="M14.1 5.9H5.3l.3 3.5h8.5z" />
    <path fill="#ebebeb" d="M14.1 25.9v-3.7l-3.9-1-.3-2.9H6.4l.5 5.6 7.2 2z" />
    <path
      fill="#ffffff"
      d="M18.4 16.6l-.4 4.6-3.9 1v3.7l7.2-2 .1-.6.8-9.3.1-1 .6-7.1h-8.8v3.5h5l-.3 3.6h-4.7v3.6z"
    />
  </Icon>
);
