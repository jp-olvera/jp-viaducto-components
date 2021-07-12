import React, { useContext } from 'react';
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
  paddingX?: string;
  paddingY?: string;
  transition?: string;
}

const Accordion = ({
  children,
  paddingX = 'sm',
  paddingY = 'sm',
  transition = 'linear',
}: AccordionInterface) => {
  const { configuration } = useContext(ConfigContext);
  const px = configuration.spacing[paddingX] || configuration.spacing.md;
  const py = configuration.spacing[paddingY] || configuration.spacing.md;

  return (
    <StyledAccordion>
      {React.Children.map(children, (child, i) => {
        /* istanbul ignore if */
        if (!child) {
          return null;
        }
        return React.cloneElement(child, {
          id: `accordion-item-${i}`,
          index: i,
          paddingX: px,
          paddingY: py,
          transition,
        });
      })}
    </StyledAccordion>
  );
};

export default Accordion;
