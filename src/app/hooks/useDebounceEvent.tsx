type UseDebounceEventArgs<T> = {
  timer?: number;
  onChange?: (value: T) => void;
};

export const useDebounceEvent = <T,>(props: UseDebounceEventArgs<T>) => {
  let timeout: NodeJS.Timeout;
  return (value: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      props.onChange?.(value);
    }, props.timer ?? 1000);
  };
};
