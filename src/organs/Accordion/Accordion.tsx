import React, { useContext } from 'react';
import StyledAccordion from './StyledAccordion';
import { ConfigContext } from '../../providers';

/** Accordion component */
interface AccordionInterface {
  /** Children components for the accordion */
  children?: React.ReactElement[];
  /** Padding in X */
  paddingX?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
  /** Padding in Y */
  paddingY?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl';
  /** Overrides transitionTimingFunction */
  transition?: string;
  /** Expand multiple items */
  expandMultiple?: boolean;
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
  expandMultiple,
  ...rest
}: AccordionInterface & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const px = configuration.spacing[paddingX];
  const py = configuration.spacing[paddingY];

  return (
    <StyledAccordion configuration={configuration} {...rest}>
      {React.Children.map(children, (child: any, i) => {
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
