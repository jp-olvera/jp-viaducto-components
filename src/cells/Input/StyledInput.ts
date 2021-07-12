/* eslint-disable radix */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div < any > `
  & * {
    transition: all 0.08s ease-in-out;
  }
  font-family: ${(p) => p.family || 'inherit'};
  background-color: ${({ disabled }) => (disabled ? '#CECECE' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  height: ${({ size, configuration }) => configuration.controlHeight[size] || configuration.controlHeight.default};
  position: relative;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${({ border, configuration, borderColor }) => getBorderStyle(border, configuration.text[borderColor] || borderColor)};

  .input {
    border: none;
    width: 100%;
    background: transparent;
    outline: none;
    font-size: 1rem !important;
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
      &:not(:placeholder-shown) {
        & ~ .label {
          background: transparent;
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
    &:focus,
    :valid {
      ${(p) => (p.hasLabel
        && p.size !== 'xsmall'
        && p.border !== 'outside'
        && p.border !== 'overlap'
    ? 'padding-top: 0.75%'
    : 'padding-top: 0%')};
      & ~ .label:not(.icon),
      ~ .label:not(.icon) {
        transition: all 0.25s ease-in-out;
        position: absolute;
        border: none;
        color: #000;
        padding: 0;
        outline: none;
        transform: scale(0.68);
        ${(p) => setLabel(p.border, p.size)};
        left: 0;
        background-color: ${(p) => (p.border === 'outside' ? 'transparent' : 'inherit')};
      }

      & ~ .icon {
        ${(p) => (p.hasLabel
          && p.size !== 'xsmall'
          && p.border !== 'outside'
          && p.border !== 'overlap'
    ? 'padding-top: 0.75%'
    : 'padding-top: 0%')};
      }

      & ~ .is-:invalid,
      ~ .is-required,
      ~ .is-valid {
        display: none;
      }
    }
  }

  .icon {
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: flex;
    align-items: center;
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
  }

  .label {
    background: ${({ border }) => (border === 'outside' ? 'transparent' : 'inherit')};
    color: #808080;
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

  .input[type='time'] {
    height: ${(p) => (p.size === 'large' ? '48%' : '62%')};
  }

  .input[type='date'],
  .input[type='time'],
  .input[type='color'] {
    & ~ .icon {
      left: 0.482rem;
    }
  }

  .input[type='color'] {
    opacity: 0;
    & ~ .show-value {
      left: ${({ configuration }) => configuration.spacing.lg};
      right: initial;
      font-size: 1rem;
      line-height: 1rem;
      position: absolute;
      pointer-events: none;
      user-select: none;
    }
  }

  .is-helper,
  .icon-helper {
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    position: absolute;
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .icon-helper {
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
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

export const setLabel = (border: string, size: string) => {
  if (border === 'outside') {
    return css`
      top: ${() => (size === 'xsmall' ? '-80%' : '-55%')};
    `;
  }
  if (border === 'overlap') {
    return css`
      background-color: inherit !important;
      padding: 0 0.25rem !important;
      top: ${() => (size === 'xsmall' ? '-40%' : '-20%')};
    `;
  }
  return css`
    top: 0;
  `;
};
