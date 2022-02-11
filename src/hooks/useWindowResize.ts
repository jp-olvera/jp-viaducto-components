import { useState, useEffect, useCallback } from 'react';

export const useWindowResize = (size: number = 576, offset?: boolean) => {
  /* istanbul ignore else */
  if (window) {
    const [off, setOffset] = useState(offset || !(window.innerWidth > size));
    const handleOffset = useCallback((value: boolean) => {
      setOffset(value);
    }, []);
    useEffect(() => {
      const resize = (el: UIEvent) => {
        const element = el.target as Window;
        if (element.innerWidth <= size) {
          handleOffset(true);
        } else {
          handleOffset(false);
        }
      };
      window.addEventListener('resize', resize);
      return function cleanup() {
        window.removeEventListener('resize', resize);
      };
    }, [off, size, handleOffset]);
    return { offset: off, handleOffset };
  }
  return { offset: false, handleOffset: () => {} };
};
