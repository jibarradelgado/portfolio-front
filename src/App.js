import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import Context from "./Context";
import { NotRegistered } from "./pages/NotRegistered";
import { GlobalStyle } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <Fragment >
      <NavBar />
      <Context.Consumer>
        {
          ({ isAuth }) => 
          isAuth ? 
          <Routes >
            <Route path="/" element={<Home />} />
          </Routes>
          :
          <Routes >
            <Route path="/" element={<NotRegistered />} />
          </Routes>
        }
      </Context.Consumer>
      <GlobalStyle />
    </Fragment>
  );
}