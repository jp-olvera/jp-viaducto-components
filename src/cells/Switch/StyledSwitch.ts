import styled from 'styled-components';

const hover = '0.125rem';
export const StyledSwitch = styled.label < any > `
  * {
    box-sizing: border-box;
    transition: all 0.2s ease;
  }
  display: block;
  position: relative;
  padding-left: ${({ size }) => switchSize(size).width};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked {
      & ~ span {
        background-color: ${({ color, disabled }) => (disabled ? '#a6a6a6' : color)};

        &:after {
          left: calc(
            ${({ size }) => switchSize(size).width} -
              calc(${({ size }) => switchSize(size).width} / 2)
          );
          background-color: ${({ disabled }) => (disabled ? '#cecece' : '#fff')};
        }
      }
    }
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: ${({ size }) => switchSize(size).height};
    border-radius: 1.563rem;
    width: ${({ size }) => switchSize(size).width};
    background-color: darkgray;
    transition: background-color 0.2s ease;
    &:hover:not(:disabled) {
      &:after:not(:disabled) {
        box-sizing: border-box;
        left: ${({ size }) => switchSize(size).gutter};
        top: ${({ size }) => switchSize(size).gutter};
        width: ${({ size }) => `calc(calc(${switchSize(size).width} / 2) - ${
    switchSize(size).gutter
  })`};
        height: ${({ size }) => `calc(calc(${switchSize(size).width} / 2) - ${
    switchSize(size).gutter
  })`};
        border: ${hover} solid #444444;
      }
    }
    &:after {
      content: '';
      position: absolute;
      left: ${({ size }) => switchSize(size).gutter};
      top: ${({ size }) => switchSize(size).gutter};
      width: ${({ size }) => `calc(calc(${switchSize(size).width} / 2) - ${
    switchSize(size).gutter
  })`};
      height: ${({ size }) => `calc(calc(${switchSize(size).width} / 2) - ${
    switchSize(size).gutter
  })`};
      border-radius: 50%;
      background-color: white;
      transition: left 0.2s ease;
    }
  }
`;

export const switchSize = (size: string) => {
  switch (size) {
    case 'sm':
      return { width: '1.8rem', height: '1rem', gutter: '0.1rem' };
    case 'md':
      return { width: '2.8rem', height: '1.75rem', gutter: '0.313rem' };
    case 'lg':
    default:
      return { width: '3.75rem', height: '2.25rem', gutter: '0.313rem' };
    case 'xl':
      return { width: '5rem', height: '3rem', gutter: '0.5rem' };
  }
};
