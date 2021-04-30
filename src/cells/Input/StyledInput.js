import styled, { css } from 'styled-components';
import { RadioButton } from 'react-ikonate';
import config from '../../utils/config';
import Icon from './Icon';

const { text, spacing, breakpoints } = config;
const borderColor = '#001D48';
const iconColor = '#2329D6';


export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  background-color: ${({ disabled }) => disabled ? '#CECECE' : 'white'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'default'};
  box-sizing: border-box;
  height: ${({ size }) => size === 'default' ? "2.488rem" : "2.986rem"};
  position: relative;
  width: 100%;
  
  display: inline-flex;
  align-items: flex-end;
  
  padding-bottom: ${({ size }) => size === 'large' ? spacing.sm : spacing.xs};

  ${({ border }) => getBorderStyle(border)};
  
  .input{
    border: none;
    width: 100%;
    background-color: inherit;
    outline: none;
    font-size: 1rem;
    padding: 0;
  }

  .icon{
    padding: 0 ${spacing.xs};
    display: inline-flex;
    align-items: center;
    color: ${iconColor};
  }

  .input{
     & ::placeholder{
      color: transparent;
    }
  }

  .input:focus ~ .label, .input:valid ~ .label{
    top: ${({ border }) => border === 'overlap' ? ' -0.375rem' : '0'};
    font-size: 0.688rem;
    line-height: 0.688rem;
    border: none;
    color: #000;
    padding: 0;
    outline: none;
    left: ${({ hasIcon }) => hasIcon ? spacing.lg : spacing.xs};
    .icon-required {
      display: inline-flex;
      padding-left: ${spacing.nano};
    }
  }

  .label {
    background: inherit;
    color: #808080;
    left: ${({ hasIcon }) => hasIcon ? spacing.lg : spacing.xs};
    right: initial;
    font-size: 1rem;
    line-height: 1rem;
    ${({ size }) => getTopLabel(size)};
    position: absolute;
    pointer-events: none;
    user-select: none;
    transition: top .2s cubic-bezier(0.165, 0.84, 0.44, 1), font-size .2s cubic-bezier(0.165, 0.84, 0.44, 1);
    .icon-required {
      padding-left: ${spacing.nano};
      margin-left: auto;
      margin-top: 1px;
    }
  }

  .is-invalid{
    color: red;
    padding: 0 ${spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .input[type="password"]{
    letter-spacing: .5rem;
    font-weight: 800;
    height: calc(100% - 1rem);
  }

  .is-valid{
    color: #3AE25F;
    padding: 0 ${spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .icon-helper{
    color: ${iconColor};
    padding: 0 ${spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .input:disabled {
    cursor: not-allowed;
    background-color: #CECECE;
    pointer-events: none;
    user-select: none;
    & :not(:placeholder-shown) ~ .label{
      top: ${({ border }) => border === 'overlap' ? ' -0.375rem' : '0'};
      font-size: 0.688rem;
      line-height: 0.688rem;
      border: none;
      color: #333;
      padding: 0;
      outline: none;
      left: ${({ hasIcon }) => hasIcon ? spacing.lg : spacing.xs};
      .icon-required {
        display: inline-flex;
        padding-left: ${spacing.nano};
      }
    }
  }
`;


const getTopLabel = (size) => {
  if (size === 'default') {
    return css`
      top: calc(1.244rem - .5rem);
    `;
  } else {
    return css`
      top: calc(1.493rem - .5rem);
    `;
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
};

const getBorderStyle = (border) => {
  let borderStyle = '';
  switch (border) {
    case 'bottom':
      borderStyle = css`border-bottom: 0.063rem solid ${borderColor};`;
      break;
    case 'full':
    case 'overlap':
    default:
      borderStyle = css`border: 0.063rem solid ${borderColor};`;
      break;
  }
  return borderStyle;
}

// const transform = (border) => {
//   return css`
//     transform: ${border === 'overlap'
//       ? 'translate3d(0, calc(-1.4rem * 1.125)), 0'
//       : 'translate3d(0, calc(-0.8rem * 1.125)), 0'}
//       scale(calc(0.6875 * 1.125));
//   `;
// };
