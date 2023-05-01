import React, { type FC } from 'react';
import './Input.css';

interface InputProps {
  value: string;
  type?: 'text' | 'tel' | 'date' | 'number';
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({ value, placeholder, onChange, className = '', type }) => {
  return (
    <input
      type={type ?? 'text'}
      value={value}
      placeholder={placeholder ?? 'Enter Name'}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
};

export default Input;
