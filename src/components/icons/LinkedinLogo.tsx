import classNames from "classnames";
import React, {SVGProps, useContext, VFC} from "react";
import {ThemeContext} from "../ThemeContext";
import {Icon} from "./Icon";
import {animateFill} from "./icon.module.scss";

interface LinkedinLogoProps extends SVGProps<SVGSVGElement> {}

export const LinkedinLogo: VFC<LinkedinLogoProps> = ({
  className,
  ...svgProps
}) => {
  const {colorMode} = useContext(ThemeContext);

  return (
    <Icon
      viewBox="0 0 31.798 32"
      className={classNames(animateFill, className)}
      {...svgProps}
    >
      <path
        d="M0 2.292A2.322 2.322 0 012.35 0h27.098a2.322 2.322 0 012.35 2.292v27.416A2.322 2.322 0 0129.448 32H2.35A2.322 2.322 0 010 29.708z"
        fill={colorMode === "light" ? "#ffffff" : "#2e6897"}
      />
      <path
        d="M9.639 26.787v-14.45H4.836v14.45zM7.238 10.365a2.504 2.504 0 10.031-4.993 2.503 2.503 0 10-.063 4.993h.032z"
        fill={
          colorMode === "light" ? "var(--color-invertedBackground)" : "#ffffff"
        }
      />
      <path
        d="M12.297 26.787h4.802v-8.07a3.292 3.292 0 01.158-1.171 2.629 2.629 0 012.465-1.757c1.738 0 2.433 1.326 2.433 3.268v7.73h4.802v-8.285c0-4.438-2.37-6.504-5.53-6.504a4.784 4.784 0 00-4.36 2.435h.032v-2.095h-4.802c.063 1.355 0 14.45 0 14.45z"
        fill={
          colorMode === "light" ? "var(--color-invertedBackground)" : "#ffffff"
        }
      />
    </Icon>
  );
};
