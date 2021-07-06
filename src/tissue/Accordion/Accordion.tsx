import React, { useState, useEffect, useContext } from 'react';
import StyledAccordion from './StyledAccordion';
import { ConfigContext } from '../../providers';

/**
 * Accordion component
 * @param {React.ReactElement} children Children components for the accordion
 * @param {Number} defaultIndex Index to set open the accordion item
 * @param {Boolean} expandMultiple Accept multiple accordion items open at the same time
 * @param {String} paddingX Padding in X
 * @param {String} paddingY Padding in Y
 */
interface AccordionInterface {
  children?: React.ReactElement[];
  defaultIndex?: number;
  expandMultiple?: boolean;
  paddingX?: string;
  paddingY?: string;
  transition?: string;
}

const Accordion = ({
  children,
  defaultIndex = -1,
  expandMultiple = false,
  paddingX = 'sm',
  paddingY = 'sm',
  transition = 'linear',
}: AccordionInterface) => {
  const { configuration } = useContext(ConfigContext);
  const px = configuration.spacing[paddingX] || configuration.spacing.md;
  const py = configuration.spacing[paddingY] || configuration.spacing.md;

  const [expanded, setExpanded] = useState(
    new Set<number>([defaultIndex]),
  );

  useEffect(() => {
    setExpanded(new Set([defaultIndex]));
  }, [defaultIndex]);

  const handleClick = (index: number) => {
    /* istanbul ignore else */
    if (expandMultiple) {
      /* istanbul ignore if */
      if (expanded.has(index)) {
        expanded.delete(index);
      } else {
        expanded.add(index);
      }
      setExpanded(new Set(expanded));
    } else {
      setExpanded(new Set([expanded.has(index) ? -1 : index]));
    }
  };

  return (
    <StyledAccordion>
      {React.Children.map(children, (child, i) => {
        /* istanbul ignore if */
        if (!child) {
          return null;
        }
        return React.cloneElement(child, {
          expanded: expanded.has(i),
          id: `accordion-item-${i}`,
          index: i,
          onClick: handleClick,
          paddingX: px,
          paddingY: py,
          transition,
        });
      })}
    </StyledAccordion>
  );
};

export default Accordion;
