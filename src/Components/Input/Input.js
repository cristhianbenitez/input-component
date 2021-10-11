import React from 'react';
import './input.css';

const Input = ({
  error = false,
  disabled = false,
  size = 'md',
  ...restProps
}) => {
  const checkError = error ? 'error' : '';
  const checkDisabled = disabled ? 'disabled' : '';
  return (
    <label>
      Label
      <div className={`input-element ${checkError} ${checkDisabled} ${size} `}>
        <input
          type="text"
          placeholder={'Placeholder'}
          disabled={disabled}
          {...restProps}
        />
      </div>
    </label>
  );
};

export default Input;
