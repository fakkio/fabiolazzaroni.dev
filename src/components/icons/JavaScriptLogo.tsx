import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface JavaScriptLogoProps extends SVGProps<SVGSVGElement> {}

export const JavaScriptLogo: VFC<JavaScriptLogoProps> = (svgProps) => (
  <Icon viewBox="0 0 32 32" {...svgProps}>
    <path fill="#f7df1e" d="M0 0h32v32H0z" />
    <path
      fill="#000000"
      d="M21.5 25c.6 1.1 1.5 1.8 3 1.8 1.2 0 2-.6 2-1.5 0-1-.8-1.4-2.2-2l-.7-.3c-2.2-.9-3.6-2.1-3.6-4.5 0-2.3 1.7-4 4.4-4 1.9 0 3.3.7 4.3 2.4l-2.3 1.5c-.5-.9-1.1-1.3-1.9-1.3-.9 0-1.4.6-1.4 1.3 0 .9.6 1.3 1.8 1.8l.8.3c2.6 1.1 4 2.2 4 4.7 0 2.7-2.1 4.2-5 4.2-2.8 0-4.6-1.3-5.5-3.1l2.3-1.3zm-10.6.3c.5.8.9 1.5 1.9 1.5 1 0 1.6-.4 1.6-1.9V14.7h3V25c0 3.1-1.8 4.5-4.5 4.5-2.4 0-3.8-1.2-4.5-2.7l2.5-1.5z"
    />
  </Icon>
);
