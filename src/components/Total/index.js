import React from 'react';
import { EJSON } from 'bson';
import { MainContainer, TotalAssets } from './styles';


export const Total = ( {assets}) => {
  let sum = 0;
  assets.forEach(asset => sum = EJSON.parse(asset.value) + sum);

  return (
    <MainContainer>
      <TotalAssets>Total: {sum}</TotalAssets>
    </MainContainer>
  )
}