import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';
import { getSize } from '../../utils/getSizes';

interface TableI {
  configuration: ConfigProps;
  background?: string;
  headerColor?: string;
  textHeaderColor?: string;
  headerFixed?: boolean;
  border: string;
  zebra?: boolean;
  zebraHover?: boolean;
  zebraColor?: string;
  zebraHoverColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  headerElevation: number;
  colorSelected?: string;
  borderColor: string;
  minHeight?: string;
  fontSize?: string;
  family?: string;
}
export const StyledTable = styled.div < TableI > `
  & > * {
    box-sizing: border-box;
  }
  width: fit-content;
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
    width: 0.063rem;
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
      box-shadow: 0.063rem 0.063rem 12px
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
      font-size: ${({ fontSize }) => getSize(fontSize)};
    }
  }
  .sortable-dropzone {
    border: 0.063rem solid transparent;
  }
  .drag-sort-active {
    box-sizing: border-box;
    border: 0.063rem solid #4ca1af !important;
    opacity: 0.8;
    color: rgba(0, 0, 0, 0.2);
  }
  .drag-sort-enter {
    box-sizing: border-box;
    border: 0.063rem dashed #4ca1af !important;
  }

  & > table {
    box-sizing: border-box;
    font-family: ${({ family }) => (family ? `${family}, monospace` : "'Roboto', monospace")};
    display: grid;
    border-collapse: collapse;
    font-size: ${({ fontSize }) => getSize(fontSize)};
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

    .selected > td {
      background-color: ${({ colorSelected }) => colorSelected || '#ffd37c'};
    }

    tr {
      &:nth-of-type(odd) {
        background-color: ${({ zebraColor, zebra }) => (zebra ? zebraColor : 'inherit')};
      }
      padding: 0;
      margin: 0;
      transition: all 0.2s
        ${({ configuration }) => configuration.transitionTimingFunction};
      &:hover {
        ${({ zebraHover, zebraHoverColor }) => (zebraHover ? `background-color: ${zebraHoverColor}` : '')};
        opacity: ${({ zebra }) => (zebra ? '.89' : '1')};
        transition: all 0.01s
          ${({ configuration }) => configuration.transitionTimingFunction};
      }
    }
    ${({ border, borderColor }) => getBorder(border, borderColor)};
    td,
    th {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: ${({ align }) => align || 'left'};
      padding: ${({ configuration, verticalSpacing, horizontalSpacing }) => `${configuration.spacing[verticalSpacing] || 0} ${
    configuration.spacing[horizontalSpacing] || 0
  }`};
      background-color: inherit;
    }

    tfoot > tr {
      &:hover {
        background-color: transparent !important;
      }
      &td {
        border: none !important;
      }
    }
  }
`;

export const getBorder = (border: string, borderColor: string) => {
  switch (border) {
    case 'none':
      return css`
        tbody > tr > td,
        tbody > tr > th,
        tbody > tr:first-child > td,
        tbody > tr:first-child > th,
        tbody > tr > th:last-child,
        tbody > tr > td:last-child {
          border: none;
        }
      `;
    case 'vertical':
      return css`
        tr > th,
        tr > td {
          border-left: 0.063rem solid ${borderColor};
        }
        tr > td:last-child {
          border-right: 0.063rem solid ${borderColor};
        }
      `;
    case 'horizontal':
      return css`
        tbody > tr {
          border-bottom: 0.063rem solid ${borderColor};
        }
        tbody > tr:nth-child(1) {
          border-top: 0.063rem solid ${borderColor};
        }
        tbody > tr:nth-child(2) {
          border-top: 0.063rem solid ${borderColor};
        }
      `;
    case 'all':
    default:
      return css`
        tbody > tr {
          border-left: 0.063rem solid ${borderColor};
          border-right: 0.063rem solid ${borderColor};
        }
        tbody > tr:first-child {
          border-top: 0.063rem solid ${borderColor};
        }
        tbody > tr > td,
        tbody > tr > th {
          border-right: 0.063rem solid ${borderColor};
          border-bottom: 0.063rem solid ${borderColor};
        }
        tbody > tr > :last-child {
          border: none;
          border-bottom: 0.063rem solid ${borderColor};
        }
      `;
  }
};
