import React, { useCallback, useEffect, useState } from 'react';

export const useScroll = (ref: React.RefObject<any>, top?: number) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const handleScroll = useCallback((value: boolean) => {
    setScroll(value);
  }, []);
  const scrollTop = top || 20;
  useEffect(() => {
    const element = ref;
    const scroll = (el: Event) => {
      const element = el.target as Element;

      if (element.scrollTop > scrollTop) {
        handleScroll(true);
      } else {
        handleScroll(false);
      }
    };
    if (element && element.current) {
      element.current.addEventListener('scroll', scroll);
    }
    return function cleanup() {
      element.current?.removeEventListener('scroll', scroll);
    };
  }, [ref, scrollTop]);
  return { scroll, handleScroll };
};
