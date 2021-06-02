import React, { useState, useEffect, useContext } from 'react';
import StyledAccordion from './StyledAccordion';
import { ConfigContext } from '../../providers';

const Accordion = ({
  children,
  defaultIndex = -1,
  expandMultiple = false,
  paddingX = 'sm',
  paddingY = 'sm',
}) => {
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
    if (expandMultiple) {
      if (expanded.has(index)) {
        expanded.delete(index);
      } else {
        expanded.add(index);
      }
      setExpanded(new Set(expanded));
    } else if (!expanded.has(index)) {
      setExpanded(new Set([index]));
    }
  };

  return (
    <StyledAccordion>
      {React.Children.map(children, (child, i) => {
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
        });
      })}
    </StyledAccordion>
  );
};

export default Accordion;
