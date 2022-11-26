import { FC, HTMLAttributes } from 'react';

import { Button, ButtonIconWrapper, Icon } from './ButtonIcon.styles';

interface ButtonIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
  alt: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

const ButtonIcon: FC<ButtonIconProps> = ({
  children,
  type = 'button',
  icon,
  alt,
  disabled,
  onClick,
}) => (
  <ButtonIconWrapper>
    <Button type={type} disabled={disabled} onClick={onClick}>
      <Icon src={icon} alt={alt} />
    </Button>
    {children}
  </ButtonIconWrapper>
);

export default ButtonIcon;
