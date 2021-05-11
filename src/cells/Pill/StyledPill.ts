import styled, { css } from 'styled-components';

import { getPillSize } from '../../utils/getSizes';

interface StyledPillI {
  readonly family: string;
  readonly background: string;
  readonly size: string;
  readonly verticalAlign: string;
  readonly configuration: any;
  readonly hasIcon: boolean;
  readonly hasIconLead: boolean;
  readonly onlyText: boolean;
}
const StyledPill = styled.div<StyledPillI>`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Manrope&display=swap');
  font-family: ${({ family }) =>
    family ? `'${family}', sans-serif` : "'Manrope', sans-serif;"};
  align-items: center;
  display: inline-flex;
  background-color: ${(p) => p.background};
  border-radius: 100px;
  color: ${(p) => p.color};
  font-size: ${({ size }) => getPillSize(size)};
  height: 1.875rem;
  vertical-align: ${({ verticalAlign }) => verticalAlign};
  ${(p) =>
    getPadding(p.configuration.spacing, p.hasIcon, p.hasIconLead, p.onlyText)}
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

export default StyledPill;
