import React from "react";
import ReactDOM from "react-dom/client";
import "@assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { router } from "@store/router";
import { Provider } from "react-redux";
import { store } from "@store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
