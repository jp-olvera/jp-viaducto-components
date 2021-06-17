import styled, { css } from 'styled-components';

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
    bottom: 0;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  &:hover {
    transition: all 0.2s
      ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
    &:after {
      content: '';
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ hoverColor }) => hoverColor};
    }
    & > .tab-text {
      transition: all 0.2s
        ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
      transform: translateY(
        -${({ configuration, verticalSpacing }) => configuration.spacing[verticalSpacing] || configuration.spacing.sm}
      );
    }
  }

  &:active,
  :focus {
    p {
      color: ${({ activeTextColor }) => activeTextColor};
    }
    .tab-text {
      transition: all 0.2s
        ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
      transform: translateY(
        -${({ configuration, verticalSpacing }) => configuration.spacing[verticalSpacing] || configuration.spacing.sm}
      );
    }

    &:after {
      content: '';
      transition: all 0.2s
        ${({ configuration, transition }) => transition || configuration.transitionTimingFunction};
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ activeColor }) => activeColor};
    }
  }
`;

const getPaddingTransition = (props) => css`
  padding: 0
    ${props.configuration.spacing[props.horizontalSpacing]
    || props.configuration.spacing.none};
  transition: padding 0.2s
    ${props.transition || props.configuration.transitionTimingFunction};
`;
export default StyledTab;
