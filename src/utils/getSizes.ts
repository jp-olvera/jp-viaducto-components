import { css } from 'styled-components';

const getSize = (size: string = 'md', max: boolean = false) => {
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

const getLineHeight = (lineHeight = 'md', size = 'md', max = false) => {
  switch (lineHeight) {
    case 'xs':
      return `calc(${getSize(size, max)} * 1.15)`;
    case 'sm':
      return `calc(${getSize(size, max)} * 1.25)`;
    case 'lg':
      return `calc(${getSize(size, max)} * 1.75)`;
    case 'md':
    default:
      return `calc(${getSize(size, max)} * 1.5)`;
  }
};

const getFontSize = (level: string, max: boolean = false) => {
  switch (level) {
    case '1':
    default:
      return `clamp(1.467rem, calc(1.467rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 1.1352)), 2.488rem) `;
    case '2':
      return `clamp(1.383rem, calc(1.383rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.7683)), 2.074rem) `;
    case '3':
      return `clamp(1.296rem, calc(1.296rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.4803)), 1.728rem) `;
    case '4':
      return `clamp(1.215rem, calc(1.215rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.2502)), 1.44rem) `;
    case '5':
    case '6':
      return `clamp(1.138rem, calc(1.138rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 0.0689)), 1.2rem) `;
    case 'D1':
    case 'd1':
      return `clamp(1.913rem, calc(1.913rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 3.6103)), 5.16rem) `;
    case 'D2':
    case 'd2':
      return `clamp(1.793rem, calc(1.793rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.7875)), 4.3rem) `;
    case 'D3':
    case 'd3':
      return `clamp(1.68rem, calc(1.68rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.1159)), 3.583rem) `;
    case 'D4':
    case 'd4':
      return `clamp(1.575rem, calc(1.575rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 1.5689)), 2.986rem) `;
  }
};

const getPillSize = (size = 'md', max = false) => {
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

export {
  getSize,
  getLineHeight,
  getFontSize,
  getRadioSizes,
  getPillSize,
  getCheckSizes,
};
