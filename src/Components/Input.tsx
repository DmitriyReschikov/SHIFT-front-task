import { InputProps } from "../interfaces/props/InputPtops";
import { StyledInput } from "./Styled/StyledInput";

export const Input: React.FC<InputProps> = ({hasError, ...rest }) => (
  <StyledInput hasError={hasError} {...rest} />
);