import styled from 'styled-components';
import { getSize } from '../../utils/getSizes';

export const StyledBreadcrums = styled.ol`
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
interface Breadcrum {
  active: boolean;
  fontSize: string;
  spacing: string;
  family: string;
  configuration?: any;
}
export const StyledBreadcrum = styled.li < Breadcrum > `
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
    ? p.configuration.text.darkGray
    : p.configuration.text.mutedGray)};
    font-weight: normal;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    font-family: ${(p) => p.family};
    padding-left: ${(p) => p.configuration.spacing[p.spacing || 'sm']};
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
    margin-left: ${(p) => p.configuration.spacing[p.spacing || 'sm']};
    color: ${(p) => p.configuration.text.mutedGray};
    font-weight: normal;
  }
`;
