// import { ConfigProps } from 'ballena-types';
import styled from 'styled-components';
import { getSize } from '../../utils/getSizes';

export const StyledBreadcrums = styled.div < any >`
  box-sizing: border-box;
  display: flex !important;
  flex-wrap: wrap;
  list-style: none !important;
  margin: 0px !important;
  padding: 0px !important;
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;

  li:first-child > .v-breadcrum {
    padding-left: 0 !important;
  }
`;
// interface Breadcrum {
//   active: boolean;
//   fontSize: string;
//   spacing: string;
//   family: string;
//   configuration: ConfigProps;
// }
export const StyledBreadcrum = styled.div < any > `
  // !important is needed because of the button inherited properties
  .v-breadcrum {
    appearance: none;
    background: transparent;
    border: 1px dashed orange;
    border: 0;
    box-sizing: border-box;
    color: ${(p) => (p.active
    ? p.configuration.colors.text.darkGray
    : p.configuration.colors.text.mutedGray)};
    cursor: pointer;
    display: inline-block;
    font-weight: normal;
    font-family: ${(p) => p.family};
    font-size: ${(p) => getSize(p.fontSize)};
    letter-spacing: 0.062rem !important;
    line-height: 2rem !important;
    margin: 0;
    padding: 0;
    padding-left: ${(p) => p.configuration.spacing[p.spacing]};
    text-decoration: none;
    transition: all 300ms ease;
    user-select: auto;
  }

  .v-breadcrum:not([disabled]):hover {
    .label {
      text-decoration: underline !important;
    }
  }

  .v-separator {
    align-items: center;
    color: ${(p) => p.configuration.colors.text.mutedGray};
    display: inline-flex;
    font-weight: normal;
    margin-left: ${(p) => p.configuration.spacing[p.spacing]};
    vertical-align: middle;
  }
`;
