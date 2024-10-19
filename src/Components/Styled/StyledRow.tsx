import styled from "styled-components";
import { RowProps } from "../../interfaces/props/RowProps";

export const StyledRow = styled.div<RowProps>`
  display: grid; 
  grid-template-columns: repeat(8, 1fr); 
  row-gap: ${(props) => props.gap || 0}px;
`;