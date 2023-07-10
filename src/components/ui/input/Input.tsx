import React, { type FC } from 'react';
import './Input.css';

interface InputProps {
  value: string;
  type?: 'text' | 'tel' | 'date' | 'number';
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClassName?: string;
  name: string;
  required?: boolean;
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
}) => {
  return (
    <div className="input-container">
      <input 
        type={type ?? 'text'}
        value={value}
        placeholder=""
        onChange={onChange}
        className={`input ${value && 'input-filled'}`}
        id="input-field"
        name={name}
        required={required}
      />
      <label htmlFor="input-field" className={`input-label ${value && 'label-filled'}`}>
        {placeholder}{required && <span className={`label-required`}>*</span> }
      </label>
    </div>
  );
};

export default Input;
