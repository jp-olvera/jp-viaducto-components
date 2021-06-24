import React, { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Close } from 'react-ikonate';
import StyledModal from './StyledModal';
import { Title } from '../../cells/Title';
import { Button } from '../../cells/Button';
import { BareButton } from '../../cells/BareButton';
import { ConfigContext } from '../../providers';

interface ModalInterface {
  title?: string;
  onReject?: Function | null;
  onAccept?: Function | null;
  maxWidth?: string;
  breakpoint?: string;
  active?: boolean;
  handleActive?: Function;
  maxHeight?: string;
  overlayColor?: string;
  backgroundColor?: string;
  headComponent?: any;
  acceptDisabled?: boolean;
  rejectDisabled?: boolean;
  allowClickOutside?: boolean;
  elevation?: number;
  elevationDirection?: string;
  children?: any;
}

/**
 *
 * @param {string} title Modal title
 * @param {function} onReject reject function to call before the modal closes
 * @param {function} onAccept accept function to call before the modal closes
 * @param {string} width width the modal will take with afeter the display breakpoint specified is reached
 * @param {string} breakpoint display breakpoint where the modal will stop being 100% width
 * @param {boolean} active Specifies if the modal is gonna be visible at first
 * @param {string} maxheight the max height the modal can take
 * @param {string} overlayColor Background color for the overlay
 * @param {string} backgroundColor Background color for the modal content
 * @param {boolean} acceptDisabled Specifies if the accept button should be disabled
 * @param {boolean} rejectDisabled Specifies if the reject button should be disabled
 * @param {boolean} allowClickOutside Specifies if the modal could be closed when clicking outside
 * @returns
 */
const Modal = ({
  title = '',
  onReject = null,
  onAccept = null,
  maxWidth = '540px',
  breakpoint = '320px',
  active = false,
  handleActive = () => {},
  maxHeight = '700px',
  overlayColor = 'rgba(255,255,255,0.5)',
  backgroundColor = 'white',
  headComponent = null,
  acceptDisabled = false,
  rejectDisabled = false,
  allowClickOutside = true,
  elevation = 1,
  elevationDirection = '',
  children,
}: ModalInterface) => {
  const { configuration } = useContext(ConfigContext);
  const modalRef = useRef<HTMLElement>(null);

  const clickOutsideHandler = (event) => {
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
  }, [active]);

  const handleReject = () => {
    /* istanbul ignore else */
    if (onReject !== null) onReject();
    handleActive();
  };
  const handleAccept = () => {
    /* istanbul ignore else */
    if (onAccept !== null) onAccept();
    handleActive();
  };
  return active
    ? createPortal(
      <div
        data-testid='overlay'
        style={{
          alignItems: 'center',
          backgroundColor: overlayColor,
          display: active ? 'flex' : 'none',
          height: '100%',
          justifyContent: 'center',
          left: '0',
          position: 'fixed',
          top: '0',
          width: '100%',
          overflowY: 'auto',
          zIndex: 9999,
        }}
      >
        <StyledModal
          data-testid='modal'
          ref={modalRef}
          configuration={configuration}
          maxWidth={maxWidth}
          breakpoint={breakpoint}
          isActive={active}
          maxHeight={maxHeight}
          backgroundColor={backgroundColor}
          elevation={elevation}
          elevationDirection={elevationDirection}
          tabIndex={0}
        >
          <div
            className='modal-header'
            style={{
              flexDirection:
                  headComponent !== null ? 'column-reverse' : 'row',
            }}
          >
            <div>
              <Title level='4' weight='500'>
                {title}
              </Title>
            </div>
            {headComponent !== null ? (
              <div style={{ width: '100%' }}>{headComponent}</div>
            ) : null}
            <BareButton style={{ marginLeft: 'auto' }} onClick={handleActive}>
              <Close
                data-testid='close-button'
                stroke='#9EA0A5'
                strokeWidth={2}
                width='18px'
              />
            </BareButton>
          </div>
          <div className='modal-content'>{children}</div>
          {onReject === null && onAccept === null ? null : (
            <div className='modal-bottom' data-testid='controls'>
              {onReject !== null && (
              <Button
                label='reject'
                data-testid='reject'
                colors={{
                  default: '#F6F7F9',
                  click: '#D8DCE6',
                  active: '#D8DCE6',
                  hover: '#D8DCE6',
                  text: '#000',
                }}
                onClick={handleReject}
                disabled={rejectDisabled}
              />
              )}
              {onAccept !== null && (
              <div style={{ marginLeft: 'auto' }}>
                <Button
                  label='Create Event'
                  data-testid='accept'
                  colors={{
                    default: '#38B249',
                    click: '#38B249',
                    active: '#34AA44',
                    hover: '#34AA44',
                    text: 'white',
                  }}
                  onClick={handleAccept}
                  disabled={acceptDisabled}
                />
              </div>
              )}
            </div>
          )}
        </StyledModal>
      </div>,
      document.body,
    )
    : null;
};

export default Modal;
