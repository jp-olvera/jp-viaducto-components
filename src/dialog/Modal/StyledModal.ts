import styled, { css, keyframes } from 'styled-components';
import { ConfigProps } from 'frontera-types';
import getElevation from '../../utils/getElevation';

const show = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(100%);
  }
`;
interface StyledModalProps {
  configuration: ConfigProps;
  isActive: boolean;
  backgroundColor?: string;
  elevation: number;
  elevationDirection: string;
  ref: any;
  radius: string;
  isClosing: boolean;
  size: 'sm' | 'md' | 'lg' | 'full' | string;
}
const StyledModal = styled.div<StyledModalProps>`
  animation: ${show} 230ms ease-out;
  background: ${(p) =>
    p.configuration.colors[p.backgroundColor || 'background'] || p.backgroundColor};
  border-radius: ${(p) => p.configuration.radius[p.radius]};
  max-width: 100%;
  min-height: ${(p) => (p.size === 'full' ? '100%' : '30%')};
  max-height: calc(100% - 96px);
  width: ${(p) => modalWidth(p.size)};
  overflow-x: auto;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  ${(p) =>
    p.isClosing &&
    css`
      transform: scale(0);
      transition: transform 230ms linear;
    `};
`;

export default StyledModal;
export const modalWidth = (width: 'sm' | 'md' | 'lg' | 'full' | string) => {
  switch (width) {
    case 'md':
      return `520px`;
    case 'sm':
      return `250px`;
    case 'lg':
      return `750px`;
    case 'full':
      return '100%';
    default:
      return width;
  }
};

/**
 * .modal-header {
    display: flex;
    border-bottom: 1px solid #eaedf3;
    border-radius: 5px 5px 0 0;

    background-color: ${({ backgroundColor }) => backgroundColor};
    border-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ configuration }) => `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-content {
    flex-grow: 1;
    overflow-y: auto;
    padding: ${({ configuration }) => `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
  .modal-bottom {
    border-top: 1px solid #eaedf3;
    display: flex;
    padding: ${({ configuration }) => `${configuration.spacing.md} ${configuration.spacing.lg}`};
  }
 */
