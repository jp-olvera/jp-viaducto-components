import styled from 'styled-components';
import StyledTab from '../../cells/Tab/StyledTab';

export const StyledGroupTab = styled.div < any > `
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  & ${StyledTab} {
    display: flex;
    justify-content: center;
    align-items: center;
    .tab-text {
      overflow: auto;
      text-align: center !important;
      display: flex;
      justify-content: center;
      align-items: center;
      & > p {
        color: ${(p) => p.configuration.colors[p.tabType].hover} !important;
      }
    }
    &:after {
      width: 0 !important;
      height: 0 !important;
    }
  }
  & .tabs {
    display: flex;
    gap: ${(p) => p.configuration.spacing[p.spacing]};
  }
  & .line {
    transition: 0.2s
      ${(p) => p.transition || p.configuration.transitionTimingFunction};
    height: 0.188rem;
    background-color: ${(p) => p.configuration.colors[p.tabType].hover} !important;
    position: sticky;
    bottom: ${(p) => (p.position === 'top' ? '100%' : 0)};
    left: 0;
  }
`;
