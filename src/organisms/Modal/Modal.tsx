import React, { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import StyledModal from './StyledModal';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';

interface ModalProps {
  active?: boolean;
  handleActive?: Function;
  overlayColor?: string;
  backgroundColor?: string;
  allowClickOutside?: boolean;
  elevation?: number;
  elevationDirection?: string;
  children?: any;
  radius?: string;
}

/**
 *
 * @param {boolean} active Specifies if the modal is gonna be visible at first
 * @param {string} overlayColor Background color for the overlay
 * @param {string} backgroundColor Background color for the modal content
 * @param {boolean} allowClickOutside Specifies if the modal could be closed when clicking outside
 * @returns
 */
const Modal = ({
  active = false,
  allowClickOutside = true,
  backgroundColor = 'white',
  children,
  elevation = 1,
  elevationDirection = '',
  handleActive = () => {},
  overlayColor = 'rgba(255,255,255,0.5)',
  radius = 'md',
}: ModalProps) => {
  const { configuration } = useContext(ConfigContext);
  const modalRef = useRef<HTMLElement>(null);

  const clickOutsideHandler = (event: any) => {
    /* istanbul ignore else */
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleActive();
    }
  };

  useEffect(() => {
    if (allowClickOutside) {
      if (active) {
        document.addEventListener('mouseup', clickOutsideHandler);
      } else {
        document.removeEventListener('mouseup', clickOutsideHandler);
      }
    }
    if (active && modalRef.current) {
      modalRef.current.focus();
    }
    return function cleanup() {
      document.removeEventListener('mouseup', clickOutsideHandler);
    };
  }, [active, modalRef]);

  return active
    ? createPortal(
      <Overlay
        data-testid='overlay'
        style={{
          alignItems: 'center',
          backgroundColor: overlayColor,
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          left: '0',
          position: 'fixed',
          top: '0',
          width: '100%',
          zIndex: 999,
        }}
      >
        <StyledModal
          data-testid='modal'
          configuration={configuration}
          isActive={active}
          backgroundColor={backgroundColor}
          elevation={elevation}
          elevationDirection={elevationDirection}
          tabIndex={0}
          ref={modalRef}
          radius={radius}
        >
          {children}
        </StyledModal>
      </Overlay>,
      document.body,
    )
    : null;
};

export default Modal;
