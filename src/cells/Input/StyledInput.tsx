/* eslint-disable radix */
import { ConfigProps } from 'ballena-types';
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
  box-shadow: ${({ hasFocus }) => (hasFocus ? '0px 1px 3px #cecece' : '')};
  background-color: ${(p) => p.backgroundColor};
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
    background-color: ${(p) => p.borderColor};
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

  label {
    color: ${(p) => p.configuration.colors.text.dark};
    font-family: ${(p) => p.configuration.fontFamily};
    max-width: 95%;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    transition: top 230ms ease, left 230ms ease;
    cursor: text;
    white-space: nowrap;
    position: absolute;
    top: calc(-${(p) => (p.border === 'overlap' ? 8 : 16)}px * 1.5);
    left: 8px;
    margin: 0;
    padding: 0;
    line-height: 150%;
    background-color: ${(p) =>
      p.border === 'overlap' ? (p.backgroundColor ? p.backgroundColor : 'white') : 'transparent'};
  }

  input[required] ~ label {
    padding-left: 0.625rem;
    ::after {
      content: '*';
      color: ${(p) => p.configuration.colors.text.danger};
      position: absolute;
      color: #b71c1c;
      left: 8px;
    }
  }

  input[type='number']input:not(placeholder-shown)input:not([value='']) ~ label,
  input:read-only ~ label {
    position: absolute;
    top: calc(-${(p) => (p.border === 'overlap' ? 8 : 16)}px * 1.5);
    left: 8px;
    margin: 0;
    padding: 0;
    line-height: 150%;
    background-color: ${(p) => (p.border === 'overlap' ? p.backgroundColor : 'transparent')};
  }

  input:disabled,
  input:disabled ~ .ballena-prefix-input,
  input:disabled ~ .ballena-suffix-input {
    cursor: not-allowed;
    background-color: ${(p) => p.configuration.colors.disableColor};
    border-color: ${(p) => p.configuration.colors.disableColor};
    opacity: 1;
  }
  input:disabled ~ label {
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
    padding-right: 0.694rem;
    padding-left: 0.694rem;
    ${(p) =>
      getIsValidBorder(
        p.isValid,
        p.configuration.colors.success.default,
        p.configuration.colors.danger.default
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
      /* istanbul ignore if */
      if (hasPrefix && !hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-right: 0.031rem solid ${borderColor};
        `;
      }
      /* istanbul ignore if */
      if (!hasPrefix && hasSuffix) {
        return css`
          border-top: 0.031rem solid ${borderColor};
          border-bottom: 0.031rem solid ${borderColor};
          border-left: 0.031rem solid ${borderColor};
        `;
      }
      /* istanbul ignore if */
      if (!hasPrefix && !hasSuffix) {
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
