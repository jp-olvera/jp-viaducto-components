import styled, { css } from 'styled-components';

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
  box-sizing: border-box;
  height: ${({ size }) => (size === 'default' ? '2.488rem' : '2.986rem')};
  position: relative;
  width: 100%;

  display: inline-flex;
  align-items: flex-end;

  padding-bottom: ${({ configuration, size }) => (size === 'large'
    ? configuration.spacing.micro
    : configuration.spacing.nano)};

  ${({ border, configuration, borderColor }) => getBorderStyle(border, configuration.text[borderColor] || borderColor)};

  .input {
    border: none;
    width: 100%;
    background: inherit;
    outline: none;
    font-size: 1rem !important;
    padding: 0;
    padding-right: ${({ configuration }) => configuration.spacing.tiny};
    padding-left: ${({ configuration, hasIcon }) => (hasIcon ? 0 : configuration.spacing.xs)};
    padding-bottom: ${({ size }) => (size === 'large' ? '.3rem' : 0)};
    &::placeholder {
      color: transparent;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #cecece;
      pointer-events: none;
      user-select: none;
      &:not(:placeholder-shown) ~ .label {
        background: transparent;
        top: ${({ border }) => (border === 'overlap'
    ? ' -0.375rem'
    : border === 'outside'
      ? '-0.9rem'
      : '0.188rem')};
        font-size: 0.688rem;
        line-height: 0.688rem;
        border: none;
        color: #333;
        padding: 0;
        outline: none;
        left: ${({ configuration }) => configuration.spacing.xs};
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
    padding-bottom: ${({ configuration, size }) => (size === 'large'
    ? configuration.spacing.nano
    : configuration.spacing.none)};
    display: inline-flex;
    align-items: center;
    color: ${({ iconColor, configuration }) => configuration.text[iconColor] || iconColor};
  }

  .input:focus ~ .label,
  .input:valid ~ .label {
    top: ${({ border }) => (border === 'overlap'
    ? ' -0.375rem'
    : border === 'outside'
      ? '-0.9rem'
      : '0.188rem')};
    font-size: 0.688rem !important;
    line-height: 0.688rem;
    border: none;
    color: #000;
    padding: 0;
    outline: none;
    left: ${({ configuration }) => configuration.spacing.xs};
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
    left: ${({ configuration, hasIcon }) => (hasIcon ? configuration.spacing.lg : configuration.spacing.xs)};
    right: initial;
    font-size: 1rem;
    line-height: 1rem;
    top: ${({ size, hasIcon }) => (size === 'large'
    ? hasIcon
      ? '1.2rem'
      : '1rem'
    : hasIcon
      ? '1rem'
      : '0.688rem')};
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
    height: calc(100% - 1rem);
  }

  .input[type='date'] {
    height: ${(p) => (p.size === 'large' ? 'calc(100% - 1.5rem)' : 'calc(100% - 1rem)')};
  }

  .input[type='time'] {
    height: ${(p) => (p.size === 'large' ? '48%' : '62%')};
  }

  .input[type='date'] ~ .label,
  .input[type='time'] ~ .label,
  .input[type='color'] ~ .label {
    left: 0.482rem;
    font-size: 0.688rem !important;
    line-height: 0.688rem;
    top: ${({ border }) => (border === 'overlap'
    ? ' -0.375rem'
    : border === 'outside'
      ? '-0.9rem'
      : '0.188rem')};
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

const getBorderStyle = (border: string, color: string) => {
  let borderStyle = css``;
  switch (border) {
    case 'bottom':
      borderStyle = css`
        border-bottom: 0.063rem solid ${color};
      `;
      break;
    case 'overlap':
    default:
      borderStyle = css`
        border: 0.063rem solid ${color};
      `;
      break;
  }
  return borderStyle;
};
