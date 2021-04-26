import styled, { css } from 'styled-components';
import { RadioButton } from 'react-ikonate';
import config from '../../utils/config';
import Icon from './Icon';

const { text, spacing, breakpoints } = config;
const borderColor = '#001D48';
const iconColor = '#2329D6';

export const Helper = styled.span`
  & ${Icon}{
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    position: absolute;
    bottom: 0;
    color: ${iconColor};
    top: ${spacing.micro};
    left: ${spacing.xs};
    display: inline-flex;
    font-size: ${() => getSize('lg')};
    font-weight: 400;
    transform-origin: 0 0;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    background: transparent;
    cursor: default;
    @media screen and (min-width: ${breakpoints.xl}) {
        left: calc(${spacing.xs} * 1.125);
        font-size: ${() => getSize('lg', true)};
    }
  }
`;

export const Info = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  position: relative;
  display: inline-flex;
  float: right;
  margin-top: -2.5rem;
  padding: ${spacing.xs};
  font-size: ${() => getSize('md')};
  color: ${iconColor};
  font-weight: 400;
  transition: all .3s ease;
  justify-content: center;
  opacity: 0;
  align-items: center;
  background: transparent;
  user-select: none;
  z-index: 2;
  @media screen and (min-width: ${breakpoints.xl}) {
    font-size: ${() => getSize('md', true)};
    margin-top: -2.35rem;
  }
`;

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  position: relative;
  margin: 1rem 0;
  width: ${() => getInputSize('full')};
  overflow:  ${(props) => (props.label && props.border === 'overlap' && !props.disabled) ? 'visible' : 'hidden'};
  transition: all .1s ease;
  @media screen and (min-width: ${breakpoints.sm}) {
    width: ${({ size }) => getInputSize(size || 'default')};
  }
`;

export const Caption = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  position: absolute;
  bottom: 0.875rem;
  top: 0.8rem;
  left: ${({ iconHelper }) => iconHelper ? '2rem' : spacing.xs};
  font-size: ${() => getSize('md')};
  color: ${text.mutedGray};
  font-weight: 400;
  transform-origin: 0 0;
  transition: all .2s ease;
  pointer-events: none;
  user-select: none;
  width: 90%;
  background: transparent;
  @media screen and (min-width: ${breakpoints.xl}) {
    bottom: calc(0.875rem * 1.125);
    top: calc(0.8rem * 1.125);
    left: ${({ iconHelper }) => iconHelper ? 'calc(2rem * 1.125)' : `calc(${spacing.xs} * 1.125)`};
    font-size: ${() => getSize('md', true)};
  }
`;

export const IconFill = styled(RadioButton)`
  font-size: ${() => getSize('lg')};
  color: ${iconColor};
  display: inline-flex;
  float: right;
  margin: 0.063rem 0.438rem;
  transition: all .1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media screen and (min-width: ${breakpoints.xl}){
    font-size: ${() => getSize('lg', true)};
  } 
