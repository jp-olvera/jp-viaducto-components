import React, { useRef, useEffect, useContext } from 'react';
import { StyledAccordionItem } from './StyledAccordion';
import { Title } from '../../cells';
import { ConfigContext } from '../../providers';

/**
 * Accordion Item component
 * @param {String} transition Overrides the transitionTimingFunction
 */

export type AccordionItemProps = {
  // no me borres, a lo mejor lo ocupo después
  children: React.ReactNode;
  expanded: boolean;
  id: string;
  index: number;
  onClick: (index: number) => void;
  title: string;
  paddingX: string;
  paddingY: string;
  transition: string | null;
};

const AccordionItem = ({
  children,
  expanded,
  id,
  index,
  onClick,
  title = '',
  paddingX,
  paddingY,
  transition,
}: AccordionItemProps) => {
  const { configuration } = useContext(ConfigContext);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    /* istanbul ignore else */
    if (!expanded) {
      setNewTransition();
      setZeroHeight();
    } else {
      resetTransition();
      setAutoHeight();
    }
  }, [expanded, ref]);

  const setZeroHeight = () => {
    /* istanbul ignore else */
    if (ref.current) {
      ref.current.style.height = '0px';
      ref.current.style.transform = 'scaleY(0)';
      ref.current.style.padding = '0px';
    }
  };
  const setAutoHeight = () => {
    /* istanbul ignore else */
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.padding = `${paddingY} ${paddingX}`;
      ref.current.style.transform = 'scaleY(1)';
    }
  };
  const resetTransition = () => {
    /* istanbul ignore else */
    if (ref.current) {
      ref.current.style.transition = `transform .2s
      ${transition || configuration.transitionTimingFunction} 20ms,
      padding 20ms
      ${transition || configuration.transitionTimingFunction}`;
      // console.log('reset to start');
    }
  };
  const setNewTransition = () => {
    /* istanbul ignore else */
    if (ref.current) {
      // console.log('set new');
      ref.current.style.transition = `transform .5s
      ${transition || configuration.transitionTimingFunction},
      padding 5s
      ${
  transition || configuration.transitionTimingFunction
} .5s, height 1s linear 2000`;
    }
  };
  const handleClick = () => {
    onClick(index);
  };
  return (
    <StyledAccordionItem
      paddingX={paddingX}
      paddingY={paddingY}
      expanded={expanded}
      transition={transition}
      configuration={configuration}
    >
      <button
        className='accordion-header'
        type='button'
        onClick={handleClick}
        id={`accordion-title-${id}`}
      >
        <span
          style={{
            overflow: 'hidden',
            textOverflow: 'text-elipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <Title level='6'>{title}</Title>
        </span>
      </button>
      <section ref={ref} id={`accordion-body-${id}`} className='section'>
        {children}
      </section>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
