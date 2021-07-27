import React, { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import StyledModal from './StyledModal';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';

/** Modal component */
interface ModalProps {
  /** Specifies if the modal is gonna be visible at first */
  active?: boolean;
  /** Specifies if the modal could be closed when clicking outside */
  allowClickOutside?: boolean;
  /** Background color for the modal content */
  backgroundColor?: string;
  /** Child to be render inside modal */
  children?: any;
  /** The elevation level it should take, one of 1/2/3 */
  elevation?: number;
  /** The elevation direction, if '' direction goes everywhere */
  elevationDirection?: string;
  /** function to call to close the modal */
  handleActive?: Function;
  /** Background color for the overlay */
  overlayColor?: string;
  /** set the border radius */
  radius?: string;
  /** z-index value, it defaults to 1 */
  zIndex?: number;
}

/**
 * Modal component
 * @param {boolean} active Specifies if the modal is gonna be visible at first
 * @param {boolean} allowClickOutside Specifies if the modal could be closed when clicking outside
 * @param {string} backgroundColor Background color for the modal content
 * @param {any} children Child to be render inside modal
 * @param {number} elevation The elevation level it should take, one of 1/2/3
 * @param {string} elevationDirection The elevation direction, if '' direction goes everywhere
 * @param {Function} handleActive function to call to close the modal
 * @param {string} overlayColor Background color for the overlay
 * @param {string} radius set the border radius
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
  zIndex = 1,
  ...rest
}: ModalProps & React.HTMLAttributes<HTMLDivElement>) => {
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
          zIndex: 9999,
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
          zIndex={zIndex}
          {...rest}
        >
          {children}
        </StyledModal>
      </Overlay>,
      document.body,
    )
    : null;
};

export default Modal;
