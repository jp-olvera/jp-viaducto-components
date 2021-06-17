import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { ConfigContext } from '../../providers';

const StyledContainer = styled.div < any > `
  box-sizing: border-box;
  ${(p) => p.padding};
  width: ${(p) => (p.expandHorizontal ? '100%' : 'auto')};
  height: ${(p) => (p.expandVertical ? '100%' : 'auto')};
`;

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
}: any) => {
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
