import React, { useState, useEffect } from "react";
import { EJSON } from 'bson';
import { Menu } from "./components/Menu";
import { AssetForm } from "./components/AssetForm";
import { Total } from "./components/Total";
import { AssetList } from './components/AssetList';
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
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
    <div>
      <Menu isChanged={isChanged} setIsChanged={setIsChanged} />
      <Total assets={assets}/>
      <GlobalStyle />
      <AssetList isChanged={isChanged} setIsChanged={setIsChanged} assets={assets} setAssets={setAssets}/>
    </div>
  );
}