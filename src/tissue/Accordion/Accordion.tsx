import React, { useContext } from 'react';
import StyledAccordion from './StyledAccordion';
import { ConfigContext } from '../../providers';

/** Accordion component */
interface AccordionInterface {
  /** Children components for the accordion */
  children?: React.ReactElement[];
  paddingX?: string;
  /** Padding in Y */
  paddingY?: string;
  /** Overrides transitionTimingFunction */
  transition?: string;
}

/**
 * Accordion component
 * @param {React.ReactElement} children Children components for the accordion
 * @param {String} paddingX Padding in X
 * @param {String} paddingY Padding in Y
 * @param {String} transition Overrides transitionTimingFunction
 */

const Accordion = ({
  children,
  paddingX = 'sm',
  paddingY = 'sm',
  transition = 'linear',
  ...rest
}: AccordionInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const px = configuration.spacing[paddingX];
  const py = configuration.spacing[paddingY];

  return (
    <StyledAccordion {...rest}>
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
