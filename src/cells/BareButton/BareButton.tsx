import React from 'react';
import styled from 'styled-components';
import svg from './close.svg';

const StyledButton = styled.button`
  padding: 0;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  box-sizing: border-box;

  & > .close {
    width: 0.7rem !important;
  }
`;
/** BareButton is a component at the top of the parent component */
interface BareButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Child component */
  children?: any;
  /** Set close svg icon */
  close?: boolean;
}

/**
 * BareButton is a component at the top of the parent component
 * @param {any} children Child component
 * @param {boolean} close Set close svg icon
 */

const Close = () => <img src={svg} alt='close' className='close' />;

const BareButton = ({ children, close = true, ...rest }: BareButton) => (
  <StyledButton type='button' {...rest} as='button'>
    {!close ? children : <Close />}
  </StyledButton>
);

export default BareButton;
