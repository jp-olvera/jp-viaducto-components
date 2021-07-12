import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';
import { getSize } from '../../utils/getSizes';

interface TableProps {
  configuration: ConfigProps;
  background?: string;
  border: string;
  zebra?: boolean;
  hover?: boolean;
  zebraColor?: string;
  hoverColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  colorSelected?: string;
  borderColor: string;
  fontSize?: string;
  family?: string;
}
export const StyledTable = styled.div < TableProps > `
  & > * {
    box-sizing: border-box;
  }

  & > table {
    font-family: ${({ family }) => (family ? `${family}, monospace` : "'Roboto', monospace")};
    border-collapse: collapse;
    font-size: ${({ fontSize }) => getSize(fontSize)};
    padding: 0;
    margin: 0;
    border-spacing: 0;
    background-color: ${(p) => p.background};

    thead > tr {
      border-bottom: ${(p) => `0.063rem solid ${p.borderColor}`};
    }
    .selected > td {
      background-color: ${(p) => p.colorSelected || '#ffd37c'};
    }

    tbody > tr {
      &:nth-of-type(odd) {
        background-color: ${(p) => (p.zebra ? p.zebraColor : 'inherit')};
      }
      padding: 0;
      margin: 0;
      &:hover {
        background-color: ${(p) => (p.hover ? p.hoverColor : p.background)};
        border-color: ${(p) => (p.hover ? p.hoverColor : p.background)};
        td {
          border-color: ${(p) => (p.hover ? p.hoverColor : p.background)};
        }
      }
    }
    ${(p) => getBorder(p.border, p.borderColor)};
    td,
    th {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: ${(p) => p.align || 'left'};
      padding: ${(p) => `${p.configuration.spacing[p.verticalSpacing] || 0} ${
    p.configuration.spacing[p.horizontalSpacing] || 0
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
        tr > td,
        tr > th,
        tr:first-child > td,
        tr:first-child > th,
        tr > th:last-child,
        tr > td:last-child {
          border-width: 0px;
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
        tr {
          border-bottom: 0.063rem solid ${borderColor};
        }
        tr:nth-child(1) {
          border-top: 0.063rem solid ${borderColor};
        }
        tr:nth-child(2) {
          border-top: 0.063rem solid ${borderColor};
        }
      `;
    case 'all':
    default:
      return css`
        tr {
          border-left: 0.063rem solid ${borderColor};
          border-right: 0.063rem solid ${borderColor};
        }
        tr:first-child {
          border-top: 0.063rem solid ${borderColor};
        }
        tr > td,
        tr > th {
          border-right: 0.063rem solid ${borderColor};
          border-bottom: 0.063rem solid ${borderColor};
        }
        tr > :last-child {
          border: none;
          border-bottom: 0.063rem solid ${borderColor};
        }
      `;
  }
};
