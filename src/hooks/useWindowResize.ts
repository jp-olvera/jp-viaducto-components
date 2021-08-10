import { useState, useEffect } from 'react';

export const useWindowResize = (size: number = 576, offset?: boolean) => {
  const [off, setOffset] = useState(offset || !(window.innerWidth > size));
  useEffect(() => {
    const resize = (el: UIEvent) => {
      const element = el.target as Window;
      if (element.innerWidth <= size) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    };
    window.addEventListener('resize', resize);
    return function cleanup() {
      window.removeEventListener('resize', resize);
    };
  }, [off, size, setOffset]);
  return { offset: off, setOffset };
};
