import React, { useContext, useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { TooltipContainer } from './StyledTooltip';
import { ConfigContext } from '../../providers/ConfigProvider';

/** Tooltip component */
export interface Tooltip extends React.HTMLAttributes<HTMLDivElement> {
  /** Child component */
  children: any;
  /** Color of the background */
  backgroundColor?: string;
  /** Font family */
  family?: string;
  /** Text in the tooltip */
  label?: string;
  /** Set the position of the tooltip */
  position?: 'top' | 'right' | 'left' | 'bottom';
  /** Text color */
  color?: string;
}
/**
 * Tooltip component
 * @param {any} children Child component
 * @param {string} color Color of the background
 * @param {string} family Font family
 * @param {string} label Text in the tooltip
 * @param {string} position Set the position of the tooltip
 * @param {string} textColor Text color
 */

const Tooltip = ({
  children,
  backgroundColor = '#060606',
  color = 'white',
  family,
  label,
  position = 'right',
}: Tooltip) => {
  const { configuration } = useContext(ConfigContext);
  const ref = useRef<HTMLDivElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const handleMouseEnter = () => {
    setShow(true);
  };

  const getDifferenceToCenter = (popRectAtt: number, trRectAtt: number) => {
    let p = 0;
    p = popRectAtt - trRectAtt;
    p /= 2;
    return p;
  };

  const handleMouseLeave = (ev) => {
    /* istanbul ignore if */
    if (popRef.current && ref.current) {
      if (popRef.current.contains(ev.target) || ref.current.contains(ev.target)) {
        return;
      }
      setShow(false);
    }
  };

  useEffect(() => {
    if (show && popRef.current && document) {
      document.addEventListener('mousemove', handleMouseLeave);
    } else {
      document.removeEventListener('mousemove', handleMouseLeave);
    }
    return function cleanup() {
      document.removeEventListener('mousemove', handleMouseLeave);
    };
  }, [show, popRef]);
  useEffect(() => {
    if (show && ref && ref.current && popRef && popRef.current) {
      const tr = ref.current.getBoundingClientRect();
      // console.log(tr);
      const tooltip = popRef.current.getBoundingClientRect();
      // console.log(tooltip);
      switch (position) {
        case 'top':
          setCoords({
            left: tr.left - getDifferenceToCenter(tooltip.width, tr.width),
            top: tr.top - tooltip.height - 8,
          });
          break;
        case 'left':
          setCoords({
            left: tr.left - tooltip.width - 8,
            top: tr.top - getDifferenceToCenter(tooltip.height, tr.height),
          });
          break;
        case 'bottom':
          setCoords({
            left: tr.left - getDifferenceToCenter(tooltip.width, tr.width),
            top: tr.bottom + 8,
          });
          break;
        default:
          // right
          setCoords({
            left: tr.right + 8,
            top: tr.top - getDifferenceToCenter(tooltip.height, tr.height),
          });
          break;
      }
    }
  }, [show, ref, popRef]);
  return (
    <div>
      <div onMouseEnter={handleMouseEnter} role='presentation' ref={ref} data-testid='tooltip'>
        {children}
      </div>
      {ref.current && show && document
        ? createPortal(
            <div
              ref={popRef}
              className='ballena-tooltip-content'
              style={{
                position: 'fixed',
                top: `${coords.top}px`,
                left: `${coords.left}px`,
              }}
            >
              <TooltipContainer
                configuration={configuration}
                position={position}
                backgroundColor={backgroundColor}
                color={color}
                family={family}
              >
                {label}
              </TooltipContainer>
            </div>,
            document.body
          )
        : null}
    </div>
  );
};

export default Tooltip;
