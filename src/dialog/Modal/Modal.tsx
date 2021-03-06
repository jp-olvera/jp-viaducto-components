import React, { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import StyledModal from './StyledModal';
import { ConfigContext } from '../../providers';
import { Overlay } from '../../cells/Overlay';

/** Modal component */
export interface Modal extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies if the modal is gonna be visible at first */
  active?: boolean;
  /** Specifies if the modal could be closed when clicking outside */
  allowClickOutside?: boolean;
  /** Background color for the modal content */
  backgroundColor?: string;
  /** Child to be render inside modal */
  children?: any;
  /** Elevation indicator for shadows data */
  elevation?: 0 | 1 | 2 | 3;
  /** Light indicator for shadows data */
  elevationDirection?:
    | 'radial'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'topRight'
    | 'topLeft'
    | 'bottomRight'
    | 'bottomLeft';
  /** function to call to close the modal */
  handleActive?: Function;
  /** Background color for the overlay */
  overlayColor?: string;
  /** Set border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** z-index value for the overlay, it defaults to 9999 */
  zIndex?: number;
  /** HTML onClick function */
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  /** Modal's size set in the configuration file */
  size?: 'sm' | 'md' | 'lg' | 'full' | string;
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
 * @param {'sm' | 'md' | 'lg' | 'full' | string} size Modal's size set in the configuration file
 */
const Modal = ({
  active = false,
  allowClickOutside = true,
  backgroundColor,
  children,
  elevation = 1,
  elevationDirection = 'radial',
  handleActive = () => {},
  overlayColor = 'rgba(255,255,255,0.5)',
  radius = 'md',
  zIndex = 9999,
  size = 'md',
  onClick,
  ...rest
}: Modal) => {
  const { configuration } = useContext(ConfigContext);
  const modalRef = useRef<HTMLElement>(null);
  const [isClosing, setisClosing] = useState(false);
  const [keepActive, setKeepActive] = useState(false);

  let timer;
  const handleClose = (ev) => {
    if (ev) ev?.stopPropagation();

    if (!allowClickOutside) {
      return;
    }
    if (active) {
      setKeepActive(true);
      setisClosing(true);
      timer = setTimeout(() => {
        setisClosing(false);
        setKeepActive(false);
        handleActive();
      }, 230);
    }
  };

  useEffect(() => {
    if (active && modalRef.current) {
      modalRef.current.focus();
      setisClosing(false);
      setKeepActive(true);
    } else if (!active && keepActive) {
      setisClosing(true);
      setKeepActive(true);
      timer = setTimeout(() => {
        setisClosing(false);
        setKeepActive(false);
        handleClose(null);
      }, 230);
    }
  }, [active, modalRef]);

  useEffect(
    () => () => {
      if (timer) {
        clearTimeout(timer);
      }
    },
    []
  );

  return (active || keepActive) && document
    ? createPortal(
        <Overlay
          data-testid='overlay'
          onClick={handleClose}
          onEsc={handleClose}
          tabIndex={0}
          role='presentation'
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
            zIndex,
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
            isClosing={isClosing}
            size={size}
            onClick={(ev: any) => {
              // Yep! this is needed
              ev.stopPropagation();
              if (onClick) onClick(ev);
            }}
            {...rest}
          >
            {children}
          </StyledModal>
        </Overlay>,
        document.body
      )
    : null;
};

export default Modal;
