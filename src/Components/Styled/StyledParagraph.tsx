import styled from "styled-components";

export const StyledParagraph = styled.p<{ variant: 'primary' | 'secondary' }>`
  font-weight: 400;
  font-size: ${({ variant }) => (variant === 'primary' ? '16px' : '14px')};
  font-line-height: ${({ variant }) => (variant === 'primary' ? '24px' : '20px')};
  color: ${({ variant }) => (variant === 'primary' ? '#141C24' : '#97a1af')};
  margin: 0
`;