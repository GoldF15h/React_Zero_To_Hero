import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoriteContextProveider } from "./store/favorite-context";

ReactDOM.render(
  <FavoriteContextProveider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextProveider>,
  document.getElementById("root")
);
