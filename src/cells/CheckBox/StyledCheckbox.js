import styled, { css } from 'styled-components';

export const CheckMark = styled.span``;

export const StyledLabel = styled.label`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  font-size: ${({ size }) => getSize(size)};
  display: inline-block;
  color: ${({ disabled }) => (disabled ? '#CCCCCC' : '#000')};
  position: relative;
  padding: 0.6rem 0 0 3.5rem;
  box-sizing: border-box;
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
    box-sizing: border-box;
    top: 0;
    left: 0;
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle}
    border: 0.125rem solid #cccccc;
    border-radius: 5px;
    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }
  & ${CheckMark}:after {
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle_after};
    ${({ size, configuration }) =>
      getCheckSizes(size, configuration.controlHeight).circle_after_size};
    border: solid white;
    border-width: 0 0.25rem 0.25rem 0;
    transform: rotate(45deg);
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
    border: 0.125rem solid #444444;
  }
  & input:disabled:hover ~ ${CheckMark}:after {
    background-color: ${({ color }) => color};
    opacity: 0.5;
  }
`;

const getSize = (size = 'lg', max = false) => {
  switch (size) {
    case 'sm':
      return max ? 'calc(1rem * 1.125)' : '0.83rem';
    case 'md':
      return max ? 'calc(1.2rem * 1.125)' : '1rem';
    case 'lg':
    default:
      return max ? 'calc(1.4rem * 1.125)' : '1.2rem';
  }
};

const getCheckSizes = (size, height) => {
  switch (size) {
    case 'sm':
      return {
        circle: css`
          height: ${height.small};
          width: ${height.small};
        `,
        circle_after: css`
          top: 0;
          left: 0.5rem;
        `,
        circle_after_size: css`
          width: 0.625rem;
          height: 1.2rem;
        `,
      };
    case 'lg':
      return {
        circle: css`
          height: ${height.large};
          width: ${height.large};
        `,
        circle_after: css`
          top: 0.313rem;
          left: 1rem;
        `,
        circle_after_size: css`
          width: 0.625rem;
          height: 1.563rem;
        `,
      };
    case 'md':
    default:
      return {
        circle: css`
          height: ${height.default};
          width: ${height.default};
        `,
        circle_after: css`
          top: 0;
          left: 0.7rem;
        `,
        circle_after_size: css`
          width: 0.625rem;
          height: 1.563rem;
        `,
      };
  }
};
