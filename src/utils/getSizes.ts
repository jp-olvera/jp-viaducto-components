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
      return `calc(${getSize(size, max)} * 1.5)`;
    default:
      return lineHeight;
  }
};
const getTitleLineHeight = (lineHeight = 'md', size = '1', max = false) => {
  switch (lineHeight) {
    case 'xs':
      return `calc(${getFontSize(size, max)} * 1.15)`;
    case 'sm':
      return `calc(${getFontSize(size, max)} * 1.25)`;
    case 'lg':
      return `calc(${getFontSize(size, max)} * 1.75)`;
    case 'md':
      return `calc(${getFontSize(size, max)} * 1.5)`;
    default:
      return lineHeight;
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
      return `clamp(1.913rem, calc(1.913rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 3.6103)), 5.16rem) `;
    case 'D2':
      return `clamp(1.793rem, calc(1.793rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.7875)), 4.3rem) `;
    case 'D3':
      return `clamp(1.68rem, calc(1.68rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 2.1159)), 3.583rem) `;
    case 'D4':
      return `clamp(1.575rem, calc(1.575rem + ((${
        max ? 'calc(1.125vw * 16)' : '1vw'
      } - 0.000625rem) * 1.5689)), 2.986rem) `;
  }
};

const getBorder = (border: string, config: { border: string }) => {
  switch (border) {
    case 'none':
      return css`
        border: none;
      `;
    case 'bottom':
      return css`
        border: none;
        border-bottom: ${config.border};
      `;
    default:
      return css`
        border: ${config.border};
      `;
  }
};

const getRangeSize = (size: string = 'md') => {
  switch (size) {
    case 'sm':
      return '1rem';
    case 'lg':
      return '1.5rem';
    case 'md':
    default:
      return '1.25rem';
  }
};

const getRadioSizes = (size: string) => {
  switch (size) {
    case 'sm':
      return {
        circle: css`
          height: 0.9rem;
          width: 0.9rem;
        `,
        circle_size: css`
          background-size: 1.25rem;
        `,
      };
    case 'md':
      return {
        circle: css`
          height: 1.2rem;
          width: 1.2rem;
        `,
        circle_size: css`
          background-size: 2.063rem;
        `,
      };
    case 'lg':
    default:
      return {
        circle: css`
          height: 1.5rem;
          width: 1.5rem;
        `,
        circle_size: css`
          background-size: 2.688rem;
        `,
      };
    case 'xl':
      return {
        circle: css`
          height: 2rem;
          width: 2rem;
        `,
        circle_size: css`
          background-size: 3.625rem;
        `,
      };
  }
};

const getCheckSizes = (size: string) => {
  switch (size) {
    case 'sm':
      return {
        mark: css`
          height: 0.9rem;
          width: 0.9rem;
        `,
        mark_size: css`
          background-size: 0.8rem;
        `,
      };
    case 'md':
      return {
        mark: css`
          height: 1.2rem;
          width: 1.2rem;
        `,
        mark_size: css`
          background-size: 1rem;
        `,
      };
    case 'lg':
    default:
      return {
        mark: css`
          height: 1.5rem;
          width: 1.5rem;
        `,
        mark_size: css`
          background-size: 1.5rem;
        `,
      };
    case 'xl':
      return {
        mark: css`
          height: 2rem;
          width: 2rem;
        `,
        mark_size: css`
          background-size: 2rem;
        `,
      };
  }
};

export {
  getSize,
  getLineHeight,
  getTitleLineHeight,
  getFontSize,
  getRadioSizes,
  getCheckSizes,
  getBorder,
  getRangeSize,
};
