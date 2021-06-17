import styled, { css, keyframes } from 'styled-components';

const show = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const hide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

interface SideI {
  configuration?: any;
  transition?: string;
}

const StyledSidebarSection = styled.div < SideI > `
  padding: 0;
  /* min-width: 16.625rem; */
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
    transition: all 0.3s
      ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
  }

  .toggleMenu {
    cursor: pointer;
  }
`;

const getDecoration = () => css`
  color: rgba(23, 125, 239, 1);
  background-color: rgba(23, 125, 239, 0.1);
  &::after {
    content: '';
    border-left: 3px solid rgba(23, 125, 239);
    position: absolute;
    height: 100%;
    right: 0px;
    top: 0px;
  }
`;
interface MenuItemProps {
  configuration: any;
  active: boolean;
  nested: boolean;
}

export const MenuItem = styled.li < MenuItemProps > `
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  position: relative;
  user-select: none;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  appearance: none;
  color: inherit;
  a {
    text-decoration: none;
    appearance: none;
    color: inherit;
  }

  &:hover,
  :focus {
    ${getDecoration()};
  }
  ${(p) => p.active && getDecoration()};

  padding: ${(p) => p.configuration.spacing.sm}
    ${(p) => (p.nested ? p.configuration.spacing.lg : p.configuration.spacing.sm)};
`;
interface SubmenuProps {
  configuration: any;
  transition: string;
  isClosing: boolean;
}

export const Submenu = styled.ul < SubmenuProps > `
  background-color: white;
  height: -webkit-fill-available;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  & > button {
    background-color: rgba(23, 125, 239, 0.1);
    border: none;
    color: rgba(23, 125, 239, 1);
    cursor: pointer;
    font-size: 1rem;
    height: 4rem;
    margin: none;
    padding: 0 ${(p) => p.configuration.spacing.sm};
    text-align: left;
    width: 100%;
    & :active {
      background-color: white;
      border: none;
      font-size: 1rem;
    }
  }
  ${(p) => (p.isClosing
    ? css`
          animation: ${hide} 230ms linear;
        `
    : css`
          animation: ${show} 230ms
            ${p.transition || p.configuration.transitionTimingFunction};
        `)};
`;

export const StyledMenuTitle = styled.li < any > `
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  position: relative;
  user-select: none;
  width: 100%;
  cursor: pointer;
  padding: ${(p) => p.configuration.spacing.sm};
  overflow: hidden;
  ${(p) => (p.type === 'menu' || p.type === 'dropdown'
    ? css`
          &::after {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
            background-position: right 0 center;
            background-repeat: no-repeat;
            background-size: 1rem;
            content: '';
            flex-shrink: 0;
            height: 1rem;
            margin-left: auto;
            transition: transform 0.2s ease;
            transform: ${p.expanded ? 'rotate(-180deg)' : 'rotate(0deg)'};
            width: 1rem;
          }
        `
    : css``)};

  &:hover {
    color: rgba(23, 125, 239, 1);
    background-color: rgba(23, 125, 239, 0.1);
  }
`;
export default StyledSidebarSection;
