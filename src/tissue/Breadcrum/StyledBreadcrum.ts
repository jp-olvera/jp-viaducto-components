// import { ConfigProps } from 'ballena-types';
import styled from 'styled-components';
import { getSize } from '../../utils/getSizes';

export const StyledBreadcrums = styled.nav`
  -webkit-box-direction: normal !important;
  -webkit-box-orient: horizontal !important;
  display: flex !important;
  list-style: none !important;
  margin: 0px !important;
  padding: 0px !important;
  flex-wrap: wrap;
  box-sizing: border-box;

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
    margin: 0;
    padding: 0;
    border: 0;
    user-select: auto;
    text-decoration: none;
    font-size: ${(p) => getSize(p.fontSize)};
    line-height: 2rem !important;
    letter-spacing: 0.062rem !important;
    transition: all 300ms ease;
    color: ${(p) => (p.active
    ? p.configuration.colors.text.darkGray
    : p.configuration.colors.text.mutedGray)};
    font-weight: normal;
    cursor: pointer;
    box-sizing: border-box;
    font-family: ${(p) => p.family};
    padding-left: ${(p) => p.configuration.spacing[p.spacing]};
  }

  .v-breadcrum:not([disabled]):hover {
    .label {
      text-decoration: underline !important;
    }
  }

  .v-separator {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    margin-left: ${(p) => p.configuration.spacing[p.spacing]};
    color: ${(p) => p.configuration.colors.text.mutedGray};
    font-weight: normal;
  }
`;
