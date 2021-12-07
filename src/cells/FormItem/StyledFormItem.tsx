/* eslint-disable radix */
import { ConfigProps } from 'ballena-types';
import { HouseSimple, ThermometerCold } from 'phosphor-react';
import styled, { css } from 'styled-components';
import { getAllDaysInMonth } from 'utils/getDateDifference';

interface StyledFormItemProps {
  configuration: ConfigProps;
  size: string;
  family: string | undefined;
  border: string;
  borderColor: string;
  hasPrefix: boolean;
  hasSuffix: boolean;
  isValid: boolean | null;
  radius: 'none' | 'sm' | 'md' | 'lg';
}
export const StyledFormItem = styled.div<StyledFormItemProps>`
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: ${({ size, configuration }) => configuration.controlHeight[size]};

  select[multiple] {
    height: auto;
    label {
      top: -1em;
    }
  }
  select:not([multiple]) {
    padding-right: ${(p) => p.configuration.spacing.lg};
    background: ${(p) =>
      `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='${
        p.color?.replace('#', '%23') || p.configuration.colors.text.dark.replace('#', '%23')
      }' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");`};
    background-position: right ${(p) => p.configuration.spacing.sm} center;
    background-repeat: no-repeat;
    background-size: 1rem 0.75rem;
    -webkit-appearance: none;
    -moz-appearance: none !important;
  }
  .dark-decoration {
    background-color: ${(p) => p.borderColor};
  }

  .ballena-input {
    background-color: ${(p) => p.configuration.colors.background};
    box-sizing: border-box;
    border-radius: unset;
    border: none;
    color: ${(p) => p.configuration.colors.text.dark};
    font-family: ${(p) => p.family || p.configuration.fontFamily};
    flex-grow: 1;
    height: 100%;
    overflow: hidden !important;
    outline: none;
    padding: 0px ${(p) => p.configuration.spacing.sm};
    ${(p) => inputFontStyle(p.size)};
    ${(p) =>
      getIsValidBorder(
        p.isValid,
        p.configuration.colors.success.click,
        p.configuration.colors.danger.click
      )};
    ${(p) => getInputBorderStyle(p.border, p.borderColor, p.hasPrefix, p.hasSuffix)};
    ${(p) =>
      getBorderRadius(
        p.border,
        p.hasPrefix,
        p.hasSuffix,
        p.radius,
        p.configuration.radius,
        false,
        false
      )};
  }
  /* .ballena-input:valid,
  .ballena-input:valid ~ .ballena-prefix-input,
  .ballena-input:valid ~ .ballena-suffix-input {
    border-color: ${(p) => p.configuration.colors.success.click};
  } */

  /* .ballena-input:invalid,
  .ballena-input:invalid ~ .ballena-prefix-input,
  .ballena-input:invalid ~ .ballena-suffix-input {
    border-color: ${(p) => p.configuration.colors.danger.click};
  } */
  label {
    color: ${(p) => p.configuration.colors.text.dark};
    font-family: ${(p) => p.family || p.configuration.fontFamily};
    left: ${(p) => (p.hasPrefix ? '2.408rem' : p.configuration.spacing.sm)};
    max-width: 95%;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    transition: transform 230ms ease, left 230ms ease;
    cursor: text;
    white-space: nowrap;
    ${(p) => putLabelOutside(p.size, p.border, p.configuration)};
  }

  .ballena-input[required] ~ label {
    padding-left: 0.625rem;
    ::after {
      content: '*';
      position: absolute;
      color: ${(p) => p.configuration.colors.text.danger};
      left: 0px;
    }
  }

  .ballena-input[type='number'].ballena-input:not(placeholder-shown).ballena-input:not([value=''])
    ~ label,
  .ballena-input:read-only ~ label {
    ${(p) => putLabelOutside(p.size, p.border, p.configuration)};
  }

  .ballena-input:disabled,
  .ballena-input:disabled ~ .ballena-prefix-input,
  .ballena-input:disabled ~ .ballena-suffix-input {
    cursor: not-allowed;
    background-color: ${(p) => p.configuration.colors.disableColor};
    border-color: ${(p) => p.configuration.colors.disableColor};
    opacity: 1;
  }
  .ballena-input:disabled ~ label {
    background-color: ${(p) =>
      p.border === 'overlap'
        ? p.configuration.colors.disableColor
        : p.configuration.colors.background} !important;
  }

  .ballena-prefix-input {
    align-items: center;
    border: none;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    min-width: 1.632rem;
    order: -1;
    padding-left: 0.694rem;
    padding-right: 0.694rem;
    ${(p) =>
      getIsValidBorder(
        p.isValid,
        p.configuration.colors.success.click,
        p.configuration.colors.danger.click
      )};
    ${(p) => getPrefixBorderStyle(p.border, p.borderColor)};
    ${(p) =>
      getBorderRadius(p.border, false, false, p.radius, p.configuration.radius, true, false)};
  }
  .ballena-suffix-input {
    align-items: center;
    border: none;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    min-width: 1.632rem;
    order: 2;
    padding-right: 0.694rem;
    padding-left: 0.694rem;
    ${(p) =>
      getIsValidBorder(
        p.isValid,
        p.configuration.colors.success.click,
        p.configuration.colors.danger.click
      )};
    ${(p) => getSuffixBorderStyle(p.border, p.borderColor)};
    ${(p) =>
      getBorderRadius(p.border, false, false, p.radius, p.configuration.radius, false, true)};
  }
