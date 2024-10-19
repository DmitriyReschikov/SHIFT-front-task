import React from 'react';
import { StyledGrid } from './Styled/StyledGrid';
import { RowProps } from '../interfaces/props/RowProps';
import { StyledRow } from './Styled/StyledRow';
import { StyledCol } from './Styled/StyledCol';
import { ColProps } from '../interfaces/props/ColProps.';
import { GridProps } from '../interfaces/props/GridProps';

export const Col: React.FC<ColProps> = ({children, start, end, ...rest}) => (
  <StyledCol start={start} end={end} {...rest}>{children}</StyledCol>
)

export const Grid: React.FC<GridProps> = ({ children, ...rest }) => (
  <StyledGrid {...rest}>{children}</StyledGrid>
);

export const Row: React.FC<RowProps> = ({ gap, children, ...rest }) => (
  <StyledRow gap={gap} {...rest}>{children}</StyledRow>
);