import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Popover } from '../../dialog/Popover';
import { FormItem } from '../FormItem';

const StyledOption = styled.button`
  width: 100%;
  display: flex;
  border: none;
  background-color: white;
  padding-left: 12px;
  cursor: pointer;
  &:hover {
    background-color: #cecece;
  }
`;

/** Option component as SelectItem children */
interface OptionProps {
  /** Option real value (form value) */
  value: string;
  /** Option children, this will be rendered in the popover */
  children: any;
  /** Function to help SelectItem component */
  handleChange?: null | ((s: string) => void);
  /** Function to trigger when select value changes */
  onChange?: Function;
}
/**
 * Option component as SelectItem children
 * @param {string} value Option real value (form value)
 * @param {any} children Option children, this will be rendered in the popover
 * @param {null | ((s: string) => void)} handleChange Function to help SelectItem component
 * @param {Function} onChange Function to trigger when select value changes
 */
export const Option = ({ value, children, handleChange, onChange, ...rest }: OptionProps) => {
  return (
    <StyledOption
      onClick={() => {
        /* istanbul ignore else */
        if (handleChange) handleChange(value);
        /* istanbul ignore else */
        if (onChange) onChange(value);
      }}
      {...rest}
    >
      {children}
    </StyledOption>
  );
};
/** SelectItem component, take the same behavior as Select Input but the implementation is more flexible */
interface SelectItemProps {
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
  /** Indicates if the prefix and/or suffix should have a background-color */
  padding?: string;
  /** Label */
  label?: string;
  /** Placeholder */
  placeholder?: string;
  /** id for a11y */
  id?: string;
  /** id for a11y */
  value?: string;
  /** id for a11y */
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
/**
 * SelectItem component, take the same behavior as Select Input but the implementation is more flexible
 * @param {string} border The border type for the input (full, bottom, overlap)
 * @param {string | null} borderColor set the color border
 * @param {string | undefined} family Set font family
 * @param {React.ReactNode} children children
 * @param {string} inputSize Set the height of the input
 * @param {boolean | null} isValid isValid, null (default value) doesn't indicate is valid nor is invali
 * @param {React.ReactNode} prefix prefix
 * @param {string} radius radius
 * @param {React.ReactNode} suffix suffix
 * @param {boolean} darkDecoration Indicates if the prefix and/or suffix should have a background-color
 * @param {string} padding Indicates if the prefix and/or suffix should have a background-color
 * @param {string} label Label
 * @param {string} placeholder Placeholder
 * @param {string} id id for a11y
 * @param {string} value id for a11y
 * @param {React.ChangeEventHandler<HTMLInputElement> | undefined} onChange id for a11y
 */

const SelectItem = ({
  label,
  placeholder,
  id,
  children,
  onChange,
  value = '',
  ...args
}: SelectItemProps) => {
  const ref = useRef(null);
  const myOptionType = React.createElement(Option).type;

  const [active, setActive] = useState(false);
  const [val, setVal] = useState(value);
  const handleActive = () => {
    setActive(!active);
  };
  /* istanbul ignore  next*/
  const handleChange = (ev) => {
    setVal(ev.target.value);
    setActive(true);
  };
  const handleSelect = (value: string) => {
    setVal(value);
    setActive(false);
  };

  const Suffix = (
    <div
      onClick={handleActive}
      style={{
        transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform .2s ease',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {args.suffix}
    </div>
  );
  return (
    <>
      <FormItem {...args} ref={ref} suffix={Suffix}>
        <input
          type='text'
          onFocus={() => {
            /* istanbul ignore else */
            if (!active) setActive(true);
          }}
          value={val}
          /* istanbul ignore  next*/
          onChange={(ev) => {
            /* istanbul ignore  next*/
            handleChange(ev);
          }}
          placeholder={placeholder}
          id={id}
          readOnly
          style={{ cursor: 'pointer' }}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </FormItem>
      <Popover
        target={ref}
        active={active}
        handleClose={handleActive}
        position='bottom'
        elevationDirection='bottom'
        content={
          <div style={{ padding: '0.25rem 0' }}>
            {React.Children.map(children, (child: any, i) => {
              /* istanbul ignore if */
              if (!child) {
                return null;
              }
              if (child.type === myOptionType) {
                return React.cloneElement(child, {
                  id: `select-item-${i}`,
                  index: i,
                  handleChange: handleSelect,
                  onChange: onChange,
                  tabIndex: 0,
                });
              } else {
                return child;
              }
            })}
          </div>
        }
      />
    </>
  );
};

export default SelectItem;
