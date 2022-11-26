import { FC, HTMLAttributes } from 'react';

import { LabelComponent, TextareaComponent, TextareaWrapper } from './Textarea.styles';

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  disabled?: boolean;
  value: string | number;
  required?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  label,
  name,
  value,
  disabled,
  required = false,
  onChange,
}) => (
  <TextareaWrapper>
    {label && <LabelComponent>{label}</LabelComponent>}
    <TextareaComponent
      name={name}
      value={value}
      disabled={disabled}
      required={required}
      onChange={onChange}
    />
  </TextareaWrapper>
);

export default Textarea;