`;

export const StyledInput = styled.input`
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
    font-family: 'DM Sans', sans-serif;
    font-size: ${getSize('md')};
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 3rem;
    font-family: inherit;
    padding:
        ${spacing.xs} 2.1rem ${spacing.xs} ${(iconHelper) => iconHelper !== null ?
    spacing.xs : '1.8rem'};
    font-weight: 400;
    background: white;
    ${({ border }) => border === 'bottom' ?
    `border:0; border-bottom: 1px solid ${borderColor}` :
    `border: 1px solid ${borderColor}`};
    color: ${text.dark};
    &::placeholder{
        transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
        color: ${({ label }) => label ? 'transparent' : text.mutedGray};
        user-select: none;
        padding-left: ${({ iconHelper }) => iconHelper === null ? spacing.nano : '1.7rem'};
    }
    &:not(:placeholder-shown){
      & ${Caption}{
            padding-top: ${spacing.nano};
            transform: translate3d(0,-${spacing.xs},0) scale(.6875);
            @media screen and (min-width: ${breakpoints.xl}) {
                padding-top: calc(${spacing.nano} * 1.125);
                transform: translate3d(0,calc(-${spacing.xs} * 1.125),0) scale(calc(.6875 * 1.125));
            }
        }
    }
    &:focus, &:valid {
        &::placeholder{
            color: ${({ label }) => label ? 'transparent' : text.mutedGray};
            user-select: none;
            padding-left: ${({ iconHelper }) => iconHelper === null ? spacing.nano : '0rem'};
        }
        transition: all .1s  cubic-bezier(0.12, 0, 0.39, 0);
        transition: border .1s  cubic-bezier(0.12, 0, 0.39, 0);
        background: white;
        outline: none;
        letter-spacing: ${({ open }) => open ? 'normal' : '0.25rem'};
        ${({ border }) => border === 'bottom' ?
    `border: 0; border-bottom: 2px solid ${borderColor}` : `border: 2px solid ${borderColor}`};
        padding-bottom: ${(props) => props.label !== null ?
    (props.border === 'overlap' ? spacing.xs : 0) : spacing.xs} !important;
        padding-left: ${({ iconHelper }) => iconHelper === null ? spacing.nano : '1.9rem'};
        padding-top: ${spacing.sm};
        & ~${Info}{
            opacity: 1;
            cursor: pointer;
            user-select: all;
        }
        & ~${Helper}{
            opacity: 1;
            top: ${({ border }) => border === 'full' ? ' 0.88rem' : spacing.micro};
        }
        & ~${Caption}{
            width: auto;
            background: ${(props) => (props.label && props.border === 'overlap' && !props.disabled) ? 'white' : 'transparent'};
            color: ${text.dark};
            padding-top: ${spacing.nano};
            padding-right:${spacing.xs};
            padding-left:${({ border }) => border === 'overlap' ? spacing.xs : '0'};
            transform: translate3d(0,${({ border }) => border === 'overlap' ? '-1.4rem' : '-0.8rem'},0) scale(.6875);
            @media screen and (min-width: ${breakpoints.xl}) {
                padding-top: calc(${spacing.nano} * 1.125);
                padding-right: calc(${spacing.xs} * 1.125);
                transform: translate3d(0,calc(${({ border }) => border === 'overlap' ? '-1.4rem' : '-0.8rem'} * 1.125),0) scale(calc(.6875 * 1.125));
            }
            & ${IconFill}{
                display: inline-flex;
                margin: 0 ${spacing.nano};
            }
        }
        @media screen and (min-width: ${breakpoints.xl}) {
            font-size: ${getSize('md', true)};
            ${({ border }) =>
    (border === 'bottom') ?
      `border: 0; border-bottom: calc(2px * 1.125) solid ${borderColor};` :
      `border: calc(0.12rem * 1.125) solid ${borderColor};`};
            padding-bottom: ${(props) =>
    props.label !== null ?
      (props.border === 'overlap' ?
        `calc(${spacing.xs} * 1.125)` : 0) : `calc(${spacing.xs} * 1.125)`} !important;
            padding-left: ${({ iconHelper }) => iconHelper === null ?
    `calc(${spacing.xs} * 1.125)` : 'calc(1.8rem * 1.125)'};
            padding-top: calc(${spacing.sm} * 1.125);
        }
    }
    @media screen and (min-width: ${breakpoints.xl}) {
        font-size: ${getSize('md', true)};
        height: calc(3rem * 1.125);
        padding:
            calc(${spacing.xs} * 1.125) calc(2.1rem * 1.125) calc(${spacing.xs} * 1.125) ${({ iconHelper }) => iconHelper ? `calc(${spacing.xs} * 1.125)` : 'calc(1.8rem * 1.125)'};
         ${({ border }) =>
    (border === 'bottom') ?
      `border: none; border-bottom: calc(1px * 1.25) solid ${borderColor};` :
      `border: calc(1px * 1.25) solid ${borderColor};`};
    }
    &:disabled{
        background: ${text.lightGray};
        color: ${text.mutedGray};
        padding-bottom:0;
        ${(props) => props.value !== null ? disabled
    : (props.border === 'bottom') ?
      `border: none;
                border-bottom: calc(1px * 1.25) solid ${borderColor};` :
      `border: none;`};
    }
`;

export const disabled = css`
  & ~${Caption}{
    width: auto;
    color: ${text.mutedGray};
    padding-top: ${spacing.nano};
    padding-right:${spacing.xs};
    & ${IconFill}{
        display: inline-flex;
        padding: 0 0 0 ${spacing.nano};
    }
    ${({ border }) =>
    (border === 'bottom') ?
      `border: none; border-bottom: calc(1px * 1.25) solid ${borderColor};` :
      `border: none;`};
    transform: translate3d(0,-0.8rem,0) scale(.6875);
    @media screen and (min-width: ${breakpoints.xl}) {
        padding-top: calc(${spacing.nano} * 1.125);
        padding-right: calc(${spacing.xs} * 1.125);
        transform: translate3d(0,calc(-0.8rem * 1.125),0) scale(calc(.6875 * 1.125));
    }
  }
`;

export const getInputSize = (size, max = false) => {
  switch (size) {
    case 'sm':
      return `${max ? 'calc(16.6875rem * 1.125)' : '16.6875rem'} `;
    case 'lg':
      return `${max ? 'calc(23.1875rem * 1.125)' : '23.1875rem'} `;
    case 'md':
      return `${max ? 'calc(19.9375rem * 1.125)' : '19.9375rem'} `;
    case 'full':
      return '100%';
    case 'default':
    default:
      return `clamp(16.6875rem, calc(16.6875rem + ((${max ? 'calc(1vw * 1.125)' : '1vw'} - 0.01rem) * 7.3034)), 23.1875rem)`;
  }
}


export const getSize = (size = 'md', max = false) => {
  switch (size) {
    case 'xxs':
      return max ? 'calc(0.5rem * 1.125)' : '0.5rem';
    case 'xs':
      return max ? 'calc(0.694rem * 1.125)' : '0.694rem';
    case 'sm':
      return max ? 'calc(0.83rem * 1.125)' : '0.83rem';
    case 'lg':
      return max ? 'calc(1.2rem * 1.125)' : '1.2rem';
    case 'md':
    default:
      return max ? 'calc(1rem * 1.125)' : '1rem';
  }
}