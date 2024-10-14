import styled from "styled-components";

interface ParagraphProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary'
}
  

const StyledParagraph = styled.p<{ variant: 'primary' | 'secondary' }>`
  font-weight: 400;
  font-size: ${({ variant }) => (variant === 'primary' ? '16px' : '14px')};
  font-line-height: ${({ variant }) => (variant === 'primary' ? '24px' : '20px')};
  color: ${({ variant }) => (variant === 'primary' ? '#141C24' : '#97a1af')};
  margin: 0
`;


const Paragraph: React.FC<ParagraphProps> = ({children, variant}) => {
    return <StyledParagraph variant={variant}>{children}</StyledParagraph>
}

export default Paragraph