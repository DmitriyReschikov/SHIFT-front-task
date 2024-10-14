import styled from "styled-components";

const StyledInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 8px 12px;
  border: 2px solid ${({ hasError }) => (hasError ? 'red' : '#ced2da')};
  border-radius: 5px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#1975ff')};
  }

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'red' : '#1975ff')};
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #637083;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Input: React.FC<{ hasError?: boolean } & React.InputHTMLAttributes<HTMLInputElement>> = ({
  hasError,
  ...props
}) => {
  return <StyledInput hasError={hasError} {...props} />;
};

export default Input;
