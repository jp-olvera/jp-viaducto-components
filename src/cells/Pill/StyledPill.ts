import styled, { css } from 'styled-components';

import { getSize } from '../../utils/getSizes';

const StyledPill = styled.div < any > `
  font-family: ${(p) => p.family || p.configuration.fontFamily};
  align-items: center;
  display: inline-flex;
  box-sizing: border-box;
  background-color: ${(p) => p.background || p.configuration.colors.background};
  border-radius: ${(p) => (p.circleBorder === true ? '6.25rem' : p.configuration.radius[p.radius])};
  color: ${(p) => p.configuration.colors.text[p.color]
    || p.color
    || p.configuration.colors.text.dark};
  font-size: ${({ size }) => getSize(size)};
  height: 1.875rem;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  border: ${(p) => (p.borderColor !== null ? `0.063rem solid ${p.borderColor}` : 'transparent')};
  ${(p) => getPadding(p.configuration.spacing, p.hasIcon, p.hasIconLead, p.onlyText)}
  .span-icon {
    margin-left: ${({ configuration }) => configuration.spacing.micro};
  }

  .span-icon-lead {
    margin-right: ${({ configuration }) => configuration.spacing.micro};
  }
`;

const getPadding = (
  spacing: { xs: string; xl: string; nano: string },
  hasIcon: boolean,
  hasIconLead: boolean,
  onlyText: boolean,
) => {
  let padding = `0 ${spacing.xs}`;
  /* istanbul ignore else */
  if (hasIcon && hasIconLead) {
    padding = `0 ${spacing.xl}`;
  }
  /* istanbul ignore else */
  if (hasIconLead) {
    padding = `0 ${spacing.xs} 0 ${spacing.nano}`;
  }
  /* istanbul ignore else */
  if (hasIcon) {
    padding = `0 ${spacing.nano} 0 ${spacing.xs}`;
  }
  /* istanbul ignore else */
  if (onlyText) {
    padding = `0 ${spacing.xs}`;
  }

  return css`
    padding: ${padding};
  `;
};

export default StyledPill;
