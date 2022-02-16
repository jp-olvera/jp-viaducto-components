import React, { forwardRef, useContext } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { ConfigContext } from '../../providers';

const StyledContainer = styled.div<{
  padding: any;
  expandHorizontal: boolean | null;
  expandVertical: boolean | null;
}>`
  box-sizing: border-box;
  ${(p) => p.padding};
  width: ${(p) => (p.expandHorizontal ? '100%' : 'auto')};
  height: ${(p) => (p.expandVertical ? '100%' : 'auto')};
`;

/** Container component. This component will set padding in the direction implemented to children */
export interface Container extends React.HTMLAttributes<HTMLDivElement> {
  /** Child element */
  children: any;
  /** Set padding selected in top direction, this will override parallel props */
  top?:
    | null
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
  /** Set padding selected in right direction, this will override parallel props */
  right?:
    | null
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
  /** Set padding selected in bottom direction, this will override parallel props */
  bottom?:
    | null
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
  /** Set padding selected in left direction, this will override parallel props */
  left?:
    | null
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
  /** Set padding selected in vertical direction */
  vertical?:
    | null
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
  /** Set padding selected in horizontal direction */
  horizontal?:
    | null
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
  /** Set the width prop as 100% of the parent */
  expandHorizontal?: boolean | null;
  /** Set the height prop as 100% of the parent */
  expandVertical?: boolean | null;
}

/**
 * Container component. This component will set padding in the direction implemented to children
 * @param {string} top Set padding selected in top direction, this will override parallel props
 * @param {string} right Set padding selected in right direction, this will override parallel props
 * @param {string} bottom Set padding selected in bottom direction, this will override parallel props
 * @param {string} left Set padding selected in left direction, this will override parallel props
 * @param {string} vertical Set padding selected in vertical direction
 * @param {string} horizontal Set padding selected in horizontal direction
 * @param {boolean} expandHorizontal Set the width prop as 100% of the parent
 * @param {boolean} expandVertical Set the height prop as 100% of the parent
 * @param {any} children Child element
 */

const Container = forwardRef<HTMLDivElement, Container>(
  (
    {
      top = null,
      right = null,
      bottom = null,
      left = null,
      vertical = null,
      expandHorizontal = false,
      expandVertical = false,
      horizontal = null,
      children,
      ...rest
    }: Container,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const getPadding = () => {
      let paddingTop = '0';
      let paddingBottom = '0';
      let paddingLeft = '0';
      let paddingRight = '0';

      if (vertical !== null) {
        paddingTop = configuration.spacing[vertical];
        paddingBottom = configuration.spacing[vertical];
      }
      if (horizontal !== null) {
        paddingRight = configuration.spacing[horizontal];
        paddingLeft = configuration.spacing[horizontal];
      }
      if (top !== null) {
        paddingTop = configuration.spacing[top];
      }
      if (bottom !== null) {
        paddingBottom = configuration.spacing[bottom];
      }
      if (left !== null) {
        paddingLeft = configuration.spacing[left];
      }
      if (right !== null) {
        paddingRight = configuration.spacing[right];
      }
      return css`
        padding-top: ${paddingTop};
        padding-bottom: ${paddingBottom};
        padding-left: ${paddingLeft};
        padding-right: ${paddingRight};
      `;
    };
    const className = rest.className || '';
    return (
      <StyledContainer
        {...rest}
        padding={getPadding}
        expandHorizontal={expandHorizontal}
        expandVertical={expandVertical}
        ref={ref}
        className={`fui-redlines ${className}`}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Container;
