import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/context/ContextProvider";

// ReactDOM.render(
//   <ContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ContextProvider>
//   ,
//   document.getElementById('root')
// );

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
