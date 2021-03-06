import React, {SVGProps, VFC} from "react";
import {Icon} from "./Icon";

interface GatsbyLogoProps extends SVGProps<SVGSVGElement> {}

export const GatsbyLogo: VFC<GatsbyLogoProps> = (svgProps) => {
  return (
    <Icon viewBox="0 0 32 32" {...svgProps}>
      <path
        fill="#fff"
        d="M28.57 16h-8v2.29h5.49a10.36 10.36 0 01-6.63 7.42L6.29 12.57A10.28 10.28 0 0116 5.71a10.55 10.55 0 018.46 4.35l1.71-1.49a12.56 12.56 0 00-22.4 4.69l15.09 15.08A12.86 12.86 0 0028.57 16zM3.43 16.11a12.2 12.2 0 003.66 8.69 12.4 12.4 0 008.68 3.66z"
      />
      <path
        d="M16 0a16 16 0 1016 16A16.05 16.05 0 0016 0zM7.09 24.91a12.4 12.4 0 01-3.66-8.68l12.46 12.34a12.97 12.97 0 01-8.8-3.66zm11.65 3.32L3.77 13.26a12.56 12.56 0 0122.4-4.69l-1.71 1.49A10.55 10.55 0 0016 5.7a10.4 10.4 0 00-9.71 6.86l13.14 13.14a10.36 10.36 0 006.63-7.42h-5.49V16h8a12.6 12.6 0 01-9.83 12.23z"
        fill="#663f8f"
      />
    </Icon>
  );
};
