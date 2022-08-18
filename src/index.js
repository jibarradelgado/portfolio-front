import React from 'react';
import { createRoot } from 'react-dom/client';
import Context from './Context';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import { Helmet } from 'react-helmet'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Context.Provider>
  <Helmet>
    <title>Assety - asset management</title>
    <meta name='description' content='Your app to watch all you financial assets in one place' />
  </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);