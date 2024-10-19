import { H2Props } from "../interfaces/props/H2Props"
import { StyledH2 } from "./Styled/StyledH2"

export const H2: React.FC<H2Props> = ({children, ...rest}) => (
  <StyledH2 {...rest}>{children}</StyledH2>
)