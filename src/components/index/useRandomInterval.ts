import {EffectCallback, useCallback, useEffect, useRef} from "react";

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const useRandomInterval = (
  fn: EffectCallback,
  minDelay: number,
  maxDelay: number
) => {
  const timeout = useRef<number>();
  const callback = useRef(fn);
  const cleanup = useRef<ReturnType<EffectCallback>>();

  // Clear method
  const clear = useCallback(function () {
    window.clearTimeout(timeout.current);
  }, []);

  // if the provided function changes, change its reference
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  // when minDelay or maxDelay change, reset the timeout
  useEffect(() => {
    const handleTick = () => {
      const nextTickAt = random(minDelay, maxDelay);
      timeout.current = window.setTimeout(() => {
        cleanup.current = callback.current();
        handleTick();
      }, nextTickAt);
    };
    handleTick();

    return () => {
      if (typeof cleanup.current === "function") {
        cleanup.current();
      }
      window.clearTimeout(timeout.current);
    };
  }, [minDelay, maxDelay]);

  return clear;
};
