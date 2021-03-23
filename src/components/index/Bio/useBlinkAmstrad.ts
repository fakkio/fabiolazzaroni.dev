import {useState} from "react";
import {useRandomInterval} from "./useRandomInterval";

export const useBlinkAmstrad = (minDelay: number, maxDelay: number) => {
  const [amstradStyle, setAmstradStyle] = useState({});
  useRandomInterval(
    () => {
      const timeout1 = setTimeout(() => {
        setAmstradStyle({color: "var(--color-amstradGreen)"});
      }, 1);
      const timeout2 = setTimeout(() => {
        setAmstradStyle({});
      }, 150);
      const timeout3 = setTimeout(() => {
        setAmstradStyle({color: "var(--color-amstradGreen)"});
      }, 700);
      const timeout4 = setTimeout(() => {
        setAmstradStyle({});
      }, 850);

      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
        clearTimeout(timeout4);
      };
    },
    minDelay,
    maxDelay
  );

  return amstradStyle;
};
