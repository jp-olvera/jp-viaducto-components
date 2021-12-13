import React, { useRef, useEffect, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { findScrollParents, ownerDocument } from '../../utils/scroll';
import { StyledDrop } from './StyledDrop';
import { ConfigContext } from '../../providers';
import { Keyboard } from '../../cells';

export interface Popover extends React.HTMLAttributes<HTMLDivElement> {
  /** Indicates if the popover shoulb be visible */
  active?: boolean;
  /** Any valid React element to put inside the box */
  content: React.ReactNode;
  /** Elevation level */
  elevation?: 0 | 1 | 2 | 3;
  /** Elevation direction */
  elevationDirection?:
    | ''
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft';
  /** Function to close the popover when clicking outside */
  handleActive: () => void;
  /** Position to put the popover according to the activator, top, bottom(deafult), right or left */
  position?: 'top' | 'bottom' | 'right' | 'left';
  /** Radius size, defaults to 'md' */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** A ref pointing to the activator */
  target: React.RefObject<HTMLElement> | any;
  /** z-index value for the overlay, it defaults to 9999 */
  zIndex?: number;
  onBackspace?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onComma?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onEnter?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onLeft?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onRight?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onShift?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onSpace?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onTab?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onUp?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
}

/** Popover component attached to an activator, like a button */
const Popover = ({
  active = false,
  content,
  elevation = 1,
  elevationDirection = '',
  handleActive,
  position = 'bottom',
  target,
  radius = 'sm',
  zIndex = 9999,
  onBackspace,
  onComma,
  onDown,
  onEnter,
  onKeyDown,
  onLeft,
  onRight,
  onShift,
  onSpace,
  onTab,
  onUp,
  ...rest
}: Popover) => {
  const { configuration } = useContext(ConfigContext);
  const dropRef = useRef<HTMLDivElement>(null);
  const [isClosing, setisClosing] = useState(false);
  let timer: number;
  useEffect(() => {
    setisClosing(false);
    if (active && dropRef.current) {
      dropRef.current.focus();
    }
  }, [active]);

  const move = () => {
    if (dropRef.current && target.current && window && document) {
      const windowWidth = document.body.clientWidth;
      const windowHeight = window.innerHeight;
      const tr: DOMRect = target.current.getBoundingClientRect();
      const targetRect = {
        left: tr.left - 5,
        top: tr.top - 5,
        bottom: tr.bottom + 5,
        right: tr.right + 5,
      };
      dropRef.current.style.minWidth = tr.width + 'px';
      const dropW = dropRef.current?.offsetWidth || 0; // drop width
      const dropH = dropRef.current?.offsetHeight || 0; // drop height
      const tw = target.current?.offsetWidth; // target width
      const diff = Math.abs((dropW - tw) / 2);
      const dropR = targetRect.right + diff; // estimación del right del drop
      const dropL = targetRect.left - diff; // estimación del left del drop
      let { left } = targetRect;

      // ajustar a los lados
      if (windowWidth > dropW) {
        // la ventana es mayor que el drop
        if (position === 'left' && targetRect.left >= dropW) {
          // a la izquierda y sí hay espacio
          left = targetRect.left - dropW;
        } else if (position === 'right' && windowWidth - targetRect.right >= dropW) {
          // a la derecha y sí hay espacio
          left = targetRect.right;
        } else if (dropR > windowWidth) {
          // el drop se saldría a la derecha o izquierda
          left = windowWidth - dropW - 5;
        } else if (dropL < 0) {
          left = 0;
        } else {
          // el drop no se saldría a la derecha
          if (dropW > tw) {
            left = targetRect.left - diff + 5;
          } else {
            left = targetRect.left + 5;
          }
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
          top = targetRect.top + 5;
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          top = targetRect.bottom - dropH - 5;
        } else {
          // alineado al centro
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
        }
      } else if (position === 'left' && targetRect.left > dropW) {
        if (targetRect.top < dropH) {
          // alineado al top del activator
          top = targetRect.top + 5;
        } else if (windowHeight - targetRect.bottom < dropH) {
          // alineado al bottom del activator
          top = targetRect.bottom - dropH - 5;
        } else {
          top = targetRect.top - dropH / 2 + target.current.offsetHeight / 2;
        }
      } else if (position === 'top' && targetRect.top >= dropH) {
        // es top y cabe arriba
        top = targetRect.top - dropH;
      } else if (position === 'bottom' && windowHeight - targetRect.bottom > dropH) {
        // es bottom y abajo cabe
        top = targetRect.bottom;
      } else if (targetRect.top >= dropH) {
        // se pone arriba
        top = targetRect.top - dropH;
      } else {
        top = targetRect.bottom;
      }
      dropRef.current.style.top = `${top}px`;
      dropRef.current.style.left = `${left}px`;
    }
  };

  const closeHandler = (ev) => {
    if (ev) ev?.stopPropagation();

    setisClosing(true);
    timer = setTimeout(() => {
      setisClosing(false);
      handleActive();
    }, 230);
  };

  const clickOutsideHandler = (event) => {
    if (dropRef !== null && dropRef.current) {
      if (dropRef.current.contains(event.target) || target.current.contains(event.target)) {
        return;
      }
      closeHandler(event);
    }
  };
  useEffect(() => {
    move();
    // const handleEsc = (ev) => {
    //   if (ev.code === 'Escape') closeHandler();
    // };
    const addListeners = () => {
      if (window) {
        scrollParents = findScrollParents(target.current);
        scrollParents.forEach((scrollParent) => scrollParent.addEventListener('scroll', move));
        const thisDocument = ownerDocument(target.current);
        thisDocument.addEventListener('mouseup', clickOutsideHandler);
        // thisDocument.addEventListener('mouseup', clickOutsideHandler);
        window.addEventListener('resize', move);
        // window.addEventListener('keydown', handleEsc);
      }
    };
    let scrollParents: (Element | Document)[] = [];
    const removeListeners = () => {
      if (window) {
        scrollParents.forEach((scrollParent) => scrollParent.removeEventListener('scroll', move));
        scrollParents = [];
        const thisDocument = ownerDocument(target.current);
        thisDocument.removeEventListener('mouseup', clickOutsideHandler);
        window.removeEventListener('resize', move);
        // window.removeEventListener('keydown', handleEsc);
      }
    };

    if (active && target.current && dropRef.current) {
      addListeners();
    }
    return function cleanup() {
      removeListeners();
      clearTimeout(timer);
    };
  }, [active, target, target.current]);

  if (active && target && target.current) {
    return createPortal(
      <Keyboard
        onEsc={closeHandler}
        onBackspace={onBackspace}
        onComma={onComma}
        onDown={onDown}
        onEnter={onEnter}
        onKeyDown={onKeyDown}
        onLeft={onLeft}
        onRight={onRight}
        onShift={onShift}
        onSpace={onSpace}
        onTab={onTab}
        onUp={onUp}
      >
        <StyledDrop
          configuration={configuration}
          elevation={elevation}
          elevationDirection={elevationDirection}
          isClosing={isClosing}
          radius={radius}
          ref={dropRef}
          role='dialog'
          zIndex={zIndex}
          tabIndex={0}
          {...rest}
        >
          {content}
        </StyledDrop>
      </Keyboard>,
      document.body
    );
  }
  return null;
};

export default Popover;
