import React, { useContext, useRef, useEffect } from 'react';
import { StyledFormItem } from './StyledFormItem';
import { StyledFormControl } from './StyledFormControl';
import { ConfigContext } from '../../providers';
import PrefixInput from './PrefixInput';
import SuffixInput from './SuffixInput';

interface FormItemProps {
  /** The border type for the input (full, bottom, overlap) */
  border?: 'outside' | 'overlap' | 'bottom' | 'none' | 'default';
  /** set the color border */
  borderColor?: string | null;
  /** Set font family */
  family?: string | undefined;
  /** children */
  children: React.ReactNode;
  /** Set the height of the input */
  inputSize?: 'xsmall' | 'small' | 'default' | 'large';
  /** isValid, null (default value) doesn't indicate is valid nor is invalid*/
  isValid?: boolean | null;
  /** prefix */
  prefix?: React.ReactNode;
  /** radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** suffix */
  suffix?: React.ReactNode;
  /** Indicates if the prefix and/or suffix should have a background-color */
  darkDecoration?: boolean;
}

const FormItem = ({
  inputSize = 'default', 
  border = 'default', 
  children, 
  family, 
  borderColor, 
  radius='sm', 
  prefix, 
  suffix, 
  isValid = null,
  darkDecoration = false,
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
      let inputTags:
        | HTMLCollectionOf<HTMLSelectElement>
        | HTMLCollectionOf<HTMLInputElement> = ref.current.getElementsByTagName('input');
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
        border={border !== 'bottom' && inputSize === 'xsmall' ? 'outside' : border}
        size={inputSize}
        radius={radius}
        hasPrefix={hasPrefix}
        hasSuffix={hasSuffix}
        isValid={isValid}
        configuration={configuration}
        borderColor={borderColor || configuration.colors.defaultInputBorderColor}
        family={family}
        ref={ref}
      >
        {children}
        {prefix && <PrefixInput darkDecoration={darkDecoration}>{prefix}</PrefixInput>}
        {suffix && <SuffixInput darkDecoration={darkDecoration}>{suffix}</SuffixInput>}
      </StyledFormItem>
    </StyledFormControl>
  );
};

export default FormItem;


/**
 * Razones para no usar el label animado
 * 1. Es difícil de controlar'
 * 2. Hay cosas que podrían ser más importantes que la animación pero se están haciendo en torno a ella
 * 3. No se puede hacer el onfocus desde los prefijos o sufijos
 * 4. Nunca se va a ver bien con el select múltiple
 * 5. Los prefijos siempre deben ser de cierto tamaño o van a salir recortados hacia los lados, no podría haber un texto como prefijo
 * 6. No se puede agregar un box-shadow (alternativa al outline que se ve mal con los prefijos y sufijos) sin tener que usar addEventListeners cosa que se debe evitar
 * 7. Se necesitan paddings o margins para recuperar el espacio donde el label se solapa, calcularlos es difícil considerando los tamaños de los inputs
 */