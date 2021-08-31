import React, { useContext, useRef, useEffect, useState } from 'react';
import { StyledFormItem } from './StyledFormItem';
import { StyledFormControl } from './StyledFormControl';
import { ConfigContext } from '../../providers';
import PrefixInput from './PrefixInput';
import SuffixInput from './SuffixInput';
import { Horse, Heart, Cube } from "phosphor-react";

interface FormItemProps {
  /** The border type for the input (full, bottom, overlap) */
  border: 'outside' | 'overlap' | 'bottom' | 'none' | 'default';
  /** set the color border */
  borderColor: string | null;
  /** Set font family */
  family: string | undefined;
  /** children */
  children: React.ReactNode;
  /** Set the height of the input */
  inputSize: 'xsmall' | 'small' | 'default' | 'large';
  /** isValid, null (default value) doesn't indicate is valid nor is invalid*/
  isValid: boolean | null;
  /** prefix */
  prefix: React.ReactNode;
  /** radius */
  radius: 'none' | 'sm' | 'md' | 'lg';
  /** suffix */
  suffix: React.ReactNode;
}

const FormItem = ({
  inputSize = 'default', border = 'default', children, family, borderColor, radius='sm', prefix, suffix, isValid,
}: FormItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { configuration } = useContext(ConfigContext);
  const hasPrefix = prefix !== undefined;
  const hasSuffix = suffix !== undefined;

  useEffect(() => {
    let labelTag;
    let formItem;
    let formItemInitialValue;
    const focusIn = () => {
      if (labelTag) {
        labelTag.classList.add('active');
      }
    };

    const focusOut = () => {
      if (labelTag && formItem.value === formItemInitialValue) {
        labelTag.classList.remove('active');
      }
    };
    
    if (ref.current) {
      const labelTags = ref.current.getElementsByTagName('label');
      let inputTags: HTMLCollectionOf<HTMLSelectElement> | HTMLCollectionOf<HTMLInputElement> = ref.current.getElementsByTagName('input');
      if (labelTags.length) {
        [labelTag] = labelTags;
        labelTag.classList.add('ballena-label');
      }
      if (inputTags.length) {
        [formItem] = inputTags;
      } else {
        inputTags = ref.current.getElementsByTagName('select');
        if (inputTags.length) {
          [formItem] = inputTags;
        }
      }
      if (formItem) {
        formItem.classList.add('ballena-input');
        formItemInitialValue = formItem.value;
        formItem.addEventListener('focusout', focusOut);
        formItem.addEventListener('focus', focusIn);
      }
    }
    return () => {
      if (formItem) {
        formItem.removeEventListener('focusout', focusOut);
        formItem.removeEventListener('focus', focusIn);
      }
    };
  }, [ref]);
  return (
    <StyledFormControl>
      <StyledFormItem
        border={
          border !== 'bottom' && inputSize === 'xsmall' ? 'outside' : border
        }
        size={inputSize}
        radius={radius}
        hasPrefix={hasPrefix}
        hasSuffix={hasSuffix}
        isValid={isValid}
        configuration={configuration}
        borderColor={
          borderColor || configuration.colors.defaultInputBorderColor
        }
        family={family}
        ref={ref}
      >
        {children}
        {prefix && <PrefixInput>{prefix}</PrefixInput>}
        {suffix && <SuffixInput>{suffix}</SuffixInput>}
      </StyledFormItem>
    </StyledFormControl>
  );
};

export default FormItem;
