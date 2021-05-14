import styled from 'styled-components';
import getElevation from '../../utils/getElevation';

interface StyledDrawerI {
  readonly elevation: number;
  readonly elevationDirection: string;
  readonly active: boolean;
  readonly configuration: any;
  readonly transition?: string;
};

const StyledDrawer = styled.div<StyledDrawerI>`
  background: white;
  box-shadow: rgb(255 255 255) 0 5rem 0,
    rgb(9 30 66 / 8%) -0.313rem -0.125rem 0.438rem;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  ${(p) => getElevation(p.elevation, p.elevationDirection)}
  transition: transform 0.3s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  transform: ${(props) =>
    props.active ? 'translateX(0)' : 'translateX(100%)'};
  width: 100%;

  @media (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    width: 22.25rem;
    transform: ${(props) =>
    props.active ? 'translateX(0)' : 'translateX(100%)'};
  }
  .close {
    padding: 0.48rem 1.875rem 0.48rem 1.875rem;
    position: sticky;
    top: 0;
    background: white;
  }
  .drawer-card {
    border-radius: 0.25rem;
    border: 0.063rem solid #eaedf3;
  }

  .drawer-content {
    padding: 0.48rem 1.875rem;
  }
`;

export default StyledDrawer;
