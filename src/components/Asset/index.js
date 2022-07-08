import React from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph, EditButton, DeleteButton } from "./styles";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import axios from 'axios';

export const Asset = ({ id, name = "Default", value = 1000, percentaje = 100, isChanged, setIsChanged }) => {
  const deleteAsset = () => {
    axios.delete(`http://localhost:3000/asset/${id}`).
      then( res => {
        if (!res.error) {
          setIsChanged(!isChanged);
        }
      });
  };

  return (
    <MainContainer>
      <InfoContainer>
        <Paragraph>{name}</Paragraph>
        <Paragraph>{value}</Paragraph>
        <Paragraph>{percentaje}%</Paragraph>
      </InfoContainer>
      <ButtonContainer>
        <EditButton><FaPen /></EditButton>
        <DeleteButton onClick={deleteAsset}><FaTrashAlt /></DeleteButton>
      </ButtonContainer>
    </MainContainer>
  );
}