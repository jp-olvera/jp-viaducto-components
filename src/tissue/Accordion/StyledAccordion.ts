import styled from 'styled-components';

interface SAI {
  paddingX: string;
  paddingY: string;
  expanded: boolean;
  transition?: string | null;
  configuration?: any;
}

export const StyledAccordionItem = styled.div < SAI > `
  box-sizing: border-box;
  width: 100%;

  .accordion-header {
    align-items: center;
    background: transparent;
    border: none;
    border-bottom: 0.063rem solid #ddd;
    border-right: 0.063rem solid #ddd;
    border-left: 0.063rem solid #ddd;
    cursor: pointer;
    display: flex;
    margin: 0 !important;
    padding: ${(p) => p.paddingY} ${(p) => p.paddingX};
    overflow: hidden;
    text-align: left;
    width: 100%;
  }
  .accordion-header::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-position: right 0 center;
    background-repeat: no-repeat;
    background-size: 1rem;
    content: '';
    flex-shrink: 0;
    height: 1rem;
    margin-left: auto;
    transition: transform 0.2s
      ${(p) => p.transition || p.configuration.transitionTimingFunction};
    transform: ${(p) => (p.expanded ? 'rotate(-180deg)' : 'rotate(0deg)')};
    width: 1rem;
  }

  .chevron {
    align-items: center;
    display: flex;
    margin-left: auto;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  .section {
    border-bottom: 0.063rem solid #ddd;
    border-right: 0.063rem solid #ddd;
    border-left: 0.063rem solid #ddd;
    box-sizing: border-box;
    overflow: hidden;
    opacity: 1;
    transform-origin: top center;
  }
`;

const StyledAccordion = styled.div`
  border-top: 0.063rem solid #ddd;
  border-radius: 0.313rem;
  box-sizing: border-box;
  width: 100%;
`;

export default StyledAccordion;
