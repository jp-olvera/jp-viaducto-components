import React, { useContext, useEffect, useRef, useState } from 'react';
import { ConfigProps } from 'frontera-types';
import { StyledGroupTab } from './StyledGroupTab';

import { ConfigContext } from '../../providers';

/** GroupTab component */
export interface GroupTab extends React.HTMLAttributes<HTMLDivElement> {
  /** Tab component */
  children: any;
  /** Set the color variant (type definition colors) for the tabs */
  tabType?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'tab';
  /** Set the horizontal spacing taking the tab content as reference */
  horizontalSpacing?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** Set the horizontal spacing taking the tab content as reference */
  verticalSpacing?:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
  /** Set the spacing between tabs */
  spacing?: 'none' | 'nano' | 'micro' | 'tiny' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  /** Set the font size */
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
  /** Set the line in position selected */
  position?: 'bottom' | 'top';
  /** Overrides the transitionTimingFunction */
  transition?: string;
  /** Triggers a function changing the tab */
  onTabChange?: (tab: string) => void;
  /** REM base to match any change, base 16 */
  base?: number;
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
 * @param {(tab: string) => void} onTabChange Triggers a function changing the tab
 * @param {number} base  REM base to match any change, base 16
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
  base = 16,
  ...rest
}: GroupTab) => {
  const { configuration } = useContext(ConfigContext);
  const [positionTab, setPositionTab] = useState<number>(0);
  const [getWidth, setWidth] = useState<number>(0);
  const [place, setPlace] = useState<number>(0);
  const nodes = React.Children.toArray(children).filter((child) => React.isValidElement(child));
  const ref = useRef<HTMLDivElement>(null);
  const translate = (index: number) => {
    setPositionTab(index * 100);
  };
  const pos = position === 'top' ? 'top' : 'bottom';
  const space: string = spacing || 'none';
  useEffect(() => {
    translate(0);
  }, [children]);
  useEffect(() => {
    React.Children.map<React.ReactNode, React.ReactNode>(children, (child, index) => {
      if (React.isValidElement(child)) {
        if (child.props.active) {
          translate(index);
        }
      }
      return <></>;
    });
    onload(ref, positionTab / 100, configuration, space, setPlace, setWidth, base);
  }, [positionTab, space, horizontalSpacing, children]);
  const toPx: number =
    parseFloat(configuration.spacing[space].match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)[0]) * base;
  const className = rest.className || '';
  return (
    <StyledGroupTab
      {...rest}
      horizontalSpacing={horizontalSpacing}
      verticalSpacing={verticalSpacing}
      configuration={configuration}
      count={nodes.length}
      transition={transition}
      tabType={tabType}
      position={position}
      spacing={spacing || 'none'}
      index={positionTab / 100}
      ref={ref}
      className={`fui-redlines ${className}`}
    >
      <div className='tabs'>
        {React.Children.map<React.ReactNode, React.ReactNode>(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              horizontalSpacing,
              verticalSpacing,
              lineWidth: '0',
              fontSize,
              position: pos,
              tabType,
              index,
              active: child.props.active || index === positionTab / 100,
              handleClick: () => {
                translate(index);
                /* istanbul ignore else */
                if (onTabChange) onTabChange(child.props.text);
              },
            });
          } else return child;
        })}
      </div>
      <div
        className='line'
        style={{
          marginLeft: positionTab === 0 ? 0 : `calc(${toPx}px + ${place}px)`,
          width: `${getWidth}px`,
        }}
      />
    </StyledGroupTab>
  );
};

export default GroupTab;

export const onload = (
  ref: React.RefObject<HTMLDivElement>,
  positionTab: number,
  configuration: ConfigProps,
  spacing: string,
  setPlace: Function,
  setWidth: Function,
  base: number = 16
) => {
  if (ref && ref.current) {
    if (positionTab === 0) {
      setPlace(0);
      setWidth(ref.current.children[0].children[0].clientWidth || 0);
    } else {
      let counter: number = 0;
      const realTabs = ref.current.children[0].children.length; // 0

      if (realTabs - 1 >= positionTab) {
        // 2 y
        for (let i = 0; i < positionTab; i++) {
          if (ref.current.children[0].children[i]) {
            counter += ref.current.children[0].children[i].clientWidth || 0;
            if (i > 0) {
              counter +=
                parseFloat(configuration.spacing[spacing].match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g)[0]) *
                base;
            }
          }
        }
        setWidth(ref.current.children[0].children[positionTab].clientWidth || 0);
      } else {
        setWidth(ref.current.children[0].children[0].clientWidth || 0);
      }
      setPlace(counter);
    }
  }
};
