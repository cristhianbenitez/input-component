import React from 'react';
import './input.css';

const Input = ({ error = false, ...restProps }) => {
  const checkError = error ? 'error' : '';

  return (
    <label className={` ${checkError}`}>
      Label
      <div className={`input-element ${checkError}`}>
        <input type="text" placeholder={'Placeholder'} {...restProps} />
      </div>
    </label>
  );
};

export default Input;
