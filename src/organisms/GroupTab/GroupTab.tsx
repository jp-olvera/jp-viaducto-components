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
  /** Triggers a function changing the tab */
  onTabChange?: Function;
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
 * @param {string} onTabChange Triggers a function changing the tab
 */

const GroupTab = ({
  children,
  tabType = 'tab',
  horizontalSpacing = 'md',
  verticalSpacing = 'sm',
  fontSize = 'md',
  position = 'bottom',
  transition = 'ease',
  spacing = 'none',
  onTabChange,
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
    onload(ref, getPosition / 100, configuration, spacing, setPlace, setWidth);
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
          onClick: (e: any) => {
            /* istanbul ignore else */
            if (onTabChange) onTabChange(e);
            translate(index);
          },
        }))}
      </div>
      <div
        className='line'
        style={{
          marginLeft:
            getPosition === 0
              ? 0
              : `calc(${configuration.spacing[spacing]} + ${place}rem)`,
          width: `${getWidth}rem` || 0,
        }}
      />
    </StyledGroupTab>
  );
};

export default GroupTab;

export const onload = (
  ref: React.RefObject<HTMLDivElement>,
  getPosition: number,
  configuration: ConfigProps,
  spacing: string,
  setPlace: Function,
  setWidth: Function,
) => {
  if (ref && ref.current) {
    if (getPosition === 0) {
      setPlace(0);
    } else {
      let counter: number = 0;
      for (let i = 0; i < getPosition; i++) {
        if (i === 0) {
          counter += ref.current.children[0].children[i].clientWidth / 16;
        } else {
          counter += ref.current.children[0].children[i].clientWidth / 16;
          counter += parseFloat(
            configuration.spacing[spacing].match(
              /[-]{0,1}[\d]*[.]{0,1}[\d]+/g,
            )[0],
          );
        }
      }
      setPlace(counter);
    }
    setWidth(ref.current.children[0].children[getPosition].clientWidth / 16);
  }
};
