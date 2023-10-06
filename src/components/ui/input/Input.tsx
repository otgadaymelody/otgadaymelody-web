import React, { type FC } from 'react';
import './Input.css';

interface InputProps {
  value: string;
  type?: 'text' | 'tel' | 'date' | 'number' | 'password';
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
  name: string;
  required?: boolean;
  help?: string;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  min?: number;
  max?: number;
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className,
  type,
  labelClassName,
  name,
  required,
  help,
  error,
  errorMessage,
  success,
  min,
  max,
}) => {
  return (
    <div className="input-container">
      <input
        type={type ?? 'text'}
        value={value}
        placeholder=""
        onChange={onChange}
        className={`input ${value && 'input-filled'} ${error ? 'error' : ''} ${
          success ? 'success' : ''
        }`}
        id="input-field"
        name={name}
        required={required}
        min={type === 'number' ? min : undefined}
        max={type === 'number' ? max : undefined}
      />
      <label htmlFor="input-field" className={`input-label ${value && 'label-filled'}`}>
        {placeholder}
        {required && <span className={`label-required`}> *</span>}
      </label>
      {help && <p className="caption-message">{help}</p>}
      {error && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Input;
