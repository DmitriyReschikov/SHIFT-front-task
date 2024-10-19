import { ParagraphProps } from "../interfaces/props/ParagraphProps";
import { StyledParagraph } from "./Styled/StyledParagraph";

export const Paragraph: React.FC<ParagraphProps> = ({children, variant, ...rest}) => (
  <StyledParagraph variant={variant} {...rest}>{children}</StyledParagraph>
)