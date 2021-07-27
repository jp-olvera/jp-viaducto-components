/* eslint-disable radix */
import { ConfigProps } from 'ballena-types';
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
  label {
    // sólo para el overflow
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 95%;
  }
  ${({ border, configuration, borderColor }) => getBorderStyle(border, borderColor, configuration)};

  .input {
    border: none;
    color: ${(p) => p.configuration.colors.text.dark};
    flex-grow: 1;
    background: transparent;
    outline: none;
    font-size: 1rem !important;
    overflow: hidden !important;
    padding-right: ${({ configuration }) => configuration.spacing.tiny};
    padding-left: ${({ configuration, hasIcon }) => (hasIcon ? 0 : configuration.spacing.tiny)};
    &:read-only {
      ${(p) => label(p)};
      pointer-events: none;
    }
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
      ${(p) => label(p)};
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
    color: ${(p) => p.configuration.colors.text.dark};
    left: ${(p) => (p.hasIcon ? p.configuration.spacing.lg : p.configuration.spacing.micro)};
    font-size: 1rem;
    height: 1.1rem;
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
    ${(p) => label(p)};
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
`;

export const Caption = styled.span < { configuration: ConfigProps } > `
  color: ${(p) => p.configuration.colors.disableColor};
  transform: scale(80%);
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
    case 'none':
      return css`
        border: none;
      `;
    case 'overlap':
    default:
      return css`
        border: 0.063rem solid ${color || config.colors.defaultInputBorderColor};
      `;
  }
};

export const setLabel = (border: string, size: string) => {
  if (border === 'outside' && size === 'xsmall') {
    return css`
      top: -124%;
    `;
  }
  if (border === 'overlap') {
    return css`
      background-color: inherit !important;
      padding: 0 0.25rem !important;
      top: -0.5rem;
    `;
  }

  return css`
    top: -1.3rem;
  `;
};

export const label = (p: {
  hasLabel: boolean;
  border: string;
  size: string;
  transition: string;
  configuration: ConfigProps;
}) => css`
  ${p.hasLabel && p.border === 'overlap'
    ? 'padding-top: 0.75%'
    : 'padding-top: 0%'};
  & ~ .label:not(.icon),
  ~ .label:not(.icon) {
    /* height: 100%; */
    position: absolute;
    border: none;
    color: ${p.configuration.colors.text.dark};
    padding: 0;
    font-size: ${p.hasLabel && p.border === 'overlap'
    ? '0.8rem !important'
    : '1rem'};
    height: ${p.hasLabel && p.border === 'overlap'
    ? '1rem !important'
    : '1.1rem'};
    outline: none;
    ${setLabel(p.border, p.size)};
    transition: left 0.2s ${p.transition || 'ease'};
    left: ${p.border === 'overlap' ? '0.2rem !important' : '0px'};
    background-color: ${p.border !== 'overlap' ? 'transparent' : 'inherit'};
    & .icon-required-label {
      transition: opacity 0.2s ${p.transition || 'ease'};
      opacity: 1;
      transform: scale(80%);
    }
  }
`;
