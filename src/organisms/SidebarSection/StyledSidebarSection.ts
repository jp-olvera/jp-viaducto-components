import styled, { css, keyframes } from 'styled-components';
import { ConfigProps } from 'ballena-types';

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
  }
`;

interface SideI {
  configuration: ConfigProps;
  transition?: string;
}

const StyledSidebarSection = styled.div < SideI > `
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  & > * {
    overflow-x: hidden;
  }
  background-color: ${(p) => p.configuration.colors.background};

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
    transition: all 0.3s ${({ transition }) => transition};
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
  configuration: ConfigProps;
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

  padding: ${(p) => `${p.configuration.spacing.sm} ${
    p.nested ? p.configuration.spacing.lg : p.configuration.spacing.sm
  }`};
`;
interface SubmenuProps {
  configuration: ConfigProps;
  transition: string;
  isClosing: boolean;
  isActive: boolean;
}

export const Submenu = styled.ul < SubmenuProps > `
  background-color: ${(p) => p.configuration.colors.background};
  opacity: ${(p) => (p.isActive ? 1 : 0)};
  height: 100%;
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
    &:active {
      background-color: ${(p) => p.configuration.colors.background};
      border: none;
      font-size: 1rem;
    }
  }
  ${(p) => (p.isClosing
    ? css`
          animation: ${hide} 250ms ease;
        `
    : css`
          animation: ${show} 230ms ${p.transition};
        `)};
`;

export const StyledMenuTitle = styled.div < any > `
  align-items: center;
  align-content: center;
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
  &:hover {
    color: rgba(23, 125, 239, 1);
    background-color: rgba(23, 125, 239, 0.1);
  }
`;

export default StyledSidebarSection;