`;

const getIsValidBorder = (isValid, successColor, dangerColor) => {
  if (isValid === null) {
    return css``;
  } else if (isValid) {
    return css`
      border-color: ${successColor} !important;
    `;
  }
  return css`
    border-color: ${dangerColor} !important;
  `;
};

export const getInputBorderStyle = (
  border: string,
  borderColor: string,
  hasPrefix: boolean,
  hasSuffix: boolean
) => {
  switch (border) {
    case 'bottom':
      return css`
        border-bottom: 0.031rem solid ${borderColor};
      `;
    case 'none':
      return css`
        border: 0.031rem solid transparent;
      `;
    case 'overlap':
    default:
      if (hasPrefix && !hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-right: 0.031rem solid ${borderColor};
        `;
      } else if (!hasPrefix && hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-left: 0.031rem solid ${borderColor};
        `;
      } else if (!hasPrefix && !hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-left: 0.031rem solid ${borderColor};
          border-right: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
        `;
      }
      return css`
        border-top: 0.031rem solid ${borderColor};
        border-bottom: 0.031rem solid ${borderColor};
      `;
  }
};

export const getBorderRadius = (
  border: string,
  hasPrefix: boolean,
  hasSuffix: boolean,
  radius: string,
  radiusConfig,
  isPrefix,
  isSuffix
) => {
  if (isPrefix) {
    return css`
      border-top-left-radius: ${radiusConfig[radius]};
      border-bottom-left-radius: ${radiusConfig[radius]};
    `;
  } else if (isSuffix) {
    return css`
      border-top-right-radius: ${radiusConfig[radius]};
      border-bottom-right-radius: ${radiusConfig[radius]};
    `;
  }
  switch (border) {
    case 'overlap':
    case 'default':
    case 'outside':
      if (hasPrefix && !hasSuffix) {
        return css`
          border-top-right-radius: ${radiusConfig[radius]};
          border-bottom-right-radius: ${radiusConfig[radius]};
        `;
      } else if (!hasPrefix && hasSuffix) {
        return css`
          border-top-left-radius: ${radiusConfig[radius]};
          border-bottom-left-radius: ${radiusConfig[radius]};
        `;
      } else if (!hasPrefix && !hasSuffix) {
        return css`
          border-radius: ${radiusConfig[radius]};
        `;
      }
      return css``;
    default:
      return css``;
  }
};

const getPrefixBorderStyle = (border: string, borderColor: string) => {
  switch (border) {
    case 'bottom':
      return css`
        border: 0.031rem solid transparent;
        border-bottom: 0.031rem solid ${borderColor};
      `;
    case 'none':
      return css`
        border: 0.031rem solid transparent;
      `;
    case 'overlap': // overlap & default & outside
    default:
      return css`
        border-left: 0.031rem solid ${borderColor};
        border-top: 0.031rem solid ${borderColor};
        border-bottom: 0.031rem solid ${borderColor};
      `;
  }
};
const getSuffixBorderStyle = (border: string, borderColor: string) => {
  switch (border) {
    case 'bottom':
      return css`
        border: 0.031rem solid transparent;
        border-bottom: 0.031rem solid ${borderColor};
      `;
    case 'none':
      return css`
        border: 0.031rem solid transparent;
      `;
    case 'overlap': // overlap & default & outside
    default:
      return css`
        border-right: 0.031rem solid ${borderColor};
        border-top: 0.031rem solid ${borderColor};
        border-bottom: 0.031rem solid ${borderColor};
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
        font-size: 1.2rem;
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
        font-size: 0.75rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        top: -1.188rem;
        /* line-height: 1.125rem; */
      `;
    case 'small':
      return css`
        background: ${border === 'overlap' ? configuration.colors.background : 'transparent'};
        font-size: 1rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        transform: ${border === 'overlap' ? 'translateY(-1.188rem)' : 'translateY(-1.688rem)'};
        /* line-height: 1.125rem; */
      `;
    case 'large':
      return css`
        background: ${border === 'overlap' ? configuration.colors.background : 'transparent'};
        font-size: 1rem;
        left: ${border === 'overlap' ? `${configuration.spacing.sm}` : '0'};
        position: absolute;
        transform: ${border === 'overlap' ? 'translateY(-1.688rem)' : 'translateY(-2.444rem)'};
        /* line-height: 1.5rem; */
      `;
    default:
      return css`
        background: ${border === 'overlap' ? configuration.colors.background : 'transparent'};
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
        font-size: 1.2rem;
        line-height: 1.75rem;
      `;
    default:
      return css`
        font-size: 1rem;
        line-height: 1.5rem;
      `;
  }
};
