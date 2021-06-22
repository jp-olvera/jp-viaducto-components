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
      const contentH = dropRef.current?.offsetHeight || 0; // height drop
      const contentW = dropRef.current?.offsetWidth || 0; // width drop
      const { right: rightDrop } = dropRef.current?.getBoundingClientRect() || 0; // width drop
      const { bottom, top, left } = target.current.getBoundingClientRect();
      const activatorOffsetHeight = target.current.offsetHeight; // height with paddings and borders
      const dropdownH = activatorOffsetHeight + contentH; // height including drop and activator
      const dropdownBottom = bottom + contentH; // la posición donde terminaría el dropdown
      const documentH = window.innerHeight || document.documentElement.clientHeight;
      const documentW = window.innerWidth || document.documentElement.clientWidth;

      let newTop = bottom;
      let newLeft = left;
      if (
        (position === 'top' && top > dropdownH)
        || dropdownBottom > documentH
      ) {
        // es top o queda más abajo y arriba aún hay espacio
        newTop = top - contentH;
        setAlignDrop('bottom');
      } else {
        // es bottom y abajo hay espacio
        newTop = bottom;
        setAlignDrop('top');
      }
      if (contentW >= documentW) {
        // es mayor o igual al width de la pantalla
        // o se sale a la izquierda
        newLeft = 0;
      } else if (rightDrop > documentW) {
        // se sale a la derecha
        newLeft = documentW - contentW;
      }
      setStylePosition({
        y: `${newTop}px`,
        x: `${newLeft}px`,
      });
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
