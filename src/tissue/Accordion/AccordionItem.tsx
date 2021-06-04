import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
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
  transition: string;
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
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    /* istanbul ignore else */
    if (ref.current) {
      if (!expanded) {
        setHeight('0px');
        ref.current.classList.add('noPadding');
      } else {
        setHeight(`${ref.current.scrollHeight}px`);
        ref.current.classList.remove('noPadding');
      }
    }
  }, [expanded]);

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
          {typeof title === 'string' ? <Title level='6'>{title}</Title> : title}
        </span>
      </button>
      <section
        ref={ref}
        id={`accordion-body-${id}`}
        className='section'
        style={{
          height,
        }}
        onTransitionEnd={() => updateAfterTransition(expanded, setHeight)}
      >
        {children}
      </section>
    </StyledAccordionItem>
  );
};

export default AccordionItem;

export const updateAfterTransition = (
  expanded: boolean,
  setHeight: Function,
) => {
  /* istanbul ignore else */
  if (expanded) {
    setHeight('auto');
  }
};
