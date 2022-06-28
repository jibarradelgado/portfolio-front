import React, { useState, useEffect } from "react";
import { EJSON } from 'bson';
import { Menu } from "./components/Menu";
import { AssetForm } from "./components/AssetForm";
import { Total } from "./components/Total";
import { AssetList } from './components/AssetList';
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  const [ assets, setAssets ] = useState([]);

  useEffect(function() {
    window.fetch('http://localhost:3000/asset')
      .then(res => res.json())
      .then(assets => {
        setAssets(EJSON.deserialize(assets.body))
      })
  }, [])

  return (
    <div>
      <Menu />
      <Total assets={assets}/>
      <GlobalStyle />
      <AssetList assets={assets}/>
    </div>
  );
}