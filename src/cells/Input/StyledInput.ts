/* eslint-disable radix */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div < any > `
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  background-color: ${({ disabled, configuration }) => (disabled
    ? configuration.colors.disableColor
    : configuration.colors.background)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  height: ${({ size, configuration }) => configuration.controlHeight[size]};
  position: relative;
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  ${({ border, configuration, borderColor }) => getBorderStyle(border, borderColor, configuration)};

  .input {
    border: none;
    width: 100%;
    background: transparent;
    outline: none;
    font-size: 1rem !important;
    padding-right: ${({ configuration }) => configuration.spacing.tiny};
    padding-left: ${({ configuration, hasIcon }) => (hasIcon ? 0 : configuration.spacing.xs)};
    &:disabled {
      cursor: not-allowed;
      background-color: ${(p) => p.configuration.colors.disableColor};
      pointer-events: none;
      user-select: none;
      &[value=''] {
        color: transparent;
        &[type='date'],
        &[type='time'] {
          color: inherit;
        }
      }
    }
    &:focus,
    :valid,
    :placeholder-shown,
    :not([value='']) {
      ${(p) => (p.hasLabel && p.border === 'overlap'
    ? 'padding-top: 0.75%'
    : 'padding-top: 0%')};
      & ~ .label:not(.icon),
      ~ .label:not(.icon) {
        position: absolute;
        border: none;
        color: #000;
        ${(p) => p.hasLabel && p.border === 'overlap' && 'transform: scale(80%)'};
        padding: 0;
        font-size: 1rem;
        outline: none;
        ${(p) => setLabel(p.border, p.size)};
        transition: left 0.2s ${(p) => p.transition || 'ease'};
        left: 0 !important;
        background-color: ${(p) => (p.border === 'outside' ? 'transparent' : 'inherit')};
        & .icon-required-label {
          transition: opacity 0.2s ${(p) => p.transition || 'ease'};
          opacity: 1;
          transform: scale(80%);
        }
      }

      & ~ .icon {
        padding-top: ${(p) => (p.hasLabel && p.border === 'overlap' ? '0.75%' : 0)};
      }

      & ~ .icon-required {
        transition: opacity 0.2s ${(p) => p.transition || 'ease'};
        opacity: 0;
      }
    }
  }

  .icon {
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: flex;
    align-items: center;
    color: ${({ iconColor, configuration }) => configuration.colors.text[iconColor]
      || iconColor
      || configuration.colors.iconColor};
  }

  .icon-required {
    position: absolute;
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    color: ${({ iconColorRequired, configuration }) => configuration.colors.text[iconColorRequired]
      || iconColorRequired
      || configuration.colors.iconColor};
    height: 100%;
    opacity: 1;
    transition: opacity 0.2s ${(p) => p.transition || 'ease'};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-required-label {
    opacity: 0;
    transition: opacity 0.2s ${(p) => p.transition || 'ease'};
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
  .caption {
    color: ${(p) => p.configuration.colors.disableColor};
    transform: scale(80%);
    position: absolute;
    top: 110%;
    left: calc(-0.9rem - 20px);
  }
`;

export const getBorderStyle = (
  border: string,
  color: string,
  config: { colors: { defaultInputBorderColor: string } },
) => {
  switch (border) {
    case 'bottom':
      return css`
        border-bottom: 0.063rem solid
          ${color || config.colors.defaultInputBorderColor};
      `;
    case 'overlap':
    default:
      return css`
        border: 0.063rem solid ${color || config.colors.defaultInputBorderColor};
      `;
  }
};

export const setLabel = (border: string, size: string) => {
  if (border === 'overlap') {
    return css`
      background-color: inherit !important;
      padding: 0 0.25rem !important;
      top: ${() => (size === 'xsmall' ? '-40%' : '-20%')};
    `;
  }
  return css`
    top: ${() => (size === 'xsmall' ? '-80%' : '-55%')};
  `;
};
