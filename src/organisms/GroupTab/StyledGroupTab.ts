import styled from 'styled-components';
import StyledTab from '../../cells/Tab/StyledTab';

export const StyledGroupTab = styled.div < any > `
  * {
    box-sizing: border-box;
  }
  width: fit-content;
  overflow: hidden;
  & ${StyledTab} {
    width: 6.25rem !important;
    padding: 0 ${(p) => p.configuration.spacing[p.horizontalSpacing]};
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
        line-break: anywhere;
        word-break: break-all;
        color: ${(p) => p.configuration.colors[p.tabType].hover} !important;
      }
    }
    &:after {
      width: 0% !important;
      height: 0 !important;
    }
  }
  & .tabs {
    display: flex;
  }
  & .line {
    transition: 0.2s
      ${(p) => p.transition || p.configuration.transitionTimingFunction};
    width: 6.25rem;
    height: 0.188rem;
    background-color: ${(p) => p.configuration.colors[p.tabType].hover} !important;
    position: sticky;
    bottom: ${(p) => (p.position === 'top' ? '100%' : 0)};
    left: 0;
  }
`;
