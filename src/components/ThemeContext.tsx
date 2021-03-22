import React, {createContext, FC, useEffect, useMemo, useState} from "react";
import {COLORS} from "../utils/colors";
import {COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP} from "../utils/constants";

export type ColorMode = "light" | "dark";
export interface ThemeContextProps {
  colorMode: ColorMode | undefined;
  setColorMode: (value: ColorMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  colorMode: undefined,
  setColorMode: (value: ColorMode) => {
    throw new Error("No setColorMode available");
  },
});

export const ThemeProvider: FC = ({children}) => {
  const [colorMode, rawSetColorMode] = useState<ColorMode>();

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    ) as ColorMode;

    rawSetColorMode(initialColorValue);
  }, []);

  const contextValue = useMemo(() => {
    function setColorMode(newValue: ColorMode) {
      const root = window.document.documentElement;

      localStorage.setItem(COLOR_MODE_KEY, newValue);

      Object.entries(COLORS).forEach(([name, colorByTheme]) => {
        const cssVarName = `--color-${name}`;

        root.style.setProperty(cssVarName, colorByTheme[newValue]);
      });

      rawSetColorMode(newValue);
    }

    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
