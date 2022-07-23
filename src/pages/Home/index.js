import React, { useState, useEffect, Fragment } from 'react';
import { EJSON } from 'bson';
import { Menu } from "../../components/Menu";
import { Total } from "../../components/Total";
import { AssetList } from '../../components/AssetList';
import { Container } from './styles';

export const Home = () => {
  const [ assets, setAssets ] = useState([]);
  const [ isChanged, setIsChanged] = useState(false);

  useEffect(function() {
    window.fetch('http://localhost:3000/asset')
      .then(res => res.json())
      .then(assets => {
        setAssets(EJSON.deserialize(assets.body))
      })
  }, [isChanged])

  return (
    <Container>
      <Menu isChanged={isChanged} setIsChanged={setIsChanged} />
      <Total assets={assets}/>
      <AssetList isChanged={isChanged} setIsChanged={setIsChanged} assets={assets} setAssets={setAssets}/>
    </Container>
  );
}