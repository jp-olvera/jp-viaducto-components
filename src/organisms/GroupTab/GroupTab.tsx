import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { ConfigProps } from 'ballena-types';
import { StyledGroupTab } from './StyledGroupTab';

import { ConfigContext } from '../../providers';

/** GroupTab component */
interface GTI {
  /** Tab component */
  children: any;
  /** Set the color variant (type definition colors) for the tabs */
  tabType?: string;
  /** Set the horizontal spacing taking the tab content as reference */
  horizontalSpacing?: string;
  /** Set the horizontal spacing taking the tab content as reference */
  verticalSpacing?: string;
  /** Set the spacing between tabs */
  spacing?: string;
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
 * @param {string} tabType Set the color variant (type definition colors) for the tabs
 * @param {string} horizontalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} verticalSpacing Set the horizontal spacing taking the tab content as reference
 * @param {string} fontSize Set the font size
 * @param {string} position Set the line in position selected
 * @param {string} transition Overrides the transitionTimingFunction
 */

const GroupTab = ({
  children,
  tabType = 'tab',
  horizontalSpacing = 'md',
  verticalSpacing = 'sm',
  fontSize = 'md',
  position = 'bottom',
  transition,
  spacing = 'none',
  ...rest
}: GTI & React.HTMLAttributes<HTMLDivElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [getPosition, setPosition] = useState<number>(0);
  const [getWidth, setWidth] = useState<number>(0);
  const [place, setPlace] = useState<number>(0);
  const nodes = React.Children.toArray(children).filter((child) => React.isValidElement(child));
  const ref = useRef<HTMLDivElement>(null);
  const translate = (index: number) => {
    setPosition(index * 100);
  };
  const pos = position === 'top' ? 'top' : 'bottom';
  useEffect(() => {
    onload(ref, getPosition, spacing, configuration, setPlace, setWidth);
  }, [getPosition, spacing, horizontalSpacing]);
  return (
    <StyledGroupTab
      horizontalSpacing={horizontalSpacing}
      verticalSpacing={verticalSpacing}
      configuration={configuration}
      count={nodes.length}
      transition={transition}
      tabType={tabType}
      position={position}
      spacing={spacing}
      ref={ref}
      {...rest}
    >
      <div className='tabs'>
        {React.Children.toArray(children).map((child: any, index: number) => React.cloneElement(child, {
          horizontalSpacing,
          verticalSpacing,
          lineWidth: '0',
          fontSize,
          position: pos,
          tabType,
          index,
          active: index === getPosition / 100,
          onClick: () => translate(index),
        }))}
      </div>
      <div
        className='line'
        style={{
          marginLeft: `${place}rem`,
          width: getWidth || 0,
        }}
      />
    </StyledGroupTab>
  );
};

export default GroupTab;

export const onload = (
  ref: any,
  getPosition: number,
  spacing: string,
  configuration: ConfigProps,
  setPlace: Function,
  setWidth: Function,
) => {
  if (ref && ref.current) {
    if (getPosition === 0) {
      setPlace(0);
    } else {
      let counter: number = 0;
      for (let i = 0; i < getPosition / 100; i++) {
        const remValue = parseFloat(
          configuration.spacing[spacing].split('rem')[0],
        );
        counter
          += ref.current.children[0].children[i].clientWidth / 16 + remValue;
      }
      setPlace(counter);
    }
    setWidth(ref.current.children[0].children[getPosition / 100].clientWidth);
  }
};
