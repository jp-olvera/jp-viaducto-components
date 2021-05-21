import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';
import { getSize } from '../../utils/getSizes';

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
  zebraHoverColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  headerElevation: number;
  colorSelected?: string;
  borderColor?: string;
  minHeight?: string;
  fontSize?: string;
  family?: string;
}
export const StyledTable = styled.div < TableI > `
  box-sizing: border-box;
  width: fit-content;
  * {
    font-size: ${({ fontSize }) => getSize(fontSize)};
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

  .td-data {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
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
    &.isResizing {
      width: 10px;
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
      box-shadow: 1px 1px 12px
        ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }
    &:hover {
      width: 5px;
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }
  }

  .draggable-list {
    li {
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      margin-bottom: 0.5rem;
      padding: 0.35rem 0;
    }
  }
  .sortable-dropzone {
    border: 1px solid transparent;
  }
  .drag-sort-active {
    box-sizing: border-box;
    border: 1px solid #4ca1af !important;
    opacity: 0.8;
    color: rgba(0, 0, 0, 0.2);
  }
  .drag-sort-enter {
    box-sizing: border-box;
    border: 1px dashed #4ca1af !important;
  }

  @media screen and (max-width: ${({ configuration }) => configuration.breakpoints.md}) {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  & > table {
    box-sizing: border-box;
    font-family: ${({ family }) => (family ? `${family}, monospace` : "'Roboto', monospace")};
    display: grid;
    border-collapse: collapse;

    .expandible {
      flex-grow: 1;
      & > td {
        position: relative !important;
        width: 100%;
      }
    }

    .pointer {
      cursor: pointer;
    }

    .pagination {
      align-items: center;
      display: inline-flex;
      justify-content: flex-start;
      gap: 0.4rem;
      margin: 0.4rem;
      .page {
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
        &:hover {
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
      display: flex;
      transition: all 0.2s
        ${({ configuration }) => configuration.transitionTimingFunction};
      background-color: inherit;
      &:hover {
        background-color: ${({ zebraHover, zebraHoverColor }) => (zebraHover ? zebraHoverColor || 'inherit' : '')} !important;
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
      & > tr > td:first-child,
      > tr > th:first-child {
        @media screen and (max-width: ${({ configuration }) => configuration.breakpoints.lg}) {
          position: sticky !important;
          z-index: 1;
          .selected > td {
            background-color: ${({ colorSelected }) => colorSelected || 'inherit'} !important;
          }
          left: 0;
          ${() => getElevation(1, 'right')};
        }
      }
    }
    tfoot > tr {
      &:hover {
        background-color: transparent !important;
      }
      &td {
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
