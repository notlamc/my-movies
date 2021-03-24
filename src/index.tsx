import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import ResetStyle from "./ResetStyle";

import GlobalStyle from "./GlobalStyle";

import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />

    <Helmet>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');
      </style>
    </Helmet>

    <GlobalStyle />

    <App />
  </React.StrictMode>,

  document.getElementById("root")
);
