import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean; // Можно сделать необязательным и установить значение по умолчанию
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

  font-weight: 600;
  line-height: 24px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const Button: React.FC<ButtonProps> = ({ variant = 'primary', loading = false, children, ...rest }) => {
  return (
    <StyledButton variant={variant} disabled={loading} {...rest}>
      {loading ? 'Подождите...' : children}
    </StyledButton>
  );
};

export default Button;
