import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

export const StyledNormalCard = styled.div < any > `
  border: ${(p) => p.configuration.border};
  background-color: ${(p) => p.configuration.colors.background};
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  width: 100%;
  height: 100%;
  padding: ${({ onlyImage }) => (onlyImage ? '1.688rem' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  .img {
    border-radius: ${(p) => p.configuration.radius[p.radius]};
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
