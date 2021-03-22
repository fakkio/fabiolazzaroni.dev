import React, {SVGProps, useContext, VFC} from "react";
import {animated, useSpring} from "react-spring";
import {COLORS} from "../../utils/colors";
import {ThemeContext} from "../ThemeContext";

interface AmstradProps extends SVGProps<SVGSVGElement> {}

export const Amstrad: VFC<AmstradProps> = (svgProps) => {
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
    <>
      <svg viewBox="0 0 248.58 31.94" aria-label="Amstrad" {...svgProps}>
        <defs>
          <linearGradient
            id="amstrad-horizontal-lines"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <animated.stop offset="50%" style={gradientColor1} />
            <animated.stop offset="50%" style={gradientColor2} />
          </linearGradient>
          <pattern
            id="amstrad-line"
            patternUnits="userSpaceOnUse"
            width="14"
            height="9"
          >
            <rect
              width="100%"
              height="9"
              fill="url(#amstrad-horizontal-lines)"
            />
          </pattern>
        </defs>
        <path
          fill="currentColor"
          d="M18.15 31.9v-8.78h-9.2v8.7H0V9.25l4.18-.37.3-4.24 4.26-.23.24-4.4h9.14l.23 4.38 4.26.23.3 4.26 4.24.34v22.68zM9.09 9.22v8.84h8.98V9.22zM221.35 31.83l-.22-4.16-4.4-.32v-13.6l4.4-.32.22-4.3h13.53V4.6l-4.38-.2V.02h13.65v27.31l4.43.32v4.23h-8.74l-.26-4.17-4.53-.38V13.76H226V27.4h8.84v4.43zM64 31.94h-8.76v-13.5h-4.7v8.88H45.9v-8.85h-4.6v13.4h-9.09V13.7l4.35-.24.24-4.24h8.83l.26 4.15h4.54V9.27h9.05l.35 4.18 4.16.24zM124.2 9.02h9.04v4.47h-8.76v13.79h4.36l.23-4.12h8.78v4.18l-4.15.28-.35 4.25h-13.6l-.3-4.2-4.34-.35v-13.6l-4.44-.24V9.2l4.28-.31V.04h9.26zM184.28 22.83v-4.41h13.64v-4.83h-13.45V9.26h18.18l.26 4.2 4.3.24v13.62l4.46.33v4.23h-8.75l-.24-4.18-4.49-.37v-4.16h-9.14v4.3h8.88v4.35h-13.49l-.22-4.17-4.37-.28v-4.29zM161.3 13.79l-.23 4.37-4.38.21v8.94l4.37.37v4.17H142.9v-4.18l4.37-.34v-13.6l-4.36-.26V9.21h8.83l.43 4.27h4.2l.24-4.16h13.61l.35 4.14 4.16.23v4.42H166l-.25-4.32zM73.76 31.83v-4.3h18.12v-4.5H78.34L78 18.37l-4.18-.19v-4.46l4.13-.24.4-4.23h18.04v4.2H82.92v4.8h13.5l.34 4.55 4.25.3v4.2l-4.25.37-.3 4.16z"
        />
        <path
          fill="url(#amstrad-line)"
          d="M18.15 31.9v-8.78h-9.2v8.7H0V9.25l4.18-.37.3-4.24 4.26-.23.24-4.4h9.14l.23 4.38 4.26.23.3 4.26 4.24.34v22.68zM9.09 9.22v8.84h8.98V9.22zM221.35 31.83l-.22-4.16-4.4-.32v-13.6l4.4-.32.22-4.3h13.53V4.6l-4.38-.2V.02h13.65v27.31l4.43.32v4.23h-8.74l-.26-4.17-4.53-.38V13.76H226V27.4h8.84v4.43zM64 31.94h-8.76v-13.5h-4.7v8.88H45.9v-8.85h-4.6v13.4h-9.09V13.7l4.35-.24.24-4.24h8.83l.26 4.15h4.54V9.27h9.05l.35 4.18 4.16.24zM124.2 9.02h9.04v4.47h-8.76v13.79h4.36l.23-4.12h8.78v4.18l-4.15.28-.35 4.25h-13.6l-.3-4.2-4.34-.35v-13.6l-4.44-.24V9.2l4.28-.31V.04h9.26zM184.28 22.83v-4.41h13.64v-4.83h-13.45V9.26h18.18l.26 4.2 4.3.24v13.62l4.46.33v4.23h-8.75l-.24-4.18-4.49-.37v-4.16h-9.14v4.3h8.88v4.35h-13.49l-.22-4.17-4.37-.28v-4.29zM161.3 13.79l-.23 4.37-4.38.21v8.94l4.37.37v4.17H142.9v-4.18l4.37-.34v-13.6l-4.36-.26V9.21h8.83l.43 4.27h4.2l.24-4.16h13.61l.35 4.14 4.16.23v4.42H166l-.25-4.32zM73.76 31.83v-4.3h18.12v-4.5H78.34L78 18.37l-4.18-.19v-4.46l4.13-.24.4-4.23h18.04v4.2H82.92v4.8h13.5l.34 4.55 4.25.3v4.2l-4.25.37-.3 4.16z"
        />
      </svg>
    </>
  );
};
