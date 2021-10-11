import React from 'react';
import './input.css';

const Input = ({
  error = false,
  size = 'md',
  disabled = false,
  ...restProps
}) => {
  const checkError = error ? 'error' : '';
  const checkDisabled = disabled ? 'disabled' : '';
  return (
    <label>
      Label
      <div className={`input-element ${checkError} ${size} ${checkDisabled} `}>
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
