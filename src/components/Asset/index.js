import React from "react";
import { MainContainer, InfoContainer, ButtonContainer, Paragraph } from "./styles";

export const Asset = ({ name = "Default", value = 1000 }) => (
  <MainContainer>
    <InfoContainer>
      <Paragraph>{name}</Paragraph>
      <Paragraph>{value}</Paragraph>
      <Paragraph>100%</Paragraph>
    </InfoContainer>
    <ButtonContainer>
      <button>Edit</button>
      <button>Delete</button>
    </ButtonContainer>
  </MainContainer>
);