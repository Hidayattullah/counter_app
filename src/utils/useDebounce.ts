import { useCallback, useRef } from 'react';

const useDebounce = (func: () => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      func();
    }, delay);
  }, [func, delay]);

  return debouncedFunction;
};

export default useDebounce;
