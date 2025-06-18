import React, { useEffect, useRef } from 'react';

const useDebouncer = (callback, delay) => {
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }
    timeoutIdRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
  return debouncedCallback;
};

export default useDebouncer;
