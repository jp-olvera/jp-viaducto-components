import styled, { css } from 'styled-components';

const StyledTab = styled.button < any > `
  font-family: ${(p) => p.fontFamily || p.configuration.fontFamily};
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  height: ${({ configuration, verticalSpacing }) => `
     calc(
      ${configuration.spacing[verticalSpacing] || configuration.spacing.sm} * 5
    );
  `};
  min-height: calc(${({ configuration }) => configuration.spacing.micro} * 5);
  position: relative;

  padding: 0
    ${(p) => p.configuration.spacing[p.horizontalSpacing]
      || p.configuration.spacing.none};
  .tab-text {
    transition: all 0.2s ease;
    transform: translateY(0);
  }
  .tab-icon-span {
    margin-right: ${(p) => (p.lead ? p.configuration.spacing[p.iconSpacing] : '0')};
    margin-left: ${(p) => (!p.lead ? p.configuration.spacing[p.iconSpacing] : '0')};
    display: inline;
  }

  &:not([hover]):after {
    background-color: ${({ color }) => color};
    content: '';
    height: ${(p) => (p.position === 'right' || p.position === 'left' ? '100%' : '0.188rem')};
    width: ${(p) => (p.position === 'right' || p.position === 'left'
    ? '0.188rem'
    : p.lineWidth)};
    left: ${(p) => (p.position === 'right' ? '100%' : '0')};
    bottom: ${(p) => (p.position === 'top' ? '100%' : '0')};
    position: absolute;
  }

  &:hover {
    transition: all 0.2s ease;
    &:after {
      background-color: ${({ hoverColor }) => hoverColor};
    }
    & > .tab-text {
      transition: all 0.2s ease;
    }
  }

  &:active,
  :focus {
    ${(p) => activeState(p)};
  }

  ${(p) => p.active && activeState(p)};
`;

const activeState = (props: {
  transition: string;
  configuration: { transitionTimingFunction: string };
  hoverColor: string;
  position: string;
  activeTextColor: string;
  lineWidth: string;
}) => css`
  transition: all 0.2s ease;
  &:after {
    background-color: ${props.hoverColor} !important;
    height: ${props.position === 'right' || props.position === 'left'
    ? '100%'
    : '0.25rem'} !important;
    width: ${props.position === 'right' || props.position === 'left'
    ? '0.25rem'
    : props.lineWidth} !important;
  }
  & > .tab-text > p {
    color: ${props.activeTextColor} !important;
    font-weight: 500 !important;
    transition: all 0.2s ease !important;
  }
`;
export default StyledTab;
