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
  .breadcrum {
    /* align-items: center; */
    appearance: none;
    background: transparent;
    margin: 0;
    padding: 0;
    border: 0;
    user-select: auto;
    text-decoration: none;
    font-size: ${(p) => getSize(p.fontSize)};
    line-height: 2rem !important;
    /* vertical-align: middle; */
    /* display: inline-flex; */
    letter-spacing: 0.062rem !important;
    transition: all 300ms ease;
    color: ${(p) => (p.active ? 'rgb(111,68,225)' : 'rgb(72, 72, 72)')};
    font-weight: ${(p) => (p.active ? 'bold !important' : 'normal !important')};
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    font-family: ${(p) => (p.family ? p.family : 'inherit')};
  }

  .breadcrum:not([disabled]):hover {
    .label {
      text-decoration: underline !important;
    }
  }

  .separator {
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    margin-left: ${(p) => p.configuration.spacing[p.spacing || 'sm']};
    margin-right: ${(p) => p.configuration.spacing[p.spacing || 'sm']};
    color: rgb(72, 72, 72);
    font-weight: normal;
  }
`;
