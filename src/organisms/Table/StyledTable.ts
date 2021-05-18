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
  tableElevation: number;
  tableElevationDirection?: string;
  headerElevation: number;
  colorSelected?: string;
  borderColor?: string;
}
export const StyledTable = styled.div<TableI>`
  box-sizing: border-box;
  width: fit-content;
  .size {
    text-align: right;
  }
  .dragStart{
    transition: all .2s ease;
    opacity: 0.4;
  }

  .dragEnd{
    transition: all .2s ease;
    opacity: 1;
  }

  .dragColor {
    transition: all .2s ease;
    filter: brightness(85%);
  }

  .dragNocolor{
    transition: all .2s ease;
    filter: brightness(100%);
  }

  & * {
    box-sizing: border-box;
    font-family: 'Roboto', monospace;
  }
  @media screen and (max-width: ${({ configuration }) =>
      configuration.breakpoints.md}) {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  & > table {
    ${(p) =>
      getElevation(
        p.tableElevation || 1,
        p.tableElevationDirection || 'bottom',
      )};
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
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border-spacing: 0;
    background-color: ${({ background }) => background || '#fff'};
    thead,
    tbody,
    tfoot {
      background-color: inherit;
      background-color: ${({ background }) => background || '#fff'};
    }
    thead {
      th {
        @media screen and (min-width: ${({ configuration }) =>
            configuration.breakpoints.md}) {
              ${(p) =>
                getElevation(
                  p.headerElevation || 1, 'bottom',
                )};
        }
        ${({ headerFixed }) =>
          headerFixed ? 'position: sticky; top: 0;' : 'position: relative;'};
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
        background-color: ${({ zebraHover, zebreHoverColor }) =>
          zebraHover ? zebreHoverColor || 'inherit' : ''} !important;
        opacity: ${({ zebra }) => (zebra ? '.89' : '1')};
        transition: all 0.2s
          ${({ configuration }) => configuration.transitionTimingFunction};
      }
    }
    thead {
      tr:hover {
        background-color: transparent !important;
      }
    }
    ${({ border, borderColor }) => getBorder(border, borderColor)};

    td,
    th {
      text-align: ${({ align }) => align || 'left'};
      padding: ${({ configuration, verticalSpacing, horizontalSpacing }) =>
        `${configuration.spacing[verticalSpacing] || 0} ${
          configuration.spacing[horizontalSpacing] || 0
        }`};
      background-color: inherit;
    }
    .zebra > tr:nth-of-type(odd) {
      background-color: ${({ zebraColor }) => zebraColor || 'red'};
    }
    tbody,
    thead {
      tr > td:first-child {
        @media screen and (max-width: ${({ configuration }) =>
            configuration.breakpoints.md}) {
          position: sticky;
          z-index: 9;
          background-color: inherit;
          left: 0;
        }
      }
      tr > th:first-child {
        @media screen and (max-width: ${({ configuration }) =>
            configuration.breakpoints.md}) {
          position: sticky;
          z-index: 9;
          background-color: inherit;
          left: 0;
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
  }
`;

export const getBorder = (
  border: string = 'all',
  borderColor: string = 'black',
) => {
  switch (border) {
    case 'none':
      return css`
        tr > td,
        tbody > tr:first-child > td,
        tr > td:last-child {
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
        tr > td {
          border-bottom: 1px solid ${borderColor};
        }
        tbody > tr:first-child > td {
          border-top: 1px solid ${borderColor};
        }
      `;
    case 'all':
    default:
      return css`
        tr > td {
          border-left: 1px solid ${borderColor};
          border-bottom: 1px solid ${borderColor};
        }
        tbody > tr:first-child > td {
          border-top: 1px solid ${borderColor};
        }
        tr > td:last-child {
          border-right: 1px solid ${borderColor};
        }
      `;
  }
};
