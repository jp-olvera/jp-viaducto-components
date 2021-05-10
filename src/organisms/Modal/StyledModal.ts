import styled, { css } from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledModalI {
  readonly isActive: boolean;
  readonly maxHeight: string;
  readonly elevation: number;
  readonly elevationDirection: string;
  readonly maxWidth: string;
  readonly breakpoint: string;
  readonly backgroundColor: string;
  readonly configuration: any;
  readonly ref: any;
}
const StyledModal = styled.div<StyledModalI>`
  background: white;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  /* border: 1px solid #eaedf3; */
  border-radius: 5px;
  flex-direction: column;
  min-height: 30%;
  height: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  width: 100%;
  z-index: 1;

  ${(p) => getElevation(p.elevation, p.elevationDirection)}

  ${({ maxWidth, breakpoint }) => getMedia(maxWidth, breakpoint)}

  .modal-header {
    display: flex;
    border-bottom: 1px solid #eaedf3;
    border-radius: 5px 5px 0 0;

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-bottom {
    border-top: 1px solid #eaedf3;
    display: flex;
    padding: ${({ configuration }) =>
      `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
`;

const getMedia = (maxWidth: string, breakpoint: string) => {
  if (maxWidth && breakpoint) {
    return css`
      @media (min-width: ${breakpoint}) {
        max-width: ${maxWidth};
      }
    `;
  }
  return css``;
};

export default StyledModal;
