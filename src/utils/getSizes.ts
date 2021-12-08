import { getClamp } from '../cells/ResponsivePadding/StyledPadding';
import { css } from 'styled-components';

const minBreakpoint = '20rem',
  maxBreakpoint = '90rem';
const getSize = (size: string = 'md') => {
  switch (size) {
    case 'xxs':
      return getClamp('0.5rem', '0.5625rem', minBreakpoint, maxBreakpoint);
    case 'xs':
      return getClamp('0.694rem', '0.78075rem', minBreakpoint, maxBreakpoint);
    case 'sm':
      return getClamp('0.83rem', '0.93375rem', minBreakpoint, maxBreakpoint);
    case 'lg':
      return getClamp('1.125rem', '1.135rem', minBreakpoint, maxBreakpoint);
    case 'xl':
      return getClamp('1.25rem', '1.42rem', minBreakpoint, maxBreakpoint);
    case 'md':
      return getClamp('1rem', '1.125rem', minBreakpoint, maxBreakpoint);
    default:
      return size;
  }
};

const getLineHeight = (lineHeight = 'md', size = 'md') => {
  switch (lineHeight) {
    case 'xs':
      return `calc(${getSize(size).replace(';', '')} * 1.15)`;
    case 'sm':
      return `calc(${getSize(size).replace(';', '')} * 1.25)`;
    case 'lg':
      return `calc(${getSize(size).replace(';', '')} * 1.75)`;
    case 'md':
      return `calc(${getSize(size).replace(';', '')} * 1.5)`;
    default:
      return lineHeight;
  }
};
// calc(clamp(1rem,calc(1rem + (1.125 - 1) * ((100vw - 20rem) / (90 - 20))),1.125rem); * 1.5)
// clamp(asdasdadasd);
const getTitleLineHeight = (lineHeight = 'md', size = '1') => {
  switch (lineHeight) {
    case 'xs':
      return `calc(${getFontSize(size).replace(';', '')} * 1.15)`;
    case 'sm':
      return `calc(${getFontSize(size).replace(';', '')} * 1.25)`;
    case 'lg':
      return `calc(${getFontSize(size).replace(';', '')} * 1.75)`;
    case 'md':
      return `calc(${getFontSize(size).replace(';', '')} * 1.5)`;
    default:
      return lineHeight;
  }
};

const getFontSize = (level: string) => {
  switch (level) {
    case '1':
      return getClamp('1.467rem', '2.488rem', minBreakpoint, maxBreakpoint);
    case '2':
      return getClamp('1.383rem', '2.074rem', minBreakpoint, maxBreakpoint);
    case '3':
      return getClamp('1.296rem', '1.728rem', minBreakpoint, maxBreakpoint);
    case '4':
      return getClamp('1.215rem', '1.44rem', minBreakpoint, maxBreakpoint);
    case '5':
    case '6':
      return getClamp('1.138rem', '1.2rem', minBreakpoint, maxBreakpoint);
    case 'D1':
      return getClamp('1.913rem', '5.16rem', minBreakpoint, maxBreakpoint);
    case 'D2':
      return getClamp('1.793rem', '4.3rem', minBreakpoint, maxBreakpoint);
    case 'D3':
      return getClamp('1.68rem', '3.583rem', minBreakpoint, maxBreakpoint);
    case 'D4':
      return getClamp('1.575rem', '2.986rem', minBreakpoint, maxBreakpoint);
    default:
      return level;
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
