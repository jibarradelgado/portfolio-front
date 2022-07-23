import React from 'react';
import { createRoot } from 'react-dom/client';
import Context from './Context';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Context.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);