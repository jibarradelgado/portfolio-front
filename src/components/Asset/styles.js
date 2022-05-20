import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 110px;
  width: 33.3vw;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`

export const Paragraph = styled.p`
  text-align: center;
  padding-bottom: 5px;
`
export const DeleteButton = styled.button`
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.5);
`
export const EditButton = styled.button`
  box-shadow: -3px 3px 5px 0px rgba(0,0,0,0.5);
`