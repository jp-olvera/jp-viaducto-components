import React, { useState } from 'react';
import { getIcon } from './Icon';
import {
  Wrapper
} from './StyledInput';
// import { EyeClosed, Eye } from 'react-ikonate';
// import Icon from './Icon';

/**
 * Input component wrapped with label and span tags for better UX
 * @param {boolean} iconRequired Icon for mark input is required
 * @param {String} icon Helper icon to support the user
 * @param {String} label The caption for the input
 * @param {String} border The border type for the input (full, bottom, overlap)
 * @param {boolean} disabled Set the input disabled
 * @param {String} size Set the width of the input
 * @param {String} type Set the input type (text, password, email, etc.)
 * @param {Object} props HTML attributes for input tag
 */
const Input = ({
  label = null,
  border = 'default',
  disabled = false,
  type = 'text',
  icon = null,
  required = true,
  isInvalid = false,
  isValid = false,
  id = "input",
  size = "default",
  ...props
}) => {
  // const [open, setOpen] = useState(false);
  // const [pass, setPass] = useState(type);
  // const toggleView = () => {
  //   setOpen(!open);
  //   setPass((actual) => (actual === 'password' ? 'text' : 'password'));
  // };
  return (
    <Wrapper border={border} hasIcon={icon !== null} size={size}>
      {
        icon !== null && <span className="icon">{getIcon(icon)}</span>
      }

      <input className="input" type={type} id={id} required />

      <label className="label" htmlFor={id}>
        <span>Label</span>
        {required && <span className="icon-required">{getIcon('required', '10px')}</span>}
      </label>
      {
        isInvalid && <span className="is-invalid">{getIcon('warning')}</span>
      }
      {
        isValid && <span className="is-valid">{getIcon('ok')}</span>
      }
    </Wrapper>
  );
};

export default Input;

// <Wrapper
//   size={size}
//   disabled={disabled}
//   border={border}
// >
//   <StyledInput
//     open={type === 'password' ? open : true}
//     icon={icon}
//     {...props}
//     border={border}
//     disabled={disabled}
//     type={pass}
//     id={props.id}
//     required
//     label={label}
//     placeholder={label || props.placeholder}
//   />
//   {icon !== null ? (
//     <Helper border={border}>
//       <Icon icon={icon} />
//     </Helper>
//   ) : null}
//   {type === 'password' ? (
//     <Info onClick={toggleView}>{open ? <Eye /> : <EyeClosed />}</Info>
//   ) : null}
//   <StyledLabel
//     htmlFor={props.id}
//     icon={icon !== null}
//     border={border}
//     disabled={disabled}
//     label={label}
//   >
//     {label !== null ? <span>{label}</span> : null}
//     {iconRequired ? <IconFill /> : null}
//   </StyledLabel>
// </Wrapper>