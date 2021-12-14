import React, { forwardRef, useContext, useState } from 'react';
import { ConfigContext } from '../../providers';
import PrefixInput from './PrefixInput';
import { StyledInput } from './StyledInput';
import SuffixInput from './SuffixInput';

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
  /** Label text for input */
  label?: string;
}

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
      padding = '1.563rem 0',
      id,
      label,
      ...rest
    }: Input,
    ref
  ) => {
    const { configuration } = useContext(ConfigContext);
    const hasPrefix = preffix !== null || preffix !== undefined;
    const hasSuffix = suffix !== null || suffix !== undefined;
    const [hasFocus, sethasFocus] = useState(false);

    const handleFocus = (ev) => {
      /* istanbul ignore if */
      if (rest.onFocus) {
        rest.onFocus(ev);
      }
      sethasFocus(true);
    };

    const handleBlur = (ev) => {
      /* istanbul ignore if */
      if (rest.onBlur) {
        rest.onBlur(ev);
      }
      sethasFocus(false);
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
        <input type={type} ref={ref} onFocus={handleFocus} onBlur={handleBlur} {...rest} id={id} />
        {suffix && <SuffixInput darkDecoration={darkDecoration}>{suffix}</SuffixInput>}
        <label htmlFor={id}>{label}</label>
      </StyledInput>
    );
  }
);

export default Input;

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
