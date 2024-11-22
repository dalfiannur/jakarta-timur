import { useState } from "react";

export const useDebounceValue = <T,>(defaultValue: T, timer: number = 3000) => {
  const [value, setValue] = useState(defaultValue);

  let timeout: NodeJS.Timeout;

  const set = (val: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      setValue(val);
    }, timer);
  };

  return { set, get: value };
};
