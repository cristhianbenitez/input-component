import React, { useState } from 'react';
import './input.css';

const Input = ({
  error = false,
  disabled = false,
  size = 'md',
  helperText = '',
  fullWidth = false,
  value = '',
  multiline = false,
  className = '',
  startIcon = '',
  endIcon = '',
  ...restProps
}) => {
  const [text, setText] = useState(value);

  const checkError = error ? 'error' : '';
  const checkDisabled = disabled ? 'disabled' : '';
  const checkFullWidth = fullWidth ? 'fullWidth' : '';

  return (
    <div
      className={`input-element ${checkError} ${checkDisabled} ${size} ${checkFullWidth} ${className}`}
    >
      <label htmlFor="">Label</label>
      {startIcon ? (
        <i className="material-icons start_Icon">{startIcon}</i>
      ) : null}

      {!multiline ? (
        <input
          type="text"
          placeholder={'Placeholder'}
          disabled={disabled}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          {...restProps}
        />
      ) : (
        <textarea placeholder={'Placeholder'} {...restProps} />
      )}
      {endIcon ? <i className="material-icons end-Icon">{endIcon}</i> : null}
      {helperText ? <p className="helper-text">{helperText}</p> : null}
    </div>
  );
};

export default Input;
