import React from 'react';
import styled from 'styled-components';
import svg from './close.svg';

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
  & > .close {
    width: 0.7rem !important;
  }
`;

/**
 * BareButton is a component at the top of the parent component
 * @param {any} children Child component
 */

const Close = () => <img src={svg} alt='close' className='close' />;

const BareButton = ({ children, close = true, ...rest }: any) => (
  <StyledButton type='button' {...rest}>
    {!close ? children : <Close />}
  </StyledButton>
);

export default BareButton;
