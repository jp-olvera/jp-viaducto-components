import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

/**
 * BareButton is a component at the top of the parent component
 * @param {any} children Child component
 */

const BareButton = ({ children, ...rest }) => {
  return (
    <StyledButton type="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default BareButton;
