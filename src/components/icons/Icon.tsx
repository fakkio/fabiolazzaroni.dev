import classNames from "classnames";
import React, {FC, SVGProps} from "react";
import {icon} from "./icon.module.scss";

interface IconProps extends SVGProps<SVGSVGElement> {}

export const Icon: FC<IconProps> = ({children, className, ...svgProps}) => {
  return (
    <svg
      role="img"
      height="17"
      preserveAspectRatio="xMidYMid meet"
      className={classNames(icon, className)}
      fill="currentColor"
      {...svgProps}
    >
      {children}
    </svg>
  );
};
