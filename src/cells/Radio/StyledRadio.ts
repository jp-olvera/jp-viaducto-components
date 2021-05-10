import styled, { css } from 'styled-components';

export const CheckMark = styled.span``;

interface StyledLabelI {
  readonly family: string;
  readonly size: string;
  readonly disabled: boolean;
  readonly configuration: any;
}
export const StyledLabel = styled.label<StyledLabelI>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-size: ${({ size }) => getSize(size)};
  display: block;
  color: ${({ disabled }) => (disabled ? '#CCCCCC' : '#000')};
  position: relative;
  padding: 0.15rem 0 0 ${({ configuration }) => configuration.spacing.lg};
  margin-bottom: ${({ configuration }) => configuration.spacing.sm};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & :hover input ~ ${CheckMark} {
    background-color: transparent;
    border: ${({ disabled }) => (disabled ? '' : '0.125rem solid #444444')};
  }
  & input:checked ~ ${CheckMark} {
    background-color: ${({ color }) => color};
    border: 0.125rem solid ${({ color }) => color};
  }
  & input:disabled:checked ~ ${CheckMark} {
    background-color: ${({ color }) => color};
    opacity: 0.5;
    border: 0.125rem solid ${({ color }) => color};
  }
  & input:checked ~ ${CheckMark}:after {
    display: block;
  }
  & input:checked:hover ~ ${CheckMark} {
    background-color: #444444;
    border-color: #444444;
  }
  & input:disabled:hover ~ ${CheckMark}:after {
    background-color: ${({ color }) => color};
    opacity: 0.5;
  }
  & input:disabled {
    border-color: #cecece;
    cursor: not-allowed;
    & :hover {
      cursor: not-allowed;
      border-color: #cecece;
    }
  }
  & ${CheckMark} {
    position: absolute;
    top: 0;
    left: 0;
    ${({ size }) => getRadioSizes(size).circle}
    border: 0.125rem solid #CCCCCC;
    border-radius: 50%;
    & :hover:after {
      background-color: white;
    }
    &:after {
      content: '';
      position: absolute;
      background-color: transparent;
      display: none;
    }
  }
  & ${CheckMark}:after {
    top: 0.375rem;
    left: 0.375rem;
    ${({ size }) => getRadioSizes(size).circle_after}
    border-radius: 50%;
    background: white;
  }
`;

const getSize = (size = 'lg', max = false) => {
  switch (size) {
    case 'sm':
      return max ? 'calc(0.83rem * 1.125)' : '0.83rem';
    case 'md':
      return max ? 'calc(1rem * 1.125)' : '1rem';
    case 'lg':
    default:
      return max ? 'calc(1.2rem * 1.125)' : '1.2rem';
  }
};

const getRadioSizes = (size) => {
  switch (size) {
    case 'sm':
      return {
        circle: css`
          height: 1.1rem;
          width: 1.1rem;
        `,
        circle_after: css`
          width: 0.35rem;
          height: 0.35rem;
        `,
      };
    case 'md':
      return {
        circle: css`
          height: 1.3rem;
          width: 1.3rem;
        `,
        circle_after: css`
          width: 0.55rem;
          height: 0.55rem;
        `,
      };
    case 'lg':
    default:
      return {
        circle: css`
          height: 1.5rem;
          width: 1.5rem;
        `,
        circle_after: css`
          width: 0.75rem;
          height: 0.75rem;
        `,
      };
  }
};
