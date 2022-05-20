import React from 'react';
import { MainContainer, TotalAssets } from './styles';

export const Total = ( {total = 0.00 }) => {
  return (
    <MainContainer>
      <TotalAssets>Total: {total}</TotalAssets>
    </MainContainer>
  )
}