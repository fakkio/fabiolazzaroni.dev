import React, {SVGProps, useContext, VFC} from "react";
import {animated, useSpring} from "react-spring";
import {COLORS} from "../../utils/colors";
import {ThemeContext} from "../ThemeContext";

interface Cpc464Props extends SVGProps<SVGSVGElement> {}

export const Cpc464: VFC<Cpc464Props> = (svgProps) => {
  const {colorMode} = useContext(ThemeContext);
  const maskColor =
    (colorMode && COLORS["background"][colorMode]) ?? "#00000000";

  const gradientColor1 = useSpring({
    stopColor: maskColor,
    stopOpacity: 0,
    config: {duration: 250},
  });
  const gradientColor2 = useSpring({
    stopColor: maskColor,
    stopOpacity: 0.6,
    config: {duration: 250},
  });

  return (
    <svg viewBox="0 0 216.47 31.97" aria-label="CPC464" {...svgProps}>
      <defs>
        <linearGradient
          id="cpc-horizontal-lines"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <animated.stop offset="50%" style={gradientColor1} />
          <animated.stop offset="50%" style={gradientColor2} />
        </linearGradient>
        <pattern
          id="cpc-line"
          patternUnits="userSpaceOnUse"
          width="14"
          height="9"
        >
          <rect width="100%" height="9" fill="url(#cpc-horizontal-lines)" />
        </pattern>
      </defs>
      <path
        fill="currentColor"
        d="M124.44.02h13.8v18.31h4.37v4.57l-4.2.23v4.27l4.18.3v4.24h-18.04V27.7l4.3-.26v-4.33H110.8v-9.36l4.28-.24.34-4.25 4.18-.3.37-4.29 4.21-.22.26-4.44zm4.47 9.29h-4.46l-.24 4.2-4.28.3v4.36h8.98zM184.5 23.1v-9.33l4.44-.24.24-4.26 4.25-.29.34-4.28 4.25-.27.24-4.39h13.73v18.23h4.4v4.62l-4.11.23v4.26l4.19.37v4.16H198.3v-4.13l4.44-.41v-4.28zm9.28-4.89h8.9V9.27h-4.38l-.31 4.27-4.21.22zM50.67 27.42l4.32.27v4.24H36.97v-4.16l4.34-.42V4.69l-4.37-.23V.09h27.28l.42 4.36 4.18.23v8.84l-4.19.23-.4 4.58H50.66zm9.06-13.92V4.7h-9.07v8.8zM179.56 27.4l-4.25.31-.3 4.18h-18.16l-.28-4.15-4.26-.35V4.69l4.19-.24.4-4.45h18.08l.32 4.4 4.25.3v4.17h-8.8l-.25-4.15h-9.1v8.92h13.58l.3 4.56 4.28.25zm-9.16-.02v-8.85h-8.99v8.85zM31.9 23.16v4.24l-4.2.3-.38 4.27H9.22l-.28-4.23-4.28-.34-.28-4.25L0 22.9V9.3l4.4-.42.23-4.19 4.22-.25.4-4.44H27.3l.43 4.43 4.18.23v4.19H23.1l-.24-4.14h-9.11l-.26 4.18-4.25.36v13.6l4.25.28.22 4.2h9.11l.29-4.18zM78.22 8.95l.24-4.27 4.25-.23.3-4.35h18.16c.1 1.37.2 2.74.33 4.3l4.25.3v4.18h-8.82l-.25-4.08h-9.16l-.19 4.1-4.3.38v13.6l4.24.23.29 4.27h9.1l.24-4.15h8.75v4.13l-4.16.37-.3 4.17H83.04l-.3-4.16-4.28-.36-.22-4.23-4.35-.23V9.26z"
      />{" "}
      <path
        fill="url(#cpc-line)"
        d="M124.44.02h13.8v18.31h4.37v4.57l-4.2.23v4.27l4.18.3v4.24h-18.04V27.7l4.3-.26v-4.33H110.8v-9.36l4.28-.24.34-4.25 4.18-.3.37-4.29 4.21-.22.26-4.44zm4.47 9.29h-4.46l-.24 4.2-4.28.3v4.36h8.98zM184.5 23.1v-9.33l4.44-.24.24-4.26 4.25-.29.34-4.28 4.25-.27.24-4.39h13.73v18.23h4.4v4.62l-4.11.23v4.26l4.19.37v4.16H198.3v-4.13l4.44-.41v-4.28zm9.28-4.89h8.9V9.27h-4.38l-.31 4.27-4.21.22zM50.67 27.42l4.32.27v4.24H36.97v-4.16l4.34-.42V4.69l-4.37-.23V.09h27.28l.42 4.36 4.18.23v8.84l-4.19.23-.4 4.58H50.66zm9.06-13.92V4.7h-9.07v8.8zM179.56 27.4l-4.25.31-.3 4.18h-18.16l-.28-4.15-4.26-.35V4.69l4.19-.24.4-4.45h18.08l.32 4.4 4.25.3v4.17h-8.8l-.25-4.15h-9.1v8.92h13.58l.3 4.56 4.28.25zm-9.16-.02v-8.85h-8.99v8.85zM31.9 23.16v4.24l-4.2.3-.38 4.27H9.22l-.28-4.23-4.28-.34-.28-4.25L0 22.9V9.3l4.4-.42.23-4.19 4.22-.25.4-4.44H27.3l.43 4.43 4.18.23v4.19H23.1l-.24-4.14h-9.11l-.26 4.18-4.25.36v13.6l4.25.28.22 4.2h9.11l.29-4.18zM78.22 8.95l.24-4.27 4.25-.23.3-4.35h18.16c.1 1.37.2 2.74.33 4.3l4.25.3v4.18h-8.82l-.25-4.08h-9.16l-.19 4.1-4.3.38v13.6l4.24.23.29 4.27h9.1l.24-4.15h8.75v4.13l-4.16.37-.3 4.17H83.04l-.3-4.16-4.28-.36-.22-4.23-4.35-.23V9.26z"
      />
    </svg>
  );
};
