import classNames from "classnames";
import React, {SVGProps, useContext, VFC} from "react";
import {ThemeContext} from "../ThemeContext";
import {Icon} from "./Icon";
import {animateFill} from "./icon.module.scss";

interface GitHubLogoProps extends SVGProps<SVGSVGElement> {
  inverted?: boolean;
}

export const GitHubLogo: VFC<GitHubLogoProps> = ({
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
        d="M15.999 0a16.002 16.002 0 00-5.056 31.182c.8.147 1.092-.347 1.092-.771 0-.38-.014-1.386-.022-2.721-4.45.967-5.39-2.145-5.39-2.145a4.237 4.237 0 00-1.776-2.34c-1.453-.993.11-.973.11-.973a3.36 3.36 0 012.45 1.649 3.407 3.407 0 004.657 1.33 3.419 3.419 0 011.016-2.14c-3.553-.404-7.288-1.776-7.288-7.907a6.185 6.185 0 011.647-4.294 5.755 5.755 0 01.156-4.234s1.344-.43 4.4 1.64a15.165 15.165 0 018.012 0c3.054-2.07 4.395-1.64 4.395-1.64a5.747 5.747 0 01.16 4.234 6.174 6.174 0 011.644 4.294c0 6.146-3.74 7.499-7.305 7.895a3.819 3.819 0 011.086 2.963c0 2.139-.02 3.864-.02 4.389 0 .428.288.926 1.1.77A16.002 16.002 0 0016 0z"
        fill={isActuallyDark ? "#ffffff" : "#201f1f"}
      />
    </Icon>
  );
};
