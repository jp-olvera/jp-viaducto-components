import React, { useContext } from 'react';
import { StyledAccordionItem } from './StyledAccordion';
import { Title } from '../../cells';

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
}: AccordionItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <StyledAccordionItem
      paddingX={paddingX}
      paddingY={paddingY}
      expanded={expanded}
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
      <section
        id={`accordion-body-${id}`}
        className={`${expanded ? 'expanded' : 'collapsed'}`}
      >
        {children}
      </section>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
