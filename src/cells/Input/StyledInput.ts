import styled, { css } from 'styled-components';
import StyledPill from '../Pill/StyledPill';

export const Wrapper = styled.div < any > `
  & * {
    transition: all 0.08s ease;
  }
  ${(p) => (p.family !== null
    ? css`
          font-family: ${p.family};
        `
    : css``)};
  background-color: ${({ disabled }) => (disabled ? '#CECECE' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  height: ${({ size, configuration }) => configuration.controlHeight[size] || configuration.controlHeight.default};
  position: relative;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  ${({ border, configuration, borderColor }) => getBorderStyle(border, configuration.text[borderColor] || borderColor)};
  ${(p) => (p.type === 'datalist' ? 'border-bottom: none !important;' : null)};

  .input {
    border: none;
    width: 100%;
    background: transparent;
    outline: none;
    font-size: 1rem !important;
    ${(p) => setInputPadding(p.size)};
    padding-right: ${({ configuration }) => configuration.spacing.tiny};
    padding-left: ${({ configuration, hasIcon }) => (hasIcon ? 0 : configuration.spacing.xs)};
    &::placeholder {
      color: transparent;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #cecece;
      pointer-events: none;
      user-select: none;
      &:not(:placeholder-shown) ~ .icon {
        ${(p) => setIcon(p.size).active}
      }
      &:not(:placeholder-shown) ~ .label {
        background: transparent;
        ${(p) => setLabel(p.size, p.border).active}
        border: none;
        color: #333;
        padding: 0;
        outline: none;
        left: 0;
        .icon-required {
          display: inline-flex;
          padding-left: ${({ configuration }) => configuration.spacing.nano};
          color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor} !important;
        }
      }
    }
  }

  .icon {
    padding: 0
      ${({ configuration, type }) => (type === 'card' ? '0.2rem' : configuration.spacing.xs)};
    ${(p) => setIcon(p.size).normal};
    display: inline-flex;
    align-items: center;
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
  }

  .input:focus ~ .icon,
  .input:valid ~ .icon {
    ${(p) => (p.hasLabel ? setIcon(p.size).active : null)};
  }

  .input:focus ~ .label:not(.icon),
  .input:valid ~ .label:not(.icon) {
    ${(p) => (p.hasLabel ? setLabel(p.size, p.border).active : null)}
    position: absolute;
    border: none;
    color: #000;
    padding: 0;
    outline: none;
    left: 0;
    background-color: ${(p) => (p.border === 'outside' ? 'transparent' : 'inherit')};
    .icon-required {
      display: inline-flex;
      padding-left: ${({ configuration }) => configuration.spacing.nano};
      color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor} !important;
    }
  }

  .label {
    background: ${({ border }) => (border === 'outside' ? 'transparent' : 'inherit')};
    color: #808080;
    ${(p) => setLabel(p.size, p.border).normal};
    left: ${(p) => (p.hasIcon ? p.configuration.spacing.lg : p.configuration.spacing.xs)};
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
    pointer-events: none;
    user-select: none;
    transition: all 0.2s ease;
    .icon-required {
      padding-left: ${({ configuration }) => configuration.spacing.nano};
      margin-left: auto;
      display: none;
    }
  }
  .input:valid,
  .input:focus {
    & ~ .is-:invalid,
    ~ .is-required,
    ~ .is-valid {
      display: none;
    }
  }
  .input[type='password'] {
    letter-spacing: 0.5rem;
    font-weight: 800;
  }

  .input[type='time'] {
    height: ${(p) => (p.size === 'large' ? '48%' : '62%')};
  }

  .input[type='date'] ~ .label,
  .input[type='time'] ~ .label,
  .input[type='color'] ~ .label {
    left: 0.25rem;
    ${(p) => setLabel(p.size, p.border).active}
  }

  .input[type='date'] ~ .icon,
  .input[type='time'] ~ .icon,
  .input[type='color'] ~ .icon {
    left: 0.482rem;
    ${(p) => setLabel(p.size, p.border).icon}
  }
  .input[type='color'] {
    opacity: 0;
  }
  .input[type='color'] ~ .show-value {
    left: ${({ configuration }) => configuration.spacing.lg};
    right: initial;
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
    pointer-events: none;
    user-select: none;
    bottom: ${({ configuration, size }) => (size === 'large' ? '0.6rem' : configuration.spacing.nano)};
  }
  .is-invalid {
    color: red;
    padding: 0.3rem ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .is-required {
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
    padding: 0.3rem ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .is-valid {
    color: #3ae25f;
    padding: 0.3rem ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .icon-helper {
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }
`;

