import React, { useContext, useRef, useEffect, forwardRef } from 'react';
import { StyledFormItem } from './StyledFormItem';
import { StyledFormControl } from './StyledFormControl';
import { ConfigContext } from '../../providers';
import PrefixInput from './PrefixInput';
import SuffixInput from './SuffixInput';

export interface FormItemP extends React.HTMLAttributes<HTMLDivElement> {
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
  preffix?: React.ReactNode;
  /** radius */
  radius?: 'none' | 'sm' | 'md' | 'lg';
  /** suffix */
  suffix?: React.ReactNode;
  /** Indicates if the prefix and/or suffix should have a background-color */
  darkDecoration?: boolean;
  /** Indicates if the prefix and/or suffix should have a background-color */
  padding?: string;
}

const FormItem = forwardRef<HTMLDivElement, FormItemP>(
  (
    {
      inputSize = 'default',
      border = 'default',
      children,
      family,
      borderColor,
      radius = 'sm',
      preffix,
      suffix,
      isValid = null,
      darkDecoration = false,
      padding = '1.563rem 0',
      ...rest
    }: FormItemP,
    ref
  ) => {
    const inputRef = useRef<HTMLDivElement>(null);
    const { configuration } = useContext(ConfigContext);
    const hasPrefix = preffix !== undefined;
    const hasSuffix = suffix !== undefined;

    let formItem;
    let formItemInitialValue;

    useEffect(() => {
      if (inputRef.current) {
        let inputTags: HTMLCollectionOf<HTMLSelectElement> | HTMLCollectionOf<HTMLInputElement> =
          inputRef.current.getElementsByTagName('input');

        if (inputTags.length) {
          [formItem] = inputTags;
        } else {
          inputTags = inputRef.current.getElementsByTagName('select');
          if (inputTags.length) {
            [formItem] = inputTags;
          }
        }
        if (formItem) {
          formItem.classList.add('frontera-input');
          formItemInitialValue = formItem.value;
        }
      }
    }, [inputRef]);
    const className = rest || '';
    return (
      <StyledFormControl
        {...rest}
        className={`fui-redlines ${className}`}
        ref={ref}
        padding={padding}
      >
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
          ref={inputRef}
        >
          {children}
          {preffix && <PrefixInput darkDecoration={darkDecoration}>{preffix}</PrefixInput>}
          {suffix && <SuffixInput darkDecoration={darkDecoration}>{suffix}</SuffixInput>}
        </StyledFormItem>
      </StyledFormControl>
    );
  }
);

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
