import styled from "styled-components";

interface ErrorProps extends React.HTMLAttributes<HTMLButtonElement> { }

const StyledError = styled.span`
  font-weight: 400;
  font-size: 12px;
  font-line-height: 16px;
  margin: 5px;
  color: red
`;

const Error: React.FC<ErrorProps> = ({ children }) => {
    return <StyledError>{children}</StyledError>
}

export default Error