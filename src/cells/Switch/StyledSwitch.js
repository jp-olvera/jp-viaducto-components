import styled, { css } from 'styled-components';

export const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  ${({ size }) => getSize(size).slider};
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  & .slider {
    position: absolute;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ disabled }) => disabled ? '#DDDDDD' : '#AAAAAA'};;
    transition: .4s;
    & :hover :before{
      ${({ disabled }) => disabled ? "" : 'border: .25rem solid #444444'};
      ${({ disabled }) => disabled ? "" : 'transition: 0.1s'};
      ${({ size, disabled }) => disabled ? "" : getSize(size).slider_before_hover};
    }
    & :before {
      position: absolute;
      content: "";
      background-color: white;
      ${({ size }) => getSize(size).slider_before};
    }
  }

  input:checked + .slider {
    background-color: ${({ color }) => color};
  }

  input:disabled:checked + .slider {
    background-color: ${({ color }) => color};
    opacity: .5;
  }

  input:checked + .slider:before {
    ${({ size }) => getSize(size).slider_translate};
  }

  .slider.round {
    border-radius: 2.125rem;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

const getSize = (size) => {
  switch (size) {
    case 'sm':
      return {
        slider: css`
          width: 3.35rem;
          height: 1.95rem;
        `,
        slider_before: css`
          height: 1.5rem;
          width: 1.5rem;
          left: 0.2rem;
          bottom: 0.23rem;
        `,
        slider_before_hover: css`
          height: 1.5rem;
          width: 1.5rem;
          left: 0rem;
          bottom: 0rem;
        `,
        slider_translate: css`
          transform: translateX(1.5rem);
        `,
      };
    case 'md':
      return {
        slider: css`
          width: 3.55rem;
          height: 2.15rem;
        `,
        slider_before: css`
          height: 1.6rem;
          width: 1.6rem;
          left: 0.2rem;
          bottom: 0.3rem;
        `,
        slider_before_hover: css`
          height: 1.6rem;
          width: 1.6rem;
          left: 0rem;
          bottom: 0rem;
        `,
        slider_translate: css`
          transform: translateX(1.5rem);
        `,
      };
    case 'lg':
    default:
      return {
        slider: css`
          width: 3.75rem;
          height: 2.25rem;
        `,
        slider_before: css`
          height: 1.625rem;
          width: 1.625rem;
          left: 0.25rem;
          bottom: 0.344rem;
        `,
        slider_before_hover: css`
          height: 1.625rem;
          width: 1.625rem;
          left: 0rem;
          bottom: 0.05rem;
        `,
        slider_translate: css`
          transform: translateX(1.625rem);
        `,
      };
  }
}