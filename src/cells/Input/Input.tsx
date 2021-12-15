import React, { forwardRef, useContext, useState } from 'react';
import { ConfigContext } from '../../providers';
import PrefixInput from './PrefixInput';
import { StyledInput } from './StyledInput';
import SuffixInput from './SuffixInput';

/** Input component */
interface Input extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The border type for the input (full, bottom, overlap) */
  border?: 'bottom' | 'none' | 'default' | 'overlap';
  /** set the border color*/
  borderColor?: string | null;
  /** set the text color */
  color?: string;
  /** set the background color */
  backgroundColor?: string;
  /** Set the height of the input */
  inputSize?: 'xsmall' | 'small' | 'default' | 'large';
  /** isValid, null (default value) doesn't indicate is valid nor is invalid*/
  isValid?: boolean | null;
  /** prefix */
  preffix?: React.ReactNode;
  /** radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** suffix */
  suffix?: React.ReactNode;
  /** Indicates if the prefix and/or suffix should have a background-color */
  darkDecoration?: boolean;
  /** Indicates if the prefix and/or suffix should have a background-color */
  padding?: string;
  /** input type */
  type?: string;
  /** input ID */
  id: string;
}
/**
 * Input component
 * @param {'bottom' | 'none' | 'default' | 'overlap'} border The border type for the input (full, bottom, overlap)
 * @param {string | null} borderColor set the border colo
 * @param {string} color set the text color
 * @param {string} backgroundColor set the background color
 * @param {'xsmall' | 'small' | 'default' | 'large'} inputSize Set the height of the input
 * @param {boolean | null} isValid isValid, null (default value) doesn't indicate is valid nor is invali
 * @param {React.ReactNode} preffix prefix
 * @param {'none' | 'sm' | 'md' | 'lg'} radius radius
 * @param {React.ReactNode} suffix suffix
 * @param {boolean} darkDecoration Indicates if the prefix and/or suffix should have a background-color
 * @param {string} type input type
 * @param {string} id input ID
 */
const Input = forwardRef<HTMLInputElement, Input>(
  (
    {
      type = 'text',
      inputSize = 'default',
      border = 'default',
      borderColor,
      backgroundColor = 'white',
      radius = 'sm',
      preffix = null,
      suffix = null,
      color = 'dark',
      isValid = null,
      darkDecoration = false,
      id,
      onFocus,
      onBlur,
      ...rest
    }: Input,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const hasPrefix = preffix !== null;
    const hasSuffix = suffix !== null;
    const [hasFocus, sethasFocus] = useState(false);

    const handleFocus = (ev: React.FocusEvent<HTMLInputElement, Element>) => {
      sethasFocus(true);
      if (onFocus) {
        onFocus(ev);
      }
    };

    const handleBlur = (ev: React.FocusEvent<HTMLInputElement, Element>) => {
      sethasFocus(false);
      if (onBlur) {
        onBlur(ev);
      }
    };
    return (
      <StyledInput
        border={border !== 'bottom' && inputSize === 'xsmall' ? 'default' : border}
        size={inputSize}
        radius={radius}
        hasPrefix={hasPrefix}
        hasSuffix={hasSuffix}
        hasFocus={hasFocus}
        isValid={isValid}
        configuration={configuration}
        borderColor={borderColor || configuration.colors.defaultInputBorderColor}
        backgroundColor={backgroundColor}
        color={color}
        data-testid={id}
      >
        {preffix && <PrefixInput darkDecoration={darkDecoration}>{preffix}</PrefixInput>}
        <input
          type={type}
          ref={ref}
          onFocus={(e) => handleFocus(e)}
          onBlur={(e) => handleBlur(e)}
          {...rest}
          id={id}
        />
        {suffix && <SuffixInput darkDecoration={darkDecoration}>{suffix}</SuffixInput>}
      </StyledInput>
    );
  }
);

export default Input;
