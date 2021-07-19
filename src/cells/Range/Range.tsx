import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react';

import { Div } from './StyledRange';
import { ConfigContext } from '../../providers/ConfigProvider';

/** Input range component */
interface RangeInterface {
  /** The min value for the input. Required */
  min: number;
  /** The max value for the input. Required */
  max: number;
  /** Set the background color for the slider */
  color?: string;
  /** Set the input with double range slider if it is set to true */
  double?: boolean;
  /** Set the font family for the value */
  family?: string | null;
  /** Set the font size for the value */
  fontSize?: string;
  /** Triggers an action when the value changes */
  onChange?: Function;
  /** Set the size of the range slider */
  size?: string;
  /** Set the text color for the value */
  textColor?: string;
}

/**
 * Input range component
 * @param {number} min The min value for the input. Required
 * @param {number} max The max value for the input. Required
 * @param {string} color Set the background color for the slider
 * @param {boolean} double Set the input with double range slider if it is set to true
 * @param {string} family Set the font family for the value
 * @param {string} fontSize Set the font size for the value
 * @param {string} onChange Triggers an action when the value changes
 * @param {string} size Set the size of the range slider
 * @param {string} textColor Set the text color for the value
 */

const Range = ({
  min,
  max,
  color,
  fontSize,
  textColor,
  family,
  size,
  onChange,
  double,
  ...rest
}: RangeInterface & React.InputHTMLAttributes<HTMLInputElement>) => {
  const { configuration } = useContext(ConfigContext);
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef<any>(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    /* istanbul ignore else */
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);
    /* istanbul ignore else */
    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <Div
      className='container'
      configuration={configuration}
      color={color}
      fontSize={fontSize}
      textColor={textColor}
      family={family}
      size={size}
      double={double}
      disabled={rest.disabled}
    >
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 0);
          setMinVal(value);
          minValRef.current = value;
          /* istanbul ignore else */
          if (onChange !== null && onChange !== undefined) onChange(event);
        }}
        className='thumb thumb--left'
        style={{ zIndex: minVal > max - 100 ? 5 : 0 }}
        {...rest}
      />
      {double && (
        <input
          type='range'
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
            /* istanbul ignore else */
            if (onChange !== null && onChange !== undefined) onChange(event);
          }}
          className='thumb thumb--right'
          {...rest}
        />
      )}

      <div className='slider'>
        <div className='slider__track' />
        <div ref={range} className='slider__range' />
        <div className='slider__left-value'>{minVal}</div>
        {double && <div className='slider__right-value'>{maxVal}</div>}
      </div>
    </Div>
  );
};

export default Range;
