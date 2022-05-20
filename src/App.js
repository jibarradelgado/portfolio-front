import React from "react";
import { Menu } from "./components/Menu";
import { Total } from "./components/Total";
import { AssetList } from './components/AssetList';
import { GlobalStyle } from "./GlobalStyles";

export const App = () => (
  <div>
    <Menu />
    <Total />
    <GlobalStyle />
    <AssetList />
  </div>
)