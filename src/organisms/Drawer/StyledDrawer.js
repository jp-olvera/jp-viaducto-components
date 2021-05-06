import styled, { keyframes } from 'styled-components';

const StyledDrawer = styled.div`
  background: white;
  box-shadow: rgb(255 255 255) 0 5rem 0,
    rgb(9 30 66 / 8%) -0.313rem -0.125rem 0.438rem;
  height: 100%;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: ${(props) =>
    props.active ? 'translateX(0)' : 'translateX(100%)'};
  width: 100%;

  @media (min-width: ${({ configuration }) => configuration.breakpoints.sm}) {
    width: 22.25rem;
    transform: ${(props) =>
      props.active ? 'translateX(0)' : 'translateX(100%)'};
  }
  /* @media (min-width: ${({ configuration }) =>
    configuration.breakpoints.xl}) {
    display: block;
    position: fixed;
    transform: translate(0);
  } */
  .close {
    padding: 0.48rem 1.875rem 0.48rem 1.875rem;
    position: sticky;
    top: 0;
    background: white;
    /* @media (min-width: ${({ configuration }) =>
      configuration.breakpoints.xl}) {
      display: none;
    } */
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
