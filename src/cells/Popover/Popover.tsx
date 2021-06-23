import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledDrop } from './StyledDrop';

interface PopoverProps {
  target: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  position?: string;
  active: boolean;
  handleClose: () => void;
  elevation?: number;
  elevationDirection?: string;
}
const Popover = ({
  active = false,
  content,
  position = 'bottom',
  target,
  handleClose,
  elevation = 1,
  elevationDirection = '',
}: PopoverProps) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [alignDrop, setAlignDrop] = useState(position);
  const clickOutsideHandler = (event) => {
    if (dropRef.current && target.current) {
      if (
        dropRef.current.contains(event.target)
        || target.current.contains(event.target)
      ) {
        return;
      }
      handleClose();
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('mouseup', (event) => clickOutsideHandler(event));
    }
    document.removeEventListener('mouseup', (event) => clickOutsideHandler(event));
    return function cleanup() {
      document.removeEventListener('mouseup', (event) => clickOutsideHandler(event));
    };
  }, [active]);

  const setDropPosition = () => {
    if (dropRef.current && target.current) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const targetRect = target.current.getBoundingClientRect();
      const dropW = dropRef.current?.offsetWidth || 0; // width drop
      const dropH = dropRef.current?.offsetHeight || 0; // height drop
      const dropR = targetRect.left + dropW;
      let { left } = targetRect;

      // ajustar a los lados
      if (windowWidth > dropW) {
        // la ventana es mayor que el drop
        if (position === 'left' && targetRect.left >= dropW) {
          // a la izquierda y sí hay espacio
          left = targetRect.left - dropW;
        } else if (
          position === 'right'
          && windowWidth - targetRect.right >= dropW
        ) {
          // a la derecha y sí hay espacio
          left = targetRect.right;
        } else if (dropR > windowWidth) {
          // el drop se sale a la derecha
          left = targetRect.left - (dropR - windowWidth);
        } else {
          // el drop no se sale a la derecha
          left = targetRect.left;
        }
      } else {
        // la ventana es más pequeña
        left = 0;
      }
      let top = targetRect.bottom;

      // ajustar verticalmente
      // FIXME: usando right o left se tapa el activator dependiendo la pantalla
      if (
        position === 'right'
        && targetRect.top > dropH / 2
        && windowHeight - targetRect.bottom > dropH / 2
        && windowWidth - targetRect.right >= dropW
      ) {
        top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
      } else if (
        position === 'left'
        && targetRect.top > dropH / 2
        && windowHeight - targetRect.bottom > dropH / 2
        && targetRect.left > dropW
      ) {
        top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
      } else if (position === 'top' && targetRect.top >= dropH) {
        top = targetRect.top - dropH;
      } else if (
        position === 'bottom'
        && windowHeight - targetRect.bottom > dropH
      ) {
        top = targetRect.bottom;
      } else if (targetRect.top >= dropH) {
        top = targetRect.top - dropH;
      } else {
        top = targetRect.bottom;
      }
      dropRef.current.style.top = `${top}px`;
      dropRef.current.style.left = `${left}px`;
    }
  };
  useEffect(() => {
    setDropPosition();
  }, [target, active]);

  useEffect(() => {
    if (active) {
      document.addEventListener('scroll', setDropPosition);
      window.addEventListener('resize', setDropPosition);
    }
    return function cleanup() {
      document.removeEventListener('scroll', setDropPosition);
      window.removeEventListener('resize', setDropPosition);
    };
  }, [active]);

  if (!active || !target.current) {
    return null;
  }
  return createPortal(
    <StyledDrop
      ref={dropRef}
      elevation={elevation}
      elevationDirection={elevationDirection}
      style={{
        position: 'fixed',
      }}
      alignDrop={alignDrop}
    >
      {content}
    </StyledDrop>,
    document.body,
  );
};
export default Popover;
