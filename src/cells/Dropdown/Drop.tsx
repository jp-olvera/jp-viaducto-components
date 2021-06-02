import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Drop = ({ target, content, contentRef }) => {
  const dropRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: '0rem', y: '0rem' });

  const setDropPosition = () => {
    if (contentRef.current && target.current) {
      const contentH = contentRef.current?.clientHeight || 0;
      const { bottom, top, left } = target.current.getBoundingClientRect();
      const activatorH = bottom - top;
      const dropdownH = activatorH + contentH;
      const dropdownBottom = bottom + contentH; // la posición donde terminaría el dropdown
      const documentH = window.innerHeight || document.documentElement.clientHeight;

      if (dropdownBottom > documentH) {
        if (top > dropdownH) {
          const newTop = top - contentH - 5;
          setPosition({
            y: `${newTop}px`,
            x: `${left}px`,
          });
        }
      } else {
        setPosition({
          y: `${bottom + 5}px`,
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
  if (!target.current) {
    return null;
  }

  return createPortal(
    <div
      ref={dropRef}
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
      }}
    >
      {content}
    </div>,
    document.body,
  );
};
export default Drop;
