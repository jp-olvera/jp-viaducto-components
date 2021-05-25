import styled, { css } from 'styled-components';

const StyledHideable = styled.div < any > `
  display: ${(p) => (p.after ? 'none' : 'contents')};
  ${(p) => p.visibleOn !== null
    && getVisibility(p.configuration.breakpoints, p.visibleOn, p.after)}
`;

const getVisibility = (breakpoints, visibleOn, after) => {
  const breakpoint = breakpoints[visibleOn];

  return css`
    @media (min-width: ${breakpoint}) {
      display: ${after ? 'contents' : 'none'};
    }
  `;
};

export default StyledHideable;
