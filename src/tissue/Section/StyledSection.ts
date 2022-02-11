import styled from 'styled-components';

export const StyledSection = styled.div<{ sections: number }>`
  width: 100%;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .frontera-section-content-child {
    width: 100% !important;
    height: 100% !important;
  }
`;

interface SSI {
  divided: number;
  background: string;
}
export const Subsection = styled.div<SSI>`
  width: calc(100% / ${(p) => p.divided});
  height: 100%;
  background: ${(p) => p.background};
`;

export const SectionChild = styled.div<{ maxWidth: string }>`
  position: absolute;
  width: 100%;
  max-width: ${(p) => p.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;
