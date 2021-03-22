import classNames from "classnames";
import React, {SVGProps, useContext, VFC} from "react";
import {ThemeContext} from "../ThemeContext";
import {Icon} from "./Icon";
import {animateFill} from "./icon.module.scss";

interface DockerLogoProps extends SVGProps<SVGSVGElement> {
  inverted?: boolean;
}

export const DockerLogo: VFC<DockerLogoProps> = ({
  className,
  inverted,
  ...svgProps
}) => {
  const {colorMode} = useContext(ThemeContext);
  const isDarkMode = colorMode === "dark";
  const isActuallyDark = inverted ? !isDarkMode : isDarkMode;

  return (
    <Icon
      viewBox="0 0 32 32"
      className={classNames(animateFill, className)}
      {...svgProps}
    >
      <path
        d="M31.68 13.19a4.25 4.25 0 00-2.6-.68 8.31 8.31 0 00-1.35.11 5.03 5.03 0 00-2.29-3.42L25 8.94l-.3.43a6.15 6.15 0 00-.82 1.9 4.52 4.52 0 00.54 3.56 6.28 6.28 0 01-2.33.56H1a1 1 0 00-1 1 15.17 15.17 0 00.92 5.41 8.03 8.03 0 003.22 4.17 14.17 14.17 0 007.03 1.51 21 21 0 003.9-.35 16.33 16.33 0 005.1-1.85 14.02 14.02 0 003.48-2.85 19.4 19.4 0 003.4-5.87h.3a4.9 4.9 0 003.58-1.34 3.9 3.9 0 00.94-1.4l.13-.38z"
        fill={isActuallyDark ? "#ffffff" : "#0db7ed"}
      />
      <path
        d="M2.96 14.77h2.82a.25.25 0 00.25-.25v-2.51a.25.25 0 00-.25-.25H2.96a.25.25 0 00-.25.25v2.51a.25.25 0 00.25.25M6.85 14.77h2.82a.25.25 0 00.25-.25v-2.51a.25.25 0 00-.25-.25H6.85a.25.25 0 00-.25.25v2.51a.25.25 0 00.25.25M10.8 14.77h2.82a.25.25 0 00.25-.25v-2.51a.25.25 0 00-.24-.25H10.8a.25.25 0 00-.25.25v2.51a.25.25 0 00.25.25M14.7 14.77h2.83a.25.25 0 00.25-.25v-2.51a.25.25 0 00-.25-.25H14.7a.25.25 0 00-.24.25v2.51a.25.25 0 00.24.25M6.85 11.15h2.82a.25.25 0 00.25-.25V8.4a.25.25 0 00-.25-.25H6.85a.25.25 0 00-.25.25v2.51a.25.25 0 00.25.25M10.8 11.15h2.82a.25.25 0 00.25-.25V8.4a.25.25 0 00-.25-.25H10.8a.25.25 0 00-.25.25v2.51a.25.25 0 00.25.25M14.7 11.15h2.83a.25.25 0 00.25-.25V8.4a.25.25 0 00-.25-.25H14.7a.25.25 0 00-.24.25v2.51a.25.25 0 00.24.25M14.7 7.53h2.83a.25.25 0 00.25-.25V4.77a.25.25 0 00-.25-.25H14.7a.25.25 0 00-.24.25v2.51a.25.25 0 00.24.25M18.64 14.77h2.83a.25.25 0 00.25-.25v-2.51a.25.25 0 00-.25-.25h-2.83a.25.25 0 00-.24.25v2.51a.25.25 0 00.24.25"
        fill={isActuallyDark ? "#ffffff" : "#0db7ed"}
      />
    </Icon>
  );
};
