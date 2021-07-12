import styled, { css } from 'styled-components';
import { ConfigProps } from 'ballena-types';

const StyledTab = styled.button < any > `
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  ${({ configuration, verticalSpacing }) => css`
    height: calc(
      ${configuration.spacing[verticalSpacing] || configuration.spacing.sm} * 5
    );
  `};
  min-height: calc(${({ configuration }) => configuration.spacing.micro} * 5);
  position: relative;

  ${(props) => getPaddingTransition(props)};
  .tab-text {
    transition: all 0.2s
      ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
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
    transition: all 0.2s
      ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    &:after {
      background-color: ${({ hoverColor }) => hoverColor};
    }
    & > .tab-text {
      transition: all 0.2s
        ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    }
  }

  &:active,
  :focus {
    ${(p) => activeState(p)};
  }

  ${(p) => p.active && activeState(p)};
`;

const getPaddingTransition = (props: {
  configuration: ConfigProps;
  transition: string;
  horizontalSpacing: string;
}) => css`
  padding: 0
    ${props.configuration.spacing[props.horizontalSpacing]
    || props.configuration.spacing.none};
  transition: padding 0.2s
    ${props.transition || props.configuration.transitionTimingFunction};
`;

const activeState = (props: {
  transition: string;
  configuration: { transitionTimingFunction: string };
  hoverColor: string;
  position: string;
  activeTextColor: string;
  lineWidth: string;
}) => css`
  transition: all 0.2s
    ${props.transition || props.configuration.transitionTimingFunction};
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
    transition: all 0.2s
      ${props.transition || props.configuration.transitionTimingFunction} !important;
  }
`;
export default StyledTab;
