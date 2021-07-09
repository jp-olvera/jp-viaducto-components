import React, { useContext, useState } from 'react';
import { StyledGroupTab } from './StyledGroupTab';

import { ConfigContext } from '../../providers';

/** GroupTab component */
interface GTI {
  /** Tab component */
  children: any;
  /** Set the color variant (type definition colors) for the tabs */
  type?: string;
  /** Set the horizontal spacing taking the tab content as reference */
  horizontalSpacing?: string;
  /** Set the horizontal spacing taking the tab content as reference */
  verticalSpacing?: string;
  /** Set the font size */
  fontSize?: string;
  /** Set the line in position selected */
  position?: string;
  /** Overrides the transitionTimingFunction */
  transition?: string;
}

/**
 * GroupTab component
 * @param {Tab} children Tab component
 * @param {string} type Set the color variant (type definition colors) for the tabs
 * @param {string} horizontalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} verticalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} fontSize Set the font size
 * @param {string} position Set the line in position selected
 * @param {string} transition Overrides the transitionTimingFunction
 */

const GroupTab = ({
  children,
  type = 'tab',
  horizontalSpacing = 'md',
  verticalSpacing = 'sm',
  fontSize = 'md',
  position = 'bottom',
  transition,
  ...rest
}: GTI & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [getPosition, setPosition] = useState(0);
  const nodes = React.Children.toArray(children).filter((child) => React.isValidElement(child));
  const translate = (index: number) => {
    setPosition(index * 100);
  };
  const pos = position === 'top' ? 'top' : 'bottom';
  return (
    <StyledGroupTab
      horizontalSpacing={horizontalSpacing}
      verticalSpacing={verticalSpacing}
      configuration={configuration}
      count={nodes.length}
      transition={transition}
      type={type}
      position={position}
      {...rest}
    >
      <div className='tabs'>
        {React.Children.toArray(children).map((child: any, index: number) => React.cloneElement(child, {
          horizontalSpacing,
          verticalSpacing,
          lineWidth: '0',
          fontSize,
          position: pos,
          type,
          index,
          active: index === getPosition / 100,
          onClick: () => translate(index),
        }))}
      </div>
      <div
        className='line'
        style={{ transform: `translateX(${getPosition}%)` }}
      />
    </StyledGroupTab>
  );
};

export default GroupTab;
