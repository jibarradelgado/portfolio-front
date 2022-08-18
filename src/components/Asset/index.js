import React, { useState, useContext } from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph, Input, EditButton, DeleteButton } from "./styles";
import { FaTrashAlt, FaPen, FaCheck, FaTimes  } from "react-icons/fa";
import { useInputValue } from "../../hooks/useInputValue";
import axios from 'axios';
import { config } from "../../config";
import { Context } from "../../Context";

export const Asset = (props) => {
  const asset = props.asset;
  const name = useInputValue(asset.name);
  const value = useInputValue(asset.value);
  const [ isEditActive, setEditActive ] = useState(false);
  const { authId, isAuth } = useContext(Context);

  const deleteAsset = () => {
    axios.delete(`${config.host}${config.dev ? `:${config.port}`: ''}/asset/${asset._id}/${authId}`, {
      headers: {
        authorization: `Bearer ${isAuth}`
      }
  }).
      then( res => {
        if (!res.error) {
          props.setIsChanged(!props.isChanged);
        }
      });
  };

  const updateAsset = () => {
    axios.patch(`${config.host}${config.dev ? `:${config.port}`: ''}/asset/${asset._id}`,{
      name: name.value,
      value: value.value,
      auth: {
        id: authId
      }
    }, {
      headers: {
        authorization: `Bearer ${isAuth}`
      }
  }).
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
        <Input type="text" readOnly={!isEditActive} {...name} />
        <Input type="number" readOnly={!isEditActive} {...value} />
        <Paragraph>{props.percentaje}%</Paragraph>
      </InfoContainer>
      <ButtonContainer>
        <EditButton onClick={isEditActive ? updateAsset : switchEdit}>{isEditActive ? <FaCheck /> : <FaPen />}</EditButton>
        <DeleteButton onClick={isEditActive ? switchEdit : deleteAsset}>{isEditActive ? <FaTimes /> : <FaTrashAlt />}</DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
}