import React from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph, EditButton, DeleteButton } from "./styles";
import { FaTrashAlt, FaPen } from "react-icons/fa";

export const Asset = ({ name = "Default", value = 1000, percentaje = 100 }) => (
  <MainContainer>
    <InfoContainer>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{value}</Paragraph>
      <Paragraph>{percentaje}%</Paragraph>
    </InfoContainer>
    <ButtonContainer>
      <EditButton><FaPen /></EditButton>
      <DeleteButton><FaTrashAlt /></DeleteButton>
    </ButtonContainer>
  </MainContainer>
);