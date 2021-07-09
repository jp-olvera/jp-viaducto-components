import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ConfigContext } from '../../providers';

const StyledContainer = styled.div < any > `
  box-sizing: border-box;
  ${(p) => p.padding};
  width: ${(p) => (p.expandHorizontal ? '100%' : 'auto')};
  height: ${(p) => (p.expandVertical ? '100%' : 'auto')};
`;
/** Container component. This component will set padding in the direction implemented to children */
interface ContainerInterface {
  /** Child element */
  children: any;
  /** Set padding selected in top direction, this will override parallel props */
  top?: string | null;
  /** Set padding selected in right direction, this will override parallel props */
  right?: string | null;
  /** Set padding selected in bottom direction, this will override parallel props */
  bottom?: string | null;
  /** Set padding selected in left direction, this will override parallel props */
  left?: string | null;
  /** Set padding selected in vertical direction */
  vertical?: string | null;
  /** Set padding selected in horizontal direction */
  horizontal?: string | null;
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

const Container = ({
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
}: ContainerInterface & React.HTMLAttributes<HTMLDivElement>) => {
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

  return (
    <StyledContainer
      padding={getPadding}
      expandHorizontal={expandHorizontal}
      expandVertical={expandVertical}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
