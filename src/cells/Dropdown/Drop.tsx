import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { findScrollParents } from '../../utils/scroll';

interface DropProps {
  target: React.RefObject<HTMLElement> | any;
  contentRef: React.RefObject<HTMLElement> | any;
  children: React.ReactNode;
}
const Drop = ({ target, children, contentRef }: DropProps) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const move = () => {
    if (contentRef.current && target.current && dropRef.current) {
      const windowHeight = window.innerHeight;
      const windowWidth = document.body.clientWidth;
      const targetRect: DOMRect = target.current.getBoundingClientRect();
      const dropH = contentRef.current?.offsetHeight || 0; // height drop
      const dropW = contentRef.current?.offsetWidth || 0; // height drop
      let top = targetRect.bottom;
      const dropR = targetRect.left + dropW;
      // ajustar verticalmente
      if (windowHeight - targetRect.bottom > dropH) {
        // abajo hay espacio
        top = targetRect.bottom + 3;
      } else if (targetRect.top >= dropH) {
        // arriba cabe
        top = targetRect.top - dropH - 3;
      } else {
        top = targetRect.bottom + 3;
      }
      let { left } = targetRect;

      // ajustar a los lados
      if (windowWidth > dropW) {
        // la ventana es mayor que el drop
        if (dropR > windowWidth) {
          // el drop se sale a la derecha
          left = targetRect.right - dropW;
        } else {
          // el drop no se sale a la derecha
          left = targetRect.left;
        }
      } else {
        // la ventana es más pequeña
        left = 0;
      }
      dropRef.current.style.top = `${top}px`;
      dropRef.current.style.left = `${left}px`;
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

  useEffect(() => {
    if (dropRef.current) {
      dropRef.current.focus();
      if (target.current?.offsetWidth) {
        dropRef.current.style.minWidth = `${target.current.offsetWidth}px`;
      }
    }
  }, [dropRef, target]);
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
      tabIndex={0}
      role='listbox'
    >
      {children}
    </div>,
    document.body,
  );
};
export default Drop;
