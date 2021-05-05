import styled, { css } from 'styled-components';
import config from '../../utils/config';

const StyledPill = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  align-items: center;
  display: inline-flex;
  background-color: ${(p) => p.background};
  border-radius: 100px;
  color: ${(p) => p.color};
  font-size: ${({ size }) => getSize(size)};
  height: 1.875rem;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  ${(p) =>
    getPadding(p.configuration.spacing, p.hasIcon, p.hasIconLead, p.onlyText)}
  @media screen and
    (min-width: ${({ configuration }) => configuration.breakpoints.xl}) {
    font-size: ${({ size }) => getSize(size, true)};
  }
  .span-icon {
    margin-left: ${({ configuration }) => configuration.spacing.micro};
  }

  .span-icon-lead {
    margin-right: ${({ configuration }) => configuration.spacing.micro};
  }
`;

const getPadding = (spacing, hasIcon, hasIconLead, onlyText) => {
  let padding = `0 ${spacing.xs}`;
  if (hasIcon && hasIconLead) {
    padding = `0 ${spacing.xl}`;
  }
  if (hasIconLead) {
    padding = `0 ${spacing.xs} 0 ${spacing.nano}`;
  }
  if (hasIcon) {
    padding = `0 ${spacing.nano} 0 ${spacing.xs}`;
  }
  if (onlyText) {
    padding = `0 ${spacing.xs}`;
  }

  return css`
    padding: ${padding};
  `;
};

const getSize = (size = 'md', max = false) => {
  switch (size) {
    case 'xxs':
      return max ? 'calc(0.5rem * 1.125)' : '0.5rem';
    case 'xs':
      return max ? 'calc(0.694rem * 1.125)' : '0.694rem';
    case 'sm':
      return max ? 'calc(0.83rem * 1.125)' : '0.83rem';
    case 'lg':
      return max ? 'calc(1.2rem * 1.125)' : '1.2rem';
    case 'md':
    default:
      return max ? 'calc(1rem * 1.125)' : '1rem';
  }
};

export default StyledPill;
