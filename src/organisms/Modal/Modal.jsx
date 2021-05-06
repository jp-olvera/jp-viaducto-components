import React, { useContext, useState, useEffect, useRef } from 'react';
import StyledModal from './StyledModal';
import { Title } from '../../cells/Title';
import { Button } from '../../cells/Button';
import { BareButton } from '../../cells/BareButton';
import { ConfigContext } from '../../providers';
import { Close } from 'react-ikonate';

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
 * @returns
 */
const Modal = ({
  title = '',
  onReject = null,
  onAccept = null,
  maxWidth = '540px',
  breakpoint = '320px',
  active = false,
  maxHeight = '700px',
  overlayColor = 'rgba(255,255,255,0.5)',
  backgroundColor = 'white',
  headComponent = null,
  acceptDisabled = false,
  rejectDisabled = false,
  allowClickOutside = true,
  children,
}) => {
  const { configuration } = useContext(ConfigContext);
  const modalRef = useRef();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const clickOutsideHandler = (event) => {
    if (modalRef.current.contains(event.target)) {
      return;
    }
    setIsActive(false);
  };
  useEffect(() => {
    if (allowClickOutside) {
      if (isActive) {
        document.addEventListener('click', clickOutsideHandler);
      } else {
        document.removeEventListener('click', clickOutsideHandler);
      }
    }
    return function cleanup() {
      document.removeEventListener('click', clickOutsideHandler);
    };
  }, [isActive]);

  const handleReject = () => {
    onReject();
    setIsActive(false);
  };
  const handleAccept = () => {
    onAccept();
    setIsActive(false);
  };
  return (
    <div
      data-testid="overlay"
      style={{
        alignItems: 'center',
        backgroundColor: overlayColor,
        display: isActive ? 'flex' : 'none',
        height: '100%',
        justifyContent: 'center',
        left: '0',
        position: 'fixed',
        top: '0',
        width: '100%',
        overflowY: 'auto',
      }}
    >
      <StyledModal
        data-testid="modal"
        ref={modalRef}
        configuration={configuration}
        maxWidth={maxWidth}
        breakpoint={breakpoint}
        isActive={isActive}
        maxHeight={maxHeight}
        backgroundColor={backgroundColor}
      >
        <div
          className="modal-header"
          style={{
            flexDirection: headComponent !== null ? 'column-reverse' : 'row',
          }}
        >
          <div>
            <Title level="4" weight="500">
              {title}
            </Title>
          </div>
          {headComponent !== null ? (
            <div style={{ width: '100%' }}>{headComponent}</div>
          ) : null}
          <BareButton
            style={{ marginLeft: 'auto' }}
            onClick={() => {
              setIsActive(false);
            }}
          >
            <Close
              data-testid="close-button"
              stroke="#9EA0A5"
              border={2}
              width="18px"
            />
          </BareButton>
        </div>
        <div className="modal-content">{children}</div>
        {onReject === null && onAccept === null ? null : (
          <div className="modal-bottom" data-testid="controls">
            {onReject !== null && (
              <Button
                label="reject"
                data-testid="reject"
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
                  label="Create Event"
                  data-testid="accept"
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
    </div>
  );
};

export default Modal;
