import React, {SVGProps, useRef, VFC} from "react";
import {Icon} from "./Icon";

interface NodejsLogoProps extends SVGProps<SVGSVGElement> {}

export const NodejsLogo: VFC<NodejsLogoProps> = (svgProps) => {
  const randomId = useRef(Math.random());
  return (
    <Icon viewBox="0 0 28.113 32" {...svgProps}>
      <defs>
        <linearGradient
          id={`gradient-${randomId.current}`}
          x1="278.754"
          y1="192.087"
          x2="279.111"
          y2="192.087"
          gradientTransform="scale(-115.30647 115.30647) rotate(63.886 293.336 -127.673)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".3" stopColor="#3e863d" />
          <stop offset=".5" stopColor="#55934f" />
          <stop offset=".8" stopColor="#5aad45" />
        </linearGradient>
        <linearGradient
          id={`gradient2-${randomId.current}`}
          x1="277.773"
          y1="200.005"
          x2="278.005"
          y2="200.005"
          gradientTransform="scale(177.0637 -177.0637) rotate(36.46 442.745 -321.78)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".57" stopColor="#3e863d" />
          <stop offset=".72" stopColor="#619857" />
          <stop offset="1" stopColor="#76ac64" />
        </linearGradient>
        <linearGradient
          id={`gradient3-${randomId.current}`}
          x1="275.682"
          y1="199.336"
          x2="275.892"
          y2="199.336"
          gradientTransform="matrix(129.8891 0 0 -129.8891 -35807.318 25907.596)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".16" stopColor="#6bbf47" />
          <stop offset=".38" stopColor="#79b461" />
          <stop offset=".47" stopColor="#75ac64" />
          <stop offset=".7" stopColor="#659e5a" />
          <stop offset=".9" stopColor="#3e863d" />
        </linearGradient>
        <clipPath id={`clip-path-${randomId.current}`}>
          <path
            fill="none"
            d="M13.3.202L.758 7.442A1.514 1.514 0 000 8.752v14.488a1.513 1.513 0 00.758 1.312L13.3 31.797a1.518 1.518 0 001.515 0l12.54-7.244a1.517 1.517 0 00.757-1.312V8.753a1.514 1.514 0 00-.76-1.312L14.816.202a1.525 1.525 0 00-1.519 0"
          />
        </clipPath>
        <clipPath id={`clip-path-2-${randomId.current}`}>
          <path
            fill="none"
            d="M.31 24.161a1.518 1.518 0 00.447.392l10.759 6.214 1.792 1.03a1.52 1.52 0 00.874.198 1.549 1.549 0 00.297-.054L27.707 7.72a1.5 1.5 0 00-.353-.28l-8.212-4.743-4.34-2.497a1.583 1.583 0 00-.394-.158z"
          />
        </clipPath>
        <clipPath id={`clip-path-3-${randomId.current}`}>
          <path
            fill="none"
            d="M13.906.008a1.53 1.53 0 00-.606.194L.794 7.421 14.28 31.983a1.504 1.504 0 00.538-.186l12.542-7.244a1.52 1.52 0 00.732-1.035L14.345.033a1.575 1.575 0 00-.307-.03c-.041 0-.083.002-.125.006"
          />
        </clipPath>
      </defs>
      <g clipPath={`url(#clip-path-${randomId.current})`}>
        <path
          d="M40.787 6.212L5.446-11.11l-18.12 36.965 35.34 17.324z"
          fill={`url(#gradient-${randomId.current})`}
        />
      </g>
      <g clipPath={`url(#clip-path-2-${randomId.current})`}>
        <path
          d="M-14.97 11.336L9.986 45.11l33.002-24.383-24.955-33.773z"
          fill={`url(#gradient2-${randomId.current})`}
        />
      </g>
      <g clipPath={`url(#clip-path-3-${randomId.current})`}>
        <path
          d="M.794.003v31.98h27.293V.004z"
          fill={`url(#gradient3-${randomId.current})`}
        />
      </g>
    </Icon>
  );
};
