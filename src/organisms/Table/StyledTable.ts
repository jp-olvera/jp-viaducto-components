import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

interface TableI {
  configuration?: any;
  background?: string;
  headerColor?: string;
  textHeaderColor?: string;
  headerFixed?: boolean;
  border?: string;
  zebra?: boolean;
  zebraHover?: boolean;
  zebraColor?: string;
  zebreHoverColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  headerElevation: number;
  colorSelected?: string;
  borderColor?: string;
  minHeight?: string;
}
export const StyledTable = styled.div < TableI > `
  box-sizing: border-box;
  width: fit-content;

  & * {
    box-sizing: border-box;
    font-family: 'Roboto', monospace;
  }

  .size {
    text-align: right;
  }

  .dragStart {
    transition: all 0.2s ease;
    opacity: 0.4;
  }

  .dragEnd {
    transition: all 0.2s ease;
    opacity: 1;
  }

  .dragColor {
    transition: all 0.2s ease;
    filter: brightness(85%);
  }

  .dragNocolor {
    transition: all 0.2s ease;
    filter: brightness(100%);
  }

  .dropzone {
    svg {
      pointer-events: none;
    }
    span {
      pointer-events: none;
    }
  }

  .resizer {
    display: inline-block;
    background: transparent;
    width: 1px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);
    cursor: col-resize;
    z-index: 1;
    touch-action: none;
    & .isResizing {
      width: 10px;
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
      box-shadow: 1px 1px 12px
        ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }
    & :hover {
      width: 5px;
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }
  }

  @media screen and (max-width: ${({ configuration }) => configuration.breakpoints.md}) {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  & > table {
    display: grid;
    border-collapse: collapse;

    .pagination {
      align-items: center;
      display: inline-flex;
      justify-content: flex-start;
      gap: 0.4rem;
      margin: 0.4rem;
      .page {
        min-width: 6rem;
        padding: 0 ${({ configuration }) => configuration.spacing.xs};
      }
    }
    padding: 0;
    margin: 0;
    border-spacing: 0;
    background-color: ${({ background }) => background};

    thead,
    tbody,
    tfoot {
      background-color: ${({ background }) => background};
    }

    thead {
      tr {
        width: 100% !important;
        & :hover {
          background-color: transparent !important;
        }
      }
      th {
        @media screen and (min-width: ${({ configuration }) => configuration.breakpoints.md}) {
          ${(p) => (p.headerElevation > 0
    ? getElevation(p.headerElevation, 'bottom')
    : null)};
        }
        ${({ headerFixed }) => (headerFixed ? 'position: sticky; top: 0;' : 'position: relative;')};
        background-color: ${({ headerColor }) => headerColor || '#fff'};
        color: ${({ textHeaderColor }) => textHeaderColor || '#000'};
      }
    }

    .selected > td {
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }

    tr {
      padding: 0;
      margin: 0;
      transition: all 0.2s
        ${({ configuration }) => configuration.transitionTimingFunction};
      background-color: inherit;
      & :hover {
        background-color: ${({ zebraHover, zebreHoverColor }) => (zebraHover ? zebreHoverColor || 'inherit' : '')} !important;
        opacity: ${({ zebra }) => (zebra ? '.89' : '1')};
        transition: all 0.2s
          ${({ configuration }) => configuration.transitionTimingFunction};
      }
    }
    ${({ border, borderColor }) => getBorder(border, borderColor)};
    td {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: ${({ align }) => align || 'left'};
      padding: ${({ configuration, verticalSpacing, horizontalSpacing }) => `${configuration.spacing[verticalSpacing] || 0} ${
    configuration.spacing[horizontalSpacing] || 0
  }`};
      background-color: inherit;
    }
    .zebra > tr:nth-of-type(odd) {
      background-color: ${({ zebraColor }) => zebraColor || 'red'};
    }
    tbody,
    thead {
      & tr {
        @media screen and (max-width: ${({ configuration }) => configuration.breakpoints.lg}) {
          display: flex;
        }
      }
      & > tr > td:first-child,
      > tr > th:first-child {
        @media screen and (max-width: ${({ configuration }) => configuration.breakpoints.lg}) {
          position: sticky !important;
          z-index: 9999;
          background-color: inherit !important;
          left: 0;
          ${() => getElevation(1, 'right')};
        }
      }
    }
    tfoot > tr {
      & :hover {
        background-color: transparent !important;
      }
      & td {
        border: none !important;
      }
    }
    tbody > tr > td {
      overflow: hidden;
      min-height: ${({ minHeight }) => minHeight} !important;
    }
  }
`;

export const getBorder = (
  border: string = 'all',
  borderColor: string = 'black',
) => {
  switch (border) {
    case 'none':
      return css`
        tbody > tr > td,
        tbody > tr:first-child > td,
        tbody > tr > td:last-child {
          border: none;
        }
      `;
    case 'vertical':
      return css`
        tr > td {
          border-left: 1px solid ${borderColor};
        }
        tr > td:last-child {
          border-right: 1px solid ${borderColor};
        }
      `;
    case 'horizontal':
      return css`
        tbody > tr {
          border-bottom: 1px solid ${borderColor};
        }
        tbody > tr:first-child {
          border-top: 1px solid ${borderColor};
        }
        tbody > tr:last-child {
          border-bottom: 1px solid ${borderColor};
        }
      `;
    case 'all':
    default:
      return css`
        tbody > tr {
          border-left: 1px solid ${borderColor};
          border-right: 1px solid ${borderColor};
        }
        tbody > tr:first-child {
          border-top: 1px solid ${borderColor};
        }
        tbody > tr > td {
          border-right: 1px solid ${borderColor};
          border-bottom: 1px solid ${borderColor};
        }
        tbody > tr > :last-child {
          border: none;
          border-bottom: 1px solid ${borderColor};
        }
      `;
  }
};
