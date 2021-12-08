import React, { useContext, useEffect, useState, createContext } from 'react';
import { ConfigContext } from '../../providers';
import StyledAccordion from './StyledAccordion';

export interface AccordionValuesProps {
  openIds: { [key: number]: boolean };
  expandMultiple: boolean;
}

export const AccordionContext = createContext<AccordionValuesProps>({
  expandMultiple: false,
  openIds: {},
});

/** Accordion component */
export interface Accordion extends React.HTMLAttributes<HTMLDivElement> {
  /** Children components for the accordion */
  children?: React.ReactElement[];
  /** Padding in X */
  paddingX?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  /** Padding in Y */
  paddingY?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
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
 * @param {boolean} expandMultiple Expand multiple items
 */

const Accordion = ({
  children,
  paddingX = 'sm',
  paddingY = 'sm',
  transition = 'linear',
  expandMultiple = false,
  ...rest
}: Accordion) => {
  const { configuration } = useContext(ConfigContext);
  const px = configuration.spacing[paddingX];
  const py = configuration.spacing[paddingY];
  const childs = Object.fromEntries(new Map(children?.map((_item, index) => [index, false])));
  // console.log(childs);

  const [openIds, setOpenIds] = useState(childs || {});

  const handleOpen = (id: number) => {
    let isOpen = false;
    if (openIds[id] !== undefined) {
      isOpen = openIds[id];
    }
    if (expandMultiple) {
      setOpenIds((d) => ({ ...d, [id]: !isOpen }));
    } else {
      let newState = {};
      for (const key of Object.keys(openIds)) {
        newState[key] = false;
      }
      newState[id] = !isOpen;
      setOpenIds(() => newState);
    }
  };

  return (
    <StyledAccordion configuration={configuration} {...rest}>
      <AccordionContext.Provider value={{ expandMultiple, openIds }}>
        {React.Children.map<React.ReactNode, React.ReactNode>(children, (child, i) => {
          /* istanbul ignore if */
          if (!child) {
            return null;
          }

          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              id: `accordion-item-${i}`,
              paddingX: px,
              paddingY: py,
              transition,
              handleOpen,
            });
          }
          return null;
        })}
      </AccordionContext.Provider>
    </StyledAccordion>
  );
};

export default Accordion;
