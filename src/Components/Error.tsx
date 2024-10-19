import { ErrorProps } from "../interfaces/props/ErrorProps";
import { StyledError } from "./Styled/StyledError";

export const Error: React.FC<ErrorProps> = ({ children, ...rest }) => (
  <StyledError {...rest}>{children}</StyledError>
)