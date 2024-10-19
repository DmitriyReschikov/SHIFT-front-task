import styled from "styled-components";

export const StyledCol = styled.div<{ start?: number; end: number }>`
  grid-column: ${(props) => props.start || 1} / ${(props) => props.end + 1};  
`;