import styled, { css } from 'styled-components';

interface WrapperInterface {
  readonly disabled?: boolean;
  readonly hasIcon?: boolean;
  readonly size: string;
  readonly configuration: any;
  readonly border: string;
  readonly iconColor: string;
  readonly borderColor: string;
}
export const Wrapper = styled.div<WrapperInterface>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
  font-family: 'DM Sans', sans-serif;
  background-color: ${({ disabled }) => (disabled ? '#CECECE' : 'white')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  box-sizing: border-box;
  height: ${({ size }) => (size === 'default' ? '2.488rem' : '2.986rem')};
  position: relative;
  width: 100%;

  display: inline-flex;
  align-items: flex-end;

  padding-bottom: ${({ configuration, size }) =>
    size === 'large' ? configuration.spacing.sm : configuration.spacing.xs};

  ${({ border, configuration, borderColor }) =>
    getBorderStyle(border, configuration.text[borderColor] || borderColor)};

  .input {
    border: none;
    width: 100%;
    background-color: inherit;
    outline: none;
    font-size: 1rem;
    padding: 0;
    padding-left: ${({ configuration, hasIcon }) =>
      hasIcon ? 0 : configuration.spacing.xs};
  }

  .icon {
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
    color: ${({ iconColor, configuration }) =>
      configuration.text[iconColor] || iconColor};
  }

  .input {
    & ::placeholder {
      color: transparent;
    }
  }

  .input:focus ~ .label,
  .input:valid ~ .label {
    top: ${({ border }) => (border === 'overlap' ? ' -0.375rem' : '0')};
    font-size: 0.688rem;
    line-height: 0.688rem;
    border: none;
    color: #000;
    padding: 0;
    outline: none;
    left: ${({ configuration, hasIcon }) =>
      hasIcon ? configuration.spacing.lg : configuration.spacing.xs};
    .icon-required {
      display: inline-flex;
      padding-left: ${({ configuration }) => configuration.spacing.nano};
    }
  }

  .label {
    background: inherit;
    color: #808080;
    left: ${({ configuration, hasIcon }) =>
      hasIcon ? configuration.spacing.lg : configuration.spacing.xs};
    right: initial;
    font-size: 1rem;
    line-height: 1rem;
    ${({ size }) => getTopLabel(size)};
    position: absolute;
    pointer-events: none;
    user-select: none;
    transition: top 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      font-size 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    .icon-required {
      padding-left: ${({ configuration }) => configuration.spacing.nano};
      margin-left: auto;
      margin-top: 1px;
    }
  }

  .is-invalid {
    color: red;
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .input[type='password'] {
    letter-spacing: 0.5rem;
    font-weight: 800;
    height: calc(100% - 1rem);
  }

  .is-valid {
    color: #3ae25f;
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .icon-helper {
    color: ${({ iconColor, configuration }) =>
      configuration.text[iconColor] || iconColor};
    padding: 0 ${({ configuration }) => configuration.spacing.xs};
    display: inline-flex;
    align-items: center;
  }

  .input:disabled {
    cursor: not-allowed;
    background-color: #cecece;
    pointer-events: none;
    user-select: none;
    & :not(:placeholder-shown) ~ .label {
      top: ${({ border }) => (border === 'overlap' ? ' -0.375rem' : '0')};
      font-size: 0.688rem;
      line-height: 0.688rem;
      border: none;
      color: #333;
      padding: 0;
      outline: none;
      left: ${({ configuration, hasIcon }) =>
        hasIcon ? configuration.spacing.lg : configuration.spacing.xs};
      .icon-required {
        display: inline-flex;
        padding-left: ${({ configuration }) => configuration.spacing.nano};
      }
    }
  }
`;

interface StyledProgressBarI {
  readonly configuration: any;
}
export const StyledProgressBar = styled.div<StyledProgressBarI>`
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

const getTopLabel = (size) => {
  if (size === 'default') {
    return css`
      top: calc(1.244rem - 0.5rem);
    `;
  } else {
    return css`
      top: calc(1.493rem - 0.5rem);
    `;
  }
};

export const getSize = (size: string = 'md', max: boolean = false) => {
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

const getBorderStyle = (border: string, color: string) => {
  var borderStyle = css``;
  switch (border) {
    case 'bottom':
      borderStyle = css`
        border-bottom: 0.063rem solid ${color};
      `;
      break;
    case 'full':
    case 'overlap':
    default:
      borderStyle = css`
        border: 0.063rem solid ${color};
      `;
      break;
  }
  return borderStyle;
};
