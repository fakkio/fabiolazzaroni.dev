import {usePreviousValue} from "beautiful-react-hooks";
import React, {useContext, VFC} from "react";
import {animated, useSpring} from "react-spring";
import {ThemeContext} from "./ThemeContext";

const animationProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: "50%",
      cy: "23%",
    },
    svg: {
      transform: "rotate(40deg)",
      color: "#ecf0f1",
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: "100%",
      cy: "0%",
    },
    svg: {
      transform: "rotate(90deg)",
      color: "#e67e22",
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: {mass: 4, tension: 250, friction: 35},
};

const placeholderStyle = {
  height: "32px",
  width: "32px",
};

export const DarkToggle: VFC = () => {
  const {colorMode, setColorMode} = useContext(ThemeContext);
  // Needed for checking if this is the initial rendering
  const prevColorMode = usePreviousValue(colorMode);

  const {circle, svg, lines, mask} = animationProperties[colorMode ?? "light"];

  const svgContainerProps = useSpring({
    ...svg,
    config: animationProperties.springConfig,
  });
  const centerCircleProps = useSpring({
    ...circle,
    config: animationProperties.springConfig,
  });
  const maskedCircleProps = useSpring({
    ...mask,
    config: animationProperties.springConfig,
  });
  const linesProps = useSpring({
    ...lines,
    config: animationProperties.springConfig,
  });

  if (!colorMode) {
    return <div style={placeholderStyle} />;
  }

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={(ev) => {
        setColorMode(colorMode === "light" ? "dark" : "light");
      }}
      style={{
        cursor: "pointer",
        ...(prevColorMode ? svgContainerProps : svg),
      }}
    >
      <mask id="myMask2">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <animated.circle
          // @ts-ignore
          style={prevColorMode ? maskedCircleProps : mask}
          r="9"
          fill="black"
        />
      </mask>

      <animated.circle
        cx="12"
        cy="12"
        // @ts-ignore
        style={prevColorMode ? centerCircleProps : circle}
        mask="url(#myMask2)"
        fill="currentColor"
      />
      <animated.g
        stroke="currentColor"
        style={prevColorMode ? linesProps : lines}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </animated.g>
    </animated.svg>
  );
};
