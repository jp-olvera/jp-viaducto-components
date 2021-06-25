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
  const [arrowDirection, setArrowDirection] = useState('top');
  const [arrowPosition, setArrowPosition] = useState('center');
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
      const windowWidth = document.body.clientWidth;
      const windowHeight = window.innerHeight;
      const tr = target.current.getBoundingClientRect();
      const targetRect = {
        left: tr.left - 10,
        top: tr.top - 10,
        bottom: tr.bottom + 10,
        right: tr.right + 10,
      };
      const dropW = dropRef.current?.offsetWidth || 0; // width drop
      const dropH = dropRef.current?.offsetHeight || 0; // height drop
      const dropR = targetRect.right + dropW;
      let { left } = targetRect;
      // console.log(targetRect);
      // ajustar a los lados
      if (windowWidth > dropW) {
        // la ventana es mayor que el drop
        if (position === 'left' && targetRect.left >= dropW) {
          // a la izquierda y sí hay espacio
          // console.log('a la izquierda y sí hay espacio');
          left = targetRect.left - dropW;
          setAlignDrop('right');
          setArrowDirection('right');
        } else if (
          position === 'right'
          && windowWidth - targetRect.right >= dropW
        ) {
          // a la derecha y sí hay espacio
          // console.log('a la derecha y sí hay espacio');
          left = targetRect.right;
          setArrowDirection('left');
        } else if (dropR > windowWidth) {
          // el drop se sale a la derecha
          // console.log('el drop se sale a la derecha');
          if (targetRect.right >= windowWidth) {
            left = targetRect.right - dropW - 20;
            setArrowPosition('end');
          } else {
            left = targetRect.left;
            setArrowPosition('start');
          }
        } else {
          // el drop no se sale a la derecha
          // console.log('el drop no se sale a la derecha');
          left = targetRect.left;
          setArrowDirection('left');
        }
      } else {
        // la ventana es más pequeña
        // console.log('la ventana es más pequeña');
        left = 0;
      }
      let top = targetRect.bottom;

      // ajustar verticalmente
      if (position === 'right' && windowWidth - targetRect.right >= dropW) {
        // to the right and it fits
        if (targetRect.top < dropH) {
          // alineado al top del activator
          // console.log('to the right and it fits alineado al top del activator');
          setArrowPosition('start');
          top = targetRect.top;
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          // console.log(
          //   'to the right and it fits alineado al bottom del activator',
          // );
          top = targetRect.bottom - dropH;
          setArrowPosition('end');
        } else {
          // alineado al centro
          // console.log('to the right and it fits alineado al centro');
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
          setArrowPosition('center');
        }
      } else if (position === 'left' && targetRect.left > dropW) {
        setArrowDirection('right');
        if (targetRect.top < dropH) {
          // alineado al top del activator
          // console.log('left -> alineado al top del activator');
          top = targetRect.top;
          setArrowPosition('start');
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          // console.log('left -> alineado al bottom del activator');
          top = targetRect.bottom - dropH;
          setArrowPosition('end');
        } else {
          // console.log('left -> alineado al centro');
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
          setArrowPosition('center');
        }
      } else if (position === 'top' && targetRect.top >= dropH) {
        // es top y cabe arriba
        // console.log('es top y cabe arriba');
        top = targetRect.top - dropH;
        setArrowDirection('bottom');
      } else if (
        position === 'bottom'
        && windowHeight - targetRect.bottom > dropH
      ) {
        // es bottom y abajo cabe
        // console.log('es bottom y abajo cabe');
        top = targetRect.bottom;
        setArrowPosition('start');
        setArrowDirection('top');
      } else if (targetRect.top >= dropH) {
        // se pone arriba
        // console.log('se pone arriba');
        top = targetRect.top - dropH;
        setArrowDirection('bottom');
      } else {
        // console.log('else -> alinear al bottom');
        top = targetRect.bottom;
        setArrowDirection('top');
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

  if (active && target && target.current) {
    return createPortal(
      <StyledDrop
        ref={dropRef}
        elevation={elevation}
        elevationDirection={elevationDirection}
        style={{
          position: 'fixed',
        }}
        alignDrop={alignDrop}
        arrowDirection={arrowDirection}
        arrowPosition={arrowPosition}
      >
        {content}
      </StyledDrop>,
      document.body,
    );
  }
  return null;
};
export default Popover;