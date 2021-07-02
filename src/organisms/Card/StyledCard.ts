import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

export const StyledNormalCard = styled.div < any > `
  border: 0.063rem solid #d9d9d9;
  background-color: #ffffff;
  overflow-y: auto;
  overflow-x: hidden;
  transition: all
    ${({ configuration, transition }) => `0.2s ${transition || configuration.transitionTimingFunction}`};
  box-sizing: border-box;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  width: 100%;
  height: 100%;
  @media screen and (min-width: ${(p) => p.configuration.breakpoints[p.breakpoint]}) {
    max-width: 21.875rem;
  }
  padding: ${({ onlyImage }) => (onlyImage ? '1.688rem' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${(p) => p.family || 'inherit'};
  .img {
    border-radius: ${({ onlyImage }) => (onlyImage ? '.25rem' : '0.25rem 0.25rem 0 0')};
    width: 100%;
    max-height: ${({ onlyImage }) => (onlyImage ? '100%' : '11.875rem')};
    height: 100%;
    object-fit: cover;
  }
  & > footer,
  > section {
    box-sizing: border-box;
  }
`;
