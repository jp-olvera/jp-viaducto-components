import styled from 'styled-components';

interface SideI{
  configuration?: any;
  transition?: string;
}

const StyledSidebarSection = styled.div<SideI>`
  padding: 0;
  min-width: 16.625rem;
  width: 100%;
  box-sizing: border-box;
  & > * {
    overflow-x: hidden;
  }

  hr {
    border-color: rgba(23, 125, 239, 0.5);
    background-color: rgba(23, 125, 239, 0.5);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
    box-sizing: border-box;
    position: relative;
    user-select: none;
  }
  .b {
    cursor: pointer;
    &:hover,
    :focus {
      color: rgba(23, 125, 239, 1);
      background-color: rgba(23, 125, 239, 0.1);
      &::before {
        content: '';
        border-left: 3px solid rgba(23, 125, 239);
        position: absolute;
        height: 100%;
        left: 0px;
        top: 0px;
      }
    }
  }

  .c {
    display: flex;
    justify-content: flex-start;
  }

  .d {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .dropdown {
    cursor: pointer;
  }

  .a {
    user-select: none;
  }

  .nested-list {
    height: 100%;
    opacity: 1;
    overflow: hidden;
    transition: all .3s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  }

  .toggleMenu {
    cursor: pointer;
  }
  .submenu {
    width: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    transform: translateX(100%);
    transition: transform 0.2s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    height: -webkit-fill-available;
    background-color: white;
    @media screen and (min-width: 49rem) {
      top: 1.2rem;
    }
  }
  .active {
    width: 100%;
    transform: translateX(0);
    transition: transform 0.2s ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    & > button {
      width: 100%;
      text-align: left;
      background-color: rgba(23, 125, 239, 0.1);
      cursor: pointer;
      height: 4rem;
      border: none;
      font-size: 1rem;
      color: rgba(23, 125, 239, 1);
      & :active {
        background-color: white;
        border: none;
        font-size: 1rem;
      }
    }
  }
`;
export default StyledSidebarSection;
