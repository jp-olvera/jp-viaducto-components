import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Drop = ({
  target, content, contentRef, position = 'bottom',
}) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [stylePosition, setStylePosition] = useState({ x: '0rem', y: '0rem' });

  const setDropPosition = () => {
    if (contentRef.current && target.current) {
      const contentH = contentRef.current?.offsetHeight || 0;
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
        return;
      }
      if (position === 'bottom' && dropdownBottom < documentH) {
        // es bottom y abaja hay espacio
        setStylePosition({
          y: `${bottom}px`,
          x: `${left}px`,
        });
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
      } else {
        const newTop = top + activatorOffsetHeight;
        setStylePosition({
          y: `${newTop}px`,
          x: `${left}px`,
        });
      }
    }
  };
  useEffect(() => {
    setDropPosition();
  }, [contentRef]);

  useEffect(() => {
    document.addEventListener('scroll', setDropPosition);
    return function cleanup() {
      document.removeEventListener('scroll', setDropPosition);
    };
  }, []);
  /* istanbul ignore if */
  if (!target.current) {
    return null;
  }

  return createPortal(
    <div
      ref={dropRef}
      style={{
        position: 'fixed',
        top: stylePosition.y,
        left: stylePosition.x,
      }}
    >
      {content}
    </div>,
    document.body,
  );
};
export default Drop;
