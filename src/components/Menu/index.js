import React from 'react';
import { MainContainer, MenuContainer } from './styles';
import { FaPlus } from "react-icons/fa";

export const Menu = () => {
  return (
    <MainContainer>
      <MenuContainer>
        <button id="addAssetButton"><FaPlus/></button>
        <label for="addAssetButton">Add Asset</label>
      </MenuContainer>
      <MenuContainer>
        <button id="addTypeButton"><FaPlus/></button>
        <label for="addTypeButton">Add Type</label>
      </MenuContainer>
    </MainContainer>
  );
};