import styled from "styled-components";

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
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