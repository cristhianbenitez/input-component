import React, { useState } from 'react';
import './input.css';

const Input = ({
  error = false,
  disabled = false,
  size = 'md',
  fullWidth = false,
  value = '',
  ...restProps
}) => {
  const [text, setText] = useState(value);

  const checkError = error ? 'error' : '';
  const checkDisabled = disabled ? 'disabled' : '';
  const checkFullWidth = fullWidth ? 'fullWidth' : '';

  return (
    <div
      className={`input-element ${checkError} ${checkDisabled} ${size} ${checkFullWidth}`}
    >
      <label htmlFor="">Label</label>
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
    </div>
  );
};

export default Input;
