import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

export const StyledCollapsibleCard = styled.div < any > `
  background-color: #ffffff;
  box-sizing: border-box;
  width: 100%;
  border: 0.063rem solid #d9d9d9;
  border-radius: 0.25rem;
  height: 100%;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  @media screen and (min-width: ${(p) => p.configuration.breakpoints[p.breakpoint]}) {
    max-width: 69.375rem;
  }
  & {
    font-family: ${(p) => p.family || 'inherit'};
  }
`;

export const StyledCollapse = styled.div < any > `
  box-sizing: border-box;
  transition: all
    ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};

  height: 100%;
  max-height: ${({ collapse }) => (collapse ? '0' : '29.625rem')};
  .collapse {
    transition: all
      ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};
    opacity: ${({ collapse }) => (collapse ? '0' : 1)};
  }
`;
