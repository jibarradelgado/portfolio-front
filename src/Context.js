import React, { createContext, useState } from 'react';
import { getUser } from './auth';
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

  const value = {
    isAuth,
    userId,
    activateAuth: (token) => {
      setIsAuth(true);
      window.sessionStorage.setItem('token', token);
      const user = getUser(token);
      setUserId(user);
    },

    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem('token');
      setUserId("");
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
