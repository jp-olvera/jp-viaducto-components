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
  headerColor?: string;
  headerBackgroundColor?: string;
  verticalSpacing: string;
  horizontalSpacing: string;
  align?: string;
  colorSelected?: string;
  borderColor?: string;
  fontSize?: string;
  family?: string;
}
export const StyledTable = styled.div < TableProps > `
  & > * {
    box-sizing: border-box;
  }

  & > table {
    font-family: ${(p) => p.family || p.configuration.fontFamily};
    border-collapse: collapse;
    font-size: ${({ fontSize }) => getSize(fontSize)};
    padding: 0;
    margin: 0;
    border-spacing: 0;
    background-color: ${(p) => p.background || p.configuration.colors.table.background};

    thead {
      color: ${(p) => p.headerColor || p.configuration.colors.text[p.headerColor || 'dark']};
      background-color: ${(p) => p.headerBackgroundColor || p.configuration.colors.table.headerColor};
    }
    thead > tr {
      border-bottom: ${(p) => `0.063rem solid ${
    p.borderColor || p.configuration.colors.defaultInputBorderColor
  }`};
    }
    .selected > td {
      background-color: ${(p) => p.colorSelected || p.configuration.colors.table.selectedColor};
    }

    tbody > tr {
      &:nth-of-type(odd) {
        background-color: ${(p) => (p.zebra
    ? p.zebraColor || p.configuration.colors.table.zebraColor
    : 'inherit')};
      }
      padding: 0;
      margin: 0;
      &:hover {
        ${(p) => (p.hover
    ? `background-color: ${
      p.hoverColor || p.configuration.colors.table.hoverColor
    }`
    : null)};
      }
    }
    ${(p) => getBorder(
    p.border,
    p.borderColor || p.configuration.colors.defaultInputBorderColor,
  )};
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
        tr > th:last-child {
          border-right: 0.063rem solid ${borderColor};
        }
      `;
    case 'horizontal':
      return css`
        tr {
          border-bottom: 0.063rem solid ${borderColor};
        }
      `;
    case 'all':
    default:
      return css`
        thead {
          border-top: 0.063rem solid ${borderColor};
        }
        tr {
          border-bottom: 0.063rem solid ${borderColor};
          border-left: 0.063rem solid ${borderColor};
        }
        td,
        th {
          border-right: 0.063rem solid ${borderColor};
        }
      `;
  }
};
