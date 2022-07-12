import React from 'react';
import { Asset } from '../Asset';
import { List, Item } from './styles';
import { EJSON } from 'bson';

export const AssetList = ({ isChanged, setIsChanged, assets}) => {

  const renderList = () => {
    let sum = 0;
    assets.forEach(asset => sum = EJSON.parse(asset.value) + sum);

    return (
      <List>
        {
          assets.map(asset => <Item key={asset._id}><Asset asset={asset} percentaje={(EJSON.parse(asset.value) * 100 / sum).toFixed(2)} isChanged={isChanged} setIsChanged={setIsChanged}/></Item>)
        }
      </List>
    );
  };

  return (
    renderList()
  );
}