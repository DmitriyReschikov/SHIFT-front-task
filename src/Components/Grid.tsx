import React from 'react';
import styled from 'styled-components';

interface RowProps extends React.HTMLAttributes<HTMLButtonElement> {
  gap?: number;
}

const StyledRow = styled.div<RowProps>`
  display: grid; 
  grid-template-columns: repeat(8, 1fr); 
  row-gap: ${(props) => props.gap || 0}px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Col = styled.div<{ start?: number; end: number }>`
  grid-column: ${(props) => props.start || 1} / ${(props) => props.end + 1};  
  box-sizing: border-box;
`;

const Grid: React.FC<React.HTMLAttributes<HTMLButtonElement>> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

const Row: React.FC<RowProps> = ({ gap, children }) => {
  return <StyledRow gap={gap}>{children}</StyledRow>;
};

export default Grid;
export { Col, Row };
