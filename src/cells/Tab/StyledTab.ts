import styled, { css } from "styled-components";
interface StyledTabI {
  readonly activeTextColor: string;
  readonly activeColor: string;
  readonly onClick: any;
  readonly hoverColor?: any;
  readonly horizontalSpacing?: null | string;
  readonly verticalSpacing: string;
  readonly configuration: any;
	readonly lead: boolean;
  readonly iconSpacing: string;
	
}

const StyledTab = styled.button<StyledTabI>`
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  height: calc(${({ configuration, verticalSpacing }) => configuration.spacing[verticalSpacing] || configuration.spacing.sm} * 5);
  min-height: calc(${({ configuration }) => configuration.spacing.micro} * 5);
  position: relative;
	
  ${(props) => getPaddingTransition(props)};
	.tab-text{
    transition: all 0.2s ease-in-out;
    transform: translateY(0);
	}
	.tab-icon-span{
		margin-right: ${(p) => p.lead ? p.configuration.spacing[p.iconSpacing] : '0'};
    margin-left: ${(p) => !p.lead ? p.configuration.spacing[p.iconSpacing] : '0'};
		display: inline;
	}
  & :after {
    background-color: ${({ color }) => color};
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  & :hover {
    transition: all 0.2s ease-in-out;
    & :after {
      content: '';
      height: 3px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ hoverColor }) => hoverColor};
    }
    & .tab-text{
      transition: all 0.2s ease-in-out;
      transform: translateY(-${({ configuration, verticalSpacing }) => configuration.spacing[verticalSpacing] || configuration.spacing.sm});
    }
  }

  & :active,:focus {
		p {
      color: ${({ activeTextColor }) => activeTextColor};
		}
    .tab-text {
      transition: all 0.2s ease-in;
      transform: translateY(-${({ configuration, verticalSpacing }) => configuration.spacing[verticalSpacing] || configuration.spacing.sm})
    }

    &:after {
      content: "";
      transition: all 0.2s ease-in;
      height: 4px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ activeColor }) => activeColor};
    }
  }
`;

const getPaddingTransition = (props) => {
  return css`
      padding: 0 ${props.configuration.spacing[props.horizontalSpacing] || props.configuration.spacing.none};
      transition: padding 0.2s ease-in;
    `;
};
export default StyledTab;
