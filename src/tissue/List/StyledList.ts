import { ConfigProps } from 'ballena-types';
import styled from 'styled-components';

interface SLI {
  listStyle: string;
  config: ConfigProps;
  markerColor: string;
  verticalSpacing:
    | 'none'
    | 'nano'
    | 'micro'
    | 'tiny'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | 'xxxl';
}
export const StyledListDiv = styled.div<SLI>`
  list-style-type: ${(p) => p.listStyle};
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.config.spacing[p.verticalSpacing]};
  margin: 1em 0;
`;
export const StyledList = styled.ul<SLI>`
  list-style-type: ${(p) => p.listStyle};
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.config.spacing[p.verticalSpacing]};
  li {
    &::marker {
      transition: color 0.2s ease;
      color: ${(p) => p.config.colors.text[p.markerColor] || p.markerColor} !important;
    }
  }
`;
export const FlexList = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledListItemDiv = styled.div``;
export const StyledListItem = styled.li<{
  config: ConfigProps;
}>``;
