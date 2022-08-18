import React, { useContext, useImperativeHandle, useState } from 'react';
import { Context } from '../../Context';
import { UserForm } from '../../components/UserForm';
import { Container } from './styles';
import { Switch } from './styles';
import axios from 'axios';
import { config } from "../../config";

export const NotRegistered = () => {
  const [ isLogin, setIsLogin ] = useState(true);
  const { activateAuth } = useContext(Context);

  const handleSubmit = ({ email, password }) => {
    if (isLogin) {
      axios.post(`${config.host}${config.dev ? `:${config.port}`: ''}/auth/login`, {
      "username": email,
      "password": password
      }).then(res => {
        activateAuth(res.data.body);
      })
    }
  }

  const switchForm = () => {
    setIsLogin(!isLogin);
  }

  return (
    <Container>
      <UserForm title={!isLogin ? "Register" : "Login" } onSubmit={handleSubmit}/>
      {/* <Switch onClick={switchForm}>Want to {isLogin ? "register" : "login" }?</Switch> */}
    </Container>
  )
};