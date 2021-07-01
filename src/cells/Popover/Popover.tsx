import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { findScrollParents } from '../../utils/scroll';
import { StyledDrop } from './StyledDrop';

/**
 * Popover components opens a dialog box attach to anactivator like a button
 * via ref.
 * @param {boolean} active Indicates if the popover shoulb be visible
 * @param {React.ReactNode} content Any valid React element to put inside the box
 * @param {number} elevation The elevation level it should take, one of 0/1/2/3, defaults to 1
 * @param {string} elevationDirection The elevation direction, if '' direction goes everywhere, for example top, bottomLeft
 * @param {Function} handleClose function to close the popover when clicking outside
 * @param {string} position Position to put the popover according to the activator, top, bottom(deafult), right or left
 * @param {React.RefObject<HTMLElement>} target A ref pointing to the activator
 */
interface PopoverProps {
  active: boolean;
  content: React.ReactNode;
  elevation?: number;
  elevationDirection?: string;
  handleClose: () => void;
  position?: string;
  target: React.RefObject<HTMLElement>;
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
  const [arrowPosition, setArrowPosition] = useState('left');
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

  const move = () => {
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

      // ajustar a los lados
      if (windowWidth > dropW) {
        // la ventana es mayor que el drop
        if (position === 'left' && targetRect.left >= dropW) {
          // a la izquierda y sí hay espacio
          left = targetRect.left - dropW;
          setAlignDrop('right');
          setArrowDirection('right');
        } else if (
          position === 'right'
          && windowWidth - targetRect.right >= dropW
        ) {
          // a la derecha y sí hay espacio
          left = targetRect.right;
          setArrowDirection('left');
        } else if (dropR > windowWidth) {
          // el drop se sale a la derecha
          left = targetRect.right - dropW - 10;
          setArrowPosition('end');
        } else {
          // el drop no se sale a la derecha
          left = targetRect.left + 10;
          setArrowDirection('left');
          setArrowPosition('start');
        }
      } else {
        // la ventana es más pequeña
        left = 0;
      }
      let top = targetRect.bottom;

      // ajustar verticalmente
      if (position === 'right' && windowWidth - targetRect.right >= dropW) {
        // to the right and it fits
        if (targetRect.top < dropH) {
          // alineado al top del activator
          setArrowPosition('start');
          top = targetRect.top + 10;
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          top = targetRect.bottom - dropH - 10;
          setArrowPosition('end');
        } else {
          // alineado al centro
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
          setArrowPosition('center');
        }
      } else if (position === 'left' && targetRect.left > dropW) {
        setArrowDirection('right');
        if (targetRect.top < dropH) {
          // alineado al top del activator
          top = targetRect.top + 10;
          setArrowPosition('start');
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          top = targetRect.bottom - dropH - 10;
          setArrowPosition('end');
        } else {
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
          setArrowPosition('center');
        }
      } else if (position === 'top' && targetRect.top >= dropH) {
        // es top y cabe arriba
        top = targetRect.top - dropH;
        setArrowDirection('bottom');
      } else if (
        position === 'bottom'
        && windowHeight - targetRect.bottom > dropH
      ) {
        // es bottom y abajo cabe
        top = targetRect.bottom;
        setArrowDirection('top');
      } else if (targetRect.top >= dropH) {
        // se pone arriba
        top = targetRect.top - dropH;
        setArrowDirection('bottom');
      } else {
        top = targetRect.bottom;
        setArrowDirection('top');
      }
      dropRef.current.style.top = `${top}px`;
      dropRef.current.style.left = `${left}px`;
    }
  };

  useEffect(() => {
    if (dropRef.current) {
      dropRef.current.focus();
    }
  }, [dropRef, active]);
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
    if (active && target && target.current) {
      addScrollListeners();
      document.addEventListener('mouseup', (event) => clickOutsideHandler(event));
      window.addEventListener('resize', move);
    }
    document.removeEventListener('mouseup', (event) => clickOutsideHandler(event));
    return function cleanup() {
      removeScrollListeners();
      document.removeEventListener('mouseup', (event) => clickOutsideHandler(event));
      window.removeEventListener('resize', move);
    };
  }, [active, target]);

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
        tabIndex={0}
        role='dialog'
      >
        {content}
      </StyledDrop>,
      document.body,
    );
  }
  return null;
};
export default Popover;
