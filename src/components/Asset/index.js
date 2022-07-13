import React, { useState } from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph, Input, EditButton, DeleteButton } from "./styles";
import { FaTrashAlt, FaPen, FaCheck, FaTimes  } from "react-icons/fa";
import { EJSON } from 'bson';
import axios from 'axios';


export const Asset = (props) => {
  const asset = props.asset;
  console.log(asset);
  const [ name, setName ] = useState(asset.name);
  const [ value, setValue ] = useState(EJSON.parse(asset.value));
  const [ isEditActive, setEditActive ] = useState(false);

  const deleteAsset = () => {
    axios.delete(`http://localhost:3000/asset/${asset._id}`).
      then( res => {
        if (!res.error) {
          props.setIsChanged(!props.isChanged);
        }
      });
  };
  
  const updateAsset = () => {
    axios.patch(`http://localhost:3000/asset/${asset._id}`,{
    name,
    value}).
      then( res => {
        if (!res.error) {
          props.setIsChanged(!props.isChanged);
          switchEdit();
        }
      });
  };

  const switchEdit = () => {
    setEditActive(!isEditActive);
  };

  return (
    <MainContainer>
      <InfoContainer>
        <Input type="text" readOnly={!isEditActive} defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <Input type="number" readOnly={!isEditActive} defaultValue={value} onChange={(e) => setValue(e.target.value)} />
        <Paragraph>{props.percentaje}%</Paragraph>
      </InfoContainer>
      <ButtonContainer>
        <EditButton onClick={isEditActive ? updateAsset : switchEdit}>{isEditActive ? <FaCheck /> : <FaPen />}</EditButton>
        <DeleteButton onClick={isEditActive ? switchEdit : deleteAsset}>{isEditActive ? <FaTimes /> : <FaTrashAlt />}</DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
}