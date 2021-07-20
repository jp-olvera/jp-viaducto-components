import { ConfigProps } from 'ballena-types';
import styled from 'styled-components';
import StyledTab from '../../cells/Tab/StyledTab';

interface SGTI {
  horizontalSpacing?: string;
  verticalSpacing?: string;
  configuration: ConfigProps;
  count: number;
  transition?: string;
  tabType: string;
  position: string;
  index: number;
  spacing: string;
}

export const StyledGroupTab = styled.div < SGTI > `
  * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  width: max-content;
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
    transition: 0.35s ${(p) => p.transition};
    height: 0.188rem;
    background-color: ${(p) => p.configuration.colors[p.tabType].hover} !important;
    position: sticky;
    bottom: ${(p) => (p.position === 'top' ? '100%' : 0)};
  }
`;
