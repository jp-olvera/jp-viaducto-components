import React, {
  useRef, useEffect, useContext, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { findScrollParents, ownerDocument } from '../../utils/scroll';
import { StyledDrop } from './StyledDrop';
import { ConfigContext } from '../../providers';

interface PopoverProps {
  /** Indicates if the popover shoulb be visible */
  active?: boolean;
  /** Any valid React element to put inside the box */
  content: React.ReactNode;
  /** Elevation level */
  elevation?: number;
  /** Elevation direction */
  elevationDirection?: string;
  /** Function to close the popover when clicking outside */
  handleClose: () => void;
  /** Position to put the popover according to the activator, top, bottom(deafult), right or left */
  position?: string;
  /** Radius size, defaults to 'md' */
  radius?: string;
  /** A ref pointing to the activator */
  target: React.RefObject<HTMLElement> | any;
  /** z-index value for the overlay, it defaults to 9999 */
  zIndex?: number;
}

/** Popover component attached to an activator, like a button */
const Popover = ({
  active = false,
  content,
  elevation = 1,
  elevationDirection = '',
  handleClose,
  position = 'bottom',
  target,
  radius = 'sm',
  zIndex = 9999,
  ...rest
}: PopoverProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const dropRef = useRef<HTMLDivElement>(null);
  const [isClosing, setisClosing] = useState(false);
  let timer;
  useEffect(() => {
    setisClosing(false);
    if (active && dropRef.current) {
      dropRef.current.focus();
    }
  }, [active]);

  const move = () => {
    if (dropRef.current && target.current) {
      const windowWidth = document.body.clientWidth;
      const windowHeight = window.innerHeight;
      const tr = target.current.getBoundingClientRect();
      const targetRect = {
        left: tr.left - 5,
        top: tr.top - 5,
        bottom: tr.bottom + 5,
        right: tr.right + 5,
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
        } else if (
          position === 'right'
          && windowWidth - targetRect.right >= dropW
        ) {
          // a la derecha y sí hay espacio
          left = targetRect.right;
        } else if (dropR > windowWidth) {
          // el drop se sale a la derecha
          left = targetRect.right - dropW - 5;
        } else {
          // el drop no se sale a la derecha
          left = targetRect.left + 5;
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
      } else if (
        position === 'bottom'
        && windowHeight - targetRect.bottom > dropH
      ) {
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

  useEffect(() => {
    if (dropRef.current) {
      dropRef.current.focus();
    }
  }, [dropRef, active]);

  useEffect(() => {
    move();
    const addScrollListeners = () => {
      scrollParents = findScrollParents(target.current);
      scrollParents.forEach((scrollParent) => scrollParent.addEventListener('scroll', move));
      const thisDocument = ownerDocument(target.current);
      // thisDocument.addEventListener('mouseup', clickOutsideHandler);
      thisDocument.addEventListener('resize', move);
    };
    let scrollParents: (Element | Document)[] = [];
    const removeScrollListeners = () => {
      scrollParents.forEach((scrollParent) => scrollParent.removeEventListener('scroll', move));
      scrollParents = [];
      const thisDocument = ownerDocument(target.current);
      thisDocument.removeEventListener('resize', move);
    };

    if (active && target.current && dropRef.current) {
      addScrollListeners();
    }
    return function cleanup() {
      removeScrollListeners();
      clearTimeout(timer);
    };
  }, [active, target, target.current]);

  const closeHandler = () => {
    setisClosing(true);
    timer = setTimeout(() => {
      setisClosing(false);
      handleClose();
    }, 230);
  };

  if (active && target && target.current) {
    return createPortal(
      <div
        data-testid='overlay'
        style={{ position: 'fixed', inset: 0, zIndex }}
        role='presentation'
        onClick={closeHandler}
      >
        <StyledDrop
          configuration={configuration}
          elevation={elevation}
          elevationDirection={elevationDirection}
          isClosing={isClosing}
          radius={radius}
          ref={dropRef}
          role='dialog'
          style={{
            position: 'fixed',
          }}
          tabIndex={0}
          onClick={(ev: any) => {
            // Yep! this is needed
            ev.stopPropagation();
          }}
          {...rest}
        >
          {content}
        </StyledDrop>
      </div>,
      document.body,
    );
  }
  return null;
};

export default Popover;
