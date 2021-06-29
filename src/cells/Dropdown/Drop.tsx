import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { findScrollParents } from '../../utils/scroll';

interface DropProps {
  target: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
  children: React.ReactNode;
}
const Drop = ({ target, children, contentRef }: DropProps) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const move = () => {
    if (contentRef.current && target.current && dropRef.current) {
      const windowHeight = window.innerHeight;
      const targetRect: DOMRect = target.current.getBoundingClientRect();
      const dropH = contentRef.current?.offsetHeight || 0; // height drop
      let top = targetRect.bottom;

      // ajustar verticalmente
      if (windowHeight - targetRect.bottom > dropH) {
        // abajo hay espacio
        top = targetRect.bottom;
      } else if (targetRect.top >= dropH) {
        // arriba cabe
        top = targetRect.top - dropH;
      } else {
        top = targetRect.bottom;
      }
      dropRef.current.style.top = `${top}px`;
      dropRef.current.style.left = `${targetRect.left}px`;
    }
  };

  useEffect(() => {
    move();
    let scrollParents: (Element | Document)[] = [];
    const addScrollListeners = () => {
      scrollParents = findScrollParents(target.current);
      scrollParents.forEach((scrollParent) => scrollParent.addEventListener('scroll', move));
    };
    const removeScrollListeners = () => {
      scrollParents.forEach((scrollParent) => scrollParent.removeEventListener('scroll', move));
      scrollParents = [];
    };
    if (target && target.current) {
      addScrollListeners();
      window.addEventListener('resize', move);
    }
    return function cleanup() {
      removeScrollListeners();
      window.removeEventListener('resize', move);
    };
  }, []);
  /* istanbul ignore if */
  if (!target || !target.current) {
    return null;
  }
  return createPortal(
    <div
      ref={dropRef}
      style={{
        position: 'fixed',
        zIndex: 1,
      }}
    >
      {children}
    </div>,
    document.body,
  );
};
export default Drop;
