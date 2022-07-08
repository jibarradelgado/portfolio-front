import React, { Fragment, useState } from 'react';
import { MainContainer, MenuContainer } from './styles';
import { FaPlus } from "react-icons/fa";
import { AssetForm } from '../AssetForm';

export const Menu = ({isChanged, setIsChanged}) => {
  const [showForm, setShowForm] = useState(false);

  const showFormClick = () => {
    setShowForm(!showForm);
  }

  return (
    <Fragment>
      <MainContainer>
        <MenuContainer>
          <button id="addAssetButton" onClick={showFormClick} ><FaPlus/></button>
          <label for="addAssetButton">Add Asset</label>
      </MenuContainer>
      {/* <MenuContainer>
        <button id="addTypeButton"><FaPlus/></button>
        <label for="addTypeButton">Add Type</label>
      </MenuContainer> */}
      </MainContainer>
      {showForm && <AssetForm showForm={showForm} setShowForm={setShowForm} isChanged={isChanged} setIsChanged={setIsChanged}/>}
    </Fragment>
  );
};