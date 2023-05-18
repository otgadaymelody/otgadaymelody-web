import React, { type FC } from 'react';
import './Input.css';

interface InputProps {
  value: string;
  type?: 'text' | 'tel' | 'date' | 'number';
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className = '',
  type,
  labelClassName = '',
}) => {
  return (
    <div className="input-container">
      <input
        type={type ?? 'text'}
        value={value}
        placeholder=""
        onChange={onChange}
        className={`input ${className}`}
        id="input-field"
      />
      <label htmlFor="input-field" className={`input-label ${value && 'filled'}`}>
        {placeholder ?? 'Enter Name'}
      </label>
    </div>
  );
};

export default Input;
