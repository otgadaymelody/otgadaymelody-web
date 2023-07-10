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
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className,
  type,
  labelClassName,
  name,
}) => {
  return (
    <div className="input-container">
      <input
        type={type ?? 'text'}
        value={value}
        placeholder=""
        onChange={onChange}
        className={`input ${value && 'valueadded'}`}
        id="input-field"
        name={name}
      />
      <label htmlFor="input-field" className={`input-label ${value && 'filled'}`}>
        {placeholder ?? 'Enter Name'}
      </label>
    </div>
  );
};

export default Input;
