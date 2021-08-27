/* eslint-disable radix */
import { ConfigProps } from 'ballena-types';
import styled, { css } from 'styled-components';

interface StyledFormItemProps {
  configuration: ConfigProps;
  size: string;
  family: string | undefined;
  border: string;
  borderColor: string;
  disabled: boolean;
}
export const StyledFormItem = styled.div < StyledFormItemProps > `
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  background-color: ${({ disabled, configuration }) => (disabled ? configuration.colors.disableColor : configuration.colors.background)};
  ${({ border, borderColor }) => getBorderStyle(border, borderColor)};
  
  select[multiple]{
    height: auto;
    label {
      top: -1em;
    }
  }
  select:not([multiple]) {
    padding-right: ${(p) => p.configuration.spacing.lg};
    background: ${(p) => (`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${p.color?.replace('#', '%23')
            || p.configuration.colors.text.dark.replace('#', '%23')}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");`)};
    background-position: right ${(p) => p.configuration.spacing.sm} center;
    background-repeat: no-repeat;
    background-size: 1rem 0.75rem;
    -webkit-appearance: none;
    -moz-appearance: none !important;
  }
  
  .ballena-input {
    background-color: inherit;
    border: none;
    box-sizing: border-box;
    color: ${(p) => p.configuration.colors.text.dark};
    font-family: ${(p) => p.family || p.configuration.fontFamily};
    height: ${({ size, configuration }) => configuration.controlHeight[size]};
    overflow: hidden !important;
    outline-color: ${(p) => p.borderColor};
    padding: 0px 0px;
    padding-left: ${(p) => p.configuration.spacing.sm};
    padding-right: ${(p) => p.configuration.spacing.sm};

    width: 100%;
    ${(p) => inputFontStyle(p.size)};
  }

  .label{
    background: ${({ border }) => (border === 'outside' ? 'transparent' : 'inherit')};
    color: ${(p) => p.configuration.colors.text.dark};
    max-width: 95%;
    left: ${(p) => (p.configuration.spacing.micro)};
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    transition: transform 230ms ease, left 230ms ease;
    left: ${(p) => p.configuration.spacing.sm};

  }

  .ballena-input[required] ~ label{
    padding-left: 0.625rem;
    ::after{
      content: "*";
      position: absolute;
      color: ${(p) => p.configuration.colors.text.danger};
      left: 0px;
    }
  }

  .ballena-input[type='number'].ballena-input:not(placeholder-shown).ballena-input:not([value=""]) ~ label,
  .ballena-input:read-only ~ .label{
    ${(p) => putLabelOutside(p.size, p.border, p.configuration)};
  }

  .ballena-input:disabled {
    cursor: not-allowed;
    background-color: ${(p) => p.configuration.colors.disableColor};
    pointer-events: none;
    user-select: none;
  }

  
  .ballena-input ~ .active,
  .ballena-input:placeholder-shown ~ label,
  .ballena-input[type='date'] ~ label, .ballena-input[type='time'] ~ label {
    ${(p) => putLabelOutside(p.size, p.border, p.configuration)};
  }
`;

export const Caption = styled.span < { configuration: ConfigProps } > `
  color: ${(p) => p.configuration.colors.disableColor};
  transform: scale(80%);
`;

export const getBorderStyle = (border: string, color: string) => {
  switch (border) {
    case 'bottom':
      return css`
        border: 0.031rem solid transparent;
        border-bottom: 0.031rem solid ${color};
      `;
    case 'none':
      return css`
        border: 0.031rem solid transparent;
      `;
    case 'overlap':
    default:
      return css`
        border: 0.031rem solid ${color};
      `;
  }
};

export const putLabelInside = (size: string, configuration: ConfigProps) => {
  switch (size) {
    case 'xsmall':
      return css`
        font-size: 0.75rem;
        left: ${`${configuration.spacing.sm}` || '0'};
        /* line-height: 1.125rem; */
      `;
    case 'small':
      return css`
        font-size: 0.75rem;
        left: ${`${configuration.spacing.sm}` || '0'};
        /* line-height: 1.125rem; */
      `;
    case 'large':
      return css`
        font-size: 1.20rem;
        left: ${`${configuration.spacing.sm}` || '0'};
        /* line-height: 1.75rem; */
      `;
    default:
      return css`
        font-size: 1rem;
        left: ${`${configuration.spacing.sm}` || '0'};
        /* line-height: 1.5rem; */
      `;
  }
};

const putLabelOutside = (size: string, border: string, configuration: ConfigProps) => {
  switch (size) {
    case 'xsmall':
      return css`
        font-size: 0.625rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        top: -1.188rem;
        /* line-height: 1.125rem; */
      `;
    case 'small':
      return css`
        background: ${border === 'overlap' ? 'inherit' : 'transparent'};
        font-size: 0.625rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        transform: ${border === 'overlap' ? 'translateY(-1.188rem)' : 'translateY(-1.688rem)'};
        /* line-height: 1.125rem; */
        
      `;
    case 'large':
      return css`
        background: ${border === 'overlap' ? 'inherit' : 'transparent'};
        font-size: 1rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        transform: ${border === 'overlap' ? 'translateY(-1.688rem)' : 'translateY(-2.444rem)'};
        /* line-height: 1.5rem; */
      `;
    default:
      return css`
        background: ${border === 'overlap' ? 'inherit' : 'transparent'};
        font-size: 1rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        transform: ${border === 'overlap' ? 'translateY(-1.375rem)' : 'translateY(-2.063rem)'};
        /* line-height: 1.5rem; */
      `;
  }
};

const inputFontStyle = (size) => {
  switch (size) {
    case 'xsmall':
      return css`
        font-size: 0.75rem;
        line-height: 1.125rem;
      `;
    case 'small':
      return css`
        font-size: 1rem;
        line-height: 1.125rem;
      `;
    case 'large':
      return css`
        font-size: 1.20rem;
        line-height: 1.75rem;
      `;
    default:
      return css`
        font-size: 1rem;
        line-height: 1.5rem;
      `;
  }
};
