import { FC, HTMLAttributes } from 'react';

import { InputComponent, InputWrapper, LabelComponent } from './Input.styles';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  type?: string;
  disabled?: boolean;
  value: string | number;
  required?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  name,
  value,
  type = 'text',
  disabled,
  required = false,
  onChange,
}) => (
  <InputWrapper>
    {label && <LabelComponent>{label}</LabelComponent>}

    <InputComponent
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  </InputWrapper>
);
export default Input;
