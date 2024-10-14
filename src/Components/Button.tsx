import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 16px 32px;
  border: 2px solid ${({ variant }) => (variant === 'primary' ? '#1975ff' : '#fff')};
  width: 100%;
  
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;

  background-color: ${({ variant }) => (variant === 'primary' ? '#1975ff' : '#fff')};
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : '#344051')};

  font-size: 16px;
  font-weight: 600;
  font-height: 24px;


`;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
