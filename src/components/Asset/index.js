import React, { useState } from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph, EditButton, DeleteButton } from "./styles";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { EJSON } from 'bson';
import axios from 'axios';


export const Asset = (props) => {
  const asset = props.asset;
  console.log(asset);

  const deleteAsset = () => {
    axios.delete(`http://localhost:3000/asset/${asset._id}`).
      then( res => {
        if (!res.error) {
          props.setIsChanged(!props.isChanged);
        }
      });
  };

  return (
    <MainContainer>
      <InfoContainer>
        <Paragraph>{asset.name}</Paragraph>
        <Paragraph>{EJSON.parse(asset.value)}</Paragraph>
        <Paragraph>{props.percentaje}%</Paragraph>
      </InfoContainer>
      <ButtonContainer>
        <EditButton><FaPen /></EditButton>
        <DeleteButton onClick={deleteAsset}><FaTrashAlt /></DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
}