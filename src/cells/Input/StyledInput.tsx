/* eslint-disable radix */
import { ConfigProps } from 'frontera-types';
import styled, { css } from 'styled-components';

interface StyledInputProps {
  configuration: ConfigProps;
  size: string;
  border: string;
  borderColor: string;
  color: string;
  backgroundColor: string;
  hasPrefix: boolean;
  hasSuffix: boolean;
  hasFocus: boolean;
  isValid: boolean | null;
  radius: 'none' | 'sm' | 'md' | 'lg';
}
export const StyledInput = styled.div<StyledInputProps>`
  width: 100%;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: ${({ size, configuration }) => configuration.controlHeight[size]};
  filter: ${({ hasFocus }) => (hasFocus ? 'drop-shadow(0px 1px 2px #dbdde3)' : '')};
  background-color: transparent;
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
  .dark-decoration {
    background-color: ${(p) => p.borderColor} !important;
    padding-left: 0.694rem !important;
    padding-right: 0.694rem !important;
  }

  input {
    background-color: ${(p) => p.backgroundColor};
    box-sizing: border-box;
    border-radius: unset;
    border: none;
    color: ${(p) => p.configuration.colors.text[p.color] || p.color};
    font-family: ${(p) => p.configuration.fontFamily};
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

  input:disabled,
  input:disabled ~ .frontera-prefix-input,
  input:disabled ~ .frontera-suffix-input {
    cursor: not-allowed;
    background-color: ${(p) => p.configuration.colors.disableColor};
    border-color: ${(p) => p.configuration.colors.disableColor};
    opacity: 1;
  }

  .frontera-prefix-input {
    align-items: center;
    background-color: ${(p) => p.backgroundColor};
    border: none;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    min-width: 1.632rem;
    padding-left: 0.694rem;
    padding-right: 0; // without dark decoration
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
  .frontera-suffix-input {
    align-items: center;
    background-color: ${(p) => p.backgroundColor};
    border: none;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: auto;
    min-width: 1.632rem;
    padding-left: 0; // without dark decoration
    padding-right: 0.694rem;
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
    default:
      /* istanbul ignore if */
      if (hasPrefix === true && !hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-right: 0.031rem solid ${borderColor};
        `;
      }
      /* istanbul ignore if */
      if (!hasPrefix === true && hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-left: 0.031rem solid ${borderColor};
        `;
      }
      /* istanbul ignore if */
      if (hasPrefix === true && hasSuffix === true) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          /* border-top: 0.031rem solid ${borderColor};
          border-left: 0.031rem solid ${borderColor};
          border-right: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor}; */
        `;
      }
      return css`
        border-top: 0.031rem solid ${borderColor};
        border-left: 0.031rem solid ${borderColor};
        border-right: 0.031rem solid ${borderColor};
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
      /* istanbul ignore if */
      if (hasPrefix && !hasSuffix) {
        return css`
          border-top-right-radius: ${radiusConfig[radius]};
          border-bottom-right-radius: ${radiusConfig[radius]};
        `;
      }
      /* istanbul ignore if */
      if (!hasPrefix && hasSuffix) {
        return css`
          border-top-left-radius: ${radiusConfig[radius]};
          border-bottom-left-radius: ${radiusConfig[radius]};
        `;
      }
      /* istanbul ignore if */
      if (!hasPrefix && !hasSuffix) {
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

const inputFontStyle = (size: string) => {
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
