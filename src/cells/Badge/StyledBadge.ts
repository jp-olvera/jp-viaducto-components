import styled, { css } from 'styled-components';
import { getSize } from '../../utils/getSizes';

export const StyledBadge = styled.div < any > `
  ${(p) => getBadgeSize(p.size)}
  font-family: ${(p) => p.family || 'inherit'};
  transition: all 0.2s ${(p) => p.configuration.transitionTimingFunction};
  background-image: ${(p) => (p.src !== null ? `url(${p.src})` : 'none')};
  background-position: ${(p) => (p.src !== null ? '50% 50%' : 'none')};
  background-size: ${(p) => (p.src !== null ? 'cover' : 'none')};
  background-color: ${(p) => p.background};
  background-repeat: no-repeat;
  ${(p) => getClipPath(p.clipPath)};
  box-sizing: border-box;
  display: flex;
  ${(p) => alignContent(p.align)}

  & {
    color: ${(p) => p.configuration.text[p.color] || p.color};
    z-index: 1;
    font-size: ${(p) => getSize(p.fontSize)};
  }
`;

export const getClipPath = (polygon: string) => {
  switch (polygon) {
    case 'hexagon':
      return css`
        clip-path: polygon(
          25% 0%,
          75% 0%,
          100% 50%,
          75% 100%,
          25% 100%,
          0% 50%
        );
      `;
    case 'pentagon':
      return css`
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
      `;
    case 'rhombus':
      return css`
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      `;
    case 'ellipse':
      return css`
        clip-path: ellipse(25% 40% at 50% 50%);
      `;
    case 'rabbet':
      return css`
        clip-path: polygon(
          0% 15%,
          15% 15%,
          15% 0%,
          85% 0%,
          85% 15%,
          100% 15%,
          100% 85%,
          85% 85%,
          85% 100%,
          15% 100%,
          15% 85%,
          0% 85%
        );
      `;
    case 'star':
      return css`
        clip-path: polygon(
          50% 0%,
          61% 35%,
          98% 35%,
          68% 57%,
          79% 91%,
          50% 70%,
          21% 91%,
          32% 57%,
          2% 35%,
          39% 35%
        );
      `;
    case 'triangle':
      return css`
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      `;
    case 'circle':
      return css`
        clip-path: circle(50% at 50% 50%);
      `;
    default:
      return css`
        clip-path: polygon(0 0, 0% 100%, 100% 100%, 100% 0%);
      `;
  }
};

export const getBadgeSize = (size: any = 'md') => {
  const definedSizes = ['xxs', 'xs', 'sm', 'lg', 'xl', 'xxl', 'md'];
  if (typeof size === 'string' && definedSizes.includes(size)) {
    switch (size) {
      case 'xxs':
        return css`
          width: 2rem;
          height: 2rem;
        `;
      case 'xs':
        return css`
          width: 3rem;
          height: 3rem;
        `;
      case 'sm':
        return css`
          width: 5rem;
          height: 5rem;
        `;
      case 'lg':
        return css`
          width: 9rem;
          height: 9rem;
        `;
      case 'xl':
        return css`
          width: 11rem;
          height: 11rem;
        `;
      case 'xxl':
        return css`
          width: 15rem;
          height: 15rem;
        `;
      case 'md':
      default:
        return css`
          width: 7rem;
          height: 7rem;
        `;
    }
  } else {
    return css`
      width: ${size.width};
      height: ${size.height};
    `;
  }
};

export const alignContent = (align: any = 'center') => {
  if (align === 'center' || !align.includes('-')) {
    return css`
      justify-content: center;
      align-items: center;
    `;
  }
  const [y, x] = align.split('-');
  const horizontal = x === 'center' ? 'center' : x === 'left' ? 'flex-start' : 'flex-end';
  const vertical = y === 'center' ? 'center' : y === 'top' ? 'flex-start' : 'flex-end';
  return css`
    justify-content: ${horizontal};
    align-items: ${vertical};
  `;
};
