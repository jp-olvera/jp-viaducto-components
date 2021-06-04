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
  const [stylePosition, setStylePosition] = useState({ x: '0rem', y: '0rem' });
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
      const contentH = dropRef.current?.offsetHeight || 0;
      const { bottom, top, left } = target.current.getBoundingClientRect();
      const activatorOffsetHeight = target.current.offsetHeight;
      const dropdownH = activatorOffsetHeight + contentH;
      const dropdownBottom = bottom + contentH; // la posición donde terminaría el dropdown
      const documentH = window.innerHeight || document.documentElement.clientHeight;

      if (position === 'top' && top > dropdownH) {
        // es top y arriba aún hay espacio
        const newTop = top - contentH;
        setStylePosition({
          y: `${newTop}px`,
          x: `${left}px`,
        });
        setAlignDrop('bottom');
        return;
      }
      if (position === 'bottom' && dropdownBottom < documentH) {
        // es bottom y abaja hay espacio
        setStylePosition({
          y: `${bottom}px`,
          x: `${left}px`,
        });
        setAlignDrop('top');
        return;
      }
      if (dropdownBottom > documentH && top > dropdownH) {
        // si el dropdown completo queda más abajo
        // y arriba aún hay espacio
        const newTop = top - contentH;
        setStylePosition({
          y: `${newTop}px`,
          x: `${left}px`,
        });
        setAlignDrop('bottom');
      } else {
        const newTop = top + activatorOffsetHeight;
        setStylePosition({
          y: `${newTop}px`,
          x: `${left}px`,
        });
        setAlignDrop('top');
      }
    }
  };
  useEffect(() => {
    setDropPosition();
  }, [target, active]);

  useEffect(() => {
    if (active) {
      document.addEventListener('scroll', setDropPosition);
    }
    return function cleanup() {
      document.removeEventListener('scroll', setDropPosition);
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
        top: stylePosition.y,
        left: stylePosition.x,
      }}
      alignDrop={alignDrop}
    >
      {content}
    </StyledDrop>,
    document.body,
  );
};
export default Popover;
