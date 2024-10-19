import React from 'react';
import { StyledButton } from './Styled/StyledButton';
import { ButtonProps } from '../interfaces/props/ButtonProps';

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', loading = false, children, ...rest }) => (
    <StyledButton variant={variant} disabled={loading} {...rest}>
      {loading ? 'Подождите...' : children}
    </StyledButton>
);
