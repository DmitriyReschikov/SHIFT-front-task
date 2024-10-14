import styled from "styled-components";

interface H2Props extends React.HTMLAttributes<HTMLButtonElement> {}
  

const StyledH2 = styled.h2`
  font-weight: 700;
  font-size: 24px;
  font-line-height: 32px;
  margin: 0
`;


const H2: React.FC<H2Props> = ({children}) => {
    return <StyledH2>{children}</StyledH2>
}

export default H2