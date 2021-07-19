import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

export const StyledCollapsibleCard = styled.div < any > `
  background-color: ${(p) => p.configuration.colors.background};
  box-sizing: border-box;
  width: 100%;
  border: ${(p) => p.configuration.colors.defaultInputBorderColor};
  border-radius: ${(p) => p.configuration.radius[p.radius]};
  height: 100%;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  & {
    font-family: ${(p) => p.family || p.configuration.fontFamily};
  }
`;

export const StyledCollapse = styled.div < any > `
  box-sizing: border-box;
  transition: all ${({ transition }) => `0.2s ${transition}`};
  background-color: ${(p) => p.configuration.colors.background};
  height: 100%;
  max-height: ${({ collapse }) => (collapse ? '0' : '29.625rem')};
  .collapse {
    transition: all ${({ transition }) => `0.2s ${transition}`};
    opacity: ${({ collapse }) => (collapse ? '0' : 1)};
  }
`;
