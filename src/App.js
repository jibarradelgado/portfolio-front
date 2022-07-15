import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";

export const App = () => {
  return (
    <Fragment >
      <Routes >
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </Fragment>
  );
}