import React, { createContext, useState } from 'react';
import { getUser, getAuth } from './auth';
export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const [userId, setUserId] = useState(() => {
    let user;
    if(isAuth) {
      user = getUser(isAuth);
    }
    return user;
  });
  const [authId, setAuthId] = useState(() => {
    let authId;
    if(isAuth) {
      authId = getAuth(isAuth);
    }
    return authId;
  });

  const value = {
    isAuth,
    userId,
    authId,
    activateAuth: (token) => {
      setIsAuth(token);
      window.sessionStorage.setItem('token', token);
      const user = getUser(token);
      const authId = getAuth(token);
      setUserId(user);
      setAuthId(authId);
    },

    removeAuth: () => {
      setIsAuth('');
      window.sessionStorage.removeItem('token');
      setUserId("");
      setAuthId("");
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
