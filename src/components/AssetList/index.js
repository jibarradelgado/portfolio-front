import React from 'react';
import { Asset } from '../Asset';
import { List, Item } from './styles';

export const AssetList = () => {
  return (
    <List>
      {
        [1, 2, 3, 4, 5, 6].map(asset => <Item key={asset}><Asset /></Item>)
      }
    </List>
  )
}