export const StyledProgressBar = styled.div < any > `
  display: inline-flex;
  width: 100%;
  height: 0.188rem;
  gap: 0.5rem;
  padding-left: ${({ configuration }) => configuration.spacing.xs};
  box-sizing: border-box;
  .meter {
    background-color: #cecece;
    height: 0.625rem;
  }
`;

export const DataListContainer = styled.div < any > `
  box-sizing: border-box;
  transition: all 0.2s
    ${(p) => p.transition || p.configuration.transitionTimingFunction};
  width: 100%;
  ${(p) => (p.border === 'bottom'
    ? `border-bottom: 0.063rem solid ${p.borderColor || '#000'};`
    : `border: 0.063rem solid ${p.bordercolor || '#000'};`)};
  border-top: none;
  & > ${StyledPill} {
    margin: 0.2rem;
  }
`;

export const getBorderStyle = (border: string, color: string) => {
  switch (border) {
    case 'bottom':
      return css`
        border-bottom: 0.063rem solid ${color};
      `;
    case 'overlap':
    default:
      return css`
        border: 0.063rem solid ${color};
      `;
  }
};

export const setInputPadding = (size: string) => {
  let padding: any;
  switch (size) {
    case 'xsmall':
      padding = '0';
      break;
    case 'small':
      padding = '0.35rem';
      break;
    case 'large':
      padding = '0.5rem';
      break;
    default:
      padding = '0.188rem';
      break;
  }
  return css`
    padding-bottom: ${padding};
  `;
};

export const setIcon = (size: string) => {
  let normal: any, active: any;
  switch (size) {
    case 'xsmall':
      break;
    case 'small':
      normal = css`
        transform: translateY(-25%);
      `;
      active = css`
        transform: translateY(-25%) !important;
      `;
      break;
    case 'large':
      normal = css`
        transform: translateY(-75%);
      `;
      active = css`
        transform: translateY(-50%) !important;
      `;
      break;
    default:
      normal = css`
        transform: translateY(-50%);
      `;
      active = css`
        transform: translateY(-25%) !important;
      `;
      break;
  }
  return {
    active,
    normal,
  };
};

export const setLabel = (size: string, border: string) => {
  let active: any, normal: any, icon: any;
  switch (size) {
    case 'xsmall':
      active = css`
        transform: scale(0.68)
          ${border === 'outside'
    ? 'translateY(-150%)'
    : border === 'overlap'
      ? 'translateY(-140%)'
      : 'translateY(-130%)'};
      `;
      normal = css``;
      icon = css``;
      break;
    case 'small':
      active = css`
        transform: scale(0.68)
          ${border === 'outside'
    ? 'translateY(-250%)'
    : border === 'overlap'
      ? 'translateY(-200%)'
      : 'translateY(-130%)'};
      `;
      normal = css`
        transform: translateY(-35%);
      `;
      icon = css`
        transform: translateY(0);
      `;
      break;
    case 'large':
      active = css`
        transform: scale(0.68)
          ${border === 'outside'
    ? 'translateY(-420%)'
    : border === 'overlap'
      ? 'translateY(-350%)'
      : 'translateY(-280%)'};
      `;
      normal = css`
        transform: translateY(-95%);
      `;
      icon = css`
        transform: translateY(-50%);
      `;
      break;
    default:
      active = css`
        transform: scale(0.68)
          ${border === 'outside'
    ? 'translateY(-350%)'
    : border === 'overlap'
      ? 'translateY(-280%)'
      : 'translateY(-200%)'};
      `;
      normal = css`
        transform: translateY(-70%);
      `;
      icon = css`
        transform: translateY(-30%);
      `;
      break;
  }
  return {
    active,
    normal,
    icon,
  };
};
