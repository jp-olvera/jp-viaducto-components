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

export const Option = ({
  value = '',
  children,
  handleChange = null,
  onChange,
  ...rest
}: {
  value: string;
  children: any;
  handleChange?: null | ((s: string) => void);
  onChange?: Function;
}) => {
  return (
    <StyledOption
      onClick={() => {
        if (handleChange) handleChange(value);
        if (onChange) onChange(value);
      }}
      {...rest}
    >
      {children}
    </StyledOption>
  );
};
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

const SelectItem = ({
  label,
  placeholder,
  id,
  children,
  onChange,
  value = '',
  ...args
}: FormItemProps) => {
  const ref = useRef(null);
  const myOptionType = React.createElement(Option).type;

  const [active, setActive] = useState(false);
  const [val, setVal] = useState(value);
  const handleActive = () => {
    setActive(!active);
  };
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
            if (!active) setActive(true);
          }}
          value={val}
          onChange={(ev) => {
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
