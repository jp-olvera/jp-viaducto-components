import React, { useContext, useRef, useEffect } from 'react';
import { StyledFormItem } from './StyledFormItem';
import { ConfigContext } from '../../providers';

interface FormItemProps {
  /** The border type for the input (full, bottom, overlap) */
  border: 'outside' | 'overlap' | 'bottom' | 'none' | 'default';
  /** set the color border */
  borderColor: string | null;
  /** Set the input disabled */
  disabled: boolean;
  /** Set font family */
  family: string | undefined;
  /** children */
  children: React.ReactNode;
  /** label */
  label?: string;
  /** htmlFor */
  htmlFor?: string;
  /** Set the height of the input */
  inputSize: 'xsmall' | 'small' | 'default' | 'large';
}

const FormItem = ({
  label, inputSize = 'default', border = 'default', children, htmlFor, family, borderColor, disabled,
}: FormItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { configuration } = useContext(ConfigContext);

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
    <StyledFormItem
      border={
        border !== 'bottom' && inputSize === 'xsmall' ? 'outside' : border
      }
      size={inputSize}
      configuration={configuration}
      borderColor={
        borderColor || configuration.colors.defaultInputBorderColor
      }
      disabled={disabled}
      family={family}
      ref={ref}
    >
      {children}
      { label && <label className='label' htmlFor={htmlFor}>{label}</label>}
    </StyledFormItem>
  );
};

export default FormItem;
