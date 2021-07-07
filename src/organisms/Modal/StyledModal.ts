import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledModalProps {
  configuration: any;
  isActive: boolean;
  backgroundColor: string;
  elevation: number;
  elevationDirection: string;
  ref: any;
  radius: string;
}
const StyledModal = styled.div < StyledModalProps > `
  background: ${(p) => p.backgroundColor};
  border-radius: ${(p) => p.configuration.radius[p.radius]};
  max-width: 100%;
  max-height: calc(100% - 96px);
  min-height: 30%;
  width: 520px;
  z-index: 1;
  overflow-x: auto;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
`;

export default StyledModal;

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